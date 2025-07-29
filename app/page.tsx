
'use client';

import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TikTokShowcase from './components/TikTokShowcase';
import GitHubProjects from './components/GitHubProjects';
import PortfolioGallery from './components/PortfolioGallery';
import WorkTimeline from './components/WorkTimeline';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import Navigation from './components/Navigation';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'tiktok', 'github', 'portfolio', 'timeline', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} />
      
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <TikTokShowcase />
        <GitHubProjects />
        <PortfolioGallery />
        <WorkTimeline />
        <CertificatesSection />
        <ContactSection />
      </main>
    </div>
  );
}
