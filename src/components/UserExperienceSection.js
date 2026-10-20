'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function UserExperienceSection({ lang }) {
  const isKhmer = lang === 'km';

  const photos = [
    { id: 'cadt-makerspace', image: '/images/user-experience/cadt-makerspace-testing.jpg' },
    { id: 'suosdei-headset', image: '/images/user-experience/student-vr-suosdei.jpg' },
    { id: 'dual-display', image: '/images/user-experience/dual-display-simulation.jpg' },
    { id: 'stem-controller', image: '/images/user-experience/stem-student-testing.png' },
    { id: 'classroom-synergy', image: '/images/user-experience/classroom-group-testing.jpg' }
  ];

  const total = photos.length;
  const anglePerCard = 360 / total; // 72 degrees each

  const ringRef = useRef(null);
  const angleRef = useRef(0);
  const isDraggingRef = useRef(false);
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

  // Responsive dimensions for 3D cylinder
  const cardWidth = isSmallMobile ? 260 : isMobile ? 320 : 420;
  const cardHeight = isSmallMobile ? 175 : isMobile ? 215 : 280;
  const cylinderRadius = isSmallMobile ? 220 : isMobile ? 270 : 380;

  // Continuous smooth auto-rotation (Never stops by itself, runs at native 60fps)
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (now) => {
      const dt = now - lastTime;
      lastTime = now;

      if (!isDraggingRef.current && ringRef.current) {
        // Continuous smooth rotation: approx 10 degrees per second
        angleRef.current -= 0.18;
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
    angleRef.current = dragStartAngleRef.current + delta * 0.35;
    if (ringRef.current) {
      ringRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
    }
  };

  const onDragEnd = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
  };

  // Keyboard navigation for Lightbox
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
      id="user-experience"
      style={{
        background: '#070D18',
        padding: '80px 0 90px 0',
        position: 'relative',
        overflow: 'hidden',
        color: '#FFFFFF',
        userSelect: 'none'
      }}
      onMouseMove={(e) => onDragMove(e.clientX)}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
      onTouchEnd={onDragEnd}
    >
      {/* Background Soft Glow */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(255, 107, 0, 0.08) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Minimal Clean Title - No Text Clutter */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
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
                រូបភាពជាក់ស្ដែង <span style={{ color: '#FF6B00' }}>Testing Experience</span>
              </>
            ) : (
              <>
                Real Classroom &amp; <span style={{ color: '#FF6B00' }}>Testing Experience</span>
              </>
            )}
          </h2>
        </div>

        {/* 3D Scene Viewport */}
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
        >
          {/* Continuous Rotating 3D Ring */}
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
            {photos.map((item, index) => {
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
                    borderRadius: '20px',
                    overflow: 'hidden',
                    background: '#0B1526',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 20px 45px rgba(0, 0, 0, 0.75)',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#FF6B00';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(255, 107, 0, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.boxShadow = '0 20px 45px rgba(0, 0, 0, 0.75)';
                  }}
                >
                  {/* PURE PICTURE ONLY - ZERO TEXT OVERLAY */}
                  <img
                    src={item.image}
                    alt="Classroom Testing"
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

        {/* Minimal Arrow Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginTop: '10px'
        }}>
          <button
            onClick={handlePrev}
            style={{
              width: '42px',
              height: '42px',
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
            title="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            style={{
              width: '42px',
              height: '42px',
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
            title="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>

      {/* Pure Fullscreen Lightbox (Click to View Photo) */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(3, 7, 18, 0.96)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
            title="Close"
          >
            <X size={20} />
          </button>

          {/* Prev Arrow */}
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
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Arrow */}
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
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Pure Image in Fullscreen */}
          <img
            src={photos[lightboxIndex].image}
            alt="Classroom Testing"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '92vw',
              maxHeight: '86vh',
              objectFit: 'contain',
              borderRadius: '14px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)'
            }}
          />
        </div>
      )}
    </section>
  );
}
