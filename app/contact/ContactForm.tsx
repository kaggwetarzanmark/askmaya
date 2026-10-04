'use client'
import { useState } from 'react'

const areas = ['Ntinda','Kololo','Nakawa','Bukoto','Bugolobi','Muyenga','Naguru','Kamwokya','Kisementi','Kansanga','Naalya','Kyanja','Kiwatule','Mutungo','Luzira','Kabalagala','Other / Not listed']

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 16px', border: '1.5px solid var(--line)',
  borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 15,
  color: 'var(--navy)', background: 'var(--surface)', outline: 'none',
}

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', area: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const msg = `Hi Maya, my name is ${form.name}. Phone: ${form.phone}. Area: ${form.area}. ${form.message}`
    window.open(`https://wa.me/256704834586?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
  }

  if (sent) {
    return (
      <div style={{ background: 'var(--bg)', border: '1px solid var(--teal)', borderRadius: 8, padding: '16px 20px', fontSize: 15, color: 'var(--teal-ink)', fontWeight: 600 }}>
        ✓ Opening WhatsApp with your message pre-filled. We will reply within the hour.
      </div>
    )
  }

  const field = (id: string, label: string, el: React.ReactNode) => (
    <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label htmlFor={id} style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)', fontFamily: 'var(--font-label)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</label>
      {el}
    </div>
  )

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {field('cf-name', 'Your name', <input id="cf-name" type="text" required placeholder="Jane Nakato" style={inputStyle} value={form.name} onChange={e => setForm({...form, name: e.target.value})} />)}
      {field('cf-phone', 'Phone / WhatsApp', <input id="cf-phone" type="tel" required placeholder="+256 704 834 586" style={inputStyle} value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />)}
      {field('cf-email', 'Email (optional)', <input id="cf-email" type="email" placeholder="you@example.com" style={inputStyle} value={form.email} onChange={e => setForm({...form, email: e.target.value})} />)}
      {field('cf-area', 'Your area', (
        <select id="cf-area" style={{ ...inputStyle, cursor: 'pointer' }} value={form.area} onChange={e => setForm({...form, area: e.target.value})}>
          <option value="">Select your area</option>
          {areas.map(a => <option key={a}>{a}</option>)}
        </select>
      ))}
      {field('cf-msg', 'How can we help?', (
        <textarea id="cf-msg" required rows={4} placeholder="Tell us what you need - service type, home size, preferred date..." style={{ ...inputStyle, minHeight: 110, borderRadius: 8, resize: 'vertical' }} value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
      ))}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button type="submit" className="btn btn-primary">Send via WhatsApp</button>
        <a href="https://wa.me/256704834586" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Open WhatsApp directly</a>
      </div>
    </form>
  )
}

