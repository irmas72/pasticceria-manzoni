import { ricorrenze } from '../data.js'
import { useLightbox } from '../lightbox.jsx'

export default function Ricorrenze() {
  const { kicker, title, intro, items } = ricorrenze
  const open = useLightbox()
  const photos = items.map((r) => ({ src: r.image, caption: r.title }))

  return (
    <section id="ricorrenze" className="section ricorrenze">
      <div className="container">
        <div className="section__head">
          <p className="kicker">{kicker}</p>
          <h2 className="section__title">{title}</h2>
          <p className="section__intro">{intro}</p>
        </div>

        <div className="rcards">
          {items.map((r, i) => (
            <article key={r.id} className="rcard">
              <button
                type="button"
                className="rcard__media zoomable"
                onClick={() => open(photos, i)}
                aria-label={`Ingrandisci: ${r.title}`}
              >
                <img src={r.image} alt={r.title} loading="lazy" />
                <span className="rcard__period">{r.period}</span>
              </button>
              <div className="rcard__body">
                <h3 className="rcard__title">{r.title}</h3>
                <p className="rcard__text">{r.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
