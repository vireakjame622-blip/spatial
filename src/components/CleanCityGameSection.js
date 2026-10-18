'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  Play, 
  Maximize2, 
  RotateCcw, 
  ExternalLink, 
  Sparkles, 
  Glasses, 
  Wind, 
  Flame, 
  Trash2, 
  ShieldCheck, 
  Layers, 
  Smartphone,
  Info
} from 'lucide-react';

export default function CleanCityGameSection({ lang }) {
  const isKhmer = lang === 'km';
  const iframeRef = useRef(null);
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  const handleFullscreen = () => {
    const el = containerRef.current || iframeRef.current;
    if (!el) return;

    if (!document.fullscreenElement) {
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  const handleReload = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <section 
      id="clean-city-game" 
      style={{
        padding: '90px 0',
        background: '#F8FAFC',
        color: '#0A192F',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background subtle light ambient glow */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(34, 197, 94, 0.08) 0%, rgba(2, 132, 199, 0.04) 50%, transparent 80%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(34, 197, 94, 0.1)',
              color: '#16A34A',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.04em'
            }}>
              <Sparkles size={15} />
              {isKhmer ? 'ហ្គេម 3D VR ជាក់ស្ដែងលើគេហទំព័រ' : 'LIVE 3D WEBGL SIMULATION ON WEBSITE'}
            </span>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(2, 132, 199, 0.08)',
              color: '#0284C7',
              border: '1px solid rgba(2, 132, 199, 0.25)',
              fontSize: '0.82rem',
              fontWeight: 700
            }}>
              <Glasses size={14} />
              {isKhmer ? 'គាំទ្រ Cardboard VR' : 'Cardboard VR Ready'}
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.4vw, 3rem)',
            fontWeight: 800,
            color: '#0A192F',
            marginBottom: '14px',
            letterSpacing: '-0.02em',
            lineHeight: 1.2
          }}>
            {isKhmer ? (
              <>
                ស្វែងយល់ពី <span style={{ color: '#16A34A' }}>Clean Air Cambodia</span> ផ្ទាល់នៅលើគេហទំព័រ
              </>
            ) : (
              <>
                Play <span style={{ color: '#16A34A' }}>Clean Air Cambodia</span> Directly on This Website
              </>
            )}
          </h2>

          <p style={{
            color: '#475569',
            fontSize: '1.08rem',
            maxWidth: '780px',
            margin: '0 auto',
            lineHeight: 1.65
          }}>
            {isKhmer ? (
              'កម្មវិធី Unity 6 ផ្លូវការ៖ បើកបររ៉ឺម៉កកង់បី (Tuk-Tuk), ប្រមូលសំរាមជុំវិញផ្សារធំថ្មី និងមាត់ទន្លេសាប, ញែកចូលធុង ៥ ពណ៌ និងស្តារគុណភាពខ្យល់ឱ្យដល់ ១០០% ដោយផ្ទាល់លើ Browser របស់អ្នក!'
            ) : (
              'Authentic Unity 6 WebGL build: Drive the Tuk-Tuk, clean street waste around Phnom Penh Central Market & Riverside, sort into 5 color-coded bins, and restore air quality directly in your browser!'
            )}
          </p>
        </div>

        {/* Embedded Game Player Container */}
        <div 
          ref={containerRef}
          style={{
            background: 'rgba(15, 23, 42, 0.95)',
            border: '2px solid rgba(34, 197, 94, 0.4)',
            borderRadius: '24px',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 35px rgba(34, 197, 94, 0.2)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Player Toolbar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            padding: '14px 22px',
            background: 'linear-gradient(90deg, rgba(6, 78, 59, 0.5) 0%, rgba(15, 23, 42, 0.95) 100%)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {/* Left: Status & Engine info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#4ADE80',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#22C55E',
                  boxShadow: '0 0 10px #22C55E',
                  display: 'inline-block',
                  flexShrink: 0
                }} />
                <span>PHNOM PENH METROPOLIS • CENTRAL MARKET</span>
              </div>
              <span style={{
                fontSize: '0.75rem',
                padding: '3px 10px',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#94A3B8'
              }}>
                Unity 6000.5 • WebGL
              </span>
            </div>

            {/* Right: Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <button
                onClick={handleReload}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#CBD5E1',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                title={isKhmer ? 'ចាប់ផ្តើមហ្គេមឡើងវិញ' : 'Restart Game'}
              >
                <RotateCcw size={14} />
                <span>{isKhmer ? 'Restart' : 'Restart'}</span>
              </button>

              <button
                onClick={handleFullscreen}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #16A34A 0%, #22C55E 100%)',
                  color: '#FFFFFF',
                  border: '1px solid #4ADE80',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 0 16px rgba(34, 197, 94, 0.35)',
                  transition: 'all 0.2s'
                }}
              >
                <Maximize2 size={15} />
                <span>{isKhmer ? 'ពេញអេក្រង់ (Fullscreen)' : 'Fullscreen'}</span>
              </button>

              <Link
                href="/game"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: '#38BDF8',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  boxShadow: '0 0 12px rgba(56, 189, 248, 0.15)'
                }}
                title={isKhmer ? 'បើកផ្ទាំងលេងធំទូលាយ (Dedicated Game Page)' : 'Open Dedicated Game Page'}
              >
                <ExternalLink size={14} />
                <span>{isKhmer ? '🎮 ផ្ទាំងលេងធំទូលាយ' : '🎮 Dedicated Page'}</span>
              </Link>

              <a
                href="/games/cleancity/index.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, rgba(255, 107, 0, 0.2) 0%, rgba(255, 107, 0, 0.35) 100%)',
                  color: '#FF8A33',
                  border: '1px solid rgba(255, 107, 0, 0.5)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  boxShadow: '0 0 12px rgba(255, 107, 0, 0.2)'
                }}
                title={isKhmer ? 'បើកលេងផ្ទាល់ក្នុង Tab ថ្មី (Standalone Direct Build)' : 'Open Standalone WebGL Build'}
              >
                <ExternalLink size={14} />
                <span>{isKhmer ? '📱 Standalone Tab' : '📱 Standalone Tab'}</span>
              </a>
            </div>
          </div>

          {/* Embedded Game Iframe */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(320px, 56.25vw, 680px)',
            background: '#070B14'
          }}>
            <iframe
              key={iframeKey}
              ref={iframeRef}
              src="/games/cleancity/index.html"
              title="Clean Air Cambodia 3D VR Simulation"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block'
              }}
              allow="fullscreen; autoplay; xr-spatial-tracking; gamepad; accelerometer; gyroscope"
            />
          </div>

          {/* Under-Game Controls & Mission Cheatsheet */}
          <div style={{
            padding: '20px 24px',
            background: 'rgba(10, 15, 30, 0.98)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            alignItems: 'stretch'
          }}>
            {/* Keyboard / Mouse Controls */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              padding: '14px 18px',
              borderRadius: '14px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#FF8A33', display: 'flex', alignItems: 'center', gap: '6px' }}>
                🎮 {isKhmer ? 'ការបញ្ជាទូទៅ (General Controls):' : 'Keyboard & Mouse Controls:'}
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '0.78rem', color: '#CBD5E1', lineHeight: 1.5 }}>
                <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px', border: '1px solid #475569' }}>W,A,S,D</kbd> {isKhmer ? 'ដើរ' : 'Walk'}</span>
                <span>•</span>
                <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px', border: '1px solid #475569' }}>Mouse</kbd> {isKhmer ? 'បង្វិលមើល 360°' : '360° Look'}</span>
                <span>•</span>
                <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px', border: '1px solid #475569' }}>E</kbd> {isKhmer ? 'រើស/ពន្លត់ភ្លើង' : 'Pick/Extinguish'}</span>
                <span>•</span>
                <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px', border: '1px solid #475569' }}>Q</kbd> {isKhmer ? 'បោះចូលធុង' : 'Drop in Bin'}</span>
              </div>
            </div>

            {/* Kong Bey In-Game Vehicle Controls */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              padding: '14px 18px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(15, 23, 42, 0.5) 100%)',
              border: '1px solid rgba(34, 197, 94, 0.35)',
              boxShadow: '0 4px 12px rgba(34, 197, 94, 0.08)'
            }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#4ADE80', display: 'flex', alignItems: 'center', gap: '6px' }}>
                🛺 {isKhmer ? 'ការបញ្ជាកង់បីក្នុងហ្គេម (Kong Bey Tuk-Tuk):' : 'In-Game Kong Bey Controls:'}
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '0.78rem', color: '#E2E8F0', lineHeight: 1.5 }}>
                <span><kbd style={{ background: '#166534', color: '#86EFAC', padding: '2px 6px', borderRadius: '4px', border: '1px solid #22C55E' }}>E</kbd> {isKhmer ? 'ឡើងជិះ / ចុះ' : 'Mount / Exit'}</span>
                <span>•</span>
                <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px', border: '1px solid #475569' }}>W,A,S,D</kbd> {isKhmer ? 'បើកបរ' : 'Drive'}</span>
                <span>•</span>
                <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px', border: '1px solid #475569' }}>Space</kbd> {isKhmer ? 'ហ្វ្រាំង' : 'Brake'}</span>
                <span>•</span>
                <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px', border: '1px solid #475569' }}>H</kbd> {isKhmer ? 'ស៊ីផ្លេ' : 'Horn'}</span>
                <span>•</span>
                <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px', border: '1px solid #475569' }}>V</kbd> {isKhmer ? 'កាមេរ៉ា' : 'Camera'}</span>
              </div>
            </div>

            {/* 5-Color Bins Guide */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              padding: '14px 18px',
              borderRadius: '14px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                ♻️ {isKhmer ? 'ធុងញែកសំរាម ៥ ពណ៌ស្តង់ដារ:' : '5-Color Sorting Standard:'}
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', fontSize: '0.75rem', fontWeight: 700 }}>
                <span style={{ color: '#22C55E' }}>🟢 Organic</span>
                <span style={{ color: '#475569' }}>|</span>
                <span style={{ color: '#EAB308' }}>🟡 Plastic</span>
                <span style={{ color: '#475569' }}>|</span>
                <span style={{ color: '#3B82F6' }}>🔵 Recyclable</span>
                <span style={{ color: '#475569' }}>|</span>
                <span style={{ color: '#CBD5E1' }}>⚪ General</span>
                <span style={{ color: '#475569' }}>|</span>
                <span style={{ color: '#EF4444' }}>🔴 Hazardous</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COMPREHENSIVE IN-GAME KONG BEY (កង់បី) DRIVER DASHBOARD & BOTTOM HUD GUIDE */}
        {/* ========================================================================= */}
        <div style={{
          marginTop: '36px',
          background: 'linear-gradient(145deg, #0B132B 0%, #0F172A 50%, #062319 100%)',
          borderRadius: '24px',
          border: '2px solid rgba(34, 197, 94, 0.35)',
          padding: 'clamp(20px, 3.5vw, 36px)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4), 0 0 35px rgba(34, 197, 94, 0.12)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle ambient vehicle glow */}
          <div style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 70%)',
            filter: 'blur(35px)',
            pointerEvents: 'none'
          }} />

          {/* Section Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #16A34A 0%, #22C55E 100%)',
                  color: '#FFFFFF',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em'
                }}>
                  🇰🇭 {isKhmer ? 'យានជំនិះផ្លូវការក្នុងហ្គេម' : 'OFFICIAL IN-GAME QUEST VEHICLE'}
                </span>
                <span style={{
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: '#38BDF8',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  fontSize: '0.74rem',
                  fontWeight: 700
                }}>
                  {isKhmer ? 'កង់បី 3D (Kong Bey Remorque)' : '3D Remorque Tuk-Tuk'}
                </span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.4rem, 2.4vw, 2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                margin: 0,
                lineHeight: 1.25
              }}>
                {isKhmer ? 'ស្វែងយល់ពីកង់បីក្នុងហ្គេម & ផ្ទាំងព័ត៌មានខាងក្រោម (In-Game Kong Bey & Bottom HUD)' : 'In-Game Kong Bey (Tuk-Tuk) Driver Guide & Bottom Screen HUD'}
              </h3>
            </div>

            <span style={{
              fontSize: '0.82rem',
              color: '#94A3B8',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '6px 14px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              Phsar Thmey & Riverside Zone
            </span>
          </div>

          {/* Main 2-Column Showcase */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            alignItems: 'center'
          }}>
            {/* Left: Vehicle Render & Simulated In-Game Bottom HUD */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* 3D Vehicle Card */}
              <div style={{
                position: 'relative',
                background: 'radial-gradient(ellipse at center, rgba(34, 197, 94, 0.18) 0%, rgba(15, 23, 42, 0.7) 70%)',
                borderRadius: '20px',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                padding: '24px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '220px',
                overflow: 'hidden'
              }}>
                <img
                  src="/images/cambodian_tuktuk.png"
                  alt="Authentic Cambodian Tuk-Tuk 3D Model in Clean City"
                  style={{
                    maxHeight: '190px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.7))',
                    transform: 'scale(1.04)',
                    transition: 'transform 0.3s ease'
                  }}
                />

                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '16px',
                  display: 'flex',
                  gap: '6px'
                }}>
                  <span style={{ background: 'rgba(0, 0, 0, 0.65)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '2px 8px', borderRadius: '6px', fontSize: '0.7rem', color: '#4ADE80', fontWeight: 700 }}>
                    ⚡ 86 km/h Top Speed
                  </span>
                  <span style={{ background: 'rgba(0, 0, 0, 0.65)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '2px 8px', borderRadius: '6px', fontSize: '0.7rem', color: '#38BDF8', fontWeight: 700 }}>
                    📦 10-Item Cargo Bay
                  </span>
                </div>
              </div>

              {/* Exact Simulation of the In-Game Bottom Screen HUD */}
              <div style={{
                background: 'rgba(6, 11, 25, 0.95)',
                border: '1px solid rgba(250, 204, 21, 0.35)',
                borderRadius: '16px',
                padding: '16px 18px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.76rem', fontWeight: 800, color: '#FACC15', letterSpacing: '0.04em' }}>
                    📺 {isKhmer ? 'ផ្ទាំងព័ត៌មានដែលបង្ហាញលើបាតអេក្រង់ហ្គេម (LIVE IN-GAME BOTTOM HUD):' : 'WHAT SHOWS ON THE BOTTOM OF THE SCREEN IN THE GAME:'}
                  </span>
                  <span style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Unity OnGUI Display</span>
                </div>

                {/* Simulated Top HUD Bar */}
                <div style={{
                  background: 'rgba(15, 23, 42, 0.85)',
                  border: '1px solid rgba(250, 204, 21, 0.3)',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  marginBottom: '8px',
                  fontFamily: 'monospace',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#FEF08A',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}>
                  <span>🛺 TUK-TUK ECO EXPRESS:</span>
                  <span style={{ color: '#4ADE80' }}>⚡ 24.0 km/h</span>
                  <span style={{ color: '#64748B' }}>|</span>
                  <span style={{ color: '#38BDF8' }}>📦 Cargo: 7/10 items</span>
                  <span style={{ color: '#64748B' }}>|</span>
                  <span style={{ color: '#F472B6' }}>♻️ Depot Delivery (+50 Pts)</span>
                </div>

                {/* Simulated Bottom Controls Bar */}
                <div style={{
                  background: 'rgba(15, 23, 42, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  fontFamily: 'monospace',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}>
                  <span>🎮 [W/S] Throttle/Rev</span>
                  <span>•</span>
                  <span>[A/D] Steer</span>
                  <span>•</span>
                  <span style={{ color: '#EF4444' }}>[Space] Brake</span>
                  <span>•</span>
                  <span style={{ color: '#FACC15' }}>[H] Horn</span>
                  <span>•</span>
                  <span style={{ color: '#38BDF8' }}>[V] Camera</span>
                  <span>•</span>
                  <span style={{ color: '#4ADE80' }}>[E] Exit</span>
                </div>

                <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '8px', textAlign: 'center' }}>
                  {isKhmer 
                    ? '💡 ពេលអ្នកដើរជិតកង់បីក្នុងហ្គេម វានឹងចេញសារ "🛺 Press [E] to Drive Cambodian Remorque Tuk-Tuk" នៅបាតអេក្រង់។'
                    : '💡 When you walk near the vehicle in-game, it prompts "🛺 Press [E] to Drive Cambodian Remorque Tuk-Tuk" at the bottom.'}
                </div>
              </div>
            </div>

            {/* Right: Step-by-Step Instructions & Capabilities */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Feature 1: Boarding & Mount */}
              <div style={{
                display: 'flex',
                gap: '14px',
                padding: '14px 16px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(34, 197, 94, 0.15)',
                  color: '#4ADE80',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  flexShrink: 0
                }}>
                  1
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '3px' }}>
                    {isKhmer ? 'របៀបឡើងជិះកង់បី (Boarding the Kong Bey)' : 'How to Board the Kong Bey'}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#CBD5E1', margin: 0, lineHeight: 1.5 }}>
                    {isKhmer 
                      ? 'ដើរទៅក្បែរកង់បីដែលចតនៅជិតផ្សារធំថ្មី ឬមាត់ទន្លេ រួចចុចគ្រាប់ចុច [E] (ឬចុចប៊ូតុង ACTION លើទូរស័ព្ទ) ដើម្បីឡើងបើកបរភ្លាមៗ។'
                      : 'Walk within 3.8m of the parked Tuk-Tuk and press [E] (or tap ACTION button on mobile) to enter the driver seat.'}
                  </p>
                </div>
              </div>

              {/* Feature 2: 10-Item Cargo Bay */}
              <div style={{
                display: 'flex',
                gap: '14px',
                padding: '14px 16px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: '#38BDF8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  flexShrink: 0
                }}>
                  2
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '3px' }}>
                    {isKhmer ? 'ឃ្លាំងផ្ទុកសំរាម ១០ មុខ (10-Item Cargo Capacity)' : '10-Item Multi-Bin Cargo Bay'}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#CBD5E1', margin: 0, lineHeight: 1.5 }}>
                    {isKhmer 
                      ? 'បើកកង់បីកាត់គំនរសំរាមលើផ្លូវដើម្បីស្រូប និងប្រមូលសំរាមបានដល់ទៅ ១០ មុខចូលក្នុងឃ្លាំងខាងក្រោយកង់បី យ៉ាងរហ័ស។'
                      : 'Drive over street litter to automatically collect up to 10 items into your rear cargo bed simultaneously.'}
                  </p>
                </div>
              </div>

              {/* Feature 3: Express Delivery & Bonus Points */}
              <div style={{
                display: 'flex',
                gap: '14px',
                padding: '14px 16px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(250, 204, 21, 0.15)',
                  color: '#FACC15',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  flexShrink: 0
                }}>
                  3
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '3px' }}>
                    {isKhmer ? 'ដឹកទៅដេប៉ូកែច្នៃ (+50 PTS) (Recycling Depot Bonus)' : 'Deliver to Recycling Depot (+50 PTS)'}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#CBD5E1', margin: 0, lineHeight: 1.5 }}>
                    {isKhmer 
                      ? 'បើកកង់បីដឹកសំរាមទៅទម្លាក់នៅដេប៉ូកែច្នៃកណ្តាល (Central Recycling Depot) នឹងទទួលបានពិន្ទុបន្ថែម ៥០ ពិន្ទុភ្លាមៗ! បើចុះដើរវិញ ចុច [E]។'
                      : 'Unload full cargo loads at the Central Recycling Depot for a massive +50 Points bonus! Press [E] anytime to dismount.'}
                  </p>
                </div>
              </div>

              {/* Feature 4: Horn & Dual Camera View */}
              <div style={{
                display: 'flex',
                gap: '14px',
                padding: '14px 16px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(236, 72, 153, 0.15)',
                  color: '#EC4899',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  flexShrink: 0
                }}>
                  4
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '3px' }}>
                    {isKhmer ? 'ស៊ីផ្លេ [H] & ប្តូរកាមេរ៉ាក្នុង/ក្រៅ [V] (Horn & Dual Cam)' : 'City Horn [H] & Dual-View Camera [V]'}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#CBD5E1', margin: 0, lineHeight: 1.5 }}>
                    {isKhmer 
                      ? 'ចុចគ្រាប់ចុច [H] ដើម្បីស៊ីផ្លេសំឡេងកង់បីភ្នំពេញពិតៗ និងចុច [V] ដើម្បីប្តូររវាងកាមេរ៉ាក្នុងដៃចង្កូត (1st-Person) និងកាមេរ៉ាមើលពីក្រោយ (3rd-Person)។'
                      : 'Press [H] for realistic 4-stroke Tuk-Tuk horn beeps, and press [V] to switch between first-person driver view and third-person chase camera.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
