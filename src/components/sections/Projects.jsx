import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'Developed a responsive personal portfolio website to showcase projects, technical skills, education, achievements and professional profile. Designed a clean and user-friendly interface with smooth navigation and responsive layouts for an engaging experience across devices.',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'React Web Application',
    description: 'Developed a responsive web application using React.js, with reusable components and an interactive user interface. Implemented dynamic UI features and state management to provide smooth navigation and an engaging user experience.',
    technologies: ['React.js', 'JavaScript']
  },
  {
    title: 'College Event Management System',
    description: 'Developed a College Event Management System to manage and organize college events, registrations, schedules and participant details. Designed a user-friendly web interface allowing students and administrators to easily view events, register and manage event-related information.',
    technologies: ['Web Development', 'Database']
  }
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 'clamp(1.25rem, 4vw, 2.5rem)',
        gap: '1.25rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <h3 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', color: '#fff', letterSpacing: '0.05em' }}>{project.title}</h3>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
        {project.description}
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        {project.technologies.map(tech => (
          <span key={tech} style={{ 
            fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)', 
            padding: '4px 10px', 
            borderRadius: '20px', 
            border: '1px solid var(--color-primary)', 
            color: 'var(--color-primary)',
            background: 'rgba(255, 0, 60, 0.05)',
            whiteSpace: 'nowrap'
          }}>
            {tech}
          </span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto', paddingTop: '0.75rem', flexWrap: 'wrap' }}>
        <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.8rem', flex: '1 1 120px' }}>VIEW PROJECT</button>
        <button className="btn-secondary" style={{ padding: '10px 20px', fontSize: '0.8rem', flex: '1 1 120px' }}>SOURCE CODE</button>
      </div>
      
      {/* Decorative spider-web corner overlay */}
      <svg width="100" height="100" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, right: 0, opacity: 0.1, pointerEvents: 'none' }}>
        <path d="M100,0 L100,100 L0,0 Z" fill="var(--color-primary)" />
      </svg>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="max-w-6xl">
        <h2 className="section-title text-glow">MISSIONS COMPLETED</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
          gap: 'clamp(1rem, 3vw, 2rem)',
          marginTop: '3rem'
        }}>
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
