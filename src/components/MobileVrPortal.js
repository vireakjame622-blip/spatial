'use client';

import React, { useState, useEffect } from 'react';
import { 
  Glasses, 
  Smartphone, 
  RotateCcw, 
  Maximize2, 
  Radio, 
  Sliders, 
  Compass, 
  Globe, 
  CheckCircle2, 
  Sparkles, 
  Flame, 
  Trash2, 
  Monitor, 
  Play, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import SimulationPlayerModal from './SimulationPlayerModal';

export default function MobileVrPortal({ lang, setLang, onSwitchToDesktop }) {
  const isKhmer = lang === 'km';

  // VR & Calibration State
  const [activeSimulation, setActiveSimulation] = useState(null);
  const [lensPreset, setLensPreset] = useState('42mm'); // '42mm' or '37mm'
  const [ipdValue, setIpdValue] = useState(64); // 64mm IPD default
  const [controllerConnected, setControllerConnected] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [fullscreenActive, setFullscreenActive] = useState(false);

  // Monitor orientation
  useEffect(() => {
    const handleOrientation = () => {
      if (typeof window !== 'undefined') {
        const landscape = window.innerWidth > window.innerHeight;
        setIsLandscape(landscape);
      }
    };
    handleOrientation();
    window.addEventListener('resize', handleOrientation);
    window.addEventListener('orientationchange', handleOrientation);
    return () => {
      window.removeEventListener('resize', handleOrientation);
      window.removeEventListener('orientationchange', handleOrientation);
    };
  }, []);

  const requestFullscreen = () => {
    if (typeof document !== 'undefined') {
      const elem = document.documentElement;
      if (!document.fullscreenElement) {
        if (elem.requestFullscreen) elem.requestFullscreen();
        else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
        setFullscreenActive(true);
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
        setFullscreenActive(false);
      }
    }
  };

  // Automatically detect physical or Bluetooth gamepad if paired at OS level
  useEffect(() => {
    let animId;
    const checkGamepad = () => {
      const gamepads = typeof navigator !== 'undefined' && navigator.getGamepads ? navigator.getGamepads() : [];
      const hasActive = Array.from(gamepads).some(gp => gp && gp.connected);
      if (hasActive) setControllerConnected(true);
      animId = requestAnimationFrame(checkGamepad);
    };
    animId = requestAnimationFrame(checkGamepad);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Authentic Clean City Unity 6 VR Simulation
  const vrSimulations = [
    {
      id: 'sim-cleancity-01',
      title: 'Clean City: Central Market (Phsar Thmey)',
      titleKhmer: 'ទីក្រុងស្អាត៖ ផ្សារធំថ្មី (Eco-Quest)',
      category: 'Clean City',
      vehicle: 'Eco Bicycle & Tuk-Tuk',
      badge: '🇰🇭 Official Unity 3D',
      tagColor: '#22C55E',
      gameUrl: '/games/cleancity/index.html',
      descEn: 'Drive Tuk-Tuk, sort street litter across 5 bins, extinguish smoke fires, and restore Air Quality to 100%.',
      descKm: 'បើកបរយាន Tuk-Tuk រើសសម្រាម ញែកចូលធុង ៥ ពណ៌ ពន្លត់ភ្លើងផ្សែងពុល និងស្តារគុណភាពខ្យល់ឱ្យដល់ ១០០%។',
      type: 'cleancity',
      level: 'Eco Hero'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#060F1E',
      color: '#FFFFFF',
      fontFamily: 'var(--font-main)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* 1. Mobile App Bar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(6, 15, 30, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src="/images/spatial_logo.png"
            alt="Spatial Logo"
            style={{ height: '38px', width: 'auto', display: 'block' }}
          />
          <div style={{
            fontSize: '0.65rem',
            background: 'rgba(255, 107, 0, 0.18)',
            color: '#FF8A33',
            border: '1px solid rgba(255, 107, 0, 0.4)',
            padding: '2px 8px',
            borderRadius: '9999px',
            fontWeight: 800,
            letterSpacing: '0.04em'
          }}>
            PHONE VR
          </div>
        </div>

        {/* Right Actions: Lang + Switch to Desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'km' : 'en')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 10px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#FFFFFF',
              fontSize: '0.78rem',
              fontWeight: 600,
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            <Globe size={13} color="#FF8A33" />
            <span>{lang === 'en' ? 'ខ្មែរ' : 'EN'}</span>
          </button>

          {/* Switch to Full Desktop Showcase Button */}
          <button
            onClick={onSwitchToDesktop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              background: 'rgba(0, 240, 255, 0.12)',
              color: '#00F0FF',
              fontSize: '0.78rem',
              fontWeight: 700,
              border: '1px solid rgba(0, 240, 255, 0.3)'
            }}
            title="Switch to Desktop Showcase"
          >
            <Monitor size={14} />
            <span>{isKhmer ? 'ផ្ទាំងកុំព្យូទ័រ' : 'Desktop View'}</span>
          </button>
        </div>
      </header>

      {/* 2. Cardboard Slotting Header & Reticle Divider */}
      <section style={{
        padding: '20px 16px',
        background: 'linear-gradient(180deg, rgba(255, 107, 0, 0.12) 0%, rgba(6, 15, 30, 0) 100%)',
        textAlign: 'center'
      }}>
        {/* Instruction Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 12px',
          borderRadius: '9999px',
          background: 'rgba(255, 107, 0, 0.2)',
          color: '#FF8A33',
          fontSize: '0.75rem',
          fontWeight: 800,
          marginBottom: '10px',
          border: '1px solid rgba(255, 107, 0, 0.4)'
        }}>
          <Glasses size={14} />
          {isKhmer ? 'របៀបវ៉ែនតាក្រដាសកាតុង Cardboard VR' : 'Cardboard VR Headset Mode'}
        </div>

        <h1 style={{
          fontSize: 'clamp(1.35rem, 5vw, 1.8rem)',
          fontWeight: 800,
          color: '#FFFFFF',
          marginBottom: '8px',
          letterSpacing: '-0.02em',
          lineHeight: 1.25
        }}>
          {isKhmer ? (
            'ដាក់ទូរស័ព្ទចូលទៅក្នុងវ៉ែនតា Cardboard VR'
          ) : (
            'Slot Phone into Spatial VR Headset'
          )}
        </h1>

        <p style={{
          fontSize: '0.86rem',
          color: '#94A3B8',
          maxWidth: '460px',
          margin: '0 auto 16px auto',
          lineHeight: 1.5
        }}>
          {isKhmer ? (
            'បង្វិលទូរស័ព្ទជាផ្ដេក (Landscape) រួចតម្រឹមបន្ទាត់កណ្តាលឱ្យត្រូវនឹងជញ្ជាំងចែកភ្នែកនៃវ៉ែនតា។'
          ) : (
            'Rotate phone horizontally and align the center white line with the headset optical septum divider.'
          )}
        </p>

        {/* Visual Dual-Eye Slotting Guide Graphic */}
        <div style={{
          maxWidth: '400px',
          margin: '0 auto',
          background: 'rgba(14, 25, 45, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '16px',
          padding: '14px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)'
        }}>
          {/* Authentic Kit Photo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle at center, rgba(255, 107, 0, 0.16) 0%, rgba(255, 255, 255, 0.04) 75%, transparent 100%)',
            borderRadius: '14px',
            padding: '12px 8px',
            marginBottom: '12px',
            border: '1px solid rgba(255, 107, 0, 0.2)'
          }}>
            <img
              src="/images/spatial_vr_kit.png"
              alt="Spatial Cardboard VR Headset & Controller"
              style={{
                maxHeight: '135px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 8px 18px rgba(0, 0, 0, 0.55))'
              }}
            />
          </div>

          {/* Dual Eye Preview Box */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            height: '90px',
            background: '#020610',
            borderRadius: '10px',
            overflow: 'hidden',
            border: '1px dashed rgba(255, 107, 0, 0.4)'
          }}>
            {/* Left Eye Chamber */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px'
            }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '2px solid rgba(0, 240, 255, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00F0FF',
                fontSize: '0.75rem',
                fontWeight: 800
              }}>
                L
              </div>
              <span style={{ fontSize: '0.68rem', color: '#64748B' }}>
                {isKhmer ? 'ភ្នែកឆ្វេង (42mm)' : 'Left Eye (42mm)'}
              </span>
            </div>

            {/* Central Optical Divider Line (Cardboard Septum) */}
            <div style={{
              width: '3px',
              height: '100%',
              background: 'linear-gradient(180deg, #FF6B00 0%, #FFFFFF 50%, #00F0FF 100%)',
              boxShadow: '0 0 10px #FFFFFF',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: '#FF6B00',
                color: '#FFFFFF',
                fontSize: '0.6rem',
                fontWeight: 900,
                padding: '2px 4px',
                borderRadius: '4px',
                whiteSpace: 'nowrap'
              }}>
                {ipdValue}mm IPD
              </div>
            </div>

            {/* Right Eye Chamber */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px'
            }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '2px solid rgba(0, 240, 255, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00F0FF',
                fontSize: '0.75rem',
                fontWeight: 800
              }}>
                R
              </div>
              <span style={{ fontSize: '0.68rem', color: '#64748B' }}>
                {isKhmer ? 'ភ្នែកស្តាំ (42mm)' : 'Right Eye (42mm)'}
              </span>
            </div>
          </div>

          {/* Quick Action Buttons: Fullscreen & BLE */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '12px' }}>
            <button
              onClick={requestFullscreen}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '9px 12px',
                borderRadius: '10px',
                background: fullscreenActive ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                color: fullscreenActive ? '#4ADE80' : '#FFFFFF',
                fontSize: '0.78rem',
                fontWeight: 700,
                border: fullscreenActive ? '1px solid #4ADE80' : '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              <Maximize2 size={14} />
              <span>{fullscreenActive ? (isKhmer ? 'ពេញអេក្រង់' : 'Fullscreen On') : (isKhmer ? 'ពង្រីកពេញអេក្រង់' : 'Fullscreen VR')}</span>
            </button>

            <button
              onClick={() => setActiveSimulation(vrSimulations[0])}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '9px 12px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #16A34A 0%, #22C55E 100%)',
                color: '#FFFFFF',
                fontSize: '0.78rem',
                fontWeight: 700,
                border: '1px solid #4ADE80'
              }}
            >
              <Play size={14} fill="currentColor" />
              <span>{isKhmer ? 'លេង VR Clean City' : 'Play Clean City VR'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Stereoscopic 3D VR Lab Cards */}
      <main style={{ flex: 1, padding: '16px', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '14px'
        }}>
          <h2 style={{
            fontSize: '1.05rem',
            fontWeight: 800,
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Sparkles size={16} color="#FF6B00" />
            {isKhmer ? 'ជ្រើសរើសមេរៀន 3D VR ដើម្បីចាប់ផ្តើម' : 'Choose 3D VR Simulation'}
          </h2>
          <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>
            {vrSimulations.length} Labs
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {vrSimulations.map((sim) => (
            <div
              key={sim.id}
              style={{
                background: 'rgba(14, 25, 45, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                transition: 'border-color 0.2s ease'
              }}
            >
              {/* Card Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      color: sim.tagColor,
                      border: `1px solid ${sim.tagColor}44`
                    }}>
                      {sim.badge}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#64748B' }}>
                      {sim.category}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.3 }}>
                    {isKhmer ? sim.titleKhmer : sim.title}
                  </h3>
                </div>

                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(255, 107, 0, 0.15)',
                  color: '#FF6B00',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Glasses size={18} />
                </div>
              </div>

              {/* Authentic Cambodian Tuk-Tuk 3D Preview Image */}
              <div style={{
                position: 'relative',
                height: '140px',
                borderRadius: '12px',
                background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.22) 0%, rgba(10, 15, 30, 0.95) 75%)',
                border: '1px solid rgba(34, 197, 94, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img
                  src="/images/cambodian_tuktuk.png"
                  alt="Cambodian Tuk-Tuk VR Vehicle"
                  style={{
                    maxHeight: '125px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.6))'
                  }}
                />
                <span style={{
                  position: 'absolute',
                  bottom: '8px',
                  right: '10px',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: '#4ADE80',
                  background: 'rgba(0, 0, 0, 0.7)',
                  padding: '2px 8px',
                  borderRadius: '6px'
                }}>
                  {sim.vehicle}
                </span>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.82rem', color: '#94A3B8', lineHeight: 1.5 }}>
                {isKhmer ? sim.descKm : sim.descEn}
              </p>

              {/* Direct Stereoscopic Launch Button */}
              <button
                onClick={() => setActiveSimulation(sim)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                  padding: '12px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #FF6B00 0%, #FF8533 100%)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  boxShadow: '0 4px 16px rgba(255, 107, 0, 0.35)',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '4px'
                }}
              >
                <Play size={16} fill="#FFFFFF" />
                <span>{isKhmer ? 'បើកដំណើរការ 3D VR Stereo' : 'Launch Stereoscopic 3D VR'}</span>
              </button>
            </div>
          ))}
        </div>

        {/* 4. Cardboard Optics Calibration Controls */}
        <div style={{
          marginTop: '24px',
          background: 'rgba(14, 25, 45, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '18px 16px'
        }}>
          <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sliders size={16} color="#00F0FF" />
            {isKhmer ? 'ការកំណត់ឡេនវ៉ែនតា (Optics Calibration)' : 'Cardboard Lens Calibration'}
          </h4>

          {/* Lens Presets */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            {[
              { id: '42mm', label: '42mm Biconvex (Official Standard, ~95° FOV)' },
              { id: '37mm', label: '37mm Lens (~80° FOV)' }
            ].map(p => (
              <button
                key={p.id}
                onClick={() => setLensPreset(p.id)}
                style={{
                  flex: 1,
                  padding: '8px 10px',
                  borderRadius: '8px',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  background: lensPreset === p.id ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  color: lensPreset === p.id ? '#00F0FF' : '#94A3B8',
                  border: lensPreset === p.id ? '1px solid #00F0FF' : '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* IPD Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#94A3B8', marginBottom: '6px' }}>
              <span>{isKhmer ? 'គម្លាតរវាងភ្នែក (Interpupillary Distance)' : 'Eye Distance (IPD)'}</span>
              <span style={{ color: '#FF8A33', fontWeight: 700 }}>{ipdValue} mm</span>
            </div>
            <input
              type="range"
              min="58"
              max="72"
              value={ipdValue}
              onChange={(e) => setIpdValue(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#FF6B00' }}
            />
          </div>
        </div>

        {/* 5. Switch to Desktop Showcase Banner */}
        <div style={{
          marginTop: '24px',
          textAlign: 'center',
          padding: '20px',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <p style={{ fontSize: '0.82rem', color: '#94A3B8', marginBottom: '12px' }}>
            {isKhmer ? (
              'ចង់អានប្លង់កាត់ ១:១, គំនូសតខ្សែ ESP32 និងតារាងតម្លៃ $16 ពេញលេញមែនទេ?'
            ) : (
              'Looking for 1:1 blueprints, ESP32 wiring schematics, and full $16 BOM specs?'
            )}
          </p>
          <button
            onClick={onSwitchToDesktop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 18px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#FFFFFF',
              fontSize: '0.85rem',
              fontWeight: 700,
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <Monitor size={15} color="#00F0FF" />
            <span>{isKhmer ? 'ប្តូរទៅកាន់ផ្ទាំងទូទៅ (Desktop Showcase)' : 'Switch to Desktop Showcase'}</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        padding: '16px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        fontSize: '0.72rem',
        color: '#64748B'
      }}>
        SPATIAL VR • Make it easy, efficient, affordable.
      </footer>

      {/* 6. Active Simulation Player in Auto-Stereo Mode */}
      {activeSimulation && (
        <SimulationPlayerModal
          simulation={activeSimulation}
          onClose={() => setActiveSimulation(null)}
          lang={lang}
          initialVrStereo={true}
        />
      )}
    </div>
  );
}
