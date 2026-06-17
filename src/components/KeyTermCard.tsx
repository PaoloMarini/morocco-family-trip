import type { KeyTerm } from '../types/discover'

type KeyTermCardProps = {
  term: KeyTerm
}

function KeyTermCard({ term }: KeyTermCardProps) {
  return (
    <article className="key-term-card">
      <h3>{term.term}</h3>
      <p>{term.meaning}</p>
    </article>
  )
}

export default KeyTermCard
