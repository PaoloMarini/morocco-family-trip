import { useMemo, useState } from 'react'
import './TodayPage.css'

type Stop = {
  time: string
  title: string
  subtitle: string
  image: string
  alt: string
  context: string
  notice: string[]
  challenge: string
}

const todayStops: Stop[] = [
  {
    time: '08:30',
    title: 'Breakfast at the riad',
    subtitle: 'Start gently, check what everyone actually wants to eat today.',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Moroccan%20breakfast%20Marrakesh.jpg?width=900',
    alt: 'Moroccan breakfast table with bread and tea',
    context:
      'Riads are built around calm internal courtyards. That contrast matters: Marrakesh can feel loud outside, but traditional houses turn inward for shade, privacy and quiet.',
    notice: ['Courtyard light', 'Mint tea ritual', 'Bread, honey and fresh juice as safe food anchors'],
    challenge: 'Choose one familiar food and one new thing to try later.',
  },
  {
    time: '09:30',
    title: 'Koutoubia from outside',
    subtitle: 'The city landmark and orientation point.',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Koutoubia%20Mosque%2C%20Marrakesh%2C%20Morocco.jpg?width=900',
    alt: 'Koutoubia Mosque minaret in Marrakesh',
    context:
      'Koutoubia is a 12th-century Almohad mosque. Non-Muslim visitors do not enter, but the minaret is the visual anchor of Marrakesh and a cousin of famous towers in Rabat and Seville.',
    notice: ['The square shape of the minaret', 'The copper globes near the top', 'How the tower helps you re-orient in the medina'],
    challenge: 'Can you spot the minaret again later from a completely different street?',
  },
  {
    time: '10:15',
    title: 'Souk explorer mission',
    subtitle: 'Not shopping yet. Observe first, buy later.',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Souks%20Marrakech.jpg?width=900',
    alt: 'Colourful souk alley in Marrakesh',
    context:
      'The souks are not just tourist theatre. Marrakesh grew rich as a trading city, connecting mountain villages, desert routes, craftspeople and merchants.',
    notice: ['Metalwork: brass, copper, lanterns', 'Leather: bags, slippers, tannery smell', 'Spices and dyes: colour, scent, texture'],
    challenge: 'Find the best cat of the morning. Bonus points if it looks completely unimpressed.',
  },
  {
    time: '11:15',
    title: 'Ben Youssef Madrasa',
    subtitle: 'The stop that turns the morning from wandering into understanding.',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Ben%20Youssef%20Madrasa%20Marrakesh%20Morocco.jpg?width=900',
    alt: 'Courtyard of Ben Youssef Madrasa in Marrakesh',
    context:
      'Imagine being a teenager arriving here to study. The courtyard is grand, but the student rooms are tiny. That contrast is the story: knowledge, discipline, beauty and very little personal space.',
    notice: ['Zellij tiles cut into geometric patterns', 'Calligraphy used as art', 'Shade, water and courtyards as climate design'],
    challenge: 'Pick one pattern and see how far you can follow it before it repeats.',
  },
  {
    time: '13:00',
    title: 'Lunch at Le Jardin',
    subtitle: 'A soft landing: garden setting, variety, and no pressure to be “authentic”.',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Le%20Jardin%20Secret%20Marrakech.jpg?width=900',
    alt: 'Garden courtyard in Marrakesh',
    context:
      'A garden lunch fits the day: after alleys, crowds and stone, green space gives everyone a reset. One familiar choice is not a failure; it keeps the trip enjoyable.',
    notice: ['Shade and plants', 'Mint tea vs British mint tea', 'A menu with safer options for Sarah and Sonia'],
    challenge: 'Order one safe dish and one shared curiosity dish for the table.',
  },
]

const soukMission = [
  'Brass lantern',
  'Traditional slippers',
  'Orange spice pyramid',
  'Carved wooden door',
  'Cat sleeping in a ridiculous place',
  'Someone making or repairing something',
  'A courtyard you almost missed',
  'The best shade of blue or green tile',
]

const culturalCards = [
  {
    icon: '◇',
    title: 'Why so much geometry?',
    text:
      'In many Islamic spaces, beauty comes from pattern, proportion, repetition and calligraphy rather than human images. The result is art that feels mathematical and alive at the same time.',
  },
  {
    icon: '✍',
    title: 'Writing as decoration',
    text:
      'Arabic calligraphy is not just text. It can be architecture, rhythm and devotion. Look for places where words become borders, frames and patterns.',
  },
  {
    icon: '💧',
    title: 'Design for heat',
    text:
      'Courtyards, fountains, thick walls, narrow streets and shade are climate technology. Before air-conditioning, buildings had to work with heat, light and airflow.',
  },
  {
    icon: '🧭',
    title: 'Why the medina feels confusing',
    text:
      'The old city was not designed like a modern grid. It is layered, defensive, commercial and social. Getting a little lost is part of how it reveals itself.',
  },
]

