export enum ProjectCategory {
  GAME = 'Game Dev',
  PHOTO = 'Photography',
  ART = 'Digital Art'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  tags: string[];
  category: ProjectCategory;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: 'github' | 'twitter' | 'mail' | 'linkedin';
}