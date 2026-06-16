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
