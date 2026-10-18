'use client';

import React, { useState } from 'react';
import { ShoppingBag, CheckCircle, Package, Send, Sparkles, Building, Phone, Mail, User } from 'lucide-react';

export default function KitOrderSection({ lang, user, token }) {
  const [fullName, setFullName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState(user?.institution || 'CADT - Institute of Digital Technology');
  const [role, setRole] = useState(user?.role || 'student');
  const [kitType, setKitType] = useState('full_kit');
  const [quantity, setQuantity] = useState(1);
  const [shippingAddress, setShippingAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [submittedOrder, setSubmittedOrder] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const isKhmer = lang === 'km';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const headers = { 'Content-Type': 'application/json' };
      if (token) headers.Authorization = `Bearer ${token}`;

      const res = await fetch('/api/orders', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          fullName,
          email,
          phone,
          institution,
          role,
          kitType,
          quantity: Number(quantity),
          shippingAddress,
          notes
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit kit request');
      }

      setSubmittedOrder(data.order);
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="order" style={{
      background: '#F8FAFC',
      padding: '80px 0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
            <ShoppingBag size={14} />
            Student & School Kit Request
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3vw, 2.6rem)',
            fontWeight: 800,
            color: '#0A192F',
            marginBottom: '14px',
            letterSpacing: '-0.02em'
          }}>
            {isKhmer ? 'ស្នើសុំ ឬកុម្ម៉ង់កញ្ចប់ Spatial VR Kit' : 'Request or Pre-Order Your Spatial Kit'}
          </h2>

          <p style={{
            fontSize: '1.05rem',
            color: '#64748B',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            {isKhmer ? (
              'សម្រាប់សិស្សានុសិស្ស លោកគ្រូអ្នកគ្រូ និងសាលារៀនដែលចង់បានកញ្ចប់សម្ភារៈ Spatial យកទៅពិសោធន៍ផ្ទាល់ដៃ។'
            ) : (
              'Available for students, educators, and university STEM clubs. Order individual kits or classroom bundles.'
            )}
          </p>
        </div>

        {submittedOrder ? (
          <div className="clean-card" style={{ padding: '48px 36px', textAlign: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(34, 197, 94, 0.12)',
              color: '#16A34A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <CheckCircle size={36} />
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0A192F', marginBottom: '10px' }}>
              {isKhmer ? 'ការស្នើសុំត្រូវបានកត់ត្រាជោគជ័យ!' : 'Kit Request Registered Successfully!'}
            </h3>

            <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '520px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
              {isKhmer ? (
                `អរគុណ ${submittedOrder.fullName}! ក្រុមការងារ Spatial នឹងទាក់ទងមកអ្នកតាមរយៈលេខទូរស័ព្ទ ${submittedOrder.phone} ឬអ៊ីមែល ${submittedOrder.email} ដើម្បីបញ្ជាក់ការទទួលកញ្ចប់។`
              ) : (
                `Thank you ${submittedOrder.fullName}! The Spatial team will verify your request and contact you at ${submittedOrder.phone} for pickup/delivery.`
              )}
            </p>

            <div style={{
              display: 'inline-flex',
              flexDirection: 'column',
              gap: '6px',
              padding: '16px 24px',
              background: '#F8FAFC',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
              marginBottom: '28px',
              textAlign: 'left'
            }}>
              <span style={{ fontSize: '0.82rem', color: '#64748B' }}>Order Reference ID:</span>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0A192F', fontFamily: 'var(--font-mono)' }}>
                {submittedOrder.id || submittedOrder._id}
              </span>
              <span style={{ fontSize: '0.85rem', color: '#FF6B00', fontWeight: 600 }}>
                {submittedOrder.quantity}x {submittedOrder.kitType.replace('_', ' ').toUpperCase()}
              </span>
            </div>

            <div>
              <button
                onClick={() => setSubmittedOrder(null)}
                className="btn-secondary"
              >
                {isKhmer ? 'ដាក់ការស្នើសុំថ្មីមួយទៀត' : 'Submit Another Request'}
              </button>
            </div>
          </div>
        ) : (
          <div className="clean-card" style={{ padding: '40px' }}>
            {errorMsg && (
              <div style={{
                padding: '12px 18px',
                borderRadius: '8px',
                background: '#FEF2F2',
                border: '1px solid #FCA5A5',
                color: '#DC2626',
                fontSize: '0.88rem',
                marginBottom: '24px'
              }}>
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Kit Type Selection */}
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                  {isKhmer ? 'ជ្រើសរើសប្រភេទកញ្ចប់ (Kit Package)' : 'Select Kit Package'}
                </label>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '12px'
                }}>
                  {[
                    { id: 'full_kit', labelEn: 'Full VR Kit + Controller', labelKm: 'កញ្ចប់ពេញលេញ (VR + Controller)', price: '$9.90' },
                    { id: 'cardboard_only', labelEn: 'Cardboard Headset Only', labelKm: 'វ៉ែនតា Cardboard & ឡេន', price: '$4.50' },
                    { id: 'controller_only', labelEn: 'BLE Controller Only', labelKm: 'ឧបករណ៍បញ្ជា Bluetooth', price: '$5.50' },
                    { id: 'classroom_bundle', labelEn: 'Classroom Bundle (10x)', labelKm: 'កញ្ចប់ថ្នាក់រៀន (10 ឈុត)', price: '$85.00' },
                  ].map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setKitType(pkg.id)}
                      style={{
                        padding: '16px',
                        borderRadius: '12px',
                        border: kitType === pkg.id ? '2px solid #FF6B00' : '1px solid #E2E8F0',
                        background: kitType === pkg.id ? 'rgba(255, 107, 0, 0.04)' : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'all 0.15s'
                      }}
                    >
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0A192F', marginBottom: '4px' }}>
                        {isKhmer ? pkg.labelKm : pkg.labelEn}
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: 800, color: '#FF6B00' }}>
                        {pkg.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid 2 Columns: Personal Info */}
              <div className="responsive-two-col">
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    {isKhmer ? 'ឈ្មោះពេញ' : 'Full Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sokha Meng"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    {isKhmer ? 'អ៊ីមែល' : 'Email Address'} *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@cadt.edu.kh"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div className="responsive-two-col">
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    {isKhmer ? 'លេខទូរស័ព្ទ' : 'Phone Number'} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+855 12 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    {isKhmer ? 'គ្រឹះស្ថានសិក្សា / សាលារៀន' : 'School / Institution'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CADT / ITC / RUPP"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div className="responsive-two-col">
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    {isKhmer ? 'តួនាទី' : 'Your Role'}
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.9rem',
                      background: '#FFFFFF',
                      outline: 'none'
                    }}
                  >
                    <option value="student">Student / Maker</option>
                    <option value="teacher">Teacher / Professor</option>
                    <option value="school_admin">School Administrator</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    {isKhmer ? 'ចំនួនកញ្ចប់ (Quantity)' : 'Quantity'}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  {isKhmer ? 'អាសយដ្ឋានដឹកជញ្ជូន ឬកន្លែងទទួល' : 'Delivery Address or Campus Pickup Point'} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. CADT Campus Building 2, Bridge 2, National Road 6A, Phnom Penh"
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  {isKhmer ? 'កំណត់សម្គាល់បន្ថែម' : 'Project Notes / Special Requests'}
                </label>
                <textarea
                  rows="2"
                  placeholder="Optional notes or project use case..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '1rem', marginTop: '8px' }}
              >
                <Send size={18} />
                <span>{loading ? (isKhmer ? 'កំពុងបញ្ជូន...' : 'Submitting Request...') : (isKhmer ? 'បញ្ជូនការស្នើសុំកញ្ចប់ (Submit Request)' : 'Submit Kit Pre-Order Request')}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
