'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, 
  Eye, 
  Play, 
  ExternalLink, 
  Maximize2, 
  Glasses, 
  Radio, 
  Gamepad2, 
  Sparkles, 
  Upload, 
  Link as LinkIcon,
  RotateCcw,
  Sliders,
  CheckCircle2
} from 'lucide-react';

export default function SimulationPlayerModal({
  simulation,
  onClose,
  lang,
  initialVrStereo = false
}) {
  const isKhmer = lang === 'km';

  // Real Game URL state (checks simulation metadata, localStorage, or custom input)
  const defaultUrl = simulation.gameUrl || '';
  const storageKey = `spatial_real_game_url_${simulation.id || 'default'}`;

  const [realGameUrl, setRealGameUrl] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(storageKey) || defaultUrl;
    }
    return defaultUrl;
  });

  const [inputUrl, setInputUrl] = useState(realGameUrl);
  const [isGameRunning, setIsGameRunning] = useState(Boolean(realGameUrl));
  const [vrStereoMode, setVrStereoMode] = useState(initialVrStereo);
  const [controllerConnected, setControllerConnected] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Automatically load the simulation's gameUrl whenever simulation changes
  useEffect(() => {
    const url = simulation.gameUrl || '';
    if (url) {
      setRealGameUrl(url);
      setInputUrl(url);
      setIsGameRunning(true);
    }
  }, [simulation.id, simulation.gameUrl]);

  // Monitor physical or BLE gamepad
  useEffect(() => {
    let animId;
    const checkGamepad = () => {
      const gamepads = typeof navigator !== 'undefined' && navigator.getGamepads ? navigator.getGamepads() : [];
      const hasActive = Array.from(gamepads).some(gp => gp && gp.connected);
      setControllerConnected(hasActive);
      animId = requestAnimationFrame(checkGamepad);
    };
    animId = requestAnimationFrame(checkGamepad);

    return () => cancelAnimationFrame(animId);
  }, []);

  const handleSaveAndLaunch = (urlToLaunch) => {
    const trimmed = (urlToLaunch || inputUrl).trim();
    if (trimmed) {
      setRealGameUrl(trimmed);
      if (typeof window !== 'undefined') {
        localStorage.setItem(storageKey, trimmed);
      }
      setIsGameRunning(true);
    }
  };

  const handleResetGameUrl = () => {
    setRealGameUrl('');
    setInputUrl('');
    setIsGameRunning(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(storageKey);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(6, 15, 30, 0.94)',
      backdropFilter: 'blur(12px)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      color: '#FFFFFF',
      fontFamily: 'var(--font-main)',
      overflow: 'hidden'
    }}>
      {/* Top Header Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 24px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        background: '#0A192F',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'rgba(255, 107, 0, 0.15)',
            border: '1px solid rgba(255, 107, 0, 0.3)',
            color: '#FF6B00',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Play size={20} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: '#FFFFFF' }}>
                {isKhmer ? (simulation.titleKhmer || simulation.title) : simulation.title}
              </h2>
              <span style={{
                fontSize: '0.72rem',
                padding: '2px 8px',
                borderRadius: '6px',
                background: 'rgba(255, 107, 0, 0.2)',
                color: '#FF8A33',
                fontWeight: 700
              }}>
                {simulation.category || 'Unity 6 VR'}
              </span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#94A3B8', margin: '2px 0 0 0' }}>
              {isKhmer ? 'ប្រព័ន្ធដំណើរការហ្គេម & ការពិសោធន៍ 3D ពិតប្រាកដ' : 'Official Real Game & 3D Simulation Engine'}
            </p>
          </div>
        </div>

        {/* Player Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Controller status indicator */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '8px',
            background: controllerConnected ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
            border: controllerConnected ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '0.75rem',
            color: controllerConnected ? '#10B981' : '#94A3B8',
            fontWeight: 600
          }}>
            <Gamepad2 size={15} />
            <span>{controllerConnected ? (isKhmer ? 'ESP32 បានភ្ជាប់' : 'Controller Connected') : (isKhmer ? 'មិនទាន់ភ្ជាប់ Controller' : 'No Controller')}</span>
          </div>

          {/* Stereoscopic VR Toggle */}
          <button
            onClick={() => setVrStereoMode(!vrStereoMode)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '8px',
              background: vrStereoMode ? '#FF6B00' : 'rgba(255, 255, 255, 0.08)',
              color: '#FFFFFF',
              border: vrStereoMode ? '1px solid #FF6B00' : '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            <Glasses size={16} />
            <span>{vrStereoMode ? 'VR Dual-Eye: ON' : 'VR Dual-Eye'}</span>
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            style={{
              padding: '8px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              cursor: 'pointer'
            }}
            title="Fullscreen"
          >
            <Maximize2 size={16} />
          </button>

          {/* Close Modal */}
          <button
            onClick={onClose}
            style={{
              padding: '8px',
              borderRadius: '8px',
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#EF4444',
              cursor: 'pointer'
            }}
            title="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#020610' }}>
        {isGameRunning && realGameUrl ? (
          /* Real Game WebGL / WebXR Iframe Embed */
          <div style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            display: 'flex'
          }}>
            {/* Optimized Single Responsive 3D Canvas / WebGL Frame */}
            <iframe
              src={realGameUrl}
              title={simulation.title || "Real 3D Simulation Frame"}
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
              allow="accelerometer; gyroscope; gamepad; xr-spatial-tracking; fullscreen; autoplay; clipboard-write"
            />

            {/* Floating Switch/Change URL Overlay */}
            <div style={{
              position: 'absolute',
              top: '12px',
              right: '16px',
              display: 'flex',
              gap: '8px',
              zIndex: 20
            }}>
              <button
                onClick={handleResetGameUrl}
                style={{
                  background: 'rgba(10, 25, 47, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Sliders size={13} />
                <span>{isKhmer ? 'ប្តូរ URL ហ្គេម' : 'Change Game Source'}</span>
              </button>

              <a
                href={realGameUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: 'rgba(255, 107, 0, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid #FF6B00',
                  color: '#FFFFFF',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <ExternalLink size={13} />
                <span>{isKhmer ? 'បើកផ្ទាំងថ្មី' : 'Open Direct'}</span>
              </a>
            </div>
          </div>
        ) : (
          /* Portal to Enter / Connect the Real Game */
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '30px 20px',
            overflowY: 'auto'
          }}>
            <div style={{
              maxWidth: '680px',
              width: '100%',
              background: '#0B172E',
              border: '1px solid rgba(255, 107, 0, 0.3)',
              borderRadius: '24px',
              padding: '36px 32px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '20px',
                background: 'rgba(255, 107, 0, 0.15)',
                border: '1px solid rgba(255, 107, 0, 0.4)',
                color: '#FF6B00',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <Sparkles size={32} />
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>
                {isKhmer ? 'ភ្ជាប់ហ្គេម ឬកម្មវិធីពិតប្រាកដ (Real Game Integration)' : 'Deploy Real Game / Simulation Software'}
              </h3>

              <p style={{ fontSize: '0.92rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '28px' }}>
                {isKhmer ? (
                  'សូមបញ្ចូល Link នៃហ្គេមពិតប្រាកដ (Unity WebGL, itch.io, WebXR build ឬ URL ផ្សេងៗ) ដើម្បីដំណើរការផ្ទាល់លើគេហទំព័រនេះ។'
                ) : (
                  'Connect your authentic Unity 6 WebGL build, itch.io deployment, or live WebXR game URL to run directly in this player.'
                )}
              </p>

              {/* URL Input Form */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '16px',
                padding: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '24px',
                textAlign: 'left'
              }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '8px' }}>
                  <LinkIcon size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle', color: '#FF6B00' }} />
                  {isKhmer ? 'បញ្ចូល URL នៃហ្គេម WebGL / WebXR:' : 'Enter Real Game WebGL / WebXR URL:'}
                </label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input
                    type="url"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    placeholder="https://your-game-server.com/unity-webgl/ or /games/cleancity/index.html"
                    style={{
                      flex: 1,
                      padding: '12px 14px',
                      borderRadius: '10px',
                      background: '#040B18',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#FFFFFF',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                  <button
                    onClick={() => handleSaveAndLaunch()}
                    disabled={!inputUrl.trim()}
                    style={{
                      padding: '12px 24px',
                      borderRadius: '10px',
                      background: inputUrl.trim() ? '#FF6B00' : 'rgba(255, 107, 0, 0.3)',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      border: 'none',
                      cursor: inputUrl.trim() ? 'pointer' : 'not-allowed',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Play size={16} />
                    <span>{isKhmer ? 'ដំណើរការហ្គេម' : 'Launch Game'}</span>
                  </button>
                </div>
              </div>

              {/* Local Folder Option */}
              <div style={{
                background: 'rgba(0, 240, 255, 0.04)',
                border: '1px dashed rgba(0, 240, 255, 0.3)',
                borderRadius: '14px',
                padding: '16px',
                textAlign: 'left',
                fontSize: '0.82rem',
                color: '#94A3B8',
                lineHeight: 1.6
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00F0FF', fontWeight: 700, marginBottom: '4px' }}>
                  <Upload size={15} />
                  <span>{isKhmer ? 'ឬដាក់ឯកសារ Unity WebGL Build ក្នុង folder:' : 'Or place your local Unity WebGL Build in:'}</span>
                </div>
                <code style={{ background: '#020610', color: '#38BDF8', padding: '3px 8px', borderRadius: '6px', fontSize: '0.78rem' }}>
                  public/games/{simulation.id || 'cleancity'}/index.html
                </code>
                <p style={{ margin: '6px 0 0 0', fontSize: '0.78rem' }}>
                  {isKhmer ? (
                    'នៅពេលអ្នកដាក់ឯកសាររួច គ្រាន់តែវាយបញ្ចូល `/games/cleancity/index.html` ហើយចុច Launch ជាការស្រេច។'
                  ) : (
                    'Once files are copied, enter `/games/cleancity/index.html` above and hit Launch.'
                  )}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
