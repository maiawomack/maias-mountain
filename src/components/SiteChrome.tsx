import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Mountain } from "lucide-react";
import { profile } from "@/lib/resume";

const nav = [
  { to: "/", label: "Trail Map" },
  { to: "/experience", label: "Lifts" },
  { to: "/about", label: "Base Lodge" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-snow/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-sm bg-ink text-snow">
            <Mountain className="h-5 w-5" />
          </span>
          <span className="font-display text-2xl font-black uppercase leading-none tracking-wide">
            Womack Peak
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-sm px-2 py-1 font-display text-base font-bold uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground sm:px-3 sm:text-lg"
              activeProps={{ className: "bg-ink text-snow hover:text-snow" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SocialLinks({ className = "" }: { className?: string }) {
  const links = [
    { href: profile.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: profile.github, label: "GitHub", icon: Github },
    { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
  ];
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="sign inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5"
        >
          <Icon className="h-4 w-4" />
          {label}
        </a>
      ))}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t-2 border-ink bg-ink text-snow">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-3xl font-black uppercase">Womack Peak</p>
          <p className="eyebrow mt-1 text-snow/60">Ski within your ability · Build beyond it</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="hover:underline">
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
