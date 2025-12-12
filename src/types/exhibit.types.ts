export interface Company {
  name: string;
  description: string;
  website: string;
  instagram?: string;
  logoUrl?: string;
  accentColor?: string;
}

export interface Exhibit {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  category: string;
  zPosition: number;
  side: 'left' | 'right';
  link?: string;
  companies?: Company[];
  isFestivalStyle?: boolean;
}
