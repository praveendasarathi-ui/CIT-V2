import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Rocket, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Target,
  CheckCircle,
  ArrowRight,
  Share2,
  Calendar,
  User,
  Globe,
  Settings,
  BarChart3,
  Lightbulb,
  Award,
  DollarSign
} from 'lucide-react';

const DigitalTransformation = () => {
  const handleBackToInsights = () => {
    window.location.href = '/#insights';
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Digital Transformation Best Practices - CenturianIT',
        text: 'Key strategies for successful digital transformation initiatives',
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const pillars = [
    {
      icon: Users,
      title: 'People & Culture',
      description: 'Building a digital-first mindset and empowering teams with the right skills and tools.',
      details: [
        'Change management and leadership alignment',
        'Digital skills training and development',
        'Cultural transformation initiatives',
        'Employee engagement and adoption'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Settings,
      title: 'Process Optimization',
      description: 'Streamlining operations and workflows to maximize efficiency and reduce complexity.',
      details: [
        'Business process reengineering',
        'Automation and workflow optimization',
        'Data-driven decision making',
        'Continuous improvement frameworks'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Rocket,
      title: 'Technology Innovation',
      description: 'Leveraging cutting-edge technologies to drive business value and competitive advantage.',
      details: [
        'Cloud migration and modernization',
        'AI and machine learning integration',
        'IoT and edge computing adoption',
        'API-first architecture design'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Data & Analytics',
      description: 'Transforming data into actionable insights for strategic decision-making.',
      details: [
        'Data governance and quality management',
        'Advanced analytics and BI platforms',
        'Real-time monitoring and reporting',
        'Predictive and prescriptive analytics'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const bestPractices = [
    {
      title: 'Start with Strategy',
      description: 'Define clear objectives and align transformation initiatives with business goals.',
      icon: Target
    },
    {
      title: 'Secure Leadership Buy-in',
      description: 'Ensure executive sponsorship and commitment throughout the transformation journey.',
      icon: Award
    },
    {
      title: 'Focus on Customer Experience',
      description: 'Put customer needs at the center of all digital transformation efforts.',
      icon: Users
    },
    {
      title: 'Embrace Agile Methodologies',
      description: 'Adopt iterative approaches for faster delivery and continuous improvement.',
      icon: Zap
    },
    {
      title: 'Invest in Security',
      description: 'Build security into every aspect of your digital transformation strategy.',
      icon: Shield
    },
    {
      title: 'Measure and Optimize',
      description: 'Establish KPIs and continuously monitor progress to ensure success.',
      icon: TrendingUp
    }
  ];

  const challenges = [
    {
      challenge: 'Resistance to Change',
      solution: 'Implement comprehensive change management programs with clear communication and training.',
      impact: 'High'
    },
    {
      challenge: 'Legacy System Integration',
      solution: 'Develop phased migration strategies with API-first approaches and hybrid architectures.',
      impact: 'Medium'
    },
    {
      challenge: 'Skills Gap',
      solution: 'Invest in upskilling programs and strategic partnerships with technology providers.',
      impact: 'High'
    },
    {
      challenge: 'Budget Constraints',
      solution: 'Prioritize high-impact initiatives and demonstrate ROI through pilot projects.',
      impact: 'Medium'
    }
  ];

  const roadmapSteps = [
    {
      phase: 'Assessment',
      duration: '2-4 weeks',
      activities: ['Current state analysis', 'Gap identification', 'Stakeholder interviews', 'Technology audit'],
      color: 'bg-blue-500'
    },
    {
      phase: 'Strategy',
      duration: '4-6 weeks',
      activities: ['Vision definition', 'Roadmap creation', 'Business case development', 'Risk assessment'],
      color: 'bg-purple-500'
    },
    {
      phase: 'Planning',
      duration: '6-8 weeks',
      activities: ['Detailed project planning', 'Resource allocation', 'Technology selection', 'Change management'],
      color: 'bg-green-500'
    },
    {
      phase: 'Implementation',
      duration: '6-18 months',
      activities: ['Pilot deployment', 'Iterative rollout', 'Training delivery', 'Performance monitoring'],
      color: 'bg-orange-500'
    },
    {
      phase: 'Optimization',
      duration: 'Ongoing',
      activities: ['Performance analysis', 'Continuous improvement', 'Scaling successful initiatives', 'Innovation adoption'],
      color: 'bg-red-500'
    }
  ];

  const relatedArticles = [
    {
      title: 'The Future of Enterprise Analytics',
      category: 'Analytics',
      date: 'Dec 15, 2024',
      excerpt: 'Exploring how AI-driven analytics is reshaping business intelligence...',
      color: 'from-blue-500 to-cyan-500'
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
            
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
              Strategy
            </Badge>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <div className="mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
              Strategy
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Digital Transformation Best Practices
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Key strategies for successful digital transformation initiatives that drive business growth, improve operational efficiency, and create competitive advantages in today's digital economy.
            </p>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>CenturianIT Strategy Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>December 10, 2024</span>
              </div>
              <Button 
                onClick={handleShare}
                variant="ghost" 
                size="sm"
                className="flex items-center gap-2 text-gray-500 hover:text-purple-600"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>

            {/* Hero Image */}
            <Card className="border-0 shadow-xl overflow-hidden mb-12">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                  alt="Digital transformation concept with connected networks" 
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
                <Globe className="h-8 w-8 text-purple-600" />
                The Digital Transformation Imperative
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Digital transformation has evolved from a competitive advantage to a business necessity. Organizations across all industries are reimagining their operations, customer experiences, and business models to thrive in an increasingly digital world. However, successful transformation requires more than just adopting new technologies—it demands a holistic approach that encompasses people, processes, and technology.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                According to recent studies, 70% of digital transformation initiatives fail to achieve their intended goals. The difference between success and failure often lies in following proven best practices and avoiding common pitfalls. This comprehensive guide outlines the strategies and approaches that leading organizations use to drive successful digital transformation.
              </p>
            </section>

            {/* Four Pillars */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Lightbulb className="h-8 w-8 text-orange-600" />
                Four Pillars of Successful Digital Transformation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Successful digital transformation rests on four fundamental pillars that must be addressed holistically:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {pillars.map((pillar, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${pillar.color} flex items-center justify-center`}>
                          <pillar.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{pillar.title}</h3>
                          <p className="text-gray-600 mb-4">{pillar.description}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {pillar.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Award className="h-8 w-8 text-green-600" />
                Essential Best Practices
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                These proven best practices form the foundation of successful digital transformation initiatives:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {bestPractices.map((practice, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <practice.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{practice.title}</h3>
                      <p className="text-gray-600 text-sm">{practice.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Challenges and Solutions */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-red-600" />
                Common Challenges and Solutions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Understanding and preparing for common challenges is crucial for transformation success:
              </p>

              <div className="space-y-6 mb-8">
                {challenges.map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-lg font-semibold text-gray-900">{item.challenge}</h4>
                        <Badge className={`${item.impact === 'High' ? 'bg-red-500' : 'bg-yellow-500'} text-white`}>
                          {item.impact} Impact
                        </Badge>
                      </div>
                      <p className="text-gray-700">
                        <strong>Solution:</strong> {item.solution}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Implementation Roadmap */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Rocket className="h-8 w-8 text-blue-600" />
                Implementation Roadmap
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                A structured approach to digital transformation ensures systematic progress and measurable outcomes:
              </p>

              <div className="space-y-6 mb-8">
                {roadmapSteps.map((step, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        <div className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full ${step.color} text-white flex items-center justify-center font-bold text-lg`}>
                            {index + 1}
                          </div>
                          {index < roadmapSteps.length - 1 && (
                            <div className="w-0.5 h-16 bg-gray-300 mt-4"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <h3 className="text-xl font-semibold text-gray-900">{step.phase}</h3>
                            <Badge variant="outline" className="text-gray-600">
                              {step.duration}
                            </Badge>
                          </div>
                          <div className="grid md:grid-cols-2 gap-2">
                            {step.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-gray-700">
                                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                <span className="text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* ROI and Business Impact */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <DollarSign className="h-8 w-8 text-green-600" />
                ROI and Business Impact
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Organizations that successfully implement digital transformation initiatives typically see significant returns on their investment:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">25-35%</div>
                    <div className="text-sm text-gray-700">Revenue Growth</div>
                    <div className="text-xs text-gray-500 mt-2">Through improved customer experience and new digital channels</div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">40-60%</div>
                    <div className="text-sm text-gray-700">Cost Reduction</div>
                    <div className="text-xs text-gray-500 mt-2">Via process automation and operational efficiency</div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">50-70%</div>
                    <div className="text-sm text-gray-700">Faster Time-to-Market</div>
                    <div className="text-xs text-gray-500 mt-2">Through agile development and digital processes</div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Future Outlook */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-cyan-600" />
                Future Outlook
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The future of digital transformation will be shaped by emerging technologies and evolving business needs:
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Trends for 2025 and Beyond</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>AI-First Transformation:</strong> Organizations will prioritize AI integration across all business functions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Sustainable Digital Practices:</strong> Environmental considerations will drive green technology adoption.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Hyper-Personalization:</strong> Customer experiences will become increasingly individualized through data analytics.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Edge Computing Expansion:</strong> Processing power will move closer to data sources for real-time insights.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Zero Trust Security:</strong> Security-first approaches will become standard in digital architectures.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Digital transformation is not a destination but a continuous journey of evolution and adaptation. Organizations that embrace the best practices outlined in this guide—focusing on people, processes, technology, and data—will be better positioned to navigate the challenges and capitalize on the opportunities of the digital age.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                At CenturianIT, we partner with organizations to design and implement comprehensive digital transformation strategies that deliver measurable business value. Our proven methodologies and deep industry expertise help ensure your transformation initiatives achieve their intended goals.
              </p>

              {/* CTA */}
              <Card className="border-0 shadow-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                  <p className="text-purple-100 mb-6">
                    Let CenturianIT guide your digital transformation journey with proven strategies and expert implementation.
                  </p>
                  <Button 
                    onClick={() => window.location.href = '/#contact'}
                    className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3"
                  >
                    Start Your Transformation
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
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
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

export default DigitalTransformation;