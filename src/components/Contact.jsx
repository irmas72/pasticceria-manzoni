import { shop } from '../data.js'

function Row({ icon, children }) {
  return (
    <li className="contact__row">
      <span className="contact__icon">{icon}</span>
      <span>{children}</span>
    </li>
  )
}

export default function Contact() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    shop.mapQuery,
  )}&z=16&output=embed`

  return (
    <section id="contatti" className="section contact">
      <div className="container">
        <div className="section__head">
          <p className="kicker">Contatti</p>
          <h2 className="section__title">Vieni a trovarci</h2>
          <p className="section__intro">
            Per informazioni o prenotazioni chiamaci o scrivici: ti risponderemo il
            prima possibile.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <ul className="contact__list">
              <Row icon="📍">
                <strong>Indirizzo</strong>
                <br />
                {shop.address}
              </Row>
              <Row icon="📞">
                <strong>Telefono</strong>
                <br />
                <a href={`tel:${shop.phoneRaw}`}>{shop.phone}</a>
                <br />
                <small>{shop.phoneHours}</small>
              </Row>
              <Row icon="💬">
                <strong>WhatsApp</strong>
                <br />
                <a
                  href={`https://wa.me/${shop.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {shop.whatsapp}
                </a>
              </Row>
              <Row icon="✉️">
                <strong>Email</strong>
                <br />
                <a href={`mailto:${shop.email}`}>{shop.email}</a>
              </Row>
            </ul>

            <div className="hours">
              <h3>Orari di apertura</h3>
              <table>
                <tbody>
                  {shop.hours.map((h) => (
                    <tr key={h.day} className={h.closed ? 'is-closed' : ''}>
                      <th scope="row">{h.day}</th>
                      <td>{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="contact__actions">
              <a className="btn btn--gold" href={`tel:${shop.phoneRaw}`}>Chiama ora</a>
              <a
                className="btn btn--dark"
                href={`https://wa.me/${shop.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Scrivici su WhatsApp
              </a>
            </div>
          </div>

          <div className="contact__map">
            <iframe
              title="Mappa Pasticceria Manzoni Saronno"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
