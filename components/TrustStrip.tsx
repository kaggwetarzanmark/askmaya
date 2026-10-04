const items = [
  'Vetted & trained cleaners',
  'Supplies always included',
  'Re-clean guarantee',
  'WhatsApp support',
]

export default function TrustStrip() {
  return (
    <div className="am-trust am-container">
      {items.map((item) => (
        <span key={item} className="am-trust__item">{item}</span>
      ))}
    </div>
  )
}
