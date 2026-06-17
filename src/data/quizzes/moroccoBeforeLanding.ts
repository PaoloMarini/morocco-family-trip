import type { QuizData } from '../../types/quiz'

export const moroccoBeforeLandingQuiz: QuizData = {
  id: 'morocco-before-landing',
  title: 'Morocco before landing',
  description:
    'Ten quick questions for the flight: geography, language, food, etiquette and what to notice first.',
  questions: [
    {
      id: 'capital',
      prompt: 'What is the capital of Morocco?',
      options: [
        { id: 'marrakesh', text: 'Marrakesh' },
        { id: 'rabat', text: 'Rabat' },
        { id: 'casablanca', text: 'Casablanca' },
        { id: 'fes', text: 'Fes' },
      ],
      correctOptionId: 'rabat',
      explanation:
        'Rabat is the capital. Marrakesh is one of Morocco’s famous historic imperial cities, but it is not the capital.',
    },
    {
      id: 'marrakesh-capital',
      prompt: 'Why do many visitors confuse Marrakesh with the capital?',
      options: [
        { id: 'largest', text: 'It is Morocco’s largest city' },
        { id: 'historic', text: 'It is very famous and historically important' },
        { id: 'airport', text: 'It is the only city with an airport' },
      ],
      correctOptionId: 'historic',
      explanation:
        'Marrakesh is internationally famous and historically important, but Rabat is the political capital and Casablanca is larger.',
    },
    {
      id: 'languages',
      prompt: 'Which pair are official languages of Morocco?',
      options: [
        { id: 'arabic-amazigh', text: 'Arabic and Amazigh' },
        { id: 'arabic-french', text: 'Arabic and French' },
        { id: 'french-spanish', text: 'French and Spanish' },
        { id: 'darija-english', text: 'Darija and English' },
      ],
      correctOptionId: 'arabic-amazigh',
      explanation:
        'Arabic and Amazigh are official. Darija, French, Spanish and English may all be heard in different contexts.',
    },
    {
      id: 'amazigh',
      prompt: 'What does Amazigh refer to?',
      options: [
        { id: 'city', text: 'A city near Marrakesh' },
        { id: 'indigenous', text: 'Indigenous North African peoples and identities' },
        { id: 'dessert', text: 'A sweet pastry' },
        { id: 'currency', text: 'A Moroccan coin' },
      ],
      correctOptionId: 'indigenous',
      explanation:
        'Amazigh refers to Indigenous North African peoples and identities. Morocco’s Amazigh cultures are diverse and contemporary.',
    },
    {
      id: 'medina',
      prompt: 'What is a medina?',
      options: [
        { id: 'old-district', text: 'An old urban district, often walled' },
        { id: 'mountain-pass', text: 'A mountain pass' },
        { id: 'tea-glass', text: 'A tea glass' },
        { id: 'hotel', text: 'A hotel courtyard' },
      ],
      correctOptionId: 'old-district',
      explanation:
        'A medina is an old urban district. It can be historic and beautiful, but it is also a living place where people work and live.',
    },
    {
      id: 'riad',
      prompt: 'What is a riad traditionally organised around?',
      options: [
        { id: 'street-front', text: 'A large shopfront facing the street' },
        { id: 'courtyard', text: 'An interior courtyard or garden' },
        { id: 'parking', text: 'A central parking area' },
      ],
      correctOptionId: 'courtyard',
      explanation:
        'Riads are inward-facing, often centred on a courtyard or garden that brings light, shade and calm into the building.',
    },
    {
      id: 'tagine',
      prompt: 'What does “tagine” mean?',
      options: [
        { id: 'spice', text: 'Only a spice blend' },
        { id: 'pot-dish', text: 'Both a cooking vessel and a dish' },
        { id: 'bread', text: 'A type of bread' },
        { id: 'tea', text: 'A mint tea pot' },
      ],
      correctOptionId: 'pot-dish',
      explanation:
        'A tagine is the conical cooking vessel and the slow-cooked dish made in it.',
    },
    {
      id: 'agafay',
      prompt: 'What is Agafay best described as?',
      options: [
        { id: 'sahara-dunes', text: 'The classic Sahara dune field' },
        { id: 'rocky-desert', text: 'A rocky desert landscape near Marrakesh' },
        { id: 'coastal-town', text: 'A coastal fishing town' },
        { id: 'ski-resort', text: 'A High Atlas ski resort' },
      ],
      correctOptionId: 'rocky-desert',
      explanation:
        'Agafay is a rocky desert area near Marrakesh. It can feel dramatic and desert-like, but it is not the Sahara dunes.',
    },
    {
      id: 'currency',
      prompt: 'What currency is used in Morocco?',
      options: [
        { id: 'dirham', text: 'Moroccan dirham' },
        { id: 'euro', text: 'Euro' },
        { id: 'dinar', text: 'Moroccan dinar' },
        { id: 'pound', text: 'Moroccan pound' },
      ],
      correctOptionId: 'dirham',
      explanation:
        'Morocco uses the Moroccan dirham, usually written as MAD or DH.',
    },
    {
      id: 'etiquette',
      prompt: 'What is the best approach before photographing a person close up?',
      options: [
        { id: 'ask', text: 'Ask first and accept the answer' },
        { id: 'zoom', text: 'Use zoom so they do not notice' },
        { id: 'pay-after', text: 'Take the photo first and offer money after' },
      ],
      correctOptionId: 'ask',
      explanation:
        'Ask first, especially for close-up photos. If someone says no, move on politely.',
    },
  ],
}
