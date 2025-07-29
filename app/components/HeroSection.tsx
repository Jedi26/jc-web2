
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ['Developer', 'Designer', 'Creator', 'Innovator', 'Photographer'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = words[currentIndex];
      
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
      } else {
        setCurrentText(prev => current.slice(0, prev.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex(prev => (prev + 1) % words.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, words]);

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/10 text-white/80 px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Available for projects
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">JC</span>
            </h1>
            
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 mb-8 h-12 flex items-center justify-center lg:justify-start">
              Creative{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent ml-2">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            
            <p className="text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Passionate about creating exceptional digital experiences through innovative design, 
              cutting-edge development, and compelling visual storytelling.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#portfolio"
                className="group bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center whitespace-nowrap"
              >
                <i className="ri-eye-line mr-2 group-hover:scale-110 transition-transform"></i>
                View My Work
              </Link>
              
              <Link
                href="#contact"
                className="group bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20 flex items-center justify-center whitespace-nowrap"
              >
                <i className="ri-mail-line mr-2 group-hover:scale-110 transition-transform"></i>
                Get In Touch
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mt-12">
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20 group"
              >
                <i className="ri-github-line text-white group-hover:scale-110 transition-transform"></i>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20 group"
              >
                <i className="ri-linkedin-line text-white group-hover:scale-110 transition-transform"></i>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20 group"
              >
                <i className="ri-twitter-line text-white group-hover:scale-110 transition-transform"></i>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20 group"
              >
                <i className="ri-instagram-line text-white group-hover:scale-110 transition-transform"></i>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                  <img
                    src="https://cdn.jsdelivr.net/gh/Jedi26/portfolio-images@main/images/profileImg1.jpg"
                    alt="JC - Professional Profile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-60 animate-pulse delay-1000"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-8 -left-8 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/90 text-sm font-medium">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
