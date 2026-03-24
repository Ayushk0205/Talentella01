import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/talentella-logo.png';

const Navbar = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: 'footer', isLight: false },
                { id: 'contact', isLight: true },
                { id: 'about', isLight: false },
                { id: 'projects', isLight: false },
                { id: 'services', isLight: true },
                { id: 'hero', isLight: true },
            ];
            
            let overLight = false;
            
            for (let i = 0; i < sections.length; i++) {
                const sectionEl = document.getElementById(sections[i].id);
                if (sectionEl) {
                    const rect = sectionEl.getBoundingClientRect();
                    // If this section has reached the top of the viewport (or slightly below)
                    // it is the currently active overlapping section.
                    if (rect.top <= 100) {
                        overLight = sections[i].isLight;
                        break;
                    }
                }
            }
            
            setIsDarkTheme(overLight);
        };

        window.addEventListener('scroll', handleScroll);
        // Call once on mount to set initial state
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const textColor = isDarkTheme ? '#000000' : '#ffffff';
    const borderColor = isDarkTheme ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.1)';
    const glassBg = isDarkTheme ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.4)';

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                width: '100%', 
                zIndex: 1000, 
                padding: '1.2rem 5%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
        >
            {/* Logo */}
            <motion.div 
                style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    pointerEvents: 'auto'
                }}
            >
                <img 
                  src={logo} 
                  alt="Talent Ella Logo" 
                  style={{ 
                    height: '45px',
                    width: 'auto',
                    mixBlendMode: isDarkTheme ? 'multiply' : 'screen',
                    filter: isDarkTheme ? 'contrast(1.2)' : 'none',
                    borderRadius: '6px'
                  }} 
                />
            </motion.div>

            {/* Navigation Card */}
            <motion.div 
                animate={{ 
                    backgroundColor: glassBg,
                    borderColor: borderColor,
                    backdropFilter: 'blur(30px)',
                    boxShadow: isDarkTheme ? '0 10px 40px rgba(0,0,0,0.05)' : '0 10px 40px rgba(0,0,0,0.2)'
                }}
                className="glass-card hidden-mobile"
                style={{ 
                    display: 'flex', 
                    gap: '2.5rem', 
                    padding: '0.4rem 2rem', 
                    borderRadius: '100px',
                    border: '1px solid',
                    pointerEvents: 'auto',
                    transition: 'all 0.4s ease'
                }}
            >
                {['SERVICES', 'PROJECTS', 'PROCESS', 'CONTACT'].map((item, index) => (
                    <motion.a 
                        key={item} 
                        href={`#${item.toLowerCase()}`}
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        style={{ 
                            position: 'relative',
                            fontSize: '0.75rem', 
                            fontWeight: 800, 
                            letterSpacing: '0.12em', 
                            color: textColor,
                            opacity: hoveredIndex === index ? 1 : 0.8,
                            transition: 'opacity 0.3s ease',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            padding: '0.2rem 0'
                        }}
                    >
                        {item}
                        {hoveredIndex === index && (
                            <motion.div
                                layoutId="nav-underline"
                                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                style={{
                                    position: 'absolute',
                                    bottom: '-2px',
                                    left: 0,
                                    right: 0,
                                    height: '2px',
                                    backgroundColor: 'var(--accent)',
                                    borderRadius: '2px'
                                }}
                            />
                        )}
                    </motion.a>
                ))}
            </motion.div>

            {/* Action Button */}
            <div className="hidden-mobile" style={{ pointerEvents: 'auto' }}>
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                      padding: '0.8rem 2rem', 
                      fontSize: '0.8rem', 
                      fontWeight: 800,
                      borderRadius: '100px',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      letterSpacing: '0.05em',
                      backgroundColor: isDarkTheme ? '#0a0a0c' : '#ffffff',
                      color: isDarkTheme ? '#ffffff' : '#0a0a0c',
                      boxShadow: isDarkTheme ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
                      transition: 'background-color 0.4s ease, color 0.4s ease, box-shadow 0.4s ease'
                  }}
                >
                    GET IN TOUCH
                </motion.a>
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="show-mobile" style={{ pointerEvents: 'auto' }}>
               <button onClick={toggleMenu} style={{ background: 'none', border: 'none', color: textColor, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                   <Menu size={32} />
               </button>
            </div>

            {/* Mobile Fullscreen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            backgroundColor: '#050508',
                            zIndex: 2000,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            padding: '2rem'
                        }}
                    >
                        <button onClick={toggleMenu} style={{ position: 'absolute', top: '1.5rem', right: '5%', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                            <X size={36} />
                        </button>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
                            {['SERVICES', 'PROJECTS', 'PROCESS', 'CONTACT'].map((item) => (
                                <a 
                                    key={item} 
                                    href={`#${item.toLowerCase()}`}
                                    onClick={toggleMenu}
                                    style={{ 
                                        fontSize: '2.5rem', 
                                        fontWeight: 800, 
                                        color: 'white', 
                                        textDecoration: 'none',
                                        letterSpacing: '0.1em'
                                    }}
                                >
                                    {item}
                                </a>
                            ))}
                            <a 
                                href="#contact"
                                onClick={toggleMenu}
                                className="btn-primary"
                                style={{ marginTop: '2rem', fontSize: '1.2rem', padding: '15px 40px', justifyContent: 'center' }}
                            >
                                GET IN TOUCH
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
