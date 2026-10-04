import type { MetadataRoute } from 'next'

const BASE = 'https://askmayaug.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const core = [
    { url: BASE,                  priority: 1.0, changeFrequency: 'weekly'  as const },
    { url: `${BASE}/services`,    priority: 0.9, changeFrequency: 'weekly'  as const },
    { url: `${BASE}/pricing`,     priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE}/gallery`,     priority: 0.7, changeFrequency: 'weekly'  as const },
    { url: `${BASE}/about`,       priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE}/faq`,         priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE}/contact`,     priority: 0.8, changeFrequency: 'monthly' as const },
  ]
  const services = [
    'domestic-deep-cleaning', 'mattress-deep-cleaning',
    'sofa-upholstery-cleaning', 'carpet-rug-cleaning',
    'office-cleaning', 'post-construction-cleaning',
    'events-cleanup', 'car-detailing', 'mobile-car-detailing',
  ].map((slug) => ({ url: `${BASE}/services/${slug}`, priority: 0.9, changeFrequency: 'monthly' as const }))

  return [...core, ...services].map((r) => ({ ...r, lastModified: now }))
}
