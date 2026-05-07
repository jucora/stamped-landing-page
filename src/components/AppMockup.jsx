const projects = [
  { name: 'Logo & Branding', client: 'TechCorp Lagos', meta: '3 Deliverables · 0 Pending · Due May 06, 2027', status: 'Completed', statusColor: '#22C55E', statusBg: '#F0FDF4', statusText: '#166534', statusBorder: '#BBF7D0' },
  { name: 'Website Design', client: 'Joke Fashion', meta: '3 Deliverables · 2 Pending · Due Jun 10, 2027', status: 'Active', statusColor: '#6366F1', statusBg: '#EFF6FF', statusText: '#1E40AF', statusBorder: '#BFDBFE' },
  { name: 'Branding', client: "Bayo's Grills", meta: '3 Deliverables · Waiting for Client', status: 'Pending', statusColor: '#F59E0B', statusBg: '#FFFBEB', statusText: '#92400E', statusBorder: '#FDE68A' },
]

export default function AppMockup({ compact = false }) {
  const height = compact ? 290 : 380

  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        background: 'var(--white)', borderRadius: 14,
        border: '1px solid var(--border)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.1), 0 4px 12px rgba(91,33,182,0.06)',
        overflow: 'hidden',
      }}>
        {/* Title bar */}
        <div style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 6 }}>
          {['#FF5F57','#FEBC2E','#28C840'].map(c => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
          ))}
          <span style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginLeft: 6, fontWeight: 500 }}>
            Stamped — Projects
          </span>
        </div>

        {/* Layout */}
        <div style={{ display: 'flex', height }}>
          {/* Sidebar */}
          <div style={{ width: compact ? 160 : 180, background: 'var(--bg)', borderRight: '1px solid var(--border)', padding: '14px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexShrink: 0 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 18 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#EDE9FE"/>
                  <path d="M6.5 9c0-.7.6-1.2 1.3-1.2h4.4a1.2 1.2 0 010 2.4H7.8a1.2 1.2 0 000 2.4h4.4"
                    stroke="#5B21B6" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-dark)' }}>Stamped</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px', borderRadius: 6, background: 'var(--purple-soft)', color: 'var(--purple)', fontSize: '0.78rem', fontWeight: 500 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                  <rect x="8" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                  <rect x="1" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                  <rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                Projects
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--purple-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 700, color: 'var(--purple)' }}>
                JB
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-mid)' }}>Julian B.</span>
            </div>
          </div>

          {/* Main */}
          <div style={{ flex: 1, padding: 14, background: 'var(--bg)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-dark)' }}>Projects</span>
                <div style={{ display: 'flex', gap: 10 }}>
                  {['Active','Pending','Done'].map((t, i) => (
                    <span key={t} style={{ fontSize: '0.68rem', color: i === 0 ? 'var(--text-dark)' : 'var(--text-light)', fontWeight: 500 }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ background: 'var(--purple)', color: '#fff', fontSize: '0.68rem', fontWeight: 600, padding: '5px 10px', borderRadius: 6, whiteSpace: 'nowrap' }}>
                + New Project
              </div>
            </div>

            {projects.map((p) => (
              <div key={p.name} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 12px', marginBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 2 }}>{p.name}</div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: 4 }}>
                      Client: <strong style={{ color: 'var(--text-mid)' }}>{p.client}</strong>
                    </div>
                    <div style={{ fontSize: '0.63rem', color: 'var(--text-light)' }}>{p.meta}</div>
                  </div>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    fontSize: '0.65rem', fontWeight: 500, padding: '3px 7px',
                    borderRadius: 99, whiteSpace: 'nowrap',
                    background: p.statusBg, color: p.statusText, border: `1px solid ${p.statusBorder}`,
                  }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: p.statusColor, display: 'inline-block' }} />
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating detail card */}
      <div style={{
        position: 'absolute', bottom: -14, right: -20,
        background: 'var(--white)', border: '1px solid var(--border)',
        borderRadius: 10, padding: '12px 14px', width: 176,
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        animation: 'floatY 3s ease-in-out infinite',
      }}>
        <style>{`@keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }`}</style>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 7 }}>
          Branding — Bayo's Grills
        </div>
        {[['Deliverables','0/3 done'],['Approvals','0/3'],['Total','₦180,000']].map(([k,v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.63rem', color: 'var(--text-muted)', marginBottom: 3 }}>
            {k} <strong style={{ color: 'var(--text-mid)' }}>{v}</strong>
          </div>
        ))}
        <div style={{ marginTop: 8, background: 'var(--purple)', color: '#fff', fontSize: '0.62rem', fontWeight: 600, padding: '5px 8px', borderRadius: 5, textAlign: 'center' }}>
          Generate Client Link →
        </div>
      </div>
    </div>
  )
}
