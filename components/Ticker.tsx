const services = [
  'Domestic Deep Cleaning', 'Office Cleaning', 'Sofa & Upholstery',
  'Mattress Cleaning', 'Carpet & Rug', 'Post-Construction',
  'Events Cleanup', 'Car Detailing', 'Mobile Car Detailing',
]

export default function Ticker() {
  return (
    <div className="service-band" aria-label="Our services">
      <div className="service-band__track">
        {[...services, ...services].map((s, i) => (
          <span key={i} className="service-band__item">{s}</span>
        ))}
      </div>
    </div>
  )
}
