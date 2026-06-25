import type { PracticalNote, TripDay } from '../types/trip'

const medinaNotes: PracticalNote[] = [
  {
    id: 'medina-surfaces',
    category: 'comfort',
    text: 'Medina walking involves uneven surfaces, heat, scooters and crowds; stop before everyone is cooked.',
  },
  {
    id: 'carry-water',
    category: 'comfort',
    text: 'Carry water and plan cool indoor or shaded breaks.',
  },
  {
    id: 'sun-protection',
    category: 'safety',
    text: 'Use sun protection, especially before long walks or transfers.',
  },
  {
    id: 'agree-prices',
    category: 'spending',
    text: 'Agree prices before taxis, optional activities or purchases.',
  },
]

const afternoonRestNote: PracticalNote = {
  id: 'afternoon-rest',
  category: 'planning',
  text: 'The family rhythm that worked best was sightseeing in the morning, then a lighter afternoon in the heat.',
}

export const tripDays: TripDay[] = [
  {
    id: '2026-06-17',
    dayNumber: 1,
    date: '2026-06-17',
    displayDate: 'Wednesday 17 June',
    location: 'Marrakesh',
    title: 'Arrival and first taste of the square',
    introduction:
      'The trip began with arrival at Riad Sultan Suleiman, a first walk to Jemaa el-Fnaa and dinner at Zeitoun Café. The square worked; the first chicken tajine/couscous less so for Sarah and Sonia.',
    accommodation: 'Riad Sultan Suleiman',
    transfer: 'Airport transfer to Riad Sultan Suleiman',
    activities: {
      morning: [
        {
          id: 'arrival-flight',
          title: 'Flight to Marrakesh',
          status: 'confirmed',
          category: 'arrival',
        },
      ],
      afternoon: [
        {
          id: 'arrival-transfer',
          title: 'Arrive and settle at Riad Sultan Suleiman',
          status: 'confirmed',
          category: 'travel',
        },
        {
          id: 'first-medina-orientation',
          title: 'First orientation walk from the riad toward Jemaa el-Fnaa',
          status: 'confirmed',
          category: 'sightseeing',
        },
      ],
      evening: [
        {
          id: 'jemaa-evening',
          title: 'Evening atmosphere in Jemaa el-Fnaa',
          status: 'confirmed',
          category: 'sightseeing',
        },
        {
          id: 'zeitoun-cafe',
          title: 'Dinner at Zeitoun Café',
          status: 'confirmed',
          category: 'food',
          note: 'Good first stop overall; tajine/couscous were not instant wins for the girls.',
        },
      ],
    },
    practicalNotes: [
      {
        id: 'arrival-food-learning',
        category: 'planning',
        text: 'The first meal taught us to balance Moroccan dishes with familiar options rather than force authenticity.',
      },
    ],
  },
  {
    id: '2026-06-18',
    dayNumber: 2,
    date: '2026-06-18',
    displayDate: 'Thursday 18 June',
    location: 'Marrakesh medina',
    title: 'Medina, Koutoubia, souks and Ben Youssef',
    introduction:
      'The first full Marrakesh day focused on the classic medina loop: Koutoubia from outside, the souks, Ben Youssef Madrasa and keeping Bahia Palace for later. By this point the family was already noticing “beautiful but empty rooms” fatigue.',
    accommodation: 'Riad Sultan Suleiman',
    activities: {
      morning: [
        {
          id: 'koutoubia-outside',
          title: 'Koutoubia Mosque from outside',
          status: 'confirmed',
          category: 'culture',
        },
        {
          id: 'souk-walk',
          title: 'Souks and medina lanes',
          status: 'confirmed',
          category: 'sightseeing',
          note: 'Best approached as a noticing game rather than shopping pressure.',
        },
        {
          id: 'ben-youssef',
          title: 'Ben Youssef Madrasa',
          status: 'confirmed',
          category: 'culture',
        },
      ],
      afternoon: [
        {
          id: 'le-jardin-secret-considered',
          title: 'Le Jardin Secret considered as a shaded alternative',
          status: 'flexible',
          category: 'sightseeing',
          note: 'Useful when the mood shifted away from more empty palace rooms.',
        },
        {
          id: 'cool-break',
          title: 'Heat-aware break rather than forcing more monuments',
          status: 'confirmed',
          category: 'rest',
        },
      ],
      evening: [
        {
          id: 'icecream-sunset-pivot',
          title: 'Ice cream / sunset-view pivot instead of expensive rooftop cocktails',
          status: 'confirmed',
          category: 'food',
          note: 'Kabana-style cocktail prices were judged poor value.',
        },
      ],
    },
    practicalNotes: [...medinaNotes, afternoonRestNote],
  },
  {
    id: '2026-06-19',
    dayNumber: 3,
    date: '2026-06-19',
    displayDate: 'Friday 19 June',
    location: 'Marrakesh to Ouirgane',
    title: 'From the medina to Ouirgane Ecolodge',
    introduction:
      'The trip changed pace: leaving Marrakesh for Ouirgane, with mountain air, layered Moroccan breads at breakfast and the start of a calmer High Atlas section.',
    accommodation: 'Ouirgane Ecolodge',
    transfer: 'Transfer from Marrakesh to Ouirgane Ecolodge',
    activities: {
      morning: [
        {
          id: 'checkout-marrakesh',
          title: 'Check out of Riad Sultan Suleiman',
          status: 'confirmed',
          category: 'travel',
        },
        {
          id: 'drive-ouirgane',
          title: 'Drive toward the High Atlas foothills and Ouirgane',
          status: 'confirmed',
          category: 'travel',
        },
      ],
      afternoon: [
        {
          id: 'ouirgane-arrival',
          title: 'Arrive at Ouirgane Ecolodge',
          status: 'confirmed',
          category: 'rest',
        },
        {
          id: 'nearby-shops-restaurants',
          title: 'Check what is nearby: small shops, local restaurants and lodge food options',
          status: 'confirmed',
          category: 'food',
        },
      ],
      evening: [
        {
          id: 'ouirgane-dinner',
          title: 'Dinner at or near the ecolodge',
          status: 'confirmed',
          category: 'food',
          note: 'The beef tagine landed better than the first Marrakesh chicken dishes.',
        },
        {
          id: 'room-games',
          title: 'Low-key evening games in the room',
          status: 'confirmed',
          category: 'wellbeing',
        },
      ],
    },
    practicalNotes: [
      afternoonRestNote,
      {
        id: 'ouirgane-food-learning',
        category: 'planning',
        text: 'The girls liking beef tagine here showed the issue was not simply Moroccan food; context, tiredness and dish choice mattered.',
      },
    ],
  },
  {
    id: '2026-06-20',
    dayNumber: 4,
    date: '2026-06-20',
    displayDate: 'Saturday 20 June',
    location: 'Ouirgane',
    title: 'Ouirgane guided walk and mountain reset',
    introduction:
      'A proper mountain day: guided walking, Atlas scenery, slower lodge time and practical preparation for the next desert/camel section.',
    accommodation: 'Ouirgane Ecolodge',
    activities: {
      morning: [
        {
          id: 'ouirgane-breakfast-bread',
          title: 'Moroccan layered breakfast breads and lodge breakfast',
          status: 'confirmed',
          category: 'food',
          note: 'The likely bread discovery was msemen or a similar layered semolina flatbread.',
        },
        {
          id: 'guided-walk-ouirgane',
          title: 'Guided walk around Ouirgane and the surrounding landscape',
          status: 'confirmed',
          category: 'nature',
        },
      ],
      afternoon: [
        {
          id: 'heat-rest-ouirgane',
          title: 'Rest during the long hot afternoon',
          status: 'confirmed',
          category: 'rest',
        },
        {
          id: 'cards-games',
          title: 'Find games / playing cards ideas for down time',
          status: 'confirmed',
          category: 'wellbeing',
        },
      ],
      evening: [
        {
          id: 'prep-agafay',
          title: 'Prepare for Agafay: clothes, sun cream, mosquito repellent and long trousers for the ride',
          status: 'confirmed',
          category: 'planning',
        },
      ],
    },
    practicalNotes: [
      {
        id: 'repellent-order',
        category: 'safety',
        text: 'For sun plus insects: sun cream first, let it absorb, then repellent on top.',
      },
      {
        id: 'long-trousers-camel',
        category: 'comfort',
        text: 'Long trousers were a sensible recommendation for camel riding comfort.',
      },
    ],
  },
  {
    id: '2026-06-21',
    dayNumber: 5,
    date: '2026-06-21',
    displayDate: 'Sunday 21 June',
    location: 'Ouirgane to Agafay',
    title: 'Agafay Pearl Camp and camel ride',
    introduction:
      'From the High Atlas to the Agafay stone desert: camp arrival, sunset colours, camel ride photos/videos and a bigger-sky evening.',
    accommodation: 'Agafay Pearl Camp',
    transfer: 'Transfer from Ouirgane to Agafay Pearl Camp',
    activities: {
      morning: [
        {
          id: 'ouirgane-checkout',
          title: 'Breakfast and check out of Ouirgane Ecolodge',
          status: 'confirmed',
          category: 'travel',
        },
      ],
      afternoon: [
        {
          id: 'agafay-transfer',
          title: 'Transfer to Agafay Pearl Camp',
          status: 'confirmed',
          category: 'travel',
        },
        {
          id: 'agafay-checkin',
          title: 'Check in and understand what is included vs paid separately',
          status: 'confirmed',
          category: 'rest',
        },
        {
          id: 'camel-ride',
          title: 'Camel ride at Agafay',
          status: 'confirmed',
          category: 'nature',
          note: 'This later caused the Google Photos video timestamp mystery.',
        },
      ],
      evening: [
        {
          id: 'agafay-sunset',
          title: 'Agafay sunset and camp atmosphere',
          status: 'confirmed',
          category: 'nature',
        },
        {
          id: 'agafay-dinner',
          title: 'Dinner at camp',
          status: 'confirmed',
          category: 'food',
        },
      ],
    },
    practicalNotes: [
      {
        id: 'stone-desert-not-sahara',
        category: 'planning',
        text: 'Agafay is a rocky desert, not classic Sahara dunes; the value is sunset, space and sky.',
      },
      {
        id: 'photo-timezone-bug',
        category: 'planning',
        text: 'Trip photos/videos exposed a Google Photos time-handling issue: videos appeared one hour later than photos.',
      },
    ],
  },
  {
    id: '2026-06-22',
    dayNumber: 6,
    date: '2026-06-22',
    displayDate: 'Monday 22 June',
    location: 'Agafay to Marrakesh',
    title: 'Return to Marrakesh and Bahia Palace',
    introduction:
      'Back from Agafay to Riad Salman. Bahia Palace was done late morning, then the day had to work around heat, lunch timing and finding simple practical things like sandwiches and playing cards.',
    accommodation: 'Riad Salman',
    transfer: 'Transfer from Agafay Pearl Camp to Riad Salman',
    activities: {
      morning: [
        {
          id: 'agafay-return-transfer',
          title: 'Transfer from Agafay to Riad Salman',
          status: 'confirmed',
          category: 'travel',
        },
        {
          id: 'bahia-palace-done',
          title: 'Bahia Palace',
          status: 'confirmed',
          category: 'culture',
          note: 'Done around late morning; impressive but part of the “beautiful empty rooms” pattern.',
        },
      ],
      afternoon: [
        {
          id: 'lunch-after-bahia',
          title: 'Lunch after Bahia Palace, avoiding the worst heat',
          status: 'confirmed',
          category: 'food',
        },
        {
          id: 'jardin-secret-considered',
          title: 'Le Jardin Secret considered as another nearby option',
          status: 'flexible',
          category: 'sightseeing',
        },
        {
          id: 'supermarket-cards',
          title: 'Look for simple sandwiches, supermarket options and playing cards',
          status: 'confirmed',
          category: 'shopping',
        },
      ],
      evening: [
        {
          id: 'bazaar-alternatives',
          title: 'Dinner/drinks search: something other than another tajine',
          status: 'confirmed',
          category: 'food',
          note: 'Bazaar Café was considered; alternatives were explored for alcohol and non-tajine food.',
        },
      ],
    },
    practicalNotes: [afternoonRestNote, ...medinaNotes],
  },
  {
    id: '2026-06-23',
    dayNumber: 7,
    date: '2026-06-23',
    displayDate: 'Tuesday 23 June',
    location: 'Marrakesh',
    title: 'Majorelle, YSL and a modern-Marrakesh reset',
    introduction:
      'The Majorelle / Yves Saint Laurent / Berber museum combo was completed, followed by a drink and chips. The afternoon question became: what now, without overloading the family?',
    accommodation: 'Riad Salman',
    activities: {
      morning: [
        {
          id: 'jardin-majorelle-done',
          title: 'Jardin Majorelle',
          status: 'confirmed',
          category: 'sightseeing',
        },
        {
          id: 'ysl-berber-museums-done',
          title: 'Yves Saint Laurent Museum and Berber Art Museum',
          status: 'confirmed',
          category: 'culture',
        },
      ],
      afternoon: [
        {
          id: 'drink-chips-break',
          title: 'Drink and chips break after the museum combo',
          status: 'confirmed',
          category: 'food',
        },
        {
          id: 'modern-mall-option',
          title: 'Modern Marrakesh / mall-style reset considered',
          status: 'flexible',
          category: 'shopping',
          note: 'A modern centre with Carrefour and games had already worked as a useful contrast to medina sightseeing.',
        },
      ],
      evening: [
        {
          id: 'flexible-dinner',
          title: 'Flexible dinner depending on energy and food mood',
          status: 'confirmed',
          category: 'food',
        },
      ],
    },
    practicalNotes: [
      afternoonRestNote,
      {
        id: 'museum-fatigue',
        category: 'planning',
        text: 'The trip works better when museums/gardens are paired with unstructured rest or modern, air-conditioned contrast.',
      },
    ],
  },
  {
    id: '2026-06-24',
    dayNumber: 8,
    date: '2026-06-24',
    displayDate: 'Wednesday 24 June',
    location: 'Marrakesh',
    title: 'Final full day: Meydene and ANIMA plan',
    introduction:
      'By the last full day the goal was no longer “see everything”. The strongest live plan was Meydene / modern Marrakesh first, then ANIMA in the afternoon using the free shuttle if the logistics worked.',
    accommodation: 'Riad Salman',
    activities: {
      morning: [
        {
          id: 'meydene-morning',
          title: 'Meydene / M Avenue area considered for a modern, less medina-heavy morning',
          status: 'flexible',
          category: 'culture',
          note: 'Important clarification from the chat: Meydene is not the same as Menara Mall, though maps made nearby places look confusingly close.',
        },
        {
          id: 'mall-modern-option',
          title: 'Mall / Carrefour / game-area type option if the family needed air conditioning and normality',
          status: 'flexible',
          category: 'shopping',
        },
      ],
      afternoon: [
        {
          id: 'anima-shuttle',
          title: 'ANIMA Garden via free shuttle bus',
          status: 'flexible',
          category: 'sightseeing',
          note: 'The shuttle was booked in the chat; tickets still needed checking/purchasing at that point.',
        },
      ],
      evening: [
        {
          id: 'les-terrasses-des-arts',
          title: 'Dinner price-check research for Les Terrasses des Arts',
          status: 'flexible',
          category: 'food',
        },
        {
          id: 'final-evening-soft',
          title: 'Keep final evening soft: favourite moments, packing buffer and no forced monuments',
          status: 'suggested',
          category: 'wellbeing',
        },
      ],
    },
    practicalNotes: [
      afternoonRestNote,
      {
        id: 'last-day-realism',
        category: 'planning',
        text: 'The final full day should protect energy: one main outing plus a good meal beats a frantic checklist.',
      },
    ],
  },
  {
    id: '2026-06-25',
    dayNumber: 9,
    date: '2026-06-25',
    displayDate: 'Thursday 25 June',
    location: 'Marrakesh to London',
    title: 'Departure and flight home',
    introduction:
      'Departure day: pack, check out, leave plenty of airport buffer and use the flight for music, notes and catching breath after a busy family trip.',
    accommodation: 'Riad Salman',
    transfer: 'Transfer from Riad Salman to Marrakesh airport',
    activities: {
      morning: [
        {
          id: 'departure-breakfast',
          title: 'Final breakfast at the riad',
          status: 'suggested',
          category: 'food',
        },
        {
          id: 'departure-pack',
          title: 'Pack, check rooms and check out',
          status: 'confirmed',
          category: 'departure',
        },
      ],
      afternoon: [
        {
          id: 'airport-transfer-buffer',
          title: 'Transfer to Marrakesh airport with generous buffer',
          status: 'confirmed',
          category: 'travel',
        },
        {
          id: 'flight-home',
          title: 'Flight back to London',
          status: 'confirmed',
          category: 'departure',
        },
      ],
      evening: [
        {
          id: 'flight-reading-music',
          title: 'Use flight time for music guides, photos and decompression',
          status: 'flexible',
          category: 'wellbeing',
        },
      ],
    },
    practicalNotes: [
      {
        id: 'departure-light',
        category: 'planning',
        text: 'Do not add new sightseeing on departure day unless the airport timing is already completely safe.',
      },
    ],
  },
]
