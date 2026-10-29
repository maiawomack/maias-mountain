import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Github } from "lucide-react";
import { DifficultyIcon } from "@/components/DifficultyIcon";
import { BulletList } from "@/components/BulletList";
import { LensToggle } from "@/components/LensToggle";
import { difficultyLabel, getTrail, trailsByDifficulty } from "@/lib/resume";

export const Route = createFileRoute("/trails/$slug")({
  loader: ({ params }) => {
    const trail = getTrail(params.slug);
    if (!trail) throw notFound();
    return { trail };
  },
  head: ({ loaderData }) => {
    const trail = loaderData?.trail;
    if (!trail) {
      return { meta: [{ title: "Trail closed — Maia Womack" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${trail.name} (${difficultyLabel[trail.difficulty]}) — Maia Womack`;
    return {
      meta: [
        { title },
        { name: "description", content: trail.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: trail.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: TrailPage,
});

function TrailPage() {
  const { trail } = Route.useLoaderData();
  const all = trailsByDifficulty();
  const idx = all.findIndex((t) => t.slug === trail.slug);
  const next = all[(idx + 1) % all.length] ?? all[0]!;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to the trail map
      </Link>

      <article className="sign-lg mt-6 overflow-hidden">
        <header className="topo border-b-2 border-ink bg-sky p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <DifficultyIcon difficulty={trail.difficulty} className="h-7" />
            <span className="eyebrow">{difficultyLabel[trail.difficulty]}</span>
          </div>
          <h1 className="mt-3 text-5xl font-black uppercase leading-[0.9] sm:text-7xl">
            {trail.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">{trail.summary}</p>
        </header>

        <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_220px]">
          <div>
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="text-3xl font-black uppercase">Run notes</h2>
            </div>
            {trail.closed ? (
              <p className="rounded-sm border-2 border-dashed border-primary p-4 font-semibold text-primary">
                Trail closed. More coursework projects coming soon.
              </p>
            ) : (
              <BulletList bullets={trail.bullets} />
            )}
            <div className="mt-8">
              <LensToggle />
            </div>
          </div>

          <aside className="space-y-5 text-sm">
            <div>
              <p className="eyebrow text-muted-foreground">Event</p>
              <p className="mt-1 font-semibold">{trail.event}</p>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground">Crew</p>
              <p className="mt-1 font-semibold">{trail.crew}</p>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground">Year</p>
              <p className="mt-1 font-semibold">{trail.year}</p>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground">Gear</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {trail.stack.map((s) => (
                  <span key={s} className="rounded-sm bg-secondary px-2 py-0.5 font-mono text-[0.7rem]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            {trail.repo ? (
              <a
                href={trail.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border-2 border-ink bg-primary px-3 py-2 font-bold text-primary-foreground shadow-[var(--shadow-sign)] transition-transform hover:-translate-y-0.5"
              >
                <Github className="h-4 w-4" /> View repository
              </a>
            ) : (
              <p className="text-xs text-muted-foreground">No public repository for this run.</p>
            )}
          </aside>
        </div>
      </article>

      <Link
        to="/trails/$slug"
        params={{ slug: next.slug }}
        className="sign mt-8 flex items-center justify-between gap-4 p-4 transition-transform hover:-translate-y-0.5"
      >
        <span className="eyebrow text-muted-foreground">Next run</span>
        <span className="flex items-center gap-2 font-display text-2xl font-black uppercase">
          <DifficultyIcon difficulty={next.difficulty} /> {next.name}
        </span>
      </Link>
    </div>
  );
}
