import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div style={{ position: 'relative', minHeight: '250vh', zIndex: 40, marginBottom: '-100vh' }}>
      <section id="contact" className="section-overlap" style={{ 
        position: 'sticky',
        top: 0,
        backgroundColor: '#f8f9fc',
        padding: '12vh 5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        color: '#0a0a0c'
      }}>
        {/* Floating Decorative Element */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            left: '5%',
            bottom: '20%',
            width: '180px',
            height: '180px',
            background: 'linear-gradient(135deg, #aa3bff 0%, #7d26cd 100%)',
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
            filter: 'blur(30px)',
            opacity: 0.15,
            zIndex: 1
          }}
        />

        <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="auto-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '8rem', alignItems: 'center' }}>
            
            {/* Left Side: Massive Heading */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
              >
                <h2 style={{ 
                  fontSize: 'clamp(3.5rem, 8vw, 6rem)', 
                  fontWeight: 900, 
                  lineHeight: 1, 
                  textTransform: 'uppercase', 
                  letterSpacing: '-0.04em',
                  color: '#0a0a0c',
                  margin: 0
                }}>
                  {"LET'S GET IN TOUCH".split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ 
                        duration: 0.8, 
                        delay: i * 0.04,
                        ease: [0.16, 1, 0.3, 1] 
                      }}
                      style={{ display: 'inline-block', whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </h2>
                <a 
                  href="mailto:talentella@gmail.in" 
                  style={{ 
                    display: 'inline-block', 
                    marginTop: '2.5rem', 
                    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', 
                    color: '#0a0a0c', 
                    textDecoration: 'underline',
                    fontWeight: 600,
                    opacity: 0.8
                  }}
                >
                  talentella@gmail.in
                </a>
              </motion.div>
            </div>

            {/* Right Side: Minimalist Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ width: '100%', maxWidth: '550px' }}
            >
              <form style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999' }}>Full Name*</label>
                  <input 
                    type="text" 
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      borderBottom: '1px solid #ddd', 
                      padding: '0.8rem 0',
                      color: '#0a0a0c',
                      fontSize: '1.1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }} 
                    onFocus={(e) => e.target.style.borderColor = '#0a0a0c'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  />
                </div>

                <div className="grid-col-mobile" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999' }}>Email*</label>
                    <input 
                      type="email" 
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        borderBottom: '1px solid #ddd', 
                        padding: '0.8rem 0',
                        color: '#0a0a0c',
                        fontSize: '1.1rem',
                        outline: 'none'
                      }} 
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999' }}>Phone</label>
                    <input 
                      type="tel" 
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        borderBottom: '1px solid #ddd', 
                        padding: '0.8rem 0',
                        color: '#0a0a0c',
                        fontSize: '1.1rem',
                        outline: 'none'
                      }} 
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999' }}>Message</label>
                  <textarea 
                    rows="2" 
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      borderBottom: '1px solid #ddd', 
                      padding: '0.8rem 0',
                      color: '#0a0a0c',
                      fontSize: '1.1rem',
                      outline: 'none',
                      resize: 'none'
                    }} 
                  />
                </div>

                <motion.button 
                  whileHover={{ backgroundColor: '#0a0a0c', color: 'white' }}
                  whileTap={{ scale: 0.98 }}
                  style={{ 
                    background: 'none', 
                    color: '#0a0a0c', 
                    border: '1.5px solid #0a0a0c', 
                    borderRadius: '100px', 
                    padding: '1.2rem 3rem', 
                    fontSize: '0.9rem', 
                    fontWeight: 800, 
                    letterSpacing: '0.2rem',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    marginTop: '1rem',
                    transition: 'all 0.3s ease',
                    alignSelf: 'flex-start'
                  }}
                >
                  SEND
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
