import { Project } from "@/types/portfolio.types";
import { portfolioData } from "@/data/portfolio.data";

export function getAllProjects(): Project[] {
  return portfolioData.projects;
}

export function getProjectById(id: string): Project | undefined {
  return portfolioData.projects.find((project) => project.id === id);
}

export function getFeaturedProjects(): Project[] {
  return portfolioData.projects.filter((project) => project.featured);
}

export function getProjectsByType(type: string): Project[] {
  return portfolioData.projects.filter((project) => project.type === type);
}

export function getProjectsByTag(tag: string): Project[] {
  return portfolioData.projects.filter((project) => project.tags.includes(tag));
}
