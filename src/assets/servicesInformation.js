import { rootPath } from "./rootPath";

const root = `${rootPath}/symbols/`;

export const astrologyInfo =    {
  title: 'Hellenistic Astrology',
  image: `${root}oracleReading_09.png`,
  calendly: '',
  symbol: `planetaryOrbit_03.png`,
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
    title: 'Tarot Reading',
    image: `${root}tarotReading_08.png`,
    calendly: 'https://calendly.com/thecelestialstrawberry/tarot-reading',
    symbol: `tarotReading_07.png`,
    summary: 'A mystical practice with 78 cards that reveals insights into life\'s hidden patterns, challenges, and opportunities, offering guidance and reflection.',
    overview: 'Tarot readings, with their mystical deck of 78 cards, trace their origins back to 15th-century Europe, where they began as a card game before transforming into a powerful tool for divination in the 18th century. Each card, whether from the Major or Minor Arcana, is adorned with unique imagery and symbolism, weaving a tapestry of insight and wisdom.',
    purpose: 'These readings serve as a magical mirror, reflecting personal guidance, deep self-reflection, and enchanted support in decision-making. They shine a light on life\'s hidden patterns, challenges, and opportunities, offering a path through the mysteries of existence.',
    cardHoverWord: 'Guidance',
    benefits: [
      { name: 'Decision-Making', description: 'Guides you in making choices by revealing different perspectives through the veil of the cards.' },
      { name: 'Self-Reflection', description: 'Invites you to journey inward, sparking introspection and awakening self-awareness.' },
      { name: 'Problem Solving', description: 'Unveils solutions to life\'s challenges, helping you navigate through the stormy seas.' },
      { name: 'Spiritual Wisdom', description: 'Offers sacred insights and life lessons, connecting you to higher realms of understanding.' },
      { name: 'Emotional Clarity', description: 'Brings light to your emotional world, helping you understand your feelings and relationships with a deeper, more magical clarity.' }
    ]
  },{
    title: 'Birth Chart Reading',
    image: `${root}brithChartReading_07.png`,
    calendly: 'https://calendly.com/thecelestialstrawberry/birth-chart-reading',
    symbol: `brithChartReading_01.png`,
    summary: 'Unlock the cosmic treasure map charted at your birth, revealing your unique personality, life journey, and hidden strengths.',
    overview: 'Birth chart readings are like unlocking a cosmic treasure map, charted at the exact moment of your birth, where the stars and planets danced in a unique formation just for you. This celestial practice unveils the intricate tapestry of your personality and life’s journey, offering a starlit mirror into your true self.',
    purpose: 'These readings illuminate your inner world, revealing hidden strengths, charming quirks, and the winding paths your life may take. They’re a magical tool for self-discovery, guiding you through the enchanted forest of your mind, helping you understand your relationships, and lighting the way to wise decisions.',
    cardHoverWord: 'Clarity',
    benefits: [
      { name: 'Personalized Insights', description: 'Offers a celestial insight of your life’s path, as unique as a constellation.' },
      { name: 'Life Path Clarity', description: 'Illuminates your strengths, soft spots, and the shimmering path ahead.' },
      { name: 'Self-Discovery', description: 'Delves into the depths of your being, unveiling secrets and sparking personal growth.' },
      { name: 'Relationship Dynamics', description: 'Deciphers the cosmic dance of your relationships, enhancing understanding and harmony.' },
      { name: 'Career Guidance', description: 'Points to the stars in your career, guiding you toward paths that resonate with your inner essence.' }
    ]
  },{
    title: 'Synastry Chart Reading', 
    image: `${root}oracleReading_05.png`,
    calendly: 'https://calendly.com/thecelestialstrawberry/oracle-reading',
    symbol: `naturalHealing_02e.png`,
    summary: 'Explore the cosmic love letter between two souls, revealing the celestial dance of energies in relationships.',
    overview: 'Synastry charts in astrology are like cosmic love letters, where the stars whisper secrets about the dance between two souls. By weaving together the celestial threads from each person\'s birth chart, these charts reveal the enchanting interplay of energies that spark connection or create cosmic friction. Whether it\'s the tender glow of harmony or the fiery sparks of challenge, synastry charts offer a glimpse into the magical alchemy of relationships, be it between lovers, friends, or even kindred spirits in the workplace.',
    purpose: 'It\'s a celestial map that guides the heart\'s journey through the universe of connection.',
    cardHoverWord: 'Connection',
    benefits: [
      { name: 'Deeper Relationship Magic', description: 'Synastry readings unveil the mystical connections between two souls, revealing the enchanted threads that bind your hearts together.' },
      { name: 'Harmonious Communication', description: 'By attuning to each other’s cosmic vibes, you can weave conversations that flow like a sweet melody, turning potential miscommunications into harmonious exchanges.' },
      { name: 'Conflict Alchemy', description: 'Discover the secret spells for transforming disagreements into opportunities for growth, as synastry readings reveal the hidden keys to resolving tensions with grace.' },
      { name: 'Strengthened Heartstrings', description: 'Understanding the celestial dance between you and your partner helps you nurture a bond that glows brighter with each shared moment, creating an unbreakable connection.' },
      { name: 'Shared Journey of Growth', description: 'Synastry charts guide you on a journey of mutual discovery, where both souls evolve together, learning and growing from each other’s cosmic gifts and lessons.' }
    ]
  }
];


export default servicesInfo ;