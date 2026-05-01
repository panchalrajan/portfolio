import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { privacyPolicies } from "@/data/privacy";

const P2_PrivacyPage = () => {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);
  const policy = privacyPolicies.find((item) => item.id === projectId);
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16 bg-yellow-300 font-space">
      <div className="max-w-3xl w-full">
        <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <header className="border-b-4 border-black pb-6">
            {project?.title && (
              <p className="text-xs font-bold uppercase">{project.title}</p>
            )}
            <h1 className="mt-3 text-3xl md:text-5xl font-bold uppercase tracking-tighter text-black">
              Privacy Policy
            </h1>
            <a
              href="/projects"
              className="mt-4 inline-flex border-2 border-black px-3 py-1 font-bold hover:bg-black hover:text-yellow-300 transition-colors uppercase text-xs"
            >
              Back to Projects
            </a>
          </header>

          <section className="mt-6 text-sm font-medium uppercase">
            {policy?.content && policy.content.length > 0 ? (
              <ul className="list-disc pl-5 space-y-3">
                {policy.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>Privacy details are not available yet.</p>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default P2_PrivacyPage;
