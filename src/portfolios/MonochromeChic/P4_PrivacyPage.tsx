import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { privacyPolicies } from "@/data/privacy";

const P4_PrivacyPage = () => {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);
  const policy = privacyPolicies.find((item) => item.id === projectId);
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16 bg-white font-outfit">
      <div className="max-w-2xl w-full">
        <header className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">AM</span>
          </div>
          <div>
            {project?.title && (
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                {project.title}
              </p>
            )}
            <h1 className="text-3xl font-bold text-black tracking-tight">
              Privacy Policy
            </h1>
            <a
              href="/projects"
              className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors"
            >
              Back to projects
            </a>
          </div>
        </header>

        <section className="text-sm text-gray-600">
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
    </main>
  );
};

export default P4_PrivacyPage;
