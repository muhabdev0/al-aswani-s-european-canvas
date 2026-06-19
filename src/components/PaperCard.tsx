import type { CSSProperties, ReactNode } from "react";

export function PaperCard({
  children,
  tilt = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  tilt?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`paper-card ${className}`}
      style={{ transform: tilt ? `rotate(${tilt}deg)` : undefined, ...style }}
    >
      {children}
    </div>
  );
}