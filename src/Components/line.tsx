type CurveProps = {
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
  radius?: number;
};

export function Line({
  width = 80,
  height = 48,
  stroke = "currentColor",
  strokeWidth = 2,
  radius = 48,
}: CurveProps) {
  const startX = 0;
  const startY = 0;

  const verticalEndY = height * 0.6;
  const curveRadius = Math.min(radius, height / 2);

  const controlX = startX;
  const controlY = verticalEndY + curveRadius;

  const curveEndX = curveRadius;
  const curveEndY = verticalEndY + curveRadius;

  const d = `
    M ${startX} ${startY}
    V ${verticalEndY}
    Q ${controlX} ${controlY}, ${curveEndX} ${curveEndY}
    H ${width}
  `;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}