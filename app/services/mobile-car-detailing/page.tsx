import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Mobile Car Detailing in Kampala | Ask Maya',
  description: 'Mobile car detailing in Kampala - we come to your home compound or office. Full interior and exterior detail delivered to you. From UGX 75,000.',
  openGraph: { title: 'Mobile Car Detailing in Kampala | Ask Maya', url: 'https://askmayaug.com/services/mobile-car-detailing' },
}

export default function Page() {
  return (
    <ServicePage data={{
      slug: 'mobile-car-detailing',
      name: 'Mobile Car Detailing',
      price: 'From UGX 75,000',
      tagline: 'We bring the full detailing service to your home compound or office - no driving required.',
      description: "Can't make it to our Ntinda bay? We come to you. Our mobile detailing unit carries everything needed for a full interior and exterior car detail - delivered right to your gate. Same professional standard as the bay, at the convenience of your location anywhere in Kampala.",
      image: 'https://images.pexels.com/photos/6873086/pexels-photo-6873086.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Mobile car detailing service at a Kampala home compound',
      includes: [
        'Full interior vacuum: seats, carpets, boot, door pockets',
        'Dashboard, console and door panels wiped and conditioned',
        'Seat shampooing or leather conditioning',
        'Interior windows and mirrors cleaned',
        'Exterior hand wash, rinse and dry',
        'Tyre cleaning and dressing',
        'Exterior wax or quick-detailer polish',
        'All water and equipment brought by our team',
      ],
      steps: [
        { title: 'Book your location', body: 'WhatsApp or call us with your address. We confirm your slot and arrival time.' },
        { title: 'We arrive fully equipped', body: 'Our team arrives with all water, tools and products. Just open the gate.' },
        { title: 'Drive away clean', body: 'Done within 2–3 hours. Your car is clean without you leaving home.' },
      ],
      faqs: [
        { q: 'How much does mobile detailing cost?', a: 'From UGX 75,000 for a salon car including the mobile service fee. WhatsApp for a quote.' },
        { q: 'Do you come to any area in Kampala?', a: 'Yes. We cover Ntinda, Kololo, Nakawa, Bukoto, Muyenga, Bugolobi, and all surrounding areas.' },
        { q: 'Do I need to provide water or power?', a: 'Not necessarily. We carry our own water supply. For large vehicles, an outdoor tap helps but is not required.' },
        { q: 'Is quality the same as the bay?', a: 'Yes. Same products, same process, same standard. The only difference is we come to you.' },
        { q: 'Can I book multiple vehicles?', a: 'Yes. Booking multiple vehicles at the same location on the same day gets a discount.' },
      ],
      related: [
        { name: 'Bay Car Detailing', slug: 'car-detailing' },
        { name: 'Domestic Deep Cleaning', slug: 'domestic-deep-cleaning' },
      ],
    }} />
  )
}

