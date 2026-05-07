import { useReveal } from '../hooks/useReveal'

const metrics = [
  { val: '<120s', label: 'Time to first client link' },
  { val: '0', label: 'Tutorials required' },
  { val: '1', label: 'Link for your client to join' },
  { val: '∞', label: 'Verifiable work history' },
]

export default function Metrics() {
  const ref = useReveal()

  return (
    <section style={{ padding: '96px 5vw', background: 'var(--purple)' }}>
      <div ref={ref} className="reveal" style={{ maxWidth: 1160, margin: '0 auto', textAlign: 'center' }}>
        <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#C4B5FD', marginBottom: 12 }}>
          Built for results
        </span>
        <h2 style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.625rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.12, color: '#fff', marginBottom: 16 }}>
          Designed to reduce friction
        </h2>
        <p style={{ fontSize: '1.0625rem', color: '#C4B5FD', lineHeight: 1.75, maxWidth: 520, margin: '0 auto 48px' }}>
          Every product decision is focused on reducing friction and driving real workflow adoption.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))', gap: 16 }}>
          {metrics.map(({ val, label }) => (
            <div key={label} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 12, padding: '24px 20px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 6 }}>
                {val}
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#C4B5FD' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`.reveal{opacity:0;transform:translateY(20px);transition:opacity .55s ease,transform .55s ease}.reveal.visible{opacity:1;transform:translateY(0)}`}</style>
    </section>
  )
}
