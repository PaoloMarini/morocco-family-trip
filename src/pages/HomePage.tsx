type HomePageProps = {
  onExplore: () => void
}

function HomePage({ onExplore }: HomePageProps) {
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

export default HomePage
