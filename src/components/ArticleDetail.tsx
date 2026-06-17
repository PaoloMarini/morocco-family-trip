import type { DiscoverArticle } from '../types/discover'
import BackButton from './BackButton'
import KeyTermCard from './KeyTermCard'
import TriviaCallout from './TriviaCallout'

type ArticleDetailProps = {
  article: DiscoverArticle
  onBack: () => void
}

function ArticleDetail({ article, onBack }: ArticleDetailProps) {
  return (
    <article className="article-detail">
      <BackButton label="Discover" onClick={onBack} />

      <header className="article-detail__header">
        <span className="article-detail__icon" aria-hidden="true">
          {article.icon}
        </span>
        <p className="eyebrow">{article.readTimeMinutes} min read</p>
        <h1 className="page-title">{article.title}</h1>
        <p>{article.summary}</p>
      </header>

      <section className="article-facts" aria-labelledby="key-facts-heading">
        <h2 id="key-facts-heading">Key facts</h2>
        <ul>
          {article.keyFacts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </section>

      {article.sections.map((section) => (
        <section className="article-section" key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}

      {article.keyTerms && (
        <section className="key-term-grid" aria-label="Key terms">
          {article.keyTerms.map((term) => (
            <KeyTermCard key={term.term} term={term} />
          ))}
        </section>
      )}

      {article.trivia?.map((item) => (
        <TriviaCallout key={item.label} item={item} />
      ))}

      {article.misconception && (
        <aside className="myth-card">
          <p className="detail-label">Myth to retire</p>
          <h2>{article.misconception.myth}</h2>
          <p>{article.misconception.reality}</p>
        </aside>
      )}

      <aside className="notice-prompt">
        <p className="detail-label">Notice this during the trip</p>
        <p>{article.noticePrompt}</p>
      </aside>
    </article>
  )
}

export default ArticleDetail
