import type { DiscoverArticle } from '../../types/discover'

export const foodToTryArticle: DiscoverArticle = {
  id: 'food-to-try',
  icon: '◌',
  title: 'Food to try',
  deck: 'Tagine, bread, mint tea and sweet-savoury surprises',
  summary:
    'Moroccan food is not just one dish. Look for slow-cooked tagines, bread used almost like a utensil, mint tea poured from high up, olives, dates, pastries and spices that smell stronger than they look.',
  readTimeMinutes: 3,
  sections: [
    {
      heading: 'Tagine is the pot and the dish',
      paragraphs: [
        'A tagine is the conical clay cooking vessel and also the slow-cooked stew made inside it. The shape helps steam rise, cool and drip back down, keeping the food moist.',
        'You might see chicken with preserved lemon, lamb with prunes, vegetables, olives or almonds. The best part may be the sauce at the bottom.',
      ],
    },
    {
      heading: 'Bread matters',
      paragraphs: [
        'Bread is central to many meals. It can be used to scoop food, share dishes and mop up sauce. Notice how different it is from sliced supermarket bread.',
        'At breakfast, look for msemen or other flatbreads. They can be flaky, chewy, buttery or served with honey and jam.',
      ],
    },
    {
      heading: 'Mint tea is a ceremony',
      paragraphs: [
        'Moroccan mint tea is often sweet and poured from a height into small glasses. The height is partly theatre and partly to aerate the tea.',
        'When someone offers tea, it can be a sign of welcome. Taste it slowly before deciding whether it is too sweet.',
      ],
    },
  ],
  keyFacts: [
    'A tagine is both a cooking vessel and a dish.',
    'Mint tea is often sweet and poured from a height.',
    'Bread is used actively during meals, not just served on the side.',
    'Moroccan food often mixes sweet and savoury flavours, such as meat with dried fruit.',
  ],
  keyTerms: [
    {
      term: 'Tagine',
      meaning: 'A conical cooking pot and the slow-cooked dish made inside it.',
    },
    {
      term: 'Msemen',
      meaning: 'A layered Moroccan flatbread, often eaten at breakfast or as a snack.',
    },
    {
      term: 'Harira',
      meaning: 'A soup often made with tomatoes, lentils, chickpeas and herbs.',
    },
  ],
  trivia: [
    {
      label: 'Taste challenge',
      text: 'Vote for the best bread, best tea and best orange juice of the trip.',
    },
  ],
  noticePrompt:
    'At each meal, notice one flavour that stands out: lemon, cumin, cinnamon, mint, olive, honey or smoke.',
  misconception: {
    myth: 'Moroccan food is just spicy food.',
    reality:
      'It is often more aromatic than hot: herbs, preserved lemon, dried fruit, olives and slow cooking matter as much as chilli.',
  },
  sourceNotes: [
    {
      label: 'Trip food notes',
      url: 'https://paolomarini.github.io/morocco-family-trip/',
      note: 'Family-friendly guide to dishes we are likely to meet.',
    },
  ],
}
