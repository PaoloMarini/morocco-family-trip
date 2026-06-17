import type { DiscoverArticle } from '../../types/discover'

export const placesArticle: DiscoverArticle = {
  id: 'places-to-notice',
  icon: '▣',
  title: 'Places to notice',
  deck: 'Doors, courtyards, mountains and desert light',
  summary:
    'This trip moves through very different landscapes in a few days. The fun is not only seeing famous sights, but noticing how each place feels different: enclosed medina lanes, calm riad courtyards, wide mountain valleys and the open Agafay horizon.',
  readTimeMinutes: 3,
  sections: [
    {
      heading: 'Marrakesh: outside chaos, inside calm',
      paragraphs: [
        'A riad often hides behind a plain wall and a modest door. Step inside and the mood can completely change: shade, tiles, plants, water, soft voices and light falling into a courtyard.',
        'That contrast is part of the architecture. The street is busy and public; the courtyard is private and inward-looking.',
      ],
    },
    {
      heading: 'Ouirgane: a valley pace',
      paragraphs: [
        'Ouirgane should feel very different from Marrakesh. Instead of souk lanes and scooters, look for red earth, olive trees, slopes, village buildings and mountains changing colour through the day.',
        'This is a good place to notice scale: people, animals and houses can look tiny against the Atlas landscape.',
      ],
    },
    {
      heading: 'Agafay: not sand dunes, still desert',
      paragraphs: [
        'Agafay is a stone desert, not the classic Sahara dune landscape. Its drama comes from openness: the horizon, the dry ground, the low light and the feeling of space.',
        'At sunset, the same place can change colour every few minutes. That is the moment to look up from the phone, then take the photo.',
      ],
    },
  ],
  keyFacts: [
    'Riads are traditionally organised around an interior courtyard or garden.',
    'Marrakesh medina streets can feel busy while courtyards can feel unexpectedly quiet.',
    'Ouirgane is in the High Atlas foothills, so the landscape and pace differ strongly from the city.',
    'Agafay is a rocky desert near Marrakesh rather than the Sahara dunes.',
  ],
  keyTerms: [
    {
      term: 'Riad',
      meaning: 'A traditional Moroccan house organised around an interior courtyard or garden.',
    },
    {
      term: 'Zellij',
      meaning: 'Geometric tilework made from small cut pieces, often seen in palaces, fountains and courtyards.',
    },
  ],
  trivia: [
    {
      label: 'Photo idea',
      text: 'Take one photo looking down at tiles, one looking up at a ceiling, and one looking through a doorway.',
    },
  ],
  noticePrompt:
    'Each day, choose one detail that explains where you are: a door in Marrakesh, a path in Ouirgane, or a shadow in Agafay.',
  misconception: {
    myth: 'The best travel photos are always the famous sights.',
    reality:
      'The small details often tell the better story: a handle, a tile, a shadow, a cup of tea, or a quiet courtyard.',
  },
  sourceNotes: [
    {
      label: 'Trip route notes',
      url: 'https://paolomarini.github.io/morocco-family-trip/',
      note: 'Built from our confirmed route and planned stops.',
    },
  ],
}
