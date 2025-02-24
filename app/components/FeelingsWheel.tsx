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
      { 
        name: "Playful", 
        color: "#FFE57F",
        children: [
          { name: "Aroused", color: "#FFE890" },
          { name: "Cheeky", color: "#FFEBA1" }
        ]
      },
      { 
        name: "Content", 
        color: "#FFE998",
        children: [
          { name: "Free", color: "#FFECA9" },
          { name: "Joyful", color: "#FFEFBA" }
        ]
      },
      { 
        name: "Interested", 
        color: "#FFECB0",
        children: [
          { name: "Curious", color: "#FFEFBF" },
          { name: "Inquisitive", color: "#FFF2CF" }
        ]
      },
      { 
        name: "Proud", 
        color: "#FFF0C8",
        children: [
          { name: "Successful", color: "#FFF3D6" },
          { name: "Confident", color: "#FFF6E3" }
        ]
      },
      { 
        name: "Accepted", 
        color: "#FFF3E0",
        children: [
          { name: "Respected", color: "#FFF6EA" },
          { name: "Valued", color: "#FFF9F4" }
        ]
      },
      { 
        name: "Powerful", 
        color: "#FFF7F7",
        children: [
          { name: "Courageous", color: "#FFFAFA" },
          { name: "Creative", color: "#FFFCFC" }
        ]
      }
    ]
  },
  { 
    name: "Surprised", 
    color: "#A1D567",
    children: [
      { 
        name: "Startled", 
        color: "#B2DD7F",
        children: [
          { name: "Shocked", color: "#BFDF8F" },
          { name: "Dismayed", color: "#CCE19F" }
        ]
      },
      { 
        name: "Confused", 
        color: "#C3E498",
        children: [
          { name: "Disillusioned", color: "#CFE6A6" },
          { name: "Perplexed", color: "#DBE8B4" }
        ]
      },
      { 
        name: "Amazed", 
        color: "#D4ECB0",
        children: [
          { name: "Astonished", color: "#DDEEBB" },
          { name: "Awe", color: "#E6F0C6" }
        ]
      },
      { 
        name: "Excited", 
        color: "#E5F3C8",
        children: [
          { name: "Eager", color: "#EBF5D1" },
          { name: "Energetic", color: "#F1F7DA" }
        ]
      }
    ]
  },
  { 
    name: "Bad", 
    color: "#71C7EC",
    children: [
      { 
        name: "Bored", 
        color: "#8AD2EF",
        children: [
          { name: "Indifferent", color: "#9CD7F1" },
          { name: "Apathetic", color: "#ADDCF3" }
        ]
      },
      { 
        name: "Busy", 
        color: "#A3DDF2",
        children: [
          { name: "Pressured", color: "#B2E1F4" },
          { name: "Rushed", color: "#C1E5F6" }
        ]
      },
      { 
        name: "Stressed", 
        color: "#BCE7F5",
        children: [
          { name: "Overwhelmed", color: "#C8EAF6" },
          { name: "Out of control", color: "#D4EDF7" }
        ]
      },
      { 
        name: "Tired", 
        color: "#D5F2F8",
        children: [
          { name: "Sleepy", color: "#DDF4F9" },
          { name: "Unfocused", color: "#E5F6FA" }
        ]
      }
    ]
  },
  { 
    name: "Fearful", 
    color: "#7C77B9",
    children: [
      { 
        name: "Scared", 
        color: "#918DC7",
        children: [
          { name: "Helpless", color: "#9E9BCE" },
          { name: "Frightened", color: "#ABA9D5" }
        ]
      },
      { 
        name: "Anxious", 
        color: "#A6A3D4",
        children: [
          { name: "Overwhelmed", color: "#B1AFD9" },
          { name: "Worried", color: "#BCBBDE" }
        ]
      },
      { 
        name: "Insecure", 
        color: "#BBB9E2",
        children: [
          { name: "Inadequate", color: "#C4C2E5" },
          { name: "Inferior", color: "#CDCBE8" }
        ]
      },
      { 
        name: "Weak", 
        color: "#D0CFEF",
        children: [
          { name: "Worthless", color: "#D7D6F1" },
          { name: "Insignificant", color: "#DEDDF3" }
        ]
      },
      { 
        name: "Rejected", 
        color: "#E5E5FC",
        children: [
          { name: "Excluded", color: "#EBEBFD" },
          { name: "Persecuted", color: "#F1F1FE" }
        ]
      }
    ]
  },
  { 
    name: "Angry", 
    color: "#E67C73",
    children: [
      { 
        name: "Let down", 
        color: "#EB918A",
        children: [
          { name: "Betrayed", color: "#ED9D97" },
          { name: "Resentful", color: "#EFA9A4" }
        ]
      },
      { 
        name: "Humiliated", 
        color: "#EFA6A0",
        children: [
          { name: "Disrespected", color: "#F1B1AC" },
          { name: "Ridiculed", color: "#F3BCB8" }
        ]
      },
      { 
        name: "Bitter", 
        color: "#F3BBB7",
        children: [
          { name: "Indignant", color: "#F5C4C1" },
          { name: "Violated", color: "#F7CDCB" }
        ]
      },
      { 
        name: "Mad", 
        color: "#F7D0CD",
        children: [
          { name: "Furious", color: "#F9D8D5" },
          { name: "Jealous", color: "#FBE0DD" }
        ]
      },
      { 
        name: "Aggressive", 
        color: "#FBE5E4",
        children: [
          { name: "Provoked", color: "#FCEBEA" },
          { name: "Hostile", color: "#FDF1F0" }
        ]
      }
    ]
  },
  { 
    name: "Disgusted", 
    color: "#FF9F40",
    children: [
      { 
        name: "Disapproving", 
        color: "#FFB266",
        children: [
          { name: "Judgmental", color: "#FFBB7A" },
          { name: "Embarrassed", color: "#FFC48E" }
        ]
      },
      { 
        name: "Disappointed", 
        color: "#FFC68C",
        children: [
          { name: "Appalled", color: "#FFCD99" },
          { name: "Revolted", color: "#FFD4A6" }
        ]
      },
      { 
        name: "Awful", 
        color: "#FFD9B3",
        children: [
          { name: "Nauseated", color: "#FFDEBE" },
          { name: "Detestable", color: "#FFE3C9" }
        ]
      },
      { 
        name: "Repelled", 
        color: "#FFEDD9",
        children: [
          { name: "Horrified", color: "#FFF0E0" },
          { name: "Hesitant", color: "#FFF3E7" }
        ]
      }
    ]
  }
];

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
  const textRotation = (startAngle + anglePerSegment / 2);

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