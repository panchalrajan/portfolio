import { skillsSections } from "@/data/skills";

const P2_SkillsPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16 bg-yellow-300 font-space">
      <div className="max-w-3xl w-full">
        <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <header className="border-b-4 border-black pb-6">
            <p className="text-xs font-bold uppercase">Skills</p>
            <a
              href="/"
              className="mt-3 inline-flex border-2 border-black px-3 py-1 font-bold hover:bg-black hover:text-yellow-300 transition-colors uppercase text-xs"
            >
              Back to Home
            </a>
          </header>

          <div className="mt-8 space-y-6">
            {skillsSections.map((section) => (
              <section key={section.id} className="border-2 border-black p-4">
                <h2 className="text-lg font-bold uppercase tracking-tight">
                  {section.title}
                </h2>
                {section.items && section.items.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <span
                        key={item}
                        className="border-2 border-black px-2 py-1 text-xs font-bold uppercase tracking-[0.2em]"
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
      </div>
    </main>
  );
};

export default P2_SkillsPage;
