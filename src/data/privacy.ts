import { load } from "js-yaml";
import rawPrivacy from "./privacy.yaml?raw";

type PrivacyPolicy = {
  id: string;
  title?: string;
  content?: string[];
};

type PrivacyData = {
  policies?: PrivacyPolicy[];
};

const parsed = load(rawPrivacy);
const privacyData: PrivacyData =
  parsed && typeof parsed === "object" ? (parsed as PrivacyData) : {};

export const privacyPolicies = privacyData.policies ?? [];
