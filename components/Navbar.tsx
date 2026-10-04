'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

const serviceGroups = [
  {
    label: 'Residential & Domestic',
    items: [
      { id: 'domestic-deep-cleaning',     name: 'Domestic Deep Cleaning',  tagline: 'Full home scrub - every room' },
      { id: 'sofa-upholstery-cleaning',   name: 'Sofa & Upholstery',       tagline: 'Shampoo, extract, refresh' },
      { id: 'carpet-rug-cleaning',        name: 'Carpet & Rug Cleaning',   tagline: 'Deep wash and dry' },
      { id: 'mattress-deep-cleaning',     name: 'Mattress Deep Cleaning',  tagline: 'Dust mites and stains removed' },
    ],
  },
  {
    label: 'Commercial & Specialised',
    items: [
      { id: 'office-cleaning',            name: 'Office & Corporate',      tagline: 'Scheduled around your hours' },
      { id: 'post-construction-cleaning', name: 'Post-Construction',       tagline: 'Dust, cement, paint residue' },
      { id: 'events-cleanup',             name: 'Events Cleanup',          tagline: 'Before setup & after the party' },
    ],
  },
  {
    label: 'Vehicle Care',
    items: [
      { id: 'car-detailing',              name: 'Bay Car Detailing',       tagline: 'Full detail at our Ntinda bay' },
      { id: 'mobile-car-detailing',       name: 'Mobile Car Detailing',    tagline: 'We come to your compound' },
    ],
  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Detect mobile vs desktop
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 767)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  function handleMouseEnter() {
    if (isMobile) return
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }

  function handleMouseLeave() {
    if (isMobile) return
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120)
  }

  function handleServicesClick(e: React.MouseEvent) {
    if (!isMobile) return // desktop: let link navigate normally
    e.preventDefault()   // mobile: prevent navigation, toggle sub-list
    setServicesOpen((v) => !v)
  }

  function closeAll() {
    setMobileOpen(false)
    setServicesOpen(false)
    setMegaOpen(false)
  }

  const allServices = serviceGroups.flatMap((g) => g.items)

  return (
    <>
      {/* Top strip */}
      <div className="top-strip">
        WE CLEAN IT ALL &nbsp;·&nbsp;{' '}
        <a href="tel:+256704834586">+256 704 834 586</a>
      </div>

      {/* Main nav */}
      <div className="nav-wrap">
        <div className="nav-inner">

          {/* Logo */}
          <Link href="/" className="nav-logo" aria-label="Ask Maya home">
            <Image
              src="/logo.jpg"
              alt="Ask Maya UGA Cleaning logo"
              width={96} height={56}
              style={{ objectFit: 'contain', mixBlendMode: 'multiply' }}
              priority
            />
          </Link>

          {/* Nav links */}
          <nav className={`nav-links${mobileOpen ? ' open' : ''}`} aria-label="Main navigation">

            {/* Services */}
            <div
              className="nav-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Single trigger — on mobile prevents navigation and toggles list */}
              <Link
                href="/services"
                data-active={pathname.startsWith('/services') ? 'true' : 'false'}
                onClick={handleServicesClick}
                aria-expanded={isMobile ? servicesOpen : undefined}
                style={{ display: 'flex', alignItems: 'center', gap: 4 }}
              >
                Services
                <svg
                  width="12" height="12" viewBox="0 0 12 12"
                  fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  style={{
                    transition: 'transform 200ms ease',
                    transform: (isMobile ? servicesOpen : megaOpen) ? 'rotate(180deg)' : 'rotate(0deg)',
                    flexShrink: 0,
                  }}
                >
                  <path d="M2 4l4 4 4-4"/>
                </svg>
              </Link>

              {/* Desktop mega panel */}
              {!isMobile && megaOpen && (
                <div
                  className="mega mega--state"
                  role="region"
                  aria-label="Services menu"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 32px' }}>
                    {serviceGroups.map((group) => (
                      <div key={group.label} style={{ marginBottom: 8 }}>
                        <p className="mega-group-label">{group.label}</p>
                        <ul className="mega-list">
                          {group.items.map((item) => (
                            <li key={item.id} className="mega-item">
                              <Link href={`/services/${item.id}`} onClick={closeAll}>
                                <span className="mega-item-text">
                                  <strong>{item.name}</strong>
                                  <span>{item.tagline}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile expandable sub-list */}
              {isMobile && servicesOpen && (
                <ul style={{
                  listStyle: 'none', padding: '4px 0 8px 16px', margin: 0,
                  borderLeft: '2px solid var(--line)',
                  display: 'flex', flexDirection: 'column', gap: 0,
                }}>
                  {allServices.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/services/${item.id}`}
                        onClick={closeAll}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '10px 8px',
                          fontSize: 15,
                          fontWeight: 500,
                          color: 'var(--navy)',
                          fontFamily: 'var(--font-body)',
                          minHeight: 44,
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link href="/pricing" data-active={pathname === '/pricing' ? 'true' : 'false'} onClick={closeAll}>Pricing</Link>
            <Link href="/gallery" data-active={pathname === '/gallery' ? 'true' : 'false'} onClick={closeAll}>Gallery</Link>
            <Link href="/about"   data-active={pathname === '/about'   ? 'true' : 'false'} onClick={closeAll}>About</Link>
            <Link href="/contact" data-active={pathname === '/contact' ? 'true' : 'false'} onClick={closeAll}>Contact</Link>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a
              href="https://wa.me/256704834586?text=Hi%20Maya%2C%20I%20need%20a%20cleaning%20quote"
              target="_blank" rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get a quote
            </a>
            <button
              className="nav-mobile-btn"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => { setMobileOpen((v) => !v); setServicesOpen(false) }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileOpen
                  ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                  : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
                }
              </svg>
            </button>
          </div>

        </div>
      </div>
    </>
  )
}
