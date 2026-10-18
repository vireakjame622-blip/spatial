'use client';

import React, { useState } from 'react';
import { X, Lock, Mail, User, Sparkles } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onAuthSuccess, lang }) {
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [institution, setInstitution] = useState('CADT - Institute of Digital Technology');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const isKhmer = lang === 'km';

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/register';
      const payload = mode === 'login' 
        ? { email, password }
        : { name, email, password, role, institution };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      localStorage.setItem('spatial_token', data.token);
      onAuthSuccess(data.user, data.token);
      onClose();
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemo = async (demoEmail) => {
    setErrorMsg('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: demoEmail, password: 'demo' })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Demo login failed');
      localStorage.setItem('spatial_token', data.token);
      onAuthSuccess(data.user, data.token);
      onClose();
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(10, 25, 47, 0.65)',
      backdropFilter: 'blur(8px)',
      zIndex: 1100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: '#FFFFFF',
        width: '100%',
        maxWidth: '460px',
        padding: '36px',
        borderRadius: '20px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 20px 45px rgba(10, 25, 47, 0.18)',
        position: 'relative'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: '#64748B',
            padding: '4px'
          }}
        >
          <X size={20} />
        </button>

        {/* Brand header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '9999px',
            background: 'rgba(255, 107, 0, 0.08)',
            border: '1px solid rgba(255, 107, 0, 0.25)',
            color: '#FF6B00',
            fontSize: '0.78rem',
            fontWeight: 700,
            marginBottom: '10px'
          }}>
            CADT IDT Spatial Portal
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0A192F', marginBottom: '4px' }}>
            {mode === 'login' 
              ? (isKhmer ? 'ចូលប្រើប្រាស់គណនី' : 'Welcome Back') 
              : (isKhmer ? 'ចុះឈ្មោះគណនីថ្មី' : 'Create Student Account')}
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
            {mode === 'login'
              ? (isKhmer ? 'ចូលប្រើដើម្បីតាមដានការកុម្ម៉ង់ និងទាញយកប្លង់' : 'Access your kit orders and blueprints')
              : (isKhmer ? 'ចុះឈ្មោះដើម្បីភ្ជាប់ជាមួយសហគមន៍ Spatial' : 'Join the CADT Spatial VR maker community')}
          </p>
        </div>

        {/* Mode Switcher */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          background: '#F1F5F9',
          padding: '4px',
          borderRadius: '10px',
          marginBottom: '20px'
        }}>
          <button
            type="button"
            onClick={() => setMode('login')}
            style={{
              padding: '8px',
              borderRadius: '7px',
              fontWeight: 700,
              fontSize: '0.85rem',
              color: mode === 'login' ? '#0A192F' : '#64748B',
              background: mode === 'login' ? '#FFFFFF' : 'transparent',
              boxShadow: mode === 'login' ? '0 2px 4px rgba(0, 0, 0, 0.06)' : 'none',
              transition: 'all 0.15s'
            }}
          >
            {isKhmer ? 'ចូលប្រើ (Sign In)' : 'Sign In'}
          </button>
          <button
            type="button"
            onClick={() => setMode('register')}
            style={{
              padding: '8px',
              borderRadius: '7px',
              fontWeight: 700,
              fontSize: '0.85rem',
              color: mode === 'register' ? '#0A192F' : '#64748B',
              background: mode === 'register' ? '#FFFFFF' : 'transparent',
              boxShadow: mode === 'register' ? '0 2px 4px rgba(0, 0, 0, 0.06)' : 'none',
              transition: 'all 0.15s'
            }}
          >
            {isKhmer ? 'ចុះឈ្មោះ (Sign Up)' : 'Sign Up'}
          </button>
        </div>

        {/* Error message */}
        {errorMsg && (
          <div style={{
            padding: '10px 14px',
            borderRadius: '8px',
            background: '#FEF2F2',
            border: '1px solid #FCA5A5',
            color: '#DC2626',
            fontSize: '0.82rem',
            marginBottom: '16px'
          }}>
            {errorMsg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {mode === 'register' && (
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                {isKhmer ? 'ឈ្មោះពេញ' : 'Full Name'}
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sokha Meng"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
              {isKhmer ? 'អ៊ីមែល' : 'Email Address'}
            </label>
            <input
              type="email"
              required
              placeholder="student@cadt.edu.kh"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
              {isKhmer ? 'លេខសម្ងាត់' : 'Password'}
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{ width: '100%', padding: '12px', marginTop: '6px', fontSize: '0.92rem' }}
          >
            {loading ? (isKhmer ? 'កំពុងដំណើរការ...' : 'Authenticating...') : mode === 'login' ? (isKhmer ? 'ចូលប្រើ' : 'Sign In') : (isKhmer ? 'បង្កើតគណនី' : 'Create Account')}
          </button>
        </form>

        {/* 1-Click Demo Logins */}
        <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #E2E8F0' }}>
          <p style={{ fontSize: '0.75rem', color: '#64748B', textAlign: 'center', marginBottom: '10px' }}>
            {isKhmer ? 'ចូលប្រើរហ័សសម្រាប់សាកល្បង (Instant Demo):' : 'Or quick 1-click test login:'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <button
              type="button"
              onClick={() => handleQuickDemo('student@cadt.edu.kh')}
              style={{
                padding: '8px',
                borderRadius: '8px',
                background: '#FFF7ED',
                border: '1px solid #FDBA74',
                color: '#C2410C',
                fontSize: '0.78rem',
                fontWeight: 700
              }}
            >
              🎓 Student Demo
            </button>
            <button
              type="button"
              onClick={() => handleQuickDemo('educator@cadt.edu.kh')}
              style={{
                padding: '8px',
                borderRadius: '8px',
                background: '#F0F9FF',
                border: '1px solid #BAE6FD',
                color: '#0369A1',
                fontSize: '0.78rem',
                fontWeight: 700
              }}
            >
              🔬 Teacher Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
