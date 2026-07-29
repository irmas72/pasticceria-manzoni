import { useState, useEffect } from 'react'
import { nav, shop } from '../data.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Blocca lo scroll del body quando il menu mobile è aperto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__name">Manzoni</span>
          <span className="brand__sub">Pasticceria · {shop.city}</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="nav__cta"
            href={`tel:${shop.phoneRaw}`}
            onClick={() => setOpen(false)}
          >
            Chiama ora
          </a>
        </nav>

        <button
          className={`burger ${open ? 'is-open' : ''}`}
          aria-label="Apri menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
