export type Section = 'home' | 'journey' | 'discover' | 'play' | 'useful'

export type DestinationTheme = 'terracotta' | 'mountain' | 'desert' | 'rose'

export type Destination = {
  id: string
  name: string
  region: string
  dates: string
  nights: number
  accommodation: string
  description: string
  symbol: string
  theme: DestinationTheme
  highlights: string[]
}

export type NavigationItem = {
  id: Section
  label: string
  icon: string
}

export type DiscoverTopic = {
  icon: string
  title: string
  description: string
}

export type UsefulItem = {
  label: string
  value: string
}

export type PlayActivity = {
  icon: string
  title: string
  description: string
}

export type ActivityStatus = 'confirmed' | 'suggested' | 'flexible'

export type ActivityCategory =
  | 'arrival'
  | 'culture'
  | 'departure'
  | 'food'
  | 'nature'
  | 'rest'
  | 'shopping'
  | 'sightseeing'
  | 'travel'
  | 'wellbeing'

export type DayPeriod = 'morning' | 'afternoon' | 'evening'

export type PracticalNoteCategory =
  | 'comfort'
  | 'planning'
  | 'safety'
  | 'spending'

export type Activity = {
  id: string
  title: string
  status: ActivityStatus
  category: ActivityCategory
  note?: string
}

export type PracticalNote = {
  id: string
  category: PracticalNoteCategory
  text: string
}

export type TripDay = {
  id: string
  dayNumber: number
  date: string
  displayDate: string
  location: string
  title: string
  introduction: string
  accommodation: string
  transfer?: string
  activities: Record<DayPeriod, Activity[]>
  practicalNotes: PracticalNote[]
  alternatives?: Activity[]
}
