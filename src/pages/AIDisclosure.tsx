import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Brain, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AIDisclosure = () => {
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
                        <h1 className="text-lg md:text-2xl font-bold text-gray-900 truncate px-4">AI Disclosure</h1>
                        <div className="w-12 md:w-24"></div>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
                <Card className="border-0 shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 md:p-8 text-white flex items-center gap-4 md:gap-6">
                        <div className="p-3 md:p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                            <Brain className="h-8 w-8 md:h-12 md:w-12" />
                        </div>
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold">CenturianIT AI Disclosure</h2>
                            <p className="text-blue-50 mt-1 opacity-90 text-sm md:text-base">How we leverage AI and automation.</p>
                        </div>
                    </div>

                    <CardContent className="p-6 md:p-12">
                        <div className="prose prose-sm md:prose-lg max-w-none">
                            <p className="text-gray-700 text-lg leading-relaxed mb-10">
                                CenturianIT may use artificial intelligence (AI), automation tools, analytics systems, and secure cloud technologies to enhance service delivery, cybersecurity, and operational efficiency.
                            </p>

                            <section className="mb-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <h2 className="text-2xl font-bold text-gray-900">1. Purpose of AI Usage</h2>
                                </div>
                                <p className="text-gray-600 mb-4">We may use AI-assisted tools for:</p>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Customer support efficiency",
                                        "Website analytics and performance optimization",
                                        "Fraud detection and security monitoring",
                                        "Internal business process automation"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                            <div className="mt-1 p-1 bg-blue-100 rounded-full">
                                                <ShieldCheck className="h-3 w-3 text-blue-600" />
                                            </div>
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. No Automated Decision-Making Impact</h2>
                                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl">
                                    <p className="text-amber-900 leading-relaxed font-medium">
                                        We do not use AI systems to make automated decisions that produce legal, financial, or significant personal impacts on individuals without human oversight.
                                    </p>
                                </div>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Protection and AI Compliance</h2>
                                <p className="text-gray-600 mb-4">Any personal data processed through AI or automated systems is:</p>
                                <ul className="list-disc pl-6 text-gray-600 space-y-3">
                                    <li>Collected for specified and lawful purposes</li>
                                    <li>Protected using encryption and access controls</li>
                                    <li>Processed under strict confidentiality agreements</li>
                                    <li>Aligned with applicable privacy laws including <strong>India’s DPDP Act</strong> and the <strong>New Zealand Privacy Act 2020</strong></li>
                                </ul>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Human Oversight and Accountability</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    All AI-assisted processing activities are subject to human review, governance controls, and internal data protection policies to ensure fairness, transparency, and accountability.
                                </p>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party AI Tools</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Where third-party AI or cloud service providers are used, they are required to follow industry-standard data security and privacy safeguards and process data only for authorized purposes.
                                </p>
                            </section>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};

export default AIDisclosure;
