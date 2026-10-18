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

        {/* Authentic Cambodian Tuk-Tuk Spotlight Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(6, 78, 59, 0.85) 100%)',
          borderRadius: '20px',
          border: '1px solid rgba(34, 197, 94, 0.35)',
          padding: '20px 24px',
          marginBottom: '24px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          boxShadow: '0 15px 35px rgba(0,0,0,0.2), 0 0 25px rgba(34, 197, 94, 0.1)',
          flexWrap: 'wrap'
        }}>
          {/* Left: Tuk-Tuk Image with Glow */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '200px',
            flex: '0 0 auto',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.35) 0%, transparent 70%)',
              filter: 'blur(20px)',
              pointerEvents: 'none'
            }} />
            <img
              src="/images/cambodian_tuktuk.png"
              alt="Authentic Cambodian Tuk-Tuk 3D Model"
              style={{
                height: '150px',
                width: 'auto',
                objectFit: 'contain',
                position: 'relative',
                zIndex: 1,
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'
              }}
            />
          </div>

          {/* Right: Vehicle Info & Specifications */}
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{
                background: 'rgba(34, 197, 94, 0.2)',
                color: '#4ADE80',
                border: '1px solid rgba(34, 197, 94, 0.4)',
                padding: '3px 10px',
                borderRadius: '6px',
                fontSize: '0.74rem',
                fontWeight: 800,
                letterSpacing: '0.04em'
              }}>
                🇰🇭 OFFICIAL QUEST VEHICLE
              </span>
              <span style={{ fontSize: '0.75rem', color: '#CBD5E1', fontWeight: 600 }}>
                Phsar Thmey & Sisowath Quay
              </span>
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', margin: 0, lineHeight: 1.3 }}>
              {isKhmer ? 'យានរ៉ឺម៉កកង់បី អេកូឡូស៊ី (Cambodian Eco Tuk-Tuk)' : 'Cambodian Eco Tuk-Tuk (Remorque 3-Wheeler)'}
            </h3>

            <p style={{ fontSize: '0.84rem', color: '#94A3B8', margin: 0, lineHeight: 1.5 }}>
              {isKhmer
                ? 'យានជំនិះ 3D ផ្លូវការក្នុងហ្គេម៖ បើកបរប្រមូលសំរាម ដឹកជញ្ជូនរហូតដល់ ១០ មុខ ញែកចូលធុង ៥ ពណ៌ និងបាញ់ពន្លត់ផ្សែងពុលក្នុងរាជធានីភ្នំពេញ។'
                : 'Featured 3D in-game vehicle: Pilot the 3-wheeled Remorque, pick up street litter, transport up to 10 items to recycling stations, and extinguish toxic smog fires.'}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
              <span style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '8px', fontSize: '0.74rem', color: '#E2E8F0', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                ⚡ {isKhmer ? 'ម៉ូទ័រអេឡិចត្រូនិក Solar' : 'Solar-Electric Drive'}
              </span>
              <span style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '8px', fontSize: '0.74rem', color: '#E2E8F0', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                📦 {isKhmer ? 'ឃ្លាំងផ្ទុក ១០ មុខ' : '10-Item Multi-Bin Cargo'}
              </span>
              <span style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '8px', fontSize: '0.74rem', color: '#E2E8F0', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                🧯 {isKhmer ? 'ប្រព័ន្ធពន្លត់ភ្លើង [E]' : 'Smog Extinguisher [E]'}
              </span>
            </div>
          </div>
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
            alignItems: 'center'
          }}>
            {/* Keyboard / Mouse Controls */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              padding: '12px 16px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FF8A33' }}>
                🎮 {isKhmer ? 'ការបញ្ជា (PC Controls):' : 'Keyboard & Mouse Controls:'}
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '0.78rem', color: '#CBD5E1' }}>
                <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px', border: '1px solid #475569' }}>W,A,S,D</kbd> {isKhmer ? 'ដើរ/បើកបរ' : 'Move/Drive'}</span>
                <span>•</span>
                <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px', border: '1px solid #475569' }}>Mouse</kbd> {isKhmer ? 'បង្វិលមើល' : '360° Look'}</span>
                <span>•</span>
                <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px', border: '1px solid #475569' }}>E</kbd> {isKhmer ? 'រើស/បោះ/ពន្លត់ភ្លើង' : 'Pick/Deposit/Extinguish'}</span>
                <span>•</span>
                <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px', border: '1px solid #475569' }}>Q</kbd> {isKhmer ? 'ទម្លាក់' : 'Drop'}</span>
              </div>
            </div>

            {/* 5-Color Bins Guide */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              padding: '12px 16px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4ADE80' }}>
                ♻️ {isKhmer ? 'ធុងញែកសំរាម ៥ ពណ៌ស្តង់ដារកម្ពុជា:' : '5-Color Cambodian Waste Sorting:'}
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', fontSize: '0.75rem', fontWeight: 600 }}>
                <span style={{ color: '#22C55E' }}>🟢 Organic</span>
                <span>|</span>
                <span style={{ color: '#EAB308' }}>🟡 Plastic</span>
                <span>|</span>
                <span style={{ color: '#3B82F6' }}>🔵 Recyclable</span>
                <span>|</span>
                <span style={{ color: '#94A3B8' }}>⚪ General</span>
                <span>|</span>
                <span style={{ color: '#EF4444' }}>🔴 Hazardous</span>
              </div>
            </div>

            {/* Target Goals */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              padding: '12px 16px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#00F0FF' }}>
                🏆 {isKhmer ? 'គោលដៅបេសកកម្ម (10-Min Quest):' : 'Mission Objectives (10-Min):'}
              </span>
              <div style={{ fontSize: '0.78rem', color: '#CBD5E1', lineHeight: 1.4 }}>
                {isKhmer 
                  ? 'រកពិន្ទុឱ្យបាន 100 PTS • ញែកឱ្យបាន 10 មុខ • រក្សាគុណភាពខ្យល់ AQI > 60% ដើម្បីឈ្នះ!' 
                  : 'Score 100 PTS • Sort 10 items • Keep AQI > 60% & Waste < 50% for Victory!'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
