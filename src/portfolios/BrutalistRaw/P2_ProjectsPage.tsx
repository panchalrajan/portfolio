import { projects } from "@/data/projects";

const P2_ProjectsPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16 bg-yellow-300 font-space">
      <div className="max-w-3xl w-full">
        <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <header className="border-b-4 border-black pb-6">
            <p className="text-3xl font-bold uppercase">Projects</p>
            <a
              href="/"
              className="mt-3 inline-flex border-2 border-black px-3 py-1 font-bold hover:bg-black hover:text-yellow-300 transition-colors uppercase text-xs"
            >
              Back to Home
            </a>
          </header>

          <div className="mt-8 space-y-6">
            {projects.map((project) => (
              <article key={project.id} className="border-2 border-black p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-xl font-bold uppercase tracking-tighter">
                    {project.title}
                  </h2>
                  {project.links && project.links.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          className="border-2 border-black px-3 py-1 font-bold hover:bg-black hover:text-yellow-300 transition-colors uppercase text-[11px] tracking-[0.2em] rounded-full"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                {project.summary && (
                  <p className="mt-3 text-sm font-medium uppercase">
                    {project.summary}
                  </p>
                )}
                {project.platforms && project.platforms.length > 0 && (
                  <p className="mt-3 text-xs font-bold uppercase">
                    {project.platforms.join(" / ")}
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

export default P2_ProjectsPage;
