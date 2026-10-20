'use client';

import React from 'react';
import { MapPin, Mail, Phone, ExternalLink, Heart } from 'lucide-react';

export default function Footer({ lang }) {
  const isKhmer = lang === 'km';

  return (
    <footer style={{
      background: '#0A192F',
      color: '#FFFFFF',
      padding: '70px 0 35px 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Col 1: SPATIAL Brand Information */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <img
                src="/images/spatial_logo.png"
                alt="Spatial Logo"
                style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
              />
              <span style={{ fontSize: '1.6rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '0.02em' }}>
                SPATIAL
              </span>
            </div>

            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '4px' }}>
              {isKhmer ? 'វ៉ែនតា Cardboard VR & ឧបករណ៍បញ្ជា DIY' : 'Budget-Friendly DIY VR Kit & Controller'}
            </div>

            <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '16px' }}>
              {isKhmer ? (
                'Spatial គឺជាគម្រោងច្នៃប្រឌិតបច្ចេកវិទ្យា VR និងឧបករណ៍បញ្ជាតម្លៃសមរម្យ សម្រាប់គាំទ្រការអប់រំ STEM ក្នុងប្រទេសកម្ពុជា។'
              ) : (
                'Spatial is an innovative budget-friendly VR kit developed to support immersive STEM education across Cambodia.'
              )}
            </p>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8rem', color: '#64748B' }}>
              <MapPin size={16} color="#FF6B00" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>Phnom Penh, Cambodia</span>
            </div>
          </div>

          {/* Col 2: Project Specifications */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '18px' }}>
              {isKhmer ? 'លក្ខណៈគម្រោង' : 'Project Ecosystem'}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#94A3B8' }}>
              <li>DIY Cardboard VR Headset</li>
              <li>42mm Biconvex Optical Lenses</li>
              <li>Custom ESP32 BLE Gamepad Remote</li>
              <li>Unity 3D Engine WebGL Simulations</li>
              <li>1:1 Blueprints & Open-Source Firmware</li>
            </ul>
          </div>

          {/* Col 3: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '18px' }}>
              {isKhmer ? 'តំណភ្ជាប់រហ័ស' : 'Quick Navigation'}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#94A3B8' }}>
              <li>{isKhmer ? 'អំពីគម្រោង SPATIAL' : 'About SPATIAL'}</li>
              <li>{isKhmer ? 'ល្បែងក្រុង Clean City 3D' : 'Clean City 3D Game'}</li>
              <li>{isKhmer ? 'គ្រឿងបង្គុំទាំង ១១ មុខ' : '11 Hardware Components'}</li>
              <li>{isKhmer ? 'ផលជះសង្គម (Our Impact)' : 'Our Impact'}</li>
              <li>{isKhmer ? 'មន្ទីរពិសោធន៍ DIY Maker' : 'DIY Maker Lab'}</li>
              <li>{isKhmer ? 'ប្លង់កាត់ 1:1 & កូដ' : '1:1 Blueprints & Code'}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          fontSize: '0.82rem',
          color: '#64748B'
        }}>
          <div>
            © 2026 SPATIAL. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Make it easy, efficient, affordable.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
