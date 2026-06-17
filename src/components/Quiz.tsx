import { useMemo, useState } from 'react'
import type { QuizData } from '../types/quiz'
import QuizQuestion from './QuizQuestion'
import QuizResult from './QuizResult'

type QuizProps = {
  quiz: QuizData
}

function getBestScore(storageKey: string) {
  const stored = window.localStorage.getItem(storageKey)
  const parsed = stored ? Number.parseInt(stored, 10) : 0

  return Number.isNaN(parsed) ? 0 : parsed
}

function Quiz({ quiz }: QuizProps) {
  const storageKey = `morocco-trip:${quiz.id}:best-score`
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(() => getBestScore(storageKey))
  const [isComplete, setIsComplete] = useState(false)
  const currentQuestion = quiz.questions[currentIndex]
  const isCorrect = selectedOptionId === currentQuestion.correctOptionId
  const progressLabel = `Question ${currentIndex + 1} of ${quiz.questions.length}`

  const selectedExplanation = useMemo(() => {
    if (!selectedOptionId) {
      return null
    }

    return currentQuestion.explanation
  }, [currentQuestion.explanation, selectedOptionId])

  const handleSelect = (optionId: string) => {
    setSelectedOptionId(optionId)

    if (optionId === currentQuestion.correctOptionId) {
      setScore((current) => current + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex === quiz.questions.length - 1) {
      const nextBestScore = Math.max(bestScore, score)

      setBestScore(nextBestScore)
      window.localStorage.setItem(storageKey, String(nextBestScore))
      setIsComplete(true)
      return
    }

    setCurrentIndex((current) => current + 1)
    setSelectedOptionId(null)
  }

  const handleReplay = () => {
    setCurrentIndex(0)
    setSelectedOptionId(null)
    setScore(0)
    setIsComplete(false)
  }

  if (isComplete) {
    return (
      <QuizResult
        bestScore={Math.max(bestScore, score)}
        score={score}
        total={quiz.questions.length}
        onReplay={handleReplay}
      />
    )
  }

  return (
    <section className="quiz" aria-labelledby={`${quiz.id}-title`}>
      <div className="quiz__header">
        <p className="detail-label">{progressLabel}</p>
        <h2 id={`${quiz.id}-title`}>{quiz.title}</h2>
        <p>{quiz.description}</p>
      </div>

      <QuizQuestion
        question={currentQuestion}
        selectedOptionId={selectedOptionId}
        onSelect={handleSelect}
      />

      {selectedExplanation && (
        <div
          className={`quiz-feedback ${
            isCorrect ? 'quiz-feedback--correct' : 'quiz-feedback--incorrect'
          }`}
          role="status"
        >
          <strong>{isCorrect ? 'Correct' : 'Not quite'}</strong>
          <p>{selectedExplanation}</p>
        </div>
      )}

      <button
        className="primary-button quiz__next"
        disabled={!selectedOptionId}
        type="button"
        onClick={handleNext}
      >
        {currentIndex === quiz.questions.length - 1 ? 'See score' : 'Next'}
      </button>
    </section>
  )
}

export default Quiz
