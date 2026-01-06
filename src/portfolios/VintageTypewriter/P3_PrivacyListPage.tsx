import { projects } from "@/data/projects";
import { privacyPolicies } from "@/data/privacy";

const P3_PrivacyListPage = () => {
  const policiesById = new Map(privacyPolicies.map((policy) => [policy.id, policy]));

  return (
    <main className="min-h-screen h-full overflow-y-auto flex flex-col items-center px-6 py-16 bg-[#f4f1ea] font-mono-jb relative">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="max-w-xl w-full relative z-10">
        <div className="border-2 border-[#2c2c2c] p-8 bg-[#fffef9] shadow-md">
          <header className="space-y-3">
            <p className="text-xs text-[#8b7355] italic">Privacy</p>
            <h1 className="text-4xl font-bold text-[#2c2c2c] tracking-tight">
              Privacy Ledger
            </h1>
            <a
              href="/"
              className="text-xs text-[#2c2c2c] hover:text-[#8b7355] transition-colors"
            >
              Back to home
            </a>
          </header>

          <div className="mt-6 w-full h-px bg-[#2c2c2c]" />

          <div className="mt-6 space-y-6">
            {projects.map((project) => {
              const policy = policiesById.get(project.id);
              return (
                <article key={project.id} className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-xl font-bold text-[#2c2c2c]">
                      {project.title}
                    </h2>
                    <a
                      href={`/privacy/${project.id}`}
                      className="text-[11px] uppercase tracking-[0.2em] text-[#2c2c2c] hover:text-[#8b7355] transition-colors border border-[#2c2c2c]/20 px-2 py-1 rounded-full"
                    >
                      View policy
                    </a>
                  </div>
                  {project.summary && (
                    <p className="text-sm text-[#4a4a4a]">{project.summary}</p>
                  )}
                  <p className="text-xs text-[#8b7355] uppercase tracking-widest">
                    {policy ? "Policy available" : "Policy pending"}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default P3_PrivacyListPage;
