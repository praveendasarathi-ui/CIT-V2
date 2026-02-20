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
  AlertTriangle,
  Building,
  DollarSign,
  Calendar,
  Truck,
  GraduationCap,
  Heart,
  ShoppingCart,
  Factory
} from 'lucide-react';

const ERPSuccessStories = () => {
  const handleBackToInsights = () => {
    window.location.href = '/#insights';
  };

  const successStories = [
    {
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      icon: Factory,
      size: "5,000+ employees",
      challenge: "Fragmented systems across 15 global facilities, poor inventory visibility, and manual reporting processes causing delays and inefficiencies.",
      solution: "SAP S/4HANA implementation with integrated modules for production planning, inventory management, and financial reporting.",
      implementation: {
        duration: "18 months",
        phases: ["Assessment & Planning", "Core Implementation", "Testing & Training", "Go-Live & Support"],
        approach: "Phased rollout starting with pilot facility"
      },
      results: {
        roi: "320% ROI within 2 years",
        metrics: [
          "45% reduction in inventory carrying costs",
          "60% faster month-end closing",
          "30% improvement in on-time delivery",
          "50% reduction in manual data entry",
          "Real-time visibility across all facilities"
        ]
      },
      keyLessons: [
        "Strong executive sponsorship was crucial for success",
        "Extensive user training reduced resistance to change",
        "Data migration required more time than initially planned",
        "Regular communication kept all stakeholders aligned"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "HealthCare Plus Network",
      industry: "Healthcare",
      icon: Heart,
      size: "2,500+ employees",
      challenge: "Disconnected patient management systems, compliance reporting challenges, and inefficient resource allocation across multiple facilities.",
      solution: "Epic EHR with integrated financial management and custom modules for regulatory compliance and resource planning.",
      implementation: {
        duration: "24 months",
        phases: ["System Design", "Development & Configuration", "Integration Testing", "Phased Rollout"],
        approach: "Facility-by-facility implementation with parallel systems during transition"
      },
      results: {
        roi: "280% ROI within 3 years",
        metrics: [
          "40% improvement in patient satisfaction scores",
          "35% reduction in administrative costs",
          "90% faster compliance reporting",
          "25% increase in resource utilization",
          "Seamless patient data sharing across facilities"
        ]
      },
      keyLessons: [
        "Healthcare-specific compliance requirements needed special attention",
        "Clinical staff engagement was essential for adoption",
        "Integration with existing medical devices required careful planning",
        "Continuous training programs improved user proficiency"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      company: "RetailMax Chain",
      industry: "Retail",
      icon: ShoppingCart,
      size: "1,200+ employees",
      challenge: "Inconsistent inventory management across 150+ stores, poor demand forecasting, and fragmented customer data.",
      solution: "Microsoft Dynamics 365 Commerce with integrated CRM, inventory management, and business intelligence modules.",
      implementation: {
        duration: "12 months",
        phases: ["Requirements Analysis", "System Configuration", "Store Rollout", "Optimization"],
        approach: "Hub-and-spoke model with central configuration and store-level customization"
      },
      results: {
        roi: "450% ROI within 18 months",
        metrics: [
          "55% reduction in stockouts",
          "40% improvement in inventory turnover",
          "30% increase in customer retention",
          "65% faster new store setup",
          "Unified customer view across all channels"
        ]
      },
      keyLessons: [
        "Retail-specific features significantly improved adoption",
        "Real-time inventory visibility transformed operations",
        "Mobile capabilities were essential for store staff",
        "Customer data integration provided valuable insights"
      ],
      color: "from-purple-500 to-indigo-500"
    },
    {
      company: "EduTech University",
      industry: "Education",
      icon: GraduationCap,
      size: "800+ staff, 15,000+ students",
      challenge: "Separate systems for student information, financial aid, and academic records causing data silos and administrative inefficiencies.",
      solution: "CenturianIT's EduSys platform with integrated student lifecycle management, financial aid processing, and academic analytics.",
      implementation: {
        duration: "15 months",
        phases: ["System Analysis", "Custom Development", "Data Migration", "Faculty Training"],
        approach: "Semester-based rollout with parallel systems during academic year"
      },
      results: {
        roi: "380% ROI within 2.5 years",
        metrics: [
          "50% reduction in student enrollment time",
          "70% faster financial aid processing",
          "45% improvement in student retention tracking",
          "60% reduction in administrative workload",
          "Comprehensive academic analytics dashboard"
        ]
      },
      keyLessons: [
        "Academic calendar constraints required flexible implementation",
        "Faculty buy-in was crucial for successful adoption",
        "Student data privacy required enhanced security measures",
        "Integration with existing learning management systems was complex"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      company: "FinanceFirst Bank",
      industry: "Financial Services",
      icon: Building,
      size: "3,000+ employees",
      challenge: "Legacy core banking systems, regulatory compliance challenges, and poor customer data integration across multiple service channels.",
      solution: "Temenos T24 core banking platform with integrated risk management, compliance reporting, and customer relationship management.",
      implementation: {
        duration: "30 months",
        phases: ["Regulatory Assessment", "Core Migration", "Channel Integration", "Compliance Validation"],
        approach: "Big-bang approach with extensive parallel testing and fallback procedures"
      },
      results: {
        roi: "250% ROI within 4 years",
        metrics: [
          "80% faster regulatory reporting",
          "35% reduction in operational risk",
          "50% improvement in customer onboarding time",
          "40% increase in cross-selling opportunities",
          "Real-time risk monitoring and alerts"
        ]
      },
      keyLessons: [
        "Regulatory compliance was the primary success factor",
        "Extensive testing prevented operational disruptions",
        "Staff retraining was essential for complex financial processes",
        "Customer communication during transition was critical"
      ],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const commonSuccessFactors = [
    {
      factor: "Executive Leadership & Sponsorship",
      description: "Strong C-level commitment and visible leadership throughout the implementation process.",
      icon: Users
    },
    {
      factor: "Comprehensive Change Management",
      description: "Structured approach to managing organizational change, including communication and training programs.",
      icon: Settings
    },
    {
      factor: "Phased Implementation Approach",
      description: "Breaking down the implementation into manageable phases with clear milestones and deliverables.",
      icon: Target
    },
    {
      factor: "Data Quality & Migration Strategy",
      description: "Thorough data cleansing and migration planning to ensure accurate and complete data transfer.",
      icon: Shield
    },
    {
      factor: "User Training & Support",
      description: "Comprehensive training programs and ongoing support to ensure user adoption and proficiency.",
      icon: GraduationCap
    },
    {
      factor: "Stakeholder Engagement",
      description: "Active involvement of key stakeholders throughout the project lifecycle.",
      icon: Globe
    }
  ];

  const implementationBestPractices = [
    {
      practice: "Conduct Thorough Business Process Analysis",
      details: [
        "Map current state processes and identify inefficiencies",
        "Define future state processes aligned with ERP capabilities",
        "Identify customization requirements and their business justification",
        "Document process changes and their impact on different departments"
      ]
    },
    {
      practice: "Establish Strong Project Governance",
      details: [
        "Create steering committee with executive representation",
        "Define clear roles and responsibilities for all team members",
        "Implement regular progress reviews and milestone checkpoints",
        "Establish escalation procedures for issue resolution"
      ]
    },
    {
      practice: "Prioritize Data Management",
      details: [
        "Conduct comprehensive data audit and quality assessment",
        "Develop data migration strategy with multiple validation checkpoints",
        "Establish data governance policies and procedures",
        "Plan for data archival and historical data access"
      ]
    },
    {
      practice: "Focus on Change Management",
      details: [
        "Develop communication strategy for all stakeholder groups",
        "Create training programs tailored to different user roles",
        "Identify and address resistance to change proactively",
        "Establish feedback mechanisms and continuous improvement processes"
      ]
    }
  ];

  const industryInsights = [
    {
      industry: "Manufacturing",
      keyConsiderations: [
        "Integration with production equipment and IoT devices",
        "Real-time inventory and production tracking",
        "Quality management and compliance requirements",
        "Supply chain visibility and vendor management"
      ],
      commonChallenges: [
        "Complex bill of materials management",
        "Multi-site inventory synchronization",
        "Production scheduling optimization"
      ]
    },
    {
      industry: "Healthcare",
      keyConsiderations: [
        "HIPAA compliance and patient data security",
        "Integration with medical devices and lab systems",
        "Clinical workflow optimization",
        "Regulatory reporting requirements"
      ],
      commonChallenges: [
        "Clinical staff resistance to new systems",
        "Complex insurance and billing processes",
        "Patient safety and data accuracy requirements"
      ]
    },
    {
      industry: "Retail",
      keyConsiderations: [
        "Omnichannel customer experience",
        "Real-time inventory across multiple locations",
        "Seasonal demand planning and forecasting",
        "Point-of-sale integration and mobile capabilities"
      ],
      commonChallenges: [
        "High transaction volumes and performance requirements",
        "Integration with e-commerce platforms",
        "Customer data privacy and security"
      ]
    },
    {
      industry: "Education",
      keyConsiderations: [
        "Student lifecycle management",
        "Academic calendar and scheduling constraints",
        "Financial aid and billing complexity",
        "Integration with learning management systems"
      ],
      commonChallenges: [
        "Faculty resistance to administrative systems",
        "Student data privacy requirements",
        "Complex academic and financial reporting"
      ]
    }
  ];

  const keyMetrics = [
    {
      category: "Financial Impact",
      metrics: [
        "Return on Investment (ROI)",
        "Total Cost of Ownership (TCO)",
        "Cost savings from process automation",
        "Revenue increase from improved efficiency"
      ]
    },
    {
      category: "Operational Efficiency",
      metrics: [
        "Process cycle time reduction",
        "Error rate improvement",
        "Resource utilization increase",
        "Productivity gains per employee"
      ]
    },
    {
      category: "User Adoption",
      metrics: [
        "System usage rates",
        "User satisfaction scores",
        "Training completion rates",
        "Support ticket volume reduction"
      ]
    },
    {
      category: "Business Value",
      metrics: [
        "Customer satisfaction improvement",
        "Compliance reporting accuracy",
        "Decision-making speed enhancement",
        "Data quality and accessibility"
      ]
    }
  ];

  const lessonsLearned = [
    {
      lesson: "Underestimating Change Management",
      impact: "User resistance and low adoption rates",
      solution: "Invest 30-40% of project budget in change management activities"
    },
    {
      lesson: "Inadequate Data Preparation",
      impact: "Extended go-live delays and data quality issues",
      solution: "Start data cleansing and migration planning early in the project"
    },
    {
      lesson: "Insufficient Testing",
      impact: "Post-implementation issues and user frustration",
      solution: "Implement comprehensive testing strategy including user acceptance testing"
    },
    {
      lesson: "Poor Communication",
      impact: "Stakeholder misalignment and unrealistic expectations",
      solution: "Establish regular communication cadence with all stakeholder groups"
    },
    {
      lesson: "Scope Creep",
      impact: "Budget overruns and timeline delays",
      solution: "Implement strict change control processes and scope management"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-orange-50">
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
            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
              ERP Success Stories
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 border border-orange-400/20 rotate-45 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 border border-red-400/20 rotate-12 animate-bounce"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ERP Implementation
              <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Real-world case studies showcasing successful ERP implementations across diverse industries, 
              featuring measurable outcomes, lessons learned, and best practices for sustainable business transformation.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-300">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                20 min read
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2" />
                5 Case Studies
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Proven Results
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
                Enterprise Resource Planning (ERP) implementations represent some of the most significant technology 
                investments organizations make. When executed successfully, they transform business operations, 
                improve efficiency, and provide the foundation for sustainable growth. However, the path to success 
                is often complex and challenging.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This comprehensive collection of success stories showcases real-world ERP implementations across 
                various industries, highlighting the challenges faced, solutions implemented, and measurable outcomes 
                achieved. Each case study provides valuable insights and lessons learned that can guide organizations 
                on their own ERP journey.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed case studies from organizations that achieved remarkable results through strategic ERP implementation.
            </p>
          </div>

          <div className="space-y-12">
            {successStories.map((story, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Company Info */}
                    <div className={`lg:w-1/3 bg-gradient-to-r ${story.color} p-8 text-white`}>
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mr-4">
                          <story.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{story.company}</h3>
                          <p className="text-lg opacity-90">{story.industry}</p>
                          <p className="text-sm opacity-75">{story.size}</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Implementation Details</h4>
                        <p className="text-sm opacity-90 mb-2">Duration: {story.implementation.duration}</p>
                        <p className="text-sm opacity-90 mb-2">Approach: {story.implementation.approach}</p>
                      </div>

                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">ROI Achievement</h4>
                        <p className="text-2xl font-bold">{story.results.roi}</p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="lg:w-2/3 p-8">
                      <div className="mb-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Challenge</h4>
                        <p className="text-gray-700 leading-relaxed">{story.challenge}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Solution</h4>
                        <p className="text-gray-700 leading-relaxed">{story.solution}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Key Results</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {story.results.metrics.map((metric, idx) => (
                            <div key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Key Lessons Learned</h4>
                        <div className="space-y-2">
                          {story.keyLessons.map((lesson, idx) => (
                            <div key={idx} className="flex items-start">
                              <Lightbulb className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{lesson}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Common Success Factors */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Success Factors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key elements that consistently contribute to successful ERP implementations across all industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonSuccessFactors.map((factor, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mr-4">
                      <factor.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{factor.factor}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Implementation Best Practices */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementation Best Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven methodologies and approaches derived from successful ERP implementations.
            </p>
          </div>

          <div className="space-y-8">
            {implementationBestPractices.map((practice, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{practice.practice}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {practice.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start">
                        <Zap className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Industry-Specific Insights */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored considerations and challenges for different industry verticals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industryInsights.map((insight, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{insight.industry}</h3>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Considerations:</h4>
                    <ul className="space-y-1">
                      {insight.keyConsiderations.map((consideration, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Common Challenges:</h4>
                    <ul className="space-y-1">
                      {insight.commonChallenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start">
                          <AlertTriangle className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Metrics */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Metrics & KPIs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential metrics to measure and demonstrate ERP implementation success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start">
                        <BarChart3 className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lessons Learned & Pitfalls to Avoid
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common mistakes and their solutions based on real implementation experiences.
            </p>
          </div>

          <div className="space-y-6">
            {lessonsLearned.map((lesson, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold text-red-600 mb-2">Common Pitfall</h4>
                      <p className="text-gray-700">{lesson.lesson}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-orange-600 mb-2">Impact</h4>
                      <p className="text-gray-700">{lesson.impact}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-600 mb-2">Solution</h4>
                      <p className="text-gray-700">{lesson.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Future Outlook */}
        <section className="mb-16">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-red-50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Outlook for ERP Implementations</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Emerging Trends</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Cloud-first ERP implementations becoming the standard</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">AI and machine learning integration for predictive analytics</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Mobile-first user experiences and interfaces</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Industry-specific pre-configured solutions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Success Factors for the Future</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Lightbulb className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Emphasis on user experience and adoption</span>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Continuous improvement and agile methodologies</span>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Integration with emerging technologies (IoT, blockchain)</span>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Focus on data-driven decision making</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-red-50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                These success stories demonstrate that while ERP implementations are complex undertakings, 
                they can deliver transformational results when approached with proper planning, strong leadership, 
                and a focus on change management. The key to success lies not just in selecting the right technology, 
                but in executing a comprehensive strategy that addresses people, processes, and technology in harmony.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Organizations considering ERP implementation can learn valuable lessons from these experiences, 
                avoiding common pitfalls while leveraging proven best practices. With the right approach and 
                expert guidance, ERP implementations can become catalysts for sustainable business growth and 
                competitive advantage.
              </p>
              
              <div className="text-center">
                <Button 
                  onClick={handleBackToInsights}
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 mr-4"
                >
                  Explore More Insights
                </Button>
                <Button 
                  onClick={() => window.location.href = '/#contact'}
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Discuss Your ERP Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-orange-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your ERP Journey?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us to discuss how we can help you implement a successful ERP solution 
              tailored to your organization's unique needs and objectives.
            </p>
            <Button 
              onClick={() => window.location.href = '/#contact'}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
            </Button>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ERPSuccessStories;