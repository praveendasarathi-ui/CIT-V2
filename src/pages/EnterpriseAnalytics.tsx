import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  BarChart3, 
  Brain, 
  TrendingUp, 
  Users, 
  Zap, 
  Target,
  CheckCircle,
  ArrowRight,
  Share2,
  Calendar,
  User
} from 'lucide-react';

const EnterpriseAnalytics = () => {
  const handleBackToInsights = () => {
    window.location.href = '/#insights';
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'The Future of Enterprise Analytics - CenturianIT',
        text: 'Exploring how AI-driven analytics is reshaping business intelligence',
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const relatedArticles = [
    {
      title: 'Digital Transformation Best Practices',
      category: 'Strategy',
      date: 'Dec 10, 2024',
      excerpt: 'Key strategies for successful digital transformation initiatives...',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'ERP Implementation Success Stories',
      category: 'ERP',
      date: 'Dec 5, 2024',
      excerpt: 'Real-world case studies of successful ERP deployments...',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 md:h-20">
            {/* Back Button */}
            <Button 
              onClick={handleBackToInsights}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Insights
            </Button>
            
            <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
              Analytics
            </Badge>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The Future of Enterprise Analytics
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Exploring how AI-driven analytics is reshaping business intelligence and transforming decision-making processes across industries.
            </p>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>CenturianIT Analytics Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>December 15, 2024</span>
              </div>
              <Button 
                onClick={handleShare}
                variant="ghost" 
                size="sm"
                className="flex items-center gap-2 text-gray-500 hover:text-blue-600"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>

            {/* Hero Image */}
            <Card className="border-0 shadow-xl overflow-hidden mb-12">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                  alt="AI-driven analytics dashboard" 
                  className="w-full h-80 object-cover"
                />
              </CardContent>
            </Card>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Brain className="h-8 w-8 text-blue-600" />
                The Analytics Revolution
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The landscape of enterprise analytics is undergoing a fundamental transformation. As organizations generate unprecedented volumes of data, traditional business intelligence tools are giving way to AI-powered analytics platforms that can process, analyze, and derive insights from complex datasets in real-time.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                This shift represents more than just technological advancement—it's a paradigm change that's redefining how businesses understand their operations, customers, and markets. Companies that embrace AI-driven analytics are not just gaining competitive advantages; they're fundamentally changing how they operate and make decisions.
              </p>
            </section>

            {/* Current State */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-purple-600" />
                Current State of Enterprise Analytics
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Today's enterprise analytics landscape is characterized by fragmented data sources, manual reporting processes, and reactive decision-making. Many organizations struggle with:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-l-4 border-l-red-500 bg-red-50">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Traditional Challenges</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Data silos across departments</li>
                      <li>• Time-consuming manual reporting</li>
                      <li>• Limited real-time insights</li>
                      <li>• Reactive decision-making</li>
                      <li>• Inconsistent data quality</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-green-500 bg-green-50">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Emerging Solutions</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Unified data platforms</li>
                      <li>• Automated insight generation</li>
                      <li>• Real-time analytics</li>
                      <li>• Predictive modeling</li>
                      <li>• Self-service analytics</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* AI Transformation */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Zap className="h-8 w-8 text-yellow-600" />
                How AI is Transforming Analytics
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Artificial Intelligence is revolutionizing enterprise analytics through several key innovations:
              </p>

              <div className="space-y-8 mb-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Predictive Analytics</h4>
                    <p className="text-gray-700 leading-relaxed">
                      AI algorithms can analyze historical patterns and predict future trends, enabling proactive decision-making. From demand forecasting to risk assessment, predictive analytics helps organizations stay ahead of market changes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Natural Language Processing</h4>
                    <p className="text-gray-700 leading-relaxed">
                      NLP enables users to query data using natural language, making analytics accessible to non-technical users. This democratization of data insights empowers every team member to make data-driven decisions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Automated Insights</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Machine learning algorithms continuously monitor data streams and automatically surface anomalies, trends, and opportunities, reducing the time from data to insight from days to minutes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
                Key Benefits and Use Cases
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Organizations implementing AI-driven analytics are experiencing transformative benefits across multiple areas:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                        <TrendingUp className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-3">Revenue Growth</h4>
                      <p className="text-gray-700 text-sm">
                        Companies report 15-25% revenue increases through better customer insights and market predictions.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        <Zap className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-3">Operational Efficiency</h4>
                      <p className="text-gray-700 text-sm">
                        Automated analytics reduce reporting time by 80% and improve decision-making speed.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 bg-gradient-to-br from-green-50 to-emerald-50">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-3">Customer Satisfaction</h4>
                      <p className="text-gray-700 text-sm">
                        Personalized experiences driven by analytics improve customer satisfaction by 30%.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Implementation Strategy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Target className="h-8 w-8 text-indigo-600" />
                Implementation Strategy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Successfully implementing AI-driven analytics requires a strategic approach that addresses technology, people, and processes:
              </p>

              <div className="space-y-6 mb-8">
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">1. Data Foundation</h4>
                    <p className="text-gray-700">
                      Establish a robust data infrastructure with proper governance, quality controls, and integration capabilities. This foundation is critical for AI success.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">2. Skill Development</h4>
                    <p className="text-gray-700">
                      Invest in training programs to develop data literacy across the organization. Empower users with self-service analytics capabilities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">3. Gradual Implementation</h4>
                    <p className="text-gray-700">
                      Start with pilot projects in high-impact areas, demonstrate value, and gradually expand across the organization.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Future Trends */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <ArrowRight className="h-8 w-8 text-cyan-600" />
                Future Trends and Predictions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The future of enterprise analytics will be shaped by several emerging trends:
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">What to Expect by 2025</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Conversational analytics will become mainstream, allowing users to interact with data through voice and chat interfaces.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Edge analytics will enable real-time processing at the point of data generation, reducing latency and improving responsiveness.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Augmented analytics will automatically generate insights and recommendations, further democratizing data science.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Ethical AI and explainable analytics will become critical for regulatory compliance and trust.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The future of enterprise analytics is bright, powered by AI technologies that are making data insights more accessible, actionable, and valuable than ever before. Organizations that invest in AI-driven analytics today will be better positioned to navigate the complexities of tomorrow's business landscape.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                At CenturianIT, we're committed to helping businesses harness the power of AI-driven analytics. Our comprehensive analytics solutions combine cutting-edge technology with deep industry expertise to deliver transformative results.
              </p>

              {/* CTA */}
              <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Analytics?</h3>
                  <p className="text-blue-100 mb-6">
                    Discover how CenturianIT can help you implement AI-driven analytics solutions that drive real business value.
                  </p>
                  <Button 
                    onClick={() => window.location.href = '/#contact'}
                    className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
                  >
                    Get Started Today
                  </Button>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:scale-105 border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-6 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className="relative">
                      <Badge className={`mb-3 bg-gradient-to-r ${article.color} text-white border-0`}>
                        {article.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{article.date}</span>
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${article.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <ArrowRight className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EnterpriseAnalytics;