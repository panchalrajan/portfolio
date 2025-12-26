import { load } from "js-yaml";
import rawProfile from "./profile.yaml?raw";

type ProfileLinks = {
  email?: string;
  github?: string;
  linkedin?: string;
  resume?: string;
};

type Profile = {
  name?: string;
  role?: string;
  description?: string;
  links?: ProfileLinks;
};

const parsed = load(rawProfile);
const profile: Profile = parsed && typeof parsed === "object" ? (parsed as Profile) : {};

export default profile;
