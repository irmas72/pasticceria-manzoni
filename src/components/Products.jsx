import { categories, shop } from '../data.js'

export default function Products() {
  return (
    <section id="vetrina" className="section products">
      <div className="container">
        <div className="section__head">
          <p className="kicker">La vetrina</p>
          <h2 className="section__title">Le nostre creazioni</h2>
          <p className="section__intro">
            Dalle torte per ogni occasione alla piccola pasticceria, dal cioccolato
            artigianale al cake design: ogni prodotto è preparato ogni giorno nel nostro
            laboratorio.
          </p>
        </div>

        <div className="cards">
          {categories.map((c) => (
            <article key={c.id} className="card">
              <div className="card__media">
                <img src={c.image} alt={c.title} loading="lazy" />
              </div>
              <div className="card__body">
                <h3 className="card__title">{c.title}</h3>
                <p className="card__text">{c.text}</p>
                <ul className="chips">
                  {c.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="products__note">
          <p>
            Realizziamo <strong>torte su ordinazione</strong> e personalizzate per
            compleanni, cerimonie e feste. Per informazioni e prenotazioni contattaci
            allo <a href={`tel:${shop.phoneRaw}`}>{shop.phone}</a> o scrivici su WhatsApp.
          </p>
          <a
            className="btn btn--gold"
            href={`https://wa.me/${shop.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Prenota su WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
