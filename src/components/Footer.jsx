import { shop, nav } from '../data.js'

export default function Footer() {
  const year = 2026
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="brand__name">Manzoni</span>
          <span className="brand__sub">Pasticceria · {shop.city}</span>
          <p className="footer__tag">Alta pasticceria artigianale {shop.since}.</p>
        </div>

        <nav className="footer__nav">
          <h4>Menu</h4>
          {nav.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>

        <div className="footer__contact">
          <h4>Contatti</h4>
          <p>{shop.address}</p>
          <p><a href={`tel:${shop.phoneRaw}`}>{shop.phone}</a></p>
          <p><a href={`mailto:${shop.email}`}>{shop.email}</a></p>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container">
          <p>
            © {year} {shop.name} — Saronno (VA). Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}
