import type { Difficulty } from "@/lib/resume";
import { difficultyLabel } from "@/lib/resume";
import { cn } from "@/lib/utils";

interface Props {
  difficulty: Difficulty;
  className?: string;
  title?: boolean;
}

/** Standard North American ski-trail difficulty symbols. */
export function DifficultyIcon({ difficulty, className, title = true }: Props) {
  const label = difficultyLabel[difficulty];
  return (
    <svg
      viewBox={difficulty === "double-black" ? "0 0 44 24" : "0 0 24 24"}
      className={cn(difficulty === "double-black" ? "h-5 w-9" : "h-5 w-5", className)}
      role={title ? "img" : undefined}
      aria-label={title ? label : undefined}
      aria-hidden={title ? undefined : true}
    >
      {difficulty === "green" && (
        <circle cx="12" cy="12" r="10" className="fill-trail-green stroke-snow" strokeWidth="1.5" />
      )}
      {difficulty === "blue" && (
        <rect
          x="2.5"
          y="2.5"
          width="19"
          height="19"
          className="fill-trail-blue stroke-snow"
          strokeWidth="1.5"
        />
      )}
      {difficulty === "black" && (
        <path d="M12 1 L23 12 L12 23 L1 12 Z" className="fill-trail-black stroke-snow" strokeWidth="1.5" />
      )}
      {difficulty === "double-black" && (
        <>
          <path d="M11 1 L22 12 L11 23 L0 12 Z" className="fill-trail-black stroke-snow" strokeWidth="1.5" />
          <path d="M33 1 L44 12 L33 23 L22 12 Z" className="fill-trail-black stroke-snow" strokeWidth="1.5" />
        </>
      )}
    </svg>
  );
}

export const trailStrokeClass: Record<Difficulty, string> = {
  green: "stroke-trail-green",
  blue: "stroke-trail-blue",
  black: "stroke-trail-black",
  "double-black": "stroke-trail-black",
};
