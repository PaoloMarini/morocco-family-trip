export type QuizOption = {
  id: string
  text: string
}

export type QuizQuestion = {
  id: string
  prompt: string
  options: QuizOption[]
  correctOptionId: string
  explanation: string
}

export type QuizData = {
  id: string
  title: string
  description: string
  questions: QuizQuestion[]
}
