'use client';

import React from 'react';
import { Download, ArrowRight, Layers, Sparkles, Radio, Wifi, Eye, Tag } from 'lucide-react';

export default function HeroSection({ lang, onBlueprintClick, onExploreSimulations, onSpecsClick }) {
  const isKhmer = lang === 'km';

  return (
    <section style={{
      position: 'relative',
      background: '#FFFFFF',
      paddingTop: '30px',
      paddingBottom: '60px',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Authentic Tagline & Presentation */}
          <div className="hero-left-content">


            {/* Official Tagline from Canva Slide 1 */}
            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#0A192F',
              marginBottom: '18px',
              letterSpacing: '-0.02em'
            }}>
              {isKhmer ? (
                <>
                  <span style={{ color: '#FF6B00' }}>SPATIAL</span> — ធ្វើឱ្យមានភាពងាយស្រួល ប្រសិទ្ធភាព និងតម្លៃសមរម្យ
                </>
              ) : (
                <>
                  <span style={{ color: '#FF6B00' }}>SPATIAL</span> — Make it easy, efficient, affordable.
                </>
              )}
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: '#334155',
              lineHeight: 1.65,
              marginBottom: '28px',
              maxWidth: '560px'
            }}>
              {isKhmer ? (
                'គម្រោងបំប្លែងស្មាតហ្វូនទៅជាផ្ទាំងទស្សនីយភាព 3D & VR ក្នុងតម្លៃត្រឹមតែ $16 តាមរយៈវ៉ែនតាក្រដាសកាតុង Cardboard, ការស្កេន NFC រហ័ស និងឧបករណ៍បញ្ជា Bluetooth Controller បង្កើតដោយបន្ទះឈីប ESP32។'
              ) : (
                'An ultra-affordable $16 STEM platform uniting instant NFC launch, eco-friendly cardboard optics, and custom ESP32 Bluetooth remote control for hands-on 3D learning.'
              )}
            </p>

            {/* 4 Quick Value Pills */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '32px'
            }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '8px',
                background: '#F1F5F9',
                color: '#0F172A',
                fontSize: '0.85rem',
                fontWeight: 600
              }}>
                <Wifi size={14} color="#0284C7" />
                {isKhmer ? 'ស្កេន NFC បើកមេរៀន' : 'Instant NFC Launch'}
              </span>

              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '8px',
                background: '#F1F5F9',
                color: '#0F172A',
                fontSize: '0.85rem',
                fontWeight: 600
              }}>
                <Eye size={14} color="#8B5CF6" />
                {isKhmer ? 'រូបភាព 3D Dual-Eye' : 'Dual-Eye 3D World'}
              </span>

              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '8px',
                background: '#F1F5F9',
                color: '#0F172A',
                fontSize: '0.85rem',
                fontWeight: 600
              }}>
                <Radio size={14} color="#10B981" />
                {isKhmer ? 'ឧបករណ៍បញ្ជា ESP32' : 'ESP32 BLE Remote'}
              </span>

              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '8px',
                background: 'rgba(255, 107, 0, 0.1)',
                color: '#FF6B00',
                fontSize: '0.85rem',
                fontWeight: 800
              }}>
                <Tag size={14} color="#FF6B00" />
                {isKhmer ? 'តម្លៃត្រឹមតែ $16' : '$16 Complete Kit'}
              </span>
            </div>

            {/* Live 3D Game Callout Banner */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '20px',
              background: 'rgba(34, 197, 94, 0.12)',
              border: '1px solid rgba(34, 197, 94, 0.35)',
              color: '#15803D',
              fontSize: '0.84rem',
              fontWeight: 700,
              marginBottom: '16px',
              cursor: 'pointer'
            }} onClick={onExploreSimulations}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22C55E',
                boxShadow: '0 0 10px #22C55E',
                display: 'inline-block'
              }} />
              <span>{isKhmer ? '🎮 ហ្គេម 3D VR (ភ្នំពេញ) ដំណើរការផ្ទាល់លើ Website នេះ ↓' : '🎮 Live Unity 6 3D Game Ready to Play Below ↓'}</span>
            </div>

            {/* Action Buttons */}
            <div className="hero-buttons-wrapper" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <button 
                onClick={onExploreSimulations} 
                className="btn-primary" 
                style={{ 
                  fontSize: '1rem', 
                  padding: '14px 28px',
                  background: 'linear-gradient(135deg, #15803D 0%, #22C55E 100%)',
                  border: '1px solid #4ADE80',
                  boxShadow: '0 8px 25px rgba(34, 197, 94, 0.35)'
                }}
              >
                <Eye size={18} />
                <span>{isKhmer ? 'លេងហ្គេម 3D VR លើ Website ឥឡូវនេះ' : 'Play 3D VR Game on Website'}</span>
              </button>

              <button onClick={onBlueprintClick} className="btn-secondary" style={{ fontSize: '1rem', padding: '14px 24px' }}>
                <Download size={18} />
                <span>{isKhmer ? 'ទាញយកប្លង់ 1:1' : '1:1 Blueprints & Code'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Circular Orange Focal Spotlight with Kit and $16 Tag */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* The Vibrant Spotlight Circle */}
            <div className="orange-spotlight-circle" style={{
              background: 'radial-gradient(circle, #FFFFFF 45%, #FFF7ED 70%, #FFEDD5 100%)',
              border: '4px solid #FF6B00',
              boxShadow: '0 20px 50px rgba(255, 107, 0, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}>
              <img
                src="/images/spatial_vr_kit.png"
                alt="Spatial DIY Cardboard VR Headset and Controller"
                style={{
                  width: '90%',
                  height: 'auto',
                  maxHeight: '290px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 14px 28px rgba(255, 107, 0, 0.22)) drop-shadow(0 6px 12px rgba(0, 0, 0, 0.15))',
                  display: 'block'
                }}
              />
            </div>

            {/* Floating Price Tag Badge from Canva Slide 7 */}
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#FFFFFF',
              border: '2px solid #FF6B00',
              borderRadius: '20px',
              padding: '10px 22px',
              boxShadow: '0 12px 30px rgba(255, 107, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              whiteSpace: 'nowrap'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#FF6B00'
              }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>
                  {isKhmer ? 'តម្លៃសម្ភារៈសរុប' : 'Total Kit Cost'}
                </span>
                <span style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0A192F', lineHeight: 1 }}>
                  $16.00 <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FF6B00' }}>USD</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
