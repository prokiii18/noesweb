export const brands = [
  { name: 'Becherovka', src: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Becherovka.svg' },
  { name: 'Kiri', src: 'https://cdn.freebiesupply.com/logos/large/2x/kiri-logo-png-transparent.png' },
  { name: 'Biolage', src: 'https://static.wixstatic.com/media/9df8c5_bd1f569388a347c8b81e749fed0bacef~mv2.png' },
  { name: 'Kérastase', src: 'https://static.wixstatic.com/media/9df8c5_01945cf09d7940f389cd5b37664e8e76~mv2.png' },
  { name: 'Bonduelle', src: 'https://static.wixstatic.com/media/9df8c5_7118d6da43634e5f80dea2260ae19822~mv2.png' },
  { name: 'Lindt', src: 'https://static.wixstatic.com/media/9df8c5_dbcc63e4f88148199753aeab816a9c53~mv2.png' },
  { name: 'Ahold', src: 'https://static.wixstatic.com/media/9df8c5_39a698af2c3248be8f99d1b000102418~mv2.png' },
];

export const projects = [
  { name: 'Becherovka', type: 'EXPERIENTIAL / ACTIVATION', description: 'Silná značka, výrazný vizuál a aktivace, která funguje přímo mezi lidmi.', image: '/images/becherovka.webp' },
  { name: 'Kiri', type: 'RETAIL / POS', description: 'Hravá retailová realizace, která dostává Kiri přímo do místa nákupu.', image: 'https://static.wixstatic.com/media/9df8c5_5eaeb0c2dfd0418b9adc0cc4a97f55a6~mv2.jpg' },
  { name: 'Biolage', type: 'BEAUTY / PRODUCTION', description: 'Beauty komunikace a produkce s důrazem na čistý vizuál a detail značky.', image: '/images/biolage.webp' },
  { name: 'Kérastase', type: 'BEAUTY / CREATIVE', description: 'Prémiová beauty realizace, kde stejně dobře funguje idea i exekuce.', image: 'https://static.wixstatic.com/media/9df8c5_40ddeb4953f34ea0a5423af168edc8fb~mv2.jpg' },
];

export const services = [
  { title: 'Strategie a plánování', description: 'Kreativní a komplexní marketingové strategie pro aktivace a růst značek.', image: 'https://static.wixstatic.com/media/9df8c5_9a48c94b8fa74ce2a3d1d06b883c39ec~mv2.jpg' },
  { title: 'Kreativa & copywriting', description: 'Klíčové vizuály, texty, foto a video v digitálním i instore prostředí.', image: 'https://static.wixstatic.com/media/9df8c5_006fb498fd764b999fd8601db469ec97~mv2.jpg' },
  { title: 'Field marketing', description: 'Sales Promotion, Brand Activations a Experiential Marketing.', image: 'https://static.wixstatic.com/media/9df8c5_006fb498fd764b999fd8601db469ec97~mv2.jpg' },
  { title: 'Promo personál', description: 'Promotéři, hostesky a externí obchodníci pro launch, výstavy a retail.', image: 'https://static.wixstatic.com/media/9df8c5_7de737dfd9e94b2aaf45eb6adaa069f7~mv2.jpg' },
  { title: 'Reklamní produkce', description: 'Návrh a výroba POS materiálů, doprava, instalace i skladování.', image: 'https://static.wixstatic.com/media/9df8c5_006fb498fd764b999fd8601db469ec97~mv2.jpg' },
  { title: 'Logistika a sklady', description: 'Materiály dostaneme v pořádku a včas tam, kam mají.', image: 'https://static.wixstatic.com/media/9df8c5_9a48c94b8fa74ce2a3d1d06b883c39ec~mv2.jpg' },
];

export const team = [
  ['Radovan', 'Director', 'https://static.wixstatic.com/media/9df8c5_51fde530e4f546439a48803724e22b07~mv2.jpg'],
  ['Dominika', 'Account Director', 'https://static.wixstatic.com/media/9df8c5_27400f6e80c64c7cb119197f60530cba~mv2.jpg'],
  ['Alice', 'Account Manager', 'https://static.wixstatic.com/media/9df8c5_77067483ea514ac2a946ee43c624e99f~mv2.jpg'],
  ['Dominik', 'Production Manager', 'https://static.wixstatic.com/media/9df8c5_eaf5c54c861842608679b318d47f4efa~mv2.jpg'],
  ['Lucie J.', 'Graphic Designer', 'https://static.wixstatic.com/media/9df8c5_c6a4d385d231429486b8424eeee1e21c~mv2.jpg'],
  ['Lenka', 'Account Executive', 'https://static.wixstatic.com/media/9df8c5_2c21d6af4f604f3087b9f66c32a53cf7~mv2.jpg'],
  ['Vanda', 'Art Director', 'https://static.wixstatic.com/media/9df8c5_8fbbc91d6043401aa0ee734ec8ab9495~mv2.jpg'],
  ['Jana', 'Senior Graphic Designer', 'https://static.wixstatic.com/media/9df8c5_86fb7f128a184f2e851ff17a55ced59f~mv2.jpg'],
].map(([name, role, image]) => ({ name, role, image }));
