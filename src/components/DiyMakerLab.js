'use client';

import React, { useState } from 'react';
import { Download, Scissors, Cpu, Layers, Code, CheckCircle, ExternalLink, Sparkles, AlertCircle } from 'lucide-react';

export default function DiyMakerLab({ lang }) {
  const [activeTab, setActiveTab] = useState('cardboard');
  const [copiedCode, setCopiedCode] = useState(false);

  const isKhmer = lang === 'km';

  const arduinoCode = `// Spatial VR Bluetooth Controller - ESP32 BLE Gamepad Firmware
#include <BleGamepad.h>

BleGamepad bleGamepad("Spatial-VR-Controller", "CADT-IDT", 100);

#define PIN_JOY_X  34  // Analog X
#define PIN_JOY_Y  35  // Analog Y
#define PIN_BTN_A  25  // Action Button A
#define PIN_BTN_B  26  // Action Button B
#define PIN_JOY_SW 32  // Joystick Thumb Click

void setup() {
  Serial.begin(115200);
  pinMode(PIN_BTN_A, INPUT_PULLUP);
  pinMode(PIN_BTN_B, INPUT_PULLUP);
  pinMode(PIN_JOY_SW, INPUT_PULLUP);
  
  bleGamepad.begin();
  Serial.println("Spatial BLE Gamepad Ready & Advertising!");
}

void loop() {
  if (bleGamepad.isConnected()) {
    // Read analog joystick (0-4095 mapped to -32767 to 32767)
    int rawX = analogRead(PIN_JOY_X);
    int rawY = analogRead(PIN_JOY_Y);
    int mappedX = map(rawX, 0, 4095, -32767, 32767);
    int mappedY = map(rawY, 0, 4095, -32767, 32767);

    bleGamepad.setLeftThumb(mappedX, mappedY);

    // Read buttons (active LOW)
    if (digitalRead(PIN_BTN_A) == LOW) bleGamepad.press(BUTTON_1);
    else bleGamepad.release(BUTTON_1);

    if (digitalRead(PIN_BTN_B) == LOW) bleGamepad.press(BUTTON_2);
    else bleGamepad.release(BUTTON_2);

    bleGamepad.sendReport();
  }
  delay(10); // 100Hz polling rate (10ms low latency)
}`;

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(arduinoCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleDownloadBlueprint = () => {
    const templateContent = `SPATIAL VR CARDBOARD CUTOUT BLUEPRINT (CADT IDT)
=====================================================
Dimensions:
- Front Panel (Lens Holder): 150mm x 75mm (with 2x 42mm circular lens holes, 64mm IPD separation)
- Divider Wall: 140mm x 75mm (central optical septum to eliminate crosstalk)
- Phone Slot Chamber: Fits smartphones up to 6.7 inches (165mm x 82mm x 9mm)
- Nose Bridge Cutout: 32mm width x 28mm height ergonomic curved arch
- Outer Flap & Hook: Velcro strap mounts on left and right side (20mm wide)

Bill of Materials:
1. Corrugated Cardboard (E-flute or B-flute 1.5mm - 2mm thickness)
2. 2x Biconvex Optical Lenses (Diameter: 42mm, Focal Length: 45mm)
3. 1x Elastic Headband Strap (with Velcro)
4. 1x Ceramic Disc Magnet or Rubber Band latch
5. White/Craft Glue and Hobby Utility Knife
`;
    const blob = new Blob([templateContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'spatial_cardboard_blueprint_cadt.txt';
    a.click();
  };

  return (
    <section id="diy-section" style={{
      padding: '85px 0 95px 0',
      background: '#F8FAFC',
      color: '#0A192F',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              borderRadius: '9999px',
              background: 'rgba(255, 107, 0, 0.08)',
              color: '#FF6B00',
              border: '1px solid rgba(255, 107, 0, 0.25)',
              fontSize: '0.8rem',
              fontWeight: 700
            }}>
              <Scissors size={13} />
              {isKhmer ? 'មន្ទីរពិសោធន៍អ្នកច្នៃប្រឌិត' : 'Hands-On Maker Lab'}
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
            fontWeight: 800,
            color: '#0A192F',
            marginBottom: '14px',
            letterSpacing: '-0.02em'
          }}>
            {isKhmer ? 'មគ្គុទ្ទេសក៍ដំឡើងវ៉ែនតា Cardboard & Controller ដោយខ្លួនឯង' : 'Build Your Own Spatial VR Kit'}
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', maxWidth: '660px', margin: '0 auto' }}>
            {isKhmer ? (
              'ការណែនាំលម្អិតមួយជំហានម្តងៗ៖ ចាប់ពីការកាត់ក្រដាសកាតុង ការតម្រឹមឡេន រហូតដល់ការតខ្សែសៀគ្វី Bluetooth Controller និងការសរសេរកូដបញ្ចូលក្នុង Unity។'
            ) : (
              'Step-by-step assembly guides, optical calculations, controller wiring diagrams, and ready-to-flash ESP32 firmware for students and makers.'
            )}
          </p>
        </div>

        {/* Sub-tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '40px' }}>
          <button
            onClick={() => setActiveTab('cardboard')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '0.95rem',
              background: activeTab === 'cardboard' ? 'linear-gradient(135deg, #FF6B00 0%, #FF8A33 100%)' : '#FFFFFF',
              color: activeTab === 'cardboard' ? '#FFFFFF' : '#475569',
              border: activeTab === 'cardboard' ? '1px solid #FF8A33' : '1px solid #E2E8F0',
              boxShadow: activeTab === 'cardboard' ? '0 4px 16px rgba(255, 107, 0, 0.3)' : '0 2px 6px rgba(0,0,0,0.03)',
              transition: 'all 0.25s'
            }}
          >
            <Scissors size={18} />
            <span>{isKhmer ? '១. ដំឡើងវ៉ែនតា Cardboard' : '1. Cardboard Headset Guide'}</span>
          </button>

          <button
            onClick={() => setActiveTab('controller')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '0.95rem',
              background: activeTab === 'controller' ? 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)' : '#FFFFFF',
              color: activeTab === 'controller' ? '#FFFFFF' : '#475569',
              border: activeTab === 'controller' ? '1px solid #0284C7' : '1px solid #E2E8F0',
              boxShadow: activeTab === 'controller' ? '0 4px 16px rgba(2, 132, 199, 0.3)' : '0 2px 6px rgba(0,0,0,0.03)',
              transition: 'all 0.25s'
            }}
          >
            <Cpu size={18} />
            <span>{isKhmer ? '២. តេស្ត និងតខ្សែ Controller' : '2. Bluetooth Controller Schematics'}</span>
          </button>
        </div>

        {/* Tab 1: Cardboard Assembly */}
        {activeTab === 'cardboard' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              padding: '32px',
              boxShadow: '0 4px 20px rgba(10, 25, 47, 0.04)'
            }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0A192F', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Layers size={22} color="#FF6B00" />
                {isKhmer ? 'ជំហាននៃការដំឡើងវ៉ែនតា Cardboard VR' : 'Cardboard HMD Assembly Steps'}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  {
                    num: '01',
                    titleEn: 'Source Materials & Print Blueprint',
                    titleKm: 'រៀបចំសម្ភារៈ និងបោះពុម្ពប្លង់កាត់',
                    descEn: 'Find corrugated cardboard (1.5mm - 2mm E-flute from clean packaging boxes). Print our 1:1 scale blueprint template.',
                    descKm: 'រកក្រដាសកាតុងកម្រាស់ ១.៥ ទៅ ២ម.ម (ពីប្រអប់វេចខ្ចប់ស្អាតៗ)។ ទាញយកប្លង់ទំហំ ១:១ ដើម្បីបិទកាត់។'
                  },
                  {
                    num: '02',
                    titleEn: 'Cut Along Solid Lines & Score Folds',
                    titleKm: 'កាត់តាមគំនូសបន្ទាត់រឹង & បត់តាមស្នាមប្រឡោះ',
                    descEn: 'Use a sharp hobby knife and metal ruler. Cut out the lens holes and nose bridge arch, then gently score the dashed fold lines.',
                    descKm: 'ប្រើកាំបិតក្រដាសមុតស្រួច និងបន្ទាត់ដែក។ កាត់រន្ធដាក់ឡេន និងច្រមុះ រួចបត់តាមគំនូសដាច់ៗ។'
                  },
                  {
                    num: '03',
                    titleEn: 'Mount the 42mm Optical Biconvex Lenses',
                    titleKm: 'បំពាក់ឡេនអុបទិក Biconvex 42mm',
                    descEn: 'Position both 42mm lenses with the curved side facing your smartphone screen. Ensure interpupillary distance (IPD) is set to 64mm.',
                    descKm: 'ដាក់ឡេនទាំងពីរដោយបែរផ្ទៃកោងឆ្ពោះទៅអេក្រង់ទូរស័ព្ទ។ កំណត់គម្លាតរវាងភ្នែកទាំងពីរ (IPD) ប្រហែល 64mm។'
                  },
                  {
                    num: '04',
                    titleEn: 'Install Central Divider & Elastic Strap',
                    titleKm: 'បំពាក់ជញ្ជាំងចែកភ្នែក & ខ្សែរឹតក្បាល',
                    descEn: 'Glue the central light baffle divider to prevent optical bleed between eyes. Secure the elastic headband with velcro.',
                    descKm: 'បិទបន្ទះកាតុងចែកភ្នែកឆ្វេង-ស្តាំនៅចំកណ្តាលដើម្បីកុំឱ្យស្រវាំង។ រួចភ្ជាប់ខ្សែរឹតក្បាលយឺត។'
                  }
                ].map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '16px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(255, 107, 0, 0.08)',
                      color: '#FF6B00',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '1rem',
                      flexShrink: 0,
                      border: '1px solid rgba(255, 107, 0, 0.25)'
                    }}>
                      {step.num}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0A192F', marginBottom: '4px' }}>
                        {isKhmer ? step.titleKm : step.titleEn}
                      </h4>
                      <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.5 }}>
                        {isKhmer ? step.descKm : step.descEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '30px', display: 'flex', gap: '14px' }}>
                <button onClick={handleDownloadBlueprint} className="btn-primary">
                  <Download size={18} />
                  <span>{isKhmer ? 'ទាញយកប្លង់កាត់ (Blueprint PDF)' : 'Download Cutout Blueprint (PDF)'}</span>
                </button>
              </div>
            </div>

            {/* Bill of Materials Card */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              padding: '32px',
              boxShadow: '0 4px 20px rgba(10, 25, 47, 0.04)'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0A192F', marginBottom: '20px' }}>
                {isKhmer ? 'បញ្ជីសម្ភារៈចាំបាច់ (Bill of Materials)' : 'Required Bill of Materials'}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { name: '42mm Biconvex Lenses (Focal 45mm)', est: '$2.50', status: 'Essential' },
                  { name: 'Recycled Corrugated Cardboard Sheet', est: '$0.50', status: 'Available' },
                  { name: 'Elastic Headband with Velcro', est: '$1.00', status: 'Comfort' },
                  { name: 'Adhesive Glue or Hot Melt Glue Stick', est: '$0.50', status: 'Assembly' },
                  { name: 'Any Android or iOS Smartphone', est: 'BYOD', status: 'Display' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0A192F' }}>{item.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{item.status}</div>
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FF6B00' }}>{item.est}</div>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: '24px',
                padding: '16px',
                borderRadius: '12px',
                background: 'rgba(2, 132, 199, 0.06)',
                border: '1px solid rgba(2, 132, 199, 0.2)',
                display: 'flex',
                gap: '12px'
              }}>
                <AlertCircle size={20} color="#0284C7" style={{ flexShrink: 0 }} />
                <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.5 }}>
                  {isKhmer ? (
                    'ព័ត៌មានជំនួយ៖ ប្រើប្រាស់ឡេនអង្កត់ផ្ចិត 42mm ដើម្បីទទួលបានមុំទិដ្ឋភាព (Field of View) ធំទូលាយបំផុតរហូតដល់ 95 ដឺក្រេ!'
                  ) : (
                    'Pro Tip: Using 42mm diameter lenses gives a wide ~95° FOV, minimizing black edges for an authentic VR immersion.'
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Controller Electronics & Firmware */}
        {activeTab === 'controller' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {/* Wiring Diagram Card */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              padding: '32px',
              boxShadow: '0 4px 20px rgba(10, 25, 47, 0.04)'
            }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0A192F', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Cpu size={22} color="#0284C7" />
                {isKhmer ? 'ដ្យាក្រាមតខ្សែសៀគ្វី Bluetooth Controller' : 'Hardware Pinout & Circuit Schematic'}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '20px' }}>
                {isKhmer ? (
                  'តភ្ជាប់ម៉ូឌុល Analog Joystick (KY-023) និងប៊ូតុងចុចពីរគ្រាប់ ទៅកាន់បន្ទះសៀគ្វី ESP32 ឬ Arduino តាមរយៈ Pinout ខាងក្រោម៖'
                ) : (
                  'Connect the 2-axis analog thumbstick and tactile buttons to the ESP32 microcontroller pins:'
                )}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                {[
                  { component: 'Joystick VCC', espPin: '3.3V Pin', type: 'Power' },
                  { component: 'Joystick GND', espPin: 'GND Pin', type: 'Ground' },
                  { component: 'Joystick VRx (X-Axis)', espPin: 'GPIO 34 (ADC1)', type: 'Analog' },
                  { component: 'Joystick VRy (Y-Axis)', espPin: 'GPIO 35 (ADC1)', type: 'Analog' },
                  { component: 'Joystick SW (Click)', espPin: 'GPIO 32 (Pullup)', type: 'Digital' },
                  { component: 'Button A (Red)', espPin: 'GPIO 25 (Pullup)', type: 'Digital' },
                  { component: 'Button B (Red)', espPin: 'GPIO 26 (Pullup)', type: 'Digital' },
                ].map((wire, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0'
                  }}>
                    <span style={{ fontSize: '0.85rem', color: '#0A192F', fontWeight: 600 }}>{wire.component}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.75rem', color: wire.type === 'Analog' ? '#0284C7' : wire.type === 'Power' ? '#FF6B00' : '#64748B' }}>
                        {wire.type}
                      </span>
                      <span style={{ fontSize: '0.85rem', color: '#FF6B00', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                        {wire.espPin}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code / Firmware Box */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 4px 20px rgba(10, 25, 47, 0.04)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0A192F', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Code size={18} color="#0284C7" />
                  ESP32 BLE Firmware Sketch
                </h3>
                <button
                  onClick={copyCodeToClipboard}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    background: copiedCode ? 'rgba(34, 197, 94, 0.15)' : '#FFFFFF',
                    color: copiedCode ? '#16A34A' : '#0A192F',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    border: copiedCode ? '1px solid #16A34A' : '1px solid #E2E8F0',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                  }}
                >
                  <CheckCircle size={14} />
                  <span>{copiedCode ? (isKhmer ? 'បានចម្លង!' : 'Copied!') : (isKhmer ? 'ចម្លងកូដ' : 'Copy Code')}</span>
                </button>
              </div>

              <div style={{
                flex: 1,
                background: '#0B1120',
                padding: '18px',
                borderRadius: '12px',
                border: '1px solid #1E293B',
                overflowY: 'auto',
                maxHeight: '380px'
              }}>
                <pre style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  lineHeight: 1.5,
                  color: '#94A3B8'
                }}>
                  {arduinoCode}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
