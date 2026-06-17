import type { MediaAsset } from '../types/media'

export const destinationMedia: MediaAsset[] = [
  {
    id: 'marrakesh-medina',
    title: 'Marrakesh medina',
    alt: 'A street scene inside the Marrakesh medina.',
    width: 1200,
    height: 800,
    sources: {},
    caption: 'Medina photography placeholder',
    placeholderNote:
      'Add a locally stored Marrakesh medina image here when final photography is selected.',
    sourceNotes: [
      {
        label: 'Runtime rule',
        note: 'Use only local files under src/assets or public; no remote runtime image URLs.',
      },
    ],
  },
  {
    id: 'bahia-palace-detail',
    title: 'Bahia Palace or architectural detail',
    alt: 'Moroccan architectural detail with carved plaster, wood or tilework.',
    width: 1200,
    height: 800,
    sources: {},
    caption: 'Architectural detail placeholder',
    placeholderNote:
      'Add a local Bahia Palace or Moroccan architectural detail image when available.',
    sourceNotes: [
      {
        label: 'Runtime rule',
        note: 'Keep the image local so it can be included in the PWA precache.',
      },
    ],
  },
  {
    id: 'high-atlas-ouirgane',
    title: 'High Atlas / Ouirgane landscape',
    alt: 'A High Atlas or Ouirgane landscape.',
    width: 1200,
    height: 800,
    sources: {},
    caption: 'Mountain landscape placeholder',
    placeholderNote:
      'Add local High Atlas or Ouirgane landscape photography before using this slot.',
    sourceNotes: [
      {
        label: 'Runtime rule',
        note: 'Prefer original trip photos or licensed local assets stored in the repo.',
      },
    ],
  },
  {
    id: 'agafay-rocky-desert',
    title: 'Agafay rocky desert',
    alt: 'The rocky desert landscape of Agafay near Marrakesh.',
    width: 1200,
    height: 800,
    sources: {},
    caption: 'Agafay landscape placeholder',
    placeholderNote:
      'Add locally stored Agafay rocky desert photography when final images are chosen.',
    sourceNotes: [
      {
        label: 'Runtime rule',
        note: 'Store the image locally and reference it through the image system.',
      },
    ],
  },
  {
    id: 'moroccan-food',
    title: 'Moroccan food',
    alt: 'A Moroccan meal with shared dishes.',
    width: 1200,
    height: 800,
    sources: {},
    caption: 'Food photography placeholder',
    placeholderNote:
      'Add a local image of Moroccan food once suitable photography is available.',
    sourceNotes: [
      {
        label: 'Runtime rule',
        note: 'Avoid remote food photography at runtime; local files will work offline.',
      },
    ],
  },
  {
    id: 'zellige-detail',
    title: 'Geometric zellige detail',
    alt: 'A geometric zellige tile detail.',
    width: 1200,
    height: 800,
    sources: {},
    caption: 'Zellige detail placeholder',
    placeholderNote:
      'Add a locally stored zellige tile detail image when final photography is selected.',
    sourceNotes: [
      {
        label: 'Runtime rule',
        note: 'Use local photography or a properly licensed local asset.',
      },
    ],
  },
]
