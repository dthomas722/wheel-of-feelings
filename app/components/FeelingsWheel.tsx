import { JSX } from "react";
import { type Feeling, emotions } from '../data/emotions';

function createSegments(feelings: Feeling[], level: number, startAngle: number = 0, endAngle: number = 360): JSX.Element[] {
  if (level === 0) {
    const totalChildren = feelings.reduce((sum, feeling) => sum + (feeling.children?.length || 0), 0);
    let currentAngle = 0;
    
    return feelings.map((feeling, index) => {
      const anglePerSegment = ((feeling.children?.length || 0) / totalChildren) * 360;
      const segmentStartAngle = currentAngle;
      const segmentEndAngle = currentAngle + anglePerSegment;
      currentAngle += anglePerSegment;
      
      return createSegment(feeling, level, segmentStartAngle, segmentEndAngle, index);
    });
  }

  const totalSegments = feelings.length;
  const anglePerSegment = (endAngle - startAngle) / totalSegments;
  
  return feelings.map((feeling, index) => {
    const segmentStartAngle = startAngle + (index * anglePerSegment);
    const segmentEndAngle = segmentStartAngle + anglePerSegment;
    
    return createSegment(feeling, level, segmentStartAngle, segmentEndAngle, index);
  });
}

function createSegment(feeling: Feeling, level: number, startAngle: number, endAngle: number, index: number): JSX.Element {
  const anglePerSegment = endAngle - startAngle;
  const startRad = (startAngle * Math.PI) / 180;
  const endRad = (endAngle * Math.PI) / 180;
  const midRad = ((startAngle + anglePerSegment / 2) * Math.PI) / 180;
  
  const radiusByLevel = {
    0: { outer: 20, inner: 10 },
    1: { outer: 30, inner: 20 },
    2: { outer: 40, inner: 30 }
  };
  
  const { outer: outerRadius, inner: innerRadius } = radiusByLevel[level as 0 | 1 | 2];
  const largeArcFlag = anglePerSegment > 180 ? 1 : 0;
  
  const path = `
    M ${50 + innerRadius * Math.cos(startRad)} ${50 + innerRadius * Math.sin(startRad)}
    L ${50 + outerRadius * Math.cos(startRad)} ${50 + outerRadius * Math.sin(startRad)}
    A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${50 + outerRadius * Math.cos(endRad)} ${50 + outerRadius * Math.sin(endRad)}
    L ${50 + innerRadius * Math.cos(endRad)} ${50 + innerRadius * Math.sin(endRad)}
    A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${50 + innerRadius * Math.cos(startRad)} ${50 + innerRadius * Math.sin(startRad)}
  `;

  const textRadius = innerRadius + (outerRadius - innerRadius) / 2;
  const textX = 50 + textRadius * Math.cos(midRad);
  const textY = 50 + textRadius * Math.sin(midRad);
  
  let textRotation = (startAngle + anglePerSegment / 2);
  if (textRotation > 90 && textRotation <= 270) {
    textRotation += 180;
  }

  return (
    <g key={`${level}-${index}`}>
      <path
        d={path}
        fill={feeling.color}
        stroke="white"
        strokeWidth="0.2"
        className="transition-all duration-200 hover:opacity-80 cursor-pointer"
      />
      <text
        x={textX}
        y={textY}
        fontSize={1}
        fill="black"
        textAnchor="middle"
        dominantBaseline="middle"
        transform={`rotate(${textRotation}, ${textX}, ${textY})`}
        className="pointer-events-none"
      >
        {feeling.name}
      </text>
      {feeling.children && createSegments(feeling.children, level + 1, startAngle, endAngle)}
    </g>
  );
}

export default function FeelingsWheel() {
  return (
    <div className="relative w-[400px] h-[400px] mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {createSegments(emotions, 0)}
      </svg>
    </div>
  );
}