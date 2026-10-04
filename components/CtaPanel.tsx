const WA = 'https://wa.me/256704834586?text=Hi%20Maya%2C%20I%20need%20a%20cleaning%20quote'

interface CtaPanelProps {
  heading?: string
  body?: string
  buttonLabel?: string
  buttonHref?: string
}

export default function CtaPanel({
  heading = 'Ready for a spotless space?',
  body = 'WhatsApp us and we confirm your price within the hour.',
  buttonLabel = 'WhatsApp us',
  buttonHref = WA,
}: CtaPanelProps) {
  return (
    <section className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="panel-cta">
          <h2>{heading}</h2>
          <p>{body}</p>
          <a
            href={buttonHref}
            target={buttonHref.startsWith('http') ? '_blank' : undefined}
            rel={buttonHref.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="btn btn-primary"
          >
            {buttonLabel}
          </a>
          <span className="cta-sign">With care, Maya</span>
        </div>
      </div>
    </section>
  )
}
