import type { ActivityStatus, TripDay } from '../types/trip'
import StatusBadge from './StatusBadge'

type DayCardProps = {
  day: TripDay
  isActive: boolean
  isToday: boolean
  onSelect: () => void
}

const statusOrder: ActivityStatus[] = ['confirmed', 'suggested', 'flexible']

function getStatuses(day: TripDay) {
  const statuses = new Set<ActivityStatus>()

  Object.values(day.activities).forEach((activities) => {
    activities.forEach((activity) => statuses.add(activity.status))
  })

  day.alternatives?.forEach((activity) => statuses.add(activity.status))

  return statusOrder.filter((status) => statuses.has(status))
}

function DayCard({ day, isActive, isToday, onSelect }: DayCardProps) {
  const previewActivities = [
    ...day.activities.morning,
    ...day.activities.afternoon,
    ...day.activities.evening,
  ].slice(0, 3)

  return (
    <button
      className={`day-card${isActive ? ' day-card--active' : ''}`}
      type="button"
      aria-pressed={isActive}
      onClick={onSelect}
    >
      <span className="day-card__number">Day {day.dayNumber}</span>
      <div className="day-card__body">
        <div className="day-card__heading">
          <span>{day.displayDate}</span>
          {isToday && <strong>Today</strong>}
        </div>
        <h2>{day.title}</h2>
        <p className="day-card__location">{day.location}</p>
        <p className="day-card__stay">{day.accommodation}</p>
        <p className="day-card__preview">
          {previewActivities.map((activity) => activity.title).join(' · ')}
        </p>
        <div className="day-card__statuses">
          {getStatuses(day).map((status) => (
            <StatusBadge key={status} status={status} />
          ))}
        </div>
      </div>
    </button>
  )
}

export default DayCard
