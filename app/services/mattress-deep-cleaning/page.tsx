import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Mattress Deep Cleaning in Kampala | Ask Maya',
  description: 'Professional mattress deep cleaning in Kampala. Dust mites, stains and odours removed for better sleep. Book Ask Maya today.',
  openGraph: { title: 'Mattress Deep Cleaning in Kampala | Ask Maya', url: 'https://askmayaug.com/services/mattress-deep-cleaning' },
}

export default function Page() {
  return (
    <ServicePage data={{
      slug: 'mattress-deep-cleaning',
      name: 'Mattress Deep Cleaning',
      price: 'From UGX [PRICE] - confirm with client',
      tagline: 'Better sleep: dust mites, stains and odours removed from your mattress.',
      description: 'Mattresses collect dust mites, dead skin cells, sweat and stains over time - most people never clean them. Our mattress deep cleaning service uses hot-water extraction and UV sanitisation to remove allergens, odours and visible stains, leaving your mattress fresh, hygienic and safe to sleep on.',
      image: 'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Mattress being professionally cleaned and sanitised',
      includes: [
        'Dry vacuuming to remove loose dust, hair and debris',
        'Pre-treatment of stains with fabric-safe agents',
        'Hot-water extraction deep clean',
        'UV sanitisation to eliminate dust mites and bacteria',
        'Odour neutralising treatment',
        'Both sides cleaned on request',
        'All equipment and products included',
      ],
      steps: [
        { title: 'Book and confirm', body: 'Tell us your mattress size (single, double, king). We confirm price and date.' },
        { title: 'We clean both sides', body: 'Our team vacuums, pre-treats stains, then extracts deep with professional equipment.' },
        { title: 'Dry and sleep clean', body: 'Mattress is ready to sleep on within a few hours. We advise on drying time.' },
      ],
      faqs: [
        { q: 'How much does mattress cleaning cost?', a: 'Pricing depends on mattress size. WhatsApp us for a confirmed quote.' },
        { q: 'How long does it take to dry?', a: 'Usually 2–4 hours with good ventilation. We advise standing the mattress if possible.' },
        { q: 'Is it safe for children?', a: 'Yes. We use child-safe and pet-safe products across all our services.' },
        { q: 'How often should I clean my mattress?', a: 'Every 6–12 months is recommended for most households. More often if you have allergies.' },
        { q: 'Can you clean memory foam?', a: 'Yes. We adjust our method based on mattress type to ensure safe and effective cleaning.' },
      ],
      related: [
        { name: 'Sofa & Upholstery Cleaning', slug: 'sofa-upholstery-cleaning' },
        { name: 'Carpet & Rug Cleaning', slug: 'carpet-rug-cleaning' },
        { name: 'Domestic Deep Cleaning', slug: 'domestic-deep-cleaning' },
      ],
    }} />
  )
}

