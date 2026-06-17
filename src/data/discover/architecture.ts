import type { DiscoverArticle } from '../../types/discover'

export const architectureArticle: DiscoverArticle = {
  id: 'architecture',
  icon: '✦',
  title: 'Architecture',
  deck: 'Courtyards, craft and privacy',
  summary:
    'Moroccan architecture often rewards patient looking: plain outer walls can hide courtyards, gardens, tilework, plaster and carved wood. The style reflects Amazigh, Islamic, Andalusian, African and later European currents rather than one single source.',
  readTimeMinutes: 4,
  sections: [
    {
      heading: 'Inward-facing houses',
      paragraphs: [
        'A riad is traditionally organised around an interior garden or courtyard. A dar is also a traditional house, usually focused around a courtyard, though the words are used flexibly in tourism today.',
        'The inward-facing plan helps with privacy, shade and calm. From the street, a building may look simple; inside, it may open into light, water, plants and ornament.',
      ],
    },
    {
      heading: 'Surfaces made by hand',
      paragraphs: [
        'Zellige is mosaic tilework made from small shaped pieces, often arranged in geometric patterns. Tadelakt is a polished plaster finish associated with Moroccan interiors, especially bathrooms and hammams.',
        'Carved plaster, painted or carved cedar, vegetal motifs and geometry are often used together. These forms connect to Islamic visual traditions, local craft knowledge and historical exchange with al-Andalus.',
      ],
    },
    {
      heading: 'How to look without rushing',
      paragraphs: [
        'Look for repetition, symmetry, borders and small imperfections that show human making. Patterns often organise a surface without needing a single central image.',
        'The best details are sometimes low or high: a threshold, ceiling, door knocker, fountain edge or band of tile just below eye level.',
      ],
    },
    {
      heading: 'Mosques and access',
      paragraphs: [
        'Mosques are central to daily religious life. In Morocco, non-Muslim visitors generally cannot enter most active mosques, with a few famous exceptions elsewhere in the country.',
        'That does not mean mosques are invisible. Minarets, calls to prayer, neighbourhood rhythms and surrounding streets can still help us understand how religious architecture shapes the city.',
      ],
    },
  ],
  keyFacts: [
    'Riads and dars are typically organised around interior space rather than street-facing display.',
    'Zellige uses small pieces of tile assembled into geometric patterns.',
    'Tadelakt is a polished plaster finish associated with Moroccan interiors.',
    'Carved plaster and cedar are important decorative materials.',
    'Most active mosques in Morocco are not open to non-Muslim visitors.',
  ],
  keyTerms: [
    {
      term: 'Riad',
      meaning: 'A traditional house or palace form focused on an interior garden or courtyard.',
    },
    {
      term: 'Zellige',
      meaning: 'Geometric mosaic tilework made from cut tile pieces.',
    },
    {
      term: 'Tadelakt',
      meaning: 'A smooth polished plaster finish used on walls and wet areas.',
    },
  ],
  noticePrompt:
    'At Bahia Palace or in a riad, notice how sound, shade and privacy are designed as carefully as decoration.',
  misconception: {
    myth: 'Moroccan architecture is only decorative surface.',
    reality:
      'The decoration matters, but so do climate, privacy, materials, craft labour and the movement from street to courtyard.',
  },
  sourceNotes: [
    {
      label: 'UNESCO',
      url: 'https://whc.unesco.org/en/list/331/',
      note: 'Marrakesh heritage and architectural context.',
    },
    {
      label: 'Islamic architecture references',
      url: 'https://www.britannica.com/art/Islamic-architecture',
      note: 'Background for Islamic decorative traditions and architectural context.',
    },
  ],
}
