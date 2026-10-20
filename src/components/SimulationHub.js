'use client';

import React, { useState, useEffect } from 'react';
import { Search, Glasses, Clock, Star, Play, Filter, Sparkles, Flame, Trash2, Wind, Award, MapPin } from 'lucide-react';
import SimulationPlayerModal from './SimulationPlayerModal';

export default function SimulationHub({ lang, user, token, onProgressUpdated }) {
  const [simulations, setSimulations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSimulation, setActiveSimulation] = useState(null);

  const isKhmer = lang === 'km';

  const categories = [
    { id: 'All', labelEn: 'All Labs', labelKm: 'ទាំងអស់' },
    { id: 'Clean City', labelEn: 'Clean City (Phnom Penh)', labelKm: 'ទីក្រុងស្អាត (ភ្នំពេញ)' },
    { id: 'Astronomy', labelEn: 'Space & Astronomy', labelKm: 'តារាសាស្ត្រ' },
    { id: 'Anatomy', labelEn: 'Biology & Anatomy', labelKm: 'កាយវិភាគវិទ្យា' },
    { id: 'Physics', labelEn: 'Physics & Forces', labelKm: 'រូបវិទ្យា' },
    { id: 'Robotics', labelEn: 'Robotics & Rover', labelKm: 'រ៉ូបូតវិទ្យា' },
  ];

  useEffect(() => {
    fetchSimulations();
  }, [selectedCategory, searchQuery]);

  const fetchSimulations = async () => {
    try {
      setLoading(true);
      const url = new URL('/api/simulations', window.location.origin);
      if (selectedCategory !== 'All') url.searchParams.set('category', selectedCategory);
      if (searchQuery) url.searchParams.set('search', searchQuery);

      const res = await fetch(url.toString());
      const data = await res.json();
      if (data.simulations) {
        setSimulations(data.simulations);
      }
    } catch (err) {
      console.error('Error fetching simulations:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="simulations" style={{
      padding: '95px 0',
      background: '#0A192F',
      color: '#FFFFFF',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(255, 107, 0, 0.15)',
              color: '#FF8A33',
              border: '1px solid rgba(255, 107, 0, 0.3)',
              fontSize: '0.82rem',
              fontWeight: 700
            }}>
              <Sparkles size={14} />
              {isKhmer ? 'បណ្ណាល័យពិសោធន៍ 3D & VR អន្តរកម្ម' : 'Interactive 3D Curriculum & Unity 6 Games'}
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            {isKhmer ? (
              <>
                ពិសោធន៍ <span style={{ color: '#22C55E' }}>ទីក្រុងស្អាត (Clean City)</span> និងមេរៀន 3D ផ្ទាល់
              </>
            ) : (
              <>
                Experience <span style={{ color: '#22C55E' }}>Clean City Phnom Penh</span> &amp; 3D Labs
              </>
            )}
          </h2>

          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.65 }}>
            {isKhmer ? (
              'កម្មវិធី Unity 3D ផ្លូវការ៖ បើកបរយាន Tuk-Tuk Eco Express ឬកង់អេកូឡូស៊ីជុំវិញផ្សារធំថ្មី និងមាត់ទន្លេ ញែកសម្រាមចូលធុង ៥ ពណ៌ ពន្លត់ភ្លើងដុតសម្រាម និងស្តារគុណភាពខ្យល់ឱ្យដល់ ១០០%!'
            ) : (
              'Built in Unity 6: Drive the Tuk-Tuk Eco Express or Eco Bicycle around Central Market & Riverside. Sort across 5 bins, extinguish toxic PM2.5 smog fires, and restore Air Quality to 100%!'
            )}
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '40px',
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '12px 18px'
        }}>
          {/* Categories Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '10px',
                    fontSize: '0.85rem',
                    fontWeight: active ? 700 : 500,
                    background: active ? 'linear-gradient(135deg, #FF6B00 0%, #FF8A33 100%)' : 'rgba(255, 255, 255, 0.05)',
                    color: active ? '#FFFFFF' : '#94A3B8',
                    border: active ? '1px solid #FF8A33' : '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: active ? '0 0 16px rgba(255, 107, 0, 0.4)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {isKhmer ? cat.labelKm : cat.labelEn}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div style={{
            position: 'relative',
            minWidth: '260px'
          }}>
            <Search size={16} color="#64748B" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder={isKhmer ? 'ស្វែងរកមេរៀន...' : 'Search simulations...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '9px 14px 9px 36px',
                borderRadius: '10px',
                background: 'rgba(7, 11, 20, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                fontSize: '0.85rem',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>
        </div>

        {/* Simulation Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#94A3B8' }}>
            <div style={{ fontSize: '1.2rem', color: '#FF8A33', fontWeight: 600 }}>
              {isKhmer ? 'កំពុងទាញយកមេរៀន 3D...' : 'Loading 3D Simulations...'}
            </div>
          </div>
        ) : simulations.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#94A3B8' }}>
            {isKhmer ? 'រកមិនឃើញមេរៀនដែលត្រូវនឹងពាក្យស្វែងរកនេះទេ' : 'No simulations found matching your criteria.'}
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '28px'
          }}>
            {simulations.map((sim) => {
              const isClean = sim.category === 'Clean City';
              return (
                <div
                  key={sim.id || sim._id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: isClean ? '2px solid rgba(34, 197, 94, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: isClean ? '0 10px 30px rgba(34, 197, 94, 0.12)' : '0 10px 25px rgba(0, 0, 0, 0.2)',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative'
                  }}
                >
                  {/* Thumbnail Banner */}
                  <div style={{
                    position: 'relative',
                    height: '210px',
                    width: '100%',
                    background: isClean ? 'linear-gradient(135deg, #064E3B 0%, #0F172A 100%)' : '#0F172A',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {isClean ? (
                      /* Clean City Graphic Card with Authentic 3D Tuk-Tuk Render */
                      <div style={{ 
                        position: 'relative', 
                        width: '100%', 
                        height: '100%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.22) 0%, rgba(15, 23, 42, 0.95) 75%)',
                        padding: '12px'
                      }}>
                        <img
                          src="/images/cambodian_tuktuk.png"
                          alt="Cambodian Tuk-Tuk 3D Model"
                          style={{
                            maxHeight: '170px',
                            maxWidth: '90%',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 12px 24px rgba(0, 0, 0, 0.65))',
                            transition: 'transform 0.3s ease'
                          }}
                        />
                        <div style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '12px',
                          right: '12px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          background: 'rgba(10, 15, 30, 0.75)',
                          backdropFilter: 'blur(8px)',
                          padding: '4px 10px',
                          borderRadius: '8px',
                          border: '1px solid rgba(34, 197, 94, 0.3)'
                        }}>
                          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#4ADE80' }}>
                            {sim.location || 'Phnom Penh'}
                          </span>
                          <span style={{ fontSize: '0.72rem', color: '#CBD5E1', fontWeight: 600 }}>
                            {sim.vehicle || 'Tuk-Tuk Eco Express'}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={sim.thumbnail || '/images/solar_simulation.jpg'}
                        alt={sim.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    )}

                    {/* Top Badges */}
                    <div style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      display: 'flex',
                      gap: '6px'
                    }}>
                      <span style={{
                        background: isClean ? '#22C55E' : '#FF6B00',
                        color: '#FFFFFF',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        padding: '4px 10px',
                        borderRadius: '6px'
                      }}>
                        {sim.category}
                      </span>
                      <span style={{
                        background: 'rgba(0, 240, 255, 0.15)',
                        color: '#00F0FF',
                        border: '1px solid rgba(0, 240, 255, 0.3)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '4px 8px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <Glasses size={12} />
                        Cardboard VR
                      </span>
                    </div>

                    {/* Rating overlay */}
                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: 'rgba(7, 11, 20, 0.85)',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '0.75rem',
                      color: '#FFD700'
                    }}>
                      <Star size={13} fill="#FFD700" />
                      <span style={{ fontWeight: 700 }}>{sim.rating || 4.9}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.78rem', color: '#94A3B8', marginBottom: '8px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={13} />
                        {sim.duration}
                      </span>
                      <span>•</span>
                      <span style={{ color: isClean ? '#4ADE80' : '#FF8A33', fontWeight: 600 }}>{sim.level}</span>
                    </div>

                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginBottom: '10px',
                      lineHeight: 1.35
                    }}>
                      {isKhmer && sim.titleKhmer ? sim.titleKhmer : sim.title}
                    </h3>

                    <p style={{
                      fontSize: '0.88rem',
                      color: '#94A3B8',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                      flex: 1
                    }}>
                      {isKhmer && sim.descriptionKhmer ? sim.descriptionKhmer : sim.description}
                    </p>

                    {/* Quick features for Clean City */}
                    {isClean && (
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginBottom: '18px',
                        padding: '10px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        fontSize: '0.75rem',
                        color: '#CBD5E1'
                      }}>
                        <span style={{ color: '#4ADE80', fontWeight: 700 }}>✓ 5-Color Bins</span>
                        <span>•</span>
                        <span style={{ color: '#F97316', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                          <Flame size={12} /> Extinguish Smog
                        </span>
                        <span>•</span>
                        <span style={{ color: '#00F0FF', fontWeight: 700 }}>100% Air Quality</span>
                      </div>
                    )}

                    {/* Launch Button */}
                    <button
                      onClick={() => setActiveSimulation(sim)}
                      className="btn-primary"
                      style={{
                        width: '100%',
                        padding: '12px',
                        fontSize: '0.9rem',
                        background: isClean ? 'linear-gradient(135deg, #16A34A 0%, #22C55E 100%)' : undefined,
                        border: isClean ? '1px solid #4ADE80' : undefined
                      }}
                    >
                      <Play size={16} fill="currentColor" />
                      <span>{isKhmer ? (isClean ? 'បើកលេង Clean City 3D' : 'បើកការពិសោធន៍ 3D') : (isClean ? 'Launch Clean City Quest' : 'Launch 3D Lab')}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Interactive Simulation Player Modal with Clean City Game */}
      {activeSimulation && (
        <SimulationPlayerModal
          simulation={activeSimulation}
          onClose={() => setActiveSimulation(null)}
          lang={lang}
          user={user}
          token={token}
          onProgressUpdated={onProgressUpdated}
        />
      )}
    </section>
  );
}
