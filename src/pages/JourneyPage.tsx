import DestinationCard from '../components/DestinationCard'
import { destinations } from '../data/trip'

function JourneyPage() {
  return (
    <section className="page-section page-section--top">
      <div className="section-heading">
        <p className="eyebrow">Nine days in Morocco</p>
        <h1 className="page-title">Our journey</h1>
        <p>
          Open each stop for an introduction to where we are staying and what
          makes it different.
        </p>
      </div>

      <div className="timeline">
        {destinations.map((destination, index) => (
          <div className="timeline-item" key={destination.id}>
            <div className="timeline-marker">
              <span>{index + 1}</span>
            </div>
            <DestinationCard destination={destination} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default JourneyPage
