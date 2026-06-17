import type { TriviaItem } from '../types/discover'

type TriviaCalloutProps = {
  item: TriviaItem
}

function TriviaCallout({ item }: TriviaCalloutProps) {
  return (
    <aside className="trivia-callout">
      <p className="detail-label">{item.label}</p>
      <p>{item.text}</p>
    </aside>
  )
}

export default TriviaCallout
