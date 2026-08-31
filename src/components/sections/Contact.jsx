import { motion, useAnimation } from 'framer-motion';
import { Mail, Phone, MapPin, Code } from 'lucide-react';
import { useState } from 'react';

const contactItems = [
  { icon: Mail, label: 'Email' },
  { icon: Phone, label: 'Phone' },
  { icon: MapPin, label: 'Dharmapuri, Tamil Nadu' },
  { icon: Code, label: 'GitHub' },
];

export default function Contact() {
  const [shotWeb, setShotWeb] = useState(false);
  const webAnimation = useAnimation();

  const handleContactClick = (e) => {
    e.preventDefault();
    setShotWeb(true);
    webAnimation.start({
      scaleX: [0, 1],
      opacity: [1, 0],
      transition: { duration: 0.5, ease: "easeOut" }
    }).then(() => setShotWeb(false));
  };

  return (
    <section id="contact" className="section-container" style={{ minHeight: '80vh' }}>
      <div className="max-w-6xl" style={{ textAlign: 'center', width: '100%' }}>
        <h2 className="section-title text-glow">NEED A WEB HERO?</h2>
        
        <div className="glass-panel contact-panel" style={{ marginTop: '3rem', position: 'relative', overflow: 'hidden' }}>
          <h3 style={{ fontSize: 'clamp(1.3rem, 5vw, 2.5rem)', marginBottom: '2.5rem', color: '#fff' }}>
            LET'S BUILD SOMETHING <span style={{ color: 'var(--color-primary)' }}>AMAZING</span>
          </h3>
          
          <div className="contact-icons" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(1.5rem, 4vw, 3rem)', marginBottom: '3rem' }}>
            {contactItems.map(({ icon: Icon, label }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', minWidth: '60px' }}>
                <div style={{ padding: 'clamp(0.6rem, 2vw, 1rem)', background: 'rgba(255,0,60,0.1)', borderRadius: '50%', color: 'var(--color-primary)' }}>
                  <Icon size={clamp(20, 32)} />
                </div>
                <span style={{ fontSize: 'clamp(0.75rem, 2vw, 0.95rem)', color: 'var(--color-text-muted)' }}>{label}</span>
              </div>
            ))}
          </div>

          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button onClick={handleContactClick} className="btn-primary contact-btn">
              CONTACT ME
            </button>
            
            {/* Web shooting animation effect */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={webAnimation}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '200vw',
                height: '4px',
                background: 'var(--color-primary)',
                boxShadow: '0 0 20px var(--color-primary)',
                transformOrigin: 'left',
                zIndex: 10,
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        .contact-panel {
          padding: clamp(1.5rem, 6vw, 4rem) clamp(1rem, 5vw, 2rem);
        }
        .contact-btn {
          padding: clamp(12px, 3vw, 20px) clamp(24px, 6vw, 50px);
          font-size: clamp(0.85rem, 2vw, 1.2rem);
        }
        @media (max-width: 480px) {
          .contact-icons {
            gap: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}

// helper for Icon size only (not CSS clamp)
function clamp(min, max) {
  if (typeof window === 'undefined') return max;
  const vw = window.innerWidth;
  return Math.min(max, Math.max(min, Math.round(min + (max - min) * (vw / 1200))));
}
