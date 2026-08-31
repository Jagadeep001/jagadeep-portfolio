import { motion } from 'framer-motion';

const certifications = [
  { title: 'Java for Beginners', issuer: 'Infosys Springboard' },
  { title: 'Learning Full Stack Development', issuer: 'Infosys Springboard' },
  { title: 'Power BI', issuer: 'Infosys Springboard' },
  { title: 'C++', issuer: 'ICDA computer and typewriting institute' },
  { title: 'Design Pattern using Python', issuer: 'Infosys Springboard' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-container">
      <div className="max-w-6xl">
        <h2 className="section-title text-glow">UPGRADING MY SKILLS</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
          gap: 'clamp(1rem, 3vw, 1.5rem)',
          marginTop: '3rem'
        }}>
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              className="glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                padding: 'clamp(1.25rem, 3vw, 2rem)',
                borderLeft: '4px solid var(--color-primary)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Badge Icon */}
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.05, fontSize: '5rem' }}>
                🏅
              </div>
              
              <h3 style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', color: '#fff', letterSpacing: '0.05em' }}>{cert.title}</h3>
              <p style={{ color: 'var(--color-secondary)', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', fontWeight: 'bold' }}>
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
