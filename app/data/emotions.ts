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
        color: "#E6C85D",
        children: [
          { name: "Aroused", color: "#CFB454" },
          { name: "Cheeky", color: "#CFB454" }
        ]
      },
      { 
        name: "Content", 
        color: "#E6C85D",
        children: [
          { name: "Free", color: "#CFB454" },
          { name: "Joyful", color: "#CFB454" }
        ]
      },
      { 
        name: "Interested", 
        color: "#E6C85D",
        children: [
          { name: "Curious", color: "#CFB454" },
          { name: "Inquisitive", color: "#CFB454" }
        ]
      },
      { 
        name: "Proud", 
        color: "#E6C85D",
        children: [
          { name: "Successful", color: "#CFB454" },
          { name: "Confident", color: "#CFB454" }
        ]
      },
      { 
        name: "Accepted", 
        color: "#E6C85D",
        children: [
          { name: "Respected", color: "#CFB454" },
          { name: "Valued", color: "#CFB454" }
        ]
      },
      { 
        name: "Powerful", 
        color: "#E6C85D",
        children: [
          { name: "Courageous", color: "#CFB454" },
          { name: "Creative", color: "#CFB454" }
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
        color: "#91C05D",
        children: [
          { name: "Shocked", color: "#82AD54" },
          { name: "Dismayed", color: "#82AD54" }
        ]
      },
      { 
        name: "Confused", 
        color: "#91C05D",
        children: [
          { name: "Disillusioned", color: "#82AD54" },
          { name: "Perplexed", color: "#82AD54" }
        ]
      },
      { 
        name: "Amazed", 
        color: "#91C05D",
        children: [
          { name: "Astonished", color: "#82AD54" },
          { name: "Awe", color: "#82AD54" }
        ]
      },
      { 
        name: "Excited", 
        color: "#91C05D",
        children: [
          { name: "Eager", color: "#82AD54" },
          { name: "Energetic", color: "#82AD54" }
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
        color: "#66B3D4",
        children: [
          { name: "Indifferent", color: "#5CA1BF" },
          { name: "Apathetic", color: "#5CA1BF" }
        ]
      },
      { 
        name: "Busy", 
        color: "#66B3D4",
        children: [
          { name: "Pressured", color: "#5CA1BF" },
          { name: "Rushed", color: "#5CA1BF" }
        ]
      },
      { 
        name: "Stressed", 
        color: "#66B3D4",
        children: [
          { name: "Overwhelmed", color: "#5CA1BF" },
          { name: "Out of control", color: "#5CA1BF" }
        ]
      },
      { 
        name: "Tired", 
        color: "#66B3D4",
        children: [
          { name: "Sleepy", color: "#5CA1BF" },
          { name: "Unfocused", color: "#5CA1BF" }
        ]
      }
    ]
  },
  { 
    name: "Sad", 
    color: "#5DADE2",
    children: [
      { 
        name: "Lonely", 
        color: "#549CCB",
        children: [
          { name: "Isolated", color: "#4C8CB7" },
          { name: "Abandoned", color: "#4C8CB7" }
        ]
      },
      { 
        name: "Vulnerable", 
        color: "#549CCB",
        children: [
          { name: "Victimized", color: "#4C8CB7" },
          { name: "Fragile", color: "#4C8CB7" }
        ]
      },
      { 
        name: "Despair", 
        color: "#549CCB",
        children: [
          { name: "Grief", color: "#4C8CB7" },
          { name: "Powerless", color: "#4C8CB7" }
        ]
      },
      { 
        name: "Guilty", 
        color: "#549CCB",
        children: [
          { name: "Ashamed", color: "#4C8CB7" },
          { name: "Remorseful", color: "#4C8CB7" }
        ]
      },
      { 
        name: "Depressed", 
        color: "#549CCB",
        children: [
          { name: "Inferior", color: "#4C8CB7" },
          { name: "Empty", color: "#4C8CB7" }
        ]
      },
      { 
        name: "Hurt", 
        color: "#549CCB",
        children: [
          { name: "Disappointed", color: "#4C8CB7" },
          { name: "Embarrassed", color: "#4C8CB7" }
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
        color: "#706BA7",
        children: [
          { name: "Helpless", color: "#656096" },
          { name: "Frightened", color: "#656096" }
        ]
      },
      { 
        name: "Anxious", 
        color: "#706BA7",
        children: [
          { name: "Overwhelmed", color: "#656096" },
          { name: "Worried", color: "#656096" }
        ]
      },
      { 
        name: "Insecure", 
        color: "#706BA7",
        children: [
          { name: "Inadequate", color: "#656096" },
          { name: "Inferior", color: "#656096" }
        ]
      },
      { 
        name: "Weak", 
        color: "#706BA7",
        children: [
          { name: "Worthless", color: "#656096" },
          { name: "Insignificant", color: "#656096" }
        ]
      },
      { 
        name: "Rejected", 
        color: "#706BA7",
        children: [
          { name: "Excluded", color: "#656096" },
          { name: "Persecuted", color: "#656096" }
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
        color: "#CF7068",
        children: [
          { name: "Betrayed", color: "#BA655E" },
          { name: "Resentful", color: "#BA655E" }
        ]
      },
      { 
        name: "Humiliated", 
        color: "#CF7068",
        children: [
          { name: "Disrespected", color: "#BA655E" },
          { name: "Ridiculed", color: "#BA655E" }
        ]
      },
      { 
        name: "Bitter", 
        color: "#CF7068",
        children: [
          { name: "Indignant", color: "#BA655E" },
          { name: "Violated", color: "#BA655E" }
        ]
      },
      { 
        name: "Mad", 
        color: "#CF7068",
        children: [
          { name: "Furious", color: "#BA655E" },
          { name: "Jealous", color: "#BA655E" }
        ]
      },
      { 
        name: "Aggressive", 
        color: "#CF7068",
        children: [
          { name: "Provoked", color: "#BA655E" },
          { name: "Hostile", color: "#BA655E" }
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
        color: "#E68F3A",
        children: [
          { name: "Judgmental", color: "#CF8134" },
          { name: "Embarrassed", color: "#CF8134" }
        ]
      },
      { 
        name: "Disappointed", 
        color: "#E68F3A",
        children: [
          { name: "Appalled", color: "#CF8134" },
          { name: "Revolted", color: "#CF8134" }
        ]
      },
      { 
        name: "Awful", 
        color: "#E68F3A",
        children: [
          { name: "Nauseated", color: "#CF8134" },
          { name: "Detestable", color: "#CF8134" }
        ]
      },
      { 
        name: "Repelled", 
        color: "#E68F3A",
        children: [
          { name: "Horrified", color: "#CF8134" },
          { name: "Hesitant", color: "#CF8134" }
        ]
      }
    ]
  }
];