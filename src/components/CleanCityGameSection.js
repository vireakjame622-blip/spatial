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
  Info,
  Keyboard,
  Car,
  Recycle
} from 'lucide-react';

const kbdStyle = {
  display: 'inline-block',
  background: '#FFFFFF',
  color: '#0F172A',
  padding: '2px 7px',
  borderRadius: '5px',
  border: '1px solid #CBD5E1',
  boxShadow: '0 1px 1px rgba(0, 0, 0, 0.05), 0 1px 0 #CBD5E1',
  fontSize: '0.74rem',
  fontWeight: 600,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  lineHeight: 1.4
};

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
            background: '#0F172A',
            border: '1px solid #CBD5E1',
            borderRadius: '20px',
            boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.04)',
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
                <span>{isKhmer ? 'ផ្ទាំងលេងធំទូលាយ' : 'Dedicated Page'}</span>
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
                <span>{isKhmer ? 'Standalone Tab' : 'Standalone Tab'}</span>
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
            padding: '22px 26px',
            background: '#FFFFFF',
            borderTop: '1px solid #E2E8F0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            alignItems: 'stretch'
          }}>
            {/* Keyboard / Mouse Controls */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              padding: '16px 18px',
              borderRadius: '14px',
              background: '#F8FAFC',
              border: '1px solid #E2E8F0'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  background: '#EEF2FF',
                  color: '#4F46E5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Keyboard size={15} />
                </div>
                <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#0F172A' }}>
                  {isKhmer ? 'ការបញ្ជាទូទៅ' : 'Movement & Interaction'}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '0.8rem', color: '#334155', alignItems: 'center' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <kbd style={kbdStyle}>W A S D</kbd> <span>{isKhmer ? 'ដើរ' : 'Walk'}</span>
                </span>
                <span style={{ color: '#CBD5E1' }}>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <kbd style={kbdStyle}>Mouse</kbd> <span>{isKhmer ? 'បង្វិលមើល 360°' : '360° Look'}</span>
                </span>
                <span style={{ color: '#CBD5E1' }}>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <kbd style={kbdStyle}>E</kbd> <span>{isKhmer ? 'រើស / ពន្លត់ភ្លើង' : 'Pick / Extinguish'}</span>
                </span>
                <span style={{ color: '#CBD5E1' }}>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <kbd style={kbdStyle}>Q</kbd> <span>{isKhmer ? 'បោះចូលធុង' : 'Drop in Bin'}</span>
                </span>
              </div>
            </div>

            {/* Kong Bey In-Game Vehicle Controls */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              padding: '16px 18px',
              borderRadius: '14px',
              background: '#F8FAFC',
              border: '1px solid #E2E8F0'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  background: '#ECFDF5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Car size={15} />
                </div>
                <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#0F172A' }}>
                  {isKhmer ? 'ការបញ្ជាកង់បី (Tuk-Tuk)' : 'Kong Bey Tuk-Tuk'}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '0.8rem', color: '#334155', alignItems: 'center' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <kbd style={{ ...kbdStyle, background: '#F0FDF4', borderColor: '#86EFAC', color: '#166534' }}>E</kbd> <span>{isKhmer ? 'ឡើងជិះ / ចុះ' : 'Mount / Exit'}</span>
                </span>
                <span style={{ color: '#CBD5E1' }}>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <kbd style={kbdStyle}>W A S D</kbd> <span>{isKhmer ? 'បើកបរ' : 'Drive'}</span>
                </span>
                <span style={{ color: '#CBD5E1' }}>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <kbd style={kbdStyle}>Space</kbd> <span>{isKhmer ? 'ហ្វ្រាំង' : 'Brake'}</span>
                </span>
                <span style={{ color: '#CBD5E1' }}>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <kbd style={kbdStyle}>H</kbd> <span>{isKhmer ? 'ស៊ីផ្លេ' : 'Horn'}</span>
                </span>
                <span style={{ color: '#CBD5E1' }}>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <kbd style={kbdStyle}>V</kbd> <span>{isKhmer ? 'កាមេរ៉ា' : 'Camera'}</span>
                </span>
              </div>
            </div>

            {/* 5-Color Waste Sorting Bins */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              padding: '16px 18px',
              borderRadius: '14px',
              background: '#F8FAFC',
              border: '1px solid #E2E8F0'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  background: '#F0FDF4',
                  color: '#16A34A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Recycle size={15} />
                </div>
                <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#0F172A' }}>
                  {isKhmer ? 'ធុងញែកសំរាម ៥ ពណ៌' : '5-Color Sorting Standard'}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 9px', borderRadius: '6px', background: '#DCFCE7', color: '#15803D', fontSize: '0.74rem', fontWeight: 600 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16A34A', display: 'inline-block' }} />
                  {isKhmer ? 'សរីរាង្គ (Organic)' : 'Organic'}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 9px', borderRadius: '6px', background: '#FEF9C3', color: '#854D0E', fontSize: '0.74rem', fontWeight: 600 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#CA8A04', display: 'inline-block' }} />
                  {isKhmer ? 'ប្លាស្ទិក (Plastic)' : 'Plastic'}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 9px', borderRadius: '6px', background: '#DBEAFE', color: '#1E40AF', fontSize: '0.74rem', fontWeight: 600 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563EB', display: 'inline-block' }} />
                  {isKhmer ? 'កែច្នៃ (Recycle)' : 'Recyclable'}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 9px', borderRadius: '6px', background: '#F1F5F9', color: '#475569', fontSize: '0.74rem', fontWeight: 600 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#64748B', display: 'inline-block' }} />
                  {isKhmer ? 'ទូទៅ (General)' : 'General'}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 9px', borderRadius: '6px', background: '#FEE2E2', color: '#991B1B', fontSize: '0.74rem', fontWeight: 600 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#DC2626', display: 'inline-block' }} />
                  {isKhmer ? 'គ្រោះថ្នាក់ (Hazard)' : 'Hazardous'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
