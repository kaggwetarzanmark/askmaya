import FaqAccordion from './FaqAccordion'

interface FaqItem { q: string; a: string }

export default function FaqSection({ faqs, heading = 'Frequently asked questions' }: { faqs: FaqItem[]; heading?: string }) {
  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="center" style={{ marginBottom: 48 }}>
          <h2>{heading}</h2>
        </div>
        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  )
}
