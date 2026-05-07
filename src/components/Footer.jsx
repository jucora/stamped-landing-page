import stampedLogo from '../assets/stamped_logo.png'

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
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img
          src={stampedLogo}
          alt="Stamped logo"
          style={{ width: 120, height: 120, objectFit: 'contain' }}
        />
      </div>
      <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.28)' }}>
        Define, track, and prove your freelance work.
      </p>
      <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.28)' }}>
        © 2026 Julian Belmonte | Stamped. All rights reserved.
      </p>
    </footer>
  )
}
