import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Github, Users, CalendarDays, Flag } from "lucide-react";
import mountainMap from "@/assets/mountain-map.jpg";
import { DifficultyIcon, trailStrokeClass } from "./DifficultyIcon";
import { BulletList } from "./BulletList";
import { trails, difficultyLabel, type Trail } from "@/lib/resume";
import { cn } from "@/lib/utils";

const W = 1920;
const H = 1200;

export function TrailMap() {
  const [selected, setSelected] = useState<string>(trails[0]!.slug);
  const [hovered, setHovered] = useState<string | null>(null);
  const active = trails.find((t) => t.slug === selected) ?? trails[0]!;
  const focus = hovered ?? selected;

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
      <div className="sign-lg overflow-hidden p-0">
        <div className="overflow-x-auto">
          <div className="relative min-w-[720px]" style={{ aspectRatio: `${W} / ${H}` }}>
            <img
              src={mountainMap}
              alt="Painted trail map of Womack Peak"
              width={W}
              height={H}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              {trails.map((t) => {
                const isFocus = focus === t.slug;
                const dimmed = focus && !isFocus;
                return (
                  <g
                    key={t.slug}
                    className="cursor-pointer"
                    onMouseEnter={() => setHovered(t.slug)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setSelected(t.slug)}
                    style={{ opacity: dimmed ? 0.8 : 1, transition: "opacity 200ms" }}
                  >
                    {/* snow casing */}
                    <path
                      d={t.path}
                      className="trail-path stroke-snow"
                      strokeWidth={isFocus ? 34 : 24}
                      opacity={0.9}
                    />
                    <path
                      d={t.path}
                      className={cn("trail-path", trailStrokeClass[t.difficulty])}
                      strokeWidth={isFocus ? 20 : 13}
                      strokeDasharray={t.closed ? "4 26" : undefined}
                    />
                    {isFocus && (
                      <path
                        d={t.path}
                        className="trail-path trail-flow stroke-snow"
                        strokeWidth={5}
                        opacity={0.85}
                      />
                    )}
                    {/* generous hit area */}
                    <path d={t.path} className="trail-path stroke-transparent" strokeWidth={60} />
                  </g>
                );
              })}
              {/* Summit marker */}
              <g transform="translate(985 70)">
                <path d="M0 -26 L0 4" className="stroke-ink" strokeWidth={4} />
                <path d="M0 -26 L26 -18 L0 -10 Z" className="fill-primary" />
              </g>
            </svg>

            {trails.map((t) => (
              <button
                key={t.slug}
                type="button"
                onClick={() => setSelected(t.slug)}
                onMouseEnter={() => setHovered(t.slug)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(t.slug)}
                onBlur={() => setHovered(null)}
                aria-pressed={selected === t.slug}
                aria-label={`${t.name}, ${difficultyLabel[t.difficulty]}`}
                className={cn(
                  "absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-sm border-2 border-ink bg-snow px-2 py-1 font-display text-sm font-extrabold uppercase tracking-wide shadow-[var(--shadow-sign)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-base",
                  selected === t.slug && "scale-105 bg-ink text-snow",
                )}
                style={{ left: `${(t.label.x / W) * 100}%`, top: `${(t.label.y / H) * 100}%` }}
              >
                <DifficultyIcon difficulty={t.difficulty} title={false} className="h-4" />
                {t.name}
                {t.closed && (
                  <span className="ml-1 rounded-sm bg-primary px-1 text-[0.65rem] text-primary-foreground">
                    Closed
                  </span>
                )}
              </button>
            ))}

            <div className="pointer-events-none absolute left-[54%] top-[3.5%] text-left">
              <p className="font-display text-xl font-black uppercase tracking-[0.2em] text-ink/80 md:text-2xl">
                Summit
              </p>
            </div>

            <Legend />
          </div>
        </div>
      </div>

      <TrailSign trail={active} />
    </div>
  );
}

function Legend() {
  const items = ["green", "blue", "black", "double-black"] as const;
  return (
    <div className="absolute bottom-3 left-3 hidden rounded-sm border-2 border-ink bg-snow/95 p-3 md:block">
      <p className="eyebrow mb-2 text-muted-foreground">Trail difficulty</p>
      <ul className="space-y-1.5">
        {items.map((d) => (
          <li key={d} className="flex items-center gap-2 text-xs font-semibold">
            <span className="flex w-9 justify-center">
              <DifficultyIcon difficulty={d} title={false} className="h-4" />
            </span>
            {difficultyLabel[d]}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TrailSign({ trail }: { trail: Trail }) {
  return (
    <aside className="sign-lg flex flex-col p-5" aria-live="polite">
      <div className="flex items-center gap-2">
        <DifficultyIcon difficulty={trail.difficulty} />
        <span className="eyebrow text-muted-foreground">{difficultyLabel[trail.difficulty]}</span>
      </div>
      <h3 className="mt-2 text-4xl font-black uppercase leading-none">{trail.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{trail.summary}</p>

      <dl className="mt-4 grid grid-cols-3 gap-2 border-y-2 border-dashed border-border py-3 text-xs">
        <div>
          <dt className="eyebrow flex items-center gap-1 text-muted-foreground">
            <Flag className="h-3 w-3" /> Event
          </dt>
          <dd className="mt-1 font-semibold">{trail.event}</dd>
        </div>
        <div>
          <dt className="eyebrow flex items-center gap-1 text-muted-foreground">
            <Users className="h-3 w-3" /> Crew
          </dt>
          <dd className="mt-1 font-semibold">{trail.crew}</dd>
        </div>
        <div>
          <dt className="eyebrow flex items-center gap-1 text-muted-foreground">
            <CalendarDays className="h-3 w-3" /> Year
          </dt>
          <dd className="mt-1 font-semibold">{trail.year}</dd>
        </div>
      </dl>

      {trail.closed ? (
        <p className="mt-4 rounded-sm border-2 border-dashed border-primary p-3 text-sm font-semibold text-primary">
          Trail closed. More coursework projects coming soon.
        </p>
      ) : (
        <BulletList bullets={trail.bullets} className="mt-4" />
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {trail.stack.map((s) => (
          <span key={s} className="rounded-sm bg-secondary px-2 py-0.5 font-mono text-[0.7rem]">
            {s}
          </span>
        ))}
      </div>

      {!trail.closed && <div className="mt-auto flex flex-wrap gap-2 pt-5">
        <Link
          to="/trails/$slug"
          params={{ slug: trail.slug }}
          className="inline-flex items-center gap-2 rounded-sm border-2 border-ink bg-primary px-3 py-2 text-sm font-bold text-primary-foreground shadow-[var(--shadow-sign)] transition-transform hover:-translate-y-0.5"
        >
          Trail report <ArrowRight className="h-4 w-4" />
        </Link>
        {trail.repo ? (
          <a
            href={trail.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border-2 border-ink bg-snow px-3 py-2 text-sm font-bold shadow-[var(--shadow-sign)] transition-transform hover:-translate-y-0.5"
          >
            <Github className="h-4 w-4" /> Repository
          </a>
        ) : (
          <span className="inline-flex items-center px-1 text-xs text-muted-foreground">
            No public repo (hardware / private)
          </span>
        )}
      </div>}
    </aside>
  );
}
