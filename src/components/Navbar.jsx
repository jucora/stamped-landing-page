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
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav style={styles.nav}>
      <a href="#" style={styles.logo}>
        <img src={stampedLogo} alt="Stamped logo" style={styles.logoImage} />
      </a>
      <div style={styles.links}>
        <span style={styles.link} onClick={() => scrollTo('problem')}>Problem</span>
        <span style={styles.link} onClick={() => scrollTo('how')}>How it works</span>
        <span style={styles.link} onClick={() => scrollTo('features')}>Features</span>
        <span
          style={styles.cta}
          onClick={() => scrollTo('cta')}
          onMouseEnter={e => e.target.style.background = 'var(--purple-dark)'}
          onMouseLeave={e => e.target.style.background = 'var(--purple)'}
        >
          Get started free
        </span>
      </div>
    </nav>
  )
}
