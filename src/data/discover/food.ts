import type { DiscoverArticle } from '../../types/discover'

export const foodArticle: DiscoverArticle = {
  id: 'food',
  icon: '◌',
  title: 'Food',
  deck: 'Shared dishes and household variation',
  summary:
    'Moroccan food is shaped by region, household, season and occasion. Tagine, couscous, bread, mint tea, harira and pastilla are useful entry points, but every family and cook has their own way.',
  readTimeMinutes: 4,
  sections: [
    {
      heading: 'Tagine is a pot and a dish',
      paragraphs: [
        'A tagine is the conical clay vessel and also the slow-cooked dish made inside it. The shape helps return steam to the food, which is useful for tender meat, vegetables and sauces.',
        'You may see chicken with preserved lemon and olives, lamb with prunes, vegetable tagines or versions adapted for restaurants. The idea is not one fixed recipe but a cooking method with many expressions.',
      ],
    },
    {
      heading: 'Couscous, bread and sharing',
      paragraphs: [
        'Couscous is a staple dish often associated with family meals, especially Fridays, though habits vary. It is made from steamed grains of semolina and served with vegetables, meat or broth depending on the version.',
        'Bread matters at almost every meal. It can be used to scoop food, share dishes and make a table feel complete.',
      ],
    },
    {
      heading: 'Tea and hospitality',
      paragraphs: [
        'Mint tea is more than a drink; it is tied to welcome, conversation and taking time. The sweetness, strength and pouring style vary by person and place.',
        'Hospitality can feel generous, but it is not a performance for visitors. A polite thank you and a willingness to slow down go a long way.',
      ],
    },
    {
      heading: 'Soups, pastry and variation',
      paragraphs: [
        'Harira is a soup often associated with Ramadan evenings, though it is eaten at other times too. Pastilla is a sweet-savoury pastry, traditionally made with pigeon or chicken and now found in many versions.',
        'Food changes between Marrakesh, mountain areas, coastal cities and households. Restaurant menus show only part of the picture.',
      ],
    },
  ],
  keyFacts: [
    'Tagine means both a cooking vessel and the dish made in it.',
    'Couscous is strongly associated with family meals, with regional and household variation.',
    'Bread is central to shared eating.',
    'Mint tea is connected with hospitality and conversation.',
    'Harira and pastilla are important dishes, but not everyday meals for everyone.',
  ],
  keyTerms: [
    {
      term: 'Tagine',
      meaning: 'A conical cooking vessel and the slow-cooked dish made in it.',
    },
    {
      term: 'Harira',
      meaning: 'A tomato-based soup often associated with Ramadan but eaten beyond it.',
    },
    {
      term: 'Pastilla',
      meaning: 'A layered sweet-savoury pastry with regional and modern variations.',
    },
  ],
  noticePrompt:
    'At meals, notice how bread, small dishes and shared plates change the rhythm of eating compared with individual plates.',
  misconception: {
    myth: 'There is one authentic version of each Moroccan dish.',
    reality:
      'Recipes vary by region, household, budget, season and occasion; variation is part of the culture.',
  },
  sourceNotes: [
    {
      label: 'Morocco tourism food overview',
      url: 'https://www.visitmorocco.com/en/travel-info/food',
      note: 'General food and hospitality context.',
    },
    {
      label: 'Food culture background',
      url: 'https://www.britannica.com/place/Morocco/Cultural-life',
      note: 'Cultural-life context for Moroccan daily practices.',
    },
  ],
}
