import { useState } from 'react'
import type { Destination } from '../types/trip'

type DestinationCardProps = {
  destination: Destination
}

function DestinationCard({ destination }: DestinationCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <article className={`destination-card ${destination.theme}`}>
      {destination.photoUrl && !photoFailed && (
        <figure className="destination-photo">
          <img
            src={destination.photoUrl}
            alt={destination.photoAlt ?? destination.name}
            loading="lazy"
            onError={() => setPhotoFailed(true)}
          />
          {destination.photoCredit && <figcaption>{destination.photoCredit}</figcaption>}
        </figure>
      )}

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
            <p className="detail-label">Base for this part</p>
            <p>{destination.accommodation}</p>
          </div>

          <div>
            <p className="detail-label">What to notice</p>
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
