import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Carpet & Rug Cleaning in Kampala | Ask Maya',
  description: 'Specialist carpet and rug cleaning in Kampala. Deep washing and drying to remove embedded dirt, stains, and odours from heavy mats and floor carpets. From UGX 40,000.',
  openGraph: { title: 'Carpet & Rug Cleaning in Kampala | Ask Maya', url: 'https://askmayaug.com/services/carpet-rug-cleaning' },
}

export default function Page() {
  return (
    <ServicePage data={{
      slug: 'carpet-rug-cleaning',
      name: 'Carpet & Rug Cleaning',
      price: 'From UGX 40,000',
      tagline: 'Specialist washing to pull deep-seated dirt, stains, and odours from your carpets and rugs.',
      description: 'Carpets trap dust, allergens, and bacteria deep within their fibres - regular vacuuming only handles the surface. Our carpet cleaning uses hot-water extraction and rotary shampooing to lift embedded dirt and restore the texture and colour of any size carpet or rug.',
      image: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Professional carpet cleaning with extraction machine',
      includes: [
        'Dry vacuuming before washing to remove loose debris',
        'Pre-treatment of stains with appropriate agents',
        'Hot-water extraction or rotary shampoo cleaning',
        'Carpet deodorising and sanitising treatment',
        'Grooming of carpet pile after washing',
        'All sizes of carpets and rugs handled',
        'Equipment and products included',
      ],
      steps: [
        { title: 'Book and confirm', body: 'Tell us the carpet size and type. We give you a price and arrival window.' },
        { title: 'Pre-treat and wash', body: 'We dry-vacuum first, pre-treat stains, then apply hot-water extraction for a deep clean.' },
        { title: 'Dry and groom', body: 'We groom the pile and advise on drying time - usually 3–6 hours for thick carpets.' },
      ],
      faqs: [
        { q: 'How much does carpet cleaning cost?', a: 'Prices start from UGX 40,000 per rug depending on size. Large room carpets typically UGX 80,000–150,000.' },
        { q: 'Can you clean carpets in my home?', a: 'Yes. We clean carpets in situ in your home, or you can drop rugs at our Ntinda bay.' },
        { q: 'How long until the carpet is dry?', a: 'Thin rugs dry in 2–3 hours. Thick carpets may take 4–8 hours depending on ventilation.' },
        { q: 'Will the colours fade after cleaning?', a: 'No. We assess the carpet type before selecting a cleaning method to ensure colours are safe.' },
        { q: 'Can you remove pet hair and odours?', a: 'Yes. We include a deodorising treatment and our vacuuming removes embedded pet hair effectively.' },
      ],
      related: [
        { name: 'Sofa & Upholstery Cleaning', slug: 'sofa-upholstery-cleaning' },
        { name: 'Domestic Deep Cleaning', slug: 'domestic-deep-cleaning' },
      ],
    }} />
  )
}

