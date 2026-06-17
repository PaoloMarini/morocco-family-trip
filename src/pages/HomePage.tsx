type HomePageProps = {
  onExplore: () => void
}

const highlights = [
  {
    label: 'Today-first',
    title: 'Daily plan in your pocket',
    text: 'Open the Journey tab each morning for the selected day, practical notes and next-step navigation.',
  },
  {
    label: 'Cash-aware',
    title: 'Practical reminders',
    text: 'Keep transfers, rest breaks, water, sun protection and price checks visible while moving around.',
  },
  {
    label: 'Offline-friendly',
    title: 'Built for the trip',
    text: 'The app remains light, readable on mobile and installable as a simple iPhone home-screen companion.',
  },
]

function HomePage({ onExplore }: HomePageProps) {
  return (
    <>
      <section className="hero hero--polished">
        <div className="hero__content">
          <p className="hero__kicker">Our family adventure</p>
          <h1>Morocco</h1>
          <p className="hero__dates">17–25 June 2026</p>

          <p className="hero__intro">
            Three travellers, four stays and nine days between the medina,
            mountains and desert.
          </p>

          <div className="hero__actions">
            <button className="primary-button" type="button" onClick={onExplore}>
              Open today’s plan
            </button>
            <span className="hero__hint">Marrakesh → Ouirgane → Agafay</span>
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

      <section className="page-section page-section--home-tools">
        <div className="section-heading">
          <p className="eyebrow">Use this during the stay</p>
          <h2>Quick checks before leaving the riad</h2>
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
