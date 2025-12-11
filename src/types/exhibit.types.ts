export interface Exhibit {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  category: string;
  zPosition: number;
  side: 'left' | 'right';
  link?: string;
}
