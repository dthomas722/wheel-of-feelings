import { JSX } from "react";

type Feeling = {
  name: string;
  color: string;
}

// Core emotions from the reference image, going clockwise from the top
const coreEmotions: Feeling[] = [
  { name: "Happy", color: "#FFDE67" },
  { name: "Surprised", color: "#A1D567" },
  { name: "Bad", color: "#71C7EC" },
  { name: "Fearful", color: "#7C77B9" },
  { name: "Angry", color: "#E67C73" },
  { name: "Disgusted", color: "#E8907A" }
];

function createCoreWheel(feelings: Feeling[]): JSX.Element[] {
  const totalSegments = feelings.length;
  const anglePerSegment = 360 / totalSegments;
  const outerRadius = 20;
  const innerRadius = 10;

  return feelings.map((feeling, index) => {
    const startAngle = index * anglePerSegment;
    const endAngle = startAngle + anglePerSegment;
    
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const midRad = ((startAngle + anglePerSegment / 2) * Math.PI) / 180;
    
    const largeArcFlag = anglePerSegment > 180 ? 1 : 0;
    
    const path = `
      M ${50 + innerRadius * Math.cos(startRad)} ${50 + innerRadius * Math.sin(startRad)}
      L ${50 + outerRadius * Math.cos(startRad)} ${50 + outerRadius * Math.sin(startRad)}
      A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${50 + outerRadius * Math.cos(endRad)} ${50 + outerRadius * Math.sin(endRad)}
      L ${50 + innerRadius * Math.cos(endRad)} ${50 + innerRadius * Math.sin(endRad)}
      A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${50 + innerRadius * Math.cos(startRad)} ${50 + innerRadius * Math.sin(startRad)}
    `;

    // Calculate text position
    const textRadius = innerRadius + (outerRadius - innerRadius) / 2;
    const textX = 50 + textRadius * Math.cos(midRad);
    const textY = 50 + textRadius * Math.sin(midRad);
    const textRotation = (startAngle + anglePerSegment / 2) + 90;

    return (
      <g key={index}>
        <path
          d={path}
          fill={feeling.color}
          stroke="white"
          strokeWidth="0.5"
          className="transition-all duration-200 hover:opacity-80 cursor-pointer"
        />
        <text
          x={textX}
          y={textY}
          fontSize="2"
          fill="black"
          textAnchor="middle"
          dominantBaseline="middle"
          transform={`rotate(${textRotation}, ${textX}, ${textY})`}
          className="pointer-events-none"
        >
          {feeling.name}
        </text>
      </g>
    );
  });
}

export default function FeelingsWheel() {
  return (
    <div className="relative w-[400px] h-[400px] mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {createCoreWheel(coreEmotions)}
      </svg>
    </div>
  );
}