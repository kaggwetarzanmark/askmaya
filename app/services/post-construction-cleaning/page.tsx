import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Post-Construction Cleaning in Kampala | Ask Maya',
  description: 'Professional post-construction cleaning in Kampala. Heavy-duty dust extraction, cement residue removal, paint scraping and final detailing. From UGX 150,000.',
  openGraph: { title: 'Post-Construction Cleaning in Kampala | Ask Maya', url: 'https://askmayaug.com/services/post-construction-cleaning' },
}

export default function Page() {
  return (
    <ServicePage data={{
      slug: 'post-construction-cleaning',
      name: 'Post-Construction Cleaning',
      price: 'From UGX 150,000',
      tagline: 'Heavy-duty cleaning to turn a dusty construction site into a move-in ready space.',
      description: 'Construction dust is not ordinary dust - it settles into every crack, duct, and surface. Our post-construction service uses HEPA-grade extraction, specialised chemical removal for cement and paint residues, and a multi-pass approach to ensure your new or renovated space is genuinely clean and safe to occupy.',
      image: 'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Post-construction cleaning in a newly built Kampala home',
      includes: [
        'HEPA vacuuming of all walls, ceilings and horizontal surfaces',
        'Cement and grout haze removal from tiles and floors',
        'Paint splatter and adhesive residue removal',
        'Fixture and fitting cleaning: lights, switches, sockets',
        'New windows de-stickered and polished',
        'Inside cabinet and wardrobe cleaning before loading',
        'Bathroom and kitchen deep scrub and final polish',
        'Final walk-through inspection included',
      ],
      steps: [
        { title: 'Site assessment', body: 'We assess square footage, dust level and any special residues to price accurately.' },
        { title: 'Rough clean', body: 'First pass removes bulk dust and debris so trades can complete any remaining finish work.' },
        { title: 'Final detail clean', body: 'Full detail before move-in - every surface, fitting and floor polished and ready.' },
      ],
      faqs: [
        { q: 'How much does it cost?', a: 'Prices start from UGX 150,000 depending on square footage and dust level. WhatsApp for a site-specific quote.' },
        { q: 'When should I schedule it?', a: 'After the contractor\'s final day and before furniture arrives. We can also coordinate with your GC for a rough + final clean.' },
        { q: 'Is this different from a deep clean?', a: 'Yes. Construction dust and residues need specialist HEPA equipment and methods a regular deep clean cannot handle.' },
        { q: 'Do you clean commercial construction sites too?', a: 'Yes - new homes, apartments, offices, shops and commercial buildings. We work with homeowners and contractors.' },
        { q: 'How long does it take?', a: 'A typical 3-bedroom home takes 6–10 hours. Large commercial sites may require 2 days.' },
      ],
      related: [
        { name: 'Office Cleaning', slug: 'office-cleaning' },
        { name: 'Domestic Deep Cleaning', slug: 'domestic-deep-cleaning' },
        { name: 'Events Cleanup', slug: 'events-cleanup' },
      ],
    }} />
  )
}

