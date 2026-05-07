import { useReveal } from '../hooks/useReveal'

export default function CTA() {
  const ref = useReveal()

  return (
    <section id="cta" style={{ background: '#0F0A1E', textAlign: 'center', padding: '100px 5vw', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 700, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div ref={ref} className="reveal" style={{ position: 'relative', zIndex: 1, maxWidth: 600, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.035em', color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
          Your work deserves<br />to be organized
        </h2>
        <p style={{ fontSize: '1.0625rem', color: '#A78BFA', marginBottom: 36, lineHeight: 1.7 }}>
          Start today. Create your first project and share your link with your client in under 2 minutes.
        </p>
        <a
          href="https://stamped-flutter-app.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', color: 'var(--purple)',
            padding: '14px 32px', borderRadius: 8,
            fontSize: '1rem', fontWeight: 700,
            letterSpacing: '-0.01em', transition: 'all 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--purple-soft)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          Get started free
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <p style={{ marginTop: 16, fontSize: '0.8rem', color: '#5C4A80' }}>
          No credit card · No walkthrough · No lengthy setup
        </p>
      </div>

      <style>{`.reveal{opacity:0;transform:translateY(20px);transition:opacity .55s ease,transform .55s ease}.reveal.visible{opacity:1;transform:translateY(0)}`}</style>
    </section>
  )
}
