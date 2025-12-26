import { certificates } from "@/data/certificates";

const P2_CertificatesPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16 bg-yellow-300 font-space">
      <div className="max-w-3xl w-full">
        <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <header className="border-b-4 border-black pb-6">
            <p className="text-xs font-bold uppercase">Certificates</p>
            <a
              href="/"
              className="mt-3 inline-flex border-2 border-black px-3 py-1 font-bold hover:bg-black hover:text-yellow-300 transition-colors uppercase text-xs"
            >
              Back to Home
            </a>
          </header>

          <div className="mt-8 space-y-6">
            {certificates.map((certificate) => (
              <article key={certificate.id} className="border-2 border-black p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-xl font-bold uppercase tracking-tight">
                    {certificate.title}
                  </h2>
                  {certificate.link && (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noreferrer"
                      className="border-2 border-black px-3 py-1 font-bold hover:bg-black hover:text-yellow-300 transition-colors uppercase text-[11px] tracking-[0.2em] rounded-full"
                    >
                      View
                    </a>
                  )}
                </div>
                {certificate.issuer && (
                  <p className="mt-3 text-xs font-bold uppercase">
                    {certificate.issuer}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default P2_CertificatesPage;
