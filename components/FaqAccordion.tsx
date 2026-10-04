'use client'
import { useState } from 'react'

interface FaqItem { q: string; a: string }

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number>(0) // first item open by default

  return (
    <div className="faq-list">
      {faqs.map((item, i) => (
        <div key={item.q} className={`faq-item${open === i ? ' faq-item--open' : ''}`}>
          <button
            className="faq-btn"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <span className="faq-question">{item.q}</span>
            <span className="faq-icon" aria-hidden="true">
              {open === i ? '−' : '+'}
            </span>
          </button>
          <div className="faq-answer" id={`faq-${i}`}>
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
