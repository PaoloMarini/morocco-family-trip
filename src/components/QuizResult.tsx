type QuizResultProps = {
  score: number
  total: number
  bestScore: number
  onReplay: () => void
}

function QuizResult({ score, total, bestScore, onReplay }: QuizResultProps) {
  return (
    <section className="quiz-result" aria-live="polite">
      <p className="detail-label">Final score</p>
      <h2>
        {score} / {total}
      </h2>
      <p>Best score on this device: {bestScore} / {total}</p>
      <button className="primary-button" type="button" onClick={onReplay}>
        Play again
      </button>
    </section>
  )
}

export default QuizResult
