import type { Metadata } from 'next'
import Link from 'next/link'
import FaqSection from '@/components/FaqSection'
import CtaPanel from '@/components/CtaPanel'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Ask Maya UGA Cleaning',
  description: 'Answers to common questions about Ask Maya UGA Cleaning - pricing, booking, what\'s included, areas served, and our re-clean guarantee.',
}

const groups = [
  { group: 'Booking & scheduling', items: [
    { q: 'How do I book a clean?', a: 'WhatsApp us on +256 704 834 586, call us, or use the contact form. We confirm your date, time and price quickly.' },
    { q: 'How far in advance do I need to book?', a: '24–48 hours is ideal. For same-day cleans in Ntinda, WhatsApp us and we will confirm availability.' },
    { q: 'Can I book a recurring schedule?', a: 'Yes. Weekly and bi-weekly plans are available. Recurring clients get priority scheduling.' },
    { q: 'Can I reschedule or cancel?', a: 'Yes. Please give us at least 12 hours notice. We will rebook you at no charge.' },
  ]},
  { group: 'Pricing & payment', items: [
    { q: 'How much does cleaning cost?', a: 'Carpet from UGX 40,000 · Sofa from UGX 50,000 · Car from UGX 60,000 · Home from UGX 80,000. See our pricing page for a full breakdown.' },
    { q: 'Are supplies included?', a: 'Yes. All cleaning products and equipment are always included. You need not prepare anything.' },
    { q: 'How do I pay?', a: 'Cash, MTN Mobile Money (MoMo) and Airtel Money. Payment is made on the day of service.' },
  ]},
  { group: 'During the clean', items: [
    { q: 'Do I need to be home?', a: 'Not necessarily. Many clients leave a key or gate code. Our cleaners are fully vetted.' },
    { q: 'Do you use eco-friendly products?', a: 'Yes. Our products are effective, eco-conscious and safe for children and pets.' },
    { q: 'Will the same cleaners come each time?', a: 'For recurring clients, we assign a consistent team to your home or office.' },
  ]},
  { group: 'Quality & guarantee', items: [
    { q: 'What if I am not happy?', a: 'Tell us within 24 hours and we will return to re-clean any area you flag - completely free.' },
    { q: 'Are your cleaners vetted?', a: 'Yes. Every cleaner is background-checked and trained before joining our team.' },
  ]},
]

export default function FaqPage() {
  return (
    <>
      <section className="svc-hero">
        <div className="container">
          <span className="label-tag">Got questions?</span>
          <h1 style={{ marginTop: 12 }}>Frequently asked questions</h1>
          <p style={{ fontSize: 19, marginTop: 16, maxWidth: '42rem' }}>
            Everything you need to know about booking, pricing and what to expect.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 56, maxWidth: 800 }}>
            {groups.map((group) => (
              <div key={group.group}>
                <h2 style={{ fontSize: 28, marginBottom: 24 }}>{group.group}</h2>
                <FaqSection faqs={group.items} heading="" />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 64, maxWidth: 800 }}>
            <div style={{ background: 'var(--bg)', borderRadius: 'var(--radius-card)', padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3>Still have a question?</h3>
              <p>The fastest way to get an answer is WhatsApp. We reply within 30 minutes during business hours.</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="https://wa.me/256704834586" target="_blank" rel="noopener noreferrer" className="btn btn-primary">WhatsApp us</a>
                <Link href="/contact" className="btn btn-outline">Contact form</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaPanel />
    </>
  )
}

