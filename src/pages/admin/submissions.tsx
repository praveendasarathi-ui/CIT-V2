import React, { useState, useEffect } from 'react';

interface Submission {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  message: string;
  date: string;
}

const AdminSubmissions = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    setSubmissions(stored);
  }, []);

  const handleResponse = (submission: Submission) => {
    const emailBody = `Dear ${submission.firstName},

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
  };

  const exportCSV = () => {
    if (submissions.length === 0) {
      alert('No submissions to export');
      return;
    }
    
    const headers = ['Date', 'First Name', 'Last Name', 'Email', 'Company Phone', 'Message'];
    const rows = submissions.map(s => [
      new Date(s.date).toLocaleString(),
      s.firstName,
      s.lastName,
      s.email,
      s.company || 'Not provided',
      s.message
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
    
    alert(`Exported ${submissions.length} submissions to CSV`);
  };

  const refreshData = () => {
    const stored = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    setSubmissions(stored);
    alert('Data refreshed successfully');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Form Submissions</h1>
          <p className="text-gray-600">Manage and respond to customer inquiries</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Total Submissions: {submissions.length}</h2>
            <div className="space-x-4">
              <button
                onClick={refreshData}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
              >
                Refresh Data
              </button>
              <button
                onClick={exportCSV}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                disabled={submissions.length === 0}
              >
                Export CSV ({submissions.length})
              </button>
            </div>
          </div>
          
          {submissions.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="bg-blue-50 p-4 rounded">
                <div className="text-2xl font-bold text-blue-600">{submissions.length}</div>
                <div className="text-sm text-gray-600">Total</div>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <div className="text-2xl font-bold text-green-600">
                  {submissions.filter(s => {
                    const submissionDate = new Date(s.date);
                    const today = new Date();
                    return submissionDate.toDateString() === today.toDateString();
                  }).length}
                </div>
                <div className="text-sm text-gray-600">Today</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded">
                <div className="text-2xl font-bold text-yellow-600">
                  {submissions.filter(s => {
                    const submissionDate = new Date(s.date);
                    const weekAgo = new Date();
                    weekAgo.setDate(weekAgo.getDate() - 7);
                    return submissionDate > weekAgo;
                  }).length}
                </div>
                <div className="text-sm text-gray-600">This Week</div>
              </div>
              <div className="bg-purple-50 p-4 rounded">
                <div className="text-2xl font-bold text-purple-600">
                  {submissions.filter(s => {
                    const submissionDate = new Date(s.date);
                    const monthAgo = new Date();
                    monthAgo.setMonth(monthAgo.getMonth() - 1);
                    return submissionDate > monthAgo;
                  }).length}
                </div>
                <div className="text-sm text-gray-600">This Month</div>
              </div>
            </div>
          )}
        </div>

        {submissions.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <div className="text-gray-400 text-6xl mb-4">📧</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No submissions yet</h3>
            <p className="text-gray-500">Contact form submissions will appear here when received.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((submission) => (
              <div key={submission.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {submission.firstName} {submission.lastName}
                    </h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>📧 {submission.email}</div>
                      {submission.company && <div>📞 {submission.company}</div>}
                      <div>📅 {new Date(submission.date).toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      New
                    </span>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Message:</h4>
                  <p className="text-gray-800 leading-relaxed">{submission.message}</p>
                </div>
                
                <div className="flex justify-end">
                  <button
                    onClick={() => handleResponse(submission)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors flex items-center"
                  >
                    📧 Send Response
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSubmissions;