import { Github, Linkedin, Mail } from "lucide-react";
import profile from "@/data/profile";

const P5_HomePage = () => {
  const links = [
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "#" },
    { label: "About", href: "#" },
    { label: "News", href: "#" },
    { label: "Certificates", href: "#" },
    { label: "Skills", href: "#" },
    profile.links?.resume
      ? { label: "Resume", href: profile.links.resume, openInNewTab: true }
      : null,
  ].filter(Boolean) as Array<{ label: string; href: string; openInNewTab?: boolean }>;
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
    <main className="h-full flex flex-col items-center justify-center px-6 bg-[#faf8f5] font-instrument relative">
      <div className="max-w-lg w-full text-center">
        <p className="text-xs tracking-[0.5em] text-gray-400 uppercase border-b border-t border-gray-300 py-2">
          Est. 2023 • Developer Portfolio • Issue No. 001
        </p>

        {profile.name && (
          <h1
            className="mt-8 text-6xl md:text-7xl font-bold text-black tracking-tighter"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {profile.name}
          </h1>
        )}
        
        {profile.role && (
          <p className="mt-4 text-sm tracking-[0.3em] text-gray-500 uppercase">
            {profile.role}
          </p>
        )}

        <div className="mt-6 flex justify-center">
          <div className="w-16 h-0.5 bg-black" />
        </div>

        {profile.description && (
          <p
            className="mt-6 text-gray-600 leading-relaxed italic max-w-sm mx-auto"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {profile.description}
          </p>
        )}

        <nav className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          {links.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              target={item.openInNewTab ? "_blank" : undefined}
              rel={item.openInNewTab ? "noreferrer" : undefined}
              className="text-gray-600 hover:text-black transition-colors"
            >
              {item.label}
              {i < links.length - 1 && <span className="ml-4 text-gray-300">|</span>}
            </a>
          ))}
        </nav>

        {contactLinks.length > 0 && (
          <div className="mt-8 flex justify-center gap-5">
            {contactLinks.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-black transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        )}

        <p className="mt-8 text-xs text-gray-400 border-t border-gray-300 pt-4">
          © 2026 All Rights Reserved
        </p>
      </div>
    </main>
  );
};

export default P5_HomePage;
