import Quiz from '../components/Quiz'
import { moroccoBeforeLandingQuiz } from '../data/quizzes/moroccoBeforeLanding'
import { playActivities } from '../data/trip'

function PlayPage() {
  const remainingActivities = playActivities.slice(1)

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

      <Quiz quiz={moroccoBeforeLandingQuiz} />

      <div className="topic-grid">
        {remainingActivities.map((activity) => (
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
