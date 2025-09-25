import type { CSSProperties } from "react";

type CycleProps = {
  size: number | string;
  fontSize: number | string;
  color?: string;
  label?: string;
  textColor?: string;
  style?: CSSProperties;
  textStyle?: CSSProperties;
  isSpinning?: boolean;
};

export default function Cycle({
  size = "150px",
  fontSize = "100px",
  color = "#030230",
  label = "вставьте текст через props",
  textColor = "#1f2937",
  style,
  textStyle,
  isSpinning = false,
}: CycleProps) {
  const resolvedSize = typeof size === "number" ? `${size}px` : size;
  const resolvedFontSize =
    typeof fontSize === "number" ? `${fontSize}px` : fontSize;

  const animationStyle: CSSProperties = isSpinning
    ? { animation: "spin 15s linear infinite",
        transformOrigin: "480px -480px",
     }
    : {};

  return (
    <svg
      viewBox="0 -1000 960 1100"
      width={resolvedSize}
      height={resolvedSize}
      fill={color}
      style={style}
    >
      <title>{label || "cycle"}</title>
      <g style={animationStyle}>
        <path d="M314-115q-104-48-169-145T80-479q0-26 2.5-51t8.5-49l-46 27-40-69 191-110 110 190-70 40-54-94q-11 27-16.5 56t-5.5 60q0 97 53 176.5T354-185l-40 70Zm306-485v-80h109q-46-57-111-88.5T480-800q-55 0-104 17t-90 48l-40-70q50-35 109-55t125-20q79 0 151 29.5T760-765v-55h80v220H620ZM594 0 403-110l110-190 69 40-57 98q118-17 196.5-107T800-480q0-11-.5-20.5T797-520h81q1 10 1.5 19.5t.5 20.5q0 135-80.5 241.5T590-95l44 26-40 69Z" />
      </g>
      {label ? (
        <text
          x="50%"
          y="-480"
          textAnchor="middle"
          fill={textColor}
          fontSize={resolvedFontSize}
          fontFamily="inherit"
          style={textStyle}
        >
          {label}
        </text>
      ) : null}
    </svg>
  );
}
