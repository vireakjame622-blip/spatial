'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Maximize2, RotateCcw, Glasses, Globe, Sparkles } from 'lucide-react';

export default function DedicatedGamePage() {
  const [lang, setLang] = useState('en');
  const [iframeKey, setIframeKey] = useState(0);
  const isKhmer = lang === 'km';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('spatial_lang');
      if (savedLang === 'km' || savedLang === 'en') {
        setLang(savedLang);
      }
    }
  }, []);

  const handleToggleLang = () => {
    const nextLang = lang === 'km' ? 'en' : 'km';
    setLang(nextLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('spatial_lang', nextLang);
    }
  };

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

          <a
            href="/games/cleancity/index.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 12px',
              borderRadius: '8px',
              background: 'rgba(255, 107, 0, 0.15)',
              color: '#FF8A33',
              border: '1px solid rgba(255, 107, 0, 0.3)',
              fontSize: '0.82rem',
              fontWeight: 700,
              textDecoration: 'none'
            }}
          >
            <span>{isKhmer ? 'បើកផ្ទាល់' : 'Direct View'}</span>
          </a>

          <button
            onClick={handleToggleLang}
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

        {/* Bottom Quick Controls & Kong Bey Quick Reference Bar */}
        <div style={{
          padding: '12px 24px',
          background: '#FFFFFF',
          borderTop: '1px solid #E2E8F0',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.82rem',
          color: '#334155',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            <span style={{ color: '#0F172A', fontWeight: 700, marginRight: '4px' }}>
              {isKhmer ? 'ការបញ្ជាកង់បី (Tuk-Tuk):' : 'Tuk-Tuk Controls:'}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 8px', borderRadius: '6px', background: '#F0FDF4', border: '1px solid #BBF7D0', fontSize: '0.78rem' }}>
              <kbd style={{ background: '#DCFCE7', color: '#166534', border: '1px solid #86EFAC', padding: '1px 5px', borderRadius: '4px', fontWeight: 700, fontFamily: 'monospace' }}>E</kbd>
              <span style={{ color: '#15803D', fontWeight: 600 }}>{isKhmer ? 'ឡើងជិះ / ចុះ' : 'Mount / Exit'}</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 8px', borderRadius: '6px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: '0.78rem' }}>
              <kbd style={{ background: '#FFFFFF', color: '#0F172A', border: '1px solid #CBD5E1', padding: '1px 5px', borderRadius: '4px', fontWeight: 700, fontFamily: 'monospace' }}>W A S D</kbd>
              <span>{isKhmer ? 'បើកបរ' : 'Drive'}</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 8px', borderRadius: '6px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: '0.78rem' }}>
              <kbd style={{ background: '#FFFFFF', color: '#0F172A', border: '1px solid #CBD5E1', padding: '1px 5px', borderRadius: '4px', fontWeight: 700, fontFamily: 'monospace' }}>Space</kbd>
              <span>{isKhmer ? 'ហ្វ្រាំង' : 'Brake'}</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 8px', borderRadius: '6px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: '0.78rem' }}>
              <kbd style={{ background: '#FFFFFF', color: '#0F172A', border: '1px solid #CBD5E1', padding: '1px 5px', borderRadius: '4px', fontWeight: 700, fontFamily: 'monospace' }}>H</kbd>
              <span>{isKhmer ? 'ស៊ីផ្លេ' : 'Horn'}</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 8px', borderRadius: '6px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: '0.78rem' }}>
              <kbd style={{ background: '#FFFFFF', color: '#0F172A', border: '1px solid #CBD5E1', padding: '1px 5px', borderRadius: '4px', fontWeight: 700, fontFamily: 'monospace' }}>V</kbd>
              <span>{isKhmer ? 'កាមេរ៉ា' : 'Camera'}</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 8px', borderRadius: '6px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: '0.78rem' }}>
              <kbd style={{ background: '#FFFFFF', color: '#0F172A', border: '1px solid #CBD5E1', padding: '1px 5px', borderRadius: '4px', fontWeight: 700, fontFamily: 'monospace' }}>Q</kbd>
              <span>{isKhmer ? 'បោះសំរាម' : 'Drop Trash'}</span>
            </span>
          </div>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.78rem' }}>
            <span style={{ padding: '3px 8px', borderRadius: '6px', background: '#FEF9C3', color: '#854D0E', fontWeight: 600 }}>10-Item Cargo</span>
            <span style={{ color: '#CBD5E1' }}>•</span>
            <span style={{ padding: '3px 8px', borderRadius: '6px', background: '#DBEAFE', color: '#1E40AF', fontWeight: 600 }}>+50 Pts at Depot</span>
          </div>
        </div>
      </main>
    </div>
  );
}
