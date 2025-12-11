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
    id: 'project-1',
    title: 'Web Development',
    description: 'Full-stack applications built with React, TypeScript, and modern cloud technologies.',
    category: 'project',
    zPosition: -800,
    side: 'left',
  },
  {
    id: 'project-2',
    title: 'Creative Projects',
    description: 'Interactive experiences and generative art experiments that push creative boundaries.',
    category: 'project',
    zPosition: -1600,
    side: 'left',
  },
  {
    id: 'about',
    title: 'About Me',
    description: 'Developer and designer passionate about creating unique digital experiences.',
    category: 'about',
    zPosition: -2400,
    side: 'left',
  },
  {
    id: 'contact',
    title: 'Get In Touch',
    description: 'Let\'s collaborate! Find me on GitHub, LinkedIn, or send an email.',
    category: 'contact',
    zPosition: -3200,
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
];
