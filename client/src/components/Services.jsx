import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Share2, Palette, Settings, ArrowUpRight, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { servicesData } from '../data/servicesData';

const iconMap = {
  Code,
  Share2,
  Palette,
  Settings,
  Zap
};

const ServiceCard = ({ s, index }) => {
  const cardRef = useRef(null);
  const IconComponent = iconMap[s.icon] || Zap;

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
        y: -10,
        borderColor: 'rgba(132, 0, 255, 0.3)',
        boxShadow: '0 20px 40px rgba(132, 0, 255, 0.08)',
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
    <Link to={`/service/${s.id}`} style={{ textDecoration: 'none' }}>
      <motion.div 
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ 
          delay: (index % 3) * 0.1, 
          duration: 0.6
        }}
        className="interactive-card service-card"
        style={{ 
          backgroundColor: '#ffffff',
          padding: '2.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
          position: 'relative',
          minHeight: '280px',
          justifyContent: 'flex-start',
          border: '1px solid rgba(0, 0, 0, 0.06)',
          borderRadius: '24px',
          overflow: 'hidden',
          textAlign: 'left'
        }}
      >
        <div className="card-spotlight" />
        
        <div className="icon-wrapper" style={{ 
          width: '50px', 
          height: '50px', 
          borderRadius: '12px', 
          backgroundColor: 'rgba(132, 0, 255, 0.1)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: '#8400ff',
          position: 'relative',
          zIndex: 2
        }}>
          <IconComponent size={24} />
        </div>
        
        <div className="service-card-content">
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, position: 'relative', zIndex: 2, color: '#0a0a0c' }}>{s.title}</h3>
          <p style={{ color: '#55555f', fontSize: '0.9rem', lineHeight: '1.6', position: 'relative', zIndex: 2, marginBottom: 'auto' }}>
            {s.description}
          </p>
        </div>
        
        <div className="learn-more" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#8400ff', fontWeight: 700, fontSize: '0.85rem', position: 'relative', zIndex: 2 }}>
          LEARN MORE <ArrowUpRight size={16} />
        </div>

        <style>{`
          .interactive-card::before {
              content: '';
              position: absolute;
              top: 0; left: 0; right: 0; bottom: 0;
              background: radial-gradient(400px circle at var(--glow-x) var(--glow-y), rgba(132, 0, 255, 0.05), transparent 40%);
              opacity: 0;
              transition: opacity 0.3s;
              pointer-events: none;
          }
          .interactive-card:hover::before {
              opacity: 1;
          }
        `}</style>
      </motion.div>
    </Link>
  );
};

const Services = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });
  const borderProgress = useTransform(scrollYProgress, [0, 1], ["60px", "0px"]);

  return (
    <div id="services" ref={containerRef} style={{ position: 'relative', minHeight: '200vh', zIndex: 20, marginBottom: '-100vh' }}>
      <motion.section className="section-overlap" style={{ 
        zIndex: 20, 
        backgroundColor: '#f8f9fc', 
        padding: '12vh 5%', 
        overflow: 'hidden', 
        borderTopLeftRadius: borderProgress, 
        borderTopRightRadius: borderProgress,
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          
          <div className="services-header" style={{ marginBottom: '6rem', maxWidth: '800px' }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#0a0a0c' }}
            >
              OUR SERVICES
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ color: '#55555f', fontSize: '1.2rem', lineHeight: '1.6', fontWeight: 500, marginTop: '1.5rem', maxWidth: '600px', margin: '1.5rem auto 0' }}
            >
              Premium marketing and branding solutions to scale your digital presence.
            </motion.p>
          </div>

          <div className="auto-grid" style={{ 
            width: '100%', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.5rem',
            justifyContent: 'center'
          }}>
            {servicesData.map((s, i) => (
              <ServiceCard key={s.id} s={s} index={i} />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
