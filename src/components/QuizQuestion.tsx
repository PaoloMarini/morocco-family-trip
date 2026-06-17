import type { QuizQuestion as QuizQuestionType } from '../types/quiz'

type QuizQuestionProps = {
  question: QuizQuestionType
  selectedOptionId: string | null
  onSelect: (optionId: string) => void
}

function QuizQuestion({
  question,
  selectedOptionId,
  onSelect,
}: QuizQuestionProps) {
  return (
    <fieldset className="quiz-question">
      <legend>{question.prompt}</legend>

      <div className="quiz-options">
        {question.options.map((option) => {
          const isSelected = selectedOptionId === option.id
          const isCorrect = question.correctOptionId === option.id
          const stateClass = selectedOptionId
            ? isCorrect
              ? 'quiz-option--correct'
              : isSelected
                ? 'quiz-option--incorrect'
                : 'quiz-option--muted'
            : ''

          return (
            <button
              className={`quiz-option ${stateClass}`}
              disabled={selectedOptionId !== null}
              key={option.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelect(option.id)}
            >
              <span>{option.text}</span>
              {selectedOptionId && isCorrect && (
                <strong aria-label="Correct answer">✓</strong>
              )}
              {selectedOptionId && isSelected && !isCorrect && (
                <strong aria-label="Selected incorrect answer">×</strong>
              )}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

export default QuizQuestion
