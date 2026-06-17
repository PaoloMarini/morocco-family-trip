import { useEffect, useState } from 'react'
import ArticleCard from '../components/ArticleCard'
import ArticleDetail from '../components/ArticleDetail'
import { discoverArticles } from '../data/discover'
import type { DiscoverArticle } from '../types/discover'

type DiscoverHistoryState = {
  moroccoDiscoverArticle?: string
}

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function DiscoverPage() {
  const [selectedArticle, setSelectedArticle] = useState<DiscoverArticle | null>(
    null,
  )

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state as DiscoverHistoryState | null
      const article = discoverArticles.find(
        (item) => item.id === state?.moroccoDiscoverArticle,
      )

      setSelectedArticle(article ?? null)
    }

    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const handleSelectArticle = (article: DiscoverArticle) => {
    window.history.pushState(
      { moroccoDiscoverArticle: article.id } satisfies DiscoverHistoryState,
      '',
    )
    setSelectedArticle(article)
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'instant' : 'smooth',
    })
  }

  const handleBack = () => {
    const state = window.history.state as DiscoverHistoryState | null

    if (state?.moroccoDiscoverArticle) {
      window.history.back()
      return
    }

    setSelectedArticle(null)
  }

  if (selectedArticle) {
    return (
      <section className="page-section page-section--top">
        <ArticleDetail
          article={selectedArticle}
          onBack={handleBack}
        />
      </section>
    )
  }

  return (
    <section className="page-section page-section--top">
      <div className="section-heading">
        <p className="eyebrow">Look beyond the photographs</p>
        <h1 className="page-title">Discover Morocco</h1>
        <p>
          Short stories and explainers to read on the flight and revisit during
          the trip.
        </p>
      </div>

      <div className="article-card-grid">
        {discoverArticles.map((article) => (
          <ArticleCard
            article={article}
            key={article.id}
            onSelect={handleSelectArticle}
          />
        ))}
      </div>
    </section>
  )
}

export default DiscoverPage
