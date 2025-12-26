import { ArrowUpRight } from "lucide-react";
import { skillsSections } from "@/data/skills";

const P1_SkillsPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16 bg-white font-mono-jb">
      <div className="max-w-2xl w-full space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Skills
          </h1>
          <a
            href="/"
            className="text-xs uppercase tracking-[0.3em] text-gray-400 hover:text-gray-900 transition-colors inline-flex items-center gap-1"
          >
            Back to home
            <ArrowUpRight size={12} />
          </a>
        </header>

        <div className="space-y-8">
          {skillsSections.map((section) => (
            <section key={section.id} className="space-y-3">
              <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400">
                {section.title}
              </h2>
              {section.items && section.items.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs uppercase tracking-[0.2em] text-gray-600 border border-gray-200 px-2 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default P1_SkillsPage;
