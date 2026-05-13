import { useReveal } from '../hooks/useReveal'

const projects = [
  { name: 'Logo & Branding', client: 'TechCorp Lagos', meta1: '3 Deliverables · 0 Pending', meta2: 'Due date: May 06, 2027', status: 'Completed', dot: '#22C55E', tc: '#166534' },
  { name: 'Website Design', client: 'Joke Fashion', meta1: '3 Deliverables · 2 Pending', meta2: 'Due date: Jun 10, 2027', status: 'Active', dot: '#6366F1', tc: '#1E40AF' },
  { name: 'Branding', client: "Bayo's Grills", meta1: '3 Deliverables · Waiting for Client', meta2: 'Due date: Jul 30, 2027', status: 'Pending', dot: '#F59E0B', tc: '#92400E' },
]

export default function DashboardMockUp() {
  const ref = useReveal()

  return (
    <section style={{ background: 'var(--bg)' }} className="pt-30 pb-10 px-[10%]">
      <div ref={ref} className="reveal" style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ borderRadius: 14, border: '1px solid var(--border)', boxShadow: '0 20px 60px rgba(0,0,0,0.08)', overflow: 'hidden', background: 'var(--white)' }}>
          {/* Title bar */}
          <div style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 6 }}>
            {['#FF5F57','#FEBC2E','#28C840'].map(c => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
            ))}
            <span style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginLeft: 8, fontWeight: 500 }}>Stamped — Dashboard</span>
          </div>

          <div style={{ display: 'flex' }} className="dash-layout">
            {/* Sidebar */}
            <div style={{ width: 220, background: 'var(--bg)', borderRight: '1px solid var(--border)', padding: '20px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexShrink: 0 }} className="dash-sidebar">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, padding: '0 4px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#EDE9FE"/>
                    <path d="M8 11.5c0-.9.7-1.6 1.6-1.6H15a1.6 1.6 0 010 3.2H9.6A1.6 1.6 0 018 14.7c0 .9.7 1.6 1.6 1.6H15"
                      stroke="#5B21B6" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)' }}>Stamped</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 7, background: 'var(--purple-soft)', color: 'var(--purple)', fontSize: '0.8125rem', fontWeight: 500 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                    <rect x="9" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                    <rect x="1" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                    <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                  </svg>
                  Projects
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 4px' }}>
                  <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--purple-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, color: 'var(--purple)' }}>JB</div>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-mid)' }}>Julian Belmonte</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: '#EF4444', marginTop: 6, padding: '0 4px', cursor: 'pointer' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 7h7M9 4l3 3-3 3M5 2H2v10h3" stroke="#EF4444" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Sign Out
                </div>
              </div>
            </div>

            {/* Main */}
            <div style={{ flex: 1, padding: '20px 24px', background: 'var(--bg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)' }}>Projects</span>
                  <div style={{ display: 'flex', gap: 16 }}>
                    {['Pending','Active','Completed'].map((t, i) => (
                      <span key={t} style={{ fontSize: '0.8125rem', fontWeight: 500, color: i === 0 ? 'var(--text-dark)' : 'var(--text-light)', paddingBottom: 2, borderBottom: i === 0 ? '1.5px solid var(--text-dark)' : 'none' }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ background: 'var(--purple)', color: '#fff', fontSize: '0.8125rem', fontWeight: 600, padding: '8px 16px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
                  + New Project
                </div>
              </div>

              {projects.map((p) => (
                <div key={p.name} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 10, padding: '16px 20px', marginBottom: 10, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
                  <div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 4 }}>{p.name}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: 8 }}>Client: <strong style={{ color: 'var(--text-mid)' }}>{p.client}</strong></div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <span>{p.meta1}</span>
                      <span>{p.meta2}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', fontWeight: 500, color: p.tc, whiteSpace: 'nowrap' }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: p.dot, flexShrink: 0 }} />
                    {p.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.55s ease, transform 0.55s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        @media (max-width: 640px) { .dash-sidebar { display: none !important; } }
      `}</style>
    </section>
  )
}
