import type { CSSProperties } from "react";

export function Cutout({
  src,
  alt,
  className = "",
  tilt = 0,
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  tilt?: number;
  style?: CSSProperties;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`select-none ${className}`}
      style={{
        transform: tilt ? `rotate(${tilt}deg)` : undefined,
        filter: "drop-shadow(0 18px 22px rgba(20,15,5,0.25))",
        ...style,
      }}
    />
  );
}