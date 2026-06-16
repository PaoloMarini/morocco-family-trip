import { playActivities } from '../data/trip'

function PlayPage() {
  return (
    <section className="page-section page-section--top">
      <div className="section-heading">
        <p className="eyebrow">Small games for the road</p>
        <h1 className="page-title">Play</h1>
        <p>
          Challenges for the flight, quiet moments and wandering days. The games
          are placeholders for now.
        </p>
      </div>

      <div className="topic-grid">
        {playActivities.map((activity) => (
          <article className="topic-card" key={activity.title}>
            <span className="topic-card__icon" aria-hidden="true">
              {activity.icon}
            </span>
            <h2>{activity.title}</h2>
            <p>{activity.description}</p>
            <span className="coming-soon">Game coming next</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PlayPage
