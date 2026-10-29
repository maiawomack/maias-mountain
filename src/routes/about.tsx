import { createFileRoute } from "@tanstack/react-router";
import headshot from "@/assets/maia-womack-photo.jpeg.asset.json";
import { SocialLinks } from "@/components/SiteChrome";
import { coursework, profile, skills } from "@/lib/resume";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Skills — Maia Womack" },
      {
        name: "description",
        content:
          "Education, coursework, technical skills, and contact details for Maia Womack, UW Computer Science & Physics student.",
      },
      { property: "og:title", content: "About & Skills — Maia Womack" },
      {
        property: "og:description",
        content: "The base lodge: education, coursework, skills, and how to reach me.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="eyebrow text-muted-foreground">Warm up · Gear up</p>
      <h1 className="mt-1 text-6xl font-black uppercase leading-none sm:text-7xl">Base Lodge</h1>

      <div className="mt-10 grid gap-8 md:grid-cols-[300px_1fr]">
        <div className="space-y-5">
          <div className="sign-lg p-3">
            <img
              src={headshot.url}
              alt="Portrait of Maia Womack"
              loading="lazy"
              className="aspect-square w-full rounded-sm object-cover object-top"
            />
          </div>
          <SocialLinks />
        </div>

        <div className="space-y-8">
          <section className="sign p-6">
            <h2 className="text-3xl font-black uppercase">Education</h2>
            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-lg font-semibold">{profile.school}</p>
              <span className="eyebrow text-muted-foreground">{profile.graduation}</span>
            </div>
            <p className="text-muted-foreground">
              {profile.degree} · {profile.location}
            </p>
            <p className="eyebrow mt-5 text-muted-foreground">Relevant coursework</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {coursework.map((c) => (
                <span key={c} className="rounded-sm border border-border bg-muted px-2 py-1 text-xs font-medium">
                  {c}
                </span>
              ))}
            </div>
          </section>

          <section className="sign p-6">
            <h2 className="text-3xl font-black uppercase">Gear Rack · Skills</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {skills.map((g) => (
                <div key={g.group}>
                  <p className="eyebrow text-primary">{g.group}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {g.items.map((s) => (
                      <span key={s} className="rounded-sm bg-secondary px-2 py-0.5 font-mono text-[0.72rem]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="sign bg-ink p-6 text-snow">
            <h2 className="text-3xl font-black uppercase">Ride the lift together</h2>
            <p className="mt-2 max-w-xl text-snow/80">
              Open to software engineering and product internships. The fastest way to reach me is
              email or LinkedIn.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-block font-display text-2xl font-black uppercase underline decoration-primary decoration-4 underline-offset-4"
            >
              {profile.email}
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
