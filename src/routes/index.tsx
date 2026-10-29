import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github } from "lucide-react";
import headshot from "@/assets/maia-womack-photo.jpeg.asset.json";
import { TrailMap } from "@/components/TrailMap";
import { LensToggle } from "@/components/LensToggle";
import { SocialLinks } from "@/components/SiteChrome";
import { DifficultyIcon } from "@/components/DifficultyIcon";
import { useLens } from "@/lib/lens";
import { profile, trailsByDifficulty, difficultyLabel } from "@/lib/resume";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maia Womack — Trail Map of Projects" },
      {
        name: "description",
        content:
          "Explore Maia Womack's software, hardware, and product work as a ski trail map — from green circle builds to double black diamond projects.",
      },
      { property: "og:title", content: "Maia Womack — Trail Map of Projects" },
      {
        property: "og:description",
        content:
          "UW CS & Physics student building across software engineering and product. Every trail is a project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const taglines = {
  eng: {
    kicker: "Software · Firmware · Robotics",
    line: "I build things that move — from STM32 firmware on a rover arm to real-time AI agents that talk skiers down expert terrain.",
  },
  product: {
    kicker: "Product · Operations · Strategy",
    line: "I find the problem before the solution — interviewing users, digging through SQL, and shipping features customers asked for.",
  },
};

function Index() {
  const { lens } = useLens();
  const t = taglines[lens];

  return (
    <>
      <section className="topo relative overflow-hidden border-b-2 border-ink bg-sky">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr] md:py-20">
          <div>
            <p className="eyebrow text-primary">{t.kicker}</p>
            <h1 className="mt-3 text-6xl font-black uppercase leading-[0.85] sm:text-7xl lg:text-8xl">
              Maia
              <br />
              Womack
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed">{t.line}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              {profile.degree} · {profile.school} · {profile.graduation}
            </p>
            <div className="mt-7 flex flex-wrap items-end gap-6">
              <LensToggle />
              <SocialLinks />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="sign-lg rotate-2 p-3">
              <img
                src={headshot.url}
                alt="Portrait of Maia Womack"
                className="aspect-[4/5] w-full rounded-sm object-cover object-top"
              />
              <div className="flex items-center justify-between px-1 pt-3">
                <span className="font-display text-xl font-black uppercase">Lift Pass</span>
                <span className="eyebrow text-muted-foreground">Season 2026–27</span>
              </div>
            </div>
            <div className="sign absolute -left-4 -top-4 -rotate-6 bg-primary px-3 py-1.5 font-display text-lg font-black uppercase text-primary-foreground">
              Now open
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-muted-foreground">Trail map · Tap a run</p>
            <h2 className="mt-1 text-5xl font-black uppercase leading-none">The Mountain</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Each trail is a project, rated by how technically steep it was. Highlighted points
            match the line you've chosen above.
          </p>
        </div>
        <TrailMap />
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
        <p className="eyebrow text-muted-foreground">Today's grooming report</p>
        <h2 className="mt-1 text-4xl font-black uppercase leading-none">All Trails</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trailsByDifficulty().map((trail) => (
            <li key={trail.slug} className="sign flex items-start justify-between gap-3 p-4">
              <Link to="/trails/$slug" params={{ slug: trail.slug }} className="group flex-1">
                <div className="flex items-center gap-2">
                  <DifficultyIcon difficulty={trail.difficulty} />
                  <span className="eyebrow text-muted-foreground">
                    {difficultyLabel[trail.difficulty]}
                  </span>
                </div>
                <p className="mt-2 font-display text-2xl font-black uppercase leading-tight group-hover:text-primary">
                  {trail.name}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {trail.event} · {trail.crew}
                </p>
              </Link>
              <div className="flex flex-col items-end gap-2">
                {trail.repo && (
                  <a
                    href={trail.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${trail.name} repository on GitHub`}
                    className="rounded-sm border-2 border-ink p-1.5 hover:bg-secondary"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
