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
    'Da oltre 45 anni ogni dolce nasce a mano nel nostro laboratorio: materie prime naturali di prima scelta, i gesti lenti della tradizione e una cura meticolosa per ogni dettaglio. Perché la bellezza di una creazione è già una promessa di bontà.',
  address: 'Via Manzoni 2/a, 21047 Saronno (VA)',
  phone: '02 9606534',
  phoneRaw: '+390296065340',
  phoneHours: 'dalle 9:00 alle 12:30 e dalle 15:30 alle 19:00',
  whatsapp: '02 9606534',
  whatsappRaw: '390296065340',
  whatsappUrl:
    'https://wa.me/390296065340?text=' +
    encodeURIComponent(
      'Ciao Pasticceria Manzoni! Vorrei fare un ordine o avere un’informazione sui vostri prodotti.',
    ),
  email: 'pasticceriamanzoni@gmail.com',
  googleReviewsUrl:
    'https://www.google.com/maps/place/Pasticceria+Manzoni/@45.6240393,9.0401694,17z/data=!4m6!3m5!1s0x478691565112a24f:0x79605434abfffaf5!8m2!3d45.6240393!4d9.0401694!16s%2Fg%2F1thtb_vv',
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

// Punti di forza (Chi siamo)
export const values = [
  {
    icon: 'leaf',
    title: 'Materie prime di prima scelta',
    text: 'Uova freschissime, burro di panna, zucchero e farina: solo ingredienti naturali e genuini, perché la vera bontà nasce da qui.',
  },
  {
    icon: 'hand',
    title: 'Fatto a mano, ogni giorno',
    text: 'Ogni creazione è lavorata e modellata a mano dai nostri maestri pasticceri, con la pazienza e la passione dell’arte dolciaria.',
  },
  {
    icon: 'star',
    title: 'Cura del dettaglio',
    text: 'Rifiniture eseguite a mano e decori curati uno a uno: ogni dolce è bello da guardare prima ancora che buono da gustare.',
  },
  {
    icon: 'heart',
    title: 'Etica e sostenibilità',
    text: 'Consumo responsabile e rispetto per l’ambiente, in ogni fase: dalla scelta delle materie prime fino allo smaltimento.',
  },
]

