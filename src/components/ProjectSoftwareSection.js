'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

const softwareScreenshots = [
  { id: 'screen-1', src: '/images/software/software_screen_1.png' },
  { id: 'screen-2', src: '/images/software/software_screen_2.png' },
  { id: 'screen-3', src: '/images/software/software_screen_3.png' },
  { id: 'screen-4', src: '/images/software/software_screen_4.png' },
  { id: 'screen-5', src: '/images/software/software_screen_5.png' },
  { id: 'screen-6', src: '/images/software/software_screen_6.png' },
  { id: 'screen-7', src: '/images/software/software_screen_7.png' },
];

export default function ProjectSoftwareSection({ lang }) {
  const isKhmer = lang === 'km';
  const total = softwareScreenshots.length;
  const anglePerCard = 360 / total; // ~51.43 deg

  const ringRef = useRef(null);
  const angleRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartAngleRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const animFrameIdRef = useRef(null);

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isSmallMobile = windowWidth <= 480;

  // Responsive dimensions for 3D rotating cylinder
  const cardWidth = isSmallMobile ? 250 : isMobile ? 310 : 420;
  const cardHeight = isSmallMobile ? 141 : isMobile ? 174 : 236; // 16:9 ratio
  const cylinderRadius = isSmallMobile ? 260 : isMobile ? 340 : 460;

  // Continuous smooth auto-rotation
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (now) => {
      const dt = now - lastTime;
      lastTime = now;

      if (!isDraggingRef.current && !isHoveredRef.current && ringRef.current) {
        // Continuous smooth rotation: approx 9 degrees per second
        angleRef.current -= 0.16;
        ringRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
      }

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);

  const handlePrev = () => {
    angleRef.current += anglePerCard;
    if (ringRef.current) {
      ringRef.current.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      ringRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
      setTimeout(() => {
        if (ringRef.current) ringRef.current.style.transition = 'none';
      }, 500);
    }
  };

  const handleNext = () => {
    angleRef.current -= anglePerCard;
    if (ringRef.current) {
      ringRef.current.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      ringRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
      setTimeout(() => {
        if (ringRef.current) ringRef.current.style.transition = 'none';
      }, 500);
    }
  };

  // Drag interaction handlers
  const onDragStart = (clientX) => {
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    dragStartXRef.current = clientX;
    dragStartAngleRef.current = angleRef.current;
    if (ringRef.current) ringRef.current.style.transition = 'none';
  };

  const onDragMove = (clientX) => {
    if (!isDraggingRef.current) return;
    const delta = clientX - dragStartXRef.current;
    if (Math.abs(delta) > 5) {
      hasDraggedRef.current = true;
    }
    angleRef.current = dragStartAngleRef.current + delta * 0.32;
    if (ringRef.current) {
      ringRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
    }
  };

  const onDragEnd = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
  };

  // Lightbox keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + total) % total);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % total);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, total]);

  return (
    <section 
      id="project-software"
      style={{
        padding: '80px 0 90px 0',
        background: '#070D18',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        userSelect: 'none',
        borderTop: '1px solid rgba(34, 197, 94, 0.2)',
        borderBottom: '1px solid rgba(34, 197, 94, 0.2)'
      }}
      onMouseMove={(e) => onDragMove(e.clientX)}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
      onTouchEnd={onDragEnd}
    >
      {/* Background Soft Green Glow */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Simple Header: Only states it is the project software */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{
            display: 'inline-block',
            padding: '5px 14px',
            borderRadius: '9999px',
            background: 'rgba(34, 197, 94, 0.12)',
            color: '#4ADE80',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            marginBottom: '10px'
          }}>
            {isKhmer ? 'សូហ្វវែរគម្រោង' : 'PROJECT SOFTWARE'}
          </span>

          <h2 style={{
            fontSize: 'clamp(1.9rem, 3.2vw, 2.7rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            margin: 0,
            letterSpacing: '-0.02em',
            lineHeight: 1.2
          }}>
            {isKhmer ? (
              <>
                សូហ្វវែរនៃគម្រោងរបស់ខ្ញុំ <span style={{ color: '#4ADE80' }}>(Software)</span>
              </>
            ) : (
              <>
                My Project <span style={{ color: '#4ADE80' }}>Software</span>
              </>
            )}
          </h2>
        </div>

        {/* 3D Rotating Scene Viewport */}
        <div
          style={{
            height: `${cardHeight + 110}px`,
            width: '100%',
            perspective: '1200px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'grab',
            overflow: 'visible'
          }}
          onMouseDown={(e) => onDragStart(e.clientX)}
          onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
        >
          {/* Continuous Rotating 3D Ring with 7 Software Pictures */}
          <div
            ref={ringRef}
            style={{
              position: 'relative',
              width: `${cardWidth}px`,
              height: `${cardHeight}px`,
              transformStyle: 'preserve-3d',
              transform: 'rotateY(0deg)',
              willChange: 'transform'
            }}
          >
            {softwareScreenshots.map((item, index) => {
              const cardAngle = index * anglePerCard;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (!hasDraggedRef.current) {
                      setLightboxIndex(index);
                    }
                  }}
                  style={{
                    position: 'absolute',
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    left: 0,
                    top: 0,
                    transform: `rotateY(${cardAngle}deg) translateZ(${cylinderRadius}px)`,
                    transformStyle: 'preserve-3d',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    background: '#070B14',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 20px 45px rgba(0, 0, 0, 0.8)',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#22C55E';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(34, 197, 94, 0.45)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.boxShadow = '0 20px 45px rgba(0, 0, 0, 0.8)';
                  }}
                >
                  {/* PURE PICTURE ONLY - ZERO TEXT OVERLAY */}
                  <img
                    src={item.src}
                    alt="My Project Software"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      pointerEvents: 'none'
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Minimal Rotation Arrow Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '14px',
          marginTop: '16px'
        }}>
          <button
            onClick={handlePrev}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#16A34A';
              e.currentTarget.style.borderColor = '#22C55E';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
            aria-label="Rotate left"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={handleNext}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#16A34A';
              e.currentTarget.style.borderColor = '#22C55E';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
            aria-label="Rotate right"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL (Zero text, pure picture) */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(5, 10, 20, 0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#EF4444')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)')}
            aria-label="Close"
          >
            <X size={22} />
          </button>

          {/* Previous in Lightbox */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev - 1 + total) % total);
            }}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#16A34A')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)')}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next in Lightbox */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % total);
            }}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#16A34A')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)')}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Centered Large Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '92vw',
              maxHeight: '88vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={softwareScreenshots[lightboxIndex].src}
              alt="My Project Software"
              style={{
                maxWidth: '92vw',
                maxHeight: '84vh',
                objectFit: 'contain',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(34, 197, 94, 0.2)'
              }}
            />

            {/* Position indicator dots */}
            <div style={{
              marginTop: '12px',
              display: 'flex',
              gap: '6px',
              alignItems: 'center'
            }}>
              {softwareScreenshots.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setLightboxIndex(dotIdx)}
                  style={{
                    width: dotIdx === lightboxIndex ? '22px' : '7px',
                    height: '7px',
                    borderRadius: '4px',
                    background: dotIdx === lightboxIndex ? '#22C55E' : 'rgba(255, 255, 255, 0.3)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
