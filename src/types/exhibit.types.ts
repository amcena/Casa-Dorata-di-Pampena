export interface Company {
  name: string;
  description: string;
  website: string;
  instagram?: string;
  logoUrl?: string;
  accentColor?: string;
}

export interface Act {
  number: string;
  title: string;
  scenes: string[];
}

export interface ContactTab {
  label: string;
  icon?: string;
  url: string;
  type: 'email' | 'github' | 'instagram' | 'linkedin' | 'website';
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
  isBroadwayStyle?: boolean;
  isWelcomeStyle?: boolean;
  isTearOffStyle?: boolean;
  acts?: Act[];
  starring?: string[];
  contactTabs?: ContactTab[];
}
