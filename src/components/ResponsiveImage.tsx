import { useState } from 'react'
import type { ImageFit } from '../types/media'

type ResponsiveImageProps = {
  src?: string
  webpSrc?: string
  avifSrc?: string
  alt: string
  width: number
  height: number
  loading?: 'eager' | 'lazy'
  fit?: ImageFit
  caption?: string
  className?: string
}

function toAssetUrl(path: string) {
  if (/^https?:\/\//i.test(path)) {
    return ''
  }

  if (path.startsWith('data:') || path.startsWith('blob:')) {
    return path
  }

  if (path.startsWith('/')) {
    return `${import.meta.env.BASE_URL}${path.slice(1)}`
  }

  return path
}

function ResponsiveImage({
  src,
  webpSrc,
  avifSrc,
  alt,
  width,
  height,
  loading = 'lazy',
  fit = 'cover',
  caption,
  className = '',
}: ResponsiveImageProps) {
  const [hasError, setHasError] = useState(false)
  const resolvedSrc = src ? toAssetUrl(src) : ''

  if (!resolvedSrc || hasError) {
    return (
      <figure
        className={`responsive-image responsive-image--fallback ${className}`}
      >
        <div
          className="responsive-image__fallback"
          style={{ aspectRatio: `${width} / ${height}` }}
          role="img"
          aria-label={alt}
        >
          <span>Image coming soon</span>
        </div>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    )
  }

  return (
    <figure className={`responsive-image ${className}`}>
      <picture>
        {avifSrc && <source srcSet={toAssetUrl(avifSrc)} type="image/avif" />}
        {webpSrc && <source srcSet={toAssetUrl(webpSrc)} type="image/webp" />}
        <img
          src={resolvedSrc}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding={loading === 'eager' ? 'sync' : 'async'}
          className={`responsive-image__img responsive-image__img--${fit}`}
          onError={() => setHasError(true)}
        />
      </picture>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default ResponsiveImage
