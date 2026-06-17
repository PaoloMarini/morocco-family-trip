import type { DiscoverArticle } from '../../types/discover'

export const cultureArticle: DiscoverArticle = {
  id: 'culture',
  icon: '✓',
  title: 'Culture',
  deck: 'Hospitality, religion and everyday respect',
  summary:
    'Morocco is socially diverse and modern, with religious, regional, urban, rural and generational differences. A few respectful habits help visitors move through daily life without turning culture into a list of rigid rules.',
  readTimeMinutes: 5,
  sections: [
    {
      heading: 'Hospitality and boundaries',
      paragraphs: [
        'Hospitality is important, but it is not an unlimited obligation. A warm welcome may include tea, conversation or help, while privacy and personal time still matter.',
        'The best visitor behaviour is appreciative without being demanding: say thank you, accept that plans may move at a different pace, and do not treat people’s kindness as a service owed to you.',
      ],
    },
    {
      heading: 'Islam in daily life',
      paragraphs: [
        'Islam shapes public rhythms: calls to prayer, mosque neighbourhoods, Friday prayer and holiday calendars. People practise in different ways, and not every public moment is religious.',
        'Ramadan is a major month of fasting and family life, but our trip dates should not be assumed to fall during Ramadan. If a future visit does, daytime routines, opening hours and meal rhythms may feel different.',
      ],
    },
    {
      heading: 'Clothing and public behaviour',
      paragraphs: [
        'Modest, situationally appropriate clothing is usually the simplest choice, especially in medinas, villages and religiously significant areas. This does not mean dressing dramatically differently; it means reading the setting.',
        'Public affection is generally more restrained than in some European contexts. Calm voices, patience in queues and respectful body language help in crowded places.',
      ],
    },
    {
      heading: 'Photography and bargaining',
      paragraphs: [
        'Always ask before photographing people, especially close up, and accept no without pushing. A scene that looks interesting to us may be someone’s work, commute or private moment.',
        'Bargaining can be part of shopping in souks, but it should stay good-humoured. If we are not interested, “La, shukran” is better than turning the exchange into a contest.',
      ],
    },
    {
      heading: 'Avoid simple rules',
      paragraphs: [
        'Morocco includes conservative and liberal spaces, old neighbourhoods and modern malls, rural villages and global cities. One rule will not explain every situation.',
        'When unsure, watch what local families do, ask politely, and choose the option that gives other people the most dignity and space.',
      ],
    },
  ],
  keyFacts: [
    'Morocco is socially diverse; behaviour varies by setting and generation.',
    'Islam influences daily rhythms, but people practise and express identity in varied ways.',
    'Ramadan matters, but do not assume every trip overlaps with it.',
    'Ask before photographing people.',
    'Bargaining should be respectful and good-humoured.',
  ],
  keyTerms: [
    {
      term: 'Ramadan',
      meaning: 'The Islamic month of fasting, prayer, family meals and altered daily rhythms.',
    },
    {
      term: 'Souk',
      meaning: 'A market area, often with specialised lanes, workshops and shops.',
    },
  ],
  noticePrompt:
    'In crowded places, notice how people negotiate space: greetings, pauses, small gestures and when someone chooses not to engage.',
  misconception: {
    myth: 'A traveller can learn one fixed rule for Moroccan culture.',
    reality:
      'Respect depends on context: city or village, family or market, sacred or casual, traditional or modern.',
  },
  sourceNotes: [
    {
      label: 'UK travel advice',
      url: 'https://www.gov.uk/foreign-travel-advice/morocco/local-laws-and-customs',
      note: 'Practical local customs and visitor conduct guidance.',
    },
    {
      label: 'Encyclopaedia Britannica',
      url: 'https://www.britannica.com/place/Morocco/Cultural-life',
      note: 'General cultural-life context.',
    },
  ],
}
