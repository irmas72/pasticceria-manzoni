import { values, shop } from '../data.js'

const icons = {
  leaf: 'M12 3C7 3 4 7 4 12c0 4 3 8 8 9 0-6 2-9 6-11-3 0-5 1-6 3 0-4 0-8-0-10Z',
  hand: 'M7 11V6a2 2 0 1 1 4 0v4m0 0V4a2 2 0 1 1 4 0v6m0-1a2 2 0 1 1 4 0v5a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6l-1-3a1.6 1.6 0 0 1 3-1l.5 1.5',
  heart: 'M12 20s-7-4.4-9.3-8.5C1 8 2.6 5 5.6 5 7.5 5 9 6 12 9c3-3 4.5-4 6.4-4 3 0 4.6 3 2.9 6.5C19 15.6 12 20 12 20Z',
  star: 'M12 3l2.6 5.6L21 9.3l-4.5 4.3L17.7 20 12 16.9 6.3 20l1.2-6.4L3 9.3l6.4-.7L12 3Z',
}

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
      stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d={icons[name]} />
    </svg>
  )
}

export default function About() {
  return (
    <section id="chi-siamo" className="section about">
      <div className="container">
        <div className="section__head">
          <p className="kicker">La nostra storia</p>
          <h2 className="section__title">Tradizione, Qualità ed Etica</h2>
        </div>

        <div className="about__grid">
          <div className="about__text">
            <p>
              Da <strong>{shop.years}</strong>, il nostro laboratorio artigianale si dedica
              alla creazione dell’eccellenza pasticcera per soddisfare anche i palati più
              esigenti. I nostri maestri pasticceri selezionano esclusivamente
              <strong> materie prime naturali e di prima scelta</strong> e lavorano ogni
              dolce <strong>a mano</strong>, con la pazienza e la precisione di un’arte antica.
            </p>
            <p>
              Il nostro obiettivo è semplice e ambizioso: portare ogni giorno sulla vostra
              tavola prodotti <em>freschi, genuini e irresistibilmente buoni</em>. Ogni
              creazione è curata nei minimi dettagli — dalla farcitura alla decorazione —
              perché per noi <strong>la bellezza di un dolce è parte del suo sapore</strong>.
            </p>
            <p>
              Attenzione alle esigenze alimentari, rispetto per l’ambiente e amore per il
              mestiere: scegliere la Pasticceria Manzoni significa scegliere un dolce
              <strong> buono, curato e fatto con passione</strong>, come una volta.
            </p>
          </div>

          <ul className="values">
            {values.map((v) => (
              <li key={v.title} className="value">
                <span className="value__icon"><Icon name={v.icon} /></span>
                <div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
