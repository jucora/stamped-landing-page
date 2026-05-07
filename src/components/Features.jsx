import { useReveal } from '../hooks/useReveal'

const features = [
  {
    title: 'Documented projects',
    desc: 'Define scope, deadlines, and deliverables in one centralized place that both you and your client can see.',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" width="18" height="18">
        <rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 9h6M6 6h4M6 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Recorded approvals',
    desc: "Every approval is saved with a timestamp. Never again \"I didn't approve that\" — you have the full history.",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" width="18" height="18">
        <path d="M3 9l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'No-account client link',
    desc: 'Your client accesses their project with a unique link. No sign-up needed. They can review and approve instantly.',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" width="18" height="18">
        <path d="M15 9A6 6 0 113 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 3v3M9 9l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Verifiable work history',
    desc: 'Build real proof of work. Every completed deliverable stays on record — your credibility portfolio.',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" width="18" height="18">
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 5v4.5l2.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Onboarding in 2 minutes',
    desc: 'No tutorials. No explainer videos. You learn by doing. First client link in under 120 seconds.',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" width="18" height="18">
        <path d="M9 2v14M2 9h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Centralized communication',
    desc: 'Say goodbye to searching WhatsApp and email at once. Everything relevant to the project lives in one place.',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" width="18" height="18">
        <path d="M3 12l3-3 3 3 3-3 3 3M3 6h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Features() {
  const ref = useReveal()

  return (
    <section id="features" style={{ padding: '96px 5vw', background: 'var(--bg)' }}>
      <div ref={ref} className="reveal" style={{ maxWidth: 1160, margin: '0 auto' }}>
        <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--purple)', marginBottom: 12 }}>
          Features
        </span>
        <h2 style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.625rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.12, color: 'var(--text-dark)', marginBottom: 16 }}>
          Everything you need,<br />nothing you don't
        </h2>
        <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 520, marginBottom: 48 }}>
          Stamped has no feature tours, tooltips, or setup wizards. Just the workflow that helps you close projects.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 16 }}>
          {features.map(({ title, desc, icon }) => (
            <FeatureCard key={title} title={title} desc={desc} icon={icon} />
          ))}
        </div>
      </div>

      <style>{`
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.55s ease, transform 0.55s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .feat-card:hover { box-shadow: 0 8px 24px rgba(91,33,182,0.07) !important; transform: translateY(-2px) !important; }
      `}</style>
    </section>
  )
}

function FeatureCard({ title, desc, icon }) {
  return (
    <div
      className="feat-card"
      style={{
        background: 'var(--white)', border: '1px solid var(--border)',
        borderRadius: 12, padding: 24,
        transition: 'box-shadow 0.2s, transform 0.2s',
      }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: 'var(--purple-soft)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 16, color: 'var(--purple)',
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 6, letterSpacing: '-0.01em' }}>{title}</h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{desc}</p>
    </div>
  )
}
