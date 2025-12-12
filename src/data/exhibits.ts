import { Exhibit } from '../types/exhibit.types';

export const exhibitsData: Exhibit[] = [
  {
    id: 'welcome',
    title: 'Welcome',
    description: 'Stroll through this digital park and explore my portfolio along the way.',
    category: 'intro',
    zPosition: 0,
    side: 'left',
  },
  {
    id: 'companies',
    title: 'VENTURES 2024',
    description: 'Featuring: AP Haus • Attirer Grandeur • Le Carrousel',
    category: 'companies',
    zPosition: -800,
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
        description: 'Luxury Second-Hand Marketplace',
        website: 'https://lecarrousel.us',
        accentColor: '#ff8c00',
      },
    ],
  },
  {
    id: 'project-1',
    title: 'Web Development',
    description: 'Full-stack applications built with React, TypeScript, and modern cloud technologies.',
    category: 'project',
    zPosition: -1600,
    side: 'left',
  },
  {
    id: 'project-2',
    title: 'Creative Projects',
    description: 'Interactive experiences and generative art experiments that push creative boundaries.',
    category: 'project',
    zPosition: -2400,
    side: 'left',
  },
  {
    id: 'about',
    title: 'About Me',
    description: 'Developer and designer passionate about creating unique digital experiences.',
    category: 'about',
    zPosition: -3200,
    side: 'left',
  },
  {
    id: 'contact',
    title: 'Get In Touch',
    description: 'Let\'s collaborate! Find me on GitHub, LinkedIn, or send an email.',
    category: 'contact',
    zPosition: -4000,
    side: 'left',
  },
];

// Tree positions for right side
export const treePositions = [
  { id: 'tree-1', zPosition: -400 },
  { id: 'tree-2', zPosition: -1200 },
  { id: 'tree-3', zPosition: -2000 },
  { id: 'tree-4', zPosition: -2800 },
  { id: 'tree-5', zPosition: -3600 },
  { id: 'tree-6', zPosition: -4400 },
];
