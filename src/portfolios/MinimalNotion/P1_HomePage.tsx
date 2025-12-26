import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import profile from "@/data/profile";

const P1_HomePage = () => {
  const navLinks = [
    { label: "projects", href: "/projects" },
    { label: "blog", href: "#" },
    { label: "about", href: "#" },
    { label: "what's new", href: "#" },
    { label: "certificates", href: "#" },
    { label: "skills", href: "#" },
    profile.links?.resume
      ? { label: "resume", href: profile.links.resume, openInNewTab: true }
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
    <main className="h-full flex flex-col items-center justify-center px-6 bg-white font-mono-jb">
      <div className="max-w-md w-full space-y-8">
        <header className="space-y-3">
          {profile.name && (
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
              {profile.name}
            </h1>
          )}
          {profile.role && <p className="text-sm text-gray-500">{profile.role}</p>}
        </header>

        <div className="w-8 h-px bg-gray-200" />

        {profile.description && (
          <p className="text-sm leading-relaxed text-gray-500">{profile.description}</p>
        )}

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.openInNewTab ? "_blank" : undefined}
              rel={link.openInNewTab ? "noreferrer" : undefined}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1 group"
            >
              {link.label}
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </nav>

        <div className="w-8 h-px bg-gray-200" />

        {contactLinks.length > 0 && (
          <div className="flex items-center gap-5">
            {contactLinks.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label={label}
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default P1_HomePage;
