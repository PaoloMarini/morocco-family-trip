import { useMemo, useState } from 'react'
import './TodayPage.css'

const basePath = import.meta.env.BASE_URL

type Stop = {
  time: string
  title: string
  subtitle: string
  image: string
  fallbackImage: string
  alt: string
  context: string
  notice: string[]
  challenge: string
}

type QuizQuestion = {
  question: string
  answer: string
}

const todayStops: Stop[] = [
  {
    time: '09:00',
    title: 'Leave Marrakesh gently',
    subtitle: 'Pack, settle the riad, confirm pickup, water, cash and layers.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/SE_Ouirgane_Village_Dam_Al_Haouz_Oct25_A7CR_08497.jpg/900px-SE_Ouirgane_Village_Dam_Al_Haouz_Oct25_A7CR_08497.jpg',
    fallbackImage: `${basePath}trip-images/today-koutoubia.svg`,
    alt: 'Ouirgane village and Yacoub el Mansour barrage in the High Atlas',
    context:
      'Today is the mood shift: out of the dense medina and into the High Atlas foothills. Do the boring things early: charger check, passports, euros/MAD split, sunglasses, water, and a small bag for the car.',
    notice: ['Check room corners', 'Keep small cash separate', 'No need to squeeze in another palace'],
    challenge: 'Before leaving, each person picks one Marrakesh detail they noticed yesterday.',
  },
  {
    time: '10:00',
    title: 'Drive toward Asni and Ouirgane',
    subtitle: 'Watch the landscape change from city edge to red earth and mountains.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/NW_Pano_Ouirgane_La_Haouz_Oct25_A7CR_08782-4_PanoC.jpg/900px-NW_Pano_Ouirgane_La_Haouz_Oct25_A7CR_08782-4_PanoC.jpg',
    fallbackImage: `${basePath}trip-images/today-souks.svg`,
    alt: 'Panoramic view of Ouirgane and the High Atlas landscape',
    context:
      'Ouirgane is around 65 km south of Marrakesh by road and 14 km southwest of Asni. The drive makes the trip feel bigger: city edge, plain, red-earth villages, then the Nfiss valley.',
    notice: ['Olive groves', 'Red-earth villages', 'How the air and light feel cleaner than the medina'],
    challenge: 'Try to spot the first moment when Marrakesh feels properly behind you.',
  },
  {
    time: '12:00',
    title: 'Arrive at Ouirgane Ecolodge',
    subtitle: 'Slow down: check in, breathe, reset the pace.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Square_House_Courtyard_Ouirgane_Oct25_A7CR_08536.jpg/900px-Square_House_Courtyard_Ouirgane_Oct25_A7CR_08536.jpg',
    fallbackImage: `${basePath}trip-images/today-le-jardin.svg`,
    alt: 'Traditional central courtyard house in Ouirgane',
    context:
      'Ouirgane is a small rural commune in Al Haouz, set around the Nfiss river valley and the Yacoub el Mansour reservoir. This is the part of the trip where doing less is the point.',
    notice: ['Bird sounds', 'Olive and walnut trees', 'Mountain colours changing through the day'],
    challenge: 'Take one photo that feels completely unlike Marrakesh.',
  },
  {
    time: '15:30',
    title: 'Easy valley walk',
    subtitle: 'A short orientation walk, not a forced hike.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Irrigated_Olive_Grove_Ouirgane_Oct25_A7CR_08582.jpg/900px-Irrigated_Olive_Grove_Ouirgane_Oct25_A7CR_08582.jpg',
    fallbackImage: `${basePath}trip-images/today-ben-youssef.svg`,
    alt: 'Irrigated olive grove in Ouirgane',
    context:
      'The best first walk is not about distance; it is about noticing irrigation channels, terraces, trees, village edges and how people use a dry mountain landscape carefully.',
    notice: ['Irrigation channels', 'Terraced fields', 'Donkeys, goats or sheep if we are lucky'],
    challenge: 'Find three signs that water is precious here.',
  },
  {
    time: '18:30',
    title: 'Golden-hour reservoir view',
    subtitle: 'The sunset plan: quieter, cheaper and probably better than a rooftop cocktail.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/North_Yacoub_El_Mansour_Reservoir_Oct25_A7CR_08597.jpg/900px-North_Yacoub_El_Mansour_Reservoir_Oct25_A7CR_08597.jpg',
    fallbackImage: `${basePath}trip-images/today-breakfast.svg`,
    alt: 'Yacoub el Mansour reservoir near Ouirgane',
    context:
      'The Yacoub el Mansour dam was completed in 2008 to support water supply for the Marrakesh area and reduce sediment pressure downstream. It is a modern clue to how the valley works.',
    notice: ['Sun on red hills', 'Reflections on the reservoir', 'Temperature drop after sunset'],
    challenge: 'Ask: does the view feel peaceful, engineered, fragile, or all three?',
  },
]

