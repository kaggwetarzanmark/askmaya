import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Domestic Deep Cleaning in Kampala | Ask Maya',
  description: 'Professional domestic deep cleaning in Kampala. Top-to-bottom house scrubbing and sanitization for homes, flats, and apartments. Vetted cleaners, supplies included. From UGX 80,000.',
  openGraph: { title: 'Domestic Deep Cleaning in Kampala | Ask Maya', url: 'https://askmayaug.com/services/domestic-deep-cleaning' },
}

export default function Page() {
  return (
    <ServicePage data={{
      slug: 'domestic-deep-cleaning',
      name: 'Domestic Deep Cleaning',
      price: 'From UGX 80,000',
      tagline: 'A thorough, top-to-bottom clean of every room in your home - every surface, every corner.',
      description: 'Our deep cleaning goes far beyond a regular tidy-up. We scrub, sanitize, and refresh every room using professional equipment and eco-friendly products. Perfect for a first-time clean, a seasonal reset, or when your home needs more than the usual maintenance.',
      image: 'https://images.pexels.com/photos/4239038/pexels-photo-4239038.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Cleaner scrubbing a kitchen counter in a Kampala home',
      includes: [
        'Kitchen: surfaces wiped, cooker degreased, sink scrubbed, floor mopped',
        'Bathrooms: toilet, tub, shower scrubbed and disinfected',
        'Bedrooms: dusting, floors vacuumed and mopped, surfaces wiped',
        'Living areas: dusting top-to-bottom, floors vacuumed and mopped',
        'Window sills, door frames and skirting boards cleaned',
        'Inside cupboards on request',
        'Bins emptied and bags replaced throughout',
        'All supplies and equipment included',
      ],
      steps: [
        { title: 'WhatsApp for a quote', body: 'Tell us your home size and preferred date. We confirm price and time within the hour.' },
        { title: 'We arrive fully equipped', body: 'Vetted, uniformed cleaners arrive on time with all supplies. Nothing for you to prepare.' },
        { title: 'Walk into a spotless home', body: 'Not satisfied with any area? Flag it within 24 hours and we re-clean it free.' },
      ],
      faqs: [
        { q: 'How long does a domestic deep clean take?', a: 'A typical 2-bedroom home takes 3–4 hours. Larger homes take longer - we estimate when you book.' },
        { q: 'How much does it cost?', a: 'Prices start from UGX 80,000 depending on home size. WhatsApp us for an exact quote.' },
        { q: 'Do I need to be home?', a: 'Not necessarily. Many clients leave a key or gate code. Our cleaners are fully vetted.' },
        { q: 'How often should I deep clean?', a: 'Most homes benefit from a deep clean every 1–3 months on top of regular upkeep.' },
        { q: 'Are your products safe for children and pets?', a: 'Yes. We use effective, eco-conscious products that are safe for children and pets.' },
      ],
      related: [
        { name: 'Carpet & Rug Cleaning', slug: 'carpet-rug-cleaning' },
        { name: 'Sofa & Upholstery', slug: 'sofa-upholstery-cleaning' },
        { name: 'Office Cleaning', slug: 'office-cleaning' },
      ],
    }} />
  )
}

