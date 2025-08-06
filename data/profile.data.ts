import { AboutMe } from "@/types/profile.types";

export const profileData: AboutMe = {
  name: "Seokyoung Yu",
  tagline: "Code What I Love",
  bio: "I'm a developer who turns hobbies and passions into code. I create apps and websites to share what I love with more people.",
  currentFocus:
    "Creating meaningful digital experiences that solve everyday problems",

  passions: [
    {
      id: "bjj",
      name: "Brazilian Jiu-Jitsu",
      emoji: "🥋",
      description: "부드러움이 강함을 이긴다는 철학의 무술",
      whyILoveIt:
        "BJJ는 체스처럼 전략적이면서도 신체적인 도전이 있어요. 매 스파링마다 새로운 것을 배우고, 겸손함과 인내를 가르쳐줍니다.",
      startedYear: 2022,
      level: "enthusiast",
      relatedProjects: ["post-black-belt"],
      images: ["/images/passions/bjj-training.jpg"],
    },
    {
      id: "mobile-dev",
      name: "모바일 앱 개발",
      emoji: "📱",
      description: "손 안의 작은 세계를 만드는 일",
      whyILoveIt:
        "사람들이 매일 사용하는 도구를 만들 수 있다는 게 매력적이에요. 직관적인 UX와 아름다운 UI로 일상을 더 나은 곳으로 만들 수 있죠.",
      startedYear: 2020,
      level: "expert",
      relatedProjects: ["post-black-belt"],
    },
    {
      id: "problem-solving",
      name: "문제 해결",
      emoji: "🧩",
      description: "복잡한 문제를 간단하고 우아한 해결책으로",
      whyILoveIt:
        "퍼즐을 푸는 것처럼, 복잡한 문제를 작은 조각으로 나누고 하나씩 해결해가는 과정이 즐거워요.",
      startedYear: 2019,
      level: "expert",
    },
  ],

  projectStories: [
    {
      projectId: "post-black-belt",
      inspiration:
        "BJJ 훈련을 시작하면서 배운 기술들을 기록하고 싶었는데, 마땅한 앱이 없더라구요. 수첩에 적다가 '이걸 앱으로 만들면 어떨까?'라는 생각이 들었죠.",
      personalConnection:
        "제가 매일 사용하는 앱이에요. 훈련 후 배운 기술을 기록하고, 진도를 확인하면서 성장을 느낍니다. 제 BJJ 여정의 동반자죠.",
      problemItSolved:
        "BJJ 수련자들이 배운 기술을 체계적으로 기록하고, 자신의 성장을 시각적으로 확인할 수 있게 했어요. 140개 이상의 기술 해시태그로 쉽게 정리할 수 있죠.",
      proudestMoment:
        "한 유저가 'Post Black Belt 덕분에 블루벨트를 받았다'고 리뷰를 남겼을 때요. 제 앱이 누군가의 성장에 실제로 도움이 되었다는 게 정말 뿌듯했어요.",
      lessonsLearned: [
        "사용자 피드백의 중요성 - 실제 BJJ 수련자들의 의견이 앱을 더 좋게 만들었어요",
        "단순함의 힘 - 복잡한 기능보다 핵심 기능을 잘 만드는 게 중요해요",
        "커뮤니티의 가치 - 3,300명의 유저들이 서로 동기부여가 되어주고 있어요",
      ],
      funFacts: [
        "첫 버전은 제 훈련 기록만을 위해 만들었는데, 도장 동료들이 써보고 싶다고 해서 출시하게 되었어요",
        "AI 추천 기능은 제가 실제로 어떤 기술을 연습해야 할지 고민하다가 추가한 기능이에요",
      ],
    },
  ],

  codingPhilosophy:
    "코드는 문제를 해결하는 도구이자, 열정을 표현하는 캔버스입니다. 제가 사랑하는 것들을 코드로 만들 때 가장 좋은 결과물이 나온다고 믿어요.",

  lifePhilosophies: [
    {
      title: "작은 것부터 시작하기",
      description:
        "BJJ에서 배운 교훈이에요. 기본기가 탄탄해야 고급 기술도 가능하죠.",
      howItAffectsMyCode:
        "MVP부터 시작해서 사용자 피드백을 받으며 점진적으로 개선해요. Post Black Belt도 단순한 메모 앱에서 시작했죠.",
    },
    {
      title: "사용자 중심 사고",
      description:
        "내가 쓰고 싶은 앱을 만들면, 비슷한 고민을 가진 사람들에게도 도움이 돼요.",
      howItAffectsMyCode:
        "제가 실제 사용자이기 때문에 진짜 필요한 기능이 무엇인지 알 수 있어요.",
    },
  ],

  codeJourney: [
    {
      year: 2019,
      milestone: "첫 Hello World",
      story:
        "대학 수업에서 처음 코딩을 접했어요. 화면에 'Hello World'가 뜨는 순간의 짜릿함을 잊을 수 없어요.",
      emotion: "excited",
    },
    {
      year: 2020,
      milestone: "첫 모바일 앱",
      story:
        "React Native로 간단한 할 일 앱을 만들었어요. 제 폰에서 직접 사용할 수 있다는 게 신기했죠.",
      emotion: "curious",
    },
    {
      year: 2023,
      milestone: "Post Black Belt 출시",
      story:
        "취미를 앱으로 만들어 전 세계 사람들과 나누게 되었어요. 코딩이 제 삶을 풍요롭게 만든다는 걸 깨달았죠.",
      emotion: "proud",
    },
  ],

  favoriteStack: [
    {
      technology: "React Native",
      reason:
        "한 번의 코드로 iOS와 Android 앱을 만들 수 있어요. 빠른 개발과 좋은 성능의 균형이 훌륭해요.",
      useCase: "Post Black Belt 같은 크로스플랫폼 앱 개발",
      emoji: "⚛️",
    },
    {
      technology: "TypeScript",
      reason:
        "타입 안정성 덕분에 런타임 에러를 줄이고, 더 자신감 있게 코딩할 수 있어요.",
      useCase: "대규모 프로젝트의 유지보수성 향상",
      emoji: "🔷",
    },
    {
      technology: "Firebase",
      reason: "백엔드 인프라 걱정 없이 앱 개발에 집중할 수 있게 해줘요.",
      useCase: "빠른 MVP 개발과 실시간 기능 구현",
      emoji: "🔥",
    },
  ],

  hobbies: [
    {
      name: "Brazilian Jiu-Jitsu",
      description:
        "일주일에 4-5번 훈련해요. 신체적, 정신적 성장을 동시에 경험할 수 있는 최고의 취미죠.",
      relatedProject: "post-black-belt",
    },
    {
      name: "독서",
      description:
        "기술 서적과 자기계발서를 즐겨 읽어요. 새로운 관점과 아이디어를 얻을 수 있죠.",
    },
    {
      name: "여행",
      description:
        "새로운 문화와 사람들을 만나는 걸 좋아해요. 여행에서 얻은 영감이 프로젝트에 녹아들어요.",
    },
  ],

  inspirations: [
    {
      source: "Rickson Gracie",
      impact:
        "BJJ의 전설적인 마스터. '흐르는 물처럼 유연하게'라는 그의 철학이 제 코딩 스타일에도 영향을 줬어요.",
    },
    {
      source: "Steve Jobs",
      impact:
        "기술과 인문학의 교차점에서 혁신이 일어난다는 그의 철학이 제가 앱을 만드는 방식을 바꿨어요.",
    },
  ],

  futureGoals: [
    {
      goal: "전 세계 10만 명의 BJJ 수련자들이 사용하는 앱 만들기",
      why: "더 많은 사람들의 BJJ 여정을 도울 수 있다면 정말 의미 있을 것 같아요.",
      relatedPassion: "bjj",
    },
    {
      goal: "다른 취미 커뮤니티를 위한 앱 개발",
      why: "Post Black Belt의 성공 경험을 다른 분야에도 적용하고 싶어요.",
      relatedPassion: "problem-solving",
    },
  ],

  connectMessage:
    "취미를 사랑하고, 그것을 더 나은 방향으로 발전시키고 싶은 사람들과 연결되고 싶어요. 함께 의미 있는 것을 만들어가요!",

  openToCollaborate: [
    "스포츠/피트니스 앱 개발",
    "커뮤니티 플랫폼 구축",
    "모바일 앱 UX/UI 개선",
    "취미 관련 도구 개발",
  ],

  funFacts: [
    "Post Black Belt의 첫 유저는 제 BJJ 교수님이었어요",
    "코딩할 때는 Lo-fi 힙합을 들어요. 집중력이 높아지죠",
    "새벽 5시에 일어나서 코딩하는 걸 좋아해요. 세상이 조용할 때 가장 창의적이 되거든요",
    "BJJ 띠 색깔에서 앱 디자인 영감을 얻었어요",
  ],

  favoriteQuotes: [
    {
      quote: "Be like water, my friend",
      author: "Bruce Lee",
      whyILikeIt:
        "BJJ와 코딩 모두에 적용되는 철학이에요. 상황에 맞게 유연하게 적응하는 것이 중요하죠.",
    },
    {
      quote: "The best way to predict the future is to invent it",
      author: "Alan Kay",
      whyILikeIt: "수동적으로 기다리지 않고, 직접 만들어가는 삶을 살고 싶어요.",
    },
  ],
};
