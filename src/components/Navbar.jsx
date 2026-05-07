import { useState } from 'react'
import stampedLogo from '../assets/stamped_logo.png'

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 5vw', height: 64,
    background: 'rgba(255,255,255,0.96)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--border)',
  },
  logo: {
    display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none',
  },
  logoImage: {
    width: 150,
    height: 150,
    objectFit: 'contain',
  },
  toggleButton: {
    background: 'none',
    border: 'none',
    padding: 0,
    marginLeft: 12,
    cursor: 'pointer',
  },
  toggleBar: {
    width: 22,
    height: 2,
    borderRadius: 2,
    background: 'var(--text-dark)',
    display: 'block',
    margin: '4px 0',
  },
  links: {
    display: 'flex', alignItems: 'center', gap: 32,
  },
  link: {
    fontSize: '0.875rem', fontWeight: 400, color: 'var(--text-muted)',
    textDecoration: 'none', transition: 'color 0.15s', cursor: 'pointer',
  },
  cta: {
    background: 'var(--purple)', color: '#fff',
    padding: '8px 20px', borderRadius: 8,
    fontSize: '0.875rem', fontWeight: 600,
    textDecoration: 'none', transition: 'background 0.15s',
    cursor: 'pointer',
  },
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={styles.nav}>
      <a href="#" style={styles.logo} onClick={() => setMenuOpen(false)}>
        <img src={stampedLogo} alt="Stamped logo" style={styles.logoImage} />
      </a>
      <button
        type="button"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setMenuOpen(prev => !prev)}
        style={styles.toggleButton}
        className="navbar-toggle"
      >
        <span style={styles.toggleBar} />
        <span style={styles.toggleBar} />
        <span style={styles.toggleBar} />
      </button>
      <div style={styles.links} className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <span style={styles.link} onClick={() => scrollTo('problem')}>Problem</span>
        <span style={styles.link} onClick={() => scrollTo('how')}>How it works</span>
        <span style={styles.link} onClick={() => scrollTo('features')}>Features</span>
        <a
          href="https://stamped-flutter-app.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.cta}
          onClick={() => setMenuOpen(false)}
          onMouseEnter={e => e.target.style.background = 'var(--purple-dark)'}
          onMouseLeave={e => e.target.style.background = 'var(--purple)'}
        >
          Get started free
        </a>
      </div>
    </nav>
  )
}