const valleyMission = [
  'Olive tree',
  'Walnut tree',
  'A terrace wall',
  'Irrigation channel',
  'Reservoir view',
  'A mountain bird call',
  'A red-earth building',
  'A moment of total quiet',
]

const culturalCards = [
  {
    icon: 'ⵣ',
    title: 'Amazigh, not “just Berber”',
    text:
      'Amazigh cultures long pre-date modern Morocco. In mountain areas, language, village life, oral tradition, weaving, agriculture and hospitality are part of the landscape, not a tourist costume.',
  },
  {
    icon: '💧',
    title: 'Water is the real story',
    text:
      'The reservoir, irrigation channels, terraces and trees all point to the same truth: in the High Atlas, water management is survival, politics, engineering and everyday life at once.',
  },
  {
    icon: '⌛',
    title: 'Almohad echoes',
    text:
      'Tinmel, deeper in the mountains, was tied to the Almohad movement that shaped medieval Marrakesh. The mountain backstory helps explain why the city became so important.',
  },
  {
    icon: '🧭',
    title: '2023 earthquake context',
    text:
      'Al Haouz was hit hard by the September 2023 earthquake. Enjoy the valley, but do it with humility: tourism should notice real communities, not just scenery.',
  },
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'Where is Ouirgane compared with Marrakesh?',
    answer: 'South to south-west of Marrakesh, in the High Atlas foothills, beyond Asni.',
  },
  {
    question: 'Why do terraces matter in mountain farming?',
    answer: 'They slow water, reduce erosion and create flat growing space on steep land.',
  },
  {
    question: 'What should we avoid doing in villages?',
    answer: 'Do not photograph people closely without asking, do not treat homes as scenery, and keep clothing/behaviour respectful.',
  },
  {
    question: 'Why is Bahia Palace not in today’s plan?',
    answer: 'Because today is a transfer and mountain reset day; Bahia fits better when we return to Marrakesh for a palace/history cluster.',
  },
]

const videoLinks = [
  {
    title: 'High Atlas landscapes',
    url: 'https://www.youtube.com/results?search_query=High+Atlas+Morocco+Ouirgane+valley',
    description: 'Search YouTube for short visual previews of the road, villages and mountain scenery.',
  },
  {
    title: 'Tinmel and the Almohads',
    url: 'https://www.youtube.com/results?search_query=Tinmel+Mosque+Almohad+Morocco+history',
    description: 'Useful background for why these mountains mattered to medieval Marrakesh.',
  },
  {
    title: 'Amazigh culture in Morocco',
    url: 'https://www.youtube.com/results?search_query=Amazigh+culture+Morocco+High+Atlas',
    description: 'Good context for language, villages, food, music, weaving and identity.',
  },
]

