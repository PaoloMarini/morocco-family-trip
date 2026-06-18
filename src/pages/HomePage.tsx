type HomePageProps = {
  onExplore: () => void
  onToday: () => void
}

const basePath = import.meta.env.BASE_URL

const highlights = [
  {
    label: 'Red city',
    title: 'Marrakesh is a maze with secrets',
    text: 'The best bits are often hidden behind plain walls: courtyards, tiles, fountains and carved wooden doors.',
  },
  {
    label: 'Atlas valley',
    title: 'Ouirgane slows everything down',
    text: 'After the medina, the trip changes pace: red earth, olive trees, mountain air and Amazigh villages.',
  },
  {
    label: 'Stone desert',
    title: 'Agafay is not the Sahara',
    text: 'It is a rocky desert near Marrakesh, dramatic because of the open horizon, sunset light and night sky.',
  },
]

const visualPreview = [
  {
    title: 'Medina details',
    text: 'Courtyards, tiles, carved wood and palace geometry.',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Bahia%20Palace%202018%201.jpg?width=900',
    fallbackUrl: `${basePath}trip-images/medina.svg`,
  },
  {
    title: 'Atlas foothills',
    text: 'Red earth, olive trees, village paths and mountain light.',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/SE%20Ouirgane%20Village%20Dam%20Al%20Haouz%20Oct25%20A7CR%2008497.jpg?width=900',
    fallbackUrl: `${basePath}trip-images/atlas.svg`,
  },
  {
    title: 'Desert sunset',
    text: 'Wide horizons, warm sand colours and a much bigger sky.',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Dunes%20de%20Merzouga.jpg?width=900',
    fallbackUrl: `${basePath}trip-images/agafay.svg`,
  },
]

function HomePage({ onExplore, onToday }: HomePageProps) {
  return (
    <>
      <section className="hero hero--polished">
        <div className="hero__content">
          <p className="hero__kicker">Our family adventure</p>
          <h1>Morocco</h1>
          <p className="hero__dates">17-25 June 2026</p>

          <p className="hero__intro">
            A short visual guide for the trip: what we are doing, what to look
            for, and the stories behind the places we will see.
          </p>

          <div className="hero__actions">
            <button className="primary-button" type="button" onClick={onToday}>
              Open today&apos;s adventure
            </button>
            <button className="secondary-button" type="button" onClick={onExplore}>
              Whole journey
            </button>
            <span className="hero__hint">Marrakesh - Ouirgane - Agafay</span>
          </div>
        </div>

        <div className="hero__landscape" aria-hidden="true">
          <span className="sun" />
          <span className="mountain mountain--back" />
          <span className="mountain mountain--front" />
          <span className="dune dune--one" />
          <span className="dune dune--two" />
        </div>
      </section>

      <section className="page-section today-teaser">
        <article className="today-teaser__card">
          <div>
            <p className="eyebrow">Today in Marrakech</p>
            <h2>Breakfast, Koutoubia, souk mission, Ben Youssef, Le Jardin</h2>
            <p>
              A light first full morning with cultural context built in — and
              Bahia Palace saved for the return to Marrakech, when it can be a
              calmer royal-palaces day.
            </p>
          </div>
          <button className="primary-button" type="button" onClick={onToday}>
            Start today
          </button>
        </article>
      </section>

      <section className="page-section route-summary route-summary--compact">
        <div className="section-heading">
          <p className="eyebrow">The route</p>
          <h2>City, mountains, desert, then back to Marrakesh</h2>
        </div>

        <div className="route-line" aria-label="Trip route">
          <div>
            <strong>Marrakesh</strong>
            <span>17 June</span>
          </div>
          <span className="route-arrow">-</span>
          <div>
            <strong>Ouirgane</strong>
            <span>19 June</span>
          </div>
          <span className="route-arrow">-</span>
          <div>
            <strong>Agafay</strong>
            <span>21 June</span>
          </div>
          <span className="route-arrow">-</span>
          <div>
            <strong>Marrakesh</strong>
            <span>22 June</span>
          </div>
        </div>
      </section>

      <section className="page-section page-section--home-tools">
        <div className="section-heading">
          <p className="eyebrow">Visual clues</p>
          <h2>What should we look for?</h2>
        </div>

        <div className="visual-preview-grid">
          {visualPreview.map((item) => (
            <article className="visual-preview" key={item.title}>
              <img
                src={item.imageUrl}
                alt=""
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src = item.fallbackUrl
                }}
              />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-section--home-tools">
        <div className="section-heading">
          <p className="eyebrow">Three worlds in one trip</p>
          <h2>What makes each stop different?</h2>
        </div>

        <div className="home-highlight-grid">
          {highlights.map((item) => (
            <article className="home-highlight" key={item.title}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
