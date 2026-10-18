'use client';

import React from 'react';
import { School, Cpu, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export default function TargetUsersSection({ lang }) {
  const isKhmer = lang === 'km';

  const targets = [
    {
      id: 'schools',
      icon: School,
      titleEn: 'Resource-Limited Schools',
      titleKm: 'សាលារៀនខ្វះខាតធនធាន',
      subtitleEn: 'Public & Provincial Institutions',
      subtitleKm: 'សាលារៀនរដ្ឋ និងតាមបណ្តាខេត្ត',
      color: '#16A34A',
      bgLight: 'rgba(22, 163, 74, 0.08)',
      borderColor: 'rgba(22, 163, 74, 0.25)',
      descEn: 'Schools that cannot budget $10,000+ for commercial VR labs. With Spatial, a complete classroom set of 20 headsets costs less than $350 total.',
      descKm: 'សាលារៀនដែលមិនមានថវិការាប់ម៉ឺនដុល្លារសម្រាប់បន្ទប់កុំព្យូទ័រថ្លៃៗ។ ជាមួយ Spatial ការបំពាក់កញ្ចប់ VR មួយថ្នាក់ (២០ ឈុត) ចំណាយមិនដល់ ៣៥០ ដុល្លារឡើយ។',
      benefits: [
        isKhmer ? 'ចំណាយទាបបំផុតសម្រាប់ថ្នាក់រៀន' : 'Ultra-low cost per classroom',
        isKhmer ? 'មិនត្រូវការកុំព្យូទ័រថ្លៃៗបន្ថែម' : 'No expensive PC towers needed',
        isKhmer ? 'ងាយស្រួលថែទាំ និងផ្លាស់ប្តូរ' : 'Easy to repair & maintain'
      ]
    },
    {
      id: 'stem-students',
      icon: Cpu,
      titleEn: 'Extracurricular STEM Students',
      titleKm: 'សិស្សានុសិស្សរៀន STEM ក្រៅម៉ោង',
      subtitleEn: 'Young Makers & Innovators',
      subtitleKm: 'អ្នកច្នៃប្រឌិត និងស្រាវជ្រាវវ័យក្មេង',
      color: '#8B5CF6',
      bgLight: 'rgba(139, 92, 246, 0.08)',
      borderColor: 'rgba(139, 92, 246, 0.25)',
      descEn: 'Aspiring robotics, programming, and electronics students who want to build their own hardware, understand ESP32 microcontrollers, and learn Unity game engine integration.',
      descKm: 'សិស្សដែលចូលចិត្តស្រាវជ្រាវផ្នែករ៉ូបូត កូដ និងគ្រឿងអេឡិចត្រូនិច ដែលចង់រៀនតសៀគ្វី ESP32 ដោយផ្ទាល់ដៃ និងភ្ជាប់ទៅកាន់កម្មវិធី Unity 3D។',
      benefits: [
        isKhmer ? 'រៀនតសៀគ្វី និងសរសេរកូដ ESP32' : 'Hands-on ESP32 circuit wiring',
        isKhmer ? 'យល់ដឹងពីបច្ចេកវិទ្យា Bluetooth BLE' : 'Master Bluetooth BLE protocols',
        isKhmer ? 'អនុវត្តការដំឡើងផ្ទាល់ដៃ ១០០%' : '100% DIY hands-on building'
      ]
    },
    {
      id: '3d-learners',
      icon: Users,
      titleEn: 'Interactive 3D Learners',
      titleKm: 'អ្នករៀនតាមរយៈ 3D អន្តរកម្ម',
      subtitleEn: 'Visual & Kinesthetic Minds',
      subtitleKm: 'សិស្សដែលឆាប់ចាប់បានតាមការមើលឃើញ',
      color: '#FF6B00',
      bgLight: 'rgba(255, 107, 0, 0.08)',
      borderColor: 'rgba(255, 107, 0, 0.25)',
      descEn: 'Students who struggle with static 2D textbook memorization. By stepping inside a 3D beating heart or orbiting planets, complex scientific concepts become intuitive and unforgettable.',
      descKm: 'សិស្សដែលពិបាកចងចាំមេរៀនតាមរយៈការទន្ទេញសៀវភៅ 2D។ ការចូលទៅកាន់ពិភព 3D ផ្ទាល់ជួយឱ្យការយល់ដឹងពីកាយវិភាគវិទ្យា និងរូបវិទ្យាកាន់តែងាយ និងចងចាំបានយូរ។',
      benefits: [
        isKhmer ? 'បង្កើនការយល់ដឹងក្នុងលំហ 3D' : 'High spatial retention & engagement',
        isKhmer ? 'ពិសោធន៍ផ្ទាល់ដៃដោយមិនបារម្ភគ្រោះថ្នាក់' : 'Safe simulation of physics & forces',
        isKhmer ? 'រៀនដោយរីករាយតាមរយៈ Game' : 'Gamified intuitive learning'
      ]
    }
  ];

  return (
    <section id="users" style={{
      background: '#F8FAFC',
      padding: '90px 0',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        {/* Section Heading matching Canva Slide 5 */}
        <div style={{ textAlign: 'center', marginBottom: '55px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(22, 163, 74, 0.1)',
            color: '#16A34A',
            border: '1px solid rgba(22, 163, 74, 0.25)',
            padding: '6px 16px',
            borderRadius: '9999px',
            fontSize: '0.82rem',
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            <Users size={14} />
            <span>{isKhmer ? 'ក្រុមគោលដៅអ្នកប្រើប្រាស់' : 'Our Target Users'}</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.4vw, 2.8rem)',
            fontWeight: 800,
            color: '#0A192F',
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            {isKhmer ? 'នរណាខ្លះដែលទទួលបានអត្ថប្រយោជន៍ពី Spatial?' : 'Who We Are Building Spatial For'}
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: '#64748B',
            maxWidth: '680px',
            margin: '0 auto',
            lineHeight: 1.65
          }}>
            {isKhmer ? (
              'Spatial ត្រូវបានរចនាឡើងយ៉ាងយកចិត្តទុកដាក់ ដើម្បីផ្ដល់លទ្ធភាពស្មើៗគ្នាដល់សាលារៀន សិស្សានុសិស្ស និងអ្នកបង្កើតថ្មីទូទាំងប្រទេសកម្ពុជា។'
            ) : (
              'Democratizing immersive education for students, makers, and resource-constrained institutions.'
            )}
          </p>
        </div>

        {/* 3 User Target Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '28px'
        }}>
          {targets.map((tgt) => {
            const Icon = tgt.icon;
            return (
              <div
                key={tgt.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '36px 28px',
                  border: `1px solid ${tgt.borderColor}`,
                  boxShadow: '0 4px 20px rgba(10, 25, 47, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                {/* Header Icon + Subtitle */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    background: tgt.bgLight,
                    color: tgt.color,
                    border: `1px solid ${tgt.borderColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Icon size={28} />
                  </div>

                  <div>
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748B' }}>
                      {isKhmer ? tgt.subtitleKm : tgt.subtitleEn}
                    </span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0A192F', margin: 0 }}>
                      {isKhmer ? tgt.titleKm : tgt.titleEn}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '0.94rem',
                  color: '#475569',
                  lineHeight: 1.65,
                  marginBottom: '24px',
                  flexGrow: 1
                }}>
                  {isKhmer ? tgt.descKm : tgt.descEn}
                </p>

                {/* Bullet Points */}
                <div style={{
                  borderTop: '1px solid #E2E8F0',
                  paddingTop: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                  {tgt.benefits.map((b, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle2 size={16} color={tgt.color} style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.86rem', color: '#334155', fontWeight: 600 }}>
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
