import { projects } from "@/data/projects";
import { privacyPolicies } from "@/data/privacy";

const P2_PrivacyListPage = () => {
  const policiesById = new Map(privacyPolicies.map((policy) => [policy.id, policy]));

  return (
    <main className="min-h-screen h-full overflow-y-auto flex flex-col items-center px-6 py-16 bg-yellow-300 font-space">
      <div className="max-w-3xl w-full">
        <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <header className="border-b-4 border-black pb-6">
            <p className="text-3xl font-bold uppercase">Privacy</p>
            <a
              href="/"
              className="mt-3 inline-flex border-2 border-black px-3 py-1 font-bold hover:bg-black hover:text-yellow-300 transition-colors uppercase text-xs"
            >
              Back to Home
            </a>
          </header>

          <div className="mt-8 space-y-6">
            {projects.map((project) => {
              const policy = policiesById.get(project.id);
              return (
                <article key={project.id} className="border-2 border-black p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-xl font-bold uppercase tracking-tighter">
                      {project.title}
                    </h2>
                    <a
                      href={`/privacy/${project.id}`}
                      className="border-2 border-black px-3 py-1 font-bold hover:bg-black hover:text-yellow-300 transition-colors uppercase text-[11px] tracking-[0.2em] rounded-full"
                    >
                      View policy
                    </a>
                  </div>
                  {project.summary && (
                    <p className="mt-3 text-sm font-medium uppercase">
                      {project.summary}
                    </p>
                  )}
                  <p className="mt-3 text-xs font-bold uppercase">
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

export default P2_PrivacyListPage;
