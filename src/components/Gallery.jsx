import { useState, useEffect, useCallback } from 'react'
import { gallery } from '../data.js'

export default function Gallery() {
  const [index, setIndex] = useState(-1)
  const open = index >= 0

  const close = useCallback(() => setIndex(-1), [])
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + gallery.length) % gallery.length),
    [],
  )
  const next = useCallback(
    () => setIndex((i) => (i + 1) % gallery.length),
    [],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close, prev, next])

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
              onClick={() => setIndex(i)}
              aria-label={`Ingrandisci: ${g.caption}`}
            >
              <img src={g.src} alt={g.caption} loading="lazy" />
              <span className="masonry__caption">{g.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lightbox__close" aria-label="Chiudi" onClick={close}>
            ×
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Precedente"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            ‹
          </button>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={gallery[index].src} alt={gallery[index].caption} />
            <figcaption>{gallery[index].caption}</figcaption>
          </figure>
          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label="Successiva"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
