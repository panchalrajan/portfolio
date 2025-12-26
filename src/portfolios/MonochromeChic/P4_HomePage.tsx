import { Github, Linkedin, Mail, Circle } from "lucide-react";
import profile from "@/data/profile";

const P4_HomePage = () => {
  const links = [
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "#" },
    { label: "About", href: "#" },
    { label: "News", href: "#" },
    { label: "Certificates", href: "#" },
    { label: "Skills", href: "/skills" },
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
    <main className="h-full flex flex-col items-center justify-center px-6 bg-white font-outfit">
      <div className="max-w-md w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">JD</span>
          </div>
          <div>
            {profile.name && (
              <h1 className="text-2xl font-bold text-black tracking-tight">
                {profile.name}
              </h1>
            )}
            {profile.role && <p className="text-gray-400 text-sm">{profile.role}</p>}
          </div>
        </div>

        <div className="w-full h-px bg-black mb-8" />

        {profile.description && (
          <p className="text-gray-600 leading-relaxed text-sm mb-8">
            {profile.description}
          </p>
        )}

        <div className="space-y-3 mb-8">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.openInNewTab ? "_blank" : undefined}
              rel={item.openInNewTab ? "noreferrer" : undefined}
              className="flex items-center gap-3 text-black hover:text-gray-500 transition-colors group"
            >
              <Circle size={8} className="fill-black group-hover:fill-gray-500" />
              <span className="text-sm">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-black mb-8" />

        {contactLinks.length > 0 && (
          <div className="flex gap-5">
            {contactLinks.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-black hover:text-gray-400 transition-colors"
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

export default P4_HomePage;