function TodayPage() {
  const [checkedItems, setCheckedItems] = useState<string[]>([])
  const [openStop, setOpenStop] = useState(todayStops[0].title)
  const [openAnswer, setOpenAnswer] = useState('')

  const completedCount = checkedItems.length
  const progressLabel = useMemo(
    () => `${completedCount}/${valleyMission.length} valley clues found`,
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
      <section className="today-hero today-hero--mountain">
        <div className="today-hero__content">
          <p className="hero__kicker">Friday 19 June</p>
          <h1>Marrakesh to Ouirgane</h1>
          <p className="today-hero__intro">
            Today is deliberately calmer: leave the medina, drive south-west into the High Atlas foothills,
            check in at Ouirgane Ecolodge, then use the afternoon for a short valley walk and a
            golden-hour reservoir view. The win is not cramming in more sights; it is changing pace.
          </p>
          <div className="today-hero__pills" aria-label="Today summary">
            <span>65 km from Marrakesh</span>
            <span>Via Asni</span>
            <span>High Atlas</span>
            <span>Sunset reservoir</span>
          </div>
        </div>
        <div className="today-hero__map-card today-hero__map-card--route" aria-label="Schematic route from Marrakesh to Ouirgane">
          <span className="map-compass">N ↑</span>
          <span className="map-region map-region--plain">Haouz plain</span>
          <span className="map-region map-region--mountains">High Atlas foothills</span>
          <span className="map-dot map-dot--marrakesh">Marrakesh</span>
          <span className="map-dot map-dot--asni">Asni</span>
          <span className="map-dot map-dot--ouirgane">Ouirgane</span>
          <span className="map-dot map-dot--lodge">Ecolodge</span>
          <span className="map-dot map-dot--reservoir">Reservoir</span>
          <span className="map-road map-road--main" />
          <span className="map-road map-road--spur" />
          <span className="map-hills" aria-hidden="true">⌁ ⌁ ⌁</span>
        </div>
      </section>

      <section className="page-section today-dashboard">
        <div className="section-heading">
          <p className="eyebrow">Today’s route</p>
          <h2>Tap a stop before you arrive</h2>
          <p>
            The day is built around transition: city to valley, noise to quiet, red walls to red hills.
            Keep expectations flexible; the mountains reward looseness more than over-planning.
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
                    <img
                      src={stop.image}
                      alt={stop.alt}
                      loading="lazy"
                      onError={(event) => {
                        if (event.currentTarget.src !== stop.fallbackImage) {
                          event.currentTarget.src = stop.fallbackImage
                        }
                      }}
                    />
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
          <h2>Four ideas that unlock Ouirgane</h2>
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
            <p className="eyebrow">Valley mission</p>
            <h2>{progressLabel}</h2>
            <p>
              A light noticing game for the drive, lodge and walk. The goal is to see the working
              valley, not just take mountain photos.
            </p>
          </div>

          <div className="mission-checklist">
            {valleyMission.map((item) => (
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

      <section className="page-section today-media-section">
        <div className="section-heading">
          <p className="eyebrow">Watch before or after</p>
          <h2>Short video rabbit holes</h2>
          <p>
            These open YouTube searches rather than locking the page to one video that may disappear or
            be region-blocked on mobile data.
          </p>
        </div>
        <div className="video-grid">
          {videoLinks.map((video) => (
            <a className="video-card" href={video.url} target="_blank" rel="noreferrer" key={video.title}>
              <span aria-hidden="true">▶</span>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="page-section quiz-section">
        <div className="mission-card quiz-card">
          <div>
            <p className="eyebrow">Car quiz</p>
            <h2>Four questions for the road</h2>
            <p>Tap each question after everyone has guessed. No scores needed unless Sarah and Sonia insist.</p>
          </div>
          <div className="quiz-list">
            {quizQuestions.map((item) => {
              const isOpen = openAnswer === item.question
              return (
                <button
                  type="button"
                  className={`quiz-item ${isOpen ? 'quiz-item--open' : ''}`}
                  key={item.question}
                  onClick={() => setOpenAnswer(isOpen ? '' : item.question)}
                >
                  <strong>{item.question}</strong>
                  {isOpen && <span>{item.answer}</span>}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="page-section later-section">
        <article className="later-card">
          <div>
            <p className="eyebrow">Keep for later</p>
            <h2>Do not turn today into homework</h2>
            <p>
              Tinmel, deeper history and longer hikes can wait unless the lodge recommends a very easy option.
              Today should protect energy: transfer, lunch, swim/rest if available, short walk, sunset, dinner.
            </p>
          </div>
          <div className="later-card__stack">
            <span>Ask lodge about a gentle local walk</span>
            <span>Confirm tomorrow’s mountain plan</span>
            <span>Keep Bahia Palace for Marrakesh return</span>
            <span>Carry a light layer after sunset</span>
          </div>
        </article>
      </section>
    </>
  )
}

export default TodayPage
