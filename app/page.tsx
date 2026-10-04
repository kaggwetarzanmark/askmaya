import type { Metadata } from 'next'
import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Professional Cleaning Services in Kampala, Uganda | Ask Maya',
  description:
    'Ask Maya UGA Cleaning delivers top-rated residential, commercial, and car detailing services across Kampala. Vetted cleaners, supplies included, re-clean guarantee.',
}

const WA = 'https://wa.me/256704834586?text=Hi%20Maya%2C%20I%20need%20a%20cleaning%20quote'

/* ── Service cards (3×2 + mattress = 7 - render 6 on home) ── */
const services = [
  { id: 'domestic-deep-cleaning',     title: 'Domestic Deep Cleaning',  desc: 'Top-to-bottom home scrub - kitchen, bathrooms, bedrooms, floors.', price: 'UGX 80,000',  img: 'https://images.pexels.com/photos/4239038/pexels-photo-4239038.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Cleaner scrubbing a kitchen counter' },
  { id: 'mattress-deep-cleaning',     title: 'Mattress Deep Cleaning',  desc: 'Better sleep: dust mites, stains and odours removed.',             price: '[PRICE]',      img: 'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Mattress being professionally cleaned' },
  { id: 'post-construction-cleaning', title: 'Post-Construction',       desc: 'Dust extraction, cement residue, paint scraping and final detail.', price: 'UGX 150,000', img: 'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Post-construction cleaning in progress' },
]

const bandItems = ['Domestic', 'Office', 'Sofa', 'Mattress', 'Carpet', 'Post-Construction', 'Events', 'Car']

const steps = [
  { n: '1', title: 'Get a quote',      body: 'Call or WhatsApp us. We confirm your price and slot within the hour.' },
  { n: '2', title: 'We arrive on time', body: 'Vetted, uniformed team arrives with all supplies. Nothing to prepare.' },
  { n: '3', title: 'Enjoy the clean',  body: 'Walk back into a spotless space. Not satisfied? We re-clean free.' },
]

const testimonials = [
  { quote: "Maya's team cleaned our Kololo office before we opened. Floors were mirror-clean and the bathrooms smelled brand new. Will book every month.", name: 'Sandra N.', area: 'Kololo' },
  { quote: 'The team was professional and thorough. My sofa looks like it just arrived from the shop.', name: 'Brian M.', area: 'Ntinda' },
  { quote: 'Post-construction cleaning done in one day - cement dust, paint splatters, all gone. Ready for photos the same evening.', name: 'Patience K.', area: 'Nakawa' },
]

