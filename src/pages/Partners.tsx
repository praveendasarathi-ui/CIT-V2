import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';

const Partners: React.FC = () => {
  const navigate = useNavigate();

  const partners = [
    {
      name: 'SureMDM',
      company: '42Gears',
      type: 'Technology Partner',
      logo: 'https://www.42gears.com/wp-content/uploads/2023/03/42gears-logo.png',
      description: 'Leading Unified Endpoint Management (UEM) solution for Android, iOS, Windows, Linux, and macOS platforms. SureMDM provides comprehensive enterprise mobility management.',
      website: 'https://www.42gears.com',
      services: ['Mobile Device Management', 'Unified Endpoint Management', 'Enterprise Mobility', 'Kiosk Solutions'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      name: 'Jamf',
      company: 'Jamf',
      type: 'Authorized Reseller',
      logo: 'https://companieslogo.com/img/orig/JAMF-35164165.png',
      description: 'The most complete Apple management and security platform. We are authorized resellers providing Jamf solutions for Mac, iPad, iPhone, Apple Watch, Vision Pro and Apple TV device management.',
      website: 'https://www.jamf.com',
      services: ['Apple Device Management', 'Mac Management', 'iOS/iPadOS Management', 'Enterprise Security'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      name: 'Genesys',
      company: 'Genesys',
      type: 'Authorized Reseller',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Genesys_logo.svg/512px-Genesys_logo.svg.png',
      description: 'Leading AI-powered customer experience and contact center platform. Authorized reseller of Genesys Cloud CX solutions for omnichannel customer engagement, workforce optimization, and journey orchestration.',
      website: 'https://www.genesys.com',
      services: ['Contact Center Solutions', 'Customer Experience Platform', 'AI-Powered Routing', 'Workforce Engagement'],
      color: 'from-red-500 to-rose-500',
      bgColor: 'from-red-50 to-rose-50'
    },
    {
      name: 'Akaike Technologies',
      company: 'Akaike',
      type: 'Elevate Partner',
      logo: 'https://www.akaiketech.com/wp-content/uploads/2021/03/akaike-logo.png',
      description: 'CenturianIT is an Elevate Partner with Akaike Technologies, delivering cutting-edge AI, machine learning, and data analytics solutions to transform business operations and drive innovation.',
      website: 'https://www.akaiketech.com',
      services: ['AI & Machine Learning', 'Data Analytics', 'Business Intelligence', 'Digital Innovation'],
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-50 to-cyan-50'
    },
    {
      name: 'Microsoft Cloud Partner Program',
      company: 'Microsoft',
      type: 'Cloud Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png',
      description: 'Member of the Microsoft AI Cloud Partner Program, delivering innovative cloud solutions and services built on Microsoft Azure, Microsoft 365, and Dynamics 365 platforms to help businesses transform digitally.',
      website: 'https://partner.microsoft.com',
      services: ['Azure Cloud Solutions', 'Microsoft 365 Services', 'Dynamics 365 Implementation', 'Cloud Migration'],
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    {
      name: 'Amazon Web Services',
      company: 'AWS',
      type: 'Cloud Partner',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png',
      description: 'World-leading cloud computing platform providing on-demand infrastructure, platform services, and software solutions. Official AWS partner for cloud solutions and migrations.',
      website: 'https://aws.amazon.com',
      services: ['Cloud Infrastructure', 'Cloud Migration', 'Serverless Computing', 'AI/ML Services'],
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'from-orange-50 to-yellow-50'
    },
    {
      name: 'Dreamarch Learnings',
      company: 'Dreamarch',
      type: 'Education Partner',
      logo: null,
      description: 'Innovative educational technology platform focused on transforming learning experiences through cutting-edge digital solutions and interactive learning methodologies.',
      website: 'https://dreamarchlearnings.in/',
      services: ['E-Learning Solutions', 'Educational Technology', 'Learning Management Systems', 'Training & Development'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={() => navigate('/')}
              variant="ghost"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Button>
            <div className="flex items-center">
              <img 
                src="https://api.altan.ai/platform/media/33d91168-3f92-4fa2-8308-8120fb8f4a83?account_id=e3b3cc33-20e0-4efd-8cd1-28e11c191769" 
                alt="CenturianIT Logo" 
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-bold text-xl hidden"
              >
                CenturianIT
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Strategic Partners
          </h1>
          <p className="text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Collaborating with industry leaders to deliver world-class technology solutions and services to our clients.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <Card 
                key={index}
                className="hover:shadow-2xl transition-all duration-300 border-0 shadow-xl overflow-hidden group"
              >
                <CardContent className="p-0">
                  {/* Partner Header with Logo */}
                  <div className={`bg-gradient-to-br ${partner.bgColor} p-8 border-b border-gray-200`}>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`bg-gradient-to-r ${partner.color} text-white border-0`}>
                        {partner.type}
                      </Badge>
                      {partner.website !== '#' && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>

                    {/* Logo Container */}
                    <div className="bg-white rounded-lg p-6 flex items-center justify-center min-h-[140px] group-hover:shadow-md transition-shadow duration-300">
                      {partner.logo ? (
                        <img 
                          src={partner.logo}
                          alt={`${partner.name} Logo`}
                          className="max-h-24 w-auto object-contain"
                          onError={(e) => {
                            // Fallback to text if image fails to load
                            const container = e.currentTarget.parentElement;
                            if (container) {
                              container.innerHTML = `<div class="text-center"><h3 class="text-3xl font-bold bg-gradient-to-r ${partner.color} bg-clip-text text-transparent">${partner.name}</h3></div>`;
                            }
                          }}
                        />
                      ) : (
                        <div className="text-center">
                          <h3 className={`text-3xl font-bold bg-gradient-to-r ${partner.color} bg-clip-text text-transparent`}>
                            {partner.name}
                          </h3>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Partner Details */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {partner.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {partner.description}
                    </p>

                    {/* Services */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                        Key Services
                      </h4>
                      <div className="space-y-2">
                        {partner.services.map((service, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className={`h-4 w-4 mr-2 bg-gradient-to-r ${partner.color} bg-clip-text text-transparent`} style={{color: 'currentColor'}} />
                            <span className="text-gray-700 text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    {partner.website !== '#' && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button 
                          className={`w-full bg-gradient-to-r ${partner.color} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          Visit Partner Website
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in Partnering With Us?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Join our network of trusted partners and together let's deliver exceptional value to our clients.
          </p>
          <Button 
            onClick={() => navigate('/')}
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 CenturianIT. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="/" className="text-blue-300 hover:text-blue-400 transition-colors">Home</a>
            <a href="/privacy-policy" className="text-blue-300 hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-blue-300 hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Partners;