'use client'
import { useEffect, useState } from 'react'

export default function HeroCollage() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const check = () => setShow(window.innerWidth > 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (!show) return null

  return (
    <div className="hero-collage" style={{ position: 'relative', width: '100%', height: 480, flexShrink: 0 }} aria-hidden="true">

      <div className="collage-card-1" style={{ position: 'absolute', left: 0, top: 0, transform: 'rotate(-5deg)', border: '10px solid #fff', boxShadow: '0 14px 30px rgba(8,45,60,0.22)', borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ width: 270, height: 325 }}>
          <img src="https://images.pexels.com/photos/4239038/pexels-photo-4239038.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </div>

      <div className="collage-card-2" style={{ position: 'absolute', right: 0, top: 50, transform: 'rotate(4deg)', border: '10px solid #fff', boxShadow: '0 14px 30px rgba(8,45,60,0.22)', borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ width: 250, height: 290 }}>
          <img src="https://images.pexels.com/photos/6197117/pexels-photo-6197117.jpeg?auto=compress&cs=tinysrgb&w=600&h=650&fit=crop" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </div>

      <div className="collage-card-3" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%) rotate(-2deg)', top: 310, border: '10px solid #fff', boxShadow: '0 14px 30px rgba(8,45,60,0.22)', borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ width: 280, height: 215 }}>
          <img src="https://images.pexels.com/photos/6873087/pexels-photo-6873087.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </div>

      <div className="collage-badge" style={{
        position: 'absolute', right: 0, bottom: 10,
        width: 130, height: 130, borderRadius: '50%',
        background: 'var(--coral)', color: 'var(--navy)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', fontWeight: 800, fontSize: 15, lineHeight: 1.2,
        padding: 16, boxSizing: 'border-box',
        fontFamily: 'var(--font-body)',
        transform: 'rotate(12deg)',
        boxShadow: '0 8px 24px rgba(8,45,60,0.18)',
      }}>
        100% re-clean guarantee
      </div>

    </div>
  )
}
