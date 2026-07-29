import { useEffect } from 'react'
import { LightboxProvider } from './lightbox.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import CosaFacciamo from './components/CosaFacciamo.jsx'
import Products from './components/Products.jsx'
import Ricorrenze from './components/Ricorrenze.jsx'
import Gallery from './components/Gallery.jsx'
import Recensioni from './components/Recensioni.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // Rivelazione morbida delle sezioni allo scroll (progressive enhancement:
  // senza JS o con "riduci movimento" resta tutto visibile).
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const els = Array.from(document.querySelectorAll('.section'))
    document.documentElement.classList.add('js-reveal')
    els.forEach((el) => el.classList.add('reveal'))

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))

    // Sicurezza: se per qualsiasi motivo l'osservatore non scatta,
    // dopo un po' mostriamo comunque tutto (il contenuto non resta mai nascosto).
    const fallback = setTimeout(() => els.forEach((el) => el.classList.add('is-visible')), 2600)

    return () => {
      io.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  return (
    <LightboxProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CosaFacciamo />
        <Products />
        <Ricorrenze />
        <Gallery />
        <Recensioni />
        <Contact />
      </main>
      <Footer />
    </LightboxProvider>
  )
}
