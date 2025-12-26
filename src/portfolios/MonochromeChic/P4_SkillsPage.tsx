import { skillsSections } from "@/data/skills";

const P4_SkillsPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16 bg-white font-outfit">
      <div className="max-w-2xl w-full">
        <header className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-black tracking-tight">Skills</h1>
            <a
              href="/"
              className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors"
            >
              Back to home
            </a>
          </div>
        </header>

        <div className="space-y-6">
          {skillsSections.map((section) => (
            <section key={section.id} className="border-b border-black pb-4">
              <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400">
                {section.title}
              </h2>
              {section.items && section.items.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] uppercase tracking-[0.2em] text-black border border-black/20 px-2 py-1 rounded-full"
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

export default P4_SkillsPage;
