import { projects } from "@/data/projects";

const P5_ProjectsPage = () => {
  return (
    <main className="min-h-screen h-full overflow-y-auto flex flex-col items-center px-6 py-16 bg-[#faf8f5] font-instrument">
      <div className="max-w-3xl w-full text-center">
        <p className="text-xs tracking-[0.5em] text-gray-400 uppercase border-b border-t border-gray-300 py-2">
          Projects • Portfolio Edition
        </p>

        <h1
          className="mt-8 text-5xl md:text-6xl font-bold text-black tracking-tighter"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Project Ledger
        </h1>

        <a
          href="/"
          className="mt-4 inline-flex text-sm tracking-[0.3em] text-gray-500 uppercase hover:text-black transition-colors"
        >
          Back to home
        </a>

        <div className="mt-10 space-y-8 text-left">
          {projects.map((project) => (
            <article key={project.id} className="border-b border-gray-300 pb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-black">
                  {project.title}
                </h2>
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        className="text-[11px] uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-colors border border-gray-300 px-2 py-1 rounded-full"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              {project.summary && (
                <p
                  className="mt-3 text-gray-600 italic"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {project.summary}
                </p>
              )}
              {project.platforms && project.platforms.length > 0 && (
                <p className="mt-3 text-xs text-gray-400 uppercase tracking-widest">
                  {project.platforms.join(" • ")}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default P5_ProjectsPage;
