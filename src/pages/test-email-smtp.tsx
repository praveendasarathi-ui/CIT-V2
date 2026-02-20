import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestEmailSMTP = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    company: '+1234567890',
    message: 'This is a test email to verify Formsubmit integration is working correctly.'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testResult, setTestResult] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const testEmailSending = async () => {
    setIsSubmitting(true);
    setTestResult(null);

    try {
      console.log('=== TESTING EMAIL SERVICES ===');
      console.log('Test data:', formData);

      const emailPayload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        recordId: 'TEST_' + Date.now()
      };

      // Import email functions dynamically
      const { sendContactEmail, sendFormsubmitEmail, sendNetlifyEmail, sendFallbackEmail } = await import('../lib/email');

      // Try Formsubmit first (primary method - no setup required)
      console.log('Testing Formsubmit (primary)...');
      const formsubmitResult = await sendFormsubmitEmail(emailPayload);

      if (formsubmitResult.success) {
        console.log('=== FORMSUBMIT TEST SUCCESSFUL ===');
        console.log('Method used:', formsubmitResult.method);
        
        setTestResult({
          success: true,
          method: formsubmitResult.method,
          message: 'Email sent successfully via Formsubmit',
          details: formsubmitResult
        });

        toast({
          title: "Email Test Successful!",
          description: `Email sent successfully via ${formsubmitResult.method}`,
        });
      } else {
        console.log('Formsubmit failed, testing Web3Forms...');
        
        // Try Web3Forms as first fallback
        const web3formsResult = await sendContactEmail(emailPayload);
        
        if (web3formsResult.success) {
          console.log('=== WEB3FORMS TEST SUCCESSFUL ===');
          console.log('Method used:', web3formsResult.method);
          
          setTestResult({
            success: true,
            method: web3formsResult.method,
            message: 'Email sent successfully via Web3Forms (fallback)',
            details: web3formsResult
          });

          toast({
            title: "Email Test Successful!",
            description: `Email sent successfully via ${web3formsResult.method} (fallback)`,
          });
        } else {
          console.log('Web3Forms failed, testing Netlify...');
          
          // Try Netlify as second fallback
          const netlifyResult = await sendNetlifyEmail(emailPayload);
          
          if (netlifyResult.success) {
            console.log('=== NETLIFY TEST SUCCESSFUL ===');
            console.log('Method used:', netlifyResult.method);
            
            setTestResult({
              success: true,
              method: netlifyResult.method,
              message: 'Email sent successfully via Netlify (second fallback)',
              details: netlifyResult
            });

            toast({
              title: "Email Test Successful!",
              description: `Email sent successfully via ${netlifyResult.method} (second fallback)`,
            });
          } else {
            console.log('Netlify failed, testing EmailJS...');
            
            // Try EmailJS as final fallback
            const emailjsResult = await sendFallbackEmail(emailPayload);
            
            if (emailjsResult.success) {
              console.log('=== EMAILJS TEST SUCCESSFUL ===');
              console.log('Method used:', emailjsResult.method);
              
              setTestResult({
                success: true,
                method: emailjsResult.method,
                message: 'Email sent successfully via EmailJS (final fallback)',
                details: emailjsResult
              });

              toast({
                title: "Email Test Successful!",
                description: `Email sent successfully via ${emailjsResult.method} (final fallback)`,
              });
            } else {
              console.error('=== ALL EMAIL SERVICES FAILED ===');
              console.error('Formsubmit error:', formsubmitResult.error);
              console.error('Web3Forms error:', web3formsResult.error);
              console.error('Netlify error:', netlifyResult.error);
              console.error('EmailJS error:', emailjsResult.error);
              
              setTestResult({
                success: false,
                error: 'All email services failed',
                details: {
                  formsubmit: formsubmitResult,
                  web3forms: web3formsResult,
                  netlify: netlifyResult,
                  emailjs: emailjsResult
                }
              });

              toast({
                title: "Email Test Failed",
                description: 'All email services failed',
                variant: "destructive",
              });
            }
          }
        }
      }

    } catch (error) {
      console.error('Email test error:', error);
      setTestResult({
        success: false,
        error: error.message,
        details: error
      });
      
      toast({
        title: "Test Error",
        description: `Failed to test email: ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Formsubmit Email Test</h1>
          <p className="text-gray-600">
            Test the email integration using Formsubmit (primary), Web3Forms (fallback), Netlify (second fallback), and EmailJS (final fallback) to ensure emails are being sent correctly from centurianit@gmail.com
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Test Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Test Form
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <Input 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleInputChange} 
                    placeholder="Test" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <Input 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleInputChange} 
                    placeholder="User" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  placeholder="test@example.com" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <Input 
                  name="company" 
                  value={formData.company} 
                  onChange={handleInputChange} 
                  placeholder="+1234567890" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  placeholder="Test message..." 
                  rows={4}
                />
              </div>
              
              <Button 
                onClick={testEmailSending}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {isSubmitting ? 'Testing Email...' : 'Test Email Sending'}
              </Button>
            </CardContent>
          </Card>

          {/* Test Results */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {testResult?.success ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : testResult && !testResult.success ? (
                  <AlertCircle className="h-5 w-5 text-red-500" />
                ) : (
                  <Mail className="h-5 w-5" />
                )}
                Test Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!testResult ? (
                <div className="text-center py-8 text-gray-500">
                  <Mail className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Click "Test Email Sending" to run the test</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Status */}
                  <div className={`p-4 rounded-lg ${testResult.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {testResult.success ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      )}
                      <span className={`font-semibold ${testResult.success ? 'text-green-800' : 'text-red-800'}`}>
                        {testResult.success ? 'Email Sent Successfully!' : 'Email Test Failed'}
                      </span>
                    </div>
                    <p className={`text-sm ${testResult.success ? 'text-green-700' : 'text-red-700'}`}>
                      {testResult.message}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="space-y-3">
                    {testResult.status && (
                      <div>
                        <span className="font-medium text-gray-700">HTTP Status:</span>
                        <span className="ml-2 text-gray-600">{testResult.status}</span>
                      </div>
                    )}
                    
                    {testResult.method && (
                      <div>
                        <span className="font-medium text-gray-700">Email Method:</span>
                        <span className="ml-2 text-gray-600">{testResult.method}</span>
                      </div>
                    )}
                    
                    {testResult.details && (
                      <div>
                        <span className="font-medium text-gray-700">Raw Response:</span>
                        <pre className="mt-2 p-3 bg-gray-100 rounded text-xs overflow-auto">
                          {JSON.stringify(testResult.details, null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <Card className="mt-8 border-0 shadow-xl">
          <CardHeader>
            <CardTitle>Email Services Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Current Email Setup:</h4>
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h5 className="font-medium text-blue-900 mb-2">Primary Service: Formsubmit</h5>
                    <p className="text-blue-700 text-sm">
                      Using Formsubmit service as the primary email delivery method.
                      This service handles form submissions and forwards them to centurianit@gmail.com.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h5 className="font-medium text-purple-900 mb-2">Fallback Service: Web3Forms</h5>
                    <p className="text-purple-700 text-sm">
                      Web3Forms is used as a backup service if Formsubmit fails. This provides redundancy 
                      to ensure email delivery reliability.
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h5 className="font-medium text-red-900 mb-2">Second Fallback Service: Netlify</h5>
                    <p className="text-red-700 text-sm">
                      Netlify is used as a second fallback service if both Formsubmit and Web3Forms fail.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h5 className="font-medium text-green-900 mb-2">Final Fallback Service: EmailJS</h5>
                    <p className="text-green-700 text-sm">
                      EmailJS is used as a final fallback service if all other services fail.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How it works:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Form submission triggers the primary email service (Formsubmit)</li>
                  <li>If Formsubmit succeeds, the email is delivered to centurianit@gmail.com</li>
                  <li>If Formsubmit fails, the system automatically tries the fallback service (Web3Forms)</li>
                  <li>If Web3Forms fails, the system automatically tries the second fallback service (Netlify)</li>
                  <li>If Netlify fails, the system automatically tries the final fallback service (EmailJS)</li>
                </ol>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h5 className="font-medium text-green-900 mb-2">Benefits of this approach:</h5>
                <ul className="list-disc list-inside space-y-1 text-green-700 text-sm">
                  <li>No server-side configuration required</li>
                  <li>Works in client-side React applications</li>
                  <li>Redundant email delivery for reliability</li>
                  <li>Easy to test and debug</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TestEmailSMTP;