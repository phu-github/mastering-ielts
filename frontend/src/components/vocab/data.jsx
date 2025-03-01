const nCol = 15;
const nRow = 12;
const currentDay = "05/02/2025";

const vocabulary = [
  { id: 1, word: "Abundance", details: {
    definition: " a large quantity that is more than enough",
    level: "C1",
    transcription: "/əˈbʌndəns/",
    example: ["The brochure promised beautiful walks with an abundance of wildlife.", "The country has an abundance of natural resources."]
  },
    reviews: [
      {
        date: "2025-02-05",
        progress: 10,
        retention: 0.4,
        interval: 1
      },
      {
        date: "2025-02-07",
        progress: 60,
        retention: 0.7,
        interval: 3
      },
      {
        date: "2025-02-15",
        progress: 100,
        retention: 0.95,
        interval: 7
      }
    ]
  },
  { id: 2, word: "Finesse", details: {
    definition: "extreme delicacy or subtlety in action, performance, skill, discrimination, taste, etc.",
    level: "C1",
    transcription: "/fɪˈnes/",
    example: ["The pianist played with great finesse.", "The chef's finesse in cooking is unmatched."]
  },
    reviews: [
      {
        date: "2025-02-05",
        progress: 10,
        retention: 0.4,
        interval: 1
      },
      {
        date: "2025-02-07",
        progress: 60,
        retention: 0.7,
        interval: 3
      },
      {
        date: "2025-02-15",
        progress: 100,
        retention: 0.95,
        interval: 7
      }
    ]
  },
  { id: 3, word: "Nostalgia", details: {
    definition: "a wistful desire to return in thought or in fact to a former time in one's life, to one's home or homeland, or to one's family and friends; a sentimental yearning for the happiness of a former place or time.",
    level: "C1",
    transcription: "/nɒˈstældʒiə/",
    example: ["A nostalgia for his college days.", "A wave of nostalgia washed over me when I saw my childhood home."]
  },
    reviews: [
      {
        date: "2025-02-05",
        progress: 10,
        retention: 0.4,
        interval: 1
      },
      {
        date: "2025-02-07",
        progress: 60,
        retention: 0.7,
        interval: 3
      },
      {
        date: "2025-02-15",
        progress: 100,
        retention: 0.95,
        interval: 7
      }
    ]
  },
  { id: 4, word: "Elegance", details: {
    definition: "the quality of being graceful and stylish in appearance or manner; the quality of being pleasingly ingenious and simple; neatness.",
    level: "C1",
    transcription: "/ˈɛlɪɡəns/",
    example: ["The room was decorated with great elegance.", "The simplicity and elegance of the solution."]
  },
    reviews: [
      {
        date: "2025-02-05",
        progress: 10,
        retention: 0.4,
        interval: 1
      },
      {
        date: "2025-02-07",
        progress: 60,
        retention: 0.7,
        interval: 3
      },
      {
        date: "2025-02-15",
        progress: 100,
        retention: 0.95,
        interval: 7
      }
    ]
  },
  { id: 5, word: "Catharsis", details: {
    definition: "the process of releasing, and thereby providing relief from, strong or repressed emotions.",
    level: "C1",
    transcription: "/kəˈθɑːsɪs/",
    example: ["Music is a means of catharsis for many people.", "The play provided a catharsis for the audience."]
  },
    reviews: [
      {
        date: "2025-02-05",
        progress: 10,
        retention: 0.4,
        interval: 1
      },
      {
        date: "2025-02-07",
        progress: 60,
        retention: 0.7,
        interval: 3
      },
      {
        date: "2025-02-15",
        progress: 100,
        retention: 0.95,
        interval: 7
      }
    ]
  },
  { id: 6, word: "Rhapsody", details: {
    definition: "an effusively enthusiastic or ecstatic expression of feeling.",
    level: "C1",
    transcription: "/ˈræpsədi/",
    example: ["A rhapsody of joy.", "A rhapsody of praise."]
  },
    reviews: [
      {
        date: "2025-02-05",
        progress: 10,
        retention: 0.4,
        interval: 1
      },
      {
        date: "2025-02-07",
        progress: 60,
        retention: 0.7,
        interval: 3
      },
      {
        date: "2025-02-15",
        progress: 100,
        retention: 0.95,
        interval: 7
      }
    ]
  },
  { id: 7, word: "Sagacity", details: {
    definition: "acuteness of mental discernment and soundness of judgment.",
    level: "C1",
    transcription: "/səˈɡæsəti/",
    example: ["The king's sagacity saved the kingdom.", "The sagacity of the detective."]
  },
    reviews: [
      {
        date: "2025-02-05",
        progress: 10,
        retention: 0.4,
        interval: 1
      },
      {
        date: "2025-02-07",
        progress: 60,
        retention: 0.7,
        interval: 3
      },
      {
        date: "2025-02-15",
        progress: 100,
        retention: 0.95,
        interval: 7
      }
    ]
  },
  { id: 8, word: "Vigilance", details: {
    definition: "the action or state of keeping careful watch for possible danger or difficulties.",
    level: "C1",
    transcription: "/ˈvɪdʒɪləns/",
    example: ["Security forces are maintaining a high level of vigilance.", "The vigilance of the guards."]
  },
    reviews: [
      {
        date: "2025-02-05",
        progress: 10,
        retention: 0.4,
        interval: 1
      },
      {
        date: "2025-02-07",
        progress: 60,
        retention: 0.7,
        interval: 3
      },
      {
        date: "2025-02-15",
        progress: 100,
        retention: 0.95,
        interval: 7
      }
    ]
  },
  { id: 9, word: "Ephemeral", details: {
    definition: "lasting for a very short time.",
    level: "C1",
    transcription: "/ɪˈfɛmərəl/",
    example: ["Fashions are ephemeral.", "The ephemeral nature of life."]
  },
    reviews: [
      {
        date: "2025-02-05",
        progress: 10,
        retention: 0.4,
        interval: 1
      },
      {
        date: "2025-02-07",
        progress: 60,
        retention: 0.7,
        interval: 3
      },
      {
        date: "2025-02-15",
        progress: 100,
        retention: 0.95,
        interval: 7
      }
    ]
  },
  { id: 10, word: "Nemesis", details: {
    definition: "the inescapable agent of someone's or something's downfall.",
    level: "C1",
    transcription: "/ˈnɛməsɪs/",
    example: ["The balance beam was the gymnast's nemesis.", "The nemesis of drug abuse."]
  },
    reviews: [
      {
        date: "2025-02-05",
        progress: 10,
        retention: 0.4,
        interval: 1
      },
      {
        date: "2025-02-07",
        progress: 60,
        retention: 0.7,
        interval: 3
      },
      {
        date: "2025-02-15",
        progress: 100,
        retention: 0.95,
        interval: 7
      }
    ]
  },
  { id: 11, word: "Paradox", details: {
    definition: "a seemingly absurd or self-contradictory statement or proposition that when investigated or explained may prove to be well founded or true.",
    level: "C1",
    transcription: "/ˈpærədɒks/",
    example: ["The uncertainty principle leads to all sorts of paradoxes.", "The paradox of the time travel."]
  },
    reviews: [
      {
        date: "2025-02-06",
        progress: 10,
        retention: 0.4,
        interval: 1
      },
      {
        date: "2025-02-08",
        progress: 60,
        retention: 0.7,
        interval: 3
      },
      {
        date: "2025-02-16",
        progress: 100,
        retention: 0.95,
        interval: 7
      },
    ],
  },
  { id: 12, word: "Renaissance", details: {
    definition: "the revival of art and literature under the influence of classical models in the 14th–16th centuries.",
    level: "C1",
    transcription: "/ˌrɛnəˈsɑːns/",
    example: ["The Renaissance in Italy.", "The Renaissance of the 12th century."]
  },
    reviews: [
      {
        date: "2025-02-06",
        progress: 10,
        retention: 0.4,
        interval: 1
      },
      {
        date: "2025-02-08",
        progress: 60,
        retention: 0.7,
        interval: 3
      },
      {
        date: "2025-02-16",
        progress: 100,
        retention: 0.95,
        interval: 7
      }
    ]
  },
  { id: 13, word: "Savvy", details: {
    definition: "shrewdness and practical knowledge; the ability to make good judgments.",
    level: "C1",
    transcription: "/ˈsævi/",
    example: ["The old man's political savvy.", "The savvy of a market trader."]
  },
    reviews: [
      {
        date: "2025-02-06",
        progress: 10,
        retention: 0.4,
        interval: 1
      },
      {
        date: "2025-02-08",
        progress: 60,
        retention: 0.7,
        interval: 3
      },
      {
        date: "2025-02-16",
        progress: 100,
        retention: 0.95,
        interval: 7
      }
    ]
  },
  // { id: 14, word: "Tapestry", 
  //   reviews: [
  //     {
  //       date: "2025-02-06",
  //       progress: 10,
  //       retention: 0.4,
  //       interval: 1
  //     },
  //     {
  //       date: "2025-02-08",
  //       progress: 60,
  //       retention: 0.7,
  //       interval: 3
  //     },
  //     {
  //       date: "2025-02-16",
  //       progress: 100,
  //       retention: 0.95,
  //       interval: 7
  //     }
  //   ]
  // },
  // { id: 15, word: "Ubiquity",
  //   reviews: [
  //     {
  //       date: "2025-02-06",
  //       progress: 10,
  //       retention: 0.4,
  //       interval: 1
  //     },
  //     {
  //       date: "2025-02-08",
  //       progress: 60,
  //       retention: 0.7,
  //       interval: 3
  //     },
  //     {
  //       date: "2025-02-16",
  //       progress: 100,
  //       retention: 0.95,
  //       interval: 7
  //     }
  //   ]
  // },
  // { id: 16, word: "Virtuoso", 
  //   reviews: [
  //     {
  //       date: "2025-02-06",
  //       progress: 10,
  //       retention: 0.4,
  //       interval: 1
  //     },
  //     {
  //       date: "2025-02-08",
  //       progress: 60,
  //       retention: 0.7,
  //       interval: 3
  //     },
  //     {
  //       date: "2025-02-16",
  //       progress: 100,
  //       retention: 0.95,
  //       interval: 7
  //     }
  //   ]
  // },
  // { id: 17, word: "Wistful", 
  //   reviews: [
  //     {
  //       date: "2025-02-06",
  //       progress: 10,
  //       retention: 0.4,
  //       interval: 1
  //     },
  //     {
  //       date: "2025-02-08",
  //       progress: 60,
  //       retention: 0.7,
  //       interval: 3
  //     },
  //     {
  //       date: "2025-02-16",
  //       progress: 100,
  //       retention: 0.95,
  //       interval: 7
  //     }
  //   ]
  // },
  // { id: 18, word: "Xenial", 
  //   reviews: [
  //     {
  //       date: "2025-02-06",
  //       progress: 10,
  //       retention: 0.4,
  //       interval: 1
  //     },
  //     {
  //       date: "2025-02-08",
  //       progress: 60,
  //       retention: 0.7,
  //       interval: 3
  //     },
  //     {
  //       date: "2025-02-16",
  //       progress: 100,
  //       retention: 0.95,
  //       interval: 7
  //     }
  //   ]
  // },
  // { id: 19, word: "Yearning", 
  //   reviews: [
  //     {
  //       date: "2025-02-06",
  //       progress: 10,
  //       retention: 0.4,
  //       interval: 1
  //     },
  //     {
  //       date: "2025-02-08",
  //       progress: 60,
  //       retention: 0.7,
  //       interval: 3
  //     },
  //     {
  //       date: "2025-02-16",
  //       progress: 100,
  //       retention: 0.95,
  //       interval: 7
  //     }
  //   ]
  // },
  // { id: 20, word: "Zephyr", 
  //   reviews: [
  //     {
  //       date: "2025-02-06",
  //       progress: 10,
  //       retention: 0.4,
  //       interval: 1
  //     },
  //     {
  //       date: "2025-02-08",
  //       progress: 60,
  //       retention: 0.7,
  //       interval: 3
  //     },
  //     {
  //       date: "2025-02-16",
  //       progress: 100,
  //       retention: 0.95,
  //       interval: 7
  //     }
  //   ]
  // },
  // { id: 21, word: "Axiom", 
  //   reviews: [
  //     {
  //       date: "2025-02-06",
  //       progress: 10,
  //       retention: 0.4,
  //       interval: 1
  //     },
  //     {
  //       date: "2025-02-08",
  //       progress: 60,
  //       retention: 0.7,
  //       interval: 3
  //     },
  //     {
  //       date: "2025-02-16",
  //       progress: 100,
  //       retention: 0.95,
  //       interval: 7
  //     }
  //   ]
  // },
  // { id: 22, word: "Bougainvillea", 
  //   reviews: [
  //     {
  //       date: "2025-02-06",
  //       progress: 10,
  //       retention: 0.4,
  //       interval: 1
  //     },
  //     {
  //       date: "2025-02-08",
  //       progress: 60,
  //       retention: 0.7,
  //       interval: 3
  //     },
  //     {
  //       date: "2025-02-16",
  //       progress: 100,
  //       retention: 0.95,
  //       interval: 7
  //     }
  //   ]
  // },
  // { id: 23, word: "Cacophony", 
  //   reviews: [
  //     {
  //       date: "2025-02-06",
  //       progress: 10,
  //       retention: 0.4,
  //       interval: 1
  //     },
  //     {
  //       date: "2025-02-08",
  //       progress: 60,
  //       retention: 0.7,
  //       interval: 3
  //     },
  //     {
  //       date: "2025-02-16",
  //       progress: 100,
  //       retention: 0.95,
  //       interval: 7
  //     }
  //   ]
  // },
  // { id: 24, word: "Dichotomy", 
  //   reviews: [
  //     {
  //       date: "2025-02-06",
  //       progress: 10,
  //       retention: 0.4,
  //       interval: 1
  //     },
  //     {
  //       date: "2025-02-08",
  //       progress: 60,
  //       retention: 0.7,
  //       interval: 3
  //     },
  //     {
  //       date: "2025-02-16",
  //       progress: 100,
  //       retention: 0.95,
  //       interval: 7
  //     }
  //   ]
  // },
  // { id: 25, word: "Eccentric", 
  //   reviews: [
  //     {
  //       date: "2025-02-06",
  //       progress: 10,
  //       retention: 0.4,
  //       interval: 1
  //     },
  //     {
  //       date: "2025-02-08",
  //       progress: 60,
  //       retention: 0.7,
  //       interval: 3
  //     },
  //     {
  //       date: "2025-02-16",
  //       progress: 100,
  //       retention: 0.95,
  //       interval: 7
  //     }
  //   ]
  // },
  // { id: 26, word: "Flamboyant", 
  //   reviews: [
  //     {
  //       date: "2025-02-06",
  //       progress: 10,
  //       retention: 0.4,
  //       interval: 1
  //     },
  //     {
  //       date: "2025-02-08",
  //       progress: 60,
  //       retention: 0.7,
  //       interval: 3
  //     },
  //     {
  //       date: "2025-02-16",
  //       progress: 100,
  //       retention: 0.95,
  //       interval: 7
  //     }
  //   ]
  // },
  // { id: 27, word: "Garrulous", 
  //   reviews: [
  //     {
  //       date: "2025-02-06",
  //       progress: 10,
  //       retention: 0.4,
  //       interval: 1
  //     },
  //     {
  //       date: "2025-02-08",
  //       progress: 60,
  //       retention: 0.7,
  //       interval: 3
  //     },
  //     {
  //       date: "2025-02-16",
  //       progress: 100,
  //       retention: 0.95,
  //       interval: 7
  //     }
  //   ]
  // },
  // { id: 28, word: "Heterogeneous", 
  //   reviews: [
  //     {
  //       date: "2025-02-06",
  //       progress: 10,
  //       retention: 0.4,
  //       interval: 1
  //     },
  //     {
  //       date: "2025-02-08",
  //       progress: 60,
  //       retention: 0.7,
  //       interval: 3
  //     },
  //     {
  //       date: "2025-02-16",
  //       progress: 100,
  //       retention: 0.95,
  //       interval: 7
  //     }
  //   ]
  // },
  // { id: 29, word: "Insouciant", 
  //   reviews: [
  //     {
  //       date: "2025-02-06",
  //       progress: 10,
  //       retention: 0.4,
  //       interval: 1
  //     },
  //     {
  //       date: "2025-02-08",
  //       progress: 60,
  //       retention: 0.7,
  //       interval: 3
  //     },
  //     {
  //       date: "2025-02-16",
  //       progress: 100,
  //       retention: 0.95,
  //       interval: 7
  //     }
  //   ]
  // },
  // { id: 30, word: "Jubilant", 
  //   reviews: [
  //     {
  //       date: "2025-02-06",
  //       progress: 10,
  //       retention: 0.4,
  //       interval: 1
  //     },
  //     {
  //       date: "2025-02-08",
  //       progress: 60,
  //       retention: 0.7,
  //       interval: 3
  //     },
  //     {
  //       date: "2025-02-16",
  //       progress: 100,
  //       retention: 0.95,
  //       interval: 7
  //     }
  //   ]
  // }
];

