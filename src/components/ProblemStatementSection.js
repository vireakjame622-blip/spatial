'use client';

import React from 'react';
import { DollarSign, BookOpen, Network, AlertTriangle, ArrowRight } from 'lucide-react';

export default function ProblemStatementSection({ lang }) {
  const isKhmer = lang === 'km';

  const problems = [
    {
      id: 'price-barrier',
      tag: 'Obstacle 01',
      tagKm: 'ឧបសគ្គទី ១',
      titleEn: 'Price Barrier ($500+ Lockout)',
      titleKm: 'របាំងតម្លៃខ្ពស់ ($500+ ឡើងទៅ)',
      icon: DollarSign,
      color: '#EF4444',
      bgLight: 'rgba(239, 68, 68, 0.08)',
      borderColor: 'rgba(239, 68, 68, 0.25)',
      descEn: 'Commercial headsets (Meta Quest, Apple Vision Pro) cost $500 to $3,500. This steep financial wall completely locks out public schools, students, and emerging educators in developing regions.',
      descKm: 'វ៉ែនតា VR ពាណិជ្ជកម្មលើទីផ្សារមានតម្លៃរាប់រយរាប់ពាន់ដុល្លារ ដែលជាឧបសគ្គហិរញ្ញវត្ថុដ៏ធំ ធ្វើឱ្យសាលារៀនរដ្ឋ និងសិស្សានុសិស្សទូទៅមិនអាចមានលទ្ធភាពទិញយកមកសិក្សាបានឡើយ។',
      stat: '$500 - $3,500',
      statLabel: isKhmer ? 'តម្លៃវ៉ែនតាពាណិជ្ជកម្មទូទៅ' : 'Commercial Headset Cost'
    },
    {
      id: 'passive-learning',
      tag: 'Obstacle 02',
      tagKm: 'ឧបសគ្គទី ២',
      titleEn: 'Passive 2D Learning',
      titleKm: 'ការរៀនអសកម្មលើរូបភាព 2D',
      icon: BookOpen,
      color: '#8B5CF6',
      bgLight: 'rgba(139, 92, 246, 0.08)',
      borderColor: 'rgba(139, 92, 246, 0.25)',
      descEn: 'Static 2D textbook pages and chalkboard diagrams cannot convey spatial depth, planetary orbits, or complex anatomical blood flow, leading to low retention and disengaged students.',
      descKm: 'ការមើលតែរូបភាពសំប៉ែត 2D ក្នុងសៀវភៅពុម្ព មិនអាចបង្ហាញគន្លងតារាសាស្ត្រ ឬចរន្តឈាមក្នុងបេះដូងឱ្យច្បាស់ក្នុងលំហបានឡើយ ធ្វើឱ្យសិស្សពិបាកយល់ និងឆាប់ធុញទ្រាន់។',
      stat: '< 20%',
      statLabel: isKhmer ? 'កម្រិតចងចាំពីសៀវភៅ 2D' : 'Textbook Retention Rate'
    },
    {
      id: 'digital-divide',
      tag: 'Obstacle 03',
      tagKm: 'ឧបសគ្គទី ៣',
      titleEn: 'The Digital Divide',
      titleKm: 'គម្លាតឌីជីថល និងឱកាស',
      icon: Network,
      color: '#FF6B00',
      bgLight: 'rgba(255, 107, 0, 0.08)',
      borderColor: 'rgba(255, 107, 0, 0.25)',
      descEn: 'Resource-constrained classrooms and provincial schools lack dedicated computer labs and immersive tech, deepening the educational inequality gap between urban and rural learners.',
      descKm: 'សាលារៀនដែលខ្វះខាតធនធានមិនមានបន្ទប់កុំព្យូទ័រទំនើប ឬឧបករណ៍បច្ចេកវិទ្យាពិសោធន៍ ធ្វើឱ្យគម្លាតចំណេះដឹងរវាងសិស្សនៅទីក្រុង និងតាមខេត្តកាន់តែរីកធំឡើង។',
      stat: '85%+',
      statLabel: isKhmer ? 'សាលារៀនខ្វះឧបករណ៍ 3D' : 'Schools without 3D Labs'
    }
  ];

  return (
    <section id="problem" style={{
      background: '#FFFFFF',
      padding: '90px 0',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header matching Canva Slide 2 */}
        <div style={{ textAlign: 'center', marginBottom: '55px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(239, 68, 68, 0.1)',
            color: '#DC2626',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            padding: '6px 16px',
            borderRadius: '9999px',
            fontSize: '0.82rem',
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            <AlertTriangle size={14} />
            <span>{isKhmer ? 'បញ្ហាប្រឈមក្នុងវិស័យអប់រំ' : 'Problem Statement'}</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.4vw, 2.8rem)',
            fontWeight: 800,
            color: '#0A192F',
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            {isKhmer ? 'ហេតុអ្វីបានជាយើងត្រូវការ Spatial?' : 'The Urgent Educational Challenge'}
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: '#64748B',
            maxWidth: '680px',
            margin: '0 auto',
            lineHeight: 1.65
          }}>
            {isKhmer ? (
              'សិស្សានុសិស្សរាប់លាននាក់នៅកម្ពុជា និងក្នុងតំបន់ កំពុងជួបប្រទះនូវឧបសគ្គធំៗ ៣ ដែលរារាំងពួកគេពីការទទួលបានការអប់រំបច្ចេកវិទ្យា 3D & VR។'
            ) : (
              'Three critical bottlenecks currently lock students out of high-impact 3D & VR STEM learning opportunities.'
            )}
          </p>
        </div>

        {/* 3 Problem Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px'
        }}>
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.id}
                style={{
                  background: '#F8FAFC',
                  borderRadius: '20px',
                  padding: '36px 28px',
                  border: `1px solid ${prob.borderColor}`,
                  boxShadow: '0 4px 20px rgba(10, 25, 47, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.25s ease'
                }}
              >
                {/* Badge Tag */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px'
                }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: prob.color,
                    background: prob.bgLight,
                    padding: '4px 12px',
                    borderRadius: '8px',
                    letterSpacing: '0.04em'
                  }}>
                    {isKhmer ? prob.tagKm : prob.tag}
                  </span>

                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: prob.bgLight,
                    color: prob.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={24} />
                  </div>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: '#0A192F',
                  marginBottom: '14px',
                  lineHeight: 1.3
                }}>
                  {isKhmer ? prob.titleKm : prob.titleEn}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '0.95rem',
                  color: '#475569',
                  lineHeight: 1.65,
                  marginBottom: '26px',
                  flexGrow: 1
                }}>
                  {isKhmer ? prob.descKm : prob.descEn}
                </p>

                {/* Impact Stat Box */}
                <div style={{
                  background: '#F8FAFC',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between'
                }}>
                  <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>
                    {prob.statLabel}
                  </span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 900, color: prob.color }}>
                    {prob.stat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
