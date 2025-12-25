import { Exhibit } from '../types/exhibit.types';

export const exhibitsData: Exhibit[] = [
  {
    id: 'welcome',
    title: 'Welcome!',
    description: 'Stroll through this digital park and explore my portfolio along the way.',
    category: 'intro',
    zPosition: -1200,
    side: 'left',
    isWelcomeStyle: true,
    imageUrl: '/Casa-Dorata-di-Pampena/assets/Post 19.png',
  },
  {
    id: 'companies',
    title: 'VENTURES 2026',
    description: 'Featuring: AP Haus • Attirer Grandeur • Le Carrousel',
    category: 'companies',
    zPosition: -1500,
    side: 'left',
    isFestivalStyle: true,
    companies: [
      {
        name: 'AP Haus',
        description: 'AI Consulting & Innovation',
        website: 'https://ap.haus',
        accentColor: '#4CAF50',
      },
      {
        name: 'Attirer Grandeur',
        description: 'Music Label & Creative Excellence',
        website: 'https://attirergrandeur.com',
        instagram: 'attirergrandeur',
        logoUrl: 'https://attirergrandeur.com/assets/cardinal.PNG',
        accentColor: '#D32F2F',
      },
      {
        name: 'Le Carrousel',
        description: 'Luxury Second-hand Services',
        website: 'https://lecarrousel.us',
        logoUrl: '/Casa-Dorata-di-Pampena/assets/LC logo.PNG',
        accentColor: '#ff8c00',
      },
    ],
  },
  {
    id: 'about',
    title: 'THE CAMERON PAMPENA STORY',
    description: 'A Modern Production in Three Acts',
    category: 'about',
    zPosition: -2100,
    side: 'left',
    isBroadwayStyle: true,
    acts: [
      {
        number: 'ACT I',
        title: 'THE FOUNDATION',
        scenes: [
          'Graduated West Virginia University with BS in Computer Science',
          'Area of Emphasis in Cybersecurity',
          'Competed in National Cyber League competitions'
        ]
      },
      {
        number: 'ACT II',
        title: 'THE ENTERPRISE',
        scenes: [
          'Technical Support Specialist at K&L Gates LLP',
          'Mastered Tier 1 & 2 support for global law firm'
        ]
      },
      {
        number: 'ACT III',
        title: 'THE VENTURES',
        scenes: [
          'Co-founded AP Haus - AI Consulting & Innovation',
          'Co-founded Attirer Grandeur - Music Label',
          'Co-founded Le Carrousel - Luxury Second-hand Services',
          'Building the future, one venture at a time'
        ]
      }
    ],
    starring: [
      'Cybersecurity Specialist',
      'AI Enthusiast',
      'Music Producer',
      'Serial Entrepreneur'
    ]
  },
  {
    id: 'contact',
    title: 'GET IN TOUCH!',
    description: 'Pull a tab below to connect with me',
    category: 'contact',
    zPosition: -2700,
    side: 'left',
    isTearOffStyle: true,
    contactTabs: [
      {
        label: 'cam@ap.haus',
        url: 'mailto:cam@ap.haus',
        type: 'email',
      },
      {
        label: 'amcena',
        url: 'https://github.com/amcena',
        type: 'github',
      },
      {
        label: '@producedbyamcena',
        url: 'https://instagram.com/producedbyamcena',
        type: 'instagram',
      },
      {
        label: 'Cameron Pampena',
        url: 'https://linkedin.com/in/cameron-pampena',
        type: 'linkedin',
      },
    ],
  },
];

// Tree positions for right side
export const treePositions = [
  { id: 'tree-1', zPosition: -1200 },
  { id: 'tree-2', zPosition: -1500 },
  { id: 'tree-3', zPosition: -1800 },
  { id: 'tree-4', zPosition: -2400 },
  { id: 'tree-5', zPosition: -3000 },
];
