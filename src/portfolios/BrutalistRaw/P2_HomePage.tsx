import { Github, Linkedin, Mail } from "lucide-react";
import profile from "@/data/profile";

const P2_HomePage = () => {
  const nameParts = profile.name ? profile.name.split(" ") : [];
  const firstName = nameParts[0] ?? "";
  const lastName = nameParts.slice(1).join(" ");
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
    <main className="h-full flex flex-col items-center justify-center px-6 bg-yellow-300 font-space">
      <div className="max-w-2xl w-full">
        <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {profile.name && (
            <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-black leading-none">
              {firstName}
              {lastName && (
                <>
                  <br />
                  {lastName}
                </>
              )}
            </h1>
          )}
          
          <div className="mt-6 border-t-4 border-black pt-6">
            {profile.role && (
              <p className="text-xl font-bold uppercase">{profile.role}</p>
            )}
          </div>

          {profile.description && (
            <p className="mt-6 text-lg leading-tight">{profile.description}</p>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "PROJECTS", href: "/projects" },
              { label: "BLOG", href: "#" },
              { label: "ABOUT", href: "#" },
              { label: "NEWS", href: "#" },
              { label: "CERTIFICATES", href: "#" },
              { label: "SKILLS", href: "/skills" },
              profile.links?.resume
                ? {
                    label: "RESUME",
                    href: profile.links.resume,
                    openInNewTab: true,
                  }
                : null,
            ]
              .filter(Boolean)
              .map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.openInNewTab ? "_blank" : undefined}
                rel={item.openInNewTab ? "noreferrer" : undefined}
                className="border-2 border-black px-4 py-2 font-bold hover:bg-black hover:text-yellow-300 transition-colors uppercase text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          {contactLinks.length > 0 && (
            <div className="mt-8 flex gap-4">
              {contactLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-black p-2 hover:bg-black hover:text-yellow-300 transition-colors"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default P2_HomePage;
