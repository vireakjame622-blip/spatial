'use client';

import React from 'react';
import { Download, FileText, Box, Code, Layers, CheckCircle2 } from 'lucide-react';

export default function BlueprintDownloadsSection({ lang }) {
  const isKhmer = lang === 'km';

  const downloadTextFile = (filename, content) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
  };

  const handleDownloadBlueprint = () => {
    const content = `SPATIAL VR - 1:1 CARDBOARD CUTTING SPECIFICATION
===========================================================
Project: Spatial (Budget-Friendly Student VR Kit)
Specification: Open-Source STEM Blueprint
Date: 2026

CUTTING DIMENSIONS:
1. Front Lens Mount Panel:
   - Width: 152mm, Height: 76mm
   - Dual Lens Apertures: 42.0mm diameter
   - Interpupillary Distance (Center-to-Center): 64mm
   - Focal Distance to Smartphone Backplate: 45mm

2. Central Optical Crosstalk Divider:
   - Width: 142mm, Height: 76mm
   - Engineered to eliminate dual-eye optical bleed

3. Smartphone Retention Chamber:
   - Accommodates phones up to 166mm x 82mm x 9.5mm
   - Top rubber latch / Velcro strap anchors

4. Ergonomic Nose Bridge Arch:
   - Width: 34mm, Height: 26mm smooth curve

PRINTING INSTRUCTIONS:
- Print at 100% "Actual Size" on A4 or Letter cardstock.
- Glue cardstock template onto clean 1.5mm - 2mm corrugated E-flute cardboard.
- Cut along solid black lines with hobby utility knife; lightly score dashed red lines for folds.
`;
    downloadTextFile('spatial_cardboard_blueprint_1to1.txt', content);
  };

  const handleDownloadArduinoCode = () => {
    const code = `// Spatial VR Bluetooth Controller Firmware (ESP32 BLE Gamepad)
// Open-Source STEM Firmware
#include <BleGamepad.h>

BleGamepad bleGamepad("Spatial-VR-Controller", "Spatial", 100);

#define PIN_JOY_X  34  // Analog X Axis
#define PIN_JOY_Y  35  // Analog Y Axis
#define PIN_BTN_A  25  // Action Button A
#define PIN_BTN_B  26  // Action Button B

void setup() {
  Serial.begin(115200);
  pinMode(PIN_BTN_A, INPUT_PULLUP);
  pinMode(PIN_BTN_B, INPUT_PULLUP);
  bleGamepad.begin();
  Serial.println("Spatial BLE Gamepad Active!");
}

void loop() {
  if (bleGamepad.isConnected()) {
    int rawX = analogRead(PIN_JOY_X);
    int rawY = analogRead(PIN_JOY_Y);
    bleGamepad.setLeftThumb(map(rawX, 0, 4095, -32767, 32767), map(rawY, 0, 4095, -32767, 32767));
    if (digitalRead(PIN_BTN_A) == LOW) bleGamepad.press(BUTTON_1); else bleGamepad.release(BUTTON_1);
    if (digitalRead(PIN_BTN_B) == LOW) bleGamepad.press(BUTTON_2); else bleGamepad.release(BUTTON_2);
    bleGamepad.sendReport();
  }
  delay(10);
}`;
    downloadTextFile('SpatialController_ESP32_BLE.ino', code);
  };

  const handleDownloadUnityPackage = () => {
    const readme = `SPATIAL UNITY 3D VR STARTER SDK
==================================
Requirements: Unity 2022.3 LTS or Unity 6
Package components:
1. SpatialCardboardCameraRig.prefab (Dual stereoscopic cameras configured for 42mm lenses)
2. SpatialBluetoothInputManager.cs (Maps BLE controller axis & buttons into Unity Input System)
3. Sample Scenes:
   - SolarSystemOrbitScene.unity
   - HeartAnatomyDissectionScene.unity
   - MarsRoverTeleoperationScene.unity

Documentation & Support: Spatial Open-Source Community
`;
    downloadTextFile('spatial_unity_sdk_readme.txt', readme);
  };

  const resources = [
    {
      titleEn: '1:1 Scale Cardboard Cutting Blueprint',
      titleKm: 'ប្លង់កាត់ក្រដាសកាតុងទំហំ ១:១ (Blueprint PDF)',
      format: 'PDF / Text Vector',
      size: '1:1 Scale Printable',
      descEn: 'Exact dimensional template for 42mm lens mounts, nose arch, and folding lines.',
      descKm: 'គំរូប្លង់កាត់ជាក់ស្ដែង សម្រាប់ឡេន 42mm និងទម្រង់ទ្រច្រមុះ អាចបោះពុម្ពលើក្រដាស A4។',
      action: handleDownloadBlueprint
    },
    {
      titleEn: 'ESP32 BLE Controller Firmware',
      titleKm: 'កូដបន្ទះសៀគ្វី Controller (ESP32 BLE)',
      format: 'Arduino .INO Code',
      size: '10ms Low Latency',
      descEn: 'Ready-to-flash C++ sketch with BleGamepad library configuration for smooth control.',
      descKm: 'កូដ Arduino សម្រាប់ Flash ចូល ESP32 ដើម្បីភ្ជាប់ Bluetooth ជាមួយទូរស័ព្ទភ្លាមៗ។',
      action: handleDownloadArduinoCode
    },
    {
      titleEn: 'Unity 3D Starter SDK & Camera Rig',
      titleKm: 'កញ្ចប់ Unity 3D Starter SDK & កាមេរ៉ា VR',
      format: 'Unity Package',
      size: 'Ready-to-use',
      descEn: 'Stereo camera rig and Bluetooth controller input mapping script for Unity projects.',
      descKm: 'កាមេរ៉ា VR Split-Screen និងកូដភ្ជាប់ Controller ក្នុង Unity សម្រាប់សិស្សរៀនបង្កើតហ្គេម VR។',
      action: handleDownloadUnityPackage
    }
  ];

  return (
    <section id="blueprints" style={{
      background: '#F8FAFC',
      padding: '85px 0',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
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
            Open Resources
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
            fontWeight: 800,
            color: '#0A192F',
            marginBottom: '14px',
            letterSpacing: '-0.02em'
          }}>
            {isKhmer ? 'ទាញយកប្លង់ និងឯកសារបច្ចេកទេស' : 'Download Blueprints & Open Resources'}
          </h2>

          <p style={{
            fontSize: '1.05rem',
            color: '#64748B',
            maxWidth: '620px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            {isKhmer ? (
              'ឯកសារទាំងអស់ត្រូវបានបើកចំហ (Open Access) សម្រាប់សិស្សានុសិស្ស និងអ្នកច្នៃប្រឌិតទូទាំងប្រទេសកម្ពុជា។'
            ) : (
              'All blueprints, controller schematics, and Unity starter scripts are freely available for students and makers.'
            )}
          </p>
        </div>

        {/* 3 Download Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {resources.map((item, idx) => (
            <div
              key={idx}
              className="clean-card"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: '#F1F5F9',
                    color: '#475569'
                  }}>
                    {item.format}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#FF6B00', fontWeight: 600 }}>
                    {item.size}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0A192F', marginBottom: '10px' }}>
                  {isKhmer ? item.titleKm : item.titleEn}
                </h3>

                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6, marginBottom: '24px' }}>
                  {isKhmer ? item.descKm : item.descEn}
                </p>
              </div>

              <button
                onClick={item.action}
                className="btn-secondary"
                style={{ width: '100%' }}
              >
                <Download size={16} />
                <span>{isKhmer ? 'ទាញយកឯកសារ' : 'Download Resource'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
