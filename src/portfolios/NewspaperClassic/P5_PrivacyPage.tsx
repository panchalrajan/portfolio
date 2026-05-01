import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { privacyPolicies } from "@/data/privacy";

const P5_PrivacyPage = () => {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);
  const policy = privacyPolicies.find((item) => item.id === projectId);
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16 bg-[#faf8f5] font-instrument">
      <div className="max-w-3xl w-full text-center">
        <p className="text-xs tracking-[0.5em] text-gray-400 uppercase border-b border-t border-gray-300 py-2">
          {project?.title ? `${project.title} • Privacy` : "Privacy"}
        </p>

        <h1
          className="mt-8 text-5xl md:text-6xl font-bold text-black tracking-tighter"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Privacy Policy
        </h1>

        <a
          href="/projects"
          className="mt-4 inline-flex text-sm tracking-[0.3em] text-gray-500 uppercase hover:text-black transition-colors"
        >
          Back to projects
        </a>

        <div className="mt-10 text-left text-gray-600">
          {policy?.content && policy.content.length > 0 ? (
            <ul className="list-disc pl-5 space-y-3">
              {policy.content.map((item, index) => (
                <li key={index} style={{ fontFamily: "Georgia, serif" }}>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ fontFamily: "Georgia, serif" }}>
              Privacy details are not available yet.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default P5_PrivacyPage;
