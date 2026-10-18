'use client';

import React from 'react';

export default function SpatialLogo({ size = 44, showText = true, textColor = '#0A192F' }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      {/* Real uploaded logo with crisp fallback */}
      <img
        src="/images/spatial_logo.png"
        alt="Spatial Logo"
        style={{
          height: `${size}px`,
          width: 'auto',
          objectFit: 'contain',
          display: 'block'
        }}
      />
    </div>
  );
}
