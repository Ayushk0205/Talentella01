import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 40, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ["-10deg", "10deg"]);
  const translateX = useTransform(smoothMouseX, [-0.5, 0.5], ["-40px", "40px"]);
  const translateY = useTransform(smoothMouseY, [-0.5, 0.5], ["-40px", "40px"]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  return (
    <section 
      id="hero" 
      className="section-overlap" 
      onMouseMove={handleMouseMove}
      style={{ 
        zIndex: 10,
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        perspective: '1500px'
      }}
    >

      
      <div style={{ maxWidth: '1400px', width: '100%', padding: '0 5% 0 1%', textAlign: 'left', margin: '120px 0 0 0', transformStyle: 'preserve-3d' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            rotateX,
            rotateY,
            x: translateX,
            y: translateY,
            transformStyle: 'preserve-3d'
          }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="accent-gradient"
            style={{ fontWeight: 800, letterSpacing: '0.4em', fontSize: '0.75rem', marginBottom: '2rem', display: 'block', textTransform: 'uppercase' }}
          >
            Digital Excellence Redefined
          </motion.span>
          
          <motion.h1 
            className="hero-title-shimmer-dark"
            style={{ 
              fontSize: 'clamp(3rem, 9.5vw, 6.5rem)', 
              marginBottom: '0',
              lineHeight: 0.85,
              fontWeight: 800,
              letterSpacing: '-0.04em',
              paddingBottom: '0.1em',
              perspective: '1000px'
            }}
          >
            {"TALENT".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.2 + (i * 0.08),
                  ease: [0.2, 0.65, 0.3, 0.9]
                }}
                style={{ display: 'inline-block', transformOrigin: '50% 100%' }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          <div className="flex-col-mobile" style={{ display: 'flex', alignItems: 'flex-end', gap: '3rem', marginBottom: '2rem' }}>
            <motion.h1 
              className="hero-title-shimmer-dark"
              style={{ 
                fontSize: 'clamp(3rem, 9.5vw, 6.5rem)', 
                margin: 0,
                lineHeight: 0.85,
                fontWeight: 800,
                letterSpacing: '-0.04em',
                perspective: '1000px'
              }}
            >
              {"ELLA".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.8 + (i * 0.08),
                    ease: [0.2, 0.65, 0.3, 0.9]
                  }}
                  style={{ display: 'inline-block', transformOrigin: '50% 100%' }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            <p style={{ 
              fontFamily: "'Outfit', sans-serif",
              fontSize: '1.05rem', 
              maxWidth: '280px', 
              margin: '0 0 1rem 0', 
              lineHeight: '1.4',
              fontWeight: 400,
              color: '#333333'
            }}>
              We bridge the gap between imagination and execution, crafting digital experiences that resonate and scale your business to new heights.
            </p>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '15px 40px' }}
            >
              Start Your Journey <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        style={{ position: 'absolute', bottom: '3rem', opacity: 0.4, cursor: 'pointer' }}
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Right Side Decoration */}
      <motion.div 
        className="hidden-mobile"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ 
          position: 'absolute', 
          right: '3%', 
          top: '50%', 
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          zIndex: 5
        }}
      >
        <span style={{ 
          writingMode: 'vertical-rl', 
          fontSize: '0.65rem', 
          letterSpacing: '0.5em', 
          fontWeight: 700,
          color: '#888',
          textTransform: 'uppercase',
          opacity: 0.6
        }}>
          EST. 2026 // DIGITAL REALM
        </span>
        <div style={{ 
          width: '1px', 
          height: '100px', 
          background: 'linear-gradient(to bottom, #000, #ccc, #000)',
          opacity: 0.3
        }}></div>
      </motion.div>
    </section>
  );
};

export default Hero;
