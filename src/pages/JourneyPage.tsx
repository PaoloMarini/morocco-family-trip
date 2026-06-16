import { useEffect, useState } from 'react'
import DayCard from '../components/DayCard'
import DayDetail from '../components/DayDetail'
import DestinationCard from '../components/DestinationCard'
import { tripDays } from '../data/itinerary'
import { destinations } from '../data/trip'

const storageKey = 'morocco-trip-selected-day'

function getLocalDateString(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function getTodayDayId() {
  const today = getLocalDateString(new Date())
  return tripDays.find((day) => day.date === today)?.id
}

function getStoredDayId() {
  try {
    const storedDayId = window.localStorage.getItem(storageKey)

    if (storedDayId && tripDays.some((day) => day.id === storedDayId)) {
      return storedDayId
    }
  } catch {
    return undefined
  }

  return undefined
}

function getInitialDayId() {
  return getStoredDayId() ?? getTodayDayId() ?? tripDays[0].id
}

function JourneyPage() {
  const [selectedDayId, setSelectedDayId] = useState(getInitialDayId)
  const selectedDayIndex = tripDays.findIndex((day) => day.id === selectedDayId)
  const safeSelectedIndex = selectedDayIndex >= 0 ? selectedDayIndex : 0
  const selectedDay = tripDays[safeSelectedIndex]
  const todayDayId = getTodayDayId()
  const todayDay = tripDays.find((day) => day.id === todayDayId)

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, selectedDay.id)
    } catch {
      // Ignore storage failures; the itinerary remains fully usable.
    }
  }, [selectedDay.id])

  const goToPreviousDay = () => {
    const previousDay = tripDays[safeSelectedIndex - 1]

    if (previousDay) {
      setSelectedDayId(previousDay.id)
    }
  }

  const goToNextDay = () => {
    const nextDay = tripDays[safeSelectedIndex + 1]

    if (nextDay) {
      setSelectedDayId(nextDay.id)
    }
  }

  return (
    <>
      <section className="page-section page-section--top">
        <div className="section-heading">
          <p className="eyebrow">Nine days in Morocco</p>
          <h1 className="page-title">Daily itinerary</h1>
          <p>
            A day-by-day companion with confirmed plans separated from suggested
            ideas, flexible choices and practical notes.
          </p>
        </div>

        {todayDay && (
          <aside className="today-banner" aria-label="Today in the itinerary">
            <span>Today</span>
            <strong>
              Day {todayDay.dayNumber}: {todayDay.title}
            </strong>
          </aside>
        )}

        <div className="day-card-grid" aria-label="Trip days">
          {tripDays.map((day) => (
            <DayCard
              day={day}
              isActive={day.id === selectedDay.id}
              isToday={day.id === todayDayId}
              key={day.id}
              onSelect={() => setSelectedDayId(day.id)}
            />
          ))}
        </div>

        <DayDetail
          day={selectedDay}
          isToday={selectedDay.id === todayDayId}
          canGoPrevious={safeSelectedIndex > 0}
          canGoNext={safeSelectedIndex < tripDays.length - 1}
          onPrevious={goToPreviousDay}
          onNext={goToNextDay}
        />
      </section>

      <section className="page-section page-section--stays">
        <div className="section-heading">
          <p className="eyebrow">Our four stays</p>
          <h2>Where we sleep along the route</h2>
          <p>
            The accommodation stops are still here as a quick reference beneath
            the daily plan.
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
    </>
  )
}

export default JourneyPage
