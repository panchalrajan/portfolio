import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const P1_ProjectsPage = () => {
  return (
    <main className="min-h-screen h-full overflow-y-auto flex flex-col items-center px-6 py-16 bg-white font-mono-jb">
      <div className="max-w-2xl w-full space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Projects
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
          {projects.map((project) => (
            <article key={project.id} className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h2>
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap items-center gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        className="text-[11px] uppercase tracking-[0.2em] text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1 border border-gray-200 px-2 py-1 rounded-full"
                      >
                        {link.label}
                        <ArrowUpRight size={12} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
              {project.summary && (
                <p className="text-sm text-gray-500">{project.summary}</p>
              )}
              {project.platforms && project.platforms.length > 0 && (
                <p className="text-xs text-gray-400 uppercase tracking-widest">
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

export default P1_ProjectsPage;
