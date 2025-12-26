import { certificates } from "@/data/certificates";

const P4_CertificatesPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16 bg-white font-outfit">
      <div className="max-w-2xl w-full">
        <header className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-black tracking-tight">
              Certificates
            </h1>
            <a
              href="/"
              className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors"
            >
              Back to home
            </a>
          </div>
        </header>

        <div className="space-y-6">
          {certificates.map((certificate) => (
            <article key={certificate.id} className="border-b border-black pb-4">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold text-black">
                  {certificate.title}
                </h2>
                {certificate.link && (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] uppercase tracking-[0.2em] text-black hover:text-gray-500 transition-colors border border-black/20 px-2 py-1 rounded-full"
                  >
                    View
                  </a>
                )}
              </div>
              {certificate.issuer && (
                <p className="mt-2 text-sm text-gray-500">{certificate.issuer}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default P4_CertificatesPage;
