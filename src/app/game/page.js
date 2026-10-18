'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Maximize2, RotateCcw, Glasses, Globe, Sparkles } from 'lucide-react';

export default function DedicatedGamePage() {
  const [lang, setLang] = useState('km');
  const [iframeKey, setIframeKey] = useState(0);
  const isKhmer = lang === 'km';

  const handleFullscreen = () => {
    const el = document.getElementById('game-iframe');
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#070B14', color: '#FFFFFF' }}>
      {/* Top Bar Header */}
      <header style={{
        height: '68px',
        background: 'rgba(15, 23, 42, 0.95)',
        borderBottom: '1px solid rgba(34, 197, 94, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        {/* Left: Back button + Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#CBD5E1',
              textDecoration: 'none',
              fontSize: '0.84rem',
              fontWeight: 600,
              border: '1px solid rgba(255, 255, 255, 0.12)'
            }}
          >
            <ArrowLeft size={16} />
            <span>{isKhmer ? 'ត្រឡប់ទៅ Website' : 'Back to Website'}</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/images/spatial_logo.png" alt="Spatial" style={{ height: '46px', width: 'auto' }} />
            <span style={{ fontSize: '0.82rem', color: '#64748B' }}>|</span>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#4ADE80' }}>
              Clean Air Cambodia (Phnom Penh 3D Quest)
            </span>
          </div>
        </div>

        {/* Right: Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => setIframeKey((k) => k + 1)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 12px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#CBD5E1',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '0.82rem',
              cursor: 'pointer'
            }}
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
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #16A34A 0%, #22C55E 100%)',
              color: '#FFFFFF',
              border: '1px solid #4ADE80',
              fontSize: '0.84rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            <Maximize2 size={15} />
            <span>{isKhmer ? 'ពេញអេក្រង់' : 'Fullscreen'}</span>
          </button>

          <button
            onClick={() => setLang(lang === 'km' ? 'en' : 'km')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 12px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '0.82rem',
              cursor: 'pointer'
            }}
          >
            <Globe size={14} color="#FF6B00" />
            <span>{lang === 'km' ? 'EN' : 'ខ្មែរ'}</span>
          </button>
        </div>
      </header>

      {/* Main Game Player */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, position: 'relative', minHeight: 'calc(100vh - 120px)' }}>
          <iframe
            id="game-iframe"
            key={iframeKey}
            src="/games/cleancity/index.html"
            title="Clean Air Cambodia Unity 6 WebGL Game"
            style={{
              width: '100%',
              height: '100%',
              minHeight: 'calc(100vh - 120px)',
              border: 'none',
              display: 'block'
            }}
            allow="fullscreen; autoplay; xr-spatial-tracking; gamepad; accelerometer; gyroscope"
          />
        </div>

        {/* Bottom Quick Controls Bar */}
        <div style={{
          padding: '12px 24px',
          background: '#0B1120',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
          color: '#94A3B8'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <span style={{ color: '#4ADE80', fontWeight: 700 }}>🎮 Controls:</span>
            <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px' }}>W,A,S,D</kbd> Move / Drive Tuk-Tuk</span>
            <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px' }}>Mouse</kbd> 360° Look</span>
            <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px' }}>E</kbd> Pick Up / Deposit / Extinguish Fire</span>
            <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px' }}>Q</kbd> Drop Trash</span>
          </div>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#CBD5E1' }}>
            <span>Phnom Penh Central Market & Riverside • CADT Greenhouse 2026</span>
          </div>
        </div>
      </main>
    </div>
  );
}
