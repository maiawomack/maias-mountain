import { useLens } from "@/lib/lens";
import type { Lens } from "@/lib/resume";
import { cn } from "@/lib/utils";

const options: { value: Lens; label: string }[] = [
  { value: "eng", label: "Engineering" },
  { value: "product", label: "Product" },
];

export function LensToggle({ className }: { className?: string }) {
  const { lens, setLens } = useLens();
  return (
    <div className={cn("inline-flex flex-col gap-1.5", className)}>
      <span className="eyebrow text-muted-foreground">Choose your line</span>
      <div role="radiogroup" aria-label="View as" className="sign inline-flex p-1">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={lens === o.value}
            onClick={() => setLens(o.value)}
            className={cn(
              "rounded-sm px-4 py-1.5 font-display text-lg font-bold uppercase tracking-wide transition-colors",
              lens === o.value
                ? "bg-ink text-snow"
                : "text-foreground hover:bg-secondary",
            )}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
