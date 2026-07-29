import { reviews, shop } from '../data.js'

function Stars({ n }) {
  return (
    <span className="stars" aria-label={`${n} su 5`}>
      {'★★★★★'.slice(0, n)}
      <span className="stars__empty">{'★★★★★'.slice(n)}</span>
    </span>
  )
}

export default function Recensioni() {
  return (
    <section id="recensioni" className="section recensioni">
      <div className="container">
        <div className="section__head">
          <p className="kicker">{reviews.kicker}</p>
          <h2 className="section__title">{reviews.title}</h2>
          <p className="section__intro">{reviews.intro}</p>
        </div>

        <div className="reviews">
          {reviews.items.map((r) => (
            <figure key={r.name + r.date} className="review">
              <Stars n={r.stars} />
              <blockquote className="review__text">“{r.text}”</blockquote>
              <figcaption className="review__meta">
                <span className="review__avatar" aria-hidden="true">
                  {r.name.charAt(0)}
                </span>
                <span>
                  <strong>{r.name}</strong>
                  <small>{r.date} · Google</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="reviews__cta">
          <a
            className="btn btn--gold"
            href={shop.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Leggi tutte le recensioni su Google
          </a>
        </div>
      </div>
    </section>
  )
}
