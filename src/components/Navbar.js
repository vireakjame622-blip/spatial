'use client';

import React, { useState } from 'react';
import { Globe, Menu, X, Glasses } from 'lucide-react';

export default function Navbar({
  currentSection,
  onNavigate,
  lang,
  setLang,
  onSwitchToMobileVr
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isKhmer = lang === 'km';

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid #E2E8F0',
      boxShadow: '0 1px 4px rgba(10, 25, 47, 0.04)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '86px'
      }}>
        {/* Large SPATIAL Brand Logo */}
        <div 
          onClick={() => onNavigate('hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            padding: '2px 0',
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img
            src="/images/spatial_logo.png"
            alt="Spatial Logo"
            style={{
              height: 'clamp(54px, 8vw, 76px)',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 2px 4px rgba(10, 25, 47, 0.08))'
            }}
          />
        </div>

        {/* Clean Center Navigation (Desktop) */}
        <nav className="desktop-nav">
          {[
            { id: 'hero', labelEn: 'About', labelKm: 'អំពីគម្រោង' },
            { id: 'solution', labelEn: 'Solution', labelKm: 'ដំណោះស្រាយ' },
            { id: 'clean-city-game', labelEn: 'Clean City 3D', labelKm: 'ល្បែងក្រុង 3D 🇰🇭' },
            { id: 'how-it-works', labelEn: 'Hardware', labelKm: 'ផ្នែករឹង' },
            { id: 'cost', labelEn: '$16 Cost', labelKm: 'តម្លៃ $16' },
            { id: 'impact', labelEn: 'Impact', labelKm: 'ផលជះ' },
            { id: 'diy-section', labelEn: 'Maker Lab', labelKm: 'មន្ទីរពិសោធន៍ DIY' },
            { id: 'blueprints', labelEn: 'Blueprints', labelKm: 'ប្លង់ 1:1' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              style={{
                padding: '7px 11px',
                borderRadius: '8px',
                fontSize: '0.84rem',
                fontWeight: currentSection === item.id ? 700 : 500,
                color: currentSection === item.id ? '#FF6B00' : '#334155',
                background: currentSection === item.id ? 'rgba(255, 107, 0, 0.08)' : 'transparent',
                transition: 'all 0.15s ease'
              }}
            >
              {isKhmer ? item.labelKm : item.labelEn}
            </button>
          ))}
        </nav>

        {/* Right Section: Language + Mobile VR Mode Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

          {/* Language Switch */}
          <button
            onClick={() => setLang(lang === 'en' ? 'km' : 'en')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '7px 10px',
              borderRadius: '8px',
              border: '1px solid #E2E8F0',
              background: '#F8FAFC',
              color: '#334155',
              fontSize: '0.8rem',
              fontWeight: 600,
            }}
          >
            <Globe size={14} color="#FF6B00" />
            <span>{lang === 'en' ? 'ខ្មែរ' : 'EN'}</span>
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-only"
            style={{
              padding: '8px',
              borderRadius: '8px',
              border: '1px solid #E2E8F0',
              background: '#FFFFFF',
              color: '#0A192F',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Dedicated Mobile VR Headset Mode Button (Desktop) */}
          <button
            onClick={onSwitchToMobileVr}
            className="btn-primary desktop-only"
            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
          >
            <Glasses size={16} />
            <span>{isKhmer ? 'របៀប VR ទូរស័ព្ទ' : 'Mobile VR Mode'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: '#FFFFFF',
          borderBottom: '1px solid #E2E8F0',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.06)'
        }}>
          {[
            { id: 'hero', labelEn: 'About Spatial', labelKm: 'អំពីគម្រោង' },
            { id: 'solution', labelEn: 'Our Solution', labelKm: 'ដំណោះស្រាយ ៤ យ៉ាង' },
            { id: 'clean-city-game', labelEn: 'Clean City 3D Quest', labelKm: 'ល្បែងក្រុង 3D 🇰🇭' },
            { id: 'how-it-works', labelEn: 'Hardware Engineering', labelKm: 'ផ្នែករឹង (Hardware)' },
            { id: 'cost', labelEn: '$16 Cost Breakdown', labelKm: 'តម្លៃ $16' },
            { id: 'impact', labelEn: 'Our Impact', labelKm: 'ផលជះសង្គម' },
            { id: 'diy-section', labelEn: 'Hands-On Maker Lab', labelKm: 'មន្ទីរពិសោធន៍ DIY' },
            { id: 'student-dashboard', labelEn: 'DIY Tracker', labelKm: 'តារាងតាមដាន DIY' },
            { id: 'blueprints', labelEn: 'Blueprints & Code', labelKm: 'ប្លង់កាត់ & កូដ' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              style={{
                textAlign: 'left',
                padding: '10px 14px',
                borderRadius: '8px',
                fontSize: '0.92rem',
                fontWeight: currentSection === item.id ? 700 : 500,
                color: currentSection === item.id ? '#FF6B00' : '#0A192F',
                background: currentSection === item.id ? 'rgba(255, 107, 0, 0.08)' : '#F8FAFC'
              }}
            >
              {isKhmer ? item.labelKm : item.labelEn}
            </button>
          ))}

          {/* Quick Switch to Mobile VR Button */}
          <button
            onClick={() => {
              onSwitchToMobileVr();
              setMobileMenuOpen(false);
            }}
            className="btn-primary"
            style={{ width: '100%', padding: '12px', marginTop: '8px' }}
          >
            <Glasses size={16} />
            <span>{isKhmer ? 'បើករបៀប VR ទូរស័ព្ទ (Mobile VR)' : 'Switch to Mobile VR Mode'}</span>
          </button>
        </div>
      )}

    </header>
  );
}
