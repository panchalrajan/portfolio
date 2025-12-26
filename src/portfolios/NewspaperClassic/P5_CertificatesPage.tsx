import { certificates } from "@/data/certificates";

const P5_CertificatesPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16 bg-[#faf8f5] font-instrument">
      <div className="max-w-3xl w-full text-center">
        <p className="text-xs tracking-[0.5em] text-gray-400 uppercase border-b border-t border-gray-300 py-2">
          Certificates • Portfolio Edition
        </p>

        <h1
          className="mt-8 text-5xl md:text-6xl font-bold text-black tracking-tighter"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Credentials
        </h1>

        <a
          href="/"
          className="mt-4 inline-flex text-sm tracking-[0.3em] text-gray-500 uppercase hover:text-black transition-colors"
        >
          Back to home
        </a>

        <div className="mt-10 space-y-8 text-left">
          {certificates.map((certificate) => (
            <article key={certificate.id} className="border-b border-gray-300 pb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl font-bold text-black">
                  {certificate.title}
                </h2>
                {certificate.link && (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-colors border border-gray-300 px-2 py-1 rounded-full"
                  >
                    View
                  </a>
                )}
              </div>
              {certificate.issuer && (
                <p className="mt-3 text-sm text-gray-500">{certificate.issuer}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default P5_CertificatesPage;
