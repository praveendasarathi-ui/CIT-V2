import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  ArrowLeft,
  TestTube,
  User,
  Phone,
  MessageSquare
} from 'lucide-react';

const TestEmailPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testResult, setTestResult] = useState<{
    success: boolean;
    message: string;
    timestamp?: string;
  } | null>(null);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTestResult(null);

    try {
      const response = await fetch('https://api.altan.ai/galaxia/hook/I8Uk9A', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          test: true,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        const result = await response.text();
        setTestResult({
          success: true,
          message: 'Test email sent successfully! Check centurianit@gmail.com for the email.',
          timestamp: new Date().toLocaleString()
        });
        
        toast({
          title: "Test Email Sent",
          description: "Check centurianit@gmail.com for the test email.",
        });

        // Clear form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Test email error:', error);
      setTestResult({
        success: false,
        message: `Failed to send test email: ${error instanceof Error ? error.message : 'Unknown error'}`,
        timestamp: new Date().toLocaleString()
      });
      
      toast({
        title: "Test Failed",
        description: "Failed to send test email. Check console for details.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fillSampleData = () => {
    setFormData({
      name: 'John Smith',
      email: 'john.smith@example.com',
      phone: '+64 21 123 4567',
      message: 'This is a test message to verify email delivery to centurianit@gmail.com. Testing the contact form flow with sample data.'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => window.location.href = '/'}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Website</span>
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                  <TestTube className="h-6 w-6 text-blue-600" />
                  <span>Email Flow Test</span>
                </h1>
                <p className="text-gray-600">Test email delivery to centurianit@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Test Information */}
        <Alert className="mb-8 border-blue-200 bg-blue-50">
          <TestTube className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>Email Flow Test:</strong> This form sends data to the test webhook URL: 
            <code className="ml-1 px-2 py-1 bg-blue-100 rounded text-sm">https://api.altan.ai/galaxia/hook/I8Uk9A</code>
            <br />
            If configured correctly, you should receive an email at <strong>centurianit@gmail.com</strong> within a few minutes.
          </AlertDescription>
        </Alert>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Test Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>Test Contact Form</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline h-4 w-4 mr-1" />
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="border-2 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="inline h-4 w-4 mr-1" />
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    className="border-2 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline h-4 w-4 mr-1" />
                    Phone/Company
                  </label>
                  <Input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number or company name"
                    className="border-2 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="inline h-4 w-4 mr-1" />
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your test message"
                    rows={4}
                    required
                    className="border-2 focus:border-blue-500"
                  />
                </div>

                <div className="flex space-x-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Test...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Test Email
                      </>
                    )}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="outline"
                    onClick={fillSampleData}
                    className="border-2"
                  >
                    Fill Sample Data
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Test Results */}
          <div className="space-y-6">
            {/* Test Result */}
            {testResult && (
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {testResult.success ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    )}
                    <span>Test Result</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Alert className={testResult.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
                    <AlertDescription className={testResult.success ? "text-green-800" : "text-red-800"}>
                      <strong>{testResult.success ? "Success!" : "Failed!"}</strong>
                      <br />
                      {testResult.message}
                      {testResult.timestamp && (
                        <>
                          <br />
                          <small>Time: {testResult.timestamp}</small>
                        </>
                      )}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            )}

            {/* Instructions */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TestTube className="h-5 w-5 text-blue-600" />
                  <span>Test Instructions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">1</div>
                    <div>
                      <p className="font-medium">Fill the form</p>
                      <p className="text-sm text-gray-600">Enter test data or click "Fill Sample Data"</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">2</div>
                    <div>
                      <p className="font-medium">Submit the form</p>
                      <p className="text-sm text-gray-600">Click "Send Test Email" to trigger the webhook</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">3</div>
                    <div>
                      <p className="font-medium">Check your email</p>
                      <p className="text-sm text-gray-600">Look for an email at <strong>centurianit@gmail.com</strong></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">4</div>
                    <div>
                      <p className="font-medium">Verify delivery</p>
                      <p className="text-sm text-gray-600">Email should arrive within 1-2 minutes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Details */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-gray-700">Technical Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-600">
                <div><strong>Webhook URL:</strong> https://api.altan.ai/galaxia/hook/I8Uk9A</div>
                <div><strong>Method:</strong> POST</div>
                <div><strong>Content-Type:</strong> application/json</div>
                <div><strong>Target Email:</strong> centurianit@gmail.com</div>
                <div><strong>Gmail Connection ID:</strong> 013b1c15-bfcc-48e2-83bc-4da119439e6d</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestEmailPage;