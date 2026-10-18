'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, Bookmark, Award, Glasses, Cpu, ShieldCheck, Sparkles, Wrench } from 'lucide-react';

export default function StudentDashboard({ lang }) {
  const isKhmer = lang === 'km';

  const [kitProgress, setKitProgress] = useState({
    cardboardCut: true,
    lensesFitted: true,
    controllerWired: false,
    bluetoothPaired: false,
    firstVrCompleted: false
  });

  const [savedSims, setSavedSims] = useState(['sim-cleancity-01', 'sim-solar-01']);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('spatial_diy_progress');
      if (saved) {
        setKitProgress(JSON.parse(saved));
      }
      const savedBookmarks = localStorage.getItem('spatial_bookmarks');
      if (savedBookmarks) {
        setSavedSims(JSON.parse(savedBookmarks));
      }
    } catch (e) {
      console.warn('LocalStorage not accessible:', e);
    }
  }, []);

  const kitSteps = [
    { key: 'cardboardCut', labelEn: '1. Print & cut cardboard template along solid lines', labelKm: '១. បោះពុម្ព & កាត់ក្រដាសកាតុងតាមគំនូសបន្ទាត់រឹង' },
    { key: 'lensesFitted', labelEn: '2. Mount 42mm biconvex lenses (64mm IPD separation)', labelKm: '២. បំពាក់ឡេន 42mm Biconvex តាមគម្លាតភ្នែក 64mm' },
    { key: 'controllerWired', labelEn: '3. Wire ESP32 microcontroller & analog joystick', labelKm: '៣. តខ្សែ Joystick & ប៊ូតុងទៅកាន់បន្ទះសៀគ្វី ESP32' },
    { key: 'bluetoothPaired', labelEn: '4. Flash firmware & pair Bluetooth BLE gamepad', labelKm: '៤. បញ្ចូលកូដ Firmware & ភ្ជាប់ Bluetooth ជាមួយទូរស័ព្ទ' },
    { key: 'firstVrCompleted', labelEn: '5. Launch & complete your first 3D VR simulation', labelKm: '៥. បើក និងបញ្ចប់ការពិសោធន៍ 3D VR លើកដំបូង' },
  ];

  const handleToggleStep = (stepKey) => {
    const updated = {
      ...kitProgress,
      [stepKey]: !kitProgress[stepKey]
    };
    setKitProgress(updated);
    try {
      localStorage.setItem('spatial_diy_progress', JSON.stringify(updated));
    } catch (e) {}
  };

  const completedCount = kitSteps.filter(s => kitProgress[s.key]).length;
  const progressPercent = Math.round((completedCount / kitSteps.length) * 100);

  return (
    <section id="student-dashboard" style={{
      padding: '75px 0 95px 0',
      background: '#FFFFFF',
      color: '#0A192F',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0',
      position: 'relative'
    }}>
      <div className="container">
        {/* Banner */}
        <div style={{
          padding: '32px',
          borderRadius: '24px',
          marginBottom: '36px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          border: '1px solid #E2E8F0',
          background: '#F8FAFC',
          boxShadow: '0 4px 20px rgba(10, 25, 47, 0.04)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '20px',
              background: 'rgba(255, 107, 0, 0.08)',
              color: '#FF6B00',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(255, 107, 0, 0.3)',
              boxShadow: '0 4px 16px rgba(255, 107, 0, 0.15)'
            }}>
              <Wrench size={30} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.6rem)', fontWeight: 800, color: '#0A192F' }}>
                  {isKhmer ? 'តារាងតាមដានការដំឡើងឧបករណ៍ DIY' : 'DIY Kit Assembly & Maker Tracker'}
                </h2>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  background: 'rgba(255, 107, 0, 0.08)',
                  color: '#FF6B00',
                  border: '1px solid rgba(255, 107, 0, 0.25)',
                  fontSize: '0.78rem',
                  fontWeight: 700
                }}>
                  Maker Lab 2026
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#475569' }}>
                {isKhmer ? (
                  'តាមដានវឌ្ឍនភាពនៃការដំឡើងវ៉ែនតា Cardboard និងឧបករណ៍បញ្ជា Bluetooth របស់អ្នកដោយផ្ទាល់'
                ) : (
                  'Track your step-by-step progress building your Cardboard HMD and ESP32 BLE controller'
                )}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FF6B00' }}>
                {completedCount} / {kitSteps.length}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>
                {isKhmer ? 'ជំហានរួចរាល់' : 'Steps Completed'}
              </div>
            </div>
            <div style={{ width: '1px', height: '36px', background: '#E2E8F0' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0284C7' }}>
                {progressPercent}%
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>
                {isKhmer ? 'វឌ្ឍនភាពដំឡើង' : 'Assembly Progress'}
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Responsive Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {/* DIY Kit Checklist */}
          <div style={{
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '20px',
            padding: '32px',
            boxShadow: '0 4px 20px rgba(10, 25, 47, 0.04)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0A192F', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Cpu size={22} color="#FF6B00" />
                {isKhmer ? 'បញ្ជីត្រួតពិនិត្យ ៥ ជំហាន (Interactive Checklist)' : '5-Step Assembly Checklist'}
              </h3>
              <span style={{
                padding: '4px 12px',
                borderRadius: '9999px',
                background: 'rgba(2, 132, 199, 0.08)',
                color: '#0284C7',
                border: '1px solid rgba(2, 132, 199, 0.25)',
                fontSize: '0.8rem',
                fontWeight: 700
              }}>
                {progressPercent}% Ready
              </span>
            </div>

            {/* Progress Bar */}
            <div style={{
              width: '100%',
              height: '8px',
              borderRadius: '9999px',
              background: '#E2E8F0',
              overflow: 'hidden',
              marginBottom: '24px'
            }}>
              <div style={{
                height: '100%',
                width: `${progressPercent}%`,
                background: 'linear-gradient(90deg, #FF6B00 0%, #0284C7 100%)',
                boxShadow: '0 0 12px rgba(255, 107, 0, 0.3)',
                transition: 'width 0.4s ease'
              }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {kitSteps.map((step) => {
                const isDone = !!kitProgress[step.key];
                return (
                  <div
                    key={step.key}
                    onClick={() => handleToggleStep(step.key)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      background: isDone ? 'rgba(34, 197, 94, 0.08)' : '#FFFFFF',
                      border: isDone ? '1px solid rgba(34, 197, 94, 0.25)' : '1px solid #E2E8F0',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {isDone ? (
                      <CheckCircle2 size={22} color="#16A34A" style={{ flexShrink: 0 }} />
                    ) : (
                      <Circle size={22} color="#94A3B8" style={{ flexShrink: 0 }} />
                    )}
                    <span style={{
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: isDone ? '#0A192F' : '#475569',
                      textDecoration: isDone ? 'line-through' : 'none',
                      opacity: isDone ? 0.8 : 1
                    }}>
                      {isKhmer ? step.labelKm : step.labelEn}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievements & Quick Tips */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Achievements Card */}
            <div style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              padding: '28px',
              boxShadow: '0 4px 20px rgba(10, 25, 47, 0.04)'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0A192F', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={18} color="#EAB308" />
                {isKhmer ? 'សមិទ្ធផលសិក្សា & ផ្លាកសញ្ញា (Maker Badges)' : 'Maker Badges Earned'}
              </h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <div style={{
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: progressPercent >= 40 ? 'rgba(255, 107, 0, 0.08)' : '#F8FAFC',
                  border: progressPercent >= 40 ? '1px solid rgba(255, 107, 0, 0.3)' : '1px solid #E2E8F0',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: progressPercent >= 40 ? '#FF6B00' : '#94A3B8'
                }}>
                  🎓 VR Pioneer
                </div>
                <div style={{
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: progressPercent >= 60 ? 'rgba(2, 132, 199, 0.08)' : '#F8FAFC',
                  border: progressPercent >= 60 ? '1px solid rgba(2, 132, 199, 0.3)' : '1px solid #E2E8F0',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: progressPercent >= 60 ? '#0284C7' : '#94A3B8'
                }}>
                  🛠️ Cardboard Craftsman
                </div>
                <div style={{
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: progressPercent === 100 ? 'rgba(139, 92, 246, 0.08)' : '#F8FAFC',
                  border: progressPercent === 100 ? '1px solid rgba(139, 92, 246, 0.3)' : '1px solid #E2E8F0',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: progressPercent === 100 ? '#7C3AED' : '#94A3B8'
                }}>
                  🚀 3D VR Explorer
                </div>
              </div>
            </div>

            {/* Quick Pro Tips */}
            <div style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              padding: '28px',
              boxShadow: '0 4px 20px rgba(10, 25, 47, 0.04)'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0A192F', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Glasses size={18} color="#0284C7" />
                {isKhmer ? 'ព័ត៌មានជំនួយសម្រាប់អ្នកដំឡើង' : 'Maker Tips'}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                {isKhmer ? (
                  '• ត្រូវប្រាកដថាគម្លាតរវាងផ្ចិតឡេនទាំងពីរស្មើ 64mm ដើម្បីការពារការចុកភ្នែក។\n• ប្រើកាវក្តៅ (Hot glue) តិចៗដើម្បីកុំឱ្យស្រវាំងលើផ្ទៃឡេន acrylic។\n• បន្ទះ ESP32 ប្រើប្រាស់ថាមពលត្រឹមតែ 3.3V - 5V អាចផ្គត់ផ្គង់ដោយថ្មសាកទូរស័ព្ទ Powerbank បាន។'
                ) : (
                  '• Ensure 64mm distance between lens centers to match human IPD and eliminate eye strain.\n• Use hot melt glue sparingly around the lens rims to avoid blurring the optical surface.\n• The ESP32 operates cleanly on 3.3V-5V power from any portable power bank.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
