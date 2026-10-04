import type { Metadata } from 'next'
import Link from 'next/link'
import CtaPanel from '@/components/CtaPanel'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'Cleaning Service Prices in Kampala | Ask Maya',
  description: 'Transparent cleaning prices in Kampala. Domestic, sofa, carpet, mattress, office, post-construction, events and car detailing prices from Ask Maya UGA Cleaning.',
}

const residential = [
  { name: 'Domestic Deep Cleaning', price: 'From UGX 80,000', unit: 'per visit', href: '/services/domestic-deep-cleaning', features: ['Full home: kitchen, bathrooms, bedrooms, living areas','Floors vacuumed and mopped throughout','All supplies and equipment included'] },
  { name: 'Mattress Deep Cleaning', price: 'From UGX [PRICE]', unit: 'per mattress', href: '/services/mattress-deep-cleaning', features: ['Hot-water extraction','UV sanitisation','Odour treatment'], note: 'TODO: confirm price with client' },
  { name: 'Sofa & Upholstery',      price: 'From UGX 50,000',  unit: 'per 3-seater', href: '/services/sofa-upholstery-cleaning', features: ['Dry vacuuming + stain pre-treatment','Hot-water extraction','Odour neutralising treatment'] },
  { name: 'Carpet & Rug Cleaning',  price: 'From UGX 40,000',  unit: 'per rug',      href: '/services/carpet-rug-cleaning', features: ['Dry vacuuming before wash','Hot-water extraction','Deodorising and sanitising'] },
]

const commercial = [
  { service: 'Office Cleaning (one-time)',          price: 'From UGX 120,000', href: '/services/office-cleaning' },
  { service: 'Office Cleaning (monthly contract)',  price: 'Custom quote',     href: '/services/office-cleaning' },
  { service: 'Post-Construction Cleaning',          price: 'From UGX 150,000', href: '/services/post-construction-cleaning' },
  { service: 'Events Cleanup (pre or post)',        price: 'From UGX 100,000', href: '/services/events-cleanup' },
  { service: 'Events Cleanup (pre + post package)', price: 'From UGX 180,000', href: '/services/events-cleanup' },
]

const vehicle = [
  { service: 'Bay Car Detailing (salon car)',       price: 'From UGX 60,000',  href: '/services/car-detailing' },
  { service: 'Bay Car Detailing (SUV / minivan)',   price: 'From UGX 80,000',  href: '/services/car-detailing' },
  { service: 'Mobile Car Detailing (salon car)',    price: 'From UGX 75,000',  href: '/services/mobile-car-detailing' },
  { service: 'Mobile Car Detailing (SUV / minivan)',price: 'From UGX 95,000',  href: '/services/mobile-car-detailing' },
]

const faqs = [
  { q: 'Are these prices fixed?', a: 'These are starting prices. Your exact price depends on home size, dirt level and add-ons. We confirm the exact price before we start.' },
  { q: 'Are supplies included?', a: 'Yes. All cleaning products and equipment are included in every booking.' },
  { q: 'How do I get a quote?', a: 'WhatsApp us on +256 704 834 586 or use the contact form. We confirm pricing quickly.' },
  { q: 'Do you discount recurring bookings?', a: 'Yes. Clients on weekly or bi-weekly plans receive a discount versus one-off rates.' },
  { q: 'How do I pay?', a: 'Cash, MTN MoMo or Airtel Money on the day of service. No upfront payment required.' },
]

export default function PricingPage() {
  return (
    <>
      <section className="svc-hero">
        <div className="container">
          <span className="label-tag">Clear, honest pricing</span>
          <h1 style={{ marginTop: 12 }}>What our services cost</h1>
          <p style={{ fontSize: 19, marginTop: 16, maxWidth: '42rem' }}>
            No hidden fees. We confirm your exact price before we start. All supplies included.
          </p>
        </div>
      </section>

      {/* Residential cards */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <span className="label-tag" style={{ marginBottom: 24 }}>Residential services</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {residential.map((plan) => (
              <div key={plan.name} style={{ background: 'var(--surface)', borderRadius: 'var(--radius-card)', borderTop: '5px solid var(--teal)', padding: 28, boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: 18 }}>{plan.name}</h3>
                <div style={{ margin: '16px 0 4px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'var(--teal-ink)', letterSpacing: '-0.02em' }}>{plan.price}</div>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{plan.unit}</span>
                {plan.note && <p style={{ marginTop: 8, fontSize: 12, color: 'var(--coral)', fontWeight: 600 }}>⚠ {plan.note}</p>}
                <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: 'flex', gap: 8, fontSize: 14, color: 'var(--text-muted)' }}>
                      <span style={{ color: 'var(--teal)', fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/256704834586?text=Hi%20Maya%2C%20I%20want%20to%20book%20${encodeURIComponent(plan.name)}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 'auto' }}>
                  Get a quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial table */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <span className="label-tag" style={{ marginBottom: 24 }}>Commercial &amp; events</span>
          <div style={{ maxWidth: 720 }}>
            {commercial.map((row) => (
              <div key={row.service} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid var(--line)', gap: 16, flexWrap: 'wrap' }}>
                <Link href={row.href} style={{ fontWeight: 600, color: 'var(--navy)', fontSize: 16 }}>{row.service}</Link>
                <span style={{ fontWeight: 700, color: 'var(--teal-ink)', whiteSpace: 'nowrap' }}>{row.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle table */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <span className="label-tag" style={{ marginBottom: 24 }}>Vehicle care</span>
          <div style={{ maxWidth: 720 }}>
            {vehicle.map((row) => (
              <div key={row.service} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid var(--line)', gap: 16, flexWrap: 'wrap' }}>
                <Link href={row.href} style={{ fontWeight: 600, color: 'var(--navy)', fontSize: 16 }}>{row.service}</Link>
                <span style={{ fontWeight: 700, color: 'var(--teal-ink)', whiteSpace: 'nowrap' }}>{row.price}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, maxWidth: 720 }}>
            <div style={{ background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 'var(--radius-card)', padding: '16px 20px', fontSize: 14, color: 'var(--text-muted)' }}>
              Prices shown are starting rates. Your confirmed price is given before any work begins. Payment: cash, MTN MoMo or Airtel Money.
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} heading="Pricing questions" />
      <CtaPanel heading="Get your exact price now" body="WhatsApp us - we confirm in minutes." buttonLabel="Get a free quote" />
    </>
  )
}

