const hellenisticAstrologyBenefits = [
  { name: 'Personal Insight', description: 'Reveals deep insights into character and personality traits.' },
  { name: 'Fate Understanding', description: 'Helps in understanding the influence of celestial bodies on one\'s destiny.' },
  { name: 'Life Guidance', description: 'Offers guidance for personal growth and decision-making.' },
  { name: 'Predictive Analysis', description: 'Provides forecasts about future trends and life events.' },
  { name: 'Historical Depth', description: 'Connects individuals to ancient wisdom and astrological traditions.' }
];

const tarotReadingBenefits = [
  { name: 'Decision-Making Aid', description: 'Assists in making informed decisions by offering different perspectives.' },
  { name: 'Self-Reflection', description: 'Encourages introspection and self-awareness.' },
  { name: 'Problem Solving', description: 'Helps in identifying and addressing various life challenges.' },
  { name: 'Spiritual Guidance', description: 'Offers spiritual insights and life lessons.' },
  { name: 'Emotional Clarity', description: 'Clarifies emotional responses and personal relationships.' }
];

const birthChartReadingBenefits = [
  { name: 'Personalized Insights', description: 'Provides a detailed and unique understanding of an individual’s personality.' },
  { name: 'Life Path Clarity', description: 'Offers clarity on one’s strengths, weaknesses, and potential life path.' },
  { name: 'Self-Discovery', description: 'Aids in deeper self-understanding and personal development.' },
  { name: 'Relationship Dynamics', description: 'Helps in understanding personal relationships and interactions.' },
  { name: 'Career Guidance', description: 'Can guide career choices and professional growth based on personal traits.' }
];

const oracleReadingBenefits = [
  { name: 'Spiritual Connectivity', description: 'Enhances spiritual connection and personal enlightenment.' },
  { name: 'Motivational Guidance', description: 'Provides uplifting and motivational messages.' },
  { name: 'Emotional Support', description: 'Offers comfort and support during challenging times.' },
  { name: 'Intuitive Insights', description: 'Encourages listening to one’s inner wisdom and intuition.' },
  { name: 'Daily Inspiration', description: 'Serves as a source of daily guidance and positive affirmation.' }
];


// const rootPath = 'https://thecelestialstrawberry.com/assets/Images/symbols/';
const rootPath = 'https://raw.githubusercontent.com/TheCelestialStrawberry/thecelestialstrawberry/main/public/assets/Images/symbols/'


export const astrologyInfo =    {
  title: 'Hellenistic Astrology',
  image: `${rootPath}oracleReading_09.png`,
  calendly: '',
  symbol: `${rootPath}planetaryOrbit_03.png`,
  summary: 'Ancient astrology combining Babylonian, Egyptian, and Greek traditions, focusing on character and destiny through celestial influences.',
  overview: 'Hellenistic astrology emerged in the Mediterranean around the 1st century BCE, combining astrological traditions of Babylon, Egypt, and Greece. It is foundational for many modern practices and includes techniques like aspects, planetary periods, and uses the seven traditional planets.',
  purpose: 'Its purpose is to gain insight into an individual\'s character and destiny, influenced by celestial bodies. It provides guidance for personal growth, understanding life events, and future decision-making.',
  benefits: [
    { name: 'Personal Insight', description: 'Reveals deep insights into character and personality traits.' },
    { name: 'Fate Understanding', description: 'Helps in understanding the influence of celestial bodies on one\'s destiny.' },
    { name: 'Life Guidance', description: 'Offers guidance for personal growth and decision-making.' },
    { name: 'Predictive Analysis', description: 'Provides forecasts about future trends and life events.' },
    { name: 'Historical Depth', description: 'Connects individuals to ancient wisdom and astrological traditions.' }
  ]
};


export const servicesInfo = [
  {
    title: 'Tarot Readings',
    image: `${rootPath}tarotReading_08.png`,
    calendly: 'https://calendly.com/thecelestialstrawberry/tarot-reading',
    symbol: `${rootPath}tarotReading_07.png`,
    summary: 'Divination using a deck of 78 cards, offering insight into life situations, personal growth, and decision-making.',
    overview: 'Tarot readings use a deck of 78 cards for divination, originating in mid-15th century Europe. Initially a card game, it evolved into a divination tool in the 18th century. The deck is divided into Major and Minor Arcana, each with unique imagery and symbolism.',
    purpose: 'Tarot readings provide personal guidance, self-reflection, and decision-making support. They offer clarity on life situations, helping understand underlying patterns, challenges, and opportunities.',
    cardHoverWord: 'Guidance',
    benefits: [
      { name: 'Decision-Making Aid', description: 'Assists in making informed decisions by offering different perspectives.' },
      { name: 'Self-Reflection', description: 'Encourages introspection and self-awareness.' },
      { name: 'Problem Solving', description: 'Helps in identifying and addressing various life challenges.' },
      { name: 'Spiritual Guidance', description: 'Offers spiritual insights and life lessons.' },
      { name: 'Emotional Clarity', description: 'Clarifies emotional responses and personal relationships.' }
    ]
  },{
    title: 'Birth Chart Readings',
    image: `${rootPath}brithChartReading_07.png`,
    calendly: 'https://calendly.com/mleys/service-2',
    symbol: `${rootPath}brithChartReading_01.png`,
    summary: 'Astrological analysis based on the planetary positions at one\'s birth, providing deep personal insights and life path guidance.',
    overview: 'Birth chart readings analyze an astrological chart for the exact time, date, and location of someone\'s birth. This practice maps planetary positions and astrological houses, offering a unique insight into personality and life journey.',
    purpose: 'The readings provide detailed insights into character, strengths, weaknesses, and potential life path. They aid in self-discovery, understanding personal dynamics, and making life decisions.',
    cardHoverWord: 'Clairity',
    benefits: [
      { name: 'Personalized Insights', description: 'Provides a detailed and unique understanding of an individual’s personality.' },
      { name: 'Life Path Clarity', description: 'Offers clarity on one’s strengths, weaknesses, and potential life path.' },
      { name: 'Self-Discovery', description: 'Aids in deeper self-understanding and personal development.' },
      { name: 'Relationship Dynamics', description: 'Helps in understanding personal relationships and interactions.' },
      { name: 'Career Guidance', description: 'Can guide career choices and professional growth based on personal traits.' }
    ]
  },{
    title: 'Oracle Readings', 
    image: `${rootPath}oracleReading_05.png`,
    calendly: 'https://calendly.com/mleys/teststripe',
    symbol: `${rootPath}naturalHealing_02e.png`,
    summary: 'Spiritual guidance using unique oracle cards, each carrying specific uplifting messages and insights for personal enlightenment.',
    overview: 'Oracle readings use unique oracle cards for divination, differing from tarot cards. Modern oracle cards, popularized in the late 20th century, vary in theme and number, each carrying specific messages or insights.',
    purpose: 'Oracle readings offer spiritual guidance, self-reflection, and decision-making support. They provide direct and uplifting messages, offering comfort, motivation, and a deeper understanding of personal and spiritual matters.',
    cardHoverWord: 'Connection',
    benefits: [
      { name: 'Spiritual Connectivity', description: 'Enhances spiritual connection and personal enlightenment.' },
      { name: 'Motivational Guidance', description: 'Provides uplifting and motivational messages.' },
      { name: 'Emotional Support', description: 'Offers comfort and support during challenging times.' },
      { name: 'Intuitive Insights', description: 'Encourages listening to one’s inner wisdom and intuition.' },
      { name: 'Daily Inspiration', description: 'Serves as a source of daily guidance and positive affirmation.' }
    ]
  }
];

export default servicesInfo ;