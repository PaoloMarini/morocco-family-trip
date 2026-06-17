export type ImageFit = 'cover' | 'contain'

export type LocalImageSource = {
  avif?: string
  webp?: string
  src?: string
}

export type MediaSourceNote = {
  label: string
  note: string
}

export type MediaAsset = {
  id: string
  title: string
  alt: string
  width: number
  height: number
  sources: LocalImageSource
  caption?: string
  placeholderNote: string
  sourceNotes: MediaSourceNote[]
}
