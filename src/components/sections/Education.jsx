import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="section-container">
      <div className="max-w-6xl">
        <h2 className="section-title text-glow">ORIGIN STORY</h2>
        
        <div style={{ position: 'relative', marginTop: '4rem', paddingLeft: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
          {/* Vertical glowing timeline line */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, var(--color-primary), transparent)',
            boxShadow: '0 0 10px var(--color-primary)'
          }} />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            {/* Timeline Node */}
            <div style={{
              position: 'absolute',
              left: 'clamp(-1.75rem, -4vw, -2rem)',
              top: '1.5rem',
              width: 'clamp(12px, 3vw, 16px)',
              height: 'clamp(12px, 3vw, 16px)',
              borderRadius: '50%',
              background: 'var(--color-bg)',
              border: '4px solid var(--color-primary)',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 15px var(--color-primary)'
            }} />

            <div className="glass-panel" style={{ padding: 'clamp(1.25rem, 4vw, 2.5rem)' }}>
              <h3 style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.5rem)', color: '#fff', marginBottom: '0.5rem' }}>
                B.Tech in Information Technology
              </h3>
              <p style={{ color: 'var(--color-secondary)', fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', fontWeight: 'bold' }}>
                Adhiyamaan College of Engineering
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
