import { heroImage, shop } from '../data.js'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__content container">
        <p className="hero__eyebrow">Saronno · {shop.since}</p>
        <h1 className="hero__title">
          Pasticceria <span>Manzoni</span>
        </h1>
        <p className="hero__lead">{shop.tagline}</p>
        <p className="hero__sub">{shop.intro}</p>
        <div className="hero__actions">
          <a href="#vetrina" className="btn btn--gold">Scopri la vetrina</a>
          <a href="#contatti" className="btn btn--ghost">Dove siamo</a>
        </div>
      </div>
      <a href="#chi-siamo" className="hero__scroll" aria-label="Scorri">
        <span />
      </a>
    </section>
  )
}