function TodayPage() {
  const [checkedItems, setCheckedItems] = useState<string[]>([])
  const [openStop, setOpenStop] = useState(todayStops[1].title)

  const completedCount = checkedItems.length
  const progressLabel = useMemo(
    () => `${completedCount}/${soukMission.length} souk clues found`,
    [completedCount],
  )

  const toggleMissionItem = (item: string) => {
    setCheckedItems((current) =>
      current.includes(item)
        ? current.filter((checkedItem) => checkedItem !== item)
        : [...current, item],
    )
  }

  return (
    <>
      <section className="today-hero">
        <div className="today-hero__content">
          <p className="hero__kicker">Today in Morocco</p>
          <h1>Marrakesh without overdoing it</h1>
          <p className="today-hero__intro">
            A curious, light first full morning: breakfast, Koutoubia, souk clues,
            Ben Youssef Madrasa, then lunch at Le Jardin. Bahia Palace stays for
            the return to Marrakesh, when everyone has more energy and context.
          </p>
          <div className="today-hero__pills" aria-label="Today summary">
            <span>08:30 breakfast</span>
            <span>13:00 Le Jardin</span>
            <span>Bahia later</span>
          </div>
        </div>
        <div className="today-hero__map-card" aria-label="Route summary">
          <span className="map-dot map-dot--riad">Riad</span>
          <span className="map-dot map-dot--koutoubia">Koutoubia</span>
          <span className="map-dot map-dot--souks">Souks</span>
          <span className="map-dot map-dot--ben">Ben Youssef</span>
          <span className="map-dot map-dot--lunch">Le Jardin</span>
          <span className="map-line" />
        </div>
      </section>

      <section className="page-section today-dashboard">
        <div className="section-heading">
          <p className="eyebrow">Morning route</p>
          <h2>Tap a stop before you arrive</h2>
          <p>
            Each card gives you just enough context to make the place mean
            something, without turning the morning into homework.
          </p>
        </div>

        <div className="today-stop-list">
          {todayStops.map((stop) => {
            const isOpen = openStop === stop.title
            return (
              <article className={`today-stop ${isOpen ? 'today-stop--open' : ''}`} key={stop.title}>
                <button
                  className="today-stop__summary"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenStop(isOpen ? '' : stop.title)}
                >
                  <span className="today-stop__time">{stop.time}</span>
                  <span>
                    <strong>{stop.title}</strong>
                    <small>{stop.subtitle}</small>
                  </span>
                </button>

                {isOpen && (
                  <div className="today-stop__details">
                    <img src={stop.image} alt={stop.alt} loading="lazy" />
                    <div className="today-stop__text">
                      <p>{stop.context}</p>
                      <div className="notice-strip">
                        {stop.notice.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                      <div className="challenge-card">
                        <span>Mini challenge</span>
                        <strong>{stop.challenge}</strong>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </section>

      <section className="page-section curiosity-grid-section">
        <div className="section-heading">
          <p className="eyebrow">Look closer</p>
          <h2>Four ideas that unlock the morning</h2>
        </div>

        <div className="curiosity-grid">
          {culturalCards.map((card) => (
            <article className="curiosity-card" key={card.title}>
              <span className="curiosity-card__icon">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section mission-section">
        <div className="mission-card">
          <div>
            <p className="eyebrow">Souk mission</p>
            <h2>{progressLabel}</h2>
            <p>
              This is not shopping pressure. It is a way to turn a busy market
              into a game of noticing craft, colour, sound and absurd cats.
            </p>
          </div>

          <div className="mission-checklist">
            {soukMission.map((item) => (
              <button
                className={checkedItems.includes(item) ? 'mission-item mission-item--checked' : 'mission-item'}
                key={item}
                type="button"
                onClick={() => toggleMissionItem(item)}
              >
                <span>{checkedItems.includes(item) ? '✓' : ''}</span>
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section later-section">
        <article className="later-card">
          <div>
            <p className="eyebrow">Save for the return</p>
            <h2>Bahia Palace deserves its own calm slot</h2>
            <p>
              Bahia Palace is absolutely worth visiting, but forcing it into
              this morning would make the route less coherent. When we return
              to Marrakesh, pair Bahia Palace with the Saadian Tombs and El Badi
              Palace for a stronger “royal Marrakesh” day.
            </p>
          </div>
          <div className="later-card__stack">
            <span>Bahia Palace</span>
            <span>Saadian Tombs</span>
            <span>El Badi Palace</span>
            <span>Final Marrakesh shopping</span>
          </div>
        </article>
      </section>
    </>
  )
}

export default TodayPage
