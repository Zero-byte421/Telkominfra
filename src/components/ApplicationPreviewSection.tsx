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

      {/* Application Preview Section - Conditional Layout */}
      {(appName === 'MyTelkominfra' || appName === 'Presensi') ? (
        // Phone Mockup Grid Layout for MyTelkominfra & Presensi
        <div className={`${lightMode ? 'bg-gray-50' : 'bg-gray-900'} py-20 md:py-32 relative overflow-hidden`}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            {/* Title */}
            <h2 className={`text-4xl md:text-5xl font-bold ${lightMode ? 'text-gray-900' : 'text-white'} mb-16 text-center`} style={{ fontFamily: 'Inter, sans-serif' }}>
              Application Preview
            </h2>

            {/* Grid Layout - 4 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {appScreens && appScreens.map((screen, index) => (
                <div key={index} className="flex flex-col">
                  {/* Text Content Above */}
                  <div className={`mb-6 ${lightMode ? 'text-gray-900' : 'text-white'}`}>
                    <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {screen.title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-80" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {screen.description}
                    </p>
                  </div>

                  {/* Phone Mockup */}
                  <div className="relative mx-auto" style={{ width: '200px' }}>
                    {/* Phone Frame */}
                    <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10" />
                      
                      {/* Screen */}
                      <div className="bg-white rounded-[2rem] overflow-hidden relative" style={{ aspectRatio: '9/19.5' }}>
                        {index === 0 || index === 2 ? (
                          // Login Screen with Red Button
                          <div className="h-full flex flex-col p-6 justify-between bg-white">
                            {/* Logo */}
                            <div className="text-center pt-8">
                              <div className="text-2xl font-bold text-gray-900 mb-1"></div>
                              <div className="text-xs text-gray-500">Welcome to My Telkominfra</div>
                            </div>

                            {/* Login Button */}
                            <div className="pb-12">
                              <button 
                                className="w-full py-3 rounded-lg font-bold text-sm text-white shadow-lg"
                                style={{ backgroundColor: '#DC2626' }}
                              >
                                Masuk
                              </button>
                            </div>
                          </div>
                        ) : (
                          // Dashboard Screen
                          <div className="h-full flex flex-col bg-white">
                            {/* Header */}
                            <div className="px-4 pt-12 pb-4 bg-gradient-to-br from-red-600 to-red-700">
                              <div className="flex items-center justify-between mb-4">
                                <div>
                                  <div className="text-white text-xs opacity-80">Selamat datang</div>
                                  <div className="text-white font-bold text-sm">User Name</div>
                                </div>
                                <div className="w-10 h-10 bg-white rounded-full" />
                              </div>
                            </div>

                            {/* Content Area with Icons */}
                            <div className="flex-1 px-4 py-6">
                              <div className="grid grid-cols-3 gap-3">
                                {/* Icon Grid */}
                                {[1,2,3,4,5,6].map((item) => (
                                  <div key={item} className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-2">
                                      <div className="w-6 h-6 bg-red-600 rounded" />
                                    </div>
                                    <div className="text-xs text-gray-700 text-center">Menu</div>
                                  </div>
                                ))}
                              </div>

                              {/* Info Box */}
                              <div className="mt-6 bg-gray-900 rounded-xl p-4 text-white">
                                <div className="text-xs mb-2 opacity-80">Berita Internal</div>
                                <div className="text-sm font-bold mb-2">TELKOMINFRA FOKUS PACA AKUISISI...</div>
                                <div className="text-xs opacity-70 leading-tight">
                                  Organisasi sehat akan memberikan output...
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Zigzag Card Layout for e-BAST, Dashboard Dismantle, KEPO
        <div className={`${bgColor} py-20 md:py-32 relative overflow-hidden`}>
          {/* Network Node Pattern on Left */}
          <div className="absolute top-0 left-0 w-1/3 h-full opacity-20">
            <svg className="w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="none">
              <circle cx="50" cy="100" r="4" fill="white" opacity="0.6" />
              <circle cx="120" cy="150" r="4" fill="white" opacity="0.6" />
              <circle cx="80" cy="220" r="4" fill="white" opacity="0.6" />
              <circle cx="150" cy="280" r="4" fill="white" opacity="0.6" />
              <circle cx="100" cy="350" r="4" fill="white" opacity="0.6" />
              <circle cx="170" cy="400" r="4" fill="white" opacity="0.6" />
              <circle cx="130" cy="470" r="4" fill="white" opacity="0.6" />
              <circle cx="200" cy="520" r="4" fill="white" opacity="0.6" />
              
              <line x1="50" y1="100" x2="120" y2="150" stroke="white" strokeWidth="1" opacity="0.4" />
              <line x1="120" y1="150" x2="80" y2="220" stroke="white" strokeWidth="1" opacity="0.4" />
              <line x1="80" y1="220" x2="150" y2="280" stroke="white" strokeWidth="1" opacity="0.4" />
              <line x1="150" y1="280" x2="100" y2="350" stroke="white" strokeWidth="1" opacity="0.4" />
              <line x1="100" y1="350" x2="170" y2="400" stroke="white" strokeWidth="1" opacity="0.4" />
              <line x1="170" y1="400" x2="130" y2="470" stroke="white" strokeWidth="1" opacity="0.4" />
              <line x1="130" y1="470" x2="200" y2="520" stroke="white" strokeWidth="1" opacity="0.4" />
            </svg>
          </div>

          {/* Geometric Pattern on Right */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-15">
            <svg className="w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="none">
              {Array.from({ length: 8 }).map((_, row) => 
                Array.from({ length: 3 }).map((_, col) => {
                  const x = 100 + col * 120;
                  const y = 100 + row * 100;
                  return (
                    <g key={`${row}-${col}`}>
                      <path
                        d={`M ${x} ${y} L ${x + 15} ${y - 10} L ${x + 25} ${y} L ${x + 15} ${y + 10} Z`}
                        fill="white"
                        opacity="0.3"
                      />
                      <path
                        d={`M ${x} ${y} L ${x - 15} ${y - 10} L ${x - 25} ${y} L ${x - 15} ${y + 10} Z`}
                        fill="white"
                        opacity="0.3"
                      />
                      <path
                        d={`M ${x} ${y} L ${x - 10} ${y - 15} L ${x} ${y - 25} L ${x + 10} ${y - 15} Z`}
                        fill="white"
                        opacity="0.3"
                      />
                      <path
                        d={`M ${x} ${y} L ${x - 10} ${y + 15} L ${x} ${y + 25} L ${x + 10} ${y + 15} Z`}
                        fill="white"
                        opacity="0.3"
                      />
                    </g>
                  );
                })
              )}
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            {/* Title */}
            <h2 className={`text-4xl md:text-5xl font-bold ${textColor} mb-12 md:mb-16`} style={{ fontFamily: 'Inter, sans-serif' }}>
              Application Preview
            </h2>

            {/* Zigzag Layout */}
            <div className="space-y-8 md:space-y-12">
              {appScreens && appScreens.map((screen, index) => {
                const isEven = index % 2 === 1;
                return (
                  <div 
                    key={index}
                    className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 md:gap-8`}
                  >
                    <div className={`w-full md:w-1/2 ${textColor} ${isEven ? 'md:text-right' : ''}`}>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {screen.title}
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {screen.description}
                      </p>
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                        {index === 0 ? (
                          // Login Preview for first item
                          <div className="h-full flex" style={{ height: '280px' }}>
                            <div className="w-1/2 bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
                              <div className="absolute inset-0 opacity-20">
                                <div className="absolute inset-0" style={{
                                  backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                                  backgroundSize: '20px 100%'
                                }} />
                              </div>
                            </div>
                            
                            <div className="w-1/2 bg-white p-4 flex flex-col justify-center">
                              <div className="mb-4">
                                <h4 className="text-lg font-bold text-gray-900 mb-0.5">KEPO</h4>
                                <p className="text-xs text-gray-600" style={{ fontSize: '9px' }}>Knowledge Education Supply Organization</p>
                              </div>
                              
                              <div className="space-y-2 mb-3">
                                <div>
                                  <label className="block text-xs font-medium text-gray-700 mb-0.5">Username</label>
                                  <input
                                    type="text"
                                    placeholder="Masukan Email"
                                    className="w-full px-2 py-1.5 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                                  />
                                </div>
                                
                                <div>
                                  <label className="block text-xs font-medium text-gray-700 mb-0.5">Password</label>
                                  <input
                                    type="password"
                                    placeholder="Masukan Password"
                                    className="w-full px-2 py-1.5 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                                  />
                                </div>
                              </div>
                              
                              <div className="flex items-center mb-3">
                                <input
                                  type="checkbox"
                                  id={`remember-${index}`}
                                  className="w-3 h-3 text-blue-600 border-gray-300 rounded"
                                />
                                <label htmlFor={`remember-${index}`} className="ml-1.5 text-xs text-gray-600">Remember me</label>
                              </div>
                              
                              <button className="w-full bg-blue-600 text-white py-1.5 rounded font-medium text-xs hover:bg-blue-700 transition-colors mb-2">
                                Login
                              </button>
                              
                              <div className="flex justify-end">
                                <select className="text-xs text-gray-600 border-none bg-transparent focus:outline-none" style={{ fontSize: '10px' }}>
                                  <option>ID</option>
                                  <option>EN</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        ) : (
                          // Placeholder for other items
                          <div className="bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center" style={{ height: '200px' }}>
                            <div className="text-gray-400 text-sm">Preview</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

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
          { title: 'Login SSO', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
          { title: 'Dashboard', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
          { title: 'Documents', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
          { title: 'Settings', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
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
          { title: 'Login SSO', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
          { title: 'Network Monitor', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
          { title: 'Analytics', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
          { title: 'Configuration', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
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
          { title: 'Login SSO', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
          { title: 'Document Hub', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
          { title: 'Search', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
          { title: 'Upload', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
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
          { title: 'Login SSO', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
          { title: 'Dashboard', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
          { title: 'Approvals', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
          { title: 'Profile', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
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
          { title: 'Login SSO', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
          { title: 'Attendance', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
          { title: 'History', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
          { title: 'Profile', description: 'Securely access your account with Single Sign-On (SSO). One login for all your services — fast, safe, and seamless.' },
        ]}
        lightMode={true}
      />
    </section>
  );
}
