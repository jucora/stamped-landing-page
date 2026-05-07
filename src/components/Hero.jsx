import { useEffect } from 'react'
import heroImage from '../assets/stamped-team.jpg'

export default function Hero() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
    }, 100)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      padding: 'clamp(100px, 12vw, 140px) 5vw 80px',
      display: 'flex', alignItems: 'center',
      background: 'linear-gradient(160deg, #FDFDFF 0%, #F5F3FF 60%, #FDFDFF 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* bg glow */}
      <div style={{
        position: 'absolute', top: -250, right: -250,
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1160, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}
        className="hero-grid">

        {/* Left */}
        <div className="reveal" style={{ transitionDelay: '0ms' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'var(--purple-soft)', border: '1px solid var(--purple-border)',
            padding: '4px 12px', borderRadius: 99,
            fontSize: '0.75rem', fontWeight: 500, color: 'var(--purple)',
            marginBottom: 20,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--purple-mid)', animation: 'blink 2s infinite' }} />
            For freelancers who mean business
          </div>

          <h1 style={{
            fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
            fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.035em',
            color: 'var(--text-dark)', marginBottom: 20,
          }}>
            Define. Track.<br />
            <span style={{ color: 'var(--purple)' }}>Prove</span> your work.
          </h1>

          <p style={{
            fontSize: '1.0625rem', color: 'var(--text-muted)',
            lineHeight: 1.75, maxWidth: 460, marginBottom: 36,
          }}>
            Stamped brings agreements, approvals, deliverables, and client
            communication into one structured system. Your first project,
            ready in under 2 minutes.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="https://stamped-flutter-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'var(--purple)', color: '#fff',
                padding: '12px 24px', borderRadius: 8,
                fontSize: '0.9375rem', fontWeight: 600,
                transition: 'background 0.15s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--purple-dark)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--purple)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Create my first project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#how"
              onClick={e => { e.preventDefault(); document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                color: 'var(--text-mid)', fontSize: '0.9375rem', fontWeight: 500,
                padding: '12px 4px', transition: 'color 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--purple)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-mid)'}
            >
              See how it works
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.8125rem', color: 'var(--text-light)' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E', flexShrink: 0 }} />
            Average onboarding time:&nbsp;<strong style={{ color: 'var(--text-mid)' }}>120 seconds</strong>
          </div>
        </div>

        {/* Right — image */}
        <div className="reveal" style={{ transitionDelay: '120ms' }}>
          <img
            src={heroImage}
            alt="Stamped right side"
            style={{ width: '100%', maxWidth: 560, borderRadius: 24, objectFit: 'contain' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.55s ease, transform 0.55s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
