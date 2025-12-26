import { ArrowUpRight } from "lucide-react";
import { certificates } from "@/data/certificates";

const P1_CertificatesPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16 bg-white font-mono-jb">
      <div className="max-w-2xl w-full space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Certificates
          </h1>
          <a
            href="/"
            className="text-xs uppercase tracking-[0.3em] text-gray-400 hover:text-gray-900 transition-colors inline-flex items-center gap-1"
          >
            Back to home
            <ArrowUpRight size={12} />
          </a>
        </header>

        <div className="space-y-6">
          {certificates.map((certificate) => (
            <article key={certificate.id} className="space-y-2">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  {certificate.title}
                </h2>
                {certificate.link && (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors inline-flex items-center gap-1"
                  >
                    View
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
              {certificate.issuer && (
                <p className="text-sm text-gray-500">{certificate.issuer}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default P1_CertificatesPage;
