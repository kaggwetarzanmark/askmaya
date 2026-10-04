import Link from 'next/link'
import FaqSection from '@/components/FaqSection'
import CtaPanel from '@/components/CtaPanel'

export interface ServicePageData {
  slug: string
  name: string
  price: string
  tagline: string
  description: string
  image: string
  imageAlt: string
  includes: string[]
  steps: { title: string; body: string }[]
  faqs: { q: string; a: string }[]
  related: { name: string; slug: string }[]
}

export default function ServicePage({ data }: { data: ServicePageData }) {
  const waMsg = encodeURIComponent(`Hi Maya, I'd like a quote for ${data.name}`)

  return (
    <>
      {/* Hero */}
      <section className="svc-hero">
        <div className="container">
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--text-muted)', marginBottom: 24, flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--teal-ink)' }}>Home</Link>
            <span>›</span>
            <Link href="/services" style={{ color: 'var(--teal-ink)' }}>Services</Link>
            <span>›</span>
            <span>{data.name}</span>
          </nav>
          <h1>{data.name}</h1>
          <p style={{ fontSize: 19, marginTop: 16, maxWidth: '42rem' }}>{data.tagline}</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <a href={`https://wa.me/256704834586?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Get a quote on WhatsApp
            </a>
            <a href="tel:+256704834586" className="btn btn-outline">Call us</a>
          </div>
          <p style={{ marginTop: 16, fontWeight: 700, color: 'var(--teal-ink)', fontSize: 20 }}>{data.price}</p>
        </div>
      </section>

      {/* Image + description */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 64, alignItems: 'center' }}>
            <div className="photo-hex" style={{ aspectRatio: '1 / 1.155', maxWidth: 440, margin: '0 auto' }}>
              <img src={data.image} alt={data.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <span className="label-tag">About this service</span>
              <h2 style={{ marginTop: 8 }}>What we do</h2>
              <p style={{ fontSize: 17, marginTop: 16 }}>{data.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="center" style={{ marginBottom: 40 }}>
            <h2>What&apos;s included in every visit</h2>
          </div>
          <ul className="include-list">
            {data.includes.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      {/* Steps */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="center" style={{ marginBottom: 48 }}>
            <h2>How it works</h2>
          </div>
          <div className="hiw-grid">
            {data.steps.map((step, i) => (
              <div key={step.title} className="hiw-step">
                <div className="hiw-num">{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={data.faqs} heading={`Questions about ${data.name.toLowerCase()}`} />

      {/* Related */}
      {data.related.length > 0 && (
        <section className="section" style={{ background: 'var(--surface)' }}>
          <div className="container center">
            <h2 style={{ marginBottom: 24 }}>You might also need</h2>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              {data.related.map((r) => (
                <Link key={r.slug} href={`/services/${r.slug}`} className="related-chip">{r.name}</Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaPanel />
    </>
  )
}
