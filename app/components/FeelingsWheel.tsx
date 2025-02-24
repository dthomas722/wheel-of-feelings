import { JSX } from "react";

type Feeling = {
  name: string;
  color: string;
  children?: Feeling[];
}

const emotions: Feeling[] = [
  { 
    name: "Happy", 
    color: "#FFDE67",
    children: [
      { name: "Playful", color: "#FFE57F" },
      { name: "Content", color: "#FFE998" },
      { name: "Interested", color: "#FFECB0" },
      { name: "Proud", color: "#FFF0C8" },
      { name: "Accepted", color: "#FFF3E0" },
      { name: "Powerful", color: "#FFF7F7" },
    ]
  },
  { 
    name: "Surprised", 
    color: "#A1D567",
    children: [
      { name: "Startled", color: "#B2DD7F" },
      { name: "Confused", color: "#C3E498" },
      { name: "Amazed", color: "#D4ECB0" },
      { name: "Excited", color: "#E5F3C8" },
    ]
  },
  { 
    name: "Bad", 
    color: "#71C7EC",
    children: [
      { name: "Bored", color: "#8AD2EF" },
      { name: "Busy", color: "#A3DDF2" },
      { name: "Stressed", color: "#BCE7F5" },
      { name: "Tired", color: "#D5F2F8" },
    ]
  },
  { 
    name: "Fearful", 
    color: "#7C77B9",
    children: [
      { name: "Scared", color: "#918DC7" },
      { name: "Anxious", color: "#A6A3D4" },
      { name: "Insecure", color: "#BBB9E2" },
      { name: "Weak", color: "#D0CFEF" },
      { name: "Rejected", color: "#E5E5FC" },
    ]
  },
  { 
    name: "Angry", 
    color: "#E67C73",
    children: [
      { name: "Let down", color: "#EB918A" },
      { name: "Humiliated", color: "#EFA6A0" },
      { name: "Bitter", color: "#F3BBB7" },
      { name: "Mad", color: "#F7D0CD" },
      { name: "Aggressive", color: "#FBE5E4" },
    ]
  },
  { 
    name: "Disgusted", 
    color: "#E8907A",
    children: [
      { name: "Disapproving", color: "#EDA391" },
      { name: "Disappointed", color: "#F1B6A8" },
      { name: "Awful", color: "#F5C9BF" },
      { name: "Repelled", color: "#F9DCD6" },
    ]
  }
];

function createSegments(feelings: Feeling[], level: number, startAngle: number = 0, endAngle: number = 360): JSX.Element[] {
  // For level 0, calculate angles based on number of children
  if (level === 0) {
    const totalChildren = feelings.reduce((sum, feeling) => sum + (feeling.children?.length || 0), 0);
    let currentAngle = 0;
    
    return feelings.map((feeling, index) => {
      const anglePerSegment = ((feeling.children?.length || 0) / totalChildren) * 360;
      const segmentStartAngle = currentAngle;
      const segmentEndAngle = currentAngle + anglePerSegment;
      currentAngle += anglePerSegment;
      
      const startRad = (segmentStartAngle * Math.PI) / 180;
      const endRad = (segmentEndAngle * Math.PI) / 180;
      const midRad = ((segmentStartAngle + anglePerSegment / 2) * Math.PI) / 180;
      
      const outerRadius = 20;
      const innerRadius = 10;
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
      const textRotation = (segmentStartAngle + anglePerSegment / 2);

      return (
        <g key={`${level}-${index}`}>
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
            fontSize={level === 0 ? "1.8" : "1.8"}
            fill="black"
            textAnchor="middle"
            dominantBaseline="middle"
            transform={`rotate(${textRotation}, ${textX}, ${textY})`}
            className="pointer-events-none"
          >
            {feeling.name}
          </text>
          {feeling.children && createSegments(feeling.children, level + 1, segmentStartAngle, segmentEndAngle)}
        </g>
      );
    });
  }

  // For level 1 (children), divide the parent's arc equally
  const totalSegments = feelings.length;
  const anglePerSegment = (endAngle - startAngle) / totalSegments;
  
  return feelings.map((feeling, index) => {
    const segmentStartAngle = startAngle + (index * anglePerSegment);
    const segmentEndAngle = segmentStartAngle + anglePerSegment;
    
    const startRad = (segmentStartAngle * Math.PI) / 180;
    const endRad = (segmentEndAngle * Math.PI) / 180;
    const midRad = ((segmentStartAngle + anglePerSegment / 2) * Math.PI) / 180;
    
    const outerRadius = 30;
    const innerRadius = 20;
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
    const textRotation = (segmentStartAngle + anglePerSegment / 2);

    return (
      <g key={`${level}-${index}`}>
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
          fontSize={level === 0 ? "1.8" : "1.8"}
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
        {createSegments(emotions, 0)}
      </svg>
    </div>
  );
}