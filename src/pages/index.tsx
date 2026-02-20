import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import {
  BarChart3,
  Settings,
  GraduationCap,
  Smartphone,
  Globe,
  Code,
  Menu,
  X,
  MapPin,
  Mail,
  Phone,
  Users,
  Building,
  Calendar,
  ChevronRight,
  Star,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Brain,
  Server,
  Sparkles,
  CloudCog,
  TrendingUp,
  Clock,
  Award,
  ShieldCheck
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const CenturianIT = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  // Logo state for fallback handling
  const [logoError, setLogoError] = useState(false);



  // Newsletter subscription state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);



  // Handle newsletter subscription
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    try {
      // Validate email
      if (!newsletterEmail) {
        toast({
          title: "Email Required",
          description: "Please enter your email address to subscribe.",
          variant: "destructive",
        });
        setIsSubscribing(false);
        return;
      }

      // Send subscription to Altan webhook
      const response = await fetch('https://api.altan.ai/galaxia/hook/pahiDs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Newsletter Subscription',
          email: newsletterEmail,
          phone: 'Not provided',
          message: `New newsletter subscription request from: ${newsletterEmail}`,
          type: 'newsletter_subscription'
        })
      });

      if (response.ok) {
        toast({
          title: "Successfully Subscribed!",
          description: "Thank you for subscribing to our newsletter. You'll receive updates on our latest insights.",
        });

        // Reset email field
        setNewsletterEmail('');
      } else {
        throw new Error('Failed to subscribe');
      }

    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Subscription Failed",
        description: "There was a problem with your subscription. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
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
      const sections = ['home', 'about', 'services', 'industries', 'clients', 'insights', 'contact'];
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

  const services = [
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Transform data into actionable insights with advanced analytics solutions.',
      details: 'Business Intelligence, Data Visualization, Predictive Analytics, Real-time Dashboards',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      icon: Settings,
      title: 'Automation',
      description: 'Streamline operations with intelligent automation solutions.',
      details: 'Process Automation, Workflow Optimization, RPA, AI-powered Automation',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50'
    },
    {
      icon: GraduationCap,
      title: 'ERP',
      description: 'Comprehensive ERP solutions including EduSys and custom implementations.',
      details: 'Odoo, Epicor, Syspro, EduSys Education Management, SAP Implementation, Custom ERP Development',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50'
    },
    {
      icon: Smartphone,
      title: 'Enterprise Mobility',
      description: 'Comprehensive mobile solutions that empower your workforce anywhere, anytime with secure device and application management.',
      details: 'Mobile Device Management (MDM), Mobile Application Management (MAM), Endpoint Hardening, BYOD Solutions, Mobile Security, Cross-platform Apps',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50'
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation to modernize your business.',
      details: 'Cloud Migration, Digital Strategy, Legacy Modernization, Change Management',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-blue-50'
    },
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Tailored software solutions designed for your unique business needs.',
      details: 'Web Applications, Desktop Software, API Development, System Integration',
      color: 'from-teal-500 to-green-500',
      bgColor: 'bg-gradient-to-br from-teal-50 to-green-50'
    },
    {
      icon: Brain,
      title: 'AI Agent Services',
      description: 'Revolutionary AI-powered development service that builds complete web applications, mobile apps, and backend systems in weeks, not months.',
      details: [
        'Full-Stack Web Applications (React, Node.js, databases)',
        'Mobile App Development (React Native, Flutter)',
        'Backend Systems & APIs (scalable architecture)',
        'AI-Powered Features (chatbots, ML, automation)',
        'Cloud Infrastructure (AWS, Azure, deployment)',
        'UI/UX Design (modern, responsive interfaces)',
        '70% cost reduction, 10x faster delivery'
      ],
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-gradient-to-br from-violet-50 to-purple-50'
    },
    {
      icon: Server,
      title: 'AI Generalists & Infrastructure Management',
      description: 'CenturianIT helps enterprises harness the power of AI-driven operations and manage scalable, secure, and cost-efficient IT infrastructure across cloud and virtual desktop environments.',
      details: [
        'AI Generalists (AI copilots, data insights, conversational AI, generative AI)',
        'Infrastructure Management (Windows 365, Azure Virtual Desktop, WVD, multi-cloud, endpoint management)',
        'Performance & Security (proactive monitoring, automated scaling, Zero Trust architecture)',
        'Endpoint Management - Unified Device Management including:',
        '    • SOTI MobiControl',
        '    • SureMDM (42Gears)',
        '    • Microsoft Intune',
        '    • Samsung Knox Manage',
        '    • VMware Workspace ONE',
        '    • Jamf (for Apple devices)'
      ],
      color: 'from-gray-500 to-slate-500',
      bgColor: 'bg-gradient-to-br from-gray-50 to-slate-50'
    },
    {
      icon: CloudCog,
      title: 'Intra-Cloud Migrations',
      description: 'Most IT providers focus on on-prem to cloud or multi-cloud adoption, but very few specialize in seamless cloud-to-cloud migration. CenturianIT enables enterprises to move workloads between AWS, Azure, GCP, OCI, and private clouds without disruption — ensuring business continuity, cost optimization, and compliance.',
      details: [
        'Cloud-to-Cloud Migration (AWS ↔ Azure, Azure ↔ GCP, GCP ↔ AWS, Hybrid ↔ Multi-cloud)',
        'Virtual Desktop Migrations (Windows 365 ↔ AVD ↔ WVD migration strategies, Secure endpoint re-provisioning with SOTI, SureMDM, Intune, Knox, VMware Workspace ONE, Jamf)',
        'AI-Optimized Migration Planning (AI-powered dependency mapping, Automated resource allocation & scaling, Predictive cost modeling)',
        'Industry-Specific Solutions:',
        '    • Healthcare: HIPAA-compliant workload shifts',
        '    • Finance: Real-time data synchronization',
        '    • Retail & Manufacturing: Migration with minimal downtime',
        'Key Benefits:',
        '    • Zero/minimal downtime migrations',
        '    • Compliance-first (GDPR, HIPAA, PCI DSS)',
        '    • Vendor lock-in avoidance',
        '    • AI-powered migration planning',
        '    • Unique positioning in the market'
      ],
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-blue-50'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'Digital health solutions and patient management systems',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Financial Services',
      icon: '🏦',
      description: 'Secure fintech solutions and banking systems',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Retail',
      icon: '🛍️',
      description: 'E-commerce platforms and retail management systems',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      description: 'Industrial automation and supply chain solutions',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      name: 'Education',
      icon: '🎓',
      description: 'Educational technology and learning management systems',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const insights = [
    {
      title: 'The Future of Enterprise Analytics',
      category: 'Analytics',
      date: 'Dec 15, 2024',
      excerpt: 'Exploring how AI-driven analytics is reshaping business intelligence...',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Digital Transformation Best Practices',
      category: 'Strategy',
      date: 'Dec 10, 2024',
      excerpt: 'Key strategies for successful digital transformation initiatives...',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Strategy Digital Transformation Best Practice',
      category: 'Strategy',
      date: 'Dec 12, 2024',
      excerpt: 'Comprehensive guide to digital transformation strategy, implementation roadmaps, and proven methodologies...',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'ERP Implementation Success Stories',
      category: 'ERP',
      date: 'Dec 5, 2024',
      excerpt: 'Real-world case studies of successful ERP deployments...',
      color: 'from-orange-500 to-red-500'
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
                onClick={() => scrollToSection('home')}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                {!logoError ? (
                  <img
                    src="https://api.altan.ai/platform/media/33d91168-3f92-4fa2-8308-8120fb8f4a83?account_id=e3b3cc33-20e0-4efd-8cd1-28e11c191769"
                    alt="CenturianIT Logo"
                    className="h-8 md:h-12 lg:h-16 w-auto object-contain"
                    onError={(e) => {
                      console.error('Logo image failed to load');
                      setLogoError(true);
                    }}
                    onLoad={() => console.log('Logo image loaded successfully')}
                  />
                ) : (
                  <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg font-bold text-sm md:text-lg lg:text-xl">
                    CenturianIT
                  </div>
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Industries', id: 'industries' },
                { name: 'Clients', id: 'clients' },
                { name: 'Insights', id: 'insights' },
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
              <a
                href="/partners"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Partners
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm px-4 py-2"
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <Menu className="h-5 w-5 md:h-6 md:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1 max-h-screen overflow-y-auto">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Industries', id: 'industries' },
                { name: 'Clients', id: 'clients' },
                { name: 'Insights', id: 'insights' },
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
              <a
                href="/partners"
                className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Partners
              </a>
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* PROMOTIONAL BANNER - Free AI Website Offer */}
      <section className="mt-16 md:mt-20 relative overflow-hidden">
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Background with animated gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"></div>

              {/* Content */}
              <div className="relative px-6 md:px-12 py-10 md:py-14 text-center">
                {/* Limited offer badge */}
                <div className="inline-flex items-center justify-center mb-4 md:mb-6">
                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                    <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-yellow-300 animate-bounce" />
                    <span className="text-white font-bold text-sm md:text-base">EXCLUSIVE OFFER - LIMITED TIME</span>
                  </div>
                </div>

                {/* Main headline */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                  Get Your<span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">starts from ₹4,999</span>
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-blue-50 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
                  Launch a professional 5-page AI-based static website for your business. High-performance, SEO-ready, and mobile-friendly.
                </p>

                {/* Key benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-14 max-w-3xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="text-2xl md:text-3xl mb-2">✨</div>
                    <h3 className="text-white font-bold mb-2">Professional Design</h3>
                    <p className="text-blue-100 text-sm">Custom AI-designed pages tailored to your business</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="text-2xl md:text-3xl mb-2">⚡</div>
                    <h3 className="text-white font-bold mb-2">Fast Deployment</h3>
                    <p className="text-blue-100 text-sm">Launched within days using AI automation</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="text-2xl md:text-3xl mb-2">📱</div>
                    <h3 className="text-white font-bold mb-2">Fully Responsive</h3>
                    <p className="text-blue-100 text-sm">Perfect on desktop, tablet, and mobile</p>
                  </div>
                </div>

                {/* What's Included */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20 mb-10 md:mb-14 max-w-2xl mx-auto">
                  <h3 className="text-white font-bold text-lg md:text-xl mb-4">What's Included:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                    <div className="flex items-center text-blue-50">
                      <CheckCircle className="h-5 w-5 text-yellow-300 mr-3 flex-shrink-0" />
                      <span>5 Professional Pages</span>
                    </div>
                    <div className="flex items-center text-blue-50">
                      <CheckCircle className="h-5 w-5 text-yellow-300 mr-3 flex-shrink-0" />
                      <span>AI-Powered Design</span>
                    </div>
                    <div className="flex items-center text-blue-50">
                      <CheckCircle className="h-5 w-5 text-yellow-300 mr-3 flex-shrink-0" />
                      <span>Mobile Responsive</span>
                    </div>
                    <div className="flex items-center text-blue-50">
                      <CheckCircle className="h-5 w-5 text-yellow-300 mr-3 flex-shrink-0" />
                      <span>Live Chat Integration</span>
                    </div>
                  </div>
                </div>

                {/* CTA and limited time badge */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 md:px-12 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-base md:text-lg w-full sm:w-auto flex items-center justify-center"
                  >
                    Get Your Website Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section id="home" className="pt-16 md:pt-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Futuristic Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Futuristic Technology Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Animated Geometric Patterns - Hidden on mobile for performance */}
        <div className="absolute inset-0 overflow-hidden hidden md:block">
          <div className="absolute top-20 left-10 w-32 md:w-64 h-32 md:h-64 border border-cyan-400/30 rotate-45 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 md:w-48 h-24 md:h-48 border border-purple-400/20 rotate-12 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 md:w-32 h-16 md:h-32 border border-blue-400/20 rotate-45 animate-spin"></div>
          <div className="absolute bottom-32 left-1/4 w-8 md:w-16 h-8 md:h-16 border border-pink-400/30 rotate-45 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Transforming Businesses with{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse block sm:inline">
                Next-Gen Technology
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Global expertise in AI, Analytics, ERP, Mobility & Digital Transformation.
              Empowering businesses across Auckland and Bangalore with cutting-edge solutions that define the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 border border-cyan-400/50 w-full sm:w-auto"
              >
                Explore Future Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300 backdrop-blur-sm bg-white/10 w-full sm:w-auto"
              >
                Start Your Journey
              </Button>
            </div>
          </div>

          {/* Futuristic Tech Showcase */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-16">
            <div className="order-2 md:order-1">
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-0 relative">
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="AI and Digital Innovation"
                    className="w-full h-60 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-3 border border-cyan-400/30">
                      <p className="text-white text-sm font-medium">AI-Powered Digital Transformation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 md:order-2 px-4 md:px-0">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Future-Ready Technology Solutions
              </h3>
              <p className="text-gray-200 mb-4 md:mb-6 text-sm md:text-base">
                Our team of experts combines deep technical knowledge and industry insights to deliver
                solutions that not only meet today's needs but also prepare businesses for tomorrow's opportunities.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center group">
                  <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center mr-3 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
                    <CheckCircle className="h-2 md:h-4 w-2 md:w-4 text-white" />
                  </div>
                  <span className="text-gray-200 group-hover:text-white transition-colors duration-300 text-sm md:text-base">Innovation-driven approach</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center mr-3 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                    <CheckCircle className="h-2 md:h-4 w-2 md:w-4 text-white" />
                  </div>
                  <span className="text-gray-200 group-hover:text-white transition-colors duration-300 text-sm md:text-base">Client-centric solutions</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center mr-3 group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                    <CheckCircle className="h-2 md:h-4 w-2 md:w-4 text-white" />
                  </div>
                  <span className="text-gray-200 group-hover:text-white transition-colors duration-300 text-sm md:text-base">Global expertise, local presence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About CenturianIT</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A leading technology solutions provider with a strong presence in Auckland and Bangalore,
              delivering innovative solutions that drive business transformation.
            </p>
          </div>

          {/* Promotional Video Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CenturianIT: Your IT Partner for Success</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how CenturianIT transforms businesses with cutting-edge technology solutions and expert guidance.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-4">
                  <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                    <video
                      controls
                      className="w-full h-auto min-h-[300px] max-h-[500px] object-contain bg-black"
                      poster="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      preload="metadata"
                      style={{ display: 'block' }}
                    >
                      <source
                        src="https://api.altan.ai/platform/media/09abc9ed-36f1-43ba-856d-ecde6db85b93?account_id=e3b3cc33-20e0-4efd-8cd1-28e11c191769"
                        type="video/mp4"
                      />
                      <p className="text-white p-4">
                        Your browser does not support the video tag.
                        <a
                          href="https://api.altan.ai/platform/media/09abc9ed-36f1-43ba-856d-ecde6db85b93?account_id=e3b3cc33-20e0-4efd-8cd1-28e11c191769"
                          className="text-blue-400 underline ml-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download the video instead
                        </a>
                      </p>
                    </video>

                    {/* Video overlay for better UX */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Mission & Values
              </h3>
              <p className="text-gray-600 mb-6">
                We believe in harnessing the power of technology to solve complex business challenges.
                Our team of experts combines deep technical knowledge and industry insights to deliver
                solutions that not only meet today's needs but also prepare businesses for tomorrow's opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center mr-3">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">Innovation-driven approach</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center mr-3">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">Client-centric solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center mr-3">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">Global expertise, local presence</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center transform hover:scale-105 transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <div className="text-4xl mb-4">
                    <Building className="h-12 w-12 text-gray-900" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">Industries</div>
                </CardContent>
              </Card>
              <Card className="text-center transform hover:scale-105 transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
                  <div className="text-4xl mb-4">
                    <Calendar className="h-12 w-12 text-gray-900" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">20</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center transform hover:scale-105 transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6 bg-gradient-to-br from-green-50 to-emerald-50">
                  <div className="text-4xl mb-4">
                    <Globe className="h-12 w-12 text-gray-900" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">2</div>
                  <div className="text-sm text-gray-600">Global Offices</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight Section */}
      <div className="mt-20">
        <Card className="border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-8 py-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
                Founder Spotlight
              </h3>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-white to-blue-50">
              <div className="max-w-4xl mx-auto">
                {/* Founder Name */}
                <div className="text-center mb-8">
                  <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    Naveen Dasarathi
                  </h4>
                  <p className="text-lg text-gray-600 font-medium mb-4">Founder & Technology Strategist</p>

                  {/* Certification Badges */}
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <ShieldCheck className="h-5 w-5" />
                      <span className="font-bold text-sm tracking-wide">DPDP CERTIFIED</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <ShieldCheck className="h-5 w-5" />
                      <span className="font-bold text-sm tracking-wide">NZ PRIVACY CERTIFIED</span>
                    </div>
                  </div>
                </div>

                {/* Founder Description */}
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    CenturianIT is driven by the vision and global leadership of its founder, <span className="font-semibold text-gray-900">Naveen Dasarathi</span> — a technology strategist known for translating bold ideas into measurable business outcomes. With experience spanning New Zealand, India, Australia, and the United States, Naveen brings a cross-market perspective that helps organizations align growth ambitions with risk awareness and sustainable value creation.
                  </p>

                  <p>
                    His career foundation across IT, telecommunications, and AI-led transformation has seen him guide enterprise-scale initiatives that improve profitability, elevate customer experience, and streamline operations. Naveen is a strong advocate for practical innovation — focusing on deploying AI where it delivers tangible impact, backed by disciplined execution, governance, and ethical application.
                  </p>

                  <p>
                    Demonstrating CenturianIT's commitment to trust and responsibility in the digital era, Naveen recently earned certification in India's <span className="font-semibold text-gray-900">Digital Personal Data Protection Act (DPDP)</span>. This milestone strengthens the organization's ability to advise clients on privacy, regulatory readiness, and data stewardship — key pillars of modern digital transformation.
                  </p>

                  <p>
                    At the heart of CenturianIT's journey is Naveen's belief that true innovation happens where technology, business, people, and intelligent systems intersect. His leadership continues to shape the company's mission to empower organizations with resilient, secure, and future-ready technology solutions.
                  </p>
                </div>

              </div>

              {/* Praveen Dasarathi Section */}
              <div className="mt-20 pt-16 border-t border-blue-100">
                <div className="text-center mb-8">
                  <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    Praveen Dasarathi
                  </h4>
                  <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Driving Transformation Through Technology</p>
                  <p className="text-lg text-gray-600 font-medium mb-4">Director at CenturianIT</p>

                  {/* Certification Badges */}
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <ShieldCheck className="h-5 w-5" />
                      <span className="font-bold text-sm tracking-wide">DPDP CERTIFIED</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <ShieldCheck className="h-5 w-5" />
                      <span className="font-bold text-sm tracking-wide">NZ PRIVACY CERTIFIED</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="font-medium text-gray-900 text-center italic mb-8">
                    "I don’t just solve problems — I unlock value through technology."
                  </p>

                  <p>
                    As Director at CenturianIT, Praveen brings a global perspective shaped by hands-on technical expertise and leadership experience across enterprise environments. His work centers on helping organizations translate complex challenges into practical, high-impact technology solutions that deliver measurable business outcomes.
                  </p>

                  <p>
                    With deep expertise spanning enterprise mobility, artificial intelligence, ERP modernization, and IT infrastructure, he's led transformation initiatives across industries and geographies — from frontline implementation to strategic program leadership at global organizations including <span className="font-semibold text-gray-900">Shell and PBT</span>. His approach combines technical depth with execution discipline, ensuring innovation translates into efficiency, profitability, and sustainable growth.
                  </p>

                  <div className="bg-white/50 rounded-xl p-8 border border-blue-100 shadow-inner my-8">
                    <h5 className="font-bold text-gray-900 mb-6 text-center">Impact Highlights</h5>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                          <TrendingUp className="h-5 w-5 text-blue-600" />
                        </div>
                        <p className="text-sm">Delivering over <span className="font-bold text-gray-900">$1M in cost savings</span> through enterprise mobility and IT optimization strategies</p>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                          <Clock className="h-5 w-5 text-purple-600" />
                        </div>
                        <p className="text-sm">Leading cross-functional transformation initiatives that <span className="font-bold text-gray-900">reduced administrative workload by 75%</span></p>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                          <Brain className="h-5 w-5 text-green-600" />
                        </div>
                        <p className="text-sm">Designing <span className="font-bold text-gray-900">AI-enabled workflows</span> that enhanced operational accuracy and productivity</p>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                          <Award className="h-5 w-5 text-yellow-600" />
                        </div>
                        <p className="text-sm">Recipient of the <span className="font-bold text-gray-900">Good Sorts and Golden Kilo Awards</span> for enterprise-wide contributions</p>
                      </div>
                    </div>
                  </div>

                  <p>
                    At CenturianIT, Praveen's mission is to guide clients toward future-ready operating models — modernizing platforms, embedding intelligence into business processes, and enabling scalable digital ecosystems. He believes technology should not only support business strategy but actively accelerate it.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-blue-50 text-center">
                  <h5 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Core Expertise</h5>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      "Enterprise Mobility Management", "Digital Transformation Strategy", "AI & Automation",
                      "ERP Modernization", "Cloud & Infrastructure", "IT Service Management",
                      "Cost Optimization", "Revenue Growth Enablement", "Technology Leadership"
                    ].map((skill, i) => (
                      <Badge key={i} variant="outline" className="border-blue-200 text-blue-700 bg-blue-50/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by innovative businesses across industries to deliver exceptional digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Unhurried.in Client Card */}
            <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer group transform hover:scale-105 border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0 relative">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>

                <div className="relative p-8">
                  {/* Client Logo/Name */}
                  <div className="mb-6">
                    <a
                      href="https://www.unhurried.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 flex items-center justify-center min-h-[120px] group-hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-3xl font-bold text-white text-center">Unhurried</h3>
                      </div>
                    </a>
                  </div>

                  {/* Client Description */}
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      Unhurried.in
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Premium lifestyle and wellness platform delivering curated experiences and mindful living solutions.
                    </p>

                    {/* Services Provided */}
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-xs font-semibold text-gray-500 mb-2">SERVICES PROVIDED</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 text-xs">
                          Digital Transformation
                        </Badge>
                      </div>
                    </div>

                    {/* Visit Website Link */}
                    <div className="pt-4">
                      <a
                        href="https://www.unhurried.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm group/link"
                      >
                        Visit Website
                        <ChevronRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Microgenesis Techsoft Client Card */}
            <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer group transform hover:scale-105 border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0 relative">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>

                <div className="relative p-8">
                  {/* Client Logo/Name */}
                  <div className="mb-6">
                    <a
                      href="https://mgtechsoft.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="bg-white rounded-xl p-6 flex items-center justify-center min-h-[120px] group-hover:shadow-lg transition-shadow duration-300">
                        <img
                          src="https://mgtechsoft.com/wp-content/uploads/2024/12/cropped-mgts-logo.png"
                          alt="Microgenesis Techsoft Logo"
                          className="max-h-20 w-auto object-contain"
                          onError={(e) => {
                            // Fallback to text if logo fails to load
                            const container = e.currentTarget.parentElement;
                            if (container) {
                              container.innerHTML = '<div class="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 flex items-center justify-center min-h-[120px]"><h3 class="text-3xl font-bold text-white text-center">Microgenesis Techsoft</h3></div>';
                            }
                          }}
                        />
                      </div>
                    </a>
                  </div>

                  {/* Client Description */}
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Microgenesis Techsoft
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Leading healthcare technology solutions provider specializing in secure device management and enterprise mobility for healthcare institutions.
                    </p>

                    {/* Services Provided */}
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-xs font-semibold text-gray-500 mb-2">SERVICES PROVIDED</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 text-xs">
                          Enterprise Mobility - Healthcare Devices
                        </Badge>
                      </div>
                    </div>

                    {/* Visit Website Link */}
                    <div className="pt-4">
                      <a
                        href="https://mgtechsoft.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group/link"
                      >
                        Visit Website
                        <ChevronRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Placeholder cards for future clients */}
            <Card className="border-2 border-dashed border-gray-300 hover:border-purple-400 transition-all duration-300 cursor-pointer group overflow-hidden">
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-400 mb-2">Your Business Here</h4>
                <p className="text-gray-400 text-sm text-center">
                  Join our growing list of satisfied clients
                </p>
                <Button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-dashed border-gray-300 hover:border-purple-400 transition-all duration-300 cursor-pointer group overflow-hidden">
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-400 mb-2">Partner With Us</h4>
                <p className="text-gray-400 text-sm text-center">
                  Transform your business with cutting-edge technology
                </p>
                <Button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>

          <Tabs defaultValue="analytics" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-1 mb-6 md:mb-8 bg-white/50 backdrop-blur-sm h-auto p-2">
              {services.map((service, index) => (
                <TabsTrigger
                  key={index}
                  value={service.title.toLowerCase().replace(/\s+/g, '').replace('&', '')}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs sm:text-sm relative px-3 py-3 h-auto min-h-[4rem] flex flex-col items-center justify-center rounded-md whitespace-normal text-center"
                >
                  {service.title === 'AI Agent Services' ? (
                    <div className="flex flex-col items-center gap-1 text-center w-full">
                      <span className="text-xs leading-tight break-words">AI Agent Services</span>
                      <span className="inline-flex items-center px-1 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white animate-pulse">
                        NEW
                      </span>
                    </div>
                  ) : service.title === 'AI Generalists & Infrastructure Management' ? (
                    <div className="flex flex-col items-center gap-1 text-center w-full">
                      <span className="text-xs leading-tight break-words">AI & Infrastructure</span>
                    </div>
                  ) : service.title === 'Intra-Cloud Migrations' ? (
                    <div className="flex flex-col items-center gap-1 text-center w-full">
                      <span className="text-xs leading-tight break-words">Intra-Cloud Migrations</span>
                    </div>
                  ) : service.title === 'Enterprise Mobility' ? (
                    <div className="flex flex-col items-center gap-1 text-center w-full">
                      <span className="text-xs leading-tight break-words">Enterprise Mobility</span>
                    </div>
                  ) : service.title === 'Digital Transformation' ? (
                    <div className="flex flex-col items-center gap-1 text-center w-full">
                      <span className="text-xs leading-tight break-words">Digital Transformation</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-1 text-center w-full">
                      <span className="text-xs leading-tight break-words">{service.title}</span>
                    </div>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service, index) => (
              <TabsContent key={index} value={service.title.toLowerCase().replace(/\s+/g, '').replace('&', '')}>
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-6 md:p-8 bg-gradient-to-br from-white to-blue-50">
                    <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                      <div className={`p-3 md:p-4 rounded-xl bg-gradient-to-r ${service.color} shadow-lg flex items-center justify-center self-center md:self-start`}>
                        <service.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 text-center md:text-left">{service.title}</h3>
                        <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base text-center md:text-left">{service.description}</p>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                          {Array.isArray(service.details) ? service.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mr-2 mt-0.5">
                                <ChevronRight className="h-2 w-2 text-white" />
                              </div>
                              <span className={`text-gray-700 text-xs md:text-sm ${detail.startsWith('    •') ? 'ml-4 md:ml-8' : ''}`}>{detail}</span>
                            </div>
                          )) : service.details.split(', ').map((detail, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mr-2">
                                <ChevronRight className="h-2 w-2 text-white" />
                              </div>
                              <span className="text-gray-700 text-xs md:text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gradient-to-br from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering specialized solutions across diverse industries with deep domain expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:scale-105 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative">
                    <div className="text-4xl mb-4">{industry.icon}</div>
                    <h3 className={`font-bold mb-2 group-hover:bg-gradient-to-r group-hover:${industry.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                      {industry.name}
                    </h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Insights & Thought Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with our latest insights, industry trends, and expert perspectives on technology innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:scale-105 border-0 shadow-lg overflow-hidden"
                onClick={() => {
                  if (insight.title === 'The Future of Enterprise Analytics') {
                    window.location.href = '/insights/enterprise-analytics';
                  } else if (insight.title === 'Digital Transformation Best Practices') {
                    window.location.href = '/insights/digital-transformation';
                  } else if (insight.title === 'Strategy Digital Transformation Best Practice') {
                    window.location.href = '/insights/digital-transformation-strategy';
                  } else if (insight.title === 'ERP Implementation Success Stories') {
                    window.location.href = '/insights/erp-success-stories';
                  }
                }}
              >
                <CardContent className="p-6 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${insight.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative">
                    <Badge className={`mb-3 bg-gradient-to-r ${insight.color} text-white border-0`}>
                      {insight.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{insight.date}</span>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${insight.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <ChevronRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how we can help you achieve your technology goals.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4">Our Offices</h4>

                {/* Auckland Office */}
                <Card className="mb-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-gray-900" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Auckland, New Zealand (HQ)</h4>
                        <p className="text-gray-600 mb-2">43 Huia Road, Papatoetoe, Auckland 2025</p>
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="text-gray-600">+64 212 523270</span>
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="text-gray-600">info@centurianit.co</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Bangalore Office */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-gray-900" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Bangalore, India</h4>
                        <p className="text-gray-600 mb-2">Bangalore, Karnataka, India</p>
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="text-gray-600">+91 6366 246 792</span>
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="text-gray-600">info@centurianit.co</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h4 className="font-bold mb-4">Why Choose CenturianIT?</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center mr-3">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">20+ years of industry experience</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center mr-3">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">Global delivery model</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center mr-3">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">24/7 support and maintenance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center mr-3">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">Proven track record across industries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <p className="text-white mb-4">
                Transforming businesses with technology that delivers results.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => {
                      scrollToSection('services');
                      // Wait for scroll to complete, then click the AI Agent Services tab
                      setTimeout(() => {
                        const aiAgentTab = document.querySelector('[value="aiagentservices"]');
                        if (aiAgentTab) {
                          (aiAgentTab as HTMLElement).click();
                        }
                      }, 500);
                    }}
                    className="text-white hover:text-blue-400 underline underline-offset-[0.25rem] decoration-1 transition-colors cursor-pointer text-left"
                  >
                    AI Agent Services
                  </button>
                </li>
                <li><a href="#" className="text-white hover:text-blue-400 transition-colors">Analytics</a></li>
                <li><a href="#" className="text-white hover:text-blue-400 transition-colors">Automation</a></li>
                <li><a href="#" className="text-white hover:text-blue-400 transition-colors">ERP Solutions</a></li>
                <li><a href="#" className="text-white hover:text-blue-400 transition-colors">Enterprise Mobility</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Industries</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-blue-400 transition-colors">Healthcare</a></li>
                <li><a href="#" className="text-white hover:text-blue-400 transition-colors">Financial Services</a></li>
                <li><a href="#" className="text-white hover:text-blue-400 transition-colors">Retail</a></li>
                <li><a href="#" className="text-white hover:text-blue-400 transition-colors">Manufacturing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                <li><a href="/partners" className="text-white hover:text-blue-400 transition-colors">Our Partners</a></li>
                <li><a href="/admin" className="text-white hover:text-blue-400 transition-colors">Admin Dashboard</a></li>
                <li><a href="/privacy-policy" className="text-white hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="text-white hover:text-blue-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-white">
            <p>&copy; 2024 CenturianIT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div >
  );
};

export default CenturianIT;