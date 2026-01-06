import { projects } from "@/data/projects";
import { privacyPolicies } from "@/data/privacy";

const P5_PrivacyListPage = () => {
  const policiesById = new Map(privacyPolicies.map((policy) => [policy.id, policy]));

  return (
    <main className="min-h-screen h-full overflow-y-auto flex flex-col items-center px-6 py-16 bg-[#faf8f5] font-instrument">
      <div className="max-w-3xl w-full text-center">
        <p className="text-xs tracking-[0.5em] text-gray-400 uppercase border-b border-t border-gray-300 py-2">
          Privacy • Portfolio Edition
        </p>

        <h1
          className="mt-8 text-5xl md:text-6xl font-bold text-black tracking-tighter"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Privacy Ledger
        </h1>

        <a
          href="/"
          className="mt-4 inline-flex text-sm tracking-[0.3em] text-gray-500 uppercase hover:text-black transition-colors"
        >
          Back to home
        </a>

        <div className="mt-10 space-y-8 text-left">
          {projects.map((project) => {
            const policy = policiesById.get(project.id);
            return (
              <article key={project.id} className="border-b border-gray-300 pb-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-2xl font-bold text-black">
                    {project.title}
                  </h2>
                  <a
                    href={`/privacy/${project.id}`}
                    className="text-[11px] uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-colors border border-gray-300 px-2 py-1 rounded-full"
                  >
                    View policy
                  </a>
                </div>
                {project.summary && (
                  <p
                    className="mt-3 text-gray-600 italic"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {project.summary}
                  </p>
                )}
                <p className="mt-3 text-xs text-gray-400 uppercase tracking-widest">
                  {policy ? "Policy available" : "Policy pending"}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default P5_PrivacyListPage;
