import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lens } from "./resume";

interface LensContextValue {
  lens: Lens;
  setLens: (lens: Lens) => void;
}

const LensContext = createContext<LensContextValue>({ lens: "eng", setLens: () => {} });

const STORAGE_KEY = "maia-lens";

export function LensProvider({ children }: { children: ReactNode }) {
  const [lens, setLensState] = useState<Lens>("eng");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "eng" || saved === "product") setLensState(saved);
  }, []);

  const setLens = (next: Lens) => {
    setLensState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return <LensContext.Provider value={{ lens, setLens }}>{children}</LensContext.Provider>;
}

export const useLens = () => useContext(LensContext);
