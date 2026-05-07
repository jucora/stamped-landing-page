export default function Footer() {
  return (
    <footer style={{
      background: '#080514',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '28px 5vw',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap', gap: 12,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="11" fill="#2D1B69"/>
          <path d="M7 10.2c0-.8.6-1.4 1.4-1.4h5a1.4 1.4 0 010 2.8h-5A1.4 1.4 0 006 13c0 .8.6 1.4 1.4 1.4h5"
            stroke="#A78BFA" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
        <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'rgba(255,255,255,0.65)' }}>Stamped</span>
      </div>
      <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.28)' }}>
        Define, track, and prove your freelance work.
      </p>
      <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.28)' }}>
        © 2025 Stamped. All rights reserved.
      </p>
    </footer>
  )
}
