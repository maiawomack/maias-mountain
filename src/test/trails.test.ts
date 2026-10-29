import { describe, expect, it } from "vitest";
import { difficultyRank, getTrail, trails, trailsByDifficulty } from "@/lib/resume";

describe("trail difficulty", () => {
  it("ranks green as easiest and double black diamond as hardest", () => {
    expect(difficultyRank("green")).toBe(0);
    expect(difficultyRank("double-black")).toBe(3);
  });

  it("lists trails from green to double black", () => {
    const sorted = trailsByDifficulty();
    expect(sorted[0]?.difficulty).toBe("green");
    expect(sorted.at(-1)?.difficulty).toBe("double-black");
  });

  it("links repos only to Maia's GitHub", () => {
    for (const t of trails.filter((t) => t.repo)) {
      expect(t.repo).toMatch(/^https:\/\/github\.com\/maiawomack\//);
    }
    expect(getTrail("cairn")?.repo).toBe("https://github.com/maiawomack/Cairn");
  });
});
