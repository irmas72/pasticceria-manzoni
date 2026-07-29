# Progetto — Sito Web Pasticceria Manzoni (Saronno)

> Documento di tracciamento del progetto. Aggiornato man mano che il lavoro procede.
> Ultimo aggiornamento: **2026-07-29**

## 🔴 In breve (stato attuale)
- 🌐 **LIVE:** https://pasticceria-manzoni.vercel.app · 📦 repo: github.com/irmas72/pasticceria-manzoni
- **Deploy:** lo fa Claude con `vercel --prod` ad ogni modifica (no auto-deploy). Verifica sempre mobile (locale + live).
- **Sezioni:** Home · Chi siamo · Cosa facciamo · Vetrina · Ricorrenze (7, cronologiche) · Gallery · **Recensioni (Google, reali)** · Contatti
- **Extra:** SEO dati strutturati (Bakery), WhatsApp precompilato, animazioni allo scroll, foto inutilizzate in `_originali/` (escluse dal deploy via `.vercelignore`).
- **Testi:** tono su bontà/artigianalità/cura del dettaglio. ❌ evitare "maniacale".

---

## 1. Obiettivo

Realizzare un **sito web vetrina** per la Pasticceria Manzoni di Saronno con:
- **Menu / Vetrina prodotti** (torte & dolci, pasticceria mignon, cioccolato & praline, cake design, ecc.)
- **Vetrina immagini (Gallery)** con le foto reali dei prodotti
- **Sezione contatti** (indirizzo, telefono, WhatsApp, email, orari, mappa)

Stile richiesto: **elegante e raffinato** (toni crema / cioccolato / oro, tipografia serif).
Tecnologia richiesta: **React moderno** (React + Vite).

Fonte contenuti e immagini: sito attuale **http://www.pasticceriamanzoni.com/**
(le sezioni e le foto sono state estratte da lì, su richiesta del committente).

---

## 2. Dati reali dell'attività

| Campo | Valore |
|---|---|
| Nome | **Pasticceria Manzoni** — Saronno |
| Storia | Laboratorio artigianale da **oltre 45 anni** (dal 1980) |
| Indirizzo | Via Manzoni 2/a, 21047 **Saronno (VA)** |
| Telefono | **02 9606534** (info 9:00–12:30 / 15:30–19:00) |
| WhatsApp | **02 9606534** (numero fisso con WhatsApp Business) |
| Email | **pasticceriamanzoni@gmail.com** |
| Orari | Lun **chiuso** · Mar–Dom **08:30–12:30 / 15:00–19:15** |

### Sezioni/prodotti (dal sito originale)
- **Chi siamo** — Tradizione, Qualità ed Etica; ingredienti naturali di prima scelta; attenzione ambientale/etica.
- **Pasticceria fresca e secca**, torte farcite e da forno, semifreddi.
- **Pasticceria mignon** — vasto assortimento di piccola pasticceria.
- **Torte per ogni occasione** — Crostate di frutta, Saint Honoré, Meringate, Chantilly, torte al cioccolato, Sacher.
- **Torte senza lattosio** — linea dedicata alle intolleranze.
- **Pralineria / Cioccolateria artigianale** — praline, boeri, alkekengi, marrons glacés, scorze d'arancia candite.
- **Cake design** — torte personalizzate con foto/disegni/decorazioni, cupcake, biscottoni; torte in pasta di zucchero.
- **Feste ed eventi** — buffet dolce e salato (pizzette, salatini, tartine, panini, focacce, spiedini), torte nuziali.
- **Grandi lievitati** — Panettoni, Pandori, Veneziane, Colombe (senza conservanti, solo nei periodi festivi).
- **Dolci della tradizione locale** — Brutti e Buoni, Dolce Varese.
- **Confezioni e articoli regalo**.

---

## 3. Tecnologia e struttura

- **Stack:** React 18 + Vite 5 (build statica, pubblicabile ovunque).
- **Nessuna dipendenza extra** oltre React (gallery/lightbox in vanilla JS+CSS).
- **Font:** Playfair Display (titoli) + Nunito Sans (testo) via Google Fonts.

