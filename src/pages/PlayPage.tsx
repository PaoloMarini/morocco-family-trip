import Quiz from '../components/Quiz'
import { moroccoBeforeLandingQuiz } from '../data/quizzes/moroccoBeforeLanding'

const scavengerItems = [
  'A cat sleeping somewhere impossible',
  'A blue, green or yellow door',
  'A repeating tile pattern',
  'A rooftop view',
  'Mint tea being poured from high up',
  'Olive trees or terraced fields',
  'A camel silhouette or shadow',
  'The best sunset colour',
]

const votes = [
  'Best door',
  'Best meal',
  'Best view',
  'Best tile pattern',
  'Best cat',
  'Most surprising moment',
]

function PlayPage() {
  return (
    <section className="page-section page-section--top">
      <div className="section-heading">
        <p className="eyebrow">Small games for the road</p>
        <h1 className="page-title">Play</h1>
        <p>
          Challenges for the flight, quiet moments and wandering days. Use them
          as excuses to look more closely.
        </p>
      </div>

      <Quiz quiz={moroccoBeforeLandingQuiz} />

      <section className="install-card" aria-labelledby="scavenger-title">
        <div>
          <p className="detail-label">Photo scavenger hunt</p>
          <h2 id="scavenger-title">Try to collect these</h2>
        </div>
        <ol>
          {scavengerItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="install-card" aria-labelledby="vote-title">
        <div>
          <p className="detail-label">End-of-day awards</p>
          <h2 id="vote-title">Family vote categories</h2>
        </div>
        <div className="topic-grid">
          {votes.map((vote) => (
            <article className="topic-card" key={vote}>
              <span className="topic-card__icon" aria-hidden="true">
                *
              </span>
              <h2>{vote}</h2>
              <p>Nominate one photo, place or moment from today.</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default PlayPage
