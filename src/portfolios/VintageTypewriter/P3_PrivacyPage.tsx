import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { privacyPolicies } from "@/data/privacy";

const P3_PrivacyPage = () => {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);
  const policy = privacyPolicies.find((item) => item.id === projectId);
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16 bg-[#f4f1ea] font-mono-jb relative">
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
            {project?.title && (
              <p className="text-xs text-[#8b7355] italic">{project.title}</p>
            )}
            <h1 className="text-3xl font-bold text-[#2c2c2c] tracking-tight">
              Privacy Policy
            </h1>
            <a
              href="/projects"
              className="text-xs text-[#2c2c2c] hover:text-[#8b7355] transition-colors"
            >
              Back to projects
            </a>
          </header>

          <div className="mt-6 w-full h-px bg-[#2c2c2c]" />

          <section className="mt-6 text-sm text-[#4a4a4a]">
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

export default P3_PrivacyPage;
