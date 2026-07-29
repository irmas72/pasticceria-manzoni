import { ricorrenze } from '../data.js'

export default function Ricorrenze() {
  const { kicker, title, intro, items } = ricorrenze

  return (
    <section id="ricorrenze" className="section ricorrenze">
      <div className="container">
        <div className="section__head">
          <p className="kicker">{kicker}</p>
          <h2 className="section__title">{title}</h2>
          <p className="section__intro">{intro}</p>
        </div>

        <div className="rcards">
          {items.map((r) => (
            <article key={r.id} className="rcard">
              <div className="rcard__media">
                <img src={r.image} alt={r.title} loading="lazy" />
                <span className="rcard__period">{r.period}</span>
              </div>
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
