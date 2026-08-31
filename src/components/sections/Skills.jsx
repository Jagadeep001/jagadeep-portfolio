import { motion, useMotionValue, useTransform } from 'framer-motion';

const skills = [
  { name: 'HTML', percentage: 90 },
  { name: 'CSS', percentage: 85 },
  { name: 'JavaScript', percentage: 80 },
  { name: 'Python', percentage: 75 },
  { name: 'Java', percentage: 70 },
  { name: 'C', percentage: 65 },
  { name: 'C++', percentage: 70 },
  { name: 'React.js', percentage: 80 },
  { name: 'Node.js', percentage: 75 },
  { name: 'Git', percentage: 85 },
  { name: 'GitHub', percentage: 85 },
  { name: 'Responsive Web Design', percentage: 90 }
];

function SkillCard({ skill, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [20, -20]);
  const rotateY = useTransform(x, [-100, 100], [-20, 20]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className="glass-card"
      style={{
        perspective: 1000,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(1rem, 3vw, 2rem)',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden'
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
          transformStyle: 'preserve-3d',
          width: '100%'
        }}
      >
        <h3 style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1.2rem)', color: '#fff', transform: 'translateZ(30px)', textAlign: 'center' }}>{skill.name}</h3>
        <div style={{ width: '100%', height: '4px', background: 'var(--color-border)', borderRadius: '2px', transform: 'translateZ(20px)' }}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
            style={{ height: '100%', background: 'var(--color-primary)', borderRadius: '2px', boxShadow: '0 0 10px var(--color-primary)' }}
          />
        </div>
        <p style={{ color: 'var(--color-secondary)', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', fontWeight: 'bold', transform: 'translateZ(40px)' }}>
          {skill.percentage}%
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <div className="max-w-6xl">
        <h2 className="section-title text-glow">MY POWERS</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(140px, 100%), 1fr))',
          gap: 'clamp(0.75rem, 2vw, 1.5rem)',
          marginTop: '3rem'
        }}>
          {skills.map((skill, idx) => (
            <SkillCard key={skill.name} skill={skill} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
