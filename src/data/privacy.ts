import { load } from "js-yaml";
import rawPrivacy from "./privacy.yaml?raw";

type PrivacyPolicy = {
  id: string;
  title?: string;
  content?: string[];
  hidden?: boolean;
};

type PrivacyData = {
  policies?: PrivacyPolicy[];
};

const parsed = load(rawPrivacy);
const privacyData: PrivacyData =
  parsed && typeof parsed === "object" ? (parsed as PrivacyData) : {};

export const privacyPolicies = privacyData.policies ?? [];

export const hiddenPrivacyPolicyIds = new Set(
  privacyPolicies
    .filter((policy) => policy.hidden === true)
    .map((policy) => policy.id),
);
