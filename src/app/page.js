'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemStatementSection from '@/components/ProblemStatementSection';
import SolutionSection from '@/components/SolutionSection';
import TargetUsersSection from '@/components/TargetUsersSection';
import SpecsAndBomSection from '@/components/SpecsAndBomSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import DiyMakerLab from '@/components/DiyMakerLab';
import StudentDashboard from '@/components/StudentDashboard';
import BlueprintDownloadsSection from '@/components/BlueprintDownloadsSection';
import CleanCityGameSection from '@/components/CleanCityGameSection';
import ProjectSoftwareSection from '@/components/ProjectSoftwareSection';
import OurImpactSection from '@/components/OurImpactSection';
import UserExperienceSection from '@/components/UserExperienceSection';
import MobileVrPortal from '@/components/MobileVrPortal';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [lang, setLang] = useState('en'); // Default to English
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [viewMode, setViewMode] = useState('auto'); // 'auto', 'mobile_vr', or 'desktop'

  // Load user language preference if previously selected
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('spatial_lang');
      if (savedLang === 'km' || savedLang === 'en') {
        setLang(savedLang);
      }
    }
  }, []);

  const handleSetLang = (newLang) => {
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('spatial_lang', newLang);
    }
  };

  // Device auto-detection: checks screen width and mobile user-agent
  useEffect(() => {
    const checkDevice = () => {
      const ua = typeof navigator !== 'undefined' ? navigator.userAgent || '' : '';
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
      const isNarrow = typeof window !== 'undefined' && window.innerWidth <= 768;
      setIsMobileDevice(isMobileUA || isNarrow);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Update body class for Khmer font
  useEffect(() => {
    if (lang === 'km') {
      document.body.classList.add('lang-khmer');
    } else {
      document.body.classList.remove('lang-khmer');
    }
  }, [lang]);

  // Check hash in URL on initial mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      if (hashId) {
        setTimeout(() => {
          scrollToSection(hashId);
        }, 300);
      }
    }
  }, []);

  const scrollToSection = (sectionId) => {
    setCurrentSection(sectionId);
    if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#${sectionId}`);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Main responsive website showcase view
  const isShowingMobileVr = viewMode === 'mobile_vr';

  // If user explicitly requests Mobile VR mode:
  if (isShowingMobileVr) {
    return (
      <MobileVrPortal
        lang={lang}
        setLang={handleSetLang}
        onSwitchToDesktop={() => setViewMode('desktop')}
      />
    );
  }

  // Desktop Showcase View
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      {/* Top Navbar */}
      <Navbar
        currentSection={currentSection}
        onNavigate={scrollToSection}
        lang={lang}
        setLang={handleSetLang}
        onSwitchToMobileVr={() => setViewMode('mobile_vr')}
      />

      {/* Main Showcase Modules */}
      <main style={{ flex: 1 }}>
        {/* 1. Official Hero Section */}
        <HeroSection
          lang={lang}
          onBlueprintClick={() => scrollToSection('blueprints')}
          onExploreSimulations={() => scrollToSection('clean-city-game')}
          onSpecsClick={() => scrollToSection('cost')}
        />

        {/* 2. Live 3D Unity WebGL Game Showcase (Clean Air Cambodia) — Prominently Positioned */}
        <CleanCityGameSection lang={lang} />

        {/* 2.1 Our Project Software Screenshots Showcase (Custom-Built Unity 3D & VR Software) */}
        <ProjectSoftwareSection lang={lang} />

        {/* 3. Problem Statement (Price Barrier, Passive 2D Learning, Digital Divide) */}
        <ProblemStatementSection lang={lang} />

        {/* 4. Our Solution (4 Pillars: NFC Launch, 3D World, Cardboard Headset, Hands-on Remote) */}
        <SolutionSection
          lang={lang}
          onExploreSimulations={() => scrollToSection('clean-city-game')}
        />

        {/* 4.2 Hardware Engineering: How It Works */}
        <HowItWorksSection lang={lang} />

        {/* 4. Target Users (Resource-limited Schools, STEM Students, Interactive 3D Learners) */}
        <TargetUsersSection lang={lang} />

        {/* 5. Official Hardware Components (11 items) & Comparison */}
        <SpecsAndBomSection lang={lang} />

        {/* 5.1 Our Impact: Massive Scalability, Deeper Spatial Learning, Closing the Digital Divide */}
        <OurImpactSection lang={lang} />

        {/* 5.15 Real Classroom & User Testing Experience (Interactive 3D Carousel) */}
        <UserExperienceSection lang={lang} />

        {/* 5.2 Hands-On Maker Lab (Cutouts, Lens Alignment, ESP32 Code) */}
        <DiyMakerLab lang={lang} />

        {/* 6. Interactive DIY Assembly Tracker & Maker Badges */}
        <StudentDashboard lang={lang} />

        {/* 7. 1:1 Scale Blueprint Downloads & Arduino/ESP32 Code */}
        <BlueprintDownloadsSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
