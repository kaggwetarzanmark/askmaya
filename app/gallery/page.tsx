import type { Metadata } from 'next'
import CtaPanel from '@/components/CtaPanel'

export const metadata: Metadata = {
  title: 'Gallery | Ask Maya UGA Cleaning Kampala',
  description: 'See real results from Ask Maya UGA Cleaning - homes, offices, sofas, carpets and cars cleaned across Kampala, Uganda.',
}

const items = [
  { src: 'https://images.pexels.com/photos/4239038/pexels-photo-4239038.jpeg?auto=compress&cs=tinysrgb&w=700',  alt: 'Kitchen deep clean', cat: 'Residential' },
  { src: 'https://images.pexels.com/photos/6195114/pexels-photo-6195114.jpeg?auto=compress&cs=tinysrgb&w=700',  alt: 'Cleaner at work in a bright home', cat: 'Residential' },
  { src: 'https://images.pexels.com/photos/6195116/pexels-photo-6195116.jpeg?auto=compress&cs=tinysrgb&w=700',  alt: 'Bathroom deep clean', cat: 'Residential' },
  { src: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=700',  alt: 'Living room after deep clean', cat: 'Residential' },
  { src: 'https://images.pexels.com/photos/6195121/pexels-photo-6195121.jpeg?auto=compress&cs=tinysrgb&w=700',  alt: 'Sofa after shampooing', cat: 'Upholstery' },
  { src: 'https://images.pexels.com/photos/6195123/pexels-photo-6195123.jpeg?auto=compress&cs=tinysrgb&w=700',  alt: 'Armchair cleaned and refreshed', cat: 'Upholstery' },
  { src: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=700',  alt: 'Carpet extraction cleaning', cat: 'Carpet' },
  { src: 'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=700',  alt: 'Mattress being cleaned', cat: 'Mattress' },
  { src: 'https://images.pexels.com/photos/6197117/pexels-photo-6197117.jpeg?auto=compress&cs=tinysrgb&w=700',  alt: 'Office after cleaning', cat: 'Commercial' },
  { src: 'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=700',  alt: 'Post-construction cleaning', cat: 'Post-Construction' },
  { src: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=700',   alt: 'Event venue prepared', cat: 'Events' },
  { src: 'https://images.pexels.com/photos/6873087/pexels-photo-6873087.jpeg?auto=compress&cs=tinysrgb&w=700', alt: 'Car interior detailed', cat: 'Car Detailing' },
]

export default function GalleryPage() {
  return (
    <>
      <section className="svc-hero">
        <div className="container">
          <span className="label-tag">Our work</span>
          <h1 style={{ marginTop: 12 }}>Gallery</h1>
          <p style={{ fontSize: 19, marginTop: 16, maxWidth: '42rem' }}>
            Real results from Kampala homes, offices and vehicles. Our work speaks for itself.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="gallery-grid">
            {items.map((item) => (
              <div key={item.src} className="gallery-item" style={{ position: 'relative' }}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span style={{ position: 'absolute', top: 10, left: 10, background: 'var(--navy)', color: '#fff', fontSize: 11, fontWeight: 600, fontFamily: 'var(--font-label)', padding: '4px 10px', borderRadius: 999, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  {item.cat}
                </span>
              </div>
            ))}
          </div>

          <div className="center" style={{ marginTop: 48 }}>
            <div style={{ background: 'var(--bg)', borderRadius: 'var(--radius-card)', padding: '32px 48px', display: 'inline-block', textAlign: 'center' }}>
              <p style={{ fontWeight: 700, fontSize: 18, color: 'var(--navy)', marginBottom: 8 }}>See more on Instagram</p>
              <p style={{ marginBottom: 20 }}>Follow <strong>@askmayaug</strong> for regular before &amp; after updates.</p>
              <a href="https://www.instagram.com/askmayaug" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Follow @askmayaug</a>
            </div>
          </div>
        </div>
      </section>

      <CtaPanel heading="Like what you see?" body="Get the same results. WhatsApp us for a free quote." />
    </>
  )
}

