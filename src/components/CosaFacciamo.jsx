import { cosaFacciamo, shop } from '../data.js'

export default function CosaFacciamo() {
  const { kicker, title, intro, features, territorio } = cosaFacciamo

  return (
    <section id="cosa-facciamo" className="section cosa">
      <div className="container">
        <div className="section__head">
          <p className="kicker">{kicker}</p>
          <h2 className="section__title">{title}</h2>
          <p className="section__intro">{intro}</p>
        </div>

        <div className="features">
          {features.map((f, i) => (
            <article
              key={f.id}
              className={`feature ${i % 2 === 1 ? 'feature--reverse' : ''}`}
            >
              <div className="feature__media">
                <img src={f.image} alt={f.title} loading="lazy" />
              </div>
              <div className="feature__body">
                <p className="feature__eyebrow">{f.eyebrow}</p>
                <h3 className="feature__title">{f.title}</h3>
                <p className="feature__text">{f.text}</p>
                {f.list && (
                  <ul className="feature__list">
                    {f.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="cosa__territorio">
          <h3>{territorio.title}</h3>
          <p>{territorio.text}</p>
          <p className="cosa__cta">
            Vieni a trovarci in <strong>{shop.address}</strong> per scoprire di persona
            la varietà e l’eccellenza della nostra pasticceria.
          </p>
          <a
            className="btn btn--gold"
            href={shop.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Organizza la tua festa con noi
          </a>
        </div>
      </div>
    </section>
  )
}
