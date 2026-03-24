import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
  {
    id: '01',
    client: 'Skyline Architecture',
    desc: 'Luxury architectural visualization and firm portfolio.',
    image: project1,
  },
  {
    id: '02',
    client: 'StreetVibe E-commerce',
    desc: 'High-energy streetwear brand with dynamic shop flow.',
    image: project2,
  },
  {
    id: '03',
    client: 'FinFlow Dashboard',
    desc: 'Next-gen fintech data visualization and analytics.',
    image: project3,
  }
];

const ProjectCard = ({ project, index, scrollProgress }) => {
  // Tightened timing: Card 0 is already there. Others follow immediately.
  const start = index === 0 ? 0 : (index === 1 ? 0.05 : 0.4);
  const end = index === 0 ? 0.05 : (index === 1 ? 0.4 : 0.7);
  
  // y: Card 0 is fixed. Others fly in.
  const y = useTransform(scrollProgress, [start, end], [index === 0 ? 0 : 700, 0]);
  const scale = useTransform(scrollProgress, [start, end], [index === 0 ? 1 : 0.94, 1]);
  
  // Stacking effect
  const nextStart = index === 0 ? 0.05 : (index === 1 ? 0.4 : 0.7);
  const stackScale = useTransform(scrollProgress, [nextStart, nextStart + 0.2], [1, 0.96]);
  const stackY = useTransform(scrollProgress, [nextStart, nextStart + 0.2], [0, -20]);

  return (
    <motion.div 
      style={{ 
        position: 'absolute', 
        top: '25vh',
        left: '50%',
        x: '-50%',
        width: '90%', 
        maxWidth: '1100px', 
        zIndex: 10 + index,
        y,
        scale: useTransform(() => stackScale.get() * scale.get()),
        translateY: stackY,
        willChange: 'transform'
      }}
    >
      <div 
        className="mobile-padding-sm"
        style={{ 
          backgroundColor: '#050508', // Guaranteed solid deep background
          borderRadius: '32px', 
          border: '1px solid rgba(255, 255, 255, 0.18)',
          padding: '3rem',
          boxShadow: '0 60px 120px rgba(0,0,0,1)', // Very heavy shadow to block depth
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div className="flex-col-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 900, opacity: 0.15, lineHeight: 1 }}>{project.id}</span>
            <div>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--accent)', display: 'block', marginBottom: '0.6rem', opacity: 0.6 }}>Case Study</span>
              <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>{project.client}</h3>
            </div>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'black' }}
            style={{ 
              padding: '1rem 2.2rem', 
              borderRadius: '100px', 
              border: '1px solid rgba(255,255,255,0.15)', 
              background: 'transparent', 
              color: 'white', 
              fontWeight: 700,
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              cursor: 'pointer'
            }}
          >
            EXPLORE <ArrowUpRight size={20} />
          </motion.button>
        </div>

        <div style={{ 
          width: '100%', 
          aspectRatio: '2/1.05', 
          borderRadius: '20px', 
          overflow: 'hidden',
          backgroundColor: '#111',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <img 
            src={project.image} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            alt={project.client}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} style={{ 
      position: 'relative', 
      minHeight: '500vh', 
      zIndex: 22,
      marginBottom: '-100vh' // Pulls the next section over the pinned stack
    }}>
      <section id="projects" style={{ 
        position: 'sticky', 
        top: 0, 
        height: '100vh', 
        width: '100%',
        backgroundColor: '#050508',
        overflow: 'hidden',
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Heading Area */}
        <div 
          style={{ 
            textAlign: 'center', 
            height: '25vh', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'flex-end',
            paddingBottom: '2vh'
          }}
        >
          <h2 
            className="hero-title-shimmer"
            style={{ 
              fontSize: 'clamp(3rem, 10vw, 5.5rem)', 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              letterSpacing: '-0.04em',
              margin: 0
            }}
          >
            {"PROJECTS".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                style={{ display: 'inline-block' }}
              >
                {letter}
              </motion.span>
            ))}
          </h2>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: false }}
            transition={{ delay: 0.8, duration: 1 }}
            style={{ fontSize: '0.65rem', letterSpacing: '0.5em', textTransform: 'uppercase', marginTop: '0.5rem' }}
          >
            Digital Craftsmanship
          </motion.span>
        </div>

        {/* Project Cards Stack */}
        <div style={{ position: 'relative', width: '100%', height: '80vh' }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} scrollProgress={scrollYProgress} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
