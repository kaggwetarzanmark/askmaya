import type { Metadata } from 'next'
import Link from 'next/link'
import CtaPanel from '@/components/CtaPanel'

export const metadata: Metadata = {
  title: 'About Ask Maya UGA Cleaning | Kampala',
  description: 'Meet Maya and the Ask Maya UGA Cleaning team. A Kampala-based cleaning business built on trust, trained professionals, and a genuine passion for clean, healthy spaces.',
  openGraph: { title: 'About Ask Maya UGA Cleaning | Kampala', url: 'https://askmayaug.com/about' },
}

const values = [
  { title: 'Trust first',         body: 'Every cleaner is vetted and background-checked before entering a client\'s home.' },
  { title: 'Consistent quality',  body: 'Professional-grade equipment and carefully chosen products on every job.' },
  { title: 'Clear communication', body: 'We confirm your price before we start and are reachable on WhatsApp throughout.' },
  { title: 'Your guarantee',      body: 'Not right? Tell us within 24 hours. We return and fix it - free.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="svc-hero">
        <div className="container">
          <span className="label-tag">Our story</span>
          <h1 style={{ marginTop: 12 }}>A cleaning business built on trust</h1>
          <p style={{ fontSize: 19, marginTop: 16, maxWidth: '42rem' }}>
            Ask Maya UGA Cleaning started with one idea: give Kampala homes and offices the thorough, reliable clean they deserve.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 64, alignItems: 'center' }}>
            <div className="photo-hex" style={{ aspectRatio: '1/1.155', maxWidth: 440, margin: '0 auto' }}>
              <img src="https://images.pexels.com/photos/6195114/pexels-photo-6195114.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Ask Maya cleaning professional at work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <span className="label-tag">How it started</span>
              <h2>Maya&apos;s story</h2>
              <p style={{ fontSize: 17 }}>Maya grew up watching her mother keep their home immaculate with very little - and understood early that a clean space makes life better. When she started Ask Maya UGA Cleaning, she had one standard: every home we clean should feel the way a home is supposed to feel.</p>
              <p style={{ fontSize: 17 }}>That meant training her team properly, showing up on time, using products that actually work, and standing behind the results. Word spread through Ntinda, then Kololo, then across Kampala. Today, Ask Maya serves over 200 households and offices - with the same standard Maya set from day one.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="center" style={{ marginBottom: 48 }}>
            <h2>What we stand for</h2>
          </div>
          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {values.map((v) => (
              <div key={v.title} style={{ background: 'var(--surface)', borderRadius: 'var(--radius-card)', padding: 28, borderTop: '5px solid var(--teal)', boxShadow: 'var(--shadow-card)' }}>
                <h3 style={{ fontSize: 18 }}>{v.title}</h3>
                <p style={{ marginTop: 12 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--teal)' }}>
        <div className="container">
          <div className="stats-layout">
            <div className="stats-hero">
              <div className="stats-hero-number">200+</div>
              <p className="stats-hero-label">Clients served</p>
            </div>
            <div className="stats-divider" aria-hidden="true" />
            <div className="stats-rows">
              {[
                { n: '3+',   label: 'Years in Kampala' },
                { n: '9',    label: 'Services offered' },
                { n: '100%', label: 'Satisfaction guarantee' },
              ].map((s) => (
                <div key={s.label} className="stats-row">
                  <span className="stats-row-label">{s.label}</span>
                  <span className="stats-row-number">{s.n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container center">
          <h2 style={{ marginBottom: 32 }}>Why clients trust us</h2>
          <div className="grid-3">
            {[
              { title: 'Background-checked cleaners', body: 'Every team member is vetted before joining. We know who is in your home.' },
              { title: 'Professional training',       body: 'Our cleaners are trained in residential, commercial and specialist techniques.' },
              { title: 'Supplies always included',    body: 'We arrive fully equipped. You never need to buy cleaning products.' },
              { title: 'Flexible scheduling',         body: 'Morning, evening or weekend - we work around your life.' },
              { title: 'WhatsApp-first',              body: 'Book, confirm and reach us on WhatsApp. Fast, simple, no call queues.' },
              { title: 'Re-clean guarantee',          body: 'Not satisfied? Flag it within 24 hours and we return free of charge.' },
            ].map((item) => (
              <div key={item.title} style={{ background: 'var(--surface)', borderRadius: 'var(--radius-card)', padding: 28, boxShadow: 'var(--shadow-card)', textAlign: 'left' }}>
                <h3 style={{ fontSize: 18 }}>{item.title}</h3>
                <p style={{ marginTop: 8 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaPanel heading="Work with a team you can trust" body="Book your first clean today and see the Ask Maya difference." />
    </>
  )
}

