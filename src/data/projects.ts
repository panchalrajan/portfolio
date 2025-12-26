import { load } from "js-yaml";
import rawProjects from "./projects.yaml?raw";

type ProjectLink = {
  label: string;
  url: string;
};

type ProjectTimeline = {
  start?: string;
  end?: string;
};

type ProjectMedia = {
  cover?: string;
  gallery?: string[];
};

type Project = {
  id: string;
  title: string;
  summary?: string;
  description?: string;
  platforms?: string[];
  stack?: string[];
  timeline?: ProjectTimeline;
  links?: ProjectLink[];
  media?: ProjectMedia;
};

type ProjectsData = {
  projects?: Project[];
};

const parsed = load(rawProjects);
const projectsData: ProjectsData =
  parsed && typeof parsed === "object" ? (parsed as ProjectsData) : {};

export const projects = projectsData.projects ?? [];
