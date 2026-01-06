import { projects } from "@/data/projects";

const P4_ProjectsPage = () => {
  return (
    <main className="min-h-screen h-full overflow-y-auto flex flex-col items-center px-6 py-16 bg-white font-outfit">
      <div className="max-w-2xl w-full">
        <header className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-black tracking-tight">Projects</h1>
            <a
              href="/"
              className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors"
            >
              Back to home
            </a>
          </div>
        </header>

        <div className="space-y-6">
          {projects.map((project) => (
            <article key={project.id} className="border-b border-black pb-4">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold text-black">
                  {project.title}
                </h2>
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        className="text-[11px] uppercase tracking-[0.2em] text-black hover:text-gray-500 transition-colors border border-black/20 px-2 py-1 rounded-full"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              {project.summary && (
                <p className="mt-2 text-sm text-gray-600">{project.summary}</p>
              )}
              {project.platforms && project.platforms.length > 0 && (
                <p className="mt-2 text-xs text-gray-400 uppercase tracking-widest">
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

export default P4_ProjectsPage;
