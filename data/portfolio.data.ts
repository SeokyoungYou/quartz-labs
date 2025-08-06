import { PortfolioData } from "@/types/portfolio.types";

export const portfolioData: PortfolioData = {
  projects: [
    {
      id: "post-black-belt",
      title: "Post Black Belt",
      description:
        "The ultimate journal app designed specifically for Brazilian Jiu-Jitsu practitioners",
      longDescription:
        "Post Black Belt is a comprehensive BJJ training companion app that helps practitioners document techniques, track progress, and elevate their training. With over 3,300+ global users and a 4.9/5 rating, it provides features like technique library, training journal, progress tracking, belts log, smart AI suggestions, and 140+ technique hashtags.",
      type: "app",
      status: "maintenance",
      category: "personal",
      tags: ["mobile", "sports", "fitness", "bjj", "martial-arts", "journal"],
      thumbnailUrl: "/images/projects/post-black-belt-thumb.jpg",
      demo: {
        images: [
          "/images/projects/post-black-belt-technique-graph.jpg",
          "/images/projects/post-black-belt-my-page.jpg",
          "/images/projects/post-black-belt-recap-page.jpg",
        ],
        videos: ["/videos/projects/post-black-belt-demo.mp4"],
      },
      liveUrl: "https://post-black-belt.quartz.best/",
      appUrls: {
        ios: "https://apps.apple.com/app/post-black-belt",
        android:
          "https://play.google.com/store/apps/details?id=com.postblackbelt",
      },
      date: "2023-08",
      duration: {
        start: "2023-01",
        end: "2023-08",
        months: 7,
      },
      featured: true,
      technologies: [
        "React Native",
        "TypeScript",
        "Firebase",
        "Node.js",
        "AI/ML",
      ],
      platforms: ["mobile", "web"],
      achievements: [
        {
          title: "High User Rating",
          description: "Maintained 4.9/5 rating across app stores",
        },
        {
          title: "Global Reach",
          description: "3,300+ active BJJ practitioners worldwide",
        },
        {
          title: "User Engagement",
          description: "Daily active users tracking their BJJ journey",
        },
      ],
      challenges: [
        {
          problem: "Complex BJJ technique categorization and searchability",
          solution:
            "Implemented smart hashtag system with 140+ predefined technique tags",
          impact: "Users can quickly find and organize techniques efficiently",
        },
        {
          problem: "Providing personalized training recommendations",
          solution:
            "Developed AI-powered suggestion system based on user progress",
          impact: "Improved user training progression and engagement",
        },
      ],
      learnings: [
        "Niche market app development and user research",
        "Building community-driven features",
        "Implementing AI for personalized recommendations",
        "Cross-platform deployment strategies",
      ],
    },
  ],
};
