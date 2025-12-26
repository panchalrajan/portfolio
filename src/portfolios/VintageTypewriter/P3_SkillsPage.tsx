import { skillsSections } from "@/data/skills";

const P3_SkillsPage = () => {
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
            <p className="text-xs text-[#8b7355] italic">Skills</p>
            <h1 className="text-3xl font-bold text-[#2c2c2c] tracking-tight">
              Skills Ledger
            </h1>
            <a
              href="/"
              className="text-xs text-[#2c2c2c] hover:text-[#8b7355] transition-colors"
            >
              Back to home
            </a>
          </header>

          <div className="mt-6 w-full h-px bg-[#2c2c2c]" />

          <div className="mt-6 space-y-6">
            {skillsSections.map((section) => (
              <section key={section.id} className="space-y-2">
                <h2 className="text-sm uppercase tracking-[0.3em] text-[#8b7355]">
                  {section.title}
                </h2>
                {section.items && section.items.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] uppercase tracking-[0.2em] text-[#2c2c2c] border border-[#2c2c2c]/20 px-2 py-1 rounded-full"
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

export default P3_SkillsPage;
