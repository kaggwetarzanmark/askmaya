import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Ask Maya UGA Cleaning | Kampala',
  description: 'Get in touch with Ask Maya UGA Cleaning in Kampala. Call, WhatsApp, or send a message. Based in Ntinda, serving all of Kampala.',
  openGraph: { title: 'Contact Ask Maya UGA Cleaning | Kampala', description: 'Call, WhatsApp, or send a message. We respond within the hour.' },
}

const areas = ['Ntinda','Kololo','Nakawa','Bukoto','Bugolobi','Muyenga','Naguru','Kamwokya','Kisementi','Kansanga','Naalya','Kyanja','Kiwatule','Mutungo','Luzira','Kabalagala']

const contactItems = [
  { label: 'WhatsApp (fastest)', value: '+256 704 834 586', href: 'https://wa.me/256704834586', note: 'Reply within 30 minutes during business hours' },
  { label: 'Phone',              value: '+256 704 834 586', href: 'tel:+256704834586',           note: 'Mon–Sat: 7am–7pm · Sun: 8am–4pm' },
  { label: 'Email',              value: 'hello@askmayaug.com', href: 'mailto:hello@askmayaug.com', note: 'Reply within 4 hours on working days' },
  { label: 'Location',          value: 'Ntinda, Kampala, Uganda', href: null as null,             note: 'Car detailing bay - WhatsApp for the pin' },
]

export default function ContactPage() {
  return (
    <>
      <section className="svc-hero">
        <div className="container">
          <h1>Get in touch</h1>
          <p style={{ fontSize: 19, marginTop: 16, maxWidth: '40rem' }}>
            Request a quote, ask a question, or schedule a clean. We respond within the hour - fastest on WhatsApp.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 64, alignItems: 'flex-start' }}>

            <div>
              <h2 style={{ marginBottom: 32 }}>Send us a message</h2>
              <ContactForm />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <h2 style={{ marginBottom: 8 }}>Other ways to reach us</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {contactItems.map((item) => (
                  <div key={item.label} style={{ background: 'var(--bg)', borderRadius: 'var(--radius-card)', padding: 24 }}>
                    <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--teal-ink)', marginBottom: 4, fontFamily: 'var(--font-label)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} style={{ fontWeight: 700, fontSize: 18, color: 'var(--navy)' }}>{item.value}</a>
                    ) : (
                      <p style={{ fontWeight: 700, fontSize: 18, color: 'var(--navy)', maxWidth: '100%' }}>{item.value}</p>
                    )}
                    <p style={{ marginTop: 6, fontSize: 14 }}>{item.note}</p>
                  </div>
                ))}
              </div>

              <div style={{ background: 'var(--bg)', borderRadius: 'var(--radius-card)', padding: 24 }}>
                <h3 style={{ fontSize: 18, marginBottom: 16 }}>Business hours</h3>
                {[{ day: 'Monday – Friday', hours: '7:00am – 7:00pm' }, { day: 'Saturday', hours: '7:00am – 6:00pm' }, { day: 'Sunday', hours: '8:00am – 4:00pm' }].map((r) => (
                  <div key={r.day} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--line)', fontSize: 15 }}>
                    <span style={{ color: 'var(--navy)', fontWeight: 600 }}>{r.day}</span>
                    <span style={{ color: 'var(--text-muted)' }}>{r.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container center">
          <h2>Areas we serve</h2>
          <p style={{ marginTop: 12, marginBottom: 32 }}>Based in Ntinda, we cover all of Kampala and greater Kampala.</p>
          <div className="area-list">
            {areas.map((area) => <span key={area} className="area-chip">{area}</span>)}
          </div>
        </div>
      </section>
    </>
  )
}

