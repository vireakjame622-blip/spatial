'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Compass, Radio, Cpu, RotateCcw, Check, Sparkles, Gamepad2 } from 'lucide-react';

export default function ControllerTestBench({ lang }) {
  const [joyX, setJoyX] = useState(0); // -100 to 100
  const [joyY, setJoyY] = useState(0); // -100 to 100
  const [btnA, setBtnA] = useState(false);
  const [btnB, setBtnB] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [latency, setLatency] = useState(12);

  const canvasRef = useRef(null);
  const roverPosRef = useRef({ x: 150, y: 150, angle: 0 });
  const animRef = useRef(null);

  const isKhmer = lang === 'km';

  // Listen to keyboard for virtual testing if no physical controller is plugged in
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'KeyW'].includes(e.code)) setJoyY(-80);
      if (['ArrowDown', 'KeyS'].includes(e.code)) setJoyY(80);
      if (['ArrowLeft', 'KeyA'].includes(e.code)) setJoyX(-80);
      if (['ArrowRight', 'KeyD'].includes(e.code)) setJoyX(80);
      if (['KeyJ', 'Space', 'Enter'].includes(e.code)) setBtnA(true);
      if (['KeyK', 'KeyB'].includes(e.code)) setBtnB(true);
    };

    const handleKeyUp = (e) => {
      if (['ArrowUp', 'KeyW', 'ArrowDown', 'KeyS'].includes(e.code)) setJoyY(0);
      if (['ArrowLeft', 'KeyA', 'ArrowRight', 'KeyD'].includes(e.code)) setJoyX(0);
      if (['KeyJ', 'Space', 'Enter'].includes(e.code)) setBtnA(false);
      if (['KeyK', 'KeyB'].includes(e.code)) setBtnB(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Standard Gamepad API polling loop
    let pollId;
    const pollGamepad = () => {
      const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
      const gp = gamepads[0];
      if (gp) {
        setIsConnected(true);
        // Map axes
        const xVal = Math.round((gp.axes[0] || 0) * 100);
        const yVal = Math.round((gp.axes[1] || 0) * 100);
        setJoyX(Math.abs(xVal) > 10 ? xVal : 0);
        setJoyY(Math.abs(yVal) > 10 ? yVal : 0);

        setBtnA(gp.buttons[0] ? gp.buttons[0].pressed : false);
        setBtnB(gp.buttons[1] ? gp.buttons[1].pressed : false);
      }
      pollId = requestAnimationFrame(pollGamepad);
    };
    pollId = requestAnimationFrame(pollGamepad);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(pollId);
    };
  }, []);

  // Rover test arena canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = 400;
    const height = canvas.height = 300;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Martian terrain background
      ctx.fillStyle = '#0B0D18';
      ctx.fillRect(0, 0, width, height);

      // Grid lines
      ctx.strokeStyle = 'rgba(255, 107, 0, 0.12)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
      }
      for (let y = 0; y < height; y += 30) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
      }

      // Update rover position
      const rover = roverPosRef.current;
      const speed = btnA ? 3.5 : 1.8;
      rover.x += (joyX / 100) * speed;
      rover.y += (joyY / 100) * speed;

      // Wrap around bounds
      if (rover.x < 15) rover.x = width - 15;
      if (rover.x > width - 15) rover.x = 15;
      if (rover.y < 15) rover.y = height - 15;
      if (rover.y > height - 15) rover.y = 15;

      // Draw rover
      ctx.save();
      ctx.translate(rover.x, rover.y);
      if (Math.abs(joyX) > 10 || Math.abs(joyY) > 10) {
        rover.angle = Math.atan2(joyY, joyX);
      }
      ctx.rotate(rover.angle);

      // Rover Body
      ctx.fillStyle = '#00F0FF';
      ctx.shadowColor = '#00F0FF';
      ctx.shadowBlur = btnB ? 20 : 8;
      ctx.fillRect(-12, -8, 24, 16);

      // Rover Wheels
      ctx.fillStyle = '#FF6B00';
      ctx.fillRect(-14, -11, 8, 4);
      ctx.fillRect(6, -11, 8, 4);
      ctx.fillRect(-14, 7, 8, 4);
      ctx.fillRect(6, 7, 8, 4);

      // Antenna / Sensor
      ctx.beginPath();
      ctx.arc(10, 0, 3, 0, Math.PI * 2);
      ctx.fillStyle = btnA ? '#FF3366' : '#FFFFFF';
      ctx.fill();

      ctx.restore();

      animRef.current = requestAnimationFrame(render);
    };

    animRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animRef.current);
  }, [joyX, joyY, btnA, btnB]);

  const handlePairBluetooth = async () => {
    if (navigator.bluetooth) {
      try {
        const device = await navigator.bluetooth.requestDevice({
          acceptAllDevices: true,
          optionalServices: ['battery_service']
        });
        setIsConnected(true);
      } catch (err) {
        console.warn('Web Bluetooth pair cancelled or not supported:', err);
      }
    } else {
      setIsConnected(true); // Demo mode fallback
    }
  };

  return (
    <section id="controller-section" style={{
      padding: '85px 0 95px 0',
      background: '#07101E',
      color: '#FFFFFF',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span className="badge-cyan">
              <Radio size={13} />
              Web Bluetooth API / Gamepad Test
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            marginBottom: '14px',
            letterSpacing: '-0.02em'
          }}>
            {isKhmer ? 'ផ្ទាំងតេស្តឧបករណ៍បញ្ជា Bluetooth Controller' : 'Live Controller Test & Calibration Bench'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto' }}>
            {isKhmer ? (
              'តេស្តប៊ូតុង និង Joystick នៃឧបករណ៍បញ្ជា DIY របស់អ្នកដោយផ្ទាល់នៅលើ Browser! អាចប្រើប្រាស់ Keyboard (WASD + Space) ដើម្បីធ្វើការសាកល្បងបានផងដែរ។'
            ) : (
              'Verify analog joystick deadzones, calibrate latency, and test tactile buttons in real-time before jumping into Unity 3D simulations.'
            )}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          {/* Visual DIY Controller Graphic */}
          <div className="glass-panel" style={{ padding: '36px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: isConnected ? '#4ADE80' : '#FF8A33',
                  boxShadow: `0 0 10px ${isConnected ? '#4ADE80' : '#FF8A33'}`
                }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>
                  {isConnected ? (isKhmer ? 'បានភ្ជាប់ Bluetooth (Active)' : 'Bluetooth Paired (Active)') : (isKhmer ? 'ត្រៀមតេស្ត (Virtual / USB)' : 'Ready for Input (Virtual / USB)')}
                </span>
              </div>

              <button
                onClick={handlePairBluetooth}
                className="btn-cyan"
                style={{ padding: '6px 14px', fontSize: '0.78rem' }}
              >
                <Radio size={14} />
                <span>{isKhmer ? 'ភ្ជាប់ Bluetooth' : 'Scan BLE Devices'}</span>
              </button>
            </div>

            {/* Custom 3D-Look DIY Controller Mockup */}
            <div style={{
              width: '260px',
              height: '360px',
              background: 'linear-gradient(160deg, #F1F5F9 0%, #CBD5E1 100%)',
              borderRadius: '60px 60px 40px 40px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.8)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              margin: '20px 0'
            }}>
              {/* Controller Status LED */}
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#00F0FF',
                boxShadow: '0 0 10px #00F0FF',
                marginBottom: '20px'
              }} />

              {/* Analog Joystick Well */}
              <div style={{
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                background: '#1E293B',
                boxShadow: 'inset 0 4px 10px rgba(0, 0, 0, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginBottom: '28px'
              }}>
                {/* Thumbstick Cap (Moves with joyX / joyY) */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 35% 35%, #475569 0%, #0F172A 100%)',
                  boxShadow: '0 6px 14px rgba(0, 0, 0, 0.7)',
                  transform: `translate(${joyX * 0.35}px, ${joyY * 0.35}px)`,
                  transition: 'transform 0.05s ease-out',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#1E293B' }} />
                </div>
              </div>

              {/* Dual Red Action Buttons */}
              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                {/* Button A */}
                <button
                  onMouseDown={() => setBtnA(true)}
                  onMouseUp={() => setBtnA(false)}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: btnA ? '#FF1E40' : '#E11D48',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    boxShadow: btnA ? '0 0 16px #FF1E40' : '0 4px 8px rgba(0, 0, 0, 0.4)',
                    transform: btnA ? 'scale(0.92)' : 'scale(1)',
                    transition: 'all 0.1s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none'
                  }}
                >
                  A
                </button>

                {/* Button B */}
                <button
                  onMouseDown={() => setBtnB(true)}
                  onMouseUp={() => setBtnB(false)}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: btnB ? '#FF1E40' : '#E11D48',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    boxShadow: btnB ? '0 0 16px #FF1E40' : '0 4px 8px rgba(0, 0, 0, 0.4)',
                    transform: btnB ? 'scale(0.92)' : 'scale(1)',
                    transition: 'all 0.1s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none'
                  }}
                >
                  B
                </button>
              </div>

              <div style={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 800, letterSpacing: '0.08em' }}>
                SPATIAL CADT
              </div>
            </div>

            {/* Readout stats */}
            <div style={{ display: 'flex', gap: '20px', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              <span>X: <strong style={{ color: '#00F0FF' }}>{joyX}</strong></span>
              <span>Y: <strong style={{ color: '#00F0FF' }}>{joyY}</strong></span>
              <span>BTN A: <strong style={{ color: btnA ? '#4ADE80' : 'var(--text-muted)' }}>{btnA ? 'ON' : 'OFF'}</strong></span>
              <span>BTN B: <strong style={{ color: btnB ? '#4ADE80' : 'var(--text-muted)' }}>{btnB ? 'ON' : 'OFF'}</strong></span>
            </div>
          </div>

          {/* Interactive Rover Test Arena */}
          <div className="glass-panel" style={{ padding: '36px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>
                {isKhmer ? 'ទីលានសាកល្បងយានរុករក (Interactive Arena)' : 'Interactive Rover Arena'}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {isKhmer ? (
                  'កម្រើក Joystick ឬចុចគ្រាប់ចុច WASD / ព្រួញ ដើម្បីបើកបរយានរុករក។ ចុច Space ឬ J ដើម្បីបង្កើនល្បឿន Turbo (Button A)!'
                ) : (
                  'Move the thumbstick or press WASD/Arrows to drive the rover. Press Space / J for Turbo Boost (Button A), and K / B for Shield (Button B).'
                )}
              </p>
            </div>

            <div style={{
              flex: 1,
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 107, 0, 0.3)',
              position: 'relative',
              boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.8)'
            }}>
              <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(7, 11, 20, 0.85)',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.75rem',
                color: '#4ADE80',
                border: '1px solid rgba(74, 222, 128, 0.3)'
              }}>
                Telemetry: Active 60 FPS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
