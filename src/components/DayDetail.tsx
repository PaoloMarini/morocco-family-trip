import type { DayPeriod, TripDay } from '../types/trip'
import ActivityItem from './ActivityItem'
import DayNavigation from './DayNavigation'

type DayDetailProps = {
  day: TripDay
  isToday: boolean
  canGoPrevious: boolean
  canGoNext: boolean
  onPrevious: () => void
  onNext: () => void
}

const periodLabels: Record<DayPeriod, string> = {
  morning: 'Morning',
  afternoon: 'Afternoon',
  evening: 'Evening',
}

const periods: DayPeriod[] = ['morning', 'afternoon', 'evening']

function DayDetail({
  day,
  isToday,
  canGoPrevious,
  canGoNext,
  onPrevious,
  onNext,
}: DayDetailProps) {
  return (
    <article className="day-detail">
      <div className="day-detail__header">
        <div>
          <p className="eyebrow">
            Day {day.dayNumber} · {day.displayDate}
          </p>
          <h2>{day.title}</h2>
          <p>{day.introduction}</p>
        </div>
        {isToday && <span className="today-pill">Today</span>}
      </div>

      <div className="day-detail__meta">
        <div>
          <span>Place</span>
          <strong>{day.location}</strong>
        </div>
        <div>
          <span>Base</span>
          <strong>{day.accommodation}</strong>
        </div>
        {day.transfer && (
          <div>
            <span>Moving today</span>
            <strong>{day.transfer}</strong>
          </div>
        )}
      </div>

      <div className="day-periods">
        {periods.map((period) => (
          <section className="day-period" key={period}>
            <h3>{periodLabels[period]}</h3>
            {day.activities[period].length > 0 ? (
              <ul>
                {day.activities[period].map((activity) => (
                  <ActivityItem activity={activity} key={activity.id} />
                ))}
              </ul>
            ) : (
              <p className="empty-period">Keep this part of the day open.</p>
            )}
          </section>
        ))}
      </div>

      {day.practicalNotes.length > 0 && (
        <section className="practical-notes">
          <h3>Look after yourselves</h3>
          <ul>
            {day.practicalNotes.map((note) => (
              <li key={note.id}>{note.text}</li>
            ))}
          </ul>
        </section>
      )}

      {day.alternatives && day.alternatives.length > 0 && (
        <section className="day-alternatives">
          <h3>Other ideas</h3>
          <ul>
            {day.alternatives.map((activity) => (
              <ActivityItem activity={activity} key={activity.id} />
            ))}
          </ul>
        </section>
      )}

      <DayNavigation
        canGoPrevious={canGoPrevious}
        canGoNext={canGoNext}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </article>
  )
}

export default DayDetail
