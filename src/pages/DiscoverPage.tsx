import { discoverTopics } from '../data/trip'

function DiscoverPage() {
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
        {discoverTopics.map((topic) => (
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

export default DiscoverPage
