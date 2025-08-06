import { AboutMe, Passion, ProjectStory } from "@/types/profile.types";
import { profileData } from "@/data/profile.data";

export function getProfile(): AboutMe {
  return profileData;
}

export function getPassionById(id: string): Passion | undefined {
  return profileData.passions.find((passion) => passion.id === id);
}

export function getProjectStory(projectId: string): ProjectStory | undefined {
  return profileData.projectStories.find(
    (story) => story.projectId === projectId
  );
}

export function getPassionsRelatedToProject(projectId: string): Passion[] {
  return profileData.passions.filter((passion) =>
    passion.relatedProjects?.includes(projectId)
  );
}
