import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Car Detailing in Ntinda, Kampala | Ask Maya',
  description: 'Professional car detailing at our Ntinda bay in Kampala. Full interior vacuum, dashboard polish, seat shampoo and exterior wash. From UGX 60,000.',
  openGraph: { title: 'Car Detailing in Ntinda, Kampala | Ask Maya', url: 'https://askmayaug.com/services/car-detailing' },
}

export default function Page() {
  return (
    <ServicePage data={{
      slug: 'car-detailing',
      name: 'Bay Car Detailing',
      price: 'From UGX 60,000',
      tagline: 'A complete interior and exterior detail at our Ntinda bay - your car leaves looking and smelling brand new.',
      description: 'Our Ntinda car detailing bay delivers a thorough, professional clean that goes far beyond a standard car wash. We vacuum every surface, shampoo the seats, degrease the engine bay area, polish the dashboard, and wash and wax the exterior - leaving your car in showroom condition.',
      image: 'https://images.pexels.com/photos/6873087/pexels-photo-6873087.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Car interior being professionally vacuumed and detailed',
      includes: [
        'Full interior vacuum: seats, carpets, boot, under seats',
        'Dashboard, console and door panels wiped and conditioned',
        'Seat shampooing (fabric) or leather conditioning',
        'Windows and mirrors cleaned inside and out',
        'Exterior hand wash and rinse',
        'Tyre cleaning and dressing',
        'Exterior wax or quick-detailer polish',
        'Air freshener applied',
      ],
      steps: [
        { title: 'Drive in or book a slot', body: 'Come to our Ntinda bay or book a time slot in advance. Walk-ins are welcome.' },
        { title: 'Interior first, exterior second', body: 'We start inside for a thorough vacuum and shampoo, then move to exterior wash and polish.' },
        { title: 'Inspect and drive away clean', body: 'We walk you through the finished vehicle. Satisfied? Drive away in a clean car.' },
      ],
      faqs: [
        { q: 'How much does car detailing cost?', a: 'Interior and exterior detail from UGX 60,000 for a salon car. SUVs and vans are higher. WhatsApp for a quote.' },
        { q: 'Where is the Ntinda bay?', a: 'We are based in Ntinda, Kampala. WhatsApp us for the exact location pin.' },
        { q: 'How long does a full detail take?', a: 'A typical salon car takes 2–3 hours. Larger vehicles or heavily soiled interiors may take longer.' },
        { q: 'Can you come to me instead?', a: 'Yes - that is our Mobile Car Detailing service. We bring our equipment to your home or office.' },
        { q: 'Do you detail buses and minivans?', a: 'Yes. We handle all vehicle types. Pricing is adjusted by size.' },
      ],
      related: [
        { name: 'Mobile Car Detailing', slug: 'mobile-car-detailing' },
        { name: 'Sofa & Upholstery Cleaning', slug: 'sofa-upholstery-cleaning' },
      ],
    }} />
  )
}

