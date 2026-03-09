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

const normalizeContent = (content: unknown): string[] => {
  if (!Array.isArray(content)) {
    return [];
  }

  return content.flatMap((item) => {
    if (typeof item === "string") {
      return [item];
    }

    if (item && typeof item === "object") {
      return Object.entries(item as Record<string, unknown>).map(([key, value]) =>
        typeof value === "string" ? `${key}: ${value}` : key,
      );
    }

    return [];
  });
};

const parsed = load(rawPrivacy);
const privacyData: PrivacyData =
  parsed && typeof parsed === "object" ? (parsed as PrivacyData) : {};

export const privacyPolicies = (privacyData.policies ?? []).map((policy) => ({
  ...policy,
  content: normalizeContent(policy.content),
}));

export const hiddenPrivacyPolicyIds = new Set(
  privacyPolicies
    .filter((policy) => policy.hidden === true)
    .map((policy) => policy.id),
);
