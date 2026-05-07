import { useReveal } from '../hooks/useReveal'

const steps = [
  { num: '1', title: 'Start', desc: 'Create your account and define your first project — name, client, key deliverables. Done in under 60 seconds.' },
  { num: '2', title: 'Manage', desc: 'Generate a unique link for your client. They can view progress, approve deliverables, and leave comments — no account needed.', featured: true },
  { num: '3', title: 'Complete', desc: 'Mark deliverables as done. Build a verifiable history of all your freelance work over time.' },
]

export default function HowItWorks() {
  const ref = useReveal()

  return (
    <section id="how" style={{ padding: '96px 5vw', background: 'var(--white)' }}>
      <div ref={ref} className="reveal" style={{ maxWidth: 1160, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--purple)', marginBottom: 12 }}>
            How it works
          </span>
          <h2 style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.625rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.12, color: 'var(--text-dark)', marginBottom: 16 }}>
            Start → Manage → Complete
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>
            Three steps. No tutorials. No wizards. You learn by doing.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32, position: 'relative', marginBottom: 56 }} className="steps-grid">
          <div style={{ position: 'absolute', top: 28, left: 'calc(33.33% + 16px)', right: 'calc(33.33% + 16px)', height: 1, background: 'var(--purple-border)', zIndex: 0 }} className="steps-line" />
          {steps.map(({ num, title, desc, featured }) => (
            <div key={num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                border: featured ? 'none' : '1.5px solid var(--purple-border)',
                background: featured ? 'var(--purple)' : 'var(--white)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', fontWeight: 800,
                color: featured ? '#fff' : 'var(--purple)',
                marginBottom: 20,
              }}>
                {num}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 8, letterSpacing: '-0.01em' }}>{title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Time banner */}
        <div style={{
          borderRadius: 14, background: 'var(--purple)',
          padding: '40px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 32, flexWrap: 'wrap',
        }}>
          <div>
            <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#fff', marginBottom: 6, letterSpacing: '-0.02em' }}>
              Time to your first client link
            </h3>
            <p style={{ fontSize: '0.9375rem', color: '#C4B5FD' }}>
              From sign-up to sharing your project. No friction, no setup wizards.
            </p>
          </div>
          <div style={{ fontSize: '4.5rem', fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em', whiteSpace: 'nowrap' }}>
            120<sub style={{ fontSize: '1.25rem', color: '#A78BFA', fontWeight: 600, verticalAlign: 'middle', marginLeft: 4 }}>sec</sub>
          </div>
        </div>
      </div>

      <style>{`
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.55s ease, transform 0.55s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .steps-line { display: none !important; }
        }
      `}</style>
    </section>
  )
}
