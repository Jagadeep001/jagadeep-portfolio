import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'CERTIFICATIONS', href: '#certifications' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 'var(--z-nav)',
    transition: 'all 0.3s ease',
    padding: isScrolled ? '0.75rem 5%' : '1.25rem 5%',
    background: isScrolled ? 'var(--color-glass)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    borderBottom: isScrolled ? '1px solid var(--color-border)' : '1px solid transparent',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const logoStyle = {
    fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
    fontWeight: '900',
    color: '#fff',
    textDecoration: 'none',
    letterSpacing: '0.05em',
    flexShrink: 0,
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <a href="#home" style={logoStyle} className="text-glow">
          JAGADEEP<span style={{ color: 'var(--color-primary)' }}>.G</span>
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', gap: 'clamp(1rem, 2.5vw, 2rem)', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                fontSize: 'clamp(0.7rem, 1vw, 0.85rem)',
                fontWeight: '600',
                letterSpacing: '0.08em',
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseOver={(e) => (e.target.style.color = 'var(--color-primary)')}
              onMouseOut={(e) => (e.target.style.color = 'var(--color-text-muted)')}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle"
          aria-label="Toggle mobile menu"
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'none', padding: '4px' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--color-bg)',
              borderBottom: '1px solid var(--color-border)',
              padding: '1rem 5%',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
