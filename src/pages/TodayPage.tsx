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

type QuizQuestion = {
  question: string
  answer: string
}

const todayStops: Stop[] = [
  {
    time: '08:30',
    title: 'Final breakfast and room sweep',
    subtitle: 'Eat, check every corner and avoid creating a last-minute panic.',
    image: 'https://ouirganeguide.com/wp-content/uploads/2018/01/Slider111.jpg',
    alt: 'Moroccan mountain and valley landscape',
    context:
      'Departure day is not the day for new ambitions. The successful version is boring: breakfast, bags, chargers, passports, medicines, cables, souvenirs and one final room check before leaving Riad Salman.',
    notice: ['Passports', 'Chargers and adapters', 'Souvenirs and laundry bags'],
    challenge: 'Everyone names one favourite moment before the bags close.',
  },
  {
    time: '10:30',
    title: 'Check out of Riad Salman',
    subtitle: 'Settle any extras and keep airport documents easy to reach.',
    image: 'https://ouirganeguide.com/wp-content/uploads/2018/01/Slider33.jpg',
    alt: 'Road and mountain landscape in Morocco',
    context:
      'The trip moved through four bases: Riad Sultan Suleiman, Ouirgane Ecolodge, Agafay Pearl Camp and Riad Salman. Today closes the loop back to the airport, so luggage and timing matter more than another sight.',
    notice: ['Payment settled', 'Driver / transfer confirmed', 'Water for the airport wait'],
    challenge: 'Pick the one thing we would do differently if we planned Morocco again.',
  },
  {
    time: '12:00',
    title: 'Airport transfer buffer',
    subtitle: 'Leave Marrakesh with margin, not drama.',
    image: 'https://ouirganeguide.com/wp-content/uploads/2018/01/Slider55.jpg',
    alt: 'Moroccan landscape and road scenery',
    context:
      'Marrakesh traffic, luggage, check-in queues and airport formalities can all eat time. The right final-day decision is to be early and relaxed rather than clever and late.',
    notice: ['Traffic buffer', 'Boarding passes', 'Snacks before security if needed'],
    challenge: 'Choose the trip award winners: best view, best food, funniest moment, biggest relief.',
  },
  {
    time: 'Flight',
    title: 'Photos, music and decompression',
    subtitle: 'Use the flight home to turn the trip into memories rather than a blur.',
    image: 'https://ouirganeguide.com/wp-content/uploads/2018/01/Slider111.jpg',
    alt: 'Ouirgane valley and High Atlas view',
    context:
      'The flight is good for sorting photos, noting what actually happened and reading/listening rather than doom-scrolling. The Google Photos timestamp weirdness is a job for later, not the airport queue.',
    notice: ['Download music or guides', 'Favourite photos', 'Do not fight Google Photos today'],
    challenge: 'Each person chooses three photos that explain the trip.',
  },
]

const departureMission = [
  'Passport seen today',
  'Chargers packed',
  'Bathroom checked',
  'Under-bed check',
  'Souvenirs packed safely',
  'MAD / card / wallet checked',
  'Airport transfer confirmed',
  'One favourite memory shared',
]

const culturalCards = [
  {
    icon: '↝',
    title: 'The actual route',
    text:
      'Marrakesh first, then Ouirgane, Agafay, and back to Marrakesh. The journey worked because each landscape changed the rhythm: city, mountain, stone desert, city again.',
  },
  {
    icon: '◇',
    title: 'The big lesson',
    text:
      'The weakest plans were the ones that tried to add another monument. The strongest plans combined one good experience with shade, food, games, rest or something modern.',
  },
  {
    icon: '◌',
    title: 'Food arc',
    text:
      'First chicken tajine and couscous were not hits, but later beef tagine and Moroccan breakfast breads worked better. Context and tiredness mattered.',
  },
  {
    icon: '☀',
    title: 'Heat reality',
    text:
      'Marrakesh in June rewards early starts and punishes heroic afternoons. The site now treats rest as part of the itinerary, not a failure.',
  },
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'Which stop felt most different from Marrakesh?',
    answer: 'Ouirgane for mountain quiet, or Agafay for open stone-desert sky.',
  },
  {
    question: 'Which palace or museum day confirmed “empty room” fatigue?',
    answer: 'Bahia Palace and the broader Marrakesh monument run made it clear the family needed variety.',
  },
  {
    question: 'What was the Google Photos mystery?',
    answer: 'Camel ride photos appeared at the right time, while videos showed about one hour later.',
  },
  {
    question: 'What was the final-day planning principle?',
    answer: 'One good thing plus logistics. Do not add fragile plans on departure day.',
  },
]

function TodayPage() {
  const [checkedItems, setCheckedItems] = useState<string[]>([])
  const [openStop, setOpenStop] = useState(todayStops[0].title)
  const [openAnswer, setOpenAnswer] = useState('')

  const completedCount = checkedItems.length
  const progressLabel = useMemo(
    () => `${completedCount}/${departureMission.length} departure checks done`,
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
          <p className="hero__kicker">Thursday 25 June</p>
          <h1>Departure day</h1>
          <p className="today-hero__intro">
            The actual trip is now behind us: Marrakesh, Ouirgane, Agafay and back to Marrakesh.
            Today is about leaving well: no new sightseeing pressure, just packing, airport buffer,
            photos, music and a calmer flight home.
          </p>
          <div className="today-hero__pills" aria-label="Today summary">
            <span>Pack</span>
            <span>Check out</span>
            <span>Airport buffer</span>
            <span>Fly home</span>
          </div>
        </div>
        <div className="today-map-real" aria-label="Real map of Marrakesh airport area">
          <iframe
            title="Map of Marrakesh and the airport"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-8.091%2C31.555%2C-7.885%2C31.688&layer=mapnik&marker=31.606%2C-8.036"
            loading="lazy"
          />
          <div className="today-map-real__caption">
            <strong>Riad Salman → Marrakesh airport</strong>
            <a
              href="https://www.google.com/maps/dir/Riad+Salman,+Marrakesh/Marrakesh+Menara+Airport"
              target="_blank"
              rel="noreferrer"
            >
              Open route
            </a>
          </div>
        </div>
      </section>

      <section className="page-section today-dashboard">
        <div className="section-heading">
          <p className="eyebrow">Today’s plan</p>
          <h2>Leave without drama</h2>
          <p>
            This page is now a departure checklist and post-trip reflection, not another sightseeing plan.
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
          <p className="eyebrow">What the trip taught us</p>
          <h2>Four corrections to the original plan</h2>
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
            <p className="eyebrow">Departure checklist</p>
            <h2>{progressLabel}</h2>
            <p>Useful, boring and exactly what today needs.</p>
          </div>

          <div className="mission-checklist">
            {departureMission.map((item) => (
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

      <section className="page-section quiz-section">
        <div className="mission-card quiz-card">
          <div>
            <p className="eyebrow">Flight quiz</p>
            <h2>Four questions to close the loop</h2>
            <p>Tap after everyone has guessed.</p>
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
    </>
  )
}

export default TodayPage
