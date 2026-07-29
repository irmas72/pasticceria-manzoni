// Contenuti del sito Pasticceria Manzoni.
// Le foto sono in /public/images (servite alla root: "images/...").

const img = (id) => `images/900900_0_${id}_580705.jpg`

export const shop = {
  name: 'Pasticceria Manzoni',
  city: 'Saronno',
  since: 'dal 1980',
  years: 'oltre 45 anni',
  tagline: 'Alta pasticceria artigianale nel cuore di Saronno',
  intro:
    'Da oltre 45 anni il nostro laboratorio artigianale crea l’eccellenza pasticcera: ingredienti naturali di prima scelta, tradizione e passione in ogni dolce.',
  address: 'Via Manzoni 2/a, 21047 Saronno (VA)',
  phone: '02 9606535',
  phoneRaw: '+390296065350',
  phoneHours: 'dalle 9:00 alle 12:30 e dalle 15:30 alle 19:00',
  whatsapp: '02 9606534',
  whatsappRaw: '390296065340',
  email: 'pasticceriamanzoni@gmail.com',
  hours: [
    { day: 'Lunedì', time: 'Chiuso', closed: true },
    { day: 'Martedì', time: '08:30 – 12:30 · 15:00 – 19:15' },
    { day: 'Mercoledì', time: '08:30 – 12:30 · 15:00 – 19:15' },
    { day: 'Giovedì', time: '08:30 – 12:30 · 15:00 – 19:15' },
    { day: 'Venerdì', time: '08:30 – 12:30 · 15:00 – 19:15' },
    { day: 'Sabato', time: '08:30 – 12:30 · 15:00 – 19:15' },
    { day: 'Domenica', time: '08:30 – 12:30 · 15:00 – 19:15' },
  ],
  mapQuery: 'Pasticceria Manzoni, Via Manzoni 2, Saronno VA',
}

export const heroImage = img('5902101') // torta al cioccolato e lamponi

// Punti di forza (sotto l'hero / in Chi siamo)
export const values = [
  {
    icon: 'leaf',
    title: 'Ingredienti naturali',
    text: 'Uova freschissime, burro di panna, zucchero e farina: solo materie prime di prima scelta.',
  },
  {
    icon: 'hand',
    title: 'Lavorazione artigianale',
    text: 'Ogni creazione nasce dalle mani dei nostri maestri pasticceri, ogni giorno.',
  },
  {
    icon: 'heart',
    title: 'Etica e sostenibilità',
    text: 'Consumo responsabile e rispetto per l’ambiente, dalla materia prima allo smaltimento.',
  },
  {
    icon: 'star',
    title: 'Tradizione dal 1980',
    text: 'Oltre 45 anni di esperienza al servizio del gusto e della qualità.',
  },
]

// Vetrina prodotti — categorie principali
export const categories = [
  {
    id: 'torte',
    title: 'Torte & Dolci',
    image: img('5902101'),
    text:
      'Torte farcite e da forno, semifreddi e creazioni artigianali per ogni occasione: Crostate di frutta, Saint Honoré, Meringate, Chantilly, torte al cioccolato e Sacher.',
    tags: ['Crostate', 'Saint Honoré', 'Chantilly', 'Sacher'],
  },
  {
    id: 'mignon',
    title: 'Pasticceria Mignon',
    image: img('6028667'),
    text:
      'Un vastissimo assortimento di piccola pasticceria: piccoli capolavori di dolcezza, perfetti per un’occasione speciale o per un momento di golosità quotidiana.',
    tags: ['Pasticcini', 'Bignè', 'Tartellette', 'Frutta fresca'],
  },
  {
    id: 'cioccolato',
    title: 'Cioccolato & Praline',
    image: img('4255320'),
    text:
      'La nostra cioccolateria artigianale: praline, boeri, alkekengi, marrons glacés e scorze d’arancia candite ricoperte di cioccolato fondente, e mille altre golosità.',
    tags: ['Praline', 'Boeri', 'Marrons glacés', 'Uova di Pasqua'],
  },
  {
    id: 'cakedesign',
    title: 'Cake Design',
    image: img('6028661'),
    text:
      'Torte spettacolari personalizzate con fotografie, disegni e decorazioni in pasta di zucchero, oltre a cupcake e biscottoni decorati su misura per il tuo tema.',
    tags: ['Pasta di zucchero', 'Foto su torta', 'Cupcake', 'Su misura'],
  },
  {
    id: 'classici',
    title: 'Classici & Senza Lattosio',
    image: img('5902097'),
    text:
      'I grandi classici della tradizione — Brutti e Buoni, Dolce Varese — e una linea dedicata senza lattosio, per gustare i nostri dolci in totale sicurezza e senza rinunce.',
    tags: ['Brutti e Buoni', 'Dolce Varese', 'Senza lattosio'],
  },
  {
    id: 'lievitati',
    title: 'Grandi Lievitati & Feste',
    image: img('4255275'),
    text:
      'Panettoni, Pandori, Veneziane e Colombe secondo l’antica tradizione, senza conservanti. Per feste ed eventi: buffet dolce e salato, torte nuziali e confezioni regalo.',
    tags: ['Panettone', 'Colomba', 'Buffet', 'Confezioni regalo'],
  },
]

// Gallery — selezione di foto reali dei nostri prodotti (foto HD verificate)
export const gallery = [
  { src: img('5902101'), caption: 'Torta cioccolato e lamponi' },
  { src: img('3873316'), caption: 'Torta al cioccolato con riccioli' },
  { src: img('6028667'), caption: 'Torta battesimo in pasta di zucchero' },
  { src: img('4255320'), caption: 'Soggetti di cioccolato pasquali' },
  { src: img('5902097'), caption: 'Torta Chantilly' },
  { src: img('6028661'), caption: 'Cake design — tema corse' },
  { src: img('4255275'), caption: 'Uova di Pasqua artigianali confezionate' },
  { src: img('5964262'), caption: 'Torta con rose in pasta di zucchero' },
  { src: img('4028277'), caption: 'Torta laurea personalizzata' },
  { src: img('4255306'), caption: 'Cioccolato artigianale — scarpine' },
  { src: img('5902103'), caption: 'Torta al gianduia' },
  { src: img('3852144'), caption: 'Torta cerimonia' },
  { src: img('5935335'), caption: 'Uovo di Pasqua decorato' },
  { src: img('5964272'), caption: 'Cake design a tema' },
  { src: img('5902099'), caption: 'Creazione al cioccolato' },
  { src: img('6028669'), caption: 'Torta a tema con vetrina mignon' },
  { src: img('3873317'), caption: 'Torta classica al cioccolato' },
  { src: img('4255312'), caption: 'Cioccolateria di Pasqua' },
  { src: img('5964249'), caption: 'Cake design — make up' },
  { src: img('5935337'), caption: 'Uova di Pasqua per bambini' },
  { src: img('5902100'), caption: 'Dolce artigianale' },
  { src: img('6028663'), caption: 'Creazione personalizzata' },
  { src: img('3873320'), caption: 'Torta al cioccolato' },
  { src: img('6028671'), caption: 'Torta decorata' },
]

export const nav = [
  { href: '#home', label: 'Home' },
  { href: '#chi-siamo', label: 'Chi siamo' },
  { href: '#vetrina', label: 'Vetrina' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contatti', label: 'Contatti' },
]
