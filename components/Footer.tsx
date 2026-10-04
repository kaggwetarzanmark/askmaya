import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: '#fff', letterSpacing: '-0.02em' }}>
              Ask Maya
            </span>
          </Link>
          <div className="footer-brand-tagline">We clean it all</div>
          <p style={{ marginTop: 16, fontSize: 14, color: 'var(--on-dark-muted)', maxWidth: '22rem' }}>
            Professional cleaning for homes, offices and vehicles across Kampala, Uganda.
          </p>
          <p style={{ marginTop: 12, fontSize: 13, color: 'var(--on-dark-muted)' }}>
            <a href="tel:+256704834586">+256 704 834 586</a>
          </p>
          <p style={{ marginTop: 4, fontSize: 13, color: 'var(--on-dark-muted)' }}>
            <a href="https://www.instagram.com/askmayaug" target="_blank" rel="noopener noreferrer">@askmayaug</a>
            &nbsp;· Ntinda, Kampala
          </p>
        </div>

        {/* Services */}
        <div>
          <h4>Services</h4>
          <Link href="/services/domestic-deep-cleaning">Domestic Deep Cleaning</Link>
          <Link href="/services/mattress-deep-cleaning">Mattress Cleaning</Link>
          <Link href="/services/sofa-upholstery-cleaning">Sofa &amp; Upholstery</Link>
          <Link href="/services/carpet-rug-cleaning">Carpet &amp; Rug Cleaning</Link>
          <Link href="/services/office-cleaning">Office Cleaning</Link>
          <Link href="/services/post-construction-cleaning">Post-Construction</Link>
          <Link href="/services/events-cleanup">Events Cleanup</Link>
          <Link href="/services/car-detailing">Car Detailing</Link>
          <Link href="/services/mobile-car-detailing">Mobile Car Detailing</Link>
        </div>

        {/* Company */}
        <div>
          <h4>Company</h4>
          <Link href="/about">About Maya</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Get in touch */}
        <div>
          <h4>Get in Touch</h4>
          <a href="tel:+256704834586">+256 704 834 586</a>
          <a href="mailto:hello@askmayaug.com">hello@askmayaug.com</a>
          <a href="https://wa.me/256704834586?text=Hi%20Maya%2C%20I%20need%20a%20quote" target="_blank" rel="noopener noreferrer">
            WhatsApp Us
          </a>
          <a href="https://www.instagram.com/askmayaug" target="_blank" rel="noopener noreferrer">
            Instagram @askmayaug
          </a>
          <p style={{ marginTop: 12, fontSize: 13, color: 'var(--on-dark-muted)' }}>
            Mon–Sat 7am–7pm · Sun 8am–4pm
          </p>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Ask Maya UGA Cleaning. All rights reserved.</span>
        <span>+256 704 834 586 · @askmayaug · Ntinda, Kampala</span>
      </div>
    </footer>
  )
}
