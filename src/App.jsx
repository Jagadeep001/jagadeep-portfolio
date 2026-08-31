import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';

// Components
import Scene from './components/canvas/Scene';
import WebParticles from './components/canvas/WebParticles';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <CustomCursor />
      
      {/* 3D Background Canvas */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        <Canvas
          camera={{ position: [0, 0, 15], fov: 45 }}
          gl={{ antialias: false, alpha: false }}
          dpr={[1, 1.5]} // Limit dpr for performance
        >
          <color attach="background" args={['#030303']} />
          <fog attach="fog" args={['#030303', 10, 50]} />
          
          <Suspense fallback={null}>
            <Scene scrollProgress={scrollProgress} />
            <WebParticles count={150} />
            
            <EffectComposer disableNormalPass>
              <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} />
              <Noise opacity={0.03} />
              <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      {/* UI Overlay */}
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default App;
