import React, { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Zap, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';

const services = [
  {
    title: 'Business Growth Websites',
    desc: 'We craft high-performance websites designed to scale your reach and turn visitors into loyal customers.',
    icon: <Globe size={18} />,
  },
  {
    title: 'Website Maintenance',
    desc: 'Full-service maintenance and optimization to ensure your digital home is always fast, secure, and modern.',
    icon: <Zap size={18} />,
  },
  {
    title: 'Social Media Handling',
    desc: 'Strategic management and content creation to build a powerful, consistent presence across all social channels.',
    icon: <Users size={18} />,
  },
];

// Interactive Logic helpers
const createParticleElement = (x, y, color = '170, 59, 255') => {
  const el = document.createElement('div');
  el.style.cssText = `
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const ServiceCard = ({ s, index }) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);

  const handleMouseEnter = (e) => {
    if (!cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    
    // Create a few particles
    for (let i = 0; i < 6; i++) {
        const p = createParticleElement(Math.random() * width, Math.random() * height);
        cardRef.current.appendChild(p);
        particlesRef.current.push(p);
        
        gsap.fromTo(p, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3 });
        gsap.to(p, {
            x: '+= ' + (Math.random() - 0.5) * 50,
            y: '+= ' + (Math.random() - 0.5) * 50,
            opacity: 0,
            duration: 1.5 + Math.random(),
            onComplete: () => p.remove()
        });
    }

    gsap.to(cardRef.current, {
        y: -10,
        borderColor: 'rgba(170, 59, 255, 0.3)',
        boxShadow: '0 20px 40px rgba(170, 59, 255, 0.08)',
        backgroundColor: '#fafaff',
        duration: 0.4
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
        y: 0,
        borderColor: 'rgba(0, 0, 0, 0.06)',
        boxShadow: '0 0px 0px rgba(0, 0, 0, 0)',
        backgroundColor: '#ffffff',
        duration: 0.4
    });
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--glow-x', `${x}px`);
    cardRef.current.style.setProperty('--glow-y', `${y}px`);
  };

  return (
    <motion.div 
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ 
        delay: index * 0.2, 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="interactive-card"
      style={{ 
        backgroundColor: '#ffffff',
        padding: '2.5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        position: 'relative',
        minHeight: '220px',
        justifyContent: 'center',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        borderRadius: '24px',
        overflow: 'hidden'
      }}
    >
      {/* Internal Glow Effect */}
      <div className="card-spotlight" />
      
      <div style={{ 
        width: '40px', 
        height: '40px', 
        borderRadius: '50%', 
        backgroundColor: 'rgba(170, 59, 255, 0.1)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'var(--accent)',
        position: 'relative',
        zIndex: 2
      }}>
        {s.icon}
      </div>
      <h3 style={{ fontSize: '1.4rem', fontWeight: 700, position: 'relative', zIndex: 2, color: '#0a0a0c' }}>{s.title}</h3>
      <p style={{ color: '#55555f', fontSize: '0.95rem', lineHeight: '1.6', position: 'relative', zIndex: 2 }}>{s.desc}</p>
      
      <style>{`
        .interactive-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: radial-gradient(400px circle at var(--glow-x) var(--glow-y), rgba(170, 59, 255, 0.05), transparent 40%);
            opacity: 0;
            transition: opacity 0.3s;
            pointer-events: none;
        }
        .interactive-card:hover::before {
            opacity: 1;
        }
      `}</style>
    </motion.div>
  );
};

const Services = () => {
  return (
    <motion.section id="services" className="section-overlap" style={{ zIndex: 20, backgroundColor: '#f8f9fc', padding: '12vh 5%', overflow: 'hidden', borderTopLeftRadius: '60px', borderTopRightRadius: '60px' }}>
      <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* Top Heading Area */}
        <div style={{ marginBottom: '6rem', maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {"FEATURES".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, rotateX: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: false }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.05,
                  ease: [0.215, 0.61, 0.355, 1] 
                }}
                style={{ 
                  fontSize: 'clamp(3rem, 10vw, 6rem)', 
                  textTransform: 'uppercase', 
                  lineHeight: 1, 
                  letterSpacing: '-0.02em', 
                  fontWeight: 800,
                  display: 'inline-block',
                  background: 'linear-gradient(to right, #0a0a0c, #444)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  transformOrigin: 'bottom'
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ color: '#55555f', fontSize: '1.2rem', lineHeight: '1.6', fontWeight: 500, marginTop: '2rem', maxWidth: '600px', margin: '2rem auto 0' }}
          >
            Launch with Ease. We bridge the gap between imagination and execution.
          </motion.p>
        </div>

        {/* Bottom Grid Aspect */}
        <div className="auto-grid" style={{ 
          width: '100%', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem' 
        }}>
          {services.map((s, i) => (
            <ServiceCard key={i} s={s} index={i} />
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default Services;
