import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import SpiderCore from '../canvas/SpiderCore';

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="max-w-6xl">
        <h2 className="section-title text-glow">THE PERSON BEHIND THE MASK</h2>
        
        <div className="about-grid" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(2rem, 5vw, 4rem)', marginTop: '3rem' }}>
          
          <motion.div 
            className="glass-panel about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.2rem)', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: '1.5rem' }}>
              I am <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Jagadeep G</span>, a B.Tech Information Technology student passionate about web development, creative problem solving, and building modern interactive digital experiences.
            </p>
            
            <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
              {[
                "Strong problem-solving ability",
                "Creative and efficient solutions",
                "Team collaboration",
                "Effective communication",
                "Interest in modern web technologies"
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
                  <span style={{ color: 'var(--color-secondary)', flexShrink: 0 }}>▹</span>
                  {item}
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ color: 'var(--color-text-muted)', marginBottom: '0.75rem', letterSpacing: '0.1em', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)' }}>LANGUAGES</h4>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {['English', 'Tamil'].map(lang => (
                  <motion.div
                    key={lang}
                    whileHover={{ scale: 1.1, boxShadow: '0 0 15px var(--color-primary)' }}
                    style={{
                      padding: '6px 18px',
                      background: 'rgba(255, 0, 60, 0.1)',
                      border: '1px solid var(--color-primary)',
                      borderRadius: '20px',
                      color: 'var(--color-primary)',
                      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                      fontWeight: 'bold',
                      cursor: 'default'
                    }}
                  >
                    {lang}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-canvas"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ position: 'relative' }}
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} color="#ff003c" intensity={2} />
              <pointLight position={[-10, -10, -10]} color="#00f0ff" intensity={1} />
              <Suspense fallback={null}>
                <SpiderCore />
              </Suspense>
            </Canvas>
          </motion.div>

        </div>
      </div>

      <style>{`
        .about-text {
          flex: 1 1 300px;
          min-width: 0;
        }
        .about-canvas {
          flex: 1 1 260px;
          height: clamp(220px, 40vw, 400px);
          min-height: 220px;
          min-width: 0;
        }
        @media (max-width: 768px) {
          .about-grid {
            flex-direction: column;
          }
          .about-canvas {
            width: 100%;
            height: clamp(200px, 60vw, 320px);
          }
        }
      `}</style>
    </section>
  );
}
