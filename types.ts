
export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  source: string;
  imageUrl: string;
  publishedAt: string;
  readTime?: string;
  views?: string;
  isFeatured?: boolean;
  externalUrl?: string;
}

export interface ToolItem {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  url?: string;
  verified?: boolean;
  bestFor?: string;
  reason?: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  icon: string;
}

export interface DirectoryVoice {
  id: string;
  name: string;
  realName?: string;
  description: string;
  category: 'LLMs' | 'Hardware' | 'Regulación' | 'YouTube' | 'Podcast / YouTube' | 'YouTube / Instagram';
  imageUrl: string;
  tag?: string;
  url?: string;
  type: 'divulgador' | 'fuente_oficial';
  latestVideo?: {
    title: string;
    url: string;
    uploadedAt?: string;
  };
}
