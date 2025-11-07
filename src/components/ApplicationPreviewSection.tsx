import React, { useState, useEffect, useRef } from 'react';
import { FileCheck, Upload, BarChart3, BookOpen, Search, User, Settings, Calendar, Clock, Shield, Zap, Layout, RefreshCw, Bell } from 'lucide-react';

function AppSection({
  variant,
  appName,
  tagline,
  description,
  url,
  features,
  appScreens,
  reverse = false,
  lightMode = false,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [activeScreen, setActiveScreen] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (appScreens && appScreens.length > 0) {
      const interval = setInterval(() => {
        setActiveScreen((prev) => (prev + 1) % appScreens.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [appScreens]);

  const bgColor = lightMode 
    ? 'bg-white'
    : variant === 'maroon'
    ? 'bg-gradient-to-br from-[#8B1538] via-[#6B1129] to-[#4D0D1F]'
    : 'bg-gradient-to-br from-[#1B7A8E] via-[#156773] to-[#0F4A55]';

  const textColor = lightMode ? 'text-gray-900' : 'text-white';
  const accentColor = variant === 'maroon' ? '#E31E24' : '#0088CC';

  return (
    <div ref={ref} className="relative">
      {/* Main App Info Section */}
      <div className={`${bgColor} ${textColor} py-20 md:py-32 relative overflow-hidden`}>
        {/* Animated Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: lightMode 
              ? 'radial-gradient(circle, #999 1px, transparent 1px)'
              : 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        {/* Decorative Network Lines */}
        {!lightMode && (
          <>
            <svg className="absolute top-0 left-0 w-full h-full opacity-20" style={{ mixBlendMode: 'screen' }}>
              <line x1="0" y1="0" x2="100%" y2="50%" stroke="white" strokeWidth="1" />
              <line x1="100%" y1="0" x2="0" y2="50%" stroke="white" strokeWidth="1" />
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="1" />
            </svg>
            <div className="absolute top-20 right-20 w-40 h-40 border-2 border-white/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute bottom-20 left-20 w-32 h-32 border-2 border-white/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          </>
        )}

        {/* Decorative Patterns for Light Mode */}
        {lightMode && (
          <>
            <div className="absolute top-10 right-10 w-60 h-60 opacity-5">
              <svg viewBox="0 0 200 200" className="w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
                <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            <div className="absolute bottom-10 left-10 w-60 h-60 opacity-5">
              <svg viewBox="0 0 200 200" className="w-full h-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <rect x="20" y="20" width="160" height="160" fill="none" stroke="currentColor" strokeWidth="1" />
                <rect x="40" y="40" width="120" height="120" fill="none" stroke="currentColor" strokeWidth="1" />
                <rect x="60" y="60" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
          </>
        )}

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
            {/* Content Side */}
            <div className={`${reverse ? 'lg:order-2' : ''} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50px]'}`}>
              {/* Logo Area */}
              <div className="mb-8">
                <div className={`inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-2xl backdrop-blur-md ${lightMode ? 'bg-gray-100' : 'bg-white/10'} transform hover:scale-105 transition-transform duration-300`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg`} style={{ backgroundColor: accentColor }}>
                    {features[0] && React.createElement(features[0].icon, { className: 'text-white', size: 24 })}
                  </div>
                  <span className={`font-bold text-xl ${lightMode ? 'text-gray-900' : 'text-white'}`}>Telkominfra</span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className={`text-5xl md:text-7xl font-bold mb-6 ${lightMode ? 'text-gray-900' : 'text-white'} leading-tight`}>
                  {appName}
                </h2>
                {url && (
                  <a href={url} target="_blank" rel="noopener noreferrer" className={`${lightMode ? 'text-gray-600 hover:text-gray-900' : 'text-white/70 hover:text-white'} text-sm transition-all inline-block mb-6 hover:underline`}>
                    {url}
                  </a>
                )}
                <p className={`${lightMode ? 'text-gray-900' : 'text-white/90'} text-2xl leading-relaxed mb-4 font-semibold`}>
                  {tagline}
                </p>
                <p className={`${lightMode ? 'text-gray-600' : 'text-white/70'} text-lg leading-relaxed max-w-xl`}>
                  {description}
                </p>
              </div>
            </div>

            {/* Mock Device with Modern Design */}
            <div className={`${reverse ? 'lg:order-1' : ''} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'}`}>
              <div className="relative">
                {/* Glowing Background Effect */}
                <div className="absolute -inset-4 rounded-[4rem] opacity-30 blur-2xl animate-pulse" style={{ 
                  background: `radial-gradient(circle, ${accentColor}, transparent)`,
                  animationDuration: '3s'
                }} />
                
                <div className={`relative ${lightMode ? 'bg-gray-100 shadow-2xl' : 'bg-white shadow-2xl'} rounded-[3rem] p-3 transform hover:scale-105 hover:rotate-1 transition-all duration-500`}>
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-[2.5rem] overflow-hidden aspect-[9/16] relative">
                    {/* Mock Screen Content */}
                    <div className="absolute inset-0 bg-white p-6 flex flex-col">
                      {/* Header with Animation */}
                      <div className="mb-6 animate-fadeIn">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300`} style={{ backgroundColor: accentColor }}>
                            {features[0] && React.createElement(features[0].icon, { className: 'text-white', size: 24 })}
                          </div>
                          <div className="relative">
                            <Bell className="text-gray-400 animate-pulse" size={24} />
                            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full" style={{ backgroundColor: accentColor }} />
                          </div>
                        </div>
                        <h3 className="text-gray-900 font-bold text-lg">{appName}</h3>
                        <p className="text-gray-500 text-sm">Welcome back!</p>
                      </div>

                      {/* Quick Stats with Hover Effect */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className={`rounded-xl p-4 transform hover:scale-105 transition-all duration-300 cursor-pointer`} style={{ backgroundColor: `${accentColor}15` }}>
                          <div className="text-2xl font-bold animate-pulse" style={{ color: accentColor }}>24</div>
                          <div className="text-gray-600 text-xs">Active Tasks</div>
                        </div>
                        <div className={`rounded-xl p-4 transform hover:scale-105 transition-all duration-300 cursor-pointer`} style={{ backgroundColor: `${accentColor}15` }}>
                          <div className="text-2xl font-bold animate-pulse" style={{ color: accentColor, animationDelay: '0.5s' }}>12</div>
                          <div className="text-gray-600 text-xs">Pending</div>
                        </div>
                      </div>

                      {/* Menu Grid with Staggered Animation */}
                      <div className="grid grid-cols-3 gap-3">
                        {features.slice(0, 6).map((feature, idx) => (
                          <div 
                            key={idx} 
                            className="flex flex-col items-center transform hover:scale-110 transition-all duration-300 cursor-pointer"
                            style={{
                              animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`
                            }}
                          >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-2 shadow-lg hover:shadow-xl transition-shadow duration-300`} style={{ backgroundColor: accentColor }}>
                              {React.createElement(feature.icon, { className: 'text-white', size: 20 })}
                            </div>
                            <span className="text-gray-700 text-xs text-center font-medium">{feature.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone Notch */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full" />
                </div>

                {/* Floating Badge with Pulse */}
                <div 
                  className="absolute -bottom-4 -right-4 px-6 py-3 rounded-full shadow-2xl font-bold transform hover:scale-110 transition-all duration-300 cursor-pointer animate-pulse"
                  style={{ 
                    backgroundColor: accentColor,
                    color: 'white',
                    animationDuration: '2s'
                  }}
                >
                  <span className="text-sm flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-white animate-ping" />
                    Live
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application List Section - Modern Design */}
      <div className={`${lightMode ? 'bg-gray-50' : 'bg-white'} py-20 relative overflow-hidden`}>
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r" style={{ 
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` 
        }} />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-full" style={{ 
                backgroundColor: `${accentColor}20`,
                color: accentColor
              }}>
                Features
              </span>
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Application List</h3>
            <p className="text-xl text-gray-600">Your Everyday Companion</p>
          </div>

          {/* Features Grid with Modern Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isHovered = hoveredFeature === index;
              return (
                <div
                  key={feature.title}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  style={{
                    transitionDelay: `${index * 0.1}s`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.5s ease-out'
                  }}
                >
                  <div className="relative">
                    {/* Glow Effect on Hover */}
                    {isHovered && (
                      <div className="absolute -inset-2 rounded-2xl opacity-50 blur-xl" style={{ 
                        backgroundColor: accentColor,
                        animation: 'pulse 2s infinite'
                      }} />
                    )}
                    
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <div 
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto transition-all duration-500 shadow-md`}
                        style={{ 
                          backgroundColor: accentColor,
                          transform: isHovered ? 'rotate(10deg) scale(1.1)' : 'rotate(0deg) scale(1)'
                        }}
                      >
                        <Icon className="text-white" size={28} />
                      </div>
                      <h5 className="text-gray-900 font-semibold text-sm text-center">{feature.title}</h5>
                      {feature.subtitle && (
                        <p className="text-gray-500 text-xs text-center mt-1">{feature.subtitle}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Application Preview Section - Modern Carousel */}
      <div className={`${lightMode ? 'bg-white' : 'bg-gray-50'} py-20 relative`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-full" style={{ 
                backgroundColor: `${accentColor}20`,
                color: accentColor
              }}>
                Preview
              </span>
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Application Preview</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appScreens && appScreens.map((screen, index) => {
              const isActive = activeScreen === index;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    transitionDelay: `${index * 0.1}s`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                    transition: 'all 0.5s ease-out'
                  }}
                >
                  {/* Glow Effect for Active Screen */}
                  {isActive && (
                    <div className="absolute -inset-4 rounded-[3rem] opacity-40 blur-2xl animate-pulse" style={{ 
                      backgroundColor: accentColor,
                      animationDuration: '2s'
                    }} />
                  )}
                  
                  {/* Phone Mockup */}
                  <div className={`relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl transform transition-all duration-700 ${isActive ? 'scale-105 -rotate-2' : 'group-hover:scale-105'}`}>
                    <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5] relative">
                      {/* Screen Content */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white p-4 flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-md`} style={{ backgroundColor: accentColor }}>
                            {features[index % features.length] && React.createElement(features[index % features.length].icon, { className: 'text-white', size: 16 })}
                          </div>
                          <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg transform transition-transform duration-500 ${isActive ? 'scale-110' : ''}`} style={{ backgroundColor: `${accentColor}20` }}>
                            {features[index % features.length] && React.createElement(features[index % features.length].icon, { 
                              className: 'text-current', 
                              size: 28,
                              style: { color: accentColor }
                            })}
                          </div>
                          <h4 className="text-gray-900 font-bold text-sm mb-2">{screen.title}</h4>
                          <p className="text-gray-600 text-xs leading-tight">{screen.description}</p>
                        </div>

                        {/* Bottom Bar */}
                        <div className={`rounded-full h-7 mx-auto w-2/3 shadow-inner transition-all duration-300`} style={{ 
                          backgroundColor: accentColor,
                          transform: isActive ? 'scale(1.05)' : 'scale(1)'
                        }} />
                      </div>
                    </div>
                    
                    {/* Notch */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full shadow-lg" />
                  </div>

                  {/* Label */}
                  <div className="text-center mt-6">
                    <p className="text-gray-900 font-semibold text-base">{screen.title}</p>
                    <div className={`h-1 w-12 mx-auto mt-2 rounded-full transition-all duration-300 ${isActive ? 'w-20' : ''}`} style={{ 
                      backgroundColor: isActive ? accentColor : '#e5e7eb'
                    }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {appScreens && appScreens.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveScreen(index)}
                className={`transition-all duration-300 rounded-full ${activeScreen === index ? 'w-8 h-3' : 'w-3 h-3'}`}
                style={{ 
                  backgroundColor: activeScreen === index ? accentColor : '#d1d5db'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default function ApplicationPreviewSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} className="relative bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #1C1C1C 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Animated Background Shapes */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#8B1538] to-[#E31E24] rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-[#0088CC] to-[#1B7A8E] rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
            <div className="mb-10">
              <div className="inline-flex items-center gap-6 mb-8 bg-white rounded-3xl px-8 py-4 shadow-xl">
                <div className="text-7xl font-bold bg-gradient-to-r from-[#8B1538] to-[#E31E24] bg-clip-text text-transparent">2X</div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Revenue</div>
                  <div className="text-3xl font-bold text-gray-900">Growth</div>
                </div>
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-[#1C1C1C] mb-8 leading-tight">
              Application Showcase
            </h1>
            <p className="text-gray-600 text-2xl max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive suite of applications designed to streamline your business operations and boost productivity
            </p>
          </div>
        </div>
      </div>

      {/* e-BAST e-Materai */}
      <AppSection
        variant="maroon"
        appName="e-BAST e-Materai"
        tagline="One app to simplify your life"
        description="With a clean design, powerful features, and fast performance, this app helps you stay organized, boost productivity, and stay connected effortlessly."
        features={[
          { icon: FileCheck, title: 'Dashboard' },
          { icon: Upload, title: 'Upload' },
          { icon: Settings, title: 'Settings' },
          { icon: Shield, title: 'Secure' },
          { icon: BarChart3, title: 'Analytics' },
          { icon: Bell, title: 'Alerts' },
        ]}
        appScreens={[
          { title: 'Login SSO', description: 'Secure single sign-on access' },
          { title: 'Dashboard', description: 'Overview of your activities' },
          { title: 'Documents', description: 'Manage all your files' },
          { title: 'Settings', description: 'Customize your experience' },
        ]}
      />

      {/* Dashboard Dismantle Radio IP */}
      <AppSection
        variant="maroon"
        appName="Dashboard Dismantle Radio IP"
        url="https://amara.telkominfra.com"
        tagline="Your Everyday Companion"
        description="Comprehensive monitoring dashboard for Radio IP management. Monitor network performance, signal quality, and operational status in real-time."
        features={[
          { icon: Layout, title: 'Dashboard' },
          { icon: RefreshCw, title: 'Sync' },
          { icon: User, title: 'Profile' },
          { icon: Zap, title: 'Fast' },
          { icon: BarChart3, title: 'Reports' },
          { icon: Settings, title: 'Config' },
        ]}
        appScreens={[
          { title: 'Network Monitor', description: 'Real-time status monitoring' },
          { title: 'Analytics', description: 'Performance insights' },
          { title: 'Configuration', description: 'System settings' },
          { title: 'Reports', description: 'Detailed analytics' },
        ]}
        reverse={true}
      />

      {/* KEPO */}
      <AppSection
        variant="teal"
        appName="KEPO"
        url="https://kepo.telkominfra.com/login"
        tagline="One app to simplify your life"
        description="Platform digital terintegrasi sebagai repository dokumen acceptance dan pengelolaan penagihan end-to-end. Dilengkapi dengan tanda tangan digital dan e-Materai."
        features={[
          { icon: BookOpen, title: 'Knowledge' },
          { icon: Search, title: 'Search' },
          { icon: FileCheck, title: 'Docs' },
          { icon: Shield, title: 'Secure' },
          { icon: Upload, title: 'Upload' },
          { icon: Clock, title: 'History' },
        ]}
        appScreens={[
          { title: 'Document Hub', description: 'Central repository' },
          { title: 'Search', description: 'Find documents fast' },
          { title: 'Upload', description: 'Add new documents' },
          { title: 'Profile', description: 'User management' },
        ]}
      />

      {/* MyTelkominfra - Light Mode */}
      <AppSection
        variant="maroon"
        appName="MyTelkominfra"
        tagline="One app to simplify your life"
        description="With a clean design, powerful features, and fast performance, AppName helps you stay organized, boost productivity, and stay connected effortlessly."
        features={[
          { icon: Layout, title: 'Dashboard', subtitle: 'Poket' },
          { icon: FileCheck, title: 'Approval' },
          { icon: BarChart3, title: 'Reports' },
          { icon: Settings, title: 'Settings' },
          { icon: User, title: 'Profile' },
          { icon: Calendar, title: 'Schedule' },
        ]}
        appScreens={[
          { title: 'Login SSO', description: 'Secure access portal' },
          { title: 'Dashboard', description: 'Your workspace' },
          { title: 'Approvals', description: 'Pending requests' },
          { title: 'Profile', description: 'Personal info' },
        ]}
        lightMode={true}
        reverse={true}
      />

      {/* Presensi - Light Mode */}
      <AppSection
        variant="teal"
        appName="Presensi"
        tagline="One app to simplify your life"
        description="Modern integrated attendance system. Record attendance easily using various methods including face recognition, GPS, and QR code for maximum accuracy."
        features={[
          { icon: Calendar, title: 'Presensi' },
          { icon: Layout, title: 'Dashboard', subtitle: 'Poket' },
          { icon: Clock, title: 'Time Track' },
          { icon: BarChart3, title: 'Reports' },
          { icon: FileCheck, title: 'Approval' },
          { icon: User, title: 'Profile' },
        ]}
        appScreens={[
          { title: 'Login SSO', description: 'Quick secure login' },
          { title: 'Attendance', description: 'Check in/out' },
          { title: 'History', description: 'View records' },
          { title: 'Profile', description: 'User settings' },
        ]}
        lightMode={true}
      />
    </section>
  );
}