// Sezione "Cosa facciamo" — feste ed eventi, dolce e salato
export const cosaFacciamo = {
  kicker: 'Cosa facciamo',
  title: 'Feste ed eventi: tutto il gusto del dolce e del salato',
  intro:
    'Se stai organizzando una festa, pensiamo a tutto noi: dalla torta perfetta al buffet salato, tutto preparato a mano con la stessa cura, per regalarti un successo assicurato.',
  features: [
    {
      id: 'torte-creazioni',
      eyebrow: 'Torte & Cake Design',
      title: 'Le nostre torte e creazioni dolci',
      image: img('3933755'),
      text:
        'Realizziamo torte classiche e moderne e spettacolari creazioni di cake design, personalizzate con fotografie, disegni e decorazioni in pasta di zucchero modellate a mano. Cupcake e biscottoni decorati su misura per il tuo tema, curati in ogni singolo dettaglio.',
    },
    {
      id: 'lievitati',
      eyebrow: 'La tradizione delle feste',
      title: 'Grandi lievitati',
      image: imgS('3861263'),
      text:
        'Da oltre 45 anni i nostri grandi lievitati sono il nostro orgoglio: Panettoni, Pandori, Veneziane e Colombe, secondo l’antica tradizione dolciaria e con materie prime di altissima qualità. Soffici, profumati e rigorosamente senza conservanti, sfornati solo nei periodi delle festività per offrirti tutta la loro bontà appena fatta.',
    },
    {
      id: 'eventi-salato',
      eyebrow: 'Rinfreschi & Aperitivi',
      title: 'Un ricco assortimento salato',
      image: imgS('6021537'),
      text:
        'Per i tuoi rinfreschi e aperitivi, una selezione di specialità salate sempre fresche, preparate ogni giorno, oltre a spettacolari torte per cerimonie ed eventi. E per un pensiero speciale, un raffinato assortimento di articoli regalo e confezioni delle migliori marche.',
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
      'Dalle torte classiche alle torte gelato, fino alle torte nuziali con decorazioni personalizzate: pasticceria fresca e secca, meringhe, biscotti e i grandi dolci della tradizione locale, come i famosi Brutti e Buoni e il delizioso Dolce Varese. Bontà autentiche, fatte come una volta.',
  },
}

// Vetrina prodotti — categorie principali
export const categories = [
  {
    id: 'torte',
    title: 'Torte & Dolci',
    image: img('5902101'),
    text:
      'Torte farcite e da forno, semifreddi e creazioni artigianali per ogni occasione: dalle crostate di frutta fresca al Saint Honoré, dalla Chantilly alla Sacher. Ogni fetta è morbidezza, profumo e gusto autentico.',
    tags: ['Crostate', 'Saint Honoré', 'Chantilly', 'Sacher'],
  },
  {
    id: 'mignon',
    title: 'Pasticceria Mignon',
    image: img('6028667'),
    text:
      'Un vastissimo assortimento di piccola pasticceria: piccoli capolavori rifiniti a mano, uno più goloso dell’altro, perfetti da gustare con gli occhi prima ancora che al palato.',
    tags: ['Pasticcini', 'Bignè', 'Tartellette', 'Frutta fresca'],
  },
  {
    id: 'cioccolato',
    title: 'Cioccolato & Praline',
    image: img('4255320'),
    text:
      'La nostra cioccolateria artigianale: praline, boeri, alkekengi, marrons glacés e scorze d’arancia candite ricoperte di fondente. Cioccolato puro, lavorato con pazienza per un gusto intenso e avvolgente.',
    tags: ['Praline', 'Boeri', 'Marrons glacés', 'Uova di Pasqua'],
  },
  {
    id: 'cakedesign',
    title: 'Cake Design',
    image: img('6028661'),
    text:
      'Torte spettacolari personalizzate con fotografie, disegni e decorazioni in pasta di zucchero, modellate a mano nei minimi dettagli. Vere opere di zucchero, pensate per stupire senza rinunciare al gusto.',
    tags: ['Pasta di zucchero', 'Foto su torta', 'Cupcake', 'Su misura'],
  },
  {
    id: 'classici',
    title: 'Classici & Senza Lattosio',
    image: img('5902097'),
    text:
      'I grandi classici della tradizione — Brutti e Buoni, Dolce Varese — e una linea senza lattosio studiata con la stessa cura artigianale, per il piacere di un dolce buono e sicuro, davvero senza rinunce.',
    tags: ['Brutti e Buoni', 'Dolce Varese', 'Senza lattosio'],
  },
  {
    id: 'lievitati',
    title: 'Grandi Lievitati & Feste',
    image: img('4255275'),
    text:
      'Panettoni, Pandori, Veneziane e Colombe secondo l’antica tradizione, senza conservanti: soffici e profumati come una volta. E per le feste, buffet e confezioni regalo curate nel gusto e nella presentazione.',
    tags: ['Panettone', 'Colomba', 'Buffet', 'Confezioni regalo'],
  },
]

// Ricorrenze — specialità stagionali (dal sito originale)
export const ricorrenze = {
  kicker: 'Le nostre ricorrenze',
  title: 'Specialità delle feste',
  intro:
    'Ogni festa ha il suo dolce. Preparati a mano nel nostro laboratorio, nel rispetto della tradizione e con una cura speciale per ogni dettaglio: buoni da gustare e bellissimi da regalare.',
  items: [
    {
      id: 'natale',
      period: 'Natale',
      title: 'Panettoni & Grandi Lievitati',
      image: imgS('3861263'),
      text:
        'I nostri panettoni nascono dalle mani sapienti dei maestri pasticceri: doppio impasto, lenta lievitazione naturale di molte ore, lavorazione a mano e pirlatura. Produzione limitata, da prenotare con anticipo. Disponibile anche il Panettone Gastronomico (20, 30 o 40 spicchi) con farciture fresche.',
    },
    {
      id: 'epifania',
      period: 'Epifania · 6 Gennaio',
      title: 'Cammelli di Sfoglia',
      image: imgS('6013945'),
      text:
        'La tradizione dell’Epifania: cammelli di pasta sfoglia friabili, leggeri e dorati, sfogliati a mano con burro di panna di alta qualità. Classici con zucchero caramellato in superficie o farciti con crema, panna fresca, chantilly e cioccolato.',
    },
    {
      id: 'valentino',
      period: '14 Febbraio',
      title: 'San Valentino',
      image: imgS('5964233'),
      text:
        'Torte a forma di cuore per celebrare l’amore, dalla classica crema ai gusti più ricercati, decorate a mano con cura. Personalizzabili con una dedica speciale, una decorazione esclusiva o la vostra fotografia: un regalo su misura e indimenticabile.',
    },
    {
      id: 'donna',
      period: '8 Marzo',
      title: 'Festa della Donna',
      image: imgS('5964236'),
      text:
        'La nostra Torta Mimosa: Pan di Spagna soffice, vellutata crema chantilly e macedonia di frutta, con l’inconfondibile finitura a cubetti fatta a mano che ricrea la luminosità dei fiori di mimosa. Un dolce semplice ma raffinato, anche nella scenografica versione Mimosa Red ai frutti di bosco.',
    },
    {
      id: 'papa',
      period: '19 Marzo',
      title: 'Festa del Papà',
      image: imgS('5964238'),
      text:
        'Torte personalizzate che parlano di lui — a forma di camicia, di cuore o con la sua fotografia — modellate a mano e curate nei minimi particolari, per stupirlo con un regalo dolce e indimenticabile.',
    },
    {
      id: 'zeppole',
      period: 'San Giuseppe',
      title: 'Zeppole di San Giuseppe',
      image: imgS('4227631'),
      text:
        'Le iconiche Zeppole di San Giuseppe: pasta friabile e dorata, disponibile al forno per chi ama la leggerezza o fritta come vuole l’antica ricetta. Farcite generosamente con crema pasticcera e panna, in formato grande o mignon: un peccato di gola irresistibile.',
    },
    {
      id: 'pasqua',
      period: 'Pasqua',
      title: 'Uova & Cioccolato di Pasqua',
      image: imgS('5150968'),
      text:
        'Uova artigianali in cioccolato puro — al latte, fondente o bianco — con decori interamente fatti a mano: piccole opere d’arte. Sorpresa personalizzata su richiesta (servizio gratuito) e un intero mondo di soggetti in cioccolato.',
    },
  ],
}

// Recensioni reali dei clienti (fonte: Google, via aggregatori pubblici — 2025)
export const reviews = {
  kicker: 'Dicono di noi',
  title: 'La soddisfazione dei nostri clienti',
  intro:
    'Recensioni reali lasciate dai clienti su Google. Grazie a chi ci sceglie ogni giorno!',
  items: [
    {
      name: 'Cecilia',
      date: 'Novembre 2025',
      stars: 5,
      text: 'Abbiamo ordinato una torta con crema chantilly e frutti di bosco: veramente squisita. Bella da vedere e buonissima da gustare! Complimenti, consiglio vivamente!',
    },
    {
      name: 'Samuele',
      date: 'Dicembre 2025',
      stars: 5,
      text: 'Faccio acquisti alla Pasticceria Manzoni da diversi mesi e sono veramente contento del servizio offerto e della qualità dei prodotti. Abbiamo preso una colomba artigianale ed era di qualità eccellente.',
    },
    {
      name: 'Andrea',
      date: 'Dicembre 2025',
      stars: 5,
      text: 'Ottima pasticceria: tortelli fritti ottimi, chiacchiere sublimi e dolci buonissimi.',
    },
    {
      name: 'Mariella',
      date: 'Ottobre 2025',
      stars: 5,
      text: 'Mi sono sempre trovata bene, sia per i prodotti che per l’accoglienza e la gentilezza. I dolci e i salati sono sempre buonissimi.',
    },
    {
      name: 'Simona',
      date: 'Settembre 2025',
      stars: 5,
      text: 'A Saronno, la mia pasticceria preferita da sempre. Qualità e cortesia.',
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
  { href: '#recensioni', label: 'Recensioni' },
  { href: '#contatti', label: 'Contatti' },
]
