import { gallery } from '../data.js'
import { useLightbox } from '../lightbox.jsx'

export default function Gallery() {
  const open = useLightbox()

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section__head">
          <p className="kicker">Foto gallery</p>
          <h2 className="section__title">Uno sguardo alle nostre dolcezze</h2>
          <p className="section__intro">
            Alcune delle creazioni uscite dal nostro laboratorio. Tocca una foto per
            ingrandirla.
          </p>
        </div>

        <div className="masonry">
          {gallery.map((g, i) => (
            <button
              key={g.src}
              className="masonry__item"
              onClick={() => open(gallery, i)}
              aria-label={`Ingrandisci: ${g.caption}`}
            >
              <img src={g.src} alt={g.caption} loading="lazy" />
              <span className="masonry__caption">{g.caption}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
