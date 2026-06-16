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
    dates: '17–19 June',
    nights: 2,
    accommodation: 'Riad Sultan Suleiman',
    description:
      'Our introduction to Morocco: hidden courtyards, intricate palaces, crowded souks and the great spectacle of Jemaa el-Fnaa.',
    symbol: '✦',
    theme: 'terracotta',
    highlights: [
      'Explore the historic medina',
      'Discover Moroccan architecture',
      'Dinner beneath the city lights',
    ],
  },
  {
    id: 'ouirgane',
    name: 'Ouirgane',
    region: 'High Atlas Mountains',
    dates: '19–21 June',
    nights: 2,
    accommodation: 'Ouirgane Ecolodge',
    description:
      'A quieter Morocco of mountain valleys, Amazigh villages, red-earth trails and views towards the High Atlas.',
    symbol: '▲',
    theme: 'mountain',
    highlights: [
      'Travel into the High Atlas',
      'Walk through rural landscapes',
      'Learn about Amazigh culture',
    ],
  },
  {
    id: 'agafay',
    name: 'Agafay',
    region: 'The Stone Desert',
    dates: '21–22 June',
    nights: 1,
    accommodation: 'Agafay Pearl Camp',
    description:
      'A night in a dramatic rocky desert outside Marrakesh, with camel riding, sunset and a sky far darker than the city.',
    symbol: '☾',
    theme: 'desert',
    highlights: [
      'Ride camels across the plateau',
      'Watch sunset over the desert',
      'Sleep beneath the stars',
    ],
  },
  {
    id: 'marrakesh-return',
    name: 'Marrakesh',
    region: 'A second look',
    dates: '22–25 June',
    nights: 3,
    accommodation: 'Riad Salman',
    description:
      'Return with more confidence: revisit the medina, explore what we missed, shop, eat and slow down before flying home.',
    symbol: '✺',
    theme: 'rose',
    highlights: [
      'Return to favourite places',
      'Explore beyond the obvious sights',
      'Choose our final Moroccan feast',
    ],
  },
]

export const navigation: NavigationItem[] = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'journey', label: 'Journey', icon: '↝' },
  { id: 'discover', label: 'Discover', icon: '◇' },
  { id: 'play', label: 'Play', icon: '◎' },
  { id: 'useful', label: 'Useful', icon: '☰' },
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
  { label: '£1', value: 'about 12–13 MAD' },
  { label: 'Emergency', value: 'Police 19 · Ambulance 15' },
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
