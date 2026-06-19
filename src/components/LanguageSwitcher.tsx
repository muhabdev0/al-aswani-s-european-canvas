import { useLang } from "@/i18n/LanguageProvider";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, toggle, t } = useLang();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.common.langSwitchAria}
      className={`inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper/80 px-3 py-1.5 text-[11px] font-medium tracking-[0.18em] uppercase text-ink/80 backdrop-blur transition hover:bg-paper hover:text-ink ${className}`}
    >
      <span className={lang === "ar" ? "text-ink" : "text-ink/40"}>AR</span>
      <span className="text-ink/30">·</span>
      <span className={lang === "en" ? "text-ink" : "text-ink/40"}>EN</span>
    </button>
  );
}