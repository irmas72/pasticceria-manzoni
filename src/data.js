// Contenuti del sito Pasticceria Manzoni.
// Le foto sono in /public/images (servite alla root: "images/...").

const img = (id) => `images/900900_0_${id}_580705.jpg`
const imgS = (id) => `images/280_0_${id}_580705.jpg` // versioni ridotte (foto solo in bassa risoluzione)

export const shop = {
  name: 'Pasticceria Manzoni',
  city: 'Saronno',
  since: 'dal 1980',
  years: 'oltre 45 anni',
  tagline: 'Alta pasticceria artigianale nel cuore di Saronno',
  intro:
    'Da oltre 45 anni ogni dolce nasce a mano nel nostro laboratorio: ingredienti naturali di prima scelta, gesti della tradizione e una cura maniacale per il dettaglio e la bellezza di ogni creazione.',
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

// Sezione "Cosa facciamo" — feste ed eventi, dolce e salato
export const cosaFacciamo = {
  kicker: 'Cosa facciamo',
  title: 'Feste ed eventi: tutto il gusto del dolce e del salato',
  intro:
    'Se stai organizzando una festa, pensiamo a tutto noi: dalla torta perfetta al buffet salato, per garantirti un successo assicurato.',
  features: [
    {
      id: 'torte-creazioni',
      eyebrow: 'Torte & Cake Design',
      title: 'Le nostre torte e creazioni dolci',
      image: img('3933755'),
      text:
        'Realizziamo torte classiche o moderne e spettacolari creazioni di cake design. Possiamo personalizzare ogni torta con fotografie, disegni o decorazioni speciali, oltre a preparare cupcake e biscottoni decorati su misura per il tuo tema.',
    },
    {
      id: 'lievitati',
      eyebrow: 'La tradizione delle feste',
      title: 'Grandi lievitati',
      image: imgS('3861263'),
      text:
        'Da oltre 45 anni i nostri lievitati sono il nostro miglior biglietto da visita: Panettoni, Pandori, Veneziane e Colombe, secondo l’antica tradizione dolciaria e con materie prime di altissima qualità. Sempre fragranti e, per scelta, rigorosamente senza conservanti, realizzati solo nei periodi delle festività per garantire la massima freschezza.',
    },
    {
      id: 'eventi-salato',
      eyebrow: 'Rinfreschi & Aperitivi',
      title: 'Un ricco assortimento salato',
      image: imgS('6021537'),
      text:
        'Per i tuoi rinfreschi e aperitivi offriamo una selezione di specialità salate sempre fresche, oltre a spettacolari torte per cerimonie ed eventi. E per un pensiero speciale, un vasto assortimento di articoli regalo e scatole delle migliori marche.',
      list: [
        'Pizzette, salatini e tartine assortite',
        'Panini morbidi e brioches salate farcite',
        'Pizza e focaccia artigianale',
        'Sfiziosi spiedini di frutta o salati',
      ],
    },
  ],
  territorio: {
    title: 'Eccellenza artigiana e sapori del territorio',
    text:
      'Dalle torte classiche alle torte gelato, fino alle torte nuziali con decorazioni personalizzate: pasticceria fresca e secca, meringhe, biscotti e i grandi dolci della tradizione locale, come i famosi Brutti e Buoni e il delizioso Dolce Varese.',
  },
}

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

// Ricorrenze — specialità stagionali (dal sito originale)
export const ricorrenze = {
  kicker: 'Le nostre ricorrenze',
  title: 'Specialità delle feste',
  intro:
    'Ogni festività ha il suo dolce. Preparati a mano nel nostro laboratorio, seguendo la tradizione e curando ogni dettaglio estetico.',
  items: [
    {
      id: 'donna',
      period: '8 Marzo',
      title: 'Festa della Donna',
      image: imgS('5964236'),
      text:
        'La nostra Torta Mimosa: Pan di Spagna soffice, vellutata crema chantilly e macedonia, con l’inconfondibile finitura artigianale a cubetti che ricrea i fiori di mimosa. Disponibile anche nella scenografica versione Mimosa Red ai frutti di bosco.',
    },
    {
      id: 'papa',
      period: '19 Marzo',
      title: 'Festa del Papà',
      image: imgS('5964238'),
      text:
        'Torte personalizzate che parlano di lui — a forma di camicia, di cuore o con la sua fotografia — e le iconiche Zeppole di San Giuseppe, al forno o fritte, farcite con crema pasticcera e panna.',
    },
    {
      id: 'epifania',
      period: 'Epifania · 6 Gennaio',
      title: 'Cammelli di Sfoglia',
      image: imgS('6013945'),
      text:
        'La tradizione dell’Epifania: cammelli di pasta sfoglia friabili, leggeri e dorati, realizzati a mano con burro di panna di alta qualità. Classici con zucchero caramellato o farciti con crema, panna fresca e cioccolato.',
    },
    {
      id: 'pasqua',
      period: 'Pasqua',
      title: 'Uova & Cioccolato di Pasqua',
      image: imgS('5150968'),
      text:
        'Uova artigianali in cioccolato puro al latte, fondente o bianco, con decori interamente fatti a mano: piccole opere d’arte. Sorpresa personalizzata su richiesta (servizio gratuito) e un mondo di soggetti in cioccolato.',
    },
  ],
}

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
  { src: img('5975408'), caption: 'Number cake ai frutti di bosco e fiori' },
  { src: img('5941976'), caption: 'Torta 50° anniversario' },
  { src: img('5730526'), caption: 'Cake design — Fiat 500' },
  { src: img('5941971'), caption: 'Cake design — Harry Potter' },
  { src: img('6028673'), caption: 'Torta di compleanno alla panna' },
  { src: img('6021544'), caption: 'Torta di compleanno decorata' },
]

export const nav = [
  { href: '#home', label: 'Home' },
  { href: '#chi-siamo', label: 'Chi siamo' },
  { href: '#cosa-facciamo', label: 'Cosa facciamo' },
  { href: '#vetrina', label: 'Vetrina' },
  { href: '#ricorrenze', label: 'Ricorrenze' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contatti', label: 'Contatti' },
]
