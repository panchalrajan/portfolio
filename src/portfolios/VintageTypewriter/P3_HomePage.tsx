import { Github, Linkedin, Mail } from "lucide-react";
import profile from "@/data/profile";

const P3_HomePage = () => {
  const links = [
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "#" },
    { label: "About", href: "#" },
    { label: "News", href: "#" },
    { label: "Certificates", href: "#" },
    { label: "Skills", href: "#" },
    { label: "Resume", href: "#" },
  ];
  const contactLinks = [
    profile.links?.email
      ? { href: `mailto:${profile.links.email}`, Icon: Mail, label: "Email" }
      : null,
    profile.links?.github
      ? { href: profile.links.github, Icon: Github, label: "GitHub" }
      : null,
    profile.links?.linkedin
      ? { href: profile.links.linkedin, Icon: Linkedin, label: "LinkedIn" }
      : null,
  ].filter(Boolean) as Array<{ href: string; Icon: typeof Mail; label: string }>;

  return (
    <main className="h-full flex flex-col items-center justify-center px-6 bg-[#f4f1ea] font-mono-jb relative">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`
      }} />

      <div className="max-w-md w-full relative z-10">
        <div className="border-2 border-[#2c2c2c] p-8 bg-[#fffef9] shadow-md">
          {profile.name && (
            <h1 className="text-4xl font-bold text-[#2c2c2c] tracking-tight">
              {profile.name}
            </h1>
          )}
          {profile.role && (
            <p className="mt-2 text-[#8b7355] italic">{profile.role}</p>
          )}

          <div className="mt-6 w-full h-px bg-[#2c2c2c]" />

          {profile.description && (
            <p className="mt-6 text-[#4a4a4a] leading-relaxed text-sm">
              {profile.description}
            </p>
          )}

          <nav className="mt-6 space-y-2">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-[#2c2c2c] hover:text-[#8b7355] transition-colors text-sm hover:translate-x-2 transition-transform"
              >
                → {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 w-full h-px bg-[#2c2c2c]" />

          {contactLinks.length > 0 && (
            <div className="mt-6 flex gap-4">
              {contactLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-[#2c2c2c] hover:text-[#8b7355] transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default P3_HomePage;
