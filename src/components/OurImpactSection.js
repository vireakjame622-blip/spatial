'use client';

import React from 'react';
import { Users, BookOpen, Wifi, Sparkles } from 'lucide-react';

export default function OurImpactSection({ lang }) {
  const isKhmer = lang === 'km';

  const impactItems = [
    {
      id: 'scalability',
      titleEn: 'Massive Scalability',
      titleKm: 'លទ្ធភាពពង្រីកទូលំទូលាយ',
      descEn: 'Replaces 1 expensive headset with 25+ kits for an entire class.',
      descKm: 'ជំនួសវ៉ែនតាថ្លៃៗ ១ គ្រឿង ដោយកញ្ចប់ Spatial ជាង ២៥ ឈុត សម្រាប់សិស្សមួយថ្នាក់ពេញ។',
      stat: '25x+',
      statLabelEn: 'Classroom Reach per $500',
      statLabelKm: 'ចំនួនកញ្ចប់សម្រាប់ ១ ថ្នាក់រៀន',
      icon: Users,
      themeColor: '#16A34A', // Vibrant Green
      bgBadge: 'rgba(22, 163, 74, 0.12)',
      cardOffset: '8px 8px 0px #16A34A',
    },
    {
      id: 'learning',
      titleEn: 'Deeper Spatial Learning',
      titleKm: 'ការរៀនស៊ីជម្រៅក្នុងលំហ 3D',
      descEn: 'Helps students learn better by turning textbook pictures into interactive 3D models.',
      descKm: 'ជួយសិស្សឱ្យយល់មេរៀនកាន់តែច្បាស់ ដោយបំប្លែងរូបភាពសៀវភៅពុម្ពទៅជាគំរូ 3D អន្តរកម្ម។',
      stat: '4x',
      statLabelEn: 'Higher Spatial Memory Retention',
      statLabelKm: 'កម្រិតចងចាំមេរៀនបានយូរ',
      icon: BookOpen,
      themeColor: '#7C3AED', // Vibrant Purple / Indigo
      bgBadge: 'rgba(124, 58, 237, 0.12)',
      cardOffset: '8px 8px 0px #7C3AED',
    },
    {
      id: 'digital-divide',
      titleEn: 'Closing the Digital Divide',
      titleKm: 'ផ្សារភ្ជាប់គម្លាតឌីជីថល',
      descEn: 'Bringing high-tech STEM tools to rural and underfunded schools.',
      descKm: 'នាំយកឧបករណ៍បច្ចេកវិទ្យា STEM កម្រិតខ្ពស់ ទៅកាន់សាលារៀនជនបទ និងខ្វះខាតថវិកា។',
      stat: '100%',
      statLabelEn: 'Inclusive Classroom Equality',
      statLabelKm: 'សមភាពទទួលបានការអប់រំ 3D',
      icon: Wifi,
      themeColor: '#FF6B00', // Vibrant Orange
      bgBadge: 'rgba(255, 107, 0, 0.12)',
      cardOffset: '8px 8px 0px #FF6B00',
    }
  ];

  return (
    <section id="impact" style={{
      background: '#F8FAFC',
      padding: '95px 0',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background ambient accents */}
      <div style={{
        position: 'absolute',
        top: '-120px',
        right: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, rgba(255, 107, 0, 0.04) 50%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(124, 58, 237, 0.08)',
            color: '#7C3AED',
            border: '1px solid rgba(124, 58, 237, 0.25)',
            padding: '6px 18px',
            borderRadius: '9999px',
            fontSize: '0.82rem',
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            <Sparkles size={14} />
            <span>{isKhmer ? 'ផលជះជាវិជ្ជមានរបស់គម្រោង' : 'Social Impact & Vision'}</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
            fontWeight: 900,
            color: '#0A192F',
            marginBottom: '16px',
            letterSpacing: '-0.02em',
            lineHeight: 1.15
          }}>
            {isKhmer ? 'ផលជះរបស់ពួកយើង (Our Impact)' : 'Our Impact'}
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: '#475569',
            maxWidth: '680px',
            margin: '0 auto',
            lineHeight: 1.65
          }}>
            {isKhmer ? (
              'ការផ្លាស់ប្ដូររបៀបរៀនសូត្រពីអសកម្មទៅជាការពិសោធន៍ជាក់ស្ដែង ព្រមទាំងផ្តល់ឱកាសស្មើគ្នាក្នុងការចាប់យកបច្ចេកវិទ្យា VR សម្រាប់សិស្សគ្រប់រូប។'
            ) : (
              'Transforming passive memorization into hands-on discovery while breaking economic barriers to immersive tech.'
            )}
          </p>
        </div>

        {/* 3 Impact Cards matching the Canva Pitch Deck */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '36px',
          alignItems: 'stretch'
        }}>
          {impactItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  paddingTop: '36px'
                }}
              >
                {/* Main Card with Stylish Offset Shadow matching Canva Slide */}
                <div style={{
                  flex: 1,
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  border: `3px solid ${item.themeColor}`,
                  boxShadow: item.cardOffset,
                  padding: '50px 28px 28px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}>
                  {/* Floating Top Badge with Icon */}
                  <div style={{
                    position: 'absolute',
                    top: '-36px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: item.themeColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    boxShadow: `0 8px 20px ${item.themeColor}55`,
                    border: '4px solid #FFFFFF'
                  }}>
                    <Icon size={32} strokeWidth={2.2} />
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    color: '#0A192F',
                    textAlign: 'center',
                    marginBottom: '16px',
                    marginTop: '8px',
                    lineHeight: 1.25
                  }}>
                    {isKhmer ? item.titleKm : item.titleEn}
                  </h3>

                  {/* Description matching exact pitch deck text */}
                  <p style={{
                    fontSize: '1rem',
                    color: '#475569',
                    textAlign: 'center',
                    lineHeight: 1.6,
                    marginBottom: '24px',
                    flex: 1
                  }}>
                    {isKhmer ? item.descKm : item.descEn}
                  </p>

                  {/* Metric / Stat Highlight Pill */}
                  <div style={{
                    background: item.bgBadge,
                    border: `1px solid ${item.themeColor}33`,
                    borderRadius: '16px',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'auto'
                  }}>
                    <span style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#475569'
                    }}>
                      {isKhmer ? item.statLabelKm : item.statLabelEn}
                    </span>
                    <span style={{
                      fontSize: '1.25rem',
                      fontWeight: 900,
                      color: item.themeColor
                    }}>
                      {item.stat}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
