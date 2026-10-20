'use client';

import React, { useState } from 'react';
import { Check, X, Layers, Eye, Cpu, Box, Sparkles, ExternalLink, Filter } from 'lucide-react';

export default function SpecsAndBomSection({ lang }) {
  const isKhmer = lang === 'km';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  // Exact 11 items from Canva Pitch Deck Slide 7 - Focus purely on Hardware Components & Specifications (No Prices)
  const bomList = [
    {
      id: 1,
      nameEn: 'VR Lens (Dual 42mm Biconvex)',
      nameKm: 'ឡេនវ៉ែនតា (VR Lens 42mm)',
      spec: '42mm ⌀, 45mm Focal Length',
      roleEn: 'Dual biconvex optical lenses providing ~95° immersive stereoscopic field of view without eye strain.',
      roleKm: 'ឡេនភ្លោះអុបទិកផ្ដល់មុំទិដ្ឋភាពធំទូលាយ ៩៥ ដឺក្រេ និងកាត់បន្ថយការស្រវាំងភ្នែក។',
      category: 'optics',
      categoryEn: 'Optics',
      categoryKm: 'អុបទិក',
      icon: '🔍'
    },
    {
      id: 2,
      nameEn: 'NFC Card (Instant Web Launch)',
      nameKm: 'កាត NFC (ស្កេនបើកមេរៀន)',
      spec: 'NTAG213 / 215 (13.56MHz)',
      roleEn: 'Instant tap-to-launch 3D simulation web page directly in the phone browser without app store downloads.',
      roleKm: 'ស្កេនបើកដំណើរការកម្មវិធី 3D ភ្លាមៗនៅលើទូរស័ព្ទដោយមិនបាច់ដំឡើង App។',
      category: 'software',
      categoryEn: 'Software & Launch',
      categoryKm: 'កម្មវិធីបើកដំណើរការ',
      icon: '💳'
    },
    {
      id: 3,
      nameEn: 'E-Flute Cardboard Chassis',
      nameKm: 'ក្រដាសកាតុង E-Flute (Chassis)',
      spec: '1.5mm Precision Die-cut',
      roleEn: 'Foldable, ultra-lightweight, 100% biodegradable chassis with ergonomic nose bridge and optical divider.',
      roleKm: 'តួវ៉ែនតាស្វិតមាំ ស្រាលស្រទន់ ងាយស្រួលបត់ផ្គុំ និងមិនប៉ះពាល់ដល់បរិស្ថាន។',
      category: 'chassis',
      categoryEn: 'Chassis & Ergonomics',
      categoryKm: 'តួវ៉ែនតា',
      icon: '📦'
    },
    {
      id: 4,
      nameEn: '3x Tactile Action Buttons',
      nameKm: 'ប៊ូតុងបញ្ជា ៣ គ្រាប់ (3x Buttons)',
      spec: '6x6x5mm Momentary Switch',
      roleEn: 'Responsive physical buttons for jump, interactive inspect, and simulation reset actions.',
      roleKm: 'ប៊ូតុងចុចបញ្ជាសកម្មភាព លោត និងអន្តរកម្មជាមួយវត្ថុក្នុងលំហនិម្មិត។',
      category: 'input',
      categoryEn: 'Controls & Inputs',
      categoryKm: 'ឧបករណ៍បញ្ជា',
      icon: '🔴'
    },
    {
      id: 5,
      nameEn: '2-Axis Analog Thumbstick',
      nameKm: 'ដងបញ្ជា Joystick (2-Axis)',
      spec: 'Dual 10kΩ Potentiometer + Click',
      roleEn: 'Fluid 360-degree analog navigation and steering within the 3D Clean City environment.',
      roleKm: 'បញ្ជាទិសដៅ ៣៦០ ដឺក្រេយ៉ាងរលូនសម្រាប់ចលនាក្នុងទីក្រុង 3D។',
      category: 'input',
      categoryEn: 'Controls & Inputs',
      categoryKm: 'ឧបករណ៍បញ្ជា',
      icon: '🕹️'
    },
    {
      id: 6,
      nameEn: 'ESP32 Microcontroller (BLE)',
      nameKm: 'បន្ទះឈីប ESP32 (Bluetooth)',
      spec: '240MHz Dual-Core, BLE 4.2/5.0',
      roleEn: 'Microcontroller processor running low-latency Bluetooth BLE firmware to transmit controller inputs (<15ms).',
      roleKm: 'បន្ទះឈីបឆ្លាតវៃដំណើរការ Firmware Bluetooth BLE បញ្ជូនសញ្ញាបញ្ជារហ័សទាន់ចិត្ត (<15ms)។',
      category: 'electronics',
      categoryEn: 'Electronics & BLE',
      categoryKm: 'បន្ទះឈីបអេឡិចត្រូនិក',
      icon: '⚡'
    },
    {
      id: 7,
      nameEn: 'USB-C Charging Board (TP4056)',
      nameKm: 'បន្ទះសាកថ្ម (Charging Board)',
      spec: '5V/1A Type-C with Protection IC',
      roleEn: 'Standardized rechargeable battery power management supporting universal Type-C cables.',
      roleKm: 'បន្ទះគ្រប់គ្រងការសាកថ្មប្រភេទ Type-C មានសុវត្ថិភាពខ្ពស់ និងសាកបានលឿន។',
      category: 'electronics',
      categoryEn: 'Electronics & BLE',
      categoryKm: 'បន្ទះឈីបអេឡិចត្រូនិក',
      icon: '🔌'
    },
    {
      id: 8,
      nameEn: 'Gyroscope Sensor (Motion Track)',
      nameKm: 'សេនស័រវាស់ល្បឿន/ចលនា (Gyro)',
      spec: 'MPU-6050 6-Axis I2C Accelerometer/Gyro',
      roleEn: 'Real-time hand rotation, tilt, and gesture tracking for dynamic spatial interaction.',
      roleKm: 'វាស់កាយវិការ និងចលនាបង្វិលដៃក្នុងលំហ 3D ជាក់ស្តែង។',
      category: 'electronics',
      categoryEn: 'Electronics & BLE',
      categoryKm: 'បន្ទះឈីបអេឡិចត្រូនិក',
      icon: '🧭'
    },
    {
      id: 9,
      nameEn: 'Connection Strip Wires',
      nameKm: 'ខ្សែភ្លើងតសៀគ្វី (Strip Wire)',
      spec: '28AWG Flexible Ribbon Wires',
      roleEn: 'Flexible circuit routing between ESP32 controller, thumbstick, and tactile switches.',
      roleKm: 'ខ្សែភ្លើងតភ្ជាប់សៀគ្វីរវាងសេនស័រ ប៊ូតុង និងបន្ទះឈីប ESP32។',
      category: 'electronics',
      categoryEn: 'Electronics & BLE',
      categoryKm: 'បន្ទះឈីបអេឡិចត្រូនិក',
      icon: '🧵'
    },
    {
      id: 10,
      nameEn: '3D Filament (Remote Casing)',
      nameKm: 'សរសៃជ័រព្រីនតួ Remote (3D Filament)',
      spec: 'PLA Eco-friendly thermoplastic',
      roleEn: 'Ergonomic hand-held protective remote casing modeled and 3D printed to fit student hands.',
      roleKm: 'សម្បកការពារឧបករណ៍បញ្ជា កាន់ស្រួលដៃ ព្រីនចេញពីម៉ាស៊ីន 3D សម្រាប់សិស្សានុសិស្ស។',
      category: 'chassis',
      categoryEn: 'Chassis & Ergonomics',
      categoryKm: 'តួវ៉ែនតា',
      icon: '🖨️'
    },
    {
      id: 11,
      nameEn: 'Forehead & Nose Cushion Pad',
      nameKm: 'ទ្រនាប់មុខទន់ (Face Cushion)',
      spec: 'High-density EVA foam / soft cotton',
      roleEn: 'Comfortable face contact, nose cushioning, and ambient light blocking for maximum immersion.',
      roleKm: 'ទ្រនាប់ការពារការឈឺមុខ និងទប់ស្កាត់ពន្លឺចាំងពីក្រៅ ដើម្បីទទួលបានទស្សនីយភាពច្បាស់ល្អ។',
      category: 'chassis',
      categoryEn: 'Chassis & Ergonomics',
      categoryKm: 'តួវ៉ែនតា',
      icon: '🥽'
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? bomList
    : bomList.filter(item => item.category === activeCategory);

  return (
    <section id="cost" style={{
      background: '#FFFFFF',
      padding: '90px 0',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
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
            <Layers size={14} />
            <span>{isKhmer ? 'គ្រឿងបង្គុំផ្នែករឹងផ្លូវការ' : 'Hardware Components & Ecosystem'}</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2.1rem, 3.4vw, 2.9rem)',
            fontWeight: 800,
            color: '#0A192F',
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            {isKhmer ? (
              <>
                កញ្ចប់សម្ភារៈ Spatial — <span style={{ color: '#FF6B00' }}>គ្រឿងបង្គុំស្នូលទាំង ១១ មុខ</span>
              </>
            ) : (
              <>
                SPATIAL All-in-One Kit — <span style={{ color: '#FF6B00' }}>11 Core Components</span>
              </>
            )}
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: '#64748B',
            maxWidth: '680px',
            margin: '0 auto',
            lineHeight: 1.65
          }}>
            {isKhmer ? (
              'គ្រឿងបង្គុំផ្នែករឹងចំហ ១០០% រួមបញ្ចូលសម្ភារៈអុបទិក អេឡិចត្រូនិក និងតួវ៉ែនតា ដើម្បីធានាថាសិស្សានុសិស្សគ្រប់រូបអាចស្វែងយល់ និងដំឡើងដោយផ្ទាល់ដៃ។'
            ) : (
              '100% open-hardware architecture combining optical lenses, DIY chassis, and Bluetooth microelectronics for hands-on learning.'
            )}
          </p>
        </div>

        {/* Clean Showcase: Visual Kit Card with Action to Open Component List */}
        <div style={{
          maxWidth: '820px',
          margin: '0 auto 60px auto',
          background: 'linear-gradient(135deg, #0A192F 0%, #1E293B 100%)',
          borderRadius: '24px',
          padding: '40px 36px',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(10, 25, 47, 0.12)'
        }}>
          {/* Subtle Ambient Glow */}
          <div style={{
            position: 'absolute',
            top: '-30px',
            right: '-30px',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 107, 0, 0.22) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          {/* Header Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '26px'
          }}>
            <div>
              <span style={{ fontSize: '0.78rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
                DIY STEM Kit 2026
              </span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '4px 0 0 0', color: '#FFFFFF' }}>
                SPATIAL All-in-One Kit
              </h3>
            </div>

            {/* Pill Badge (Replacing the former $16 price tag) */}
            <div style={{
              background: 'rgba(255, 107, 0, 0.15)',
              color: '#FF8A33',
              border: '1px solid rgba(255, 107, 0, 0.35)',
              borderRadius: '9999px',
              padding: '8px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.88rem',
              fontWeight: 700
            }}>
              <Box size={16} />
              <span>{isKhmer ? 'រួមបញ្ចូល ១១ មុខពេញលេញ' : '11 Core Components'}</span>
            </div>
          </div>

          {/* Authentic Kit Image */}
          <div style={{
            background: 'radial-gradient(circle at center, rgba(255, 107, 0, 0.14) 0%, rgba(255, 255, 255, 0.03) 70%, transparent 100%)',
            borderRadius: '18px',
            padding: '24px 20px',
            marginBottom: '28px',
            border: '1px solid rgba(255, 107, 0, 0.18)',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src="/images/spatial_vr_kit.png"
              alt="Spatial VR Kit and Controller"
              style={{
                width: '100%',
                maxHeight: '280px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 14px 28px rgba(0, 0, 0, 0.45))'
              }}
            />
          </div>

          {/* Quick Highlights Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '14px',
            marginBottom: '32px'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '14px 16px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '0.88rem',
              color: '#E2E8F0'
            }}>
              <Check size={18} color="#FF6B00" style={{ flexShrink: 0 }} />
              <span>{isKhmer ? 'ឡេនអុបទិកភ្លោះ 42mm Biconvex' : 'Dual 42mm Optical Lenses (~95° FOV)'}</span>
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '14px 16px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '0.88rem',
              color: '#E2E8F0'
            }}>
              <Check size={18} color="#FF6B00" style={{ flexShrink: 0 }} />
              <span>{isKhmer ? 'កាត NFC ស្កេនបើកមេរៀន 3D ភ្លាមៗ' : 'Instant NFC Tap-to-Launch 3D Web'}</span>
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '14px 16px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '0.88rem',
              color: '#E2E8F0'
            }}>
              <Check size={18} color="#FF6B00" style={{ flexShrink: 0 }} />
              <span>{isKhmer ? 'បន្ទះឈីប ESP32 BLE + Joystick' : 'ESP32 Wireless BLE Controller (<15ms)'}</span>
            </div>
          </div>

          {/* Kept In One Place: Interactive Button to Open Components List */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.04)',
            borderRadius: '16px',
            padding: '20px',
            border: '1px solid rgba(255, 107, 0, 0.25)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                {isKhmer ? 'បញ្ជីគ្រឿងបង្គុំផ្នែករឹង (Hardware Components)' : 'Hardware Components Breakdown'}
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94A3B8' }}>
                {isKhmer ? 'ចុចទីនេះដើម្បីបើកមើលគ្រឿងបង្គុំទាំង ១១ មុខ និងមុខងារនីមួយៗ' : 'View all 11 components, detailed specifications, and functions'}
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                background: '#FF6B00',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '12px',
                padding: '12px 24px',
                fontSize: '0.92rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 20px rgba(255, 107, 0, 0.35)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FF8A33';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FF6B00';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Eye size={18} />
              <span>{isKhmer ? 'បើកមើលគ្រឿងបង្គុំទាំង ១១ មុខ' : 'Open Component List (11)'}</span>
            </button>
          </div>
        </div>

        {/* Head-to-Head Comparison Table: Focus on Open Architecture & Reparability */}
        <div style={{
          background: '#F8FAFC',
          borderRadius: '20px',
          padding: '36px',
          border: '1px solid #E2E8F0'
        }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0A192F', marginBottom: '22px', textAlign: 'center' }}>
            {isKhmer ? 'ការប្រៀបធៀបជាមួយវ៉ែនតាពាណិជ្ជកម្មទូទៅ' : 'Spatial vs Commercial Headsets'}
          </h3>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#FFFFFF', borderBottom: '2px solid #E2E8F0' }}>
                  <th style={{ padding: '16px 20px', fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>
                    {isKhmer ? 'លក្ខណៈពិសេស' : 'Feature / Metric'}
                  </th>
                  <th style={{ padding: '16px 20px', fontSize: '0.88rem', fontWeight: 800, color: '#FF6B00', background: 'rgba(255, 107, 0, 0.05)' }}>
                    SPATIAL VR Kit
                  </th>
                  <th style={{ padding: '16px 20px', fontSize: '0.88rem', fontWeight: 600, color: '#64748B' }}>
                    Commercial VR (Quest / Vision Pro)
                  </th>
                </tr>
              </thead>
              <tbody style={{ fontSize: '0.9rem' }}>
                {[
                  {
                    feat: isKhmer ? 'លទ្ធភាពទទួលបាន (Accessibility)' : 'Accessibility & Setup',
                    spatial: '100% Open DIY STEM Kit for Any School',
                    commercial: 'High Financial Barrier ($500 – $3,500+)'
                  },
                  {
                    feat: isKhmer ? 'ការបើកដំណើរការ (Launch)' : 'Simulation Launch Method',
                    spatial: 'Instant NFC Card Tap (Browser-based WebGL)',
                    commercial: 'Proprietary OS & Mandatory App Store'
                  },
                  {
                    feat: isKhmer ? 'ឧបករណ៍បញ្ជា (Controller)' : 'Controller Input',
                    spatial: 'Custom ESP32 BLE + Joystick + Gyro',
                    commercial: 'Proprietary Optical 6DoF Controllers'
                  },
                  {
                    feat: isKhmer ? 'ការជួសជុល និងដំឡើង (DIY Maintenance)' : 'Reparability & Learning',
                    spatial: '100% Repairable by Students & Teachers',
                    commercial: 'Sealed Unit / Factory Repair Only'
                  },
                  {
                    feat: isKhmer ? 'ទម្ងន់ឧបករណ៍ (Headset Weight)' : 'Headset Weight',
                    spatial: '~115 grams (Ultra-lightweight)',
                    commercial: '500 – 650 grams (Heavy)'
                  }
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #E2E8F0', background: i % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
                    <td style={{ padding: '14px 20px', fontWeight: 600, color: '#0F172A' }}>{row.feat}</td>
                    <td style={{ padding: '14px 20px', fontWeight: 700, color: '#0A192F', background: 'rgba(255, 107, 0, 0.03)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Check size={16} color="#FF6B00" />
                        <span>{row.spatial}</span>
                      </div>
                    </td>
                    <td style={{ padding: '14px 20px', color: '#64748B' }}>{row.commercial}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Interactive Modal: Displays All 11 Components (Kept in one place, opens on demand) */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          background: 'rgba(10, 25, 47, 0.75)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsModalOpen(false);
        }}
        >
          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            width: '100%',
            maxWidth: '920px',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.35)',
            border: '1px solid #E2E8F0',
            animation: 'fadeIn 0.2s ease-out'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '24px 28px',
              background: '#0A192F',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800 }}>
                    {isKhmer ? 'បញ្ជីគ្រឿងបង្គុំទាំង ១១ មុខ (Hardware Components)' : 'SPATIAL All-in-One Kit — 11 Hardware Components'}
                  </h3>
                  <span style={{
                    background: '#FF6B00',
                    color: '#FFFFFF',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: '9999px'
                  }}>
                    11 Items
                  </span>
                </div>
                <p style={{ margin: '6px 0 0 0', fontSize: '0.82rem', color: '#94A3B8' }}>
                  {isKhmer
                    ? 'ព័ត៌មានលម្អិត និងមុខងារនៃគ្រឿងបង្គុំផ្នែករឹងនីមួយៗក្នុងកញ្ចប់ Spatial'
                    : 'Detailed specifications and functional roles of all core hardware components'}
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#FFFFFF',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
                title="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Filter Pills */}
            <div style={{
              padding: '12px 28px',
              background: '#F8FAFC',
              borderBottom: '1px solid #E2E8F0',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748B', marginRight: '6px' }}>
                <Filter size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                {isKhmer ? 'តម្រងប្រភេទ:' : 'Category:'}
              </span>
              {[
                { id: 'all', labelEn: 'All Components (11)', labelKm: 'ទាំងអស់ (១១)' },
                { id: 'optics', labelEn: 'Optics', labelKm: 'អុបទិក' },
                { id: 'chassis', labelEn: 'Chassis & Case', labelKm: 'តួវ៉ែនតា' },
                { id: 'electronics', labelEn: 'Electronics & BLE', labelKm: 'អេឡិចត្រូនិក' },
                { id: 'input', labelEn: 'Controls & Inputs', labelKm: 'ឧបករណ៍បញ្ជា' },
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '8px',
                    fontSize: '0.78rem',
                    fontWeight: activeCategory === cat.id ? 700 : 500,
                    background: activeCategory === cat.id ? '#0A192F' : '#FFFFFF',
                    color: activeCategory === cat.id ? '#FFFFFF' : '#475569',
                    border: `1px solid ${activeCategory === cat.id ? '#0A192F' : '#CBD5E1'}`,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {isKhmer ? cat.labelKm : cat.labelEn}
                </button>
              ))}
            </div>

            {/* Modal Body: Component Table (NO PRICES) */}
            <div style={{
              overflowY: 'auto',
              padding: '0',
              flex: 1
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#F1F5F9', borderBottom: '1px solid #E2E8F0', fontSize: '0.78rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    <th style={{ padding: '12px 20px', width: '50px' }}>ID</th>
                    <th style={{ padding: '12px 20px', width: '260px' }}>{isKhmer ? 'ឈ្មោះសម្ភារៈ' : 'Component Name'}</th>
                    <th style={{ padding: '12px 20px', width: '220px' }}>{isKhmer ? 'លក្ខណៈបច្ចេកទេស' : 'Technical Specification'}</th>
                    <th style={{ padding: '12px 20px' }}>{isKhmer ? 'តួនាទី និងមុខងារក្នុងប្រព័ន្ធ' : 'Role & Purpose in Kit'}</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '0.86rem' }}>
                  {filteredItems.map((item, idx) => (
                    <tr
                      key={item.id}
                      style={{
                        borderBottom: '1px solid #E2E8F0',
                        background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC',
                        transition: 'background 0.15s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 107, 0, 0.04)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC')}
                    >
                      <td style={{ padding: '14px 20px', fontWeight: 800, color: '#94A3B8' }}>
                        #{item.id}
                      </td>
                      <td style={{ padding: '14px 20px', color: '#0F172A', fontWeight: 700 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>{item.icon}</span>
                          <div>
                            <div>{isKhmer ? item.nameKm : item.nameEn}</div>
                            <span style={{
                              display: 'inline-block',
                              marginTop: '3px',
                              fontSize: '0.7rem',
                              fontWeight: 600,
                              color: '#FF6B00',
                              background: 'rgba(255, 107, 0, 0.08)',
                              padding: '1px 8px',
                              borderRadius: '4px'
                            }}>
                              {isKhmer ? item.categoryKm : item.categoryEn}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '14px 20px', color: '#475569', fontFamily: 'monospace', fontSize: '0.82rem' }}>
                        {item.spec}
                      </td>
                      <td style={{ padding: '14px 20px', color: '#334155', lineHeight: 1.5 }}>
                        {isKhmer ? item.roleKm : item.roleEn}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '16px 28px',
              background: '#FFFFFF',
              borderTop: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div style={{ fontSize: '0.84rem', color: '#64748B' }}>
                <span style={{ fontWeight: 700, color: '#0A192F' }}>
                  {filteredItems.length}
                </span> {isKhmer ? 'គ្រឿងបង្គុំផ្នែករឹងចំហត្រូវបានបង្ហាញ' : 'hardware components listed'}
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  background: '#0A192F',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '9px 20px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {isKhmer ? 'បិទផ្ទាំង' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

