import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CookiePolicy = () => {
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
                        <h1 className="text-xl md:text-2xl font-bold text-gray-900">Cookie Policy</h1>
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
                                <strong>Effective Date:</strong> February 20, 2026
                            </p>

                            <section className="mb-8">
                                <p className="text-gray-600 leading-relaxed">
                                    This Cookie Policy explains how CenturianIT uses cookies and similar technologies when you visit our website.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
                                <p className="text-gray-600">
                                    Cookies are small text files stored on your device when you visit a website. They help websites function efficiently and improve user experience.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                                        <p className="text-gray-600">
                                            These cookies are necessary for the website to function properly, including security, network management, and accessibility.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                                        <p className="text-gray-600">
                                            These cookies help us understand how visitors interact with our website, such as pages visited, time spent, and navigation behavior. This allows us to improve website performance and user experience.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                                        <p className="text-gray-600">
                                            These cookies remember your preferences and settings to enhance your browsing experience.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Legal Basis for Cookie Usage</h2>
                                <ul className="list-disc pl-6 text-gray-600 space-y-3">
                                    <li>
                                        <strong>For users in India:</strong> Cookies that collect personal data are used only after obtaining explicit consent in accordance with the Digital Personal Data Protection Act, 2023.
                                    </li>
                                    <li>
                                        <strong>For users in New Zealand:</strong> Cookie usage aligns with transparency and purpose limitation principles under the Privacy Act 2020.
                                    </li>
                                    <li>
                                        <strong>For users from other regions:</strong> We follow globally accepted privacy and transparency standards.
                                    </li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Managing Your Cookie Preferences</h2>
                                <p className="text-gray-600 mb-4">You can control or disable cookies through:</p>
                                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                                    <li>Your browser settings</li>
                                    <li>Cookie consent banner on our website</li>
                                </ul>
                                <p className="text-gray-600 mt-4 italic text-sm">
                                    Please note that disabling certain cookies may affect website functionality.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Cookies</h2>
                                <p className="text-gray-600 mb-4">
                                    We may use trusted third-party service providers (such as analytics and hosting platforms) that may place cookies on your device solely for service performance and security purposes.
                                </p>
                                <p className="text-gray-600">
                                    These providers are contractually obligated to maintain data confidentiality and security.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Updates to This Cookie Policy</h2>
                                <p className="text-gray-600">
                                    We may update this Cookie Policy periodically to reflect legal, technical, or operational changes. The updated version will always be available on this page.
                                </p>
                            </section>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};

export default CookiePolicy;
