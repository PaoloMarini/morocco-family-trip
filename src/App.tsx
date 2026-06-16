import { useState } from 'react'
import './App.css'

type Section = 'home' | 'journey' | 'discover' | 'useful'

type Destination = {
  id: string
  name: string
  region: string
  dates: string
  nights: number
  accommodation: string
  description: string
  symbol: string
  theme: string
  highlights: string[]
}

const destinations: Destination[] = [
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

const navigation: Array<{
  id: Section
  label: string
  icon: string
}> = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'journey', label: 'Journey', icon: '↝' },
  { id: 'discover', label: 'Discover', icon: '◇' },
  { id: 'useful', label: 'Useful', icon: '☰' },
]

function DestinationCard({
  destination,
}: {
  destination: Destination
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className={`destination-card ${destination.theme}`}>
      <div className="destination-card__top">
        <div className="destination-symbol" aria-hidden="true">
          {destination.symbol}
        </div>

        <div className="destination-heading">
          <p className="eyebrow">{destination.region}</p>
          <h3>{destination.name}</h3>
          <p className="destination-meta">
            {destination.dates} · {destination.nights}{' '}
            {destination.nights === 1 ? 'night' : 'nights'}
          </p>
        </div>
      </div>

      <p className="destination-description">{destination.description}</p>

      <button
        className="text-button"
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((current) => !current)}
      >
        {expanded ? 'Show less' : 'Explore this stop'}
        <span aria-hidden="true">{expanded ? ' ↑' : ' ↓'}</span>
      </button>

      {expanded && (
        <div className="destination-details">
          <div>
            <p className="detail-label">Staying at</p>
            <p>{destination.accommodation}</p>
          </div>

          <div>
            <p className="detail-label">What awaits us</p>
            <ul>
              {destination.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  )
}

function HomePage({ onExplore }: { onExplore: () => void }) {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <p className="hero__kicker">Our family adventure</p>
          <h1>Morocco</h1>
          <p className="hero__dates">17–25 June 2026</p>

          <p className="hero__intro">
            Three travellers, four stays and nine days between the medina,
            mountains and desert.
          </p>

          <button className="primary-button" type="button" onClick={onExplore}>
            Begin the journey
          </button>
        </div>

        <div className="hero__landscape" aria-hidden="true">
          <span className="sun" />
          <span className="mountain mountain--back" />
          <span className="mountain mountain--front" />
          <span className="dune dune--one" />
          <span className="dune dune--two" />
        </div>
      </section>

      <section className="page-section route-summary">
        <div className="section-heading">
          <p className="eyebrow">The route</p>
          <h2>From city to mountains and desert</h2>
        </div>

        <div className="route-line" aria-label="Trip route">
          <div>
            <strong>Marrakesh</strong>
            <span>17 June</span>
          </div>
          <span className="route-arrow">→</span>
          <div>
            <strong>Ouirgane</strong>
            <span>19 June</span>
          </div>
          <span className="route-arrow">→</span>
          <div>
            <strong>Agafay</strong>
            <span>21 June</span>
          </div>
          <span className="route-arrow">→</span>
          <div>
            <strong>Marrakesh</strong>
            <span>22 June</span>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <p className="eyebrow">First challenge</p>
          <h2>What do you already know?</h2>
        </div>

        <div className="feature-card">
          <span className="feature-card__icon" aria-hidden="true">
            ?
          </span>
          <div>
            <h3>Morocco before landing</h3>
            <p>
              Test your assumptions about the country, its people, food,
              languages and history.
            </p>
            <span className="coming-soon">Quiz coming in the next stage</span>
          </div>
        </div>
      </section>
    </>
  )
}

function JourneyPage() {
  return (
    <section className="page-section page-section--top">
      <div className="section-heading">
        <p className="eyebrow">Nine days in Morocco</p>
        <h1 className="page-title">Our journey</h1>
        <p>
          Open each stop for an introduction to where we are staying and what
          makes it different.
        </p>
      </div>

      <div className="timeline">
        {destinations.map((destination, index) => (
          <div className="timeline-item" key={destination.id}>
            <div className="timeline-marker">
              <span>{index + 1}</span>
            </div>
            <DestinationCard destination={destination} />
          </div>
        ))}
      </div>
    </section>
  )
}

function DiscoverPage() {
  const topics = [
    {
      icon: '⌛',
      title: 'History',
      description:
        'Caravans, dynasties, empires and the story of Marrakesh.',
    },
    {
      icon: 'ⵣ',
      title: 'Amazigh culture',
      description:
        'The people, languages and traditions of North Africa.',
    },
    {
      icon: '✦',
      title: 'Architecture',
      description:
        'Riads, mosques, gardens, geometric art and hidden courtyards.',
    },
    {
      icon: '◌',
      title: 'Food',
      description:
        'Tagines, couscous, bread, mint tea and what we should taste.',
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

  return (
    <section className="page-section page-section--top">
      <div className="section-heading">
        <p className="eyebrow">Look beyond the photographs</p>
        <h1 className="page-title">Discover Morocco</h1>
        <p>
          Short stories and explainers to read on the flight and revisit during
          the trip.
        </p>
      </div>

      <div className="topic-grid">
        {topics.map((topic) => (
          <article className="topic-card" key={topic.title}>
            <span className="topic-card__icon" aria-hidden="true">
              {topic.icon}
            </span>
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
            <span className="coming-soon">Content coming next</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function UsefulPage() {
  const items = [
    ['£1', 'about 12–13 MAD'],
    ['Emergency', 'Police 19 · Ambulance 15'],
    ['Hello', 'Salam'],
    ['Thank you', 'Shukran'],
  ]

  return (
    <section className="page-section page-section--top">
      <div className="section-heading">
        <p className="eyebrow">Keep this close</p>
        <h1 className="page-title">Useful information</h1>
        <p>
          Essential details for money, language, accommodation and getting
          around.
        </p>
      </div>

      <div className="quick-facts">
        {items.map(([label, value]) => (
          <div className="quick-fact" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>

      <div className="notice-card">
        <strong>Important</strong>
        <p>
          We will verify and complete emergency numbers, addresses, transfer
          details and map links before treating this section as authoritative.
        </p>
      </div>
    </section>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home')

  const renderPage = () => {
    switch (activeSection) {
      case 'journey':
        return <JourneyPage />
      case 'discover':
        return <DiscoverPage />
      case 'useful':
        return <UsefulPage />
      default:
        return <HomePage onExplore={() => setActiveSection('journey')} />
    }
  }

  return (
    <div className="app">
      <header className="top-bar">
        <button
          className="brand"
          type="button"
          onClick={() => setActiveSection('home')}
          aria-label="Return to home"
        >
          <span className="brand__mark">M</span>
          <span>
            Morocco
            <small>Family journey</small>
          </span>
        </button>

        <span className="trip-length">9 days</span>
      </header>

      <main>{renderPage()}</main>

      <nav className="bottom-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <button
            key={item.id}
            type="button"
            className={activeSection === item.id ? 'active' : ''}
            aria-current={activeSection === item.id ? 'page' : undefined}
            onClick={() => {
              setActiveSection(item.id)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <span className="bottom-nav__icon" aria-hidden="true">
              {item.icon}
            </span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default App