// Function to get the y value as a formatted date string
function getYValue(currentDay, index) {
    // Tách ngày, tháng, năm từ chuỗi currentDay
    const [day, month, year] = currentDay.split('/').map(Number);

    // Tạo đối tượng Date
    const date = new Date(year, month - 1, day);

    // Tăng số ngày lên theo index
    date.setDate(date.getDate() + index);

    // Định dạng lại ngày theo format dd/mm/yyyy
    const newDay = date.getDate() < 10 ? String(date.getDate()) : String(date.getDate()).padStart(2, '0');
    const newMonth = date.getMonth() + 1 < 10 ? String(date.getMonth() + 1) : String(date.getMonth() + 1).padStart(2, '0');
    const newYear = date.getFullYear();

    return `${newDay}/${newMonth}/${newYear}`;
}

type HeatmapData = {id: number,  x: string; y: string; value: Number, details: Object }[];
let data: HeatmapData = [];

for (let x = 0; x < vocabulary.length; x++) { // Ensure x does not exceed vocabulary length
  for (let y = 0; y < nRow; y++) {
    debugger;
    data.push({
      id: vocabulary[x].id,
      x: getYValue(currentDay, y),
      y: vocabulary[x].word,
      details: vocabulary[x].details,
      value: Math.random() * 40,
      reviews: vocabulary[x].reviews
    });
  }
}

export { data };
