import { load } from "js-yaml";
import rawSkills from "./skills.yaml?raw";

type SkillsSection = {
  id: string;
  title: string;
  items?: string[];
};

type SkillsData = {
  sections?: SkillsSection[];
};

const parsed = load(rawSkills);
const skillsData: SkillsData =
  parsed && typeof parsed === "object" ? (parsed as SkillsData) : {};

export const skillsSections = skillsData.sections ?? [];
