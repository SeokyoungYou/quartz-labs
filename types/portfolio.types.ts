export type ProjectType = 'web' | 'app' | 'design' | 'other';
export type ProjectStatus = 'completed' | 'in-progress' | 'maintenance';
export type ProjectCategory = 'personal' | 'team' | 'client' | 'opensource';
export type MyRole = 'lead' | 'frontend' | 'backend' | 'fullstack' | 'design' | 'pm';

export interface AppUrls {
  android?: string;
  ios?: string;
}

export interface DemoContent {
  images: string[];
  videos: string[];
}

export interface TeamInfo {
  size: number;
  myRole: MyRole[];
  collaboration?: string[]; // Slack, Jira, Figma 등
}

export interface ProjectDuration {
  start: string;
  end?: string; // 진행중인 경우 없을 수 있음
  months?: number; // 자동 계산 가능
}

export interface Achievement {
  title: string;
  description: string;
  link?: string;
}

export interface TechnicalChallenge {
  problem: string;
  solution: string;
  impact?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  type: ProjectType;
  status: ProjectStatus;
  category: ProjectCategory;
  tags: string[];
  thumbnailUrl: string;
  demo: DemoContent;
  liveUrl?: string; // 웹 프로젝트의 경우
  appUrls?: AppUrls; // 앱 프로젝트의 경우
  githubUrl?: string;
  date: string; // 출시/완료 날짜
  duration: ProjectDuration;
  featured: boolean;
  technologies: string[];
  team?: TeamInfo;
  client?: string; // 공개 가능한 경우만
  platforms?: string[]; // 'responsive', 'tablet', 'mobile-only' 등
  achievements?: Achievement[];
  challenges?: TechnicalChallenge[];
  learnings?: string[]; // 프로젝트를 통해 배운 점
}

export interface PortfolioData {
  projects: Project[];
}