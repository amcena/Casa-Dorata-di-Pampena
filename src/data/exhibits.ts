import { Exhibit } from '../types/exhibit.types';

export const exhibitsData: Exhibit[] = [
  {
    id: 'welcome',
    title: 'Welcome',
    description: 'Step into my digital gallery. Scroll to explore the hallway and discover my work.',
    category: 'intro',
    zPosition: 0,
    side: 'left',
  },
  {
    id: 'project-1',
    title: 'Project Alpha',
    description: 'An innovative web application built with React and TypeScript, featuring real-time collaboration.',
    category: 'project',
    zPosition: -800,
    side: 'right',
  },
  {
    id: 'project-2',
    title: 'Creative Code',
    description: 'Interactive visualizations and generative art experiments pushing the boundaries of web canvas.',
    category: 'project',
    zPosition: -1600,
    side: 'left',
  },
  {
    id: 'about',
    title: 'About Me',
    description: 'Developer, designer, and creative technologist passionate about building unique digital experiences.',
    category: 'about',
    zPosition: -2400,
    side: 'right',
  },
  {
    id: 'contact',
    title: 'Get In Touch',
    description: 'Ready to collaborate? Find me on GitHub, LinkedIn, or drop me an email.',
    category: 'contact',
    zPosition: -3200,
    side: 'left',
  },
];
