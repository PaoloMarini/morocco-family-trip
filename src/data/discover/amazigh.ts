import type { DiscoverArticle } from '../../types/discover'

export const amazighArticle: DiscoverArticle = {
  id: 'amazigh',
  icon: 'ⵣ',
  title: 'Amazigh Culture',
  deck: 'Indigenous North African identities',
  summary:
    'Amazigh peoples are Indigenous to North Africa, and Morocco’s Amazigh cultures are varied, contemporary and regional. The High Atlas can offer a glimpse of rural Amazigh life, but no single village or family represents everyone.',
  readTimeMinutes: 4,
  sections: [
    {
      heading: 'Amazigh, not only “Berber”',
      paragraphs: [
        'Many people prefer the term Amazigh, with Imazighen used as a plural form. “Berber” still appears in books and older tourist material, but it should not be treated as the only or default word.',
        'Amazigh identity is not a costume or a single rural lifestyle. It includes city and village life, different languages, different regions and people who are deeply involved in modern Morocco.',
      ],
    },
    {
      heading: 'Languages and script',
      paragraphs: [
        'Morocco recognises Arabic and Amazigh as official languages. Amazigh languages in Morocco include varieties often associated with regions such as the Rif, Middle Atlas and Souss.',
        'You may see Tifinagh, the Amazigh script, on signs or public buildings. Its presence is part of a wider recognition of Amazigh language and identity in public life.',
      ],
    },
    {
      heading: 'Regional diversity',
      paragraphs: [
        'The High Atlas has many Amazigh communities, but mountain life varies by valley, family, generation, income and connection to towns. Some traditions are strongly maintained; others change with school, work, migration and technology.',
        'A respectful visitor avoids turning ordinary people into symbols of an “unchanged past.” The better question is often: how do people combine continuity and change in daily life?',
      ],
    },
    {
      heading: 'What we might notice in Ouirgane',
      paragraphs: [
        'In and around Ouirgane, watch for how buildings respond to terrain and climate, how paths connect homes and fields, and how hospitality may be practical rather than performative.',
        'If we meet guides, hosts or drivers, it is fine to ask thoughtful questions. It is also fine for people not to want to explain their identity or be photographed.',
      ],
    },
  ],
  keyFacts: [
    'Amazigh peoples are Indigenous to North Africa.',
    'Amazigh is an official language in Morocco alongside Arabic.',
    'Tifinagh is a script used for Amazigh in public and educational contexts.',
    'Amazigh communities are regionally diverse and modern.',
    'Rural life should not be presented as identical or frozen in time.',
  ],
  keyTerms: [
    {
      term: 'Amazigh',
      meaning: 'A term widely used for Indigenous North African peoples and identities.',
    },
    {
      term: 'Tifinagh',
      meaning: 'A script associated with Amazigh languages; visible on some signs in Morocco.',
    },
  ],
  trivia: [
    {
      label: 'Language clue',
      text: 'The character ⵣ is often used as a visible symbol of Amazigh identity.',
    },
  ],
  noticePrompt:
    'In the mountains, notice what feels local and specific rather than assuming it represents all Amazigh life.',
  misconception: {
    myth: 'Amazigh culture means one traditional rural way of life.',
    reality:
      'Amazigh identities are diverse, regional and contemporary, including urban and rural experiences.',
  },
  sourceNotes: [
    {
      label: 'Moroccan constitution / official language context',
      url: 'https://www.constituteproject.org/constitution/Morocco_2011',
      note: 'Arabic and Amazigh official language context.',
    },
    {
      label: 'Encyclopaedia Britannica',
      url: 'https://www.britannica.com/place/Morocco/People',
      note: 'Morocco people and language background.',
    },
  ],
}
