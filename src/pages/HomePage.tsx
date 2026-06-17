type HomePageProps = {
  onExplore: () => void
}

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

function HomePage({ onExplore }: HomePageProps) {
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
            <button className="primary-button" type="button" onClick={onExplore}>
              Start the journey
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
