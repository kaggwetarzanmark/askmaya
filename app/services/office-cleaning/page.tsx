import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Office & Corporate Cleaning in Kampala | Ask Maya',
  description: 'Professional office cleaning in Kampala. Routine or deep-cleaning packages scheduled around your business hours. From UGX 120,000.',
  openGraph: { title: 'Office & Corporate Cleaning in Kampala | Ask Maya', url: 'https://askmayaug.com/services/office-cleaning' },
}

export default function Page() {
  return (
    <ServicePage data={{
      slug: 'office-cleaning',
      name: 'Office & Corporate Cleaning',
      price: 'From UGX 120,000',
      tagline: 'A clean, professional workspace maintained on your schedule - around your business hours.',
      description: 'A clean office reduces sick days, boosts productivity, and makes the right impression on clients. We offer one-time deep cleans, regular daily or weekly maintenance, and after-hours contracts for offices, shops, clinics, and corporate spaces across Kampala.',
      image: 'https://images.pexels.com/photos/6197117/pexels-photo-6197117.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Clean modern office after professional cleaning',
      includes: [
        'Desks, workstations and meeting tables wiped and sanitised',
        'Reception areas, lobbies and corridors cleaned',
        'Floors vacuumed and mopped throughout',
        'Bathrooms and kitchenettes scrubbed and disinfected',
        'Bins emptied and bag-lined throughout',
        'Glass partitions and windows wiped',
        'Dusting of shelves, blinds and fixtures',
        'Deep cleaning of appliances in kitchenettes',
      ],
      steps: [
        { title: 'Walk-through or call', body: 'We discuss your space, frequency, and schedule. We work early mornings, evenings, or weekends.' },
        { title: 'We arrive after hours', body: 'Our team works around your business hours so operations are never disrupted.' },
        { title: 'Consistent every visit', body: 'Same trained team, supplies included, quality checked every visit.' },
      ],
      faqs: [
        { q: 'How much does office cleaning cost?', a: 'One-time cleans from UGX 120,000. Monthly contracts depend on frequency and office size. Contact us for a tailored quote.' },
        { q: 'Can you clean after hours?', a: 'Yes. Most corporate clients prefer early morning or evening cleaning to avoid disruption.' },
        { q: 'Do you offer recurring contracts?', a: 'Yes. Weekly, bi-weekly, and daily maintenance contracts with fixed pricing and consistent teams.' },
        { q: 'What types of commercial spaces do you clean?', a: 'Offices, clinics, shops, salons, co-working spaces, banks, schools, and more.' },
        { q: 'Do you bring your own supplies?', a: 'Yes. All cleaning products and professional equipment are always included.' },
      ],
      related: [
        { name: 'Post-Construction Cleaning', slug: 'post-construction-cleaning' },
        { name: 'Events Cleanup', slug: 'events-cleanup' },
        { name: 'Domestic Deep Cleaning', slug: 'domestic-deep-cleaning' },
      ],
    }} />
  )
}

