import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Sofa & Upholstery Cleaning in Kampala | Ask Maya',
  description: 'Professional sofa and upholstery cleaning in Kampala. Deep stain removal, fabric vacuuming, shampooing and hot-water extraction. From UGX 50,000.',
  openGraph: { title: 'Sofa & Upholstery Cleaning in Kampala | Ask Maya', url: 'https://askmayaug.com/services/sofa-upholstery-cleaning' },
}

export default function Page() {
  return (
    <ServicePage data={{
      slug: 'sofa-upholstery-cleaning',
      name: 'Sofa & Upholstery Cleaning',
      price: 'From UGX 50,000',
      tagline: 'Deep stain removal and hot-water extraction to bring your sofas and furniture back to life.',
      description: 'Sofas absorb dust, sweat, spills, and odours over time. Our upholstery cleaning uses professional extraction machines and fabric-safe products to remove embedded dirt and stains, leaving your furniture looking and smelling fresh. We handle fabric, velvet, leather, and microfibre.',
      image: 'https://images.pexels.com/photos/6195121/pexels-photo-6195121.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Clean sofa after professional shampooing and extraction',
      includes: [
        'Dry vacuuming to remove loose dirt and dust',
        'Pre-treatment spray on stains and high-contact areas',
        'Hot-water extraction or dry shampooing (fabric-appropriate)',
        'Odour neutralising treatment',
        'Armrests, seat cushions and back cushions all treated',
        'Leather conditioning for leather sofas',
        'Drying guidance provided',
        'All equipment and products included',
      ],
      steps: [
        { title: 'Book and confirm', body: 'Tell us the number of seats and fabric type. We confirm price and date quickly.' },
        { title: 'Pre-inspection on arrival', body: 'Our team checks the fabric type and stains on arrival to select the right method.' },
        { title: 'Clean, dry, enjoy', body: 'We clean thoroughly and advise drying time - most sofas usable within 2–4 hours.' },
      ],
      faqs: [
        { q: 'How much does sofa cleaning cost?', a: 'Prices start from UGX 50,000 per sofa. A 3-seater set is typically UGX 120,000–180,000. WhatsApp for a precise quote.' },
        { q: 'Can you remove old stains?', a: 'Most stains respond very well to our treatment. Very old or set-in stains may not fully disappear but will significantly improve.' },
        { q: 'How long does the sofa take to dry?', a: 'Usually 2–4 hours depending on fabric thickness and ventilation.' },
        { q: 'Is the shampoo safe for children and pets?', a: 'Yes. We use child-safe and pet-safe products across all our services.' },
        { q: 'Do you clean office chairs too?', a: 'Yes. We clean office seating, car seats, and all types of upholstered furniture.' },
      ],
      related: [
        { name: 'Carpet & Rug Cleaning', slug: 'carpet-rug-cleaning' },
        { name: 'Domestic Deep Cleaning', slug: 'domestic-deep-cleaning' },
        { name: 'Car Detailing', slug: 'car-detailing' },
      ],
    }} />
  )
}

