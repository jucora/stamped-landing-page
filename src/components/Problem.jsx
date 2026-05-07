import { useReveal } from '../hooks/useReveal'

const before = [
  { emoji: '📱', title: 'Agreements over WhatsApp', desc: "Nobody remembers exactly what was promised" },
  { emoji: '📧', title: 'Approvals over email', desc: 'Endless threads with no clear history' },
  { emoji: '📊', title: 'Deliverables in spreadsheets', desc: 'Outdated versions scattered everywhere' },
  { emoji: '🔍', title: 'No proof of delivery', desc: "Impossible to prove what you completed" },
]

const after = [
  { title: 'Documented projects', desc: 'Clear agreements accessible from day one' },
  { title: 'Tracked deliverables', desc: 'Progress visible to you and your client' },
  { title: 'Recorded approvals', desc: 'Verifiable history of everything approved' },
  { title: 'Verifiable work history', desc: 'Prove every delivery with evidence' },
]

const Check = () => (
  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(124,58,237,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2 2 4-4" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
)

export default function Problem() {
  const ref = useReveal()

  return (
    <section id="problem" style={{ padding: '96px 5vw', background: '#0F0A1E' }}>
      <div ref={ref} style={{ maxWidth: 1160, margin: '0 auto' }}>
        <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#A78BFA', marginBottom: 12 }}>
          The problem
        </span>
        <h2 style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.625rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.12, color: '#fff', marginBottom: 16 }}>
          Your work is scattered<br />across every channel
        </h2>
        <p style={{ fontSize: '1.0625rem', color: '#9474C8', lineHeight: 1.75, maxWidth: 560 }}>
          WhatsApp, email, notes, spreadsheets — a mess that creates misunderstandings and unhappy clients.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, marginTop: 56 }} className="prob-grid">
          {/* Before */}
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F87171', marginBottom: 16 }}>
              Without Stamped
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {before.map(({ emoji, title, desc }) => (
                <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '12px 14px' }}>
                  <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: 1 }}>{emoji}</span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#fff', marginBottom: 2 }}>{title}</strong>
                    <span style={{ fontSize: '0.76rem', color: '#7A6A9A' }}>{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4ADE80', marginBottom: 16 }}>
              With Stamped
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {after.map(({ title, desc }) => (
                <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, background: 'rgba(91,33,182,0.15)', border: '1px solid rgba(124,58,237,0.22)', borderRadius: 10, padding: '12px 14px' }}>
                  <Check />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#fff', marginBottom: 2 }}>{title}</strong>
                    <span style={{ fontSize: '0.76rem', color: '#7A6A9A' }}>{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .prob-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
      `}</style>
    </section>
  )
}
