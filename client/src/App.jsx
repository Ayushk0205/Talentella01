import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StaticBackground from './components/StaticBackground';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <div className="page-container">
        <StaticBackground />
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Projects />
          <Process />
          <Contact />
          <Footer />
        </main>
      </div>
    </SmoothScroll>
  );
}

export default App;
