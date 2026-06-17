export type ArticleSection = {
  heading: string
  paragraphs: string[]
}

export type TriviaItem = {
  label: string
  text: string
}

export type KeyTerm = {
  term: string
  meaning: string
}

export type SourceNote = {
  label: string
  url: string
  note: string
}

export type DiscoverArticle = {
  id: string
  icon: string
  title: string
  deck: string
  summary: string
  readTimeMinutes: number
  sections: ArticleSection[]
  keyFacts: string[]
  keyTerms?: KeyTerm[]
  trivia?: TriviaItem[]
  noticePrompt: string
  misconception?: {
    myth: string
    reality: string
  }
  sourceNotes: SourceNote[]
}
