import type {
  Destination,
  DiscoverTopic,
  NavigationItem,
  PlayActivity,
  UsefulItem,
} from '../types/trip'

const basePath = import.meta.env.BASE_URL

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
    photoUrl: `${basePath}trip-images/medina.svg`,
    photoAlt: 'Illustration of warm-coloured Marrakesh medina streets',
    photoCredit: 'Illustration: Marrakesh medina mood',
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
    photoUrl: `${basePath}trip-images/atlas.svg`,
    photoAlt: 'Illustration of High Atlas mountains and a valley village',
    photoCredit: 'Illustration: Atlas valley mood',
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
    photoUrl: `${basePath}trip-images/agafay.svg`,
    photoAlt: 'Illustration of Agafay stone desert at sunset',
    photoCredit: 'Illustration: Agafay sunset mood',
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
    photoUrl: `${basePath}trip-images/medina.svg`,
    photoAlt: 'Illustration of Marrakesh medina architecture and warm colours',
    photoCredit: 'Illustration: Marrakesh details mood',
    highlights: [
      'Spot zellij tile patterns and painted wooden ceilings',
      'Choose a favourite Marrakesh colour, door, tile or view',
      'End the trip by comparing city, mountain and desert Morocco',
    ],
  },
]

export const navigation: NavigationItem[] = [
  { id: 'home', label: 'Home', icon: '⌂' },
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
