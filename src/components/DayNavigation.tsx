type DayNavigationProps = {
  canGoPrevious: boolean
  canGoNext: boolean
  onPrevious: () => void
  onNext: () => void
}

function DayNavigation({
  canGoPrevious,
  canGoNext,
  onPrevious,
  onNext,
}: DayNavigationProps) {
  return (
    <div className="day-navigation" aria-label="Day navigation">
      <button type="button" onClick={onPrevious} disabled={!canGoPrevious}>
        Previous day
      </button>
      <button type="button" onClick={onNext} disabled={!canGoNext}>
        Next day
      </button>
    </div>
  )
}

export default DayNavigation
