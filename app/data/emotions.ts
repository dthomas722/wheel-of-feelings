export type Feeling = {
  name: string;
  color: string;
  children?: Feeling[];
}

export const emotions: Feeling[] = [
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