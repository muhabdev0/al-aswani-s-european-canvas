import { useId } from "react";

type Tone = "paper" | "sky" | "sand" | "grass" | "ink" | "paperDeep";

const toneToColor: Record<Tone, string> = {
  paper: "#f7f1e6",
  paperDeep: "#ede3d0",
  sky: "#cfe2ef",
  sand: "#e3cfa9",
  grass: "#7a9466",
  ink: "#1b1a17",
};

/**
 * Organic torn-paper edge. Place at the top or bottom of a section, with the
 * fill color matching the *next* surface (the one the tear reveals).
 */
export function TornEdge({
  position = "bottom",
  tone,
  height = 56,
  className = "",
  flip = false,
}: {
  position?: "top" | "bottom";
  tone: Tone;
  height?: number;
  className?: string;
  flip?: boolean;
}) {
  const id = useId().replace(/:/g, "");
  const fill = toneToColor[tone];

  // Build an irregular hand-torn baseline path.
  const w = 1440;
  const segments = 28;
  const seed = id.charCodeAt(0) || 1;
  const rand = (i: number) => {
    const x = Math.sin((i + 1) * 12.9898 + seed) * 43758.5453;
    return x - Math.floor(x);
  };

  let d = "";
  const baseY = position === "top" ? height - 4 : 4;
  const points: Array<[number, number]> = [];
  for (let i = 0; i <= segments; i++) {
    const x = (w / segments) * i;
    const jitter = (rand(i) - 0.5) * (height * 0.7);
    const y = baseY + jitter;
    points.push([x, Math.max(2, Math.min(height - 2, y))]);
  }
  if (position === "bottom") {
    d = `M0,0 L${w},0 L${w},${points[points.length - 1][1]} `;
    for (let i = points.length - 1; i >= 0; i--) {
      const [x, y] = points[i];
      const [px, py] = points[Math.max(0, i - 1)];
      const cx = (x + px) / 2;
      const cy = (y + py) / 2;
      d += `Q ${cx},${cy} ${x},${y} `;
    }
    d += "Z";
  } else {
    d = `M0,${height} L${w},${height} L${w},${points[0][1]} `;
    for (let i = 0; i < points.length; i++) {
      const [x, y] = points[i];
      const [nx, ny] = points[Math.min(points.length - 1, i + 1)];
      const cx = (x + nx) / 2;
      const cy = (y + ny) / 2;
      d += `Q ${cx},${cy} ${x},${y} `;
    }
    d += "Z";
  }

  const filterId = `torn-${id}`;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 ${
        position === "bottom" ? "bottom-0" : "top-0"
      } ${className}`}
      style={{ transform: flip ? "scaleX(-1)" : undefined, lineHeight: 0 }}
    >
      <svg
        viewBox={`0 0 ${w} ${height}`}
        width="100%"
        height={height}
        preserveAspectRatio="none"
        style={{ display: "block" }}
      >
        <defs>
          <filter id={filterId} x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              seed={seed}
            />
            <feDisplacementMap in="SourceGraphic" scale="6" />
          </filter>
        </defs>
        <path d={d} fill={fill} filter={`url(#${filterId})`} />
        {/* subtle paper-fiber line along the tear */}
        <path
          d={d}
          fill="none"
          stroke="rgba(0,0,0,0.06)"
          strokeWidth={0.8}
          filter={`url(#${filterId})`}
        />
      </svg>
    </div>
  );
}