const faqs = [
  { q: 'What areas do you serve?', a: 'We serve all Kampala neighbourhoods including Ntinda, Kololo, Nakawa, Bukoto, Bugolobi, Muyenga and greater Kampala. Call us if you are outside these zones.' },
  { q: 'Do you bring your own supplies?', a: 'Yes. Supplies, equipment and eco-friendly products are always included. You do not need to buy or prepare anything.' },
  { q: 'How much does a clean cost?', a: 'Prices vary by service and space size. Domestic deep cleaning starts from UGX 80,000. WhatsApp us for a free exact quote.' },
  { q: 'Can I book same-day?', a: 'Yes, subject to availability. WhatsApp us on +256 704 834 586 and we will confirm within 30 minutes.' },
  { q: 'What if I am not happy?', a: 'We return and re-clean any area you flag within 24 hours - at no extra charge.' },
  { q: 'Do you clean offices?', a: 'Yes. Regular and one-time commercial packages scheduled around your operating hours - early mornings, evenings or weekends.' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-inner">
          {/* Copy */}
          <div className="hero-copy">
            <h1>
              Relax. We&apos;ll Handle<br />
              <em>the Mess.</em>
            </h1>
            <p style={{ fontSize: 18 }}>
              Professional deep cleaning for homes, offices, and cars across Kampala. Our vetted team brings all the supplies, backed by a 100% re-clean guarantee. Expect zero stress and no hidden fees, just sparkling results.
            </p>
            <div className="hero-btns">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Get a free quote
              </a>
              <Link href="/services" className="btn btn-outline">
                View services
              </Link>
            </div>
            <p className="hero-stars">
              <span>★★★★★</span> Trusted by 200+ Kampala homes &amp; offices
            </p>
          </div>

          {/* Hex cluster */}
          {/* Photo collage — tilted cards with white border + shadow */}
          <div className="hero-collage" style={{ position: 'relative', width: '100%', height: 480, flexShrink: 0 }} aria-hidden="true">

            {/* Card 1 — home cleaning, top left */}
            <div className="collage-card-1" style={{ position: 'absolute', left: 0, top: 0, transform: 'rotate(-5deg)', border: '10px solid #fff', boxShadow: '0 14px 30px rgba(8,45,60,0.22)', borderRadius: 6, overflow: 'hidden' }}>
              <div style={{ width: 270, height: 325 }}>
                <img src="https://images.pexels.com/photos/4239038/pexels-photo-4239038.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>

            {/* Card 2 — office, top right */}
            <div className="collage-card-2" style={{ position: 'absolute', right: 0, top: 50, transform: 'rotate(4deg)', border: '10px solid #fff', boxShadow: '0 14px 30px rgba(8,45,60,0.22)', borderRadius: 6, overflow: 'hidden' }}>
              <div style={{ width: 250, height: 290 }}>
                <img src="https://images.pexels.com/photos/6197117/pexels-photo-6197117.jpeg?auto=compress&cs=tinysrgb&w=600&h=650&fit=crop" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>

            {/* Card 3 — car wash, bottom centre */}
            <div className="collage-card-3" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%) rotate(-2deg)', top: 310, border: '10px solid #fff', boxShadow: '0 14px 30px rgba(8,45,60,0.22)', borderRadius: 6, overflow: 'hidden' }}>
              <div style={{ width: 280, height: 215 }}>
                <img src="https://images.pexels.com/photos/6873087/pexels-photo-6873087.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>

            {/* Coral badge — bottom right */}
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
        </div>
      </section>

      {/* ── Service band ─────────────────────────────────── */}
      <div className="service-band" aria-label="Our services">
        <div className="service-band__track">
          {[...bandItems, ...bandItems].map((item, i) => (
            <span key={i} className="service-band__item">{item}</span>
          ))}
        </div>
      </div>

      {/* ── Services 3×2 grid ────────────────────────────── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="center" style={{ marginBottom: 48 }}>
            <h2>Cleaning for every space</h2>
            <p style={{ marginTop: 12 }}>
              Select any service to see what&apos;s included and get a quote.
            </p>
          </div>
          <div className="grid-3">
            {services.map((s) => (
              <Link key={s.id} href={`/services/${s.id}`} className="svc-card">
                <div className="svc-card__img">
                  <img src={s.img} alt={s.alt} loading="lazy" />
                </div>
                <div className="svc-card__body">
                  <p className="svc-card__title">{s.title}</p>
                  <p className="svc-card__desc">{s.desc}</p>
                  <div className="svc-card__footer">
                    <span className="svc-card__price">From {s.price}</span>
                    <span className="svc-card__cta">View details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="center" style={{ marginTop: 40 }}>
            <Link href="/services" className="btn btn-outline">See all services</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-band">
        <div className="container">
          <div className="stats-layout">
            <div className="stats-hero">
              <div className="stats-hero-number">200+</div>
              <p className="stats-hero-label">Happy clients</p>
            </div>
            <div className="stats-divider" aria-hidden="true" />
            <div className="stats-rows">
              {[
                { n: '3+',   label: 'Years in Kampala' },
                { n: '9',    label: 'Service types' },
                { n: '100%', label: 'Re-clean guarantee' },
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

      {/* ── About ─────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-hex">
              <div style={{
                position: 'relative',
                display: 'inline-block',
                transform: 'rotate(-3deg)',
                border: '10px solid #fff',
                boxShadow: '0 14px 30px rgba(8,45,60,0.22)',
                borderRadius: 6,
                overflow: 'hidden',
                width: '100%',
                maxWidth: 420,
              }}>
                <img
                  src="https://images.pexels.com/photos/6195114/pexels-photo-6195114.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Ask Maya cleaning team at work"
                  loading="lazy"
                  style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <span className="label-tag">About Ask Maya</span>
              <h2>A cleaning business built on trust</h2>
              <p style={{ fontSize: 17 }}>
                Maya started Ask Maya UGA Cleaning with one mission: give Kampala homes and offices the reliable, thorough clean they deserve - without the guesswork. Every cleaner is vetted, trained and uniformed. Every booking includes supplies. Every job is backed by our re-clean guarantee.
              </p>
              <ul className="tick-list">
                <li>Vetted, background-checked cleaners</li>
                <li>Professional equipment and eco-friendly products</li>
                <li>Flexible scheduling - mornings, evenings, weekends</li>
                <li>WhatsApp support for easy communication</li>
              </ul>
              <div style={{ marginTop: 8 }}>
                <Link href="/about" className="btn btn-outline">Meet the team</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="center" style={{ marginBottom: 48 }}>
            <h2>How it works</h2>
            <p style={{ marginTop: 12 }}>Three simple steps to a spotless space.</p>
          </div>
          <div className="hiw-wrap">
            <div className="hiw-grid">
              {steps.map((step, i) => (
                <div key={step.n} className="hiw-step">
                  <div className="hiw-num">0{i + 1}</div>
                  <div className="hiw-step-text">
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery preview ───────────────────────────────── */}
      {/* ── Instagram feed ───────────────────────────────── */}
      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="center" style={{ marginBottom: 48 }}>
            <h2>What our clients say</h2>
          </div>
          <div className="testi-grid">
            {testimonials.map((t) => (
              <div key={t.name} className="testi-card">
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">{t.quote}</p>
                <div className="testi-who">
                  <span className="testi-avatar">{t.name[0]}</span>
                  <span>{t.name} · {t.area}, Kampala</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Areas ─────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container center">
          <h2>Areas we serve in Kampala</h2>
          <p style={{ marginTop: 12, marginBottom: 32 }}>Based in Ntinda, we cover the entire city and beyond.</p>
          <div className="area-list">
            {['Ntinda','Kololo','Nakawa','Bukoto','Bugolobi','Muyenga','Naguru','Kamwokya','Kisementi','Kansanga','Naalya','Kyanja','Mutungo','Kabalagala'].map((a) => (
              <span key={a} className="area-chip">{a}</span>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link href="/contact" className="btn btn-outline">Check your area</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="center" style={{ marginBottom: 48 }}>
            <h2>Frequently asked questions</h2>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── CTA panel ─────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="panel-cta">
            <h2>Ready for a spotless space?</h2>
            <p>WhatsApp us and we confirm your price within the hour.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              WhatsApp us
            </a>
            <span className="cta-sign">With care, Maya</span>
          </div>
        </div>
      </section>
    </>
  )
}

