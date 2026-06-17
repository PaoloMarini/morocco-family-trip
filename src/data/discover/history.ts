import type { DiscoverArticle } from '../../types/discover'

export const historyArticle: DiscoverArticle = {
  id: 'history',
  icon: '⌛',
  title: 'History',
  deck: 'Cities, dynasties and a living medina',
  summary:
    'Marrakesh began as an imperial city in the 11th century and still carries layers from Amazigh, Arab, Islamic, Andalusian, African and European histories. Its medina is not a stage set: people live, work, worship, shop and commute there every day.',
  readTimeMinutes: 4,
  sections: [
    {
      heading: 'An 11th-century beginning',
      paragraphs: [
        'Marrakesh was founded in the 11th century under the Almoravids, an Amazigh-led dynasty that connected parts of North Africa and al-Andalus. The city grew near routes linking mountains, plains and Sahara-facing trade networks.',
        'Its position helped Marrakesh become a political, religious and commercial centre. The famous red and ochre tones are not just branding; they come from local building materials and the city walls that shaped the old city.',
      ],
    },
    {
      heading: 'Dynasties left different layers',
      paragraphs: [
        'The Almohads later made Marrakesh a capital and added major monuments and urban works. The Koutoubia minaret belongs to this broad western Islamic architectural world, linked to both the Maghreb and al-Andalus.',
        'Centuries later, the Saadian dynasty brought renewed importance to Marrakesh, leaving landmarks such as the Saadian Tombs and El Badi Palace. These layers do not replace one another neatly; the city is a palimpsest.',
      ],
    },
    {
      heading: 'Protectorate and modern Morocco',
      paragraphs: [
        'In 1912 Morocco entered the French protectorate period, while Spain also controlled zones in the north and south. Rabat became the administrative capital, which is one reason Marrakesh is famous but not the capital today.',
        'Morocco is now a modern constitutional monarchy. Marrakesh remains one of the country’s best-known cities, but it is only one part of a diverse country with Atlantic cities, mountain regions, desert-edge communities and global connections.',
      ],
    },
    {
      heading: 'The medina is alive',
      paragraphs: [
        'A medina is an old walled urban district, but it should not be treated as an open-air museum. Behind beautiful doors and busy souks are homes, schools, workshops, mosques, delivery routes and ordinary routines.',
        'As visitors, the best posture is curiosity with restraint: enjoy the craft, sound and movement, while remembering that many “picturesque” scenes are also someone else’s daily life.',
      ],
    },
  ],
  keyFacts: [
    'Marrakesh was founded in the 11th century under the Almoravids.',
    'The Almohads and Saadians both left major marks on the city.',
    'The French protectorate began in 1912 and ended with Moroccan independence in 1956.',
    'Rabat is Morocco’s capital; Marrakesh is one of its historic imperial cities.',
    'A medina is a living urban district, not just a visitor attraction.',
  ],
  keyTerms: [
    {
      term: 'Medina',
      meaning: 'An old urban district, often walled, with homes, shops, workshops and religious buildings.',
    },
    {
      term: 'Protectorate',
      meaning: 'A colonial arrangement in which a foreign power controlled major political decisions while local institutions continued in altered form.',
    },
  ],
  trivia: [
    {
      label: 'Look closely',
      text: 'Many old city walls and gates were practical infrastructure before they became postcard images.',
    },
  ],
  noticePrompt:
    'In Marrakesh, notice how daily life and heritage share the same lanes: a workshop, a school run, a delivery cart and a decorated doorway may sit metres apart.',
  misconception: {
    myth: 'The medina is mostly a historic attraction for tourists.',
    reality:
      'Tourism is visible, but the medina is also a dense working and residential district.',
  },
  sourceNotes: [
    {
      label: 'UNESCO',
      url: 'https://whc.unesco.org/en/list/331/',
      note: 'Medina of Marrakesh heritage listing and historical framing.',
    },
    {
      label: 'Encyclopaedia Britannica',
      url: 'https://www.britannica.com/place/Morocco',
      note: 'Modern Morocco overview, government and capital context.',
    },
  ],
}
