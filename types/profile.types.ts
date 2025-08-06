// "Code What I Love" 컨셉의 프로필 타입

export interface Passion {
  id: string;
  name: string;
  emoji: string;
  description: string;
  whyILoveIt: string;
  startedYear: number;
  level?: string; // "beginner", "hobbyist", "enthusiast", "expert"
  relatedProjects?: string[]; // project IDs
  images?: string[];
}

export interface ProjectStory {
  projectId: string;
  inspiration: string; // 무엇이 이 프로젝트를 만들게 했는지
  personalConnection: string; // 개인적으로 어떤 의미가 있는지
  problemItSolved: string; // 어떤 문제를 해결하고 싶었는지
  proudestMoment: string; // 가장 뿌듯했던 순간
  lessonsLearned: string[]; // 배운 점들
  funFacts?: string[]; // 재미있는 에피소드
}

export interface LifePhilosophy {
  title: string;
  description: string;
  howItAffectsMyCode: string;
}

export interface CodeJourney {
  year: number;
  milestone: string;
  story: string;
  emotion: string; // "excited", "challenged", "proud", "curious", etc.
}

export interface FavoriteStack {
  technology: string;
  reason: string;
  useCase: string;
  emoji: string;
}

export interface AboutMe {
  // 기본 정보
  name: string;
  tagline: string; // "Code What I Love"
  bio: string; // 짧은 자기소개
  currentFocus: string; // 현재 집중하고 있는 것
  
  // 내가 사랑하는 것들
  passions: Passion[];
  
  // 프로젝트 스토리
  projectStories: ProjectStory[];
  
  // 코딩 철학
  codingPhilosophy: string;
  lifePhilosophies: LifePhilosophy[];
  
  // 코딩 여정
  codeJourney: CodeJourney[];
  
  // 좋아하는 기술 스택
  favoriteStack: FavoriteStack[];
  
  // 취미와 관심사
  hobbies: {
    name: string;
    description: string;
    relatedProject?: string; // 이 취미가 영감을 준 프로젝트
  }[];
  
  // 영감과 동기
  inspirations: {
    source: string; // 사람, 책, 경험 등
    impact: string; // 어떤 영향을 받았는지
  }[];
  
  // 미래 계획
  futureGoals: {
    goal: string;
    why: string;
    relatedPassion?: string;
  }[];
  
  // 연락 방법
  connectMessage: string; // 어떤 사람들과 연결되고 싶은지
  openToCollaborate: string[]; // 협업하고 싶은 분야
  
  // 재미있는 사실들
  funFacts: string[];
  
  // 좋아하는 명언
  favoriteQuotes: {
    quote: string;
    author: string;
    whyILikeIt?: string;
  }[];
}