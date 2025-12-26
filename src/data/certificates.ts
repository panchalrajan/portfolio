import { load } from "js-yaml";
import rawCertificates from "./certificates.yaml?raw";

type Certificate = {
  id: string;
  title: string;
  issuer?: string;
  link?: string;
};

type CertificatesData = {
  certificates?: Certificate[];
};

const parsed = load(rawCertificates);
const certificatesData: CertificatesData =
  parsed && typeof parsed === "object" ? (parsed as CertificatesData) : {};

export const certificates = certificatesData.certificates ?? [];
