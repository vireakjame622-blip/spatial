'use client';

import React from 'react';
import { Smartphone, Eye, Layers, Radio, Cpu, CheckCircle2 } from 'lucide-react';

export default function HowItWorksSection({ lang }) {
  const isKhmer = lang === 'km';

  const steps = [
    {
      num: '01',
      icon: Smartphone,
      titleEn: '1. Smartphone Display',
      titleKm: '១. អេក្រង់ទូរស័ព្ទដៃ (Display)',
      descEn: 'Slots into the front chamber. Any Android or iOS phone running Unity 3D simulations at 60 FPS stereo split-screen.',
      descKm: 'ប្រើទូរស័ព្ទដៃ Android ឬ iOS ដាក់ចូលក្នុងប្រអប់ខាងមុខ ដើម្បីបង្ហាញរូបភាព 3D Stereo Split-Screen ក្នុងកម្រិត 60 FPS។'
    },
    {
      num: '02',
      icon: Eye,
      titleEn: '2. 42mm Optical Lenses',
      titleKm: '២. ឡេនអុបទិក 42mm Biconvex',
      descEn: 'Dual precision 42mm biconvex optical lenses with 45mm focal distance give a wide ~95° immersive field of view.',
      descKm: 'ឡេនភ្លោះអុបទិកទំហំ 42mm ផ្ដល់មុំទិដ្ឋភាពធំទូលាយរហូតដល់ 95° ដោយមិនចាំបាច់ប្រើគ្រឿងអេឡិចត្រូនិកថ្លៃៗ។'
    },
    {
      num: '03',
      icon: Layers,
      titleEn: '3. Foldable Cardboard Chassis',
      titleKm: '៣. តួវ៉ែនតាក្រដាសកាតុង (Chassis)',
      descEn: 'Engineered from durable E-flute corrugated cardboard with ergonomic nose bridge and central optical crosstalk divider.',
      descKm: 'រចនាឡើងពីក្រដាសកាតុង E-flute ស្វិតមាំ មានទម្រង់ទ្រច្រមុះសមស្រប និងបន្ទះចែកភ្នែកឆ្វេង-ស្តាំកុំឱ្យស្រវាំង។'
    },
    {
      num: '04',
      icon: Radio,
      titleEn: '4. Bluetooth BLE Controller',
      titleKm: '៤. ឧបករណ៍បញ្ជា Bluetooth',
      descEn: 'ESP32 microcontroller with a 2-axis analog joystick and red action buttons provides sub-15ms low latency gaming control.',
      descKm: 'បន្ទះសៀគ្វី ESP32 ភ្ជាប់ជាមួយ Analog Joystick និងប៊ូតុងចុចពីរគ្រាប់ ផ្ដល់ការបញ្ជាចលនាយ៉ាងរហ័សទាន់ចិត្ត (< 15ms)។'
    }
  ];

  return (
    <section id="how-it-works" style={{
      background: '#FFFFFF',
      color: '#0A192F',
      padding: '85px 0',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0',
      position: 'relative'
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
            padding: '5px 14px',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: '14px'
          }}>
            Hardware Engineering
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
            fontWeight: 800,
            color: '#0A192F',
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            {isKhmer ? 'តើ Spatial ដំណើរការយ៉ាងដូចម្តេច?' : 'How Spatial Hardware Works'}
          </h2>

          <p style={{
            fontSize: '1.05rem',
            color: '#475569',
            maxWidth: '620px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            {isKhmer ? (
              'ការរួមបញ្ចូលគ្នារវាងសម្ភារៈសាមញ្ញ តម្លៃទាប និងបច្ចេកវិទ្យាទំនើប ដើម្បីបង្កើតជាបទពិសោធន៍ Immersive VR ដ៏អស្ចារ្យ។'
            ) : (
              'Combining accessible, low-cost materials with modern microelectronics and game engine simulations.'
            )}
          </p>
        </div>

        {/* Hardware Prototype Photo Showcase Banner */}
        <div style={{
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '20px',
          padding: '28px 32px',
          marginBottom: '36px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-around',
          gap: '24px',
          boxShadow: '0 4px 20px rgba(10, 25, 47, 0.04)'
        }}>
          <div style={{ maxWidth: '440px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '9999px',
              background: 'rgba(255, 107, 0, 0.08)',
              color: '#FF6B00',
              border: '1px solid rgba(255, 107, 0, 0.25)',
              fontSize: '0.78rem',
              fontWeight: 700,
              marginBottom: '10px'
            }}>
              Physical Prototype 2026
            </span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0A192F', marginBottom: '8px' }}>
              {isKhmer ? 'វ៉ែនតាក្រដាសកាតុង & ឧបករណ៍បញ្ជា ESP32' : 'Spatial Cardboard Headset & ESP32 Controller'}
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6 }}>
              {isKhmer ? (
                'ម៉ូដែលគំរូពិតដែលបានបង្កើតឡើងដោយជោគជ័យ៖ តួវ៉ែនតាក្រដាសកាតុង E-flute បំពាក់ឡេនអុបទិក 42mm និងឧបករណ៍បញ្ជា Bluetooth មាន Joystick និងប៊ូតុងចុចពីរគ្រាប់។'
              ) : (
                'The official physical prototype: Foldable E-flute cardboard body with 42mm biconvex lenses, elastic tension latch, and custom ergonomic ESP32 wireless controller.'
              )}
            </p>
          </div>
          <div style={{
            background: 'radial-gradient(circle, #FFFFFF 40%, #FFF7ED 70%, #FFEDD5 100%)',
            borderRadius: '16px',
            padding: '16px',
            border: '2px solid rgba(255, 107, 0, 0.25)',
            boxShadow: '0 8px 24px rgba(255, 107, 0, 0.15)'
          }}>
            <img
              src="/images/spatial_vr_kit.png"
              alt="Spatial DIY Cardboard VR Headset and Controller"
              style={{
                maxHeight: '190px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 8px 18px rgba(0, 0, 0, 0.15))',
                display: 'block'
              }}
            />
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px'
        }}>
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 12px rgba(10, 25, 47, 0.04)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(255, 107, 0, 0.08)',
                    color: '#FF6B00',
                    border: '1px solid rgba(255, 107, 0, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={22} />
                  </div>
                  <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#CBD5E1' }}>
                    {step.num}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0A192F', marginBottom: '10px' }}>
                  {isKhmer ? step.titleKm : step.titleEn}
                </h3>

                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, flex: 1 }}>
                  {isKhmer ? step.descKm : step.descEn}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