### Struttura cartelle
```
Pasticceria/
├─ PROGETTO.md            ← questo file
├─ index.html
├─ package.json
├─ vite.config.js
├─ public/
│  └─ images/             ← 282 immagini scaricate dal sito originale
│     ├─ 900900_*.jpg     ← 124 foto in alta risoluzione (gallery/prodotti)
│     └─ (140/280/440/670_*  versioni ridotte)
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css           ← design system (palette, tipografia)
   ├─ data.js             ← contenuti (info negozio, categorie, gallery)
   └─ components/
      ├─ Navbar.jsx
      ├─ Hero.jsx
      ├─ About.jsx        (Chi siamo)
      ├─ Products.jsx     (Vetrina prodotti)
      ├─ Gallery.jsx      (griglia + lightbox)
      ├─ Contact.jsx
      └─ Footer.jsx
```

### Palette (design system)
- Crema/sfondo: `#FBF7F0`
- Cioccolato (testi/scuri): `#3E2723`, `#5D4037`
- Oro (accento): `#C9A24B`
- Bianco caldo card: `#FFFDF9`

---

## 4. Immagini

- Scaricate **tutte** le immagini dal sito originale in `public/images/` (**282 file, ~22 MB**).
- **124 foto HD** (prefisso `900900_`, max 900px) usate per prodotti e gallery.
- Foto verificate visivamente e mappate alle categorie (vedi `src/data.js`).
- Escluse dalla gallery le "schede ricetta" con molto testo sovrimpresso (serie `5921xxx`).

---

## 5. Stato avanzamento

- [x] Raccolta contenuti e dati dal sito originale
- [x] Download di tutte le immagini (282 file)
- [x] Analisi e selezione immagini per categoria/hero/gallery
- [x] Scaffold progetto React + Vite
- [x] Componenti (Navbar, Hero, Chi siamo, Vetrina, Gallery, Contatti, Footer)
- [x] Stile elegante + responsive (mobile menu, lightbox)
- [x] Installazione dipendenze e verifica build
- [x] **Repository su GitHub** (account `irmas72`)
- [x] **Pubblicazione online su Vercel** (account `irmas72-3288`, login Google)

---

## 5-bis. Pubblicazione (GitHub + Vercel)

| Cosa | Link |
|---|---|
| 🌐 **Sito LIVE** | **https://pasticceria-manzoni.vercel.app** |
| 📦 Repository GitHub | https://github.com/irmas72/pasticceria-manzoni |
| 🔎 Dashboard Vercel | https://vercel.com/irmas72-3288s-projects/pasticceria-manzoni |

- Account GitHub: **irmas72** · Account Vercel: **irmas72-3288** (login con Google `irmas72@gmail.com`).
- Deploy effettuato con **Vercel CLI** (`vercel --prod`). Build eseguita da Vercel (Vite → `dist/`).
- File `.vercel/` e `.env.local` sono **esclusi da git** (contengono il link al progetto e token locali).

### ⚠️ Deploy automatico ad ogni push — DA COMPLETARE
Il collegamento automatico GitHub↔Vercel non è ancora attivo: al login Vercel è stato
usato **Google**, non GitHub, quindi manca la "Login Connection" a GitHub.
Per attivare il deploy automatico ad ogni `git push`:
1. Vai su **vercel.com → Settings → Connections** (o Login Connections) e collega **GitHub**.
2. Nel progetto: **Settings → Git → Connect Git Repository** → scegli `irmas72/pasticceria-manzoni`.

Finché non è collegato, per aggiornare il sito online si rilancia da terminale:
```bash
vercel --prod
```

---

## 6. Come usare il progetto

```bash
npm install        # installa le dipendenze (una volta)
npm run dev        # avvia il sito in locale (http://localhost:5173)
npm run build      # genera la versione ottimizzata in dist/
npm run preview    # anteprima della build
```

Per pubblicare: caricare il contenuto della cartella `dist/` su un hosting statico
(es. Netlify, Vercel, Aruba, o lo stesso spazio web attuale).

---

## 7. Cose da personalizzare / TODO futuri

- [ ] Verificare/aggiornare gli **orari** reali stagionali.
- [ ] Aggiungere un **logo** ufficiale se disponibile (ora è testuale).
- [ ] Eventuale **modulo ordini/prenotazioni** (es. torte su ordinazione via WhatsApp/form).
- [ ] Coordinate GPS esatte per la mappa (ora punta a "Via Manzoni 2, Saronno").
- [ ] Ottimizzare/ricomprimere le immagini se si vuole ridurre il peso.
- [ ] Testi legali: Privacy Policy / Cookie (il sito originale usa iubenda).
