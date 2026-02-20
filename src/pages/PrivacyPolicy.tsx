import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Privacy Policy</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border-0 shadow-xl">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                <strong>Effective Date:</strong> January 1, 2024<br />
                <strong>Last Updated:</strong> February 20, 2026
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600 mb-4">
                  CenturianIT ("we", "our", or "us") is committed to protecting your privacy and handling your personal data responsibly. This Privacy Policy explains how we collect, use, process, and protect your personal information when you visit our website, use our services, or interact with us.
                </p>
                <p className="text-gray-600 mb-2">
                  Because we operate globally with offices in New Zealand and India, the applicable privacy law may differ depending on:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Your geographic location (demography)</li>
                  <li>The type of data collected</li>
                  <li>The nature of the service you use</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Which Privacy Law Applies to You (Clear Demographic Applicability)</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">If You Are Located in India</h3>
                <p className="text-gray-600 mb-4">
                  If you are accessing our website or services from India, your personal data will be processed in accordance with <strong>India’s Digital Personal Data Protection Act (DPDP Act), 2023</strong>. This applies especially when:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>You fill contact forms</li>
                  <li>Provide personal details for services</li>
                  <li>Engage with our support or marketing communications</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">If You Are Located in New Zealand</h3>
                <p className="text-gray-600 mb-4">
                  If you are located in New Zealand, your personal information will be handled in accordance with <strong>New Zealand Privacy Act 2020</strong> and its Information Privacy Principles (IPPs). This applies to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Client engagements</li>
                  <li>Business communications</li>
                  <li>Service delivery and contractual data processing</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">If You Are Located Outside India or New Zealand</h3>
                <p className="text-gray-600">
                  If you are located in another country, we apply globally accepted privacy standards and comply with applicable local laws where required.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Personal Information You Provide (Consent-Based)</h3>
                <p className="text-gray-600 mb-4">
                  We collect personal information only when you voluntarily provide it, including when you:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Fill out contact forms</li>
                  <li>Request our services</li>
                  <li>Subscribe to newsletters</li>
                  <li>Apply for jobs</li>
                  <li>Communicate with our team</li>
                </ul>
                <p className="text-gray-600 mb-4">
                  This may include: Full Name, Email Address, Phone Number, Company Name, Job Title, and any additional information you choose to provide. Under the DPDP Act, this data is collected only for specific, lawful purposes with your consent.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Automatically Collected Information</h3>
                <p className="text-gray-600 mb-4">
                  When you visit our website, we may automatically collect:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device type and identifiers</li>
                  <li>Pages visited and time spent</li>
                  <li>Referral sources</li>
                  <li>Cookies and usage analytics</li>
                </ul>
                <p className="text-gray-600">
                  This helps us improve security, performance, and user experience.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Legal Basis for Processing Personal Data</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">For Users in India (DPDP Compliance)</h3>
                <p className="text-gray-600 mb-4">
                  We process personal data based on explicit consent, legitimate business purposes, and legal obligations. We do NOT process personal data for purposes beyond what was consented to.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">For Users in New Zealand</h3>
                <p className="text-gray-600">
                  We process personal data in line with purpose limitation, data minimization, transparency and accountability principles.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  We use collected information to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Provide and operate our services</li>
                  <li>Respond to inquiries and support requests</li>
                  <li>Improve website performance and user experience</li>
                  <li>Send service-related updates and communications</li>
                  <li>Conduct analytics and security monitoring</li>
                  <li>Comply with legal and regulatory obligations</li>
                  <li>Prevent fraud, misuse, or security threats</li>
                </ul>
                <p className="text-gray-600 font-semibold">We do NOT sell personal data.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Consent and Withdrawal (DPDP Specific)</h2>
                <p className="text-gray-600 mb-4">
                  For users in India:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Personal data is processed only after obtaining clear and informed consent</li>
                  <li>You may withdraw consent at any time by emailing: <a href="mailto:info@centurianit.co" className="text-blue-600 hover:text-blue-800 underline">info@centurianit.co</a></li>
                  <li>Withdrawal of consent will not affect processing already carried out lawfully</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. AI, Analytics, and Automated Processing</h2>
                <p className="text-gray-600 mb-4">
                  We may use analytics tools, automation platforms, and AI-assisted systems to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Improve services</li>
                  <li>Analyze website usage</li>
                  <li>Enhance customer support efficiency</li>
                </ul>
                <p className="text-gray-600">
                  We do not use automated decision-making that produces legal or significant effects on users without human oversight.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Information Sharing and Disclosure</h2>
                <p className="text-gray-600 mb-4">
                  We may share your information only in the following cases:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li><strong>Service Providers:</strong> Trusted third-party vendors who process data under strict confidentiality and security obligations.</li>
                  <li><strong>Legal Requirements:</strong> If required by law, regulatory authorities, or to protect our legal rights and security.</li>
                  <li><strong>Business Transfers:</strong> In case of merger, acquisition, or restructuring.</li>
                  <li><strong>With Your Explicit Consent:</strong> Where you have clearly agreed to such sharing.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
                <p className="text-gray-600 mb-4">
                  As a global organization, your data may be processed in India, New Zealand, and secure cloud infrastructure locations. We ensure appropriate safeguards such as:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Secure contractual agreements</li>
                  <li>Encryption and access controls</li>
                  <li>Compliance with applicable data protection laws</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Data Retention</h2>
                <p className="text-gray-600 mb-4">
                  We retain personal data only for as long as necessary to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Fulfill the purpose of collection</li>
                  <li>Meet legal and regulatory obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                </ul>
                <p className="text-gray-600">
                  After this period, data is securely deleted or anonymized.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Data Security Measures</h2>
                <p className="text-gray-600 mb-4">
                  We implement industry-standard safeguards, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Encryption (in transit and at rest)</li>
                  <li>Role-based access controls</li>
                  <li>Security audits and monitoring</li>
                  <li>Secure cloud hosting environments</li>
                  <li>Employee data protection training</li>
                </ul>
                <p className="text-gray-600 italic">
                  However, no online system can guarantee 100% security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Your Privacy Rights</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">For Users in India (DPDP Rights)</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request erasure of personal data</li>
                  <li>Withdraw consent</li>
                  <li>Seek grievance redressal</li>
                  <li>Nominate another person to exercise rights (as per DPDP Act)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">For Users in New Zealand</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                  <li>Access personal information we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request explanation of data usage</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 mb-4">
                  We use cookies and similar technologies to improve website functionality, analyze traffic patterns, and enhance user experience. You can disable cookies through your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Children’s Privacy</h2>
                <p className="text-gray-600 mb-4">
                  Our services are not directed at individuals under the age of 16. We do not knowingly collect personal data from children. If such data is identified, it will be promptly deleted.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Grievance Officer (DPDP Compliance)</h2>
                <p className="text-gray-600 mb-4">
                  For data protection concerns, complaints, or rights requests:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-1"><strong>Grievance Officer:</strong> Data Protection Officer</p>
                  <p className="text-gray-600 mb-1"><strong>Email:</strong> <a href="mailto:info@centurianit.co" className="text-blue-600 hover:text-blue-800 underline">info@centurianit.co</a></p>
                  <p className="text-gray-600"><strong>Response Timeline:</strong> Within 15–30 days as per applicable law</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Updates to This Privacy Policy</h2>
                <p className="text-gray-600 mb-4">
                  We may update this Privacy Policy periodically to reflect legal changes, regulatory requirements, and service improvements. The latest version will always be available on our website with an updated “Last Updated” date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Contact Information</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-900 font-semibold mb-2">CenturianIT</p>
                  <p className="text-gray-600 mb-1">Email: <a href="mailto:info@centurianit.co" className="text-blue-600 hover:text-blue-800 underline">info@centurianit.co</a></p>
                  <p className="text-gray-600 mb-1">Phone (NZ): +64 21 252 3270</p>
                  <p className="text-gray-600 mb-1">Phone (India): +91 6366 246 792</p>
                  <div className="grid md:grid-cols-2 gap-6 mt-4 pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-gray-900 font-semibold mb-1">Auckland Office:</p>
                      <p className="text-gray-600">
                        43 Huia Road, Papatoetoe<br />
                        Auckland 2025, New Zealand
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold mb-1">Bangalore Office:</p>
                      <p className="text-gray-600">
                        Bangalore, Karnataka<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PrivacyPolicy;