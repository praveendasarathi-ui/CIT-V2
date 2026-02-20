import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import {
  Brain,
  Code,
  Database,
  Smartphone,
  Globe,
  Zap,
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Shield,
  Cpu,
  Bot,
  Layers,
  GitBranch,
  Server,
  Cloud,
  Monitor,
  Palette,
  Settings,
  ChevronRight,
  Play,
  Sparkles,
  Target,
  TrendingUp,
  Award,
  Menu,
  X
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const AIAgentServices = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { toast } = useToast();

  // Contact form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Prepare data for database
      const submissionData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.company,
        company_phone: formData.company,
        message: `Project Type: ${formData.projectType}\nTimeline: ${formData.timeline}\nBudget: ${formData.budget}\n\nMessage: ${formData.message}`,
        status: 'new',
        source: 'ai_agent_services_form'
      };

      // Save to Supabase database
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([submissionData])
        .select();

      if (error) {
        throw error;
      }

      // Show success message
      toast({
        title: "Request Submitted Successfully!",
        description: "We'll get back to you within 24 hours to discuss your AI-powered development project.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        projectType: '',
        timeline: '',
        budget: '',
        message: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Error",
        description: "Failed to submit your request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Handle scroll for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'process', 'portfolio', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aiServices = [
    {
      icon: Globe,
      title: 'Full-Stack Web Applications',
      description: 'AI agents build complete web applications with React, Node.js, databases, and deployment.',
      features: ['React/Next.js Frontend', 'Node.js/Python Backend', 'Database Design', 'API Development', 'Cloud Deployment'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      timeline: '2-4 weeks',
      price: 'From $5,000'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile apps built by AI with React Native and Flutter expertise.',
      features: ['React Native/Flutter', 'iOS & Android', 'Push Notifications', 'App Store Deployment', 'Backend Integration'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      timeline: '3-6 weeks',
      price: 'From $8,000'
    },
    {
      icon: Database,
      title: 'Database & Backend Systems',
      description: 'Scalable backend architectures with AI-optimized database design and API development.',
      features: ['Database Design', 'REST/GraphQL APIs', 'Authentication', 'Real-time Features', 'Performance Optimization'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      timeline: '1-3 weeks',
      price: 'From $3,000'
    },
    {
      icon: Brain,
      title: 'AI-Powered Features',
      description: 'Integrate advanced AI capabilities like chatbots, recommendations, and automation.',
      features: ['AI Chatbots', 'Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
      timeline: '2-5 weeks',
      price: 'From $6,000'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Automated cloud deployment and infrastructure management with AI optimization.',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Load Balancing', 'Monitoring', 'Security'],
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-blue-50',
      timeline: '1-2 weeks',
      price: 'From $2,000'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'AI-generated designs with modern aesthetics and optimal user experience.',
      features: ['Modern UI Design', 'User Experience', 'Responsive Design', 'Brand Integration', 'Accessibility'],
      color: 'from-teal-500 to-green-500',
      bgColor: 'bg-gradient-to-br from-teal-50 to-green-50',
      timeline: '1-2 weeks',
      price: 'From $2,500'
    }
  ];

  const developmentProcess = [
    {
      step: 1,
      title: 'Project Analysis',
      description: 'AI agents analyze your requirements and create detailed technical specifications.',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: 2,
      title: 'Architecture Design',
      description: 'Automated system architecture design with optimal technology stack selection.',
      icon: Layers,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: 3,
      title: 'AI Development',
      description: 'Multiple AI agents collaborate to build frontend, backend, and database components.',
      icon: Bot,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: 4,
      title: 'Testing & QA',
      description: 'Automated testing and quality assurance with AI-powered bug detection.',
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    },
    {
      step: 5,
      title: 'Deployment',
      description: 'Automated deployment to cloud platforms with monitoring and scaling.',
      icon: Rocket,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      step: 6,
      title: 'Maintenance',
      description: 'Ongoing AI-powered monitoring, updates, and feature enhancements.',
      icon: Settings,
      color: 'from-teal-500 to-green-500'
    }
  ];

  const portfolioProjects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with AI recommendations and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AI/ML'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      timeline: '3 weeks',
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'AI Recommendations', 'Admin Dashboard']
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive healthcare platform with patient management and AI diagnostics.',
      tech: ['React', 'Python', 'PostgreSQL', 'TensorFlow', 'AWS'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      timeline: '5 weeks',
      features: ['Patient Records', 'Appointment Scheduling', 'AI Diagnostics', 'Telemedicine', 'Reports']
    },
    {
      title: 'Financial Dashboard',
      description: 'Real-time financial analytics platform with AI-powered insights and predictions.',
      tech: ['Next.js', 'Python', 'Redis', 'Chart.js', 'Machine Learning'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      timeline: '4 weeks',
      features: ['Real-time Data', 'Interactive Charts', 'AI Predictions', 'Risk Analysis', 'Portfolio Management']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      description: 'Perfect for small projects and MVPs',
      features: [
        'Simple web application',
        'Basic database setup',
        'Responsive design',
        'Basic deployment',
        '2 weeks delivery',
        '1 month support'
      ],
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      description: 'Ideal for business applications',
      features: [
        'Full-stack web application',
        'Advanced database design',
        'API development',
        'AI features integration',
        'Cloud deployment',
        '4 weeks delivery',
        '3 months support'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$15,999',
      description: 'Complete solution for large projects',
      features: [
        'Multi-platform application',
        'Microservices architecture',
        'Advanced AI features',
        'Mobile app included',
        'DevOps & monitoring',
        '8 weeks delivery',
        '6 months support'
      ],
      color: 'from-green-500 to-emerald-500',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection('hero')}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-3 py-2 rounded-lg font-bold text-lg flex items-center">
                  <Brain className="h-6 w-6 mr-2" />
                  AI Agent Services
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'Services', id: 'services' },
                { name: 'Process', id: 'process' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Pricing', id: 'pricing' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'Services', id: 'services' },
                { name: 'Process', id: 'process' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Pricing', id: 'pricing' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                >
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-16 md:pt-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="AI Technology Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-black/70"></div>
        </div>

        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 border border-cyan-400/30 rotate-45 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 border border-purple-400/20 rotate-12 animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-32 h-32 border border-pink-400/30 rotate-45 animate-spin"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm rounded-full p-4 border border-cyan-400/30">
                <Brain className="h-16 w-16 text-cyan-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Agents Build Your{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Full-Stack Applications
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Revolutionary AI-powered development service that builds complete web applications, mobile apps,
              and backend systems in weeks, not months. No human developers needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Explore AI Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300 backdrop-blur-sm bg-white/10"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Your Project
              </Button>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">10x Faster Development</h3>
                <p className="text-gray-200">AI agents work 24/7 to deliver your project in weeks instead of months.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">70% Cost Reduction</h3>
                <p className="text-gray-200">Eliminate expensive development teams with AI-powered automation.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Quality</h3>
                <p className="text-gray-200">Production-ready code with best practices and security built-in.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI agents specialize in different aspects of software development, working together to build your complete solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className={`p-6 ${service.bgColor} relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full -mr-16 -mt-16`}></div>
                  <div className="relative">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} shadow-lg inline-block mb-4`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <div>
                        <div className="text-sm text-gray-500">Timeline</div>
                        <div className="font-semibold text-gray-900">{service.timeline}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Starting at</div>
                        <div className="font-bold text-gray-900">{service.price}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI agents follow a proven methodology to deliver high-quality applications efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-4`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-bold text-gray-500 mb-2">STEP {step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Built Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our AI agents have built for clients across different industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                      {project.timeline}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your project. All plans include AI development, testing, and deployment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className={`w-full bg-gradient-to-r ${plan.color} text-white hover:shadow-lg transition-all duration-300`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your AI-Powered Project</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to revolutionize your development process? Let's discuss your project requirements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 bg-gradient-to-br from-white to-blue-50">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                        className="border-2 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        required
                        className="border-2 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        required
                        className="border-2 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        className="border-2 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="project-type" className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                      <select
                        id="project-type"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select Type</option>
                        <option value="web-app">Web Application</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="backend">Backend System</option>
                        <option value="ai-features">AI Features</option>
                        <option value="full-stack">Full-Stack Solution</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select Timeline</option>
                        <option value="1-2-weeks">1-2 weeks</option>
                        <option value="3-4-weeks">3-4 weeks</option>
                        <option value="1-2-months">1-2 months</option>
                        <option value="3-months">3+ months</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select Budget</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-plus">$25,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your project requirements, features needed, and any specific technologies..."
                      rows={5}
                      required
                      className="border-2 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 py-3 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Rocket className="mr-2 h-5 w-5" />
                        Launch My AI Project
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 mr-2" />
                <span className="text-xl font-bold">AI Agent Services</span>
              </div>
              <p className="text-gray-300 mb-4">
                Revolutionary AI-powered development that builds complete applications faster and cheaper than traditional methods.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Web Applications</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Backend Systems</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">AI Features</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Technologies</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">React & Next.js</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Node.js & Python</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cloud Platforms</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">AI & Machine Learning</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Contact</h4>
              <ul className="space-y-2">
                <li><a href="mailto:ai@centurianit.com" className="text-gray-300 hover:text-white transition-colors">ai@centurianit.com</a></li>
                <li><a href="tel:+64212523270" className="text-gray-300 hover:text-white transition-colors">+64 212 523270</a></li>
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Back to CenturianIT</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 CenturianIT AI Agent Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIAgentServices;