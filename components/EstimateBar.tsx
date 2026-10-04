'use client'
import { useState } from 'react'

export default function EstimateBar() {
  const [form, setForm] = useState({ name: '', phone: '', service: 'Domestic Deep Cleaning' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const msg = `Hi Maya, I need a quote. Name: ${form.name}. Phone: ${form.phone}. Service: ${form.service}.`
    window.open(`https://wa.me/256700000000?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div className="am-container" style={{ position: 'relative', zIndex: 10 }}>
      <form className="am-estimate" onSubmit={handleSubmit}>
        <h3 style={{ marginBottom: 16 }}>Get your free estimate</h3>
        <div className="am-estimate__row">
          <div className="am-field">
            <label className="am-label" htmlFor="est-name">Your name</label>
            <input
              className="am-input" id="est-name" type="text" placeholder="Jane Nakato"
              value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="am-field">
            <label className="am-label" htmlFor="est-phone">Phone / WhatsApp</label>
            <input
              className="am-input" id="est-phone" type="tel" placeholder="+256 7XX XXX XXX"
              value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <div className="am-field">
            <label className="am-label" htmlFor="est-service">Service</label>
            <select
              className="am-input" id="est-service"
              value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
              style={{ cursor: 'pointer' }}
            >
              <option>Domestic Deep Cleaning</option>
              <option>Sofa &amp; Upholstery Cleaning</option>
              <option>Carpet &amp; Rug Cleaning</option>
              <option>Office Cleaning</option>
              <option>Post-Construction Cleaning</option>
              <option>Events Cleanup</option>
              <option>Car Detailing</option>
              <option>Mobile Car Detailing</option>
            </select>
          </div>
          <button className="am-btn am-btn--primary" type="submit">
            Request via WhatsApp
          </button>
        </div>
      </form>
    </div>
  )
}
