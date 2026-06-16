import { useState } from 'react'
import type { Destination } from '../types/trip'

type DestinationCardProps = {
  destination: Destination
}

function DestinationCard({ destination }: DestinationCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className={`destination-card ${destination.theme}`}>
      <div className="destination-card__top">
        <div className="destination-symbol" aria-hidden="true">
          {destination.symbol}
        </div>

        <div className="destination-heading">
          <p className="eyebrow">{destination.region}</p>
          <h3>{destination.name}</h3>
          <p className="destination-meta">
            {destination.dates} · {destination.nights}{' '}
            {destination.nights === 1 ? 'night' : 'nights'}
          </p>
        </div>
      </div>

      <p className="destination-description">{destination.description}</p>

      <button
        className="text-button"
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((current) => !current)}
      >
        {expanded ? 'Show less' : 'Explore this stop'}
        <span aria-hidden="true">{expanded ? ' ↑' : ' ↓'}</span>
      </button>

      {expanded && (
        <div className="destination-details">
          <div>
            <p className="detail-label">Staying at</p>
            <p>{destination.accommodation}</p>
          </div>

          <div>
            <p className="detail-label">What awaits us</p>
            <ul>
              {destination.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  )
}

export default DestinationCard
