import type { PracticalNote, TripDay } from '../types/trip'

const medinaNotes: PracticalNote[] = [
  {
    id: 'medina-surfaces',
    category: 'comfort',
    text: 'Medina walking involves uneven surfaces and crowds.',
  },
  {
    id: 'carry-water',
    category: 'comfort',
    text: 'Carry water.',
  },
  {
    id: 'sun-protection',
    category: 'safety',
    text: 'Use sun protection.',
  },
  {
    id: 'agree-prices',
    category: 'spending',
    text: 'Agree prices before optional activities or purchases.',
  },
]

const afternoonRestNote: PracticalNote = {
  id: 'afternoon-rest',
  category: 'planning',
  text: 'Plan rest during the hottest afternoon period.',
}

export const tripDays: TripDay[] = [
  {
    id: '2026-06-17',
    dayNumber: 1,
    date: '2026-06-17',
    displayDate: 'Wednesday 17 June',
    location: 'Marrakesh',
    title: 'Arrival in Marrakesh',
    introduction:
      'A gentle arrival day: get to the riad, settle in and keep the evening deliberately easy.',
    accommodation: 'Riad Sultan Suleiman',
    transfer: 'Private transfer to Riad Sultan Suleiman',
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
          title: 'Private transfer to Riad Sultan Suleiman',
          status: 'confirmed',
          category: 'travel',
        },
        {
          id: 'arrival-check-in',
          title: 'Check in',
          status: 'confirmed',
          category: 'rest',
        },
        {
          id: 'arrival-short-walk',
          title: 'Short walk immediately around the riad',
          status: 'flexible',
          category: 'sightseeing',
          note: 'Only if everyone still has energy.',
        },
      ],
      evening: [
        {
          id: 'arrival-riad-dinner',
          title: 'Dinner at the riad',
          status: 'confirmed',
          category: 'food',
        },
        {
          id: 'arrival-rest',
          title: 'Rest and leave medina exploration for the next morning',
          status: 'suggested',
          category: 'rest',
          note: 'No demanding activity should be planned after dinner.',
        },
      ],
    },
    practicalNotes: [
      {
        id: 'arrival-light',
        category: 'planning',
        text: 'Keep arrival day light after travel.',
      },
    ],
  },
  {
    id: '2026-06-18',
    dayNumber: 2,
    date: '2026-06-18',
    displayDate: 'Thursday 18 June',
    location: 'Marrakesh',
    title: 'First full day in Marrakesh',
    introduction:
      'Use the first full day to learn the medina with help, then slow down before sunset.',
    accommodation: 'Riad Sultan Suleiman',
    activities: {
      morning: [
        {
          id: 'marrakesh-breakfast',
          title: 'Breakfast at the riad',
          status: 'suggested',
          category: 'food',
        },
        {
          id: 'medina-guide',
          title: 'Half-day guided introduction to the medina',
          status: 'suggested',
          category: 'culture',
        },
        {
          id: 'bahia-palace',
          title: 'Bahia Palace',
          status: 'suggested',
          category: 'sightseeing',
        },
        {
          id: 'mellah-walk',
          title: 'Walk through the Mellah',
          status: 'suggested',
          category: 'sightseeing',
        },
        {
          id: 'selected-souks',
          title: 'Explore selected souks with the guide',
          status: 'suggested',
          category: 'shopping',
        },
      ],
      afternoon: [
        {
          id: 'medina-lunch',
          title: 'Rooftop or courtyard lunch in or near the medina',
          status: 'suggested',
          category: 'food',
        },
        {
          id: 'slower-medina',
          title: 'Continue through the medina at a slower pace',
          status: 'suggested',
          category: 'sightseeing',
        },
        {
          id: 'ben-youssef',
          title: 'Optional visit to Ben Youssef Madrasa',
          status: 'flexible',
          category: 'culture',
        },
        {
          id: 'riad-rest',
          title: 'Return to the riad for afternoon rest',
          status: 'suggested',
          category: 'rest',
        },
      ],
      evening: [
        {
          id: 'jemaa-sunset',
          title: 'Jemaa el-Fnaa around sunset',
          status: 'suggested',
          category: 'sightseeing',
        },
        {
          id: 'rooftop-dinner',
          title: 'Rooftop dinner with views over the square or medina',
          status: 'suggested',
          category: 'food',
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
    title: 'Marrakesh to Ouirgane',
    introduction:
      'A change of pace from the city to the High Atlas foothills, with a soft landing at the lodge.',
    accommodation: 'Ouirgane Ecolodge',
    transfer: 'Private transfer to Ouirgane',
    activities: {
      morning: [
        {
          id: 'ouirgane-breakfast',
          title: 'Relaxed breakfast',
          status: 'suggested',
          category: 'food',
        },
        {
          id: 'ouirgane-checkout',
          title: 'Check out',
          status: 'suggested',
          category: 'travel',
        },
        {
          id: 'ouirgane-transfer',
          title: 'Private transfer to Ouirgane',
          status: 'suggested',
          category: 'travel',
        },
      ],
      afternoon: [
        {
          id: 'ouirgane-checkin',
          title: 'Check in at Ouirgane Ecolodge',
          status: 'suggested',
          category: 'rest',
        },
        {
          id: 'ouirgane-lunch',
          title: 'Lunch or late lunch at the lodge',
          status: 'suggested',
          category: 'food',
        },
        {
          id: 'ouirgane-gentle-walk',
          title: 'Gentle walk around the property or nearby village',
          status: 'flexible',
          category: 'nature',
        },
      ],
      evening: [
        {
          id: 'ouirgane-dinner',
          title: 'Dinner at the lodge',
          status: 'suggested',
          category: 'food',
        },
      ],
    },
    practicalNotes: [
      {
        id: 'transfer-day-light',
        category: 'planning',
        text: 'Keep transfer day flexible and avoid packing the afternoon.',
      },
      {
        id: 'mountain-water',
        category: 'comfort',
        text: 'Carry water.',
      },
      {
        id: 'mountain-sun',
        category: 'safety',
        text: 'Use sun protection.',
      },
    ],
  },
  {
    id: '2026-06-20',
    dayNumber: 4,
    date: '2026-06-20',
    displayDate: 'Saturday 20 June',
    location: 'Ouirgane',
    title: 'Ouirgane and the High Atlas',
    introduction:
      'A mountain day for walking, learning about the landscape and leaving room for rest.',
    accommodation: 'Ouirgane Ecolodge',
    activities: {
      morning: [
        {
          id: 'atlas-breakfast',
          title: 'Breakfast',
          status: 'suggested',
          category: 'food',
        },
        {
          id: 'atlas-walk',
          title: 'Guided or self-guided walk appropriate for the family',
          status: 'suggested',
          category: 'nature',
        },
        {
          id: 'amazigh-landscape',
          title: 'Learn about local Amazigh villages, agriculture and landscape',
          status: 'suggested',
          category: 'culture',
        },
      ],
      afternoon: [
        {
          id: 'atlas-lunch',
          title: 'Lunch at the lodge or during the excursion',
          status: 'suggested',
          category: 'food',
        },
        {
          id: 'atlas-pool-rest',
          title: 'Pool or rest time',
          status: 'flexible',
          category: 'rest',
        },
      ],
      evening: [
        {
          id: 'atlas-sunset',
          title: 'Sunset walk',
          status: 'flexible',
          category: 'nature',
        },
        {
          id: 'atlas-dinner',
          title: 'Dinner at the lodge',
          status: 'suggested',
          category: 'food',
        },
      ],
    },
    practicalNotes: [
      {
        id: 'walk-energy',
        category: 'planning',
        text: 'Choose a walk length that suits the family on the day.',
      },
      {
        id: 'atlas-water',
        category: 'comfort',
        text: 'Carry water.',
      },
      {
        id: 'atlas-sun',
        category: 'safety',
        text: 'Use sun protection.',
      },
    ],
  },
  {
    id: '2026-06-21',
    dayNumber: 5,
    date: '2026-06-21',
    displayDate: 'Sunday 21 June',
    location: 'Ouirgane to Agafay',
    title: 'Ouirgane to Agafay',
    introduction:
      'Move from the mountains to the stone desert and keep the evening centred on sunset and camp.',
    accommodation: 'Agafay Pearl Camp',
    transfer: 'Transfer to Agafay Pearl Camp',
    activities: {
      morning: [
        {
          id: 'agafay-breakfast',
          title: 'Breakfast',
          status: 'suggested',
          category: 'food',
        },
        {
          id: 'agafay-free-morning',
          title: 'Free morning or short walk',
          status: 'flexible',
          category: 'rest',
        },
      ],
      afternoon: [
        {
          id: 'agafay-transfer',
          title: 'Transfer to Agafay Pearl Camp',
          status: 'suggested',
          category: 'travel',
        },
        {
          id: 'agafay-checkin',
          title: 'Check in',
          status: 'suggested',
          category: 'rest',
        },
        {
          id: 'agafay-activity',
          title: 'Camel ride or desert activity',
          status: 'flexible',
          category: 'nature',
          note: 'Agree prices before optional activities.',
        },
      ],
      evening: [
        {
          id: 'agafay-sunset',
          title: 'Sunset',
          status: 'suggested',
          category: 'nature',
        },
        {
          id: 'agafay-dinner',
          title: 'Dinner at camp',
          status: 'suggested',
          category: 'food',
        },
        {
          id: 'agafay-stargazing',
          title: 'Stargazing if conditions allow',
          status: 'flexible',
          category: 'nature',
        },
      ],
    },
    practicalNotes: [
      {
        id: 'agafay-sun',
        category: 'safety',
        text: 'Use sun protection.',
      },
      {
        id: 'agafay-water',
        category: 'comfort',
        text: 'Carry water.',
      },
      {
        id: 'agafay-prices',
        category: 'spending',
        text: 'Agree prices before optional activities or purchases.',
      },
    ],
  },
  {
    id: '2026-06-22',
    dayNumber: 6,
    date: '2026-06-22',
    displayDate: 'Monday 22 June',
    location: 'Agafay to Marrakesh',
    title: 'Agafay to Marrakesh',
    introduction:
      'Return to Marrakesh without rushing: transfer, settle in and only explore gently.',
    accommodation: 'Riad Salman',
    transfer: 'Transfer to Riad Salman',
    activities: {
      morning: [
        {
          id: 'return-breakfast',
          title: 'Breakfast at camp',
          status: 'suggested',
          category: 'food',
        },
        {
          id: 'return-slow-morning',
          title: 'Slow morning',
          status: 'suggested',
          category: 'rest',
        },
        {
          id: 'return-transfer',
          title: 'Transfer to Riad Salman',
          status: 'suggested',
          category: 'travel',
        },
      ],
      afternoon: [
        {
          id: 'return-checkin',
          title: 'Check in',
          status: 'suggested',
          category: 'rest',
        },
        {
          id: 'return-lunch',
          title: 'Lunch nearby',
          status: 'suggested',
          category: 'food',
        },
        {
          id: 'return-rest',
          title: 'Rest',
          status: 'suggested',
          category: 'rest',
        },
        {
          id: 'return-gentle-explore',
          title: 'Gentle late-afternoon exploration',
          status: 'flexible',
          category: 'sightseeing',
        },
      ],
      evening: [
        {
          id: 'return-dinner',
          title: 'Dinner close to the riad',
          status: 'suggested',
          category: 'food',
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
    title: 'Marrakesh beyond the first-day highlights',
    introduction:
      'Look beyond the medina with gardens, modern Marrakesh and a flexible evening plan.',
    accommodation: 'Riad Salman',
    activities: {
      morning: [
        {
          id: 'majorelle',
          title: 'Jardin Majorelle and surrounding area early',
          status: 'suggested',
          category: 'sightseeing',
        },
        {
          id: 'ysl-museum',
          title: 'Optional Yves Saint Laurent Museum',
          status: 'flexible',
          category: 'culture',
        },
      ],
      afternoon: [
        {
          id: 'gueliz-lunch',
          title: 'Lunch in Gueliz',
          status: 'suggested',
          category: 'food',
        },
        {
          id: 'modern-marrakesh',
          title: 'Explore modern Marrakesh',
          status: 'suggested',
          category: 'sightseeing',
        },
        {
          id: 'return-riad',
          title: 'Return to the riad',
          status: 'suggested',
          category: 'rest',
        },
      ],
      evening: [
        {
          id: 'marrakesh-dinner-choice',
          title: 'Dinner in the medina or Gueliz',
          status: 'flexible',
          category: 'food',
        },
      ],
    },
    practicalNotes: [
      afternoonRestNote,
      {
        id: 'gueliz-sun',
        category: 'safety',
        text: 'Use sun protection.',
      },
      {
        id: 'shopping-prices',
        category: 'spending',
        text: 'Agree prices before optional activities or purchases.',
      },
    ],
  },
  {
    id: '2026-06-24',
    dayNumber: 8,
    date: '2026-06-24',
    displayDate: 'Wednesday 24 June',
    location: 'Marrakesh',
    title: 'Flexible final full day',
    introduction:
      'Keep the final full day open for what the family most wants by then.',
    accommodation: 'Riad Salman',
    activities: {
      morning: [
        {
          id: 'final-choice',
          title:
            'Choose missed historical sights, shopping, hammam or spa, gardens, food exploration or a slower riad day',
          status: 'flexible',
          category: 'wellbeing',
        },
      ],
      afternoon: [
        {
          id: 'final-shopping',
          title: 'Final shopping with a defined budget',
          status: 'flexible',
          category: 'shopping',
        },
        {
          id: 'final-rest',
          title: 'Rest before the last evening',
          status: 'suggested',
          category: 'rest',
        },
      ],
      evening: [
        {
          id: 'final-dinner',
          title: 'Final Moroccan dinner',
          status: 'suggested',
          category: 'food',
        },
        {
          id: 'family-reflection',
          title: 'Family trip reflection or favourite-moment activity',
          status: 'suggested',
          category: 'wellbeing',
        },
      ],
    },
    practicalNotes: [
      {
        id: 'final-budget',
        category: 'spending',
        text: 'Agree prices before optional activities or purchases.',
      },
      afternoonRestNote,
      {
        id: 'final-water',
        category: 'comfort',
        text: 'Carry water.',
      },
    ],
    alternatives: [
      {
        id: 'missed-sights',
        title: 'Missed historical sights',
        status: 'flexible',
        category: 'culture',
      },
      {
        id: 'gardens',
        title: 'Gardens',
        status: 'flexible',
        category: 'sightseeing',
      },
      {
        id: 'slower-riad-day',
        title: 'Slower riad day',
        status: 'flexible',
        category: 'rest',
      },
    ],
  },
  {
    id: '2026-06-25',
    dayNumber: 9,
    date: '2026-06-25',
    displayDate: 'Thursday 25 June',
    location: 'Marrakesh',
    title: 'Departure',
    introduction:
      'A deliberately light departure day focused on packing, transfer buffer and getting home calmly.',
    accommodation: 'Riad Salman',
    activities: {
      morning: [
        {
          id: 'departure-breakfast',
          title: 'Breakfast',
          status: 'suggested',
          category: 'food',
        },
        {
          id: 'departure-pack',
          title: 'Pack and check out',
          status: 'suggested',
          category: 'departure',
        },
      ],
      afternoon: [
        {
          id: 'airport-transfer-buffer',
          title: 'Allow generous time for airport transfer',
          status: 'suggested',
          category: 'travel',
        },
        {
          id: 'travel-reflection',
          title: 'Final app reflection while travelling',
          status: 'flexible',
          category: 'wellbeing',
        },
      ],
      evening: [],
    },
    practicalNotes: [
      {
        id: 'departure-light',
        category: 'planning',
        text: 'Keep the final departure day deliberately light.',
      },
    ],
  },
]
