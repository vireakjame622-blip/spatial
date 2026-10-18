'use client';

import React from 'react';
import { Smartphone, Eye, Layers, Radio, Sparkles, CheckCircle2, Wifi, Zap } from 'lucide-react';

export default function SolutionSection({ lang, onExploreSimulations }) {
  const isKhmer = lang === 'km';

  const pillars = [
    {
      num: '01',
      titleEn: 'Instant NFC Launch',
      titleKm: 'បើកដំណើរការរហ័សតាម NFC',
      tag: 'Zero Friction',
      tagKm: 'ងាយស្រួលបំផុត',
      icon: Wifi,
      color: '#0284C7',
      bgLight: 'rgba(2, 132, 199, 0.08)',
      borderColor: 'rgba(2, 132, 199, 0.25)',
      descEn: 'Students simply tap their smartphone against the Spatial NFC card. The interactive 3D lab launches immediately in the browser—no URLs to type, no bulky app store installs.',
      descKm: 'សិស្សគ្រាន់តែយកទូរស័ព្ទដៃមកប៉ះ (Tap) លើកាត Spatial NFC នោះបន្ទប់ពិសោធន៍ 3D នឹងបើកដំណើរការភ្លាមៗក្នុង Browser ដោយមិនបាច់វាយ Link ឬដោនឡូត App ស្មុគស្មាញឡើយ។'
    },
    {
      num: '02',
      titleEn: 'Step Inside the 3D World',
      titleKm: 'ឈានជើងចូលពិភព 3D (Clean City)',
      tag: 'Unity 6 & Dual-Eye',
      tagKm: 'Unity 6 & ទិដ្ឋភាព 3D',
      icon: Eye,
      color: '#8B5CF6',
      bgLight: 'rgba(139, 92, 246, 0.08)',
      borderColor: 'rgba(139, 92, 246, 0.25)',
      descEn: 'Powered by Unity 6 & WebGL: Students drive the Eco Tuk-Tuk across Central Market & Riverside, sort waste across 5 color bins, and extinguish toxic PM2.5 smog fires in real-time 60 FPS stereoscopic VR.',
      descKm: 'ដំណើរការដោយ Unity 6 & WebGL៖ សិស្សានុសិស្សអាចបើកបរ Tuk-Tuk ឬកង់អេកូឡូស៊ីជុំវិញផ្សារធំថ្មី និងមាត់ទន្លេ ញែកសម្រាមចូលធុង ៥ ពណ៌ និងពន្លត់ភ្លើងដុតសម្រាមដើម្បីស្តារបរិយាកាសទីក្រុងភ្នំពេញ!'
    },
    {
      num: '03',
      titleEn: 'Cardboard Headset',
      titleKm: 'វ៉ែនតាក្រដាសកាតុង (Headset)',
      tag: 'Eco-Friendly & Light',
      tagKm: 'ទម្ងន់ស្រាល & សន្សំសំចៃ',
      icon: Layers,
      color: '#FF6B00',
      bgLight: 'rgba(255, 107, 0, 0.08)',
      borderColor: 'rgba(255, 107, 0, 0.25)',
      descEn: 'Engineered from durable recycled E-flute cardboard with 42mm biconvex lenses (64mm IPD), ergonomic nose arch, and comfortable forehead cushioning.',
      descKm: 'កាត់ចេញពីក្រដាសកាតុង E-flute ស្វិតមាំ បំពាក់ឡេនអុបទិក 42mm ស្របតាមគម្លាតភ្នែក 64mm IPD ព្រមទាំងមានទ្រនាប់មុខ (Cushion) ទន់ស្រួលពាក់។'
    },
    {
      num: '04',
      titleEn: 'Hands-on Remote Control',
      titleKm: 'ឧបករណ៍បញ្ជា Bluetooth ដោយដៃ',
      tag: 'ESP32 BLE & Gyro',
      tagKm: 'បន្ទះឈីប ESP32 & Gyro',
      icon: Radio,
      color: '#10B981',
      bgLight: 'rgba(16, 185, 129, 0.08)',
      borderColor: 'rgba(16, 185, 129, 0.25)',
      descEn: 'Custom 3D-printed enclosure with an ESP32 BLE gamepad, 2-axis analog thumbstick, tactile action buttons, and Gyro sensor for low-latency (<15ms) 3D navigation.',
      descKm: 'តួព្រីន 3D បំពាក់បន្ទះឈីប ESP32, Analog Joystick, ប៊ូតុងចុច និងសេនស័រ Gyro សម្រាប់បញ្ជាទិសដៅ និងចាប់កាន់វត្ថុ 3D ក្នុងលំហបានយ៉ាងរហ័សទាន់ចិត្ត (< 15ms)។'
    }
  ];

  return (
    <section id="solution" style={{
      background: '#F8FAFC',
      color: '#0A192F',
      padding: '95px 0',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 107, 0, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Heading matching Canva Slide 3 */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 107, 0, 0.08)',
            color: '#FF6B00',
            border: '1px solid rgba(255, 107, 0, 0.25)',
            padding: '6px 18px',
            borderRadius: '9999px',
            fontSize: '0.82rem',
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            <Sparkles size={14} />
            <span>{isKhmer ? 'ដំណោះស្រាយរបស់ពួកយើង' : 'Our Solution 🥽'}</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2.1rem, 3.4vw, 2.9rem)',
            fontWeight: 800,
            color: '#0A192F',
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            {isKhmer ? '៤ សសរស្តម្ភនៃប្រព័ន្ធ Spatial' : 'The 4 Core Pillars of Spatial'}
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: '#475569',
            maxWidth: '680px',
            margin: '0 auto',
            lineHeight: 1.65
          }}>
            {isKhmer ? (
              'ការរួមបញ្ចូលគ្នារវាង NFC, អេក្រង់ស្មាតហ្វូន, វ៉ែនតាក្រដាសកាតុង និងឧបករណ៍បញ្ជា Bluetooth ដើម្បីបង្កើតបទពិសោធន៍រៀនសូត្រដ៏មានប្រសិទ្ធភាព។'
            ) : (
              'Seamlessly uniting NFC instant access, mobile optics, eco-friendly cardboard, and custom ESP32 remote hardware.'
            )}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {pillars.map((pil) => {
            const Icon = pil.icon;
            return (
              <div
                key={pil.num}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '20px',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  boxShadow: '0 4px 16px rgba(10, 25, 47, 0.04)'
                }}
              >
                {/* Number & Icon */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '22px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: pil.bgLight,
                    color: pil.color,
                    border: `1px solid ${pil.borderColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={24} />
                  </div>

                  <span style={{
                    fontSize: '1.4rem',
                    fontWeight: 900,
                    color: '#CBD5E1',
                    letterSpacing: '0.05em'
                  }}>
                    {pil.num}
                  </span>
                </div>

                {/* Sub-tag */}
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: pil.color,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '8px'
                }}>
                  {isKhmer ? pil.tagKm : pil.tag}
                </span>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#0A192F',
                  marginBottom: '14px',
                  lineHeight: 1.3
                }}>
                  {isKhmer ? pil.titleKm : pil.titleEn}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '0.92rem',
                  color: '#475569',
                  lineHeight: 1.65,
                  margin: 0
                }}>
                  {isKhmer ? pil.descKm : pil.descEn}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
