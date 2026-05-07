import { useState } from 'react'

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
    display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none',
  },
  logoText: {
    fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-dark)', letterSpacing: '-0.02em',
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
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <circle cx="15" cy="15" r="15" fill="#EDE9FE"/>
          <path d="M10 13.5c0-1 .9-1.8 1.9-1.8h6.2a1.8 1.8 0 010 3.6H12a1.8 1.8 0 000 3.6h6.2"
            stroke="#5B21B6" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
        <span style={styles.logoText}>Stamped</span>
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
