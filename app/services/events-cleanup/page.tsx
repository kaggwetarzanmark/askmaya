import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Events Cleanup in Kampala | Ask Maya',
  description: 'Professional events cleanup in Kampala. Pre-event setup cleaning and post-event site cleanup for parties, functions, corporate events and weddings. From UGX 100,000.',
  openGraph: { title: 'Events Cleanup in Kampala | Ask Maya', url: 'https://askmayaug.com/services/events-cleanup' },
}

export default function Page() {
  return (
    <ServicePage data={{
      slug: 'events-cleanup',
      name: 'Events Cleanup',
      price: 'From UGX 100,000',
      tagline: 'Professional cleanup before your guests arrive - and a complete restore once they leave.',
      description: 'Whether you are hosting a wedding reception, corporate function, birthday party, or community event, Ask Maya handles the cleaning so you can focus on the experience. We offer pre-event venue preparation and post-event complete cleanup including waste removal, surface sanitisation, and venue restoration.',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Clean event venue ready for a function in Kampala',
      includes: [
        'Pre-event: floors swept, mopped and sanitised',
        'Pre-event: tables, chairs and surfaces wiped down',
        'Pre-event: bathrooms cleaned and stocked',
        'Post-event: food and drink waste collected and disposed',
        'Post-event: all surfaces wiped and sanitised',
        'Post-event: floors swept and mopped throughout',
        'Post-event: furniture rearranged to original layout if required',
        'Rubbish bags and supplies included',
      ],
      steps: [
        { title: 'Tell us about your event', body: 'Share venue size, event type, guest numbers and timing. We quote and confirm your team.' },
        { title: 'Pre-event preparation', body: 'Our team arrives before your guests to ensure the venue is spotless and guest-ready.' },
        { title: 'Post-event restore', body: 'Once guests leave, we work quickly to clear, clean and restore the space.' },
      ],
      faqs: [
        { q: 'How much does events cleanup cost?', a: 'From UGX 100,000 for small gatherings. Larger events are quoted based on venue size and scope.' },
        { q: 'Can you do both pre and post-event cleaning?', a: 'Yes. Many clients book both as a package for a seamless experience.' },
        { q: 'Do you clean outdoor venues?', a: 'Yes. Garden parties, compound events and tented functions are within our service.' },
        { q: 'How quickly can you mobilise after an event?', a: 'We can start cleanup immediately once the event ends, including late-night starts.' },
        { q: 'Do you handle waste removal?', a: 'Yes. Waste collection and disposal from the venue is included in our post-event service.' },
      ],
      related: [
        { name: 'Office Cleaning', slug: 'office-cleaning' },
        { name: 'Post-Construction Cleaning', slug: 'post-construction-cleaning' },
        { name: 'Domestic Deep Cleaning', slug: 'domestic-deep-cleaning' },
      ],
    }} />
  )
}

