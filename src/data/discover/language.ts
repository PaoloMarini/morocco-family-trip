import type { DiscoverArticle } from '../../types/discover'

export const languageArticle: DiscoverArticle = {
  id: 'language',
  icon: '؟',
  title: 'Language',
  deck: 'Darija, Arabic, Amazigh and French',
  summary:
    'Morocco is multilingual. Darija is the everyday Moroccan Arabic many visitors hear first, while Modern Standard Arabic, Amazigh languages and French all have important roles.',
  readTimeMinutes: 4,
  sections: [
    {
      heading: 'Everyday speech',
      paragraphs: [
        'Darija is Moroccan Arabic, used widely in everyday speech. It differs from Modern Standard Arabic, which is used in formal writing, news, education and official settings across the Arab world.',
        'A visitor does not need perfect pronunciation. A small effort, used politely, can make ordinary interactions warmer.',
      ],
    },
    {
      heading: 'Amazigh and French',
      paragraphs: [
        'Amazigh languages are part of Morocco’s Indigenous North African heritage and are official alongside Arabic. You may see Tifinagh script on signs even if you do not hear Amazigh spoken in every place.',
        'French is widely used in business, tourism, higher education and some public contexts because of Morocco’s colonial history and ongoing connections. English is also increasingly common in tourism, but not universal.',
      ],
    },
    {
      heading: 'Transliteration varies',
      paragraphs: [
        'Darija and Arabic words are often written in Latin letters for travellers, but spellings vary. Shukran, choukran and shokran may point to the same thank-you.',
        'The phrase table below uses simple pronunciation hints rather than a formal linguistic system.',
      ],
    },
  ],
  keyFacts: [
    'Darija is Moroccan Arabic used in everyday speech.',
    'Modern Standard Arabic is formal and written across many Arabic-speaking countries.',
    'Amazigh languages are official in Morocco alongside Arabic.',
    'French remains widely used in many practical contexts.',
    'Latin-letter spellings vary because transliteration is not one single system.',
  ],
  keyTerms: [
    {
      term: 'Salam',
      meaning: 'Hello or peace. Pronunciation: sa-LAM.',
    },
    {
      term: 'Shukran',
      meaning: 'Thank you. Pronunciation: SHOOK-ran.',
    },
    {
      term: 'Afak',
      meaning: 'Please. Pronunciation: a-FAK.',
    },
    {
      term: 'La, shukran',
      meaning: 'No, thank you. Pronunciation: la SHOOK-ran.',
    },
    {
      term: 'Bshhal?',
      meaning: 'How much? Pronunciation: b-SH-hal.',
    },
    {
      term: 'Labas?',
      meaning: 'How are you? / All good? Pronunciation: la-BAS.',
    },
  ],
  noticePrompt:
    'Listen for how people switch languages depending on who they are speaking to, the setting and the task.',
  misconception: {
    myth: 'Everyone in Morocco simply speaks “Arabic” in the same way.',
    reality:
      'Morocco includes Darija, Modern Standard Arabic, Amazigh languages, French and other language practices.',
  },
  sourceNotes: [
    {
      label: 'Moroccan constitution / official language context',
      url: 'https://www.constituteproject.org/constitution/Morocco_2011',
      note: 'Arabic and Amazigh official language context.',
    },
    {
      label: 'Encyclopaedia Britannica',
      url: 'https://www.britannica.com/place/Morocco/People',
      note: 'Language and people overview.',
    },
  ],
}
