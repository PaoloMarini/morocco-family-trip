import type { DiscoverArticle } from '../types/discover'

type ArticleCardProps = {
  article: DiscoverArticle
  onSelect: (article: DiscoverArticle) => void
}

function ArticleCard({ article, onSelect }: ArticleCardProps) {
  return (
    <article className="article-card">
      <button type="button" onClick={() => onSelect(article)}>
        <span className="article-card__icon" aria-hidden="true">
          {article.icon}
        </span>
        <span className="article-card__body">
          <span className="article-card__meta">
            {article.readTimeMinutes} min read
          </span>
          <span className="article-card__title">{article.title}</span>
          <span className="article-card__deck">{article.deck}</span>
        </span>
      </button>
    </article>
  )
}

export default ArticleCard
