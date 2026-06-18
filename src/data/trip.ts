import type {
  Destination,
  DiscoverTopic,
  NavigationItem,
  PlayActivity,
  UsefulItem,
} from '../types/trip'

export const destinations: Destination[] = [
  {
    id: 'marrakesh-arrival',
    name: 'Marrakesh',
    region: 'The Red City',
    dates: '17-19 June',
    nights: 2,
    accommodation: 'Riad Sultan Suleiman',
    description:
      'Our first Moroccan stop: red walls, hidden courtyards, colourful souks and the big evening theatre of Jemaa el-Fnaa.',
    symbol: '*',
    theme: 'terracotta',
    photoUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Bahia%20Palace%202018%201.jpg?width=900',
    photoAlt: 'Grand courtyard of Bahia Palace in Marrakesh',
    photoCredit: 'Photo: Bahia Palace, Wikimedia Commons',
    highlights: [
      'Look for carved wooden doors, patterned tiles and tiny alleyways',
      'Notice how quiet riads feel compared with the medina outside',
      'Watch how Jemaa el-Fnaa changes from daytime square to evening spectacle',
    ],
  },
  {
    id: 'ouirgane',
    name: 'Ouirgane',
    region: 'High Atlas Mountains',
    dates: '19-21 June',
    nights: 2,
    accommodation: 'Ouirgane Ecolodge',
    description:
      'A slower mountain valley with olive trees, red-earth paths, Amazigh villages and big Atlas views.',
    symbol: '^',
    theme: 'mountain',
    photoUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/SE%20Ouirgane%20Village%20Dam%20Al%20Haouz%20Oct25%20A7CR%2008497.jpg?width=900',
    photoAlt: 'Ouirgane village and Yacoub el Mansour barrage in the High Atlas',
    photoCredit: 'Photo: Ouirgane, Wikimedia Commons',
    highlights: [
      'Compare the quiet valley pace with Marrakesh medina energy',
      'Look for terraced fields, olive trees and earth-coloured village buildings',
      'Remember that Amazigh culture is older than modern borders in North Africa',
    ],
  },
  {
    id: 'agafay',
    name: 'Agafay',
    region: 'The Stone Desert',
    dates: '21-22 June',
    nights: 1,
    accommodation: 'Agafay Pearl Camp',
    description:
      'Not classic Sahara dunes, but a rocky desert outside Marrakesh: open space, sunset colours and a huge sky.',
    symbol: 'o',
    theme: 'desert',
    photoUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Dunes%20de%20Merzouga.jpg?width=900',
    photoAlt: 'Golden desert dunes in Morocco',
    photoCredit: 'Photo: Moroccan desert dunes, Wikimedia Commons',
    highlights: [
      'Watch how the colours change as the sun drops',
      'Notice the difference between stone desert and sand desert',
      'After dark, look up: the sky should feel much bigger than in the city',
    ],
  },
  {
    id: 'marrakesh-return',
    name: 'Marrakesh',
    region: 'A second look',
    dates: '22-25 June',
    nights: 3,
    accommodation: 'Riad Salman',
    description:
      'Back to Marrakesh with more confidence: gardens, palaces, favourite corners, shopping and a slower final few days.',
    symbol: '+',
    theme: 'rose',
    photoUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Bahia%20Palace%202018%201.jpg?width=900',
    photoAlt: 'Moroccan palace courtyard with zellij tilework',
    photoCredit: 'Photo: Marrakesh palace details, Wikimedia Commons',
    highlights: [
      'Spot zellij tile patterns and painted wooden ceilings',
      'Choose a favourite Marrakesh colour, door, tile or view',
      'End the trip by comparing city, mountain and desert Morocco',
    ],
  },
]

export const navigation: NavigationItem[] = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'today', label: 'Today', icon: '☀' },
  { id: 'journey', label: 'Journey', icon: '↝' },
  { id: 'discover', label: 'Discover', icon: '◇' },
  { id: 'play', label: 'Play', icon: '◎' },
  { id: 'useful', label: 'Notes', icon: '☰' },
]

export const discoverTopics: DiscoverTopic[] = [
  {
    icon: '⌛',
    title: 'History',
    description: 'Caravans, dynasties, empires and the story of Marrakesh.',
  },
  {
    icon: 'ⵣ',
    title: 'Amazigh culture',
    description: 'The people, languages and traditions of North Africa.',
  },
  {
    icon: '✦',
    title: 'Architecture',
    description: 'Riads, mosques, gardens, geometric art and hidden courtyards.',
  },
  {
    icon: '◌',
    title: 'Food',
    description: 'Tagines, couscous, bread, mint tea and what we should taste.',
  },
  {
    icon: '؟',
    title: 'Language',
    description:
      'A few useful words in Moroccan Arabic and how to pronounce them.',
  },
  {
    icon: '✓',
    title: 'Culture',
    description:
      'Hospitality, religion, clothing and behaving like thoughtful guests.',
  },
]

export const usefulItems: UsefulItem[] = [
  { label: 'Country', value: 'Morocco' },
  { label: 'Languages', value: 'Arabic, Amazigh, French' },
  { label: 'Hello', value: 'Salam' },
  { label: 'Thank you', value: 'Shukran' },
]

export const playActivities: PlayActivity[] = [
  {
    icon: '?',
    title: 'Morocco before landing quiz',
    description:
      'A quick quiz for the flight: geography, food, history and first impressions.',
  },
  {
    icon: '؟',
    title: 'Darija phrase challenge',
    description:
      'Practice a handful of useful Moroccan Arabic words before trying them out.',
  },
  {
    icon: '◇',
    title: 'Photo scavenger hunt',
    description:
      'A light challenge to notice doors, details, colours, meals and moments.',
  },
  {
    icon: '✓',
    title: 'Fact or fiction',
    description:
      'Spot which travel claims are true and which need a little suspicion.',
  },
]
