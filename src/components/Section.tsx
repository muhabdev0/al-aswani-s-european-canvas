import type { CSSProperties, ReactNode } from "react";
import { TornEdge } from "./TornEdge";

type Tone = "paper" | "sky" | "sand" | "grass" | "ink" | "paperDeep";

const toneClass: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  paperDeep: "bg-paper-deep text-ink",
  sky: "bg-sky text-ink",
  sand: "bg-sand text-ink",
  grass: "bg-grass text-paper",
  ink: "bg-ink text-paper",
};

export function Section({
  tone = "paper",
  tearTop,
  tearBottom,
  className = "",
  children,
  noise = false,
  style,
  id,
}: {
  tone?: Tone;
  /** Tone of the section *above* (the color the top tear reveals). */
  tearTop?: Tone;
  /** Tone of the section *below* (the color the bottom tear reveals). */
  tearBottom?: Tone;
  className?: string;
  children: ReactNode;
  noise?: boolean;
  style?: CSSProperties;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`relative ${toneClass[tone]} ${noise ? "paper-noise" : ""} ${className}`}
      style={style}
    >
      {tearTop && <TornEdge position="top" tone={tearTop} height={48} />}
      <div className="relative">{children}</div>
      {tearBottom && <TornEdge position="bottom" tone={tearBottom} height={56} />}
    </section>
  );
}