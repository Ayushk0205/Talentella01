import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    title: 'Discovery',
    desc: 'We dive deep into your business goals, target audience, and market landscape to find the winning edge.',
  },
  {
    title: 'Strategy',
    desc: 'Crafting a bespoke roadmap that combines storytelling with data-driven tactical execution.',
  },
  {
    title: 'Execution',
    desc: 'Bringing the vision to life with world-class design, WebGL animations, and strategic content.',
  },
  {
    title: 'Optimization',
    desc: 'Continuous monitoring and refining to ensure maximum ROI and sustained digital growth.',
  },
];

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });
  const borderProgress = useTransform(scrollYProgress, [0, 1], ["60px", "0px"]);

  return (
    <div id="process" ref={containerRef} style={{ position: 'relative', minHeight: '200vh', zIndex: 30, marginBottom: '-100vh' }}>
      <motion.section className="section-overlap" style={{ 
        position: 'sticky',
        top: 0,
        backgroundColor: '#0c0c10', 
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderTopLeftRadius: borderProgress,
        borderTopRightRadius: borderProgress,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ maxWidth: '1400px', width: '100%', padding: '0 5%' }}>
          <div className="flex-col-mobile process-gap-fix" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            <div className="process-header" style={{ flex: '1 1 400px' }}>
              <span className="accent-gradient" style={{ fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem', display: 'block', marginBottom: '1.5rem' }}>
                How We Work
              </span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }} className="text-gradient">
                Our Process for <br /> Digital Success.
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                We don't just make things look pretty. We build systems that work for your business, ensuring every pixel and post has a purpose.
              </p>
            </div>
            
            <div className="process-cards-wrapper" style={{ flex: '1 1 500px', display: 'grid', gap: '0.8rem' }}>
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card process-card" 
                  style={{ padding: '1.5rem 2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
                >
                  <div className="number-circle" style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: 800, 
                    color: 'var(--accent)', 
                    background: 'rgba(170, 59, 255, 0.1)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {i + 1}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                    <p style={{ color: 'var(--muted)', lineHeight: '1.5', fontSize: '0.95rem' }}>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Process;
