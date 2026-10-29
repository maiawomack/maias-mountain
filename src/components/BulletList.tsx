import { useLens } from "@/lib/lens";
import type { Bullet } from "@/lib/resume";
import { cn } from "@/lib/utils";

/** Bullets that match the chosen line (engineering / product) are emphasized. */
export function BulletList({ bullets, className }: { bullets: Bullet[]; className?: string }) {
  const { lens } = useLens();
  return (
    <ul className={cn("space-y-2.5", className)}>
      {bullets.map((b) => {
        const on = b.lens.includes(lens);
        return (
          <li
            key={b.text}
            className={cn(
              "flex gap-3 text-[0.95rem] leading-relaxed transition-opacity duration-300",
              on ? "opacity-100" : "opacity-45",
            )}
          >
            <span
              aria-hidden
              className={cn(
                "mt-2 h-2 w-2 shrink-0 rotate-45",
                on ? "bg-primary" : "bg-muted-foreground",
              )}
            />
            <span>{b.text}</span>
          </li>
        );
      })}
    </ul>
  );
}
