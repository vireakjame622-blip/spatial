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
            <span>📱 {isKhmer ? 'បើកផ្ទាល់' : 'Direct View'}</span>
          </a>

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

        {/* Bottom Quick Controls & Kong Bey Quick Reference Bar */}
        <div style={{
          padding: '12px 24px',
          background: '#0B1120',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
          color: '#94A3B8',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <span style={{ color: '#4ADE80', fontWeight: 700 }}>🛺 {isKhmer ? 'កង់បីក្នុងហ្គេម (Kong Bey):' : 'Kong Bey Controls:'}</span>
            <span><kbd style={{ background: '#166534', color: '#86EFAC', padding: '2px 6px', borderRadius: '4px', border: '1px solid #22C55E' }}>E</kbd> {isKhmer ? 'ឡើងជិះ / ចុះ' : 'Mount/Exit'}</span>
            <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px' }}>W,A,S,D</kbd> {isKhmer ? 'បើកបរ' : 'Drive'}</span>
            <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px' }}>Space</kbd> {isKhmer ? 'ហ្វ្រាំង' : 'Brake'}</span>
            <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px' }}>H</kbd> {isKhmer ? 'ស៊ីផ្លេ' : 'Horn'}</span>
            <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px' }}>V</kbd> {isKhmer ? 'កាមេរ៉ា' : 'Camera'}</span>
            <span><kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px' }}>Q</kbd> {isKhmer ? 'បោះសំរាម' : 'Drop Trash'}</span>
          </div>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#CBD5E1' }}>
            <span style={{ color: '#FACC15', fontWeight: 600 }}>📦 10-Item Cargo</span>
            <span>•</span>
            <span style={{ color: '#38BDF8', fontWeight: 600 }}>♻️ +50 Pts at Depot</span>
          </div>
        </div>

        {/* Detailed Kong Bey Bottom Guide Section */}
        <div style={{
          padding: '28px 24px 40px',
          background: 'linear-gradient(180deg, #070B14 0%, #0F172A 100%)',
          borderTop: '1px solid rgba(34, 197, 94, 0.25)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #16A34A 0%, #22C55E 100%)',
                  color: '#FFFFFF',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.76rem',
                  fontWeight: 800
                }}>
                  🇰🇭 {isKhmer ? 'យានជំនិះផ្លូវការក្នុងហ្គេម' : 'OFFICIAL IN-GAME QUEST VEHICLE'}
                </span>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                  {isKhmer ? 'ការណែនាំពីកង់បី & ផ្ទាំងព័ត៌មានខាងក្រោម (In-Game Kong Bey & Bottom HUD)' : 'In-Game Kong Bey Driver Guide & Bottom HUD Display'}
                </h2>
              </div>

              <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>
                Phsar Thmey Central Market & Riverside Depot
              </span>
            </div>

            {/* Grid layout */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
              {/* Left: 3D Vehicle Showcase & In-Game Bottom HUD box */}
              <div style={{
                background: 'rgba(15, 23, 42, 0.7)',
                borderRadius: '18px',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 0' }}>
                  <img
                    src="/images/cambodian_tuktuk.png"
                    alt="Authentic Cambodian Tuk-Tuk"
                    style={{ maxHeight: '160px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.6))' }}
                  />
                </div>

                {/* Simulated In-Game Bottom HUD */}
                <div style={{
                  background: 'rgba(6, 11, 25, 0.95)',
                  border: '1px solid rgba(250, 204, 21, 0.35)',
                  borderRadius: '12px',
                  padding: '12px 14px',
                  fontFamily: 'monospace'
                }}>
                  <div style={{ fontSize: '0.72rem', color: '#FACC15', fontWeight: 800, marginBottom: '6px' }}>
                    📺 {isKhmer ? 'ផ្ទាំងព័ត៌មានដែលបង្ហាញលើបាតអេក្រង់ពេលបើកបរ (IN-GAME BOTTOM HUD):' : 'LIVE HUD DISPLAYED AT SCREEN BOTTOM WHILE DRIVING:'}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#FEF08A', fontWeight: 700, padding: '6px 8px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', marginBottom: '6px', textAlign: 'center' }}>
                    🛺 TUK-TUK ECO EXPRESS: ⚡ 24.0 km/h | 📦 Cargo: 7/10 items | ♻️ Depot (+50 Pts)
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#E2E8F0', padding: '6px 8px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', textAlign: 'center' }}>
                    🎮 [W/S] Drive | [A/D] Steer | [Space] Brake | [H] Horn | [V] Camera | [E] Exit
                  </div>
                </div>
              </div>

              {/* Right: Driver Mission Steps */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ padding: '14px 16px', borderRadius: '14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#4ADE80', marginBottom: '4px' }}>
                    1. {isKhmer ? 'របៀបឡើងបើកបរ (Board the Kong Bey)' : 'How to Board the Kong Bey'}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: 1.45 }}>
                    {isKhmer 
                      ? 'ដើរទៅក្បែរកង់បីដែលចតនៅជិតផ្សារធំថ្មី រួចចុច [E] ឬចុចប៊ូតុង ACTION ដើម្បីឡើងបើកបរ។'
                      : 'Walk near the Tuk-Tuk and press [E] (or tap ACTION button) to mount the driver seat.'}
                  </div>
                </div>

                <div style={{ padding: '14px 16px', borderRadius: '14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#38BDF8', marginBottom: '4px' }}>
                    2. {isKhmer ? 'ប្រមូលសំរាម ១០ មុខចូលឃ្លាំង (Collect 10 Items)' : 'Collect up to 10 Waste Items'}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: 1.45 }}>
                    {isKhmer 
                      ? 'បើកកង់បីកាត់គំនរសំរាមលើផ្លូវដើម្បីស្រូប និងប្រមូលសំរាមបានដល់ទៅ ១០ មុខចូលក្នុងឃ្លាំងខាងក្រោយ។'
                      : 'Drive over trash piles on the street to automatically load up to 10 items into your rear cargo bay.'}
                  </div>
                </div>

                <div style={{ padding: '14px 16px', borderRadius: '14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#FACC15', marginBottom: '4px' }}>
                    3. {isKhmer ? 'ដឹកទៅទម្លាក់នៅដេប៉ូកែច្នៃ (+50 PTS) (Depot Drop-off)' : 'Deliver to Recycling Depot (+50 PTS)'}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: 1.45 }}>
                    {isKhmer 
                      ? 'បើកយកទៅទម្លាក់នៅស្ថានីយ៍កែច្នៃកណ្តាល (Recycling Depot) ដើម្បីទទួលបាន ៥០ ពិន្ទុភ្លាមៗ! ចុច [E] ដើម្បីចុះដើរវិញ។'
                      : 'Drive to the central Recycling Depot to unload cargo for a massive +50 bonus points! Press [E] to exit.'}
                  </div>
                </div>

                <div style={{ padding: '14px 16px', borderRadius: '14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#EC4899', marginBottom: '4px' }}>
                    4. {isKhmer ? 'ស៊ីផ្លេ [H] & ប្តូរកាមេរ៉ាក្នុង/ក្រៅ [V] (Horn & Views)' : 'City Horn [H] & Camera Views [V]'}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: 1.45 }}>
                    {isKhmer 
                      ? 'ចុច [H] ដើម្បីស៊ីផ្លេសំឡេងកង់បី និងចុច [V] ដើម្បីប្តូររវាងកាមេរ៉ាក្នុងដៃចង្កូត (1st-Person) និងពីក្រោយ (3rd-Person)។'
                      : 'Press [H] for authentic Phnom Penh Tuk-Tuk horn beeps, and press [V] to toggle 1st-person and 3rd-person camera.'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
