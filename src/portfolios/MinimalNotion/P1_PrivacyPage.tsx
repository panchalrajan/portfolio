import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { privacyPolicies } from "@/data/privacy";

const P1_PrivacyPage = () => {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);
  const policy = privacyPolicies.find((item) => item.id === projectId);
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16 bg-white font-mono-jb">
      <div className="max-w-2xl w-full space-y-8">
        <header className="space-y-3">
          {project?.title && (
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              {project.title}
            </p>
          )}
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Privacy Policy
          </h1>
        </header>

        <section className="space-y-4 text-sm text-gray-600">
          {policy?.content && policy.content.length > 0 ? (
            <ul className="list-disc pl-5 space-y-3">
              {policy.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>Privacy details are not available yet.</p>
          )}
          <p className="pt-2 text-xs uppercase tracking-[0.2em] text-gray-500">
            Contact:{" "}
            <a
              href="mailto:panchal.rajan2k19@gmail.com"
              className="text-gray-700 hover:text-gray-900"
            >
              panchal.rajan2k19@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
};

export default P1_PrivacyPage;
