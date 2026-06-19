import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang, type Dict } from "./translations";

type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: Dict;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const LangCtx = createContext<Ctx | null>(null);

const STORAGE_KEY = "alaswani.lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to Arabic per brand requirement.
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "ar" || stored === "en") setLangState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const dir = translations[lang].dir;
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const value: Ctx = {
    lang,
    dir: translations[lang].dir,
    t: translations[lang],
    setLang: setLangState,
    toggle: () => setLangState((l) => (l === "ar" ? "en" : "ar")),
  };

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

export function useT() {
  return useLang().t;
}