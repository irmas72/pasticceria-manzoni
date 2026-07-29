# Pasticceria Manzoni — Sito web

Sito web vetrina della **Pasticceria Manzoni** di Saronno (VA): menu/vetrina prodotti,
gallery fotografica e contatti. Realizzato con **React + Vite**.

🔗 **Live:** _(da collegare su Vercel)_

## Sviluppo in locale

```bash
npm install     # installa le dipendenze
npm run dev     # avvia in locale su http://localhost:5173
npm run build   # genera la build ottimizzata in dist/
npm run preview # anteprima della build di produzione
```

## Struttura

- `src/` — codice React (componenti in `src/components/`, contenuti in `src/data.js`)
- `public/images/` — foto dei prodotti
- `PROGETTO.md` — documento di tracciamento del progetto

## Pubblicazione su Vercel

Il progetto include `vercel.json` (framework Vite, output `dist/`).
Su Vercel: **Add New → Project → Import** questo repository GitHub; il deploy è automatico
ad ogni `git push`.

---
© 2026 Pasticceria Manzoni — Saronno (VA).
