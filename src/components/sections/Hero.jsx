import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="section-container" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}
      >
        <h2 style={{ color: 'var(--color-primary)', letterSpacing: '0.2em', fontSize: 'clamp(0.7rem, 2.5vw, 1rem)', marginBottom: '1rem' }}>
          ENTER THE WEB
        </h2>
        <h1 className="text-glow" style={{ fontSize: 'clamp(2.5rem, 10vw, 6rem)', lineHeight: '1', wordBreak: 'break-word' }}>
          JAGADEEP <span style={{ color: 'var(--color-primary)' }}>G</span>
        </h1>
        
        <div style={{ margin: 'clamp(1rem, 4vw, 2rem) 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0 1rem' }}>
          <p className="text-gradient" style={{ fontSize: 'clamp(0.85rem, 3vw, 1.2rem)', fontWeight: '600', letterSpacing: '0.1em' }}>
            B.TECH INFORMATION TECHNOLOGY
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(0.8rem, 2.5vw, 1rem)', letterSpacing: '0.05em' }}>
            WEB DEVELOPER • CREATIVE DEVELOPER
          </p>
        </div>

        <div className="hero-cta" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: 'clamp(1.5rem, 5vw, 3rem)', flexWrap: 'wrap', padding: '0 1rem' }}>
          <a href="#projects" className="btn-primary">EXPLORE MY WORK</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">DOWNLOAD RESUME</a>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 480px) {
          .hero-cta {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
