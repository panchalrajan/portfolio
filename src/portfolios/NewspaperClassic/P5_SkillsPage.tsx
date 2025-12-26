import { skillsSections } from "@/data/skills";

const P5_SkillsPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16 bg-[#faf8f5] font-instrument">
      <div className="max-w-3xl w-full text-center">
        <p className="text-xs tracking-[0.5em] text-gray-400 uppercase border-b border-t border-gray-300 py-2">
          Skills • Portfolio Edition
        </p>

        <h1
          className="mt-8 text-5xl md:text-6xl font-bold text-black tracking-tighter"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Skill Index
        </h1>

        <a
          href="/"
          className="mt-4 inline-flex text-sm tracking-[0.3em] text-gray-500 uppercase hover:text-black transition-colors"
        >
          Back to home
        </a>

        <div className="mt-10 space-y-8 text-left">
          {skillsSections.map((section) => (
            <section key={section.id} className="border-b border-gray-300 pb-6">
              <h2 className="text-sm tracking-[0.3em] text-gray-500 uppercase">
                {section.title}
              </h2>
              {section.items && section.items.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] uppercase tracking-[0.2em] text-gray-600 border border-gray-300 px-2 py-1 rounded-full"
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

export default P5_SkillsPage;
