import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center gap-2 hover:bg-gray-100"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            <h1 className="text-lg md:text-2xl font-bold text-gray-900 truncate px-4">Terms of Service</h1>
            <div className="w-12 md:w-24"></div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <Card className="border-0 shadow-xl">
          <CardContent className="p-6 md:p-12">
            <div className="prose prose-sm md:prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                <strong>Effective Date:</strong> January 1, 2024<br />
                <strong>Last Updated:</strong> January 1, 2024
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-4">
                  Welcome to CenturianIT. These Terms of Service ("Terms") govern your access to and use of our website, services, and products. By accessing or using our services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-600">
                  If you do not agree to these Terms, you may not access or use our services. We reserve the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
                <p className="text-gray-600 mb-4">
                  CenturianIT provides comprehensive technology solutions including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Analytics and Business Intelligence</li>
                  <li>Process Automation and Workflow Optimization</li>
                  <li>Enterprise Resource Planning (ERP) solutions</li>
                  <li>Enterprise Mobility Management</li>
                  <li>Digital Transformation services</li>
                  <li>Custom Software Development</li>
                  <li>AI Agent Services</li>
                  <li>AI and Infrastructure Management</li>
                  <li>Intra-Cloud Migration services</li>
                </ul>
                <p className="text-gray-600">
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Obligations</h2>
                <p className="text-gray-600 mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Not use our services for any unlawful or unauthorized purpose</li>
                  <li>Not interfere with or disrupt the integrity or performance of our services</li>
                  <li>Not attempt to gain unauthorized access to our systems or networks</li>
                  <li>Comply with all applicable local, state, national, and international laws</li>
                  <li>Not transmit any viruses, malware, or other malicious code</li>
                  <li>Not impersonate any person or entity or misrepresent your affiliation</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property Rights</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Property</h3>
                <p className="text-gray-600 mb-4">
                  All content, features, and functionality on our website and in our services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of CenturianIT or its licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Your License</h3>
                <p className="text-gray-600 mb-4">
                  Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our services for your internal business purposes only.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Materials</h3>
                <p className="text-gray-600 mb-4">
                  You retain all rights to any materials, data, or content you provide to us. By providing such materials, you grant us a license to use them solely for the purpose of delivering our services to you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Level and Availability</h2>
                <p className="text-gray-600 mb-4">
                  While we strive to maintain high availability and performance:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>We do not guarantee uninterrupted or error-free service</li>
                  <li>Scheduled maintenance may require temporary service interruptions</li>
                  <li>We are not responsible for delays or failures caused by circumstances beyond our reasonable control</li>
                  <li>Specific service level agreements (SLAs) are defined in individual service contracts</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment Terms</h2>
                <p className="text-gray-600 mb-4">
                  For paid services:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>All fees are quoted in the currency specified in your service agreement</li>
                  <li>Payment is due according to the terms specified in your invoice or contract</li>
                  <li>Late payments may incur interest charges and service suspension</li>
                  <li>All fees are non-refundable unless otherwise stated in your service agreement</li>
                  <li>We reserve the right to change our fees with 30 days' notice</li>
                  <li>You are responsible for all applicable taxes</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Confidentiality</h2>
                <p className="text-gray-600 mb-4">
                  Both parties agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Maintain the confidentiality of all confidential information shared</li>
                  <li>Use confidential information only for the purposes of the service relationship</li>
                  <li>Implement reasonable security measures to protect confidential information</li>
                  <li>Not disclose confidential information to third parties without prior written consent</li>
                  <li>Return or destroy confidential information upon termination of services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>CenturianIT shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Our total liability shall not exceed the amount paid by you for the services in the 12 months preceding the claim</li>
                  <li>We are not liable for any loss of data, profits, revenue, or business opportunities</li>
                  <li>We are not responsible for third-party products, services, or websites</li>
                </ul>
                <p className="text-gray-600">
                  Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability, so some of the above limitations may not apply to you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Warranties and Disclaimers</h2>
                <p className="text-gray-600 mb-4">
                  Our services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Warranties of merchantability</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement</li>
                  <li>Uninterrupted or error-free operation</li>
                  <li>Accuracy or completeness of content</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
                <p className="text-gray-600 mb-4">
                  You agree to indemnify, defend, and hold harmless CenturianIT and its officers, directors, employees, agents, and affiliates from any claims, liabilities, damages, losses, and expenses arising from:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another party</li>
                  <li>Your use or misuse of our services</li>
                  <li>Your breach of any applicable laws or regulations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
                <p className="text-gray-600 mb-4">
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Breach of these Terms</li>
                  <li>Non-payment of fees</li>
                  <li>Illegal or unauthorized use of services</li>
                  <li>At our discretion for any other reason</li>
                </ul>
                <p className="text-gray-600">
                  Upon termination, your right to use the services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law and Dispute Resolution</h2>
                <p className="text-gray-600 mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of New Zealand, without regard to its conflict of law provisions.
                </p>
                <p className="text-gray-600 mb-4">
                  Any disputes arising from these Terms or our services shall first be attempted to be resolved through good faith negotiations. If negotiations fail, disputes shall be resolved through binding arbitration in Auckland, New Zealand, in accordance with the Arbitration Act 1996.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. General Provisions</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Entire Agreement</h3>
                <p className="text-gray-600 mb-4">
                  These Terms constitute the entire agreement between you and CenturianIT regarding the use of our services.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Severability</h3>
                <p className="text-gray-600 mb-4">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Waiver</h3>
                <p className="text-gray-600 mb-4">
                  No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Assignment</h3>
                <p className="text-gray-600 mb-4">
                  You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations under these Terms without restriction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-900 font-semibold mb-2">CenturianIT</p>
                  <p className="text-gray-600 mb-1">Email: <a href="mailto:info@centurianit.co" className="text-blue-600 hover:text-blue-800 underline">info@centurianit.co</a></p>
                  <p className="text-gray-600 mb-1">Phone (NZ): +64 212 523270</p>
                  <p className="text-gray-600 mb-1">Phone (India): +91 6366 246 792</p>
                  <p className="text-gray-600 mt-3">
                    <strong>Auckland Office:</strong><br />
                    43 Huia Road, Papatoetoe<br />
                    Auckland 2025, New Zealand
                  </p>
                  <p className="text-gray-600 mt-3">
                    <strong>Bangalore Office:</strong><br />
                    Bangalore, Karnataka<br />
                    India
                  </p>
                </div>
              </section>

              <section>
                <p className="text-gray-600 text-sm italic">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TermsOfService;