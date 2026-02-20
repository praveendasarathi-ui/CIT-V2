import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Target, 
  Lightbulb,
  BarChart3,
  Settings,
  Globe,
  Shield,
  Zap,
  Clock,
  Award,
  AlertTriangle
} from 'lucide-react';

const DigitalTransformationStrategy = () => {
  const handleBackToInsights = () => {
    window.location.href = '/#insights';
  };

  const bestPractices = [
    {
      icon: Target,
      title: "Define Clear Vision & Objectives",
      description: "Establish a comprehensive digital vision aligned with business strategy and measurable outcomes.",
      details: [
        "Set specific, measurable, achievable, relevant, and time-bound (SMART) goals",
        "Align digital initiatives with overall business strategy",
        "Define success metrics and KPIs upfront",
        "Create a compelling vision that motivates stakeholders"
      ]
    },
    {
      icon: Users,
      title: "Secure Leadership Buy-in",
      description: "Ensure strong executive sponsorship and cross-functional leadership commitment.",
      details: [
        "Engage C-suite executives as digital transformation champions",
        "Establish a dedicated transformation steering committee",
        "Allocate sufficient budget and resources",
        "Communicate the business case clearly to all stakeholders"
      ]
    },
    {
      icon: BarChart3,
      title: "Conduct Comprehensive Assessment",
      description: "Perform thorough analysis of current state, capabilities, and digital maturity.",
      details: [
        "Assess current technology infrastructure and capabilities",
        "Evaluate existing processes and workflows",
        "Analyze data quality and accessibility",
        "Identify skill gaps and training needs"
      ]
    },
    {
      icon: Settings,
      title: "Adopt Agile Methodology",
      description: "Implement iterative, flexible approaches that allow for rapid adaptation and learning.",
      details: [
        "Break transformation into manageable phases",
        "Use pilot projects to test and validate approaches",
        "Implement continuous feedback loops",
        "Embrace fail-fast mentality for rapid learning"
      ]
    },
    {
      icon: Users,
      title: "Focus on Change Management",
      description: "Prioritize people and culture transformation alongside technology implementation.",
      details: [
        "Develop comprehensive change management strategy",
        "Provide extensive training and upskilling programs",
        "Address resistance to change proactively",
        "Create digital champions within the organization"
      ]
    },
    {
      icon: Shield,
      title: "Prioritize Data Security & Governance",
      description: "Implement robust security measures and data governance frameworks from the start.",
      details: [
        "Establish comprehensive cybersecurity protocols",
        "Implement data privacy and compliance measures",
        "Create data governance policies and procedures",
        "Regular security audits and assessments"
      ]
    }
  ];

  const implementationPhases = [
    {
      phase: "Phase 1: Foundation",
      duration: "3-6 months",
      color: "from-blue-500 to-cyan-500",
      activities: [
        "Digital maturity assessment",
        "Strategy development and roadmap creation",
        "Leadership alignment and governance setup",
        "Quick wins identification and implementation"
      ]
    },
    {
      phase: "Phase 2: Core Transformation",
      duration: "6-18 months",
      color: "from-purple-500 to-pink-500",
      activities: [
        "Core system modernization",
        "Process digitization and automation",
        "Data platform implementation",
        "Employee training and change management"
      ]
    },
    {
      phase: "Phase 3: Advanced Capabilities",
      duration: "12-24 months",
      color: "from-green-500 to-emerald-500",
      activities: [
        "AI and machine learning integration",
        "Advanced analytics implementation",
        "Customer experience optimization",
        "Innovation culture establishment"
      ]
    },
    {
      phase: "Phase 4: Optimization & Scale",
      duration: "Ongoing",
      color: "from-orange-500 to-red-500",
      activities: [
        "Continuous improvement processes",
        "Performance optimization",
        "Scaling successful initiatives",
        "Future technology adoption"
      ]
    }
  ];

  const commonChallenges = [
    {
      challenge: "Resistance to Change",
      solution: "Comprehensive change management, clear communication, and employee involvement in the transformation process."
    },
    {
      challenge: "Legacy System Integration",
      solution: "Phased modernization approach, API-first architecture, and careful migration planning."
    },
    {
      challenge: "Skills Gap",
      solution: "Targeted training programs, strategic hiring, and partnerships with technology providers."
    },
    {
      challenge: "Budget Constraints",
      solution: "Prioritized roadmap, ROI-focused initiatives, and phased investment approach."
    },
    {
      challenge: "Data Quality Issues",
      solution: "Data cleansing initiatives, governance frameworks, and quality monitoring systems."
    },
    {
      challenge: "Cybersecurity Concerns",
      solution: "Security-by-design approach, regular assessments, and comprehensive security frameworks."
    }
  ];

  const successMetrics = [
    {
      category: "Financial",
      metrics: ["Revenue growth", "Cost reduction", "ROI on digital investments", "Operational efficiency gains"]
    },
    {
      category: "Customer",
      metrics: ["Customer satisfaction scores", "Digital engagement rates", "Customer acquisition cost", "Retention rates"]
    },
    {
      category: "Operational",
      metrics: ["Process automation percentage", "Time-to-market reduction", "Error rate reduction", "Productivity improvements"]
    },
    {
      category: "Innovation",
      metrics: ["New product/service launches", "Innovation pipeline strength", "Digital capability maturity", "Employee digital skills"]
    }
  ];

  const futureTrends = [
    {
      trend: "AI-First Transformation",
      description: "Organizations will prioritize AI integration across all business functions from the start of their digital journey."
    },
    {
      trend: "Sustainable Digital Practices",
      description: "Environmental sustainability will become a core consideration in digital transformation strategies."
    },
    {
      trend: "Hyper-Personalization",
      description: "Advanced analytics and AI will enable unprecedented levels of personalization in customer experiences."
    },
    {
      trend: "Edge Computing Expansion",
      description: "Processing power will move closer to data sources for real-time insights and reduced latency."
    },
    {
      trend: "Quantum Computing Integration",
      description: "Early adopters will begin exploring quantum computing applications for complex problem-solving."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={handleBackToInsights}
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Insights
            </Button>
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              Strategy
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 border border-cyan-400/20 rotate-45 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 border border-purple-400/20 rotate-12 animate-bounce"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital Transformation
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Strategy Best Practices
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Comprehensive guide to successful digital transformation strategies, implementation roadmaps, 
              and proven methodologies for sustainable business growth.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-300">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                15 min read
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2" />
                Expert Insights
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Strategic Guide
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <section className="mb-16">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Digital transformation has evolved from a competitive advantage to a business necessity. 
                Organizations across industries are reimagining their operations, customer experiences, 
                and business models through strategic technology adoption. However, successful digital 
                transformation requires more than just implementing new technologies—it demands a 
                comprehensive strategy that addresses people, processes, and technology in harmony.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This guide outlines proven best practices, implementation strategies, and key considerations 
                for organizations embarking on their digital transformation journey. From initial assessment 
                to scaling successful initiatives, we'll explore the critical elements that differentiate 
                successful transformations from failed attempts.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Best Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential strategies that form the foundation of successful digital transformation initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestPractices.map((practice, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                      <practice.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {practice.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{practice.description}</p>
                  <ul className="space-y-2">
                    {practice.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Implementation Roadmap */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementation Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A phased approach to digital transformation that ensures sustainable progress and measurable outcomes.
            </p>
          </div>

          <div className="space-y-8">
            {implementationPhases.map((phase, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className={`md:w-1/3 bg-gradient-to-r ${phase.color} p-6 text-white`}>
                      <h3 className="text-2xl font-bold mb-2">{phase.phase}</h3>
                      <p className="text-lg opacity-90">{phase.duration}</p>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Activities:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-start">
                            <Zap className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{activity}</span>
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

        {/* Common Challenges */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Challenges & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Addressing the most frequent obstacles organizations face during digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {commonChallenges.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <AlertTriangle className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-bold text-gray-900">{item.challenge}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.solution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Metrics & KPIs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key performance indicators to measure the effectiveness of your digital transformation initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start">
                        <BarChart3 className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Future Trends */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Future Trends in Digital Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Emerging trends that will shape the next generation of digital transformation strategies.
            </p>
          </div>

          <div className="space-y-6">
            {futureTrends.map((trend, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-4 flex-shrink-0">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{trend.trend}</h3>
                      <p className="text-gray-700 leading-relaxed">{trend.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Successful digital transformation requires a holistic approach that balances technological 
                innovation with organizational change management. By following these best practices and 
                maintaining a focus on people, processes, and technology, organizations can navigate 
                the complexities of digital transformation and achieve sustainable competitive advantages.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Remember that digital transformation is not a destination but a continuous journey of 
                adaptation and improvement. Organizations that embrace this mindset and remain agile 
                in their approach will be best positioned to thrive in an increasingly digital world.
              </p>
              
              <div className="text-center">
                <Button 
                  onClick={handleBackToInsights}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore More Insights
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact CenturianIT to discuss how we can help you implement these digital transformation 
              best practices in your organization.
            </p>
            <Button 
              onClick={() => window.location.href = '/#contact'}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
            </Button>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CenturianIT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DigitalTransformationStrategy;