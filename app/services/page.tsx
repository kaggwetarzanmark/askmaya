'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Ticker from '@/components/Ticker'

const groups = [
  {
    label: 'Residential & Domestic',
    services: [
      { id: 'domestic-deep-cleaning',     name: 'Domestic Deep Cleaning',  price: 'From UGX 80,000',  tagline: 'Top-to-bottom home scrub - every room.', description: 'Our deep cleaning goes beyond a regular tidy-up. We scrub, sanitize and refresh every room using professional equipment and eco-friendly products.', image: 'https://images.pexels.com/photos/4239038/pexels-photo-4239038.jpeg?auto=compress&cs=tinysrgb&w=700', imageAlt: 'Cleaner scrubbing a kitchen counter', includes: ['Kitchen degreased and sanitised','Bathrooms scrubbed and disinfected','Bedrooms dusted and mopped','Living areas vacuumed top-to-bottom','Window sills and skirting boards cleaned','All supplies included'] },
      { id: 'mattress-deep-cleaning',     name: 'Mattress Deep Cleaning',  price: 'From UGX [PRICE]', tagline: 'Dust mites, stains and odours removed.', description: 'Mattresses collect dust mites and allergens over time. Our hot-water extraction removes them for better sleep.', image: 'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=700', imageAlt: 'Mattress being professionally cleaned', includes: ['Dry vacuuming','Stain pre-treatment','Hot-water extraction','UV sanitisation','Odour neutralising treatment','All equipment included'] },
      { id: 'sofa-upholstery-cleaning',   name: 'Sofa & Upholstery',       price: 'From UGX 50,000',  tagline: 'Deep stain removal and hot-water extraction.', description: 'Sofas absorb dust, sweat and spills. We use professional extraction to remove embedded dirt and stains.', image: 'https://images.pexels.com/photos/6195121/pexels-photo-6195121.jpeg?auto=compress&cs=tinysrgb&w=700', imageAlt: 'Clean sofa after shampooing', includes: ['Dry vacuuming','Stain pre-treatment','Hot-water extraction or dry shampoo','Odour treatment','Leather conditioning on request','All equipment included'] },
      { id: 'carpet-rug-cleaning',        name: 'Carpet & Rug Cleaning',   price: 'From UGX 40,000',  tagline: 'Specialist washing to lift embedded dirt.', description: 'Hot-water extraction lifts embedded dirt and restores the texture and colour of any carpet or rug.', image: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=700', imageAlt: 'Carpet cleaning with extraction machine', includes: ['Dry vacuuming','Stain pre-treatment','Hot-water extraction','Deodorising treatment','Pile grooming','All equipment included'] },
    ],
  },
  {
    label: 'Commercial & Specialised',
    services: [
      { id: 'office-cleaning',            name: 'Office & Corporate',      price: 'From UGX 120,000', tagline: 'A clean workspace maintained on your schedule.', description: 'We offer deep cleans, regular maintenance and after-hours contracts for offices, shops and clinics across Kampala.', image: 'https://images.pexels.com/photos/6197117/pexels-photo-6197117.jpeg?auto=compress&cs=tinysrgb&w=700', imageAlt: 'Clean modern office', includes: ['Desks and workstations sanitised','Floors vacuumed and mopped','Bathrooms and kitchenettes cleaned','Bins emptied','Glass partitions wiped','All supplies included'] },
      { id: 'post-construction-cleaning', name: 'Post-Construction',       price: 'From UGX 150,000', tagline: 'Heavy-duty cleaning after building or renovation.', description: 'HEPA extraction, cement and paint residue removal - multiple passes for a genuinely clean result.', image: 'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=700', imageAlt: 'Post-construction cleaning', includes: ['HEPA vacuuming of all surfaces','Cement and grout haze removal','Paint splatter removal','New windows de-stickered','Inside cabinets cleaned','Final walk-through inspection'] },
      { id: 'events-cleanup',             name: 'Events Cleanup',          price: 'From UGX 100,000', tagline: 'Before setup and a full restore after the party.', description: 'Pre-event venue preparation and post-event cleanup including waste removal and venue restoration.', image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=700', imageAlt: 'Clean event venue', includes: ['Pre-event: floors cleaned and sanitised','Pre-event: bathrooms stocked','Post-event: waste removed','Post-event: surfaces wiped','Post-event: floors mopped','Supplies included'] },
    ],
  },
  {
    label: 'Vehicle Care',
    services: [
      { id: 'car-detailing',              name: 'Bay Car Detailing',       price: 'From UGX 60,000',  tagline: 'Full detail at our Ntinda bay.', description: 'Interior vacuum, seat shampoo, dashboard polish, exterior wash and wax - showroom condition.', image: 'https://images.pexels.com/photos/6873087/pexels-photo-6873087.jpeg?auto=compress&cs=tinysrgb&w=700', imageAlt: 'Car being detailed', includes: ['Full interior vacuum','Dashboard and panels conditioned','Seat shampooing','Windows cleaned inside and out','Exterior hand wash','Tyre dressing','Exterior wax'] },
      { id: 'mobile-car-detailing',       name: 'Mobile Car Detailing',    price: 'From UGX 75,000',  tagline: 'Full detail delivered to your compound.', description: 'Our mobile unit brings everything needed - same standard as the bay, delivered to your gate.', image: 'https://images.pexels.com/photos/6873086/pexels-photo-6873086.jpeg?auto=compress&cs=tinysrgb&w=700', imageAlt: 'Mobile car detailing at a home', includes: ['Full interior vacuum','Dashboard and panels conditioned','Seat shampooing','Exterior wash and dry','Tyre dressing','Exterior wax','All water and equipment provided'] },
    ],
  },
]

function AccordionItem({ service, isOpen, onToggle }: { service: typeof groups[0]['services'][0]; isOpen: boolean; onToggle: () => void }) {
  const waMsg = encodeURIComponent(`Hi Maya, I'd like a quote for ${service.name}`)
  return (
    <div id={service.id} style={{ borderBottom: '1px solid var(--line)' }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--navy)', letterSpacing: '-0.01em' }}>{service.name}</div>
          <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--teal-ink)', marginTop: 4 }}>{service.price}</div>
        </div>
        <span style={{ width: 28, height: 28, borderRadius: '50%', background: isOpen ? 'var(--teal)' : 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: isOpen ? '#fff' : 'var(--teal-ink)', fontWeight: 700, fontSize: 20, transition: 'background 150ms' }}>
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen && (
        <div style={{ paddingBottom: 32 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 40, alignItems: 'start' }}>
            <img src={service.image} alt={service.imageAlt} loading="lazy" style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 16, display: 'block' }} />
            <div>
              <p style={{ fontSize: 16, color: 'var(--text-muted)', marginBottom: 16 }}>{service.description}</p>
              <ul className="include-list">
                {service.includes.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
                <a href={`https://wa.me/256704834586?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get a quote</a>
                <Link href={`/services/${service.id}`} className="btn btn-outline">Full details</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function ServicesPage() {
  const allServices = groups.flatMap((g) => g.services)
  const [openId, setOpenId] = useState<string | null>(allServices[0].id)

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && allServices.find((s) => s.id === hash)) {
      setOpenId(hash)
      setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
  }, [])

  useEffect(() => {
    function onHash() {
      const hash = window.location.hash.replace('#', '')
      if (hash && allServices.find((s) => s.id === hash)) {
        setOpenId(hash)
        setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
      }
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <>
      <section className="svc-hero">
        <div className="container">
          <span className="label-tag">Everything we offer</span>
          <h1 style={{ marginTop: 12 }}>Our cleaning services</h1>
          <p style={{ fontSize: 19, marginTop: 16, maxWidth: '40rem' }}>
            Select any service to see what&apos;s included, pricing, and how to book.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <a href="https://wa.me/256704834586?text=Hi%20Maya%2C%20I%20need%20a%20cleaning%20quote" target="_blank" rel="noopener noreferrer" className="btn btn-primary">WhatsApp for advice</a>
            <Link href="/pricing" className="btn btn-outline">View all prices</Link>
          </div>
        </div>
      </section>

      <Ticker />

      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          {groups.map((group) => (
            <div key={group.label} style={{ marginBottom: 64 }}>
              <span className="label-tag">{group.label}</span>
              <div>
                {group.services.map((service) => (
                  <AccordionItem key={service.id} service={service} isOpen={openId === service.id} onToggle={() => setOpenId(openId === service.id ? null : service.id)} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="panel-cta">
            <h2>Not sure which service you need?</h2>
            <p>Tell us about your space and we will recommend the right clean.</p>
            <a href="https://wa.me/256704834586?text=Hi%20Maya%2C%20I%20need%20help%20choosing%20a%20service" target="_blank" rel="noopener noreferrer" className="btn btn-primary">WhatsApp us</a>
            <span className="cta-sign">With care, Maya</span>
          </div>
        </div>
      </section>
    </>
  )
}

