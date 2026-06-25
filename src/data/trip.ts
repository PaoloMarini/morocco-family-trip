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
    region: 'First medina chapter',
    dates: '17-19 June',
    nights: 2,
    accommodation: 'Riad Sultan Suleiman',
    description:
      'Arrival, Jemaa el-Fnaa, Zeitoun Café, Koutoubia, souks and Ben Youssef: exciting, beautiful and already a reminder not to overdo monument rooms.',
    symbol: '*',
    theme: 'terracotta',
    photoUrl: 'https://ouirganeguide.com/wp-content/uploads/2018/01/Slider111.jpg',
    photoAlt: 'Moroccan mountain and valley landscape used as trip visual texture',
    photoCredit: 'Photo: Ouirgane Guide',
    highlights: [
      'First evening walk to Jemaa el-Fnaa and dinner at Zeitoun Café',
      'Koutoubia, souks and Ben Youssef gave the first proper medina context',
      'Food lesson: Moroccan dishes work better when nobody feels forced into them',
    ],
  },
  {
    id: 'ouirgane',
    name: 'Ouirgane',
    region: 'High Atlas foothills',
    dates: '19-21 June',
    nights: 2,
    accommodation: 'Ouirgane Ecolodge',
    description:
      'The reset: mountain air, guided walking, lodge time, layered breakfast breads and the beef tagine that proved the girls had not written off Moroccan food entirely.',
    symbol: '^',
    theme: 'mountain',
    photoUrl: 'https://ouirganeguide.com/wp-content/uploads/2018/01/Slider33.jpg',
    photoAlt: 'High Atlas mountain road and valley near Ouirgane',
    photoCredit: 'Photo: Ouirgane Guide',
    highlights: [
      'Guided walk around Ouirgane and the surrounding landscape',
      'A slower rhythm after Marrakesh: shade, rest and room games mattered',
      'Msemen-style layered breads became a proper food discovery',
    ],
  },
  {
    id: 'agafay',
    name: 'Agafay',
    region: 'Stone desert camp',
    dates: '21-22 June',
    nights: 1,
    accommodation: 'Agafay Pearl Camp',
    description:
      'Not Sahara dunes, but a rocky desert experience with camp atmosphere, sunset, camel ride photos and the wide-open-sky moment of the trip.',
    symbol: 'o',
    theme: 'desert',
    photoUrl: 'https://ouirganeguide.com/wp-content/uploads/2018/01/Slider55.jpg',
    photoAlt: 'Moroccan landscape used for Agafay visual placeholder',
    photoCredit: 'Photo: Ouirgane Guide',
    highlights: [
      'Camel ride at Agafay Pearl Camp',
      'Sunset and camp dinner were the point, not a packed activity list',
      'The camel ride videos later exposed the Google Photos timezone oddity',
    ],
  },
  {
    id: 'marrakesh-return',
    name: 'Marrakesh',
    region: 'Return, gardens and final choices',
    dates: '22-25 June',
    nights: 3,
    accommodation: 'Riad Salman',
    description:
      'Back to Marrakesh with better judgement: Bahia Palace, Majorelle, YSL, Berber art, modern-mall resets, Meydene/ANIMA planning and a deliberately lighter departure.',
    symbol: '+',
    theme: 'rose',
    photoUrl: 'https://ouirganeguide.com/wp-content/uploads/2018/01/Slider111.jpg',
    photoAlt: 'Ouirgane valley image reused as a reliable trip image',
    photoCredit: 'Photo: Ouirgane Guide',
    highlights: [
      'Bahia Palace was done after Agafay, when royal Marrakesh made more sense',
      'Jardin Majorelle, YSL Museum and Berber Art Museum were completed as a combo',
      'The final-day logic shifted toward Meydene, ANIMA and modern contrast rather than more empty rooms',
    ],
  },
]

export const navigation: NavigationItem[] = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'today', label: 'Today', icon: '☀' },
  { id: 'journey', label: 'Journey', icon: '↝' },
  { id: 'discover', label: 'Discover', icon: '◇' },
  { id: 'useful', label: 'Notes', icon: '☰' },
]

export const discoverTopics: DiscoverTopic[] = [
  {
    icon: '⌛',
    title: 'Marrakesh in layers',
    description: 'Jemaa el-Fnaa, Koutoubia, Ben Youssef, Bahia and why the city works best in small doses.',
  },
  {
    icon: 'ⵣ',
    title: 'Amazigh and Atlas context',
    description: 'Ouirgane, mountain villages, water, terraces and why the High Atlas is not just scenery.',
  },
  {
    icon: '✦',
    title: 'Beauty versus fatigue',
    description: 'Zellij, courtyards and carved ceilings are wonderful; too many empty rooms in a row are not.',
  },
  {
    icon: '◌',
    title: 'Food discoveries',
    description: 'From cautious first tajines to beef tagine, msemen-style breads, chips breaks and non-tajine cravings.',
  },
  {
    icon: '؟',
    title: 'Practical Morocco',
    description: 'Taxis, cash, supermarkets, mall resets, heat management, tickets and when not to force a plan.',
  },
  {
    icon: '✓',
    title: 'Family rhythm',
    description: 'The winning pattern: one strong thing, then shade, food, games, rest or something modern.',
  },
]

export const usefulItems: UsefulItem[] = [
  { label: 'Country', value: 'Morocco' },
  { label: 'Bases', value: 'Riad Sultan Suleiman · Ouirgane Ecolodge · Agafay Pearl Camp · Riad Salman' },
  { label: 'Trip lesson', value: 'One main outing at a time beats a forced checklist' },
  { label: 'Hello / thanks', value: 'Salam · Shukran' },
]

export const playActivities: PlayActivity[] = [
  {
    icon: '?',
    title: 'What actually happened quiz',
    description:
      'A post-trip quiz: where did the beef tagine work, which place caused the Google Photos bug, and what was not the same as Menara Mall?',
  },
  {
    icon: '◌',
    title: 'Best food surprise',
    description:
      'Compare the first chicken tajine/couscous reaction with the later beef tagine and breakfast breads.',
  },
  {
    icon: '◇',
    title: 'Photo scavenger hunt review',
    description:
      'Pick favourite doors, cats, tiles, mountain views, camel photos, garden colours and accidental funny moments.',
  },
  {
    icon: '✓',
    title: 'Trip awards',
    description:
      'Best view, best meal, biggest relief, worst heat moment, most overrated room and best family decision.',
  },
]
