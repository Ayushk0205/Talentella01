import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';
import landingVideo from '../assets/hero2.mp4';

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
    <div id="hero" style={{ position: 'relative', minHeight: '200vh', zIndex: 10, marginBottom: '-100vh' }}>
      <section 
        className="section-overlap" 
        onMouseMove={handleMouseMove}
        style={{ 
          zIndex: 10,
          position: 'sticky',
          top: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          perspective: '1500px',
          overflow: 'hidden',
          height: '100vh'
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.7,
            zIndex: -1,
            pointerEvents: 'none'
          }}
        >
          <source src={landingVideo} type="video/mp4" />
        </video>

        
        <div style={{ maxWidth: '1400px', width: '100%', padding: '0 5%', textAlign: 'center', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', transformStyle: 'preserve-3d' }}>
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
              style={{ fontWeight: 800, letterSpacing: '0.4em', fontSize: '0.75rem', marginBottom: '1.5rem', display: 'block', textTransform: 'uppercase', width: '100%' }}
            >
              Digital Excellence Redefined
            </motion.span>
            
            <motion.h1 
              className="hero-title-shimmer"
              style={{ 
                fontSize: 'clamp(3rem, 9.5vw, 6.5rem)', 
                marginBottom: '0',
                lineHeight: 0.85,
                fontWeight: 800,
                letterSpacing: '-0.04em',
                paddingBottom: '0.1em',
                perspective: '1000px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                columnGap: '0.25em'
              }}
            >
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
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
              </span>
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                {"ELLA".split("").map((letter, i) => (
                  <motion.span
                    key={i + 10}
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
              </span>
            </motion.h1>

            <p style={{ 
              fontFamily: "'Outfit', sans-serif",
              fontSize: '1.05rem', 
              maxWidth: '600px', 
              margin: '2rem auto 2.5rem auto', 
              lineHeight: '1.6',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.7)'
            }}>
              We bridge the gap between imagination and execution, crafting digital experiences that resonate and scale your business to new heights.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
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
          style={{ position: 'absolute', bottom: '3rem', opacity: 0.4, cursor: 'pointer', color: 'white' }}
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
            color: 'rgba(255, 255, 255, 0.4)',
            textTransform: 'uppercase',
            opacity: 0.6
          }}>
            EST. 2026 // DIGITAL REALM
          </span>
          <div style={{ 
            width: '1px', 
            height: '100px', 
            background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3), transparent)',
            opacity: 0.3
          }}></div>
        </motion.div>
      </section>
    </div>
  );

};

export default Hero;
