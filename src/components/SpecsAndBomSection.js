'use client';

import React from 'react';
import { Check, X, ShieldCheck, Zap, DollarSign, Award, Layers, Sparkles, Tag } from 'lucide-react';

export default function SpecsAndBomSection({ lang }) {
  const isKhmer = lang === 'km';

  // Exact 11 items from Canva Pitch Deck Slide 7 (LETSTORE Unit Cost Breakdown)
  const bomList = [
    { id: 1, nameEn: 'VR Lens (Dual 42mm Biconvex)', nameKm: 'ឡេនវ៉ែនតា (VR Lens 42mm)', price: '$1.00', icon: '🔍' },
    { id: 2, nameEn: 'NFC Card (Instant Web Launch)', nameKm: 'កាត NFC (ស្កេនបើកមេរៀន)', price: '$1.00', icon: '💳' },
    { id: 3, nameEn: 'E-Flute Cardboard Chassis', nameKm: 'ក្រដាសកាតុង E-Flute (Chassis)', price: 'Free', isFree: true, icon: '📦' },
    { id: 4, nameEn: '3x Tactile Action Buttons', nameKm: 'ប៊ូតុងបញ្ជា ៣ គ្រាប់ (3x Buttons)', price: '$1.50', icon: '🔴' },
    { id: 5, nameEn: '2-Axis Analog Thumbstick', nameKm: 'ដងបញ្ជា Joystick (2-Axis)', price: '$0.75', icon: '🕹️' },
    { id: 6, nameEn: 'ESP32 Microcontroller (BLE)', nameKm: 'បន្ទះឈីប ESP32 (Bluetooth)', price: '$5.00', icon: '⚡' },
    { id: 7, nameEn: 'USB-C Charging Board (TP4056)', nameKm: 'បន្ទះសាកថ្ម (Charging Board)', price: '$0.50', icon: '🔌' },
    { id: 8, nameEn: 'Gyroscope Sensor (Motion Track)', nameKm: 'សេនស័រវាស់ល្បឿន/ចលនា (Gyro)', price: '$2.00', icon: '🧭' },
    { id: 9, nameEn: 'Connection Strip Wires', nameKm: 'ខ្សែភ្លើងតសៀគ្វី (Strip Wire)', price: '$0.40', icon: '🧵' },
    { id: 10, nameEn: '3D Filament (Remote Casing)', nameKm: 'សរសៃជ័រព្រីនតួ Remote (3D Filament)', price: '$2.00', icon: '🖨️' },
    { id: 11, nameEn: 'Forehead & Nose Cushion Pad', nameKm: 'ទ្រនាប់មុខទន់ (Face Cushion)', price: '$1.50', icon: '🥽' },
  ];

  return (
    <section id="cost" style={{
      background: '#FFFFFF',
      padding: '95px 0',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        {/* Section Heading matching Canva Slide 7 */}
        <div style={{ textAlign: 'center', marginBottom: '55px' }}>
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
            <Tag size={14} />
            <span>{isKhmer ? 'តារាងបំបែកតម្លៃផ្លូវការ' : 'Official Unit Cost Breakdown'}</span>
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
                តម្លៃសរុបមួយកញ្ចប់ត្រឹមតែ <span style={{ color: '#FF6B00' }}>$16</span> ប៉ុណ្ណោះ
              </>
            ) : (
              <>
                Unit Cost Breakdown — Complete Kit for Only <span style={{ color: '#FF6B00' }}>$16</span>
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
              'តម្លាភាព ១០០% លើការចំណាយសម្ភារៈនីមួយៗ (LETSTORE Price List) ដើម្បីធានាថាសិស្សានុសិស្សគ្រប់រូបអាចមានលទ្ធភាពបង្កើត និងរៀនសូត្របាន។'
            ) : (
              '100% transparent open-hardware BOM costing based on verifiable regional electronic suppliers (LETSTORE).'
            )}
          </p>
        </div>

        {/* 2-Column Showcase: Left = Visual Kit Card with $16 Tag, Right = 11-Item Table */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'start',
          marginBottom: '60px'
        }}>
          {/* Left Column: Authentic Kit Image with Big $16 Tag */}
          <div style={{
            background: 'linear-gradient(135deg, #0A192F 0%, #1E293B 100%)',
            borderRadius: '24px',
            padding: '40px 32px',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(10, 25, 47, 0.12)'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 107, 0, 0.25) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div>
                <span style={{ fontSize: '0.78rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  DIY STEM Kit 2026
                </span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '4px 0 0 0', color: '#FFFFFF' }}>
                  SPATIAL All-in-One Kit
                </h3>
              </div>

              {/* Big $16 Tag Badge */}
              <div style={{
                background: '#FF6B00',
                color: '#FFFFFF',
                borderRadius: '16px',
                padding: '10px 20px',
                display: 'flex',
                alignItems: 'baseline',
                gap: '4px',
                boxShadow: '0 8px 20px rgba(255, 107, 0, 0.35)'
              }}>
                <span style={{ fontSize: '1.8rem', fontWeight: 900, lineHeight: 1 }}>$16</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>USD</span>
              </div>
            </div>

            {/* Product Image */}
            <div style={{
              background: 'radial-gradient(circle at center, rgba(255, 107, 0, 0.15) 0%, rgba(255, 255, 255, 0.04) 70%, transparent 100%)',
              borderRadius: '18px',
              padding: '24px 20px',
              marginBottom: '26px',
              border: '1px solid rgba(255, 107, 0, 0.2)',
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
                  maxHeight: '260px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 14px 28px rgba(0, 0, 0, 0.45))'
                }}
              />
            </div>

            {/* Quick Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#CBD5E1' }}>
                <Check size={18} color="#FF6B00" />
                <span>{isKhmer ? 'រួមបញ្ចូលឧបករណ៍ពេញលេញទាំង ១១ មុខ' : 'Includes all 11 core hardware components'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#CBD5E1' }}>
                <Check size={18} color="#FF6B00" />
                <span>{isKhmer ? 'កាត NFC ស្កេនបើកមេរៀន 3D ភ្លាមៗ' : 'Instant NFC card access to interactive labs'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#CBD5E1' }}>
                <Check size={18} color="#FF6B00" />
                <span>{isKhmer ? 'កូដ ESP32 Bluetooth BLE Firmware រួចជាស្រេច' : 'Pre-flashed or DIY programmable ESP32 BLE code'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 11-Item Price Table matching Slide 7 */}
          <div style={{
            background: '#F8FAFC',
            borderRadius: '24px',
            border: '1px solid #E2E8F0',
            overflow: 'hidden',
            boxShadow: '0 4px 15px rgba(10, 25, 47, 0.03)'
          }}>
            <div style={{
              padding: '20px 24px',
              background: '#0A192F',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>
                  {isKhmer ? 'តារាងតម្លៃសម្ភារៈ (Price List)' : 'Price List (LETSTORE)'}
                </h4>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                  {isKhmer ? 'គ្រឿងបង្គុំទាំង ១១ នៃកញ្ចប់ Spatial' : 'All 11 components of the Spatial DIY ecosystem'}
                </span>
              </div>
              <span style={{
                background: 'rgba(255, 107, 0, 0.2)',
                color: '#FF8A33',
                fontSize: '0.78rem',
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: '8px'
              }}>
                11 Items
              </span>
            </div>

            <div style={{ maxHeight: '460px', overflowY: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#F1F5F9', borderBottom: '1px solid #E2E8F0', fontSize: '0.8rem', color: '#64748B' }}>
                    <th style={{ padding: '12px 18px', width: '40px' }}>ID</th>
                    <th style={{ padding: '12px 18px' }}>{isKhmer ? 'ឈ្មោះសម្ភារៈ (Description)' : 'Component Description'}</th>
                    <th style={{ padding: '12px 18px', textAlign: 'right' }}>{isKhmer ? 'តម្លៃ (Unit Price)' : 'Unit Price'}</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '0.88rem' }}>
                  {bomList.map((item, idx) => (
                    <tr
                      key={item.id}
                      style={{
                        borderBottom: '1px solid #E2E8F0',
                        background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC'
                      }}
                    >
                      <td style={{ padding: '12px 18px', fontWeight: 700, color: '#64748B' }}>
                        {item.id}
                      </td>
                      <td style={{ padding: '12px 18px', color: '#0F172A', fontWeight: 600 }}>
                        <span style={{ marginRight: '8px' }}>{item.icon}</span>
                        {isKhmer ? item.nameKm : item.nameEn}
                      </td>
                      <td style={{
                        padding: '12px 18px',
                        textAlign: 'right',
                        fontWeight: 800,
                        color: item.isFree ? '#16A34A' : '#FF6B00'
                      }}>
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Total Footer */}
            <div style={{
              padding: '18px 24px',
              background: '#FFFFFF',
              borderTop: '2px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{ fontSize: '1rem', fontWeight: 800, color: '#0A192F' }}>
                {isKhmer ? 'តម្លៃសរុប (Total Cost):' : 'Total Kit Cost:'}
              </span>
              <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FF6B00' }}>
                $16.00 USD
              </span>
            </div>
          </div>
        </div>

        {/* Head-to-Head Comparison Table ($16 vs $500+) */}
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
                    feat: isKhmer ? 'តម្លៃក្នុងមួយគ្រឿង (Unit Price)' : 'Total Cost per Unit',
                    spatial: '$16 USD (97% More Affordable)',
                    commercial: '$500 – $3,500 USD'
                  },
                  {
                    feat: isKhmer ? 'ការបើកដំណើរការ (Launch)' : 'Simulation Launch Method',
                    spatial: 'Instant NFC Card Tap (Browser-based)',
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
    </section>
  );
}
