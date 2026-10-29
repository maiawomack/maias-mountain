import { createFileRoute } from "@tanstack/react-router";
import { BulletList } from "@/components/BulletList";
import { LensToggle } from "@/components/LensToggle";
import { experience, leadership, type Role } from "@/lib/resume";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Maia Womack" },
      {
        name: "description",
        content:
          "Maia Womack's experience in firmware engineering at Husky Robotics, product and operations at DAT Freight & Analytics, and leadership at CSEED.",
      },
      { property: "og:title", content: "Experience — Maia Womack" },
      {
        property: "og:description",
        content: "The lifts that got me up the mountain: engineering, product, and leadership roles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencePage,
});

function RoleCard({ role, index, prefix }: { role: Role; index: number; prefix: string }) {
  return (
    <li className="relative pl-14">
      <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-primary font-display text-lg font-black text-primary-foreground">
        {prefix}
        {index + 1}
      </span>
      <div className="sign p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-3xl font-black uppercase leading-none">{role.title}</h3>
          <span className="eyebrow text-muted-foreground">{role.dates}</span>
        </div>
        <p className="mt-1 font-semibold text-accent">{role.org}</p>
        <BulletList bullets={role.bullets} className="mt-4" />
      </div>
    </li>
  );
}

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow text-muted-foreground">3 roles · 3 leadership positions</p>
          <h1 className="mt-1 text-6xl font-black uppercase leading-none sm:text-7xl">The Lifts</h1>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Work and leadership roles. The toggle highlights engineering or product points.
          </p>
        </div>
        <LensToggle />
      </div>

      <section className="mt-12">
        <h2 className="text-4xl font-black uppercase">Experience</h2>
        <ol className="relative mt-6 space-y-8 before:absolute before:bottom-4 before:left-5 before:top-4 before:w-0.5 before:bg-ink before:content-['']">
          {experience.map((r, i) => (
            <RoleCard key={r.org + r.title} role={r} index={i} prefix="L" />
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="text-4xl font-black uppercase">Ski Patrol · Leadership</h2>
        <ol className="relative mt-6 space-y-8 before:absolute before:bottom-4 before:left-5 before:top-4 before:w-0.5 before:bg-ink before:content-['']">
          {leadership.map((r, i) => (
            <RoleCard key={r.org + r.title} role={r} index={i} prefix="P" />
          ))}
        </ol>
      </section>
    </div>
  );
}
