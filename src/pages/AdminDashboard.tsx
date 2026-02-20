import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  LogOut,
  Users,
  FileText,
  BarChart3,
  Settings,
  Shield,
  Activity,
  Mail,
  Calendar,
  TrendingUp,
  Database,
  Globe,
  Clock,
  AlertCircle,
  Eye,
  Download,
  Phone,
  UserCheck,
  UserX,
  MessageSquare,
  CheckCircle,
  MessageCircle
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

interface ContactSubmission {
  id: number;
  first_name: string;
  last_name: string;
  name: string;
  email: string;
  phone?: string;
  company_phone?: string;
  message: string;
  status: string;
  source: string;
  created_at: string;
  crm_status?: string;
  last_contacted?: string;
  notes?: string;
}

const CRM_STATUSES = [
  { value: 'new', label: 'New', icon: Mail, color: 'bg-blue-100 text-blue-800' },
  { value: 'contacted', label: 'Contacted', icon: Phone, color: 'bg-green-100 text-green-800' },
  { value: 'follow_up', label: 'Follow Up', icon: Clock, color: 'bg-yellow-100 text-yellow-800' },
  { value: 'not_reachable', label: 'Not Reachable', icon: UserX, color: 'bg-red-100 text-red-800' },
  { value: 'not_interested', label: 'Not Interested', icon: UserX, color: 'bg-gray-100 text-gray-800' },
  { value: 'qualified', label: 'Qualified Lead', icon: UserCheck, color: 'bg-purple-100 text-purple-800' },
  { value: 'converted', label: 'Converted', icon: CheckCircle, color: 'bg-emerald-100 text-emerald-800' }
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [adminUsername, setAdminUsername] = useState('');
  const [loginTime, setLoginTime] = useState('');
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('centurianit_admin_logged_in');
    if (isLoggedIn !== 'true') {
      window.location.href = '/admin';
      return;
    }

    // Get admin info
    const username = localStorage.getItem('centurianit_admin_username');
    const loginTimeStamp = localStorage.getItem('centurianit_admin_login_time');

    setAdminUsername(username || 'Admin');
    if (loginTimeStamp) {
      const date = new Date(loginTimeStamp);
      setLoginTime(date.toLocaleString());
    }

    // Load contact submissions
    loadContactSubmissions();
  }, []);

  const loadContactSubmissions = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading contact submissions:', error);
        return;
      }

      setContactSubmissions(data || []);
    } catch (error) {
      console.error('Error loading contact submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateCRMStatus = async (submissionId: number, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({
          status: newStatus,
          notes: `Status updated to ${newStatus} on ${new Date().toLocaleString()}`
        })
        .eq('id', submissionId);

      if (error) {
        console.error('Error updating CRM status:', error);
        alert('Failed to update status. Please try again.');
        return;
      }

      // Update local state
      setContactSubmissions(prev =>
        prev.map(submission =>
          submission.id === submissionId
            ? { ...submission, status: newStatus, notes: `Status updated to ${newStatus} on ${new Date().toLocaleString()}` }
            : submission
        )
      );

      const statusLabel = CRM_STATUSES.find(s => s.value === newStatus)?.label || newStatus;
      alert(`Status updated to: ${statusLabel}`);
    } catch (error) {
      console.error('Error updating CRM status:', error);
      alert('Failed to update status. Please try again.');
    }
  };

  const handleLogout = () => {
    // Clear all admin session data
    localStorage.removeItem('centurianit_admin_logged_in');
    localStorage.removeItem('centurianit_admin_username');
    localStorage.removeItem('centurianit_admin_login_time');

    // Redirect to login
    window.location.href = '/admin';
  };

  const handleResponse = (submission: ContactSubmission) => {
    const emailBody = `Dear ${submission.first_name},

Thank you for contacting CenturianIT. We have received your message and will respond shortly.

Your original message:
"${submission.message}"

We appreciate your interest in our services and will get back to you within 24 hours.

Best regards,
CenturianIT Team
centurianit@gmail.com
+64 212 523270 (Auckland)
+91 6366 246 792 (Bangalore)`;

    const mailtoLink = `mailto:${submission.email}?subject=Re: Your Contact Form Submission&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_self');

    // Automatically update status to 'contacted' after sending response
    setTimeout(() => {
      updateCRMStatus(submission.id, 'contacted');
    }, 1000);
  };

  const exportCSV = () => {
    if (contactSubmissions.length === 0) {
      alert('No submissions to export');
      return;
    }

    const headers = ['Date', 'First Name', 'Last Name', 'Email', 'Phone', 'Message', 'Status', 'Notes', 'Source'];
    const rows = contactSubmissions.map(s => [
      new Date(s.created_at).toLocaleString(),
      s.first_name || s.name?.split(' ')[0] || '',
      s.last_name || s.name?.split(' ')[1] || '',
      s.email,
      s.phone || s.company_phone || 'Not provided',
      s.message,
      s.status || 'new',
      s.notes || 'No notes',
      s.source
    ]);

    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contact-submissions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    alert(`Exported ${contactSubmissions.length} submissions to CSV`);
  };

  const getCRMStatusInfo = (status?: string) => {
    return CRM_STATUSES.find(s => s.value === (status || 'new')) || CRM_STATUSES[0];
  };

  // Calculate stats from real data
  const todaySubmissions = contactSubmissions.filter(s => {
    const submissionDate = new Date(s.created_at);
    const today = new Date();
    return submissionDate.toDateString() === today.toDateString();
  }).length;

  const thisWeekSubmissions = contactSubmissions.filter(s => {
    const submissionDate = new Date(s.created_at);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return submissionDate > weekAgo;
  }).length;

  const thisMonthSubmissions = contactSubmissions.filter(s => {
    const submissionDate = new Date(s.created_at);
    const monthAgo = new Date();
    monthAgo.setMonth(monthAgo.getMonth() - 1);
    return submissionDate > monthAgo;
  }).length;

  const contactedCount = contactSubmissions.filter(s => s.status === 'contacted').length;

  const dashboardStats = [
    {
      title: 'Total Submissions',
      value: contactSubmissions.length.toString(),
      change: `${contactSubmissions.length} total`,
      icon: Mail,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Contacted',
      value: contactedCount.toString(),
      change: 'Responses sent',
      icon: Phone,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'This Week',
      value: thisWeekSubmissions.toString(),
      change: 'This week',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'This Month',
      value: thisMonthSubmissions.toString(),
      change: 'This month',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Recent activities from actual submissions
  const recentActivities = contactSubmissions.slice(0, 5).map(submission => ({
    action: 'New contact form submission',
    user: `${(submission.first_name && submission.last_name)
      ? `${submission.first_name} ${submission.last_name}`
      : submission.name || 'Unknown Name'
      } (${submission.email})`,
    time: new Date(submission.created_at).toLocaleString(),
    type: 'contact'
  }));

  const quickActions = [
    {
      title: 'View All Submissions',
      description: `View all ${contactSubmissions.length} contact form submissions`,
      icon: Eye,
      color: 'bg-blue-500',
      onClick: () => {
        // Scroll to submissions section
        document.getElementById('submissions-section')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      title: 'Export Data',
      description: 'Download submissions as CSV file',
      icon: Download,
      color: 'bg-green-500',
      onClick: exportCSV
    },
    {
      title: 'Refresh Data',
      description: 'Reload latest submissions from database',
      icon: Database,
      color: 'bg-purple-500',
      onClick: loadContactSubmissions
    },
    {
      title: 'Live Chat',
      description: 'Respond to customer chat messages',
      icon: MessageCircle,
      color: 'bg-pink-500',
      onClick: () => navigate('/admin/chat')
    },
    {
      title: 'System Settings',
      description: 'Configure system preferences',
      icon: Settings,
      color: 'bg-orange-500'
    },
    {
      title: 'Analytics',
      description: 'View detailed analytics and reports',
      icon: BarChart3,
      color: 'bg-cyan-500'
    },
    {
      title: 'Security',
      description: 'Security settings and monitoring',
      icon: Shield,
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 md:h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg font-bold text-sm md:text-lg">
                  CenturianIT
                </div>
                <Badge className="ml-2 md:ml-3 bg-green-100 text-green-800 text-xs">Admin</Badge>
              </div>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="text-xs md:text-sm text-gray-600 hidden sm:block">
                Welcome, <span className="font-semibold">{adminUsername}</span>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm px-2 md:px-4 py-1 md:py-2"
              >
                <LogOut className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">
            Last login: {loginTime}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-500 font-medium">{stat.change}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer group"
                      onClick={action.onClick}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <action.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {action.title}
                          </h3>
                          <p className="text-sm text-gray-600">{action.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2" />
                  Recent Submissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {loading ? (
                    <div className="text-center py-4">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                      <p className="text-gray-500 mt-2">Loading...</p>
                    </div>
                  ) : recentActivities.length > 0 ? (
                    recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex-shrink-0">
                          <Mail className="h-4 w-4 text-blue-500 mt-1" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-600 truncate">{activity.user}</p>
                          <p className="text-xs text-gray-500 flex items-center mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-4">
                      <Mail className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">No submissions yet</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Submissions Section */}
        <div id="submissions-section">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Form Submissions ({contactSubmissions.length})
                </CardTitle>
                <div className="flex space-x-2">
                  <Button
                    onClick={loadContactSubmissions}
                    variant="outline"
                    size="sm"
                    disabled={loading}
                  >
                    {loading ? 'Loading...' : 'Refresh'}
                  </Button>
                  <Button
                    onClick={exportCSV}
                    variant="outline"
                    size="sm"
                    disabled={contactSubmissions.length === 0}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Export CSV
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="text-gray-500 mt-4">Loading submissions...</p>
                </div>
              ) : contactSubmissions.length === 0 ? (
                <div className="text-center py-8">
                  <Mail className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No submissions yet</h3>
                  <p className="text-gray-500">Contact form submissions will appear here when received.</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {contactSubmissions.slice(0, 10).map((submission) => {
                    const crmStatus = getCRMStatusInfo(submission.status);
                    const StatusIcon = crmStatus.icon;

                    return (
                      <div key={submission.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {(submission.first_name && submission.last_name)
                                ? `${submission.first_name} ${submission.last_name}`
                                : submission.name || 'Unknown Name'
                              }
                            </h3>
                            <div className="text-sm text-gray-600 space-y-1">
                              <div> {submission.email}</div>
                              {(submission.phone || submission.company_phone) && (
                                <div> {submission.phone || submission.company_phone}</div>
                              )}
                              <div> {new Date(submission.created_at).toLocaleString()}</div>
                              {submission.notes && submission.notes.includes('Status updated') && (
                                <div> {submission.notes}</div>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col space-y-2">
                            <Badge className={crmStatus.color}>
                              <StatusIcon className="h-3 w-3 mr-1" />
                              {crmStatus.label}
                            </Badge>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-3 mb-3">
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Message:</h4>
                          <p className="text-gray-800 text-sm leading-relaxed">{submission.message}</p>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <Select
                              value={submission.status || 'new'}
                              onValueChange={(value) => updateCRMStatus(submission.id, value)}
                            >
                              <SelectTrigger className="w-40">
                                <SelectValue placeholder="Update status" />
                              </SelectTrigger>
                              <SelectContent>
                                {CRM_STATUSES.map((status) => {
                                  const Icon = status.icon;
                                  return (
                                    <SelectItem key={status.value} value={status.value}>
                                      <div className="flex items-center">
                                        <Icon className="h-4 w-4 mr-2" />
                                        {status.label}
                                      </div>
                                    </SelectItem>
                                  );
                                })}
                              </SelectContent>
                            </Select>
                          </div>

                          <Button
                            onClick={() => handleResponse(submission)}
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <Mail className="h-4 w-4 mr-1" />
                            Send Response
                          </Button>
                        </div>
                      </div>
                    );
                  })}

                  {contactSubmissions.length > 10 && (
                    <div className="text-center py-4 border-t">
                      <p className="text-sm text-gray-500">
                        Showing 10 of {contactSubmissions.length} submissions.
                        <Button variant="link" onClick={exportCSV} className="ml-1 p-0 h-auto">
                          Export all to CSV
                        </Button>
                      </p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <div className="mt-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Website</h3>
                  <p className="text-sm text-green-600">Online</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Database className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Database</h3>
                  <p className="text-sm text-green-600">Connected</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Security</h3>
                  <p className="text-sm text-green-600">Secure</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;