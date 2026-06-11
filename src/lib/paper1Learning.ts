export type LearningFact = { key: string; answer: string; tag: string; explanation: string };
export type LearningTable = { title: string; headers: string[]; rows: string[][] };
export type LearningNote = { heading: string; body: string };
export type LearningQuestion = {
  question: string;
  options: { A: string; B: string; C: string; D: string };
  answer: "A" | "B" | "C" | "D";
  explanation: string;
  subject: string;
  chapter: string;
  topic: string;
  difficulty: "easy" | "medium" | "hard";
  importance: "low" | "medium" | "high";
  sourceHint?: string;
};
export type LearningTopic = {
  id: string;
  day: number;
  title: string;
  bucket: string;
  priority: string;
  why: string;
  concepts: string[];
  notes: LearningNote[];
  tables: LearningTable[];
  mistakes: string[];
  tips: string[];
  facts: LearningFact[];
  pyqPatterns: string[];
};

export const paper1LearningTopics: LearningTopic[] = [
  {
    "id": "orientation-paper1-rank1",
    "day": 1,
    "title": "Paper 1 exam map and rank-one study method",
    "bucket": "Paper 1 Strategy",
    "priority": "Very High",
    "why": "The official scheme makes Paper 1 a blend of Rajasthan GK and General Ability; negative marking makes blind guessing dangerous.",
    "concepts": [
      "Exam pattern",
      "negative marking",
      "topic-wise learning",
      "wrong-question analysis",
      "50-day coverage",
      "night MCQ practice"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Paper 1 Strategy and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: The official scheme makes Paper 1 a blend of Rajasthan GK and General Ability; negative marking makes blind guessing dangerous.\n\nYour coverage for this topic must include: Exam pattern, negative marking, topic-wise learning, wrong-question analysis, 50-day coverage, night MCQ practice."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: Exam pattern, negative marking, topic-wise learning, wrong-question analysis, 50-day coverage, night MCQ practice."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Paper 1 total questions: 100 MCQs.\n2. Paper 1 marks: 100 marks.\n3. Duration: 2 hours.\n4. Negative marking: 1/3 for each wrong answer.\n5. Rajasthan GK coverage: Art, Culture, History, Geography, General Science, Rajasthan CA.\n6. General Ability coverage: Reasoning, Decision Making, Mental Ability, Numeracy, DI.\n7. Safe strategy: skip unknown rather than random guessing.\n8. Learning method: theory table + 100 MCQs + wrong notebook.\n9. Rank target: accuracy before speed.\n10. Daily MCQ target: 100 topic-wise at night.\n\nUse this app as a complete cycle: read notes, solve topic-wise JSON, review explanations, bookmark weak areas, and repeat after 24 hours. The goal is not to finish notes once; the goal is to convert each concept into recall speed."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Paper 1 total questions",
            "100 MCQs",
            "strategy"
          ],
          [
            "Paper 1 marks",
            "100 marks",
            "strategy"
          ],
          [
            "Duration",
            "2 hours",
            "strategy"
          ],
          [
            "Negative marking",
            "1/3 for each wrong answer",
            "strategy"
          ],
          [
            "Rajasthan GK coverage",
            "Art, Culture, History, Geography, General Science, Rajasthan CA",
            "strategy"
          ],
          [
            "General Ability coverage",
            "Reasoning, Decision Making, Mental Ability, Numeracy, DI",
            "strategy"
          ],
          [
            "Safe strategy",
            "skip unknown rather than random guessing",
            "strategy"
          ],
          [
            "Learning method",
            "theory table + 100 MCQs + wrong notebook",
            "strategy"
          ],
          [
            "Rank target",
            "accuracy before speed",
            "strategy"
          ],
          [
            "Daily MCQ target",
            "100 topic-wise at night",
            "strategy"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Paper 1 total questions",
        "answer": "100 MCQs",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: Paper 1 total questions — 100 MCQs. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Paper 1 marks",
        "answer": "100 marks",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: Paper 1 marks — 100 marks. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Duration",
        "answer": "2 hours",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: Duration — 2 hours. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Negative marking",
        "answer": "1/3 for each wrong answer",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: Negative marking — 1/3 for each wrong answer. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rajasthan GK coverage",
        "answer": "Art, Culture, History, Geography, General Science, Rajasthan CA",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: Rajasthan GK coverage — Art, Culture, History, Geography, General Science, Rajasthan CA. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "General Ability coverage",
        "answer": "Reasoning, Decision Making, Mental Ability, Numeracy, DI",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: General Ability coverage — Reasoning, Decision Making, Mental Ability, Numeracy, DI. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Safe strategy",
        "answer": "skip unknown rather than random guessing",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: Safe strategy — skip unknown rather than random guessing. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Learning method",
        "answer": "theory table + 100 MCQs + wrong notebook",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: Learning method — theory table + 100 MCQs + wrong notebook. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rank target",
        "answer": "accuracy before speed",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: Rank target — accuracy before speed. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Daily MCQ target",
        "answer": "100 topic-wise at night",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: Daily MCQ target — 100 topic-wise at night. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Exam pattern",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Exam pattern is a core subtopic for Paper 1 exam map and rank-one study method. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "negative marking",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "negative marking is a core subtopic for Paper 1 exam map and rank-one study method. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "topic-wise learning",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "topic-wise learning is a core subtopic for Paper 1 exam map and rank-one study method. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "wrong-question analysis",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "wrong-question analysis is a core subtopic for Paper 1 exam map and rank-one study method. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "50-day coverage",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "50-day coverage is a core subtopic for Paper 1 exam map and rank-one study method. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "night MCQ practice",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "night MCQ practice is a core subtopic for Paper 1 exam map and rank-one study method. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "culture-dance-music-theatre",
    "day": 2,
    "title": "Folk dances, music, instruments and theatre",
    "bucket": "Rajasthan Art & Culture",
    "priority": "Very High",
    "why": "PYQs repeatedly ask dance-community, instrument-performer and folk theatre pairs.",
    "concepts": [
      "Ghoomar",
      "Kalbeliya",
      "Bhavai",
      "Gair",
      "Chari",
      "Terah Taali",
      "Kachhi Ghodi",
      "Gavri",
      "Maand",
      "Panihari",
      "Langa",
      "Manganiyar",
      "Bhopa-Bhopi",
      "Ravanhatta",
      "Kathputli"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan Art & Culture and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: PYQs repeatedly ask dance-community, instrument-performer and folk theatre pairs.\n\nYour coverage for this topic must include: Ghoomar, Kalbeliya, Bhavai, Gair, Chari, Terah Taali, Kachhi Ghodi, Gavri, Maand, Panihari, Langa, Manganiyar, Bhopa-Bhopi, Ravanhatta, Kathputli."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: Ghoomar, Kalbeliya, Bhavai, Gair, Chari, Terah Taali, Kachhi Ghodi, Gavri, Maand, Panihari, Langa, Manganiyar, Bhopa-Bhopi, Ravanhatta, Kathputli."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Ghoomar: women's traditional dance of Rajasthan.\n2. Kalbeliya: Kalbeliya community, serpent-like movement.\n3. Bhavai: balancing pots/objects.\n4. Gair: group circular/festival dance.\n5. Chari: pot/lamp dance tradition.\n6. Terah Taali: Kamadia community, manjira-based.\n7. Kachhi Ghodi: dummy horse dance.\n8. Gavri: Bhil ritual theatre/performance.\n9. Maand: classical-flavoured folk singing.\n10. Panihari: water-carrier/desert life songs.\n11. Langa: western Rajasthan hereditary musician community.\n12. Manganiyar: hereditary musician community.\n13. Ravanhatta: Bhopa-Bhopi instrument.\n14. Algoza: double flute.\n15. Kathputli: puppet theatre."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Ghoomar",
            "women's traditional dance of Rajasthan",
            "culture-pair"
          ],
          [
            "Kalbeliya",
            "Kalbeliya community, serpent-like movement",
            "culture-pair"
          ],
          [
            "Bhavai",
            "balancing pots/objects",
            "culture-pair"
          ],
          [
            "Gair",
            "group circular/festival dance",
            "culture-pair"
          ],
          [
            "Chari",
            "pot/lamp dance tradition",
            "culture-pair"
          ],
          [
            "Terah Taali",
            "Kamadia community, manjira-based",
            "culture-pair"
          ],
          [
            "Kachhi Ghodi",
            "dummy horse dance",
            "culture-pair"
          ],
          [
            "Gavri",
            "Bhil ritual theatre/performance",
            "culture-pair"
          ],
          [
            "Maand",
            "classical-flavoured folk singing",
            "culture-pair"
          ],
          [
            "Panihari",
            "water-carrier/desert life songs",
            "culture-pair"
          ],
          [
            "Langa",
            "western Rajasthan hereditary musician community",
            "culture-pair"
          ],
          [
            "Manganiyar",
            "hereditary musician community",
            "culture-pair"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Ghoomar",
        "answer": "women's traditional dance of Rajasthan",
        "tag": "culture-pair",
        "explanation": "For exam memory, keep the fixed pair: Ghoomar — women's traditional dance of Rajasthan. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Kalbeliya",
        "answer": "Kalbeliya community, serpent-like movement",
        "tag": "culture-pair",
        "explanation": "For exam memory, keep the fixed pair: Kalbeliya — Kalbeliya community, serpent-like movement. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bhavai",
        "answer": "balancing pots/objects",
        "tag": "culture-pair",
        "explanation": "For exam memory, keep the fixed pair: Bhavai — balancing pots/objects. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Gair",
        "answer": "group circular/festival dance",
        "tag": "culture-pair",
        "explanation": "For exam memory, keep the fixed pair: Gair — group circular/festival dance. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Chari",
        "answer": "pot/lamp dance tradition",
        "tag": "culture-pair",
        "explanation": "For exam memory, keep the fixed pair: Chari — pot/lamp dance tradition. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Terah Taali",
        "answer": "Kamadia community, manjira-based",
        "tag": "culture-pair",
        "explanation": "For exam memory, keep the fixed pair: Terah Taali — Kamadia community, manjira-based. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Kachhi Ghodi",
        "answer": "dummy horse dance",
        "tag": "culture-pair",
        "explanation": "For exam memory, keep the fixed pair: Kachhi Ghodi — dummy horse dance. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Gavri",
        "answer": "Bhil ritual theatre/performance",
        "tag": "culture-pair",
        "explanation": "For exam memory, keep the fixed pair: Gavri — Bhil ritual theatre/performance. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Maand",
        "answer": "classical-flavoured folk singing",
        "tag": "culture-pair",
        "explanation": "For exam memory, keep the fixed pair: Maand — classical-flavoured folk singing. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Panihari",
        "answer": "water-carrier/desert life songs",
        "tag": "culture-pair",
        "explanation": "For exam memory, keep the fixed pair: Panihari — water-carrier/desert life songs. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Langa",
        "answer": "western Rajasthan hereditary musician community",
        "tag": "culture-pair",
        "explanation": "For exam memory, keep the fixed pair: Langa — western Rajasthan hereditary musician community. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Manganiyar",
        "answer": "hereditary musician community",
        "tag": "culture-pair",
        "explanation": "For exam memory, keep the fixed pair: Manganiyar — hereditary musician community. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Ravanhatta",
        "answer": "Bhopa-Bhopi instrument",
        "tag": "culture-pair",
        "explanation": "For exam memory, keep the fixed pair: Ravanhatta — Bhopa-Bhopi instrument. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Algoza",
        "answer": "double flute",
        "tag": "culture-pair",
        "explanation": "For exam memory, keep the fixed pair: Algoza — double flute. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Kathputli",
        "answer": "puppet theatre",
        "tag": "culture-pair",
        "explanation": "For exam memory, keep the fixed pair: Kathputli — puppet theatre. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bhopa-Bhopi",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Bhopa-Bhopi is a core subtopic for Folk dances, music, instruments and theatre. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "culture-paintings-schools",
    "day": 3,
    "title": "Paintings and painting schools of Rajasthan",
    "bucket": "Rajasthan Art & Culture",
    "priority": "Very High",
    "why": "The 2022 pattern includes book-art-school and painting-style matching; this is a direct scoring area.",
    "concepts": [
      "Phad",
      "Pichwai",
      "Mandana",
      "Sanjhi",
      "Mewar school",
      "Marwar school",
      "Bundi school",
      "Kota school",
      "Kishangarh school",
      "Bikaner school",
      "Jaipur school",
      "Alwar school"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan Art & Culture and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: The 2022 pattern includes book-art-school and painting-style matching; this is a direct scoring area.\n\nYour coverage for this topic must include: Phad, Pichwai, Mandana, Sanjhi, Mewar school, Marwar school, Bundi school, Kota school, Kishangarh school, Bikaner school, Jaipur school, Alwar school."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: Phad, Pichwai, Mandana, Sanjhi, Mewar school, Marwar school, Bundi school, Kota school, Kishangarh school, Bikaner school, Jaipur school, Alwar school."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Phad: long cloth scroll painting; Pabuji/Devnarayanji.\n2. Pichwai: Nathdwara; Shrinathji.\n3. Mandana: wall/floor decoration.\n4. Sanjhi: stencil/decorative devotional art.\n5. Kishangarh school: Bani Thani.\n6. Mewar school: traditional Hindu/devotional themes.\n7. Marwar school: court and local heroic themes.\n8. Bundi school: nature, monsoon, palace scenes.\n9. Kota school: hunting and wildlife scenes.\n10. Bikaner school: Mughal/Deccan influence.\n11. Jaipur school: courtly and refined style.\n12. Alwar school: late miniature tradition."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Phad",
            "long cloth scroll painting; Pabuji/Devnarayanji",
            "painting"
          ],
          [
            "Pichwai",
            "Nathdwara; Shrinathji",
            "painting"
          ],
          [
            "Mandana",
            "wall/floor decoration",
            "painting"
          ],
          [
            "Sanjhi",
            "stencil/decorative devotional art",
            "painting"
          ],
          [
            "Kishangarh school",
            "Bani Thani",
            "painting"
          ],
          [
            "Mewar school",
            "traditional Hindu/devotional themes",
            "painting"
          ],
          [
            "Marwar school",
            "court and local heroic themes",
            "painting"
          ],
          [
            "Bundi school",
            "nature, monsoon, palace scenes",
            "painting"
          ],
          [
            "Kota school",
            "hunting and wildlife scenes",
            "painting"
          ],
          [
            "Bikaner school",
            "Mughal/Deccan influence",
            "painting"
          ],
          [
            "Jaipur school",
            "courtly and refined style",
            "painting"
          ],
          [
            "Alwar school",
            "late miniature tradition",
            "painting"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Phad",
        "answer": "long cloth scroll painting; Pabuji/Devnarayanji",
        "tag": "painting",
        "explanation": "For exam memory, keep the fixed pair: Phad — long cloth scroll painting; Pabuji/Devnarayanji. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Pichwai",
        "answer": "Nathdwara; Shrinathji",
        "tag": "painting",
        "explanation": "For exam memory, keep the fixed pair: Pichwai — Nathdwara; Shrinathji. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mandana",
        "answer": "wall/floor decoration",
        "tag": "painting",
        "explanation": "For exam memory, keep the fixed pair: Mandana — wall/floor decoration. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Sanjhi",
        "answer": "stencil/decorative devotional art",
        "tag": "painting",
        "explanation": "For exam memory, keep the fixed pair: Sanjhi — stencil/decorative devotional art. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Kishangarh school",
        "answer": "Bani Thani",
        "tag": "painting",
        "explanation": "For exam memory, keep the fixed pair: Kishangarh school — Bani Thani. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mewar school",
        "answer": "traditional Hindu/devotional themes",
        "tag": "painting",
        "explanation": "For exam memory, keep the fixed pair: Mewar school — traditional Hindu/devotional themes. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Marwar school",
        "answer": "court and local heroic themes",
        "tag": "painting",
        "explanation": "For exam memory, keep the fixed pair: Marwar school — court and local heroic themes. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bundi school",
        "answer": "nature, monsoon, palace scenes",
        "tag": "painting",
        "explanation": "For exam memory, keep the fixed pair: Bundi school — nature, monsoon, palace scenes. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Kota school",
        "answer": "hunting and wildlife scenes",
        "tag": "painting",
        "explanation": "For exam memory, keep the fixed pair: Kota school — hunting and wildlife scenes. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bikaner school",
        "answer": "Mughal/Deccan influence",
        "tag": "painting",
        "explanation": "For exam memory, keep the fixed pair: Bikaner school — Mughal/Deccan influence. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Jaipur school",
        "answer": "courtly and refined style",
        "tag": "painting",
        "explanation": "For exam memory, keep the fixed pair: Jaipur school — courtly and refined style. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Alwar school",
        "answer": "late miniature tradition",
        "tag": "painting",
        "explanation": "For exam memory, keep the fixed pair: Alwar school — late miniature tradition. This is useful for direct, match-the-following and incorrect-pair questions."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "culture-crafts-textiles",
    "day": 4,
    "title": "Handicrafts, textiles, prints and GI-style memory",
    "bucket": "Rajasthan Art & Culture",
    "priority": "Very High",
    "why": "Craft-place-material questions are among the easiest if memorised as a table.",
    "concepts": [
      "Thewa",
      "Usta",
      "Blue Pottery",
      "Meenakari",
      "Kota Doria",
      "Bandhej",
      "Leheriya",
      "Sanganeri print",
      "Bagru print",
      "Lac work"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan Art & Culture and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Craft-place-material questions are among the easiest if memorised as a table.\n\nYour coverage for this topic must include: Thewa, Usta, Blue Pottery, Meenakari, Kota Doria, Bandhej, Leheriya, Sanganeri print, Bagru print, Lac work."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: Thewa, Usta, Blue Pottery, Meenakari, Kota Doria, Bandhej, Leheriya, Sanganeri print, Bagru print, Lac work."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Thewa: Pratapgarh; gold on glass.\n2. Usta art: Bikaner; ornamental gold work.\n3. Blue Pottery: Jaipur.\n4. Meenakari: Jaipur enamel work.\n5. Kota Doria: Kota-Bundi textile.\n6. Bandhej: tie-dye textile.\n7. Leheriya: wave-pattern tie-dye.\n8. Sanganeri print: Sanganer; block print.\n9. Bagru print: Bagru; block print.\n10. Mojari/Jutti: traditional footwear.\n11. Lac work: Jaipur and other craft centres.\n12. Puppets: Rajasthan Kathputli tradition."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Thewa",
            "Pratapgarh; gold on glass",
            "craft-place"
          ],
          [
            "Usta art",
            "Bikaner; ornamental gold work",
            "craft-place"
          ],
          [
            "Blue Pottery",
            "Jaipur",
            "craft-place"
          ],
          [
            "Meenakari",
            "Jaipur enamel work",
            "craft-place"
          ],
          [
            "Kota Doria",
            "Kota-Bundi textile",
            "craft-place"
          ],
          [
            "Bandhej",
            "tie-dye textile",
            "craft-place"
          ],
          [
            "Leheriya",
            "wave-pattern tie-dye",
            "craft-place"
          ],
          [
            "Sanganeri print",
            "Sanganer; block print",
            "craft-place"
          ],
          [
            "Bagru print",
            "Bagru; block print",
            "craft-place"
          ],
          [
            "Mojari/Jutti",
            "traditional footwear",
            "craft-place"
          ],
          [
            "Lac work",
            "Jaipur and other craft centres",
            "craft-place"
          ],
          [
            "Puppets",
            "Rajasthan Kathputli tradition",
            "craft-place"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Thewa",
        "answer": "Pratapgarh; gold on glass",
        "tag": "craft-place",
        "explanation": "For exam memory, keep the fixed pair: Thewa — Pratapgarh; gold on glass. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Usta art",
        "answer": "Bikaner; ornamental gold work",
        "tag": "craft-place",
        "explanation": "For exam memory, keep the fixed pair: Usta art — Bikaner; ornamental gold work. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Blue Pottery",
        "answer": "Jaipur",
        "tag": "craft-place",
        "explanation": "For exam memory, keep the fixed pair: Blue Pottery — Jaipur. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Meenakari",
        "answer": "Jaipur enamel work",
        "tag": "craft-place",
        "explanation": "For exam memory, keep the fixed pair: Meenakari — Jaipur enamel work. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Kota Doria",
        "answer": "Kota-Bundi textile",
        "tag": "craft-place",
        "explanation": "For exam memory, keep the fixed pair: Kota Doria — Kota-Bundi textile. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bandhej",
        "answer": "tie-dye textile",
        "tag": "craft-place",
        "explanation": "For exam memory, keep the fixed pair: Bandhej — tie-dye textile. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Leheriya",
        "answer": "wave-pattern tie-dye",
        "tag": "craft-place",
        "explanation": "For exam memory, keep the fixed pair: Leheriya — wave-pattern tie-dye. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Sanganeri print",
        "answer": "Sanganer; block print",
        "tag": "craft-place",
        "explanation": "For exam memory, keep the fixed pair: Sanganeri print — Sanganer; block print. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bagru print",
        "answer": "Bagru; block print",
        "tag": "craft-place",
        "explanation": "For exam memory, keep the fixed pair: Bagru print — Bagru; block print. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mojari/Jutti",
        "answer": "traditional footwear",
        "tag": "craft-place",
        "explanation": "For exam memory, keep the fixed pair: Mojari/Jutti — traditional footwear. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Lac work",
        "answer": "Jaipur and other craft centres",
        "tag": "craft-place",
        "explanation": "For exam memory, keep the fixed pair: Lac work — Jaipur and other craft centres. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Puppets",
        "answer": "Rajasthan Kathputli tradition",
        "tag": "craft-place",
        "explanation": "For exam memory, keep the fixed pair: Puppets — Rajasthan Kathputli tradition. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Usta",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Usta is a core subtopic for Handicrafts, textiles, prints and GI-style memory. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "culture-ornaments-dress",
    "day": 5,
    "title": "Ornaments, dress and community culture",
    "bucket": "Rajasthan Art & Culture",
    "priority": "High",
    "why": "Paper setters ask body-part association and incorrect ornament pairs.",
    "concepts": [
      "Borla",
      "Rakhdi",
      "Timaniya",
      "Hansli",
      "Nath",
      "Bajuband",
      "Kardhani",
      "Paijeb",
      "Pagdi/Safa",
      "Angarkha",
      "Odhani",
      "Ghagra"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan Art & Culture and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Paper setters ask body-part association and incorrect ornament pairs.\n\nYour coverage for this topic must include: Borla, Rakhdi, Timaniya, Hansli, Nath, Bajuband, Kardhani, Paijeb, Pagdi/Safa, Angarkha, Odhani, Ghagra."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: Borla, Rakhdi, Timaniya, Hansli, Nath, Bajuband, Kardhani, Paijeb, Pagdi/Safa, Angarkha, Odhani, Ghagra."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Borla: forehead/head ornament.\n2. Rakhdi: head ornament.\n3. Timaniya: neck ornament.\n4. Hansli: neck ornament.\n5. Nath: nose ornament.\n6. Bajuband: upper arm ornament.\n7. Kardhani: waist ornament.\n8. Paijeb: ankle ornament.\n9. Pagdi/Safa: male headgear.\n10. Angarkha: traditional upper garment.\n11. Odhani: women's veil/covering.\n12. Ghagra: women's skirt."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Borla",
            "forehead/head ornament",
            "ornament-dress"
          ],
          [
            "Rakhdi",
            "head ornament",
            "ornament-dress"
          ],
          [
            "Timaniya",
            "neck ornament",
            "ornament-dress"
          ],
          [
            "Hansli",
            "neck ornament",
            "ornament-dress"
          ],
          [
            "Nath",
            "nose ornament",
            "ornament-dress"
          ],
          [
            "Bajuband",
            "upper arm ornament",
            "ornament-dress"
          ],
          [
            "Kardhani",
            "waist ornament",
            "ornament-dress"
          ],
          [
            "Paijeb",
            "ankle ornament",
            "ornament-dress"
          ],
          [
            "Pagdi/Safa",
            "male headgear",
            "ornament-dress"
          ],
          [
            "Angarkha",
            "traditional upper garment",
            "ornament-dress"
          ],
          [
            "Odhani",
            "women's veil/covering",
            "ornament-dress"
          ],
          [
            "Ghagra",
            "women's skirt",
            "ornament-dress"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Borla",
        "answer": "forehead/head ornament",
        "tag": "ornament-dress",
        "explanation": "For exam memory, keep the fixed pair: Borla — forehead/head ornament. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rakhdi",
        "answer": "head ornament",
        "tag": "ornament-dress",
        "explanation": "For exam memory, keep the fixed pair: Rakhdi — head ornament. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Timaniya",
        "answer": "neck ornament",
        "tag": "ornament-dress",
        "explanation": "For exam memory, keep the fixed pair: Timaniya — neck ornament. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Hansli",
        "answer": "neck ornament",
        "tag": "ornament-dress",
        "explanation": "For exam memory, keep the fixed pair: Hansli — neck ornament. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Nath",
        "answer": "nose ornament",
        "tag": "ornament-dress",
        "explanation": "For exam memory, keep the fixed pair: Nath — nose ornament. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bajuband",
        "answer": "upper arm ornament",
        "tag": "ornament-dress",
        "explanation": "For exam memory, keep the fixed pair: Bajuband — upper arm ornament. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Kardhani",
        "answer": "waist ornament",
        "tag": "ornament-dress",
        "explanation": "For exam memory, keep the fixed pair: Kardhani — waist ornament. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Paijeb",
        "answer": "ankle ornament",
        "tag": "ornament-dress",
        "explanation": "For exam memory, keep the fixed pair: Paijeb — ankle ornament. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Pagdi/Safa",
        "answer": "male headgear",
        "tag": "ornament-dress",
        "explanation": "For exam memory, keep the fixed pair: Pagdi/Safa — male headgear. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Angarkha",
        "answer": "traditional upper garment",
        "tag": "ornament-dress",
        "explanation": "For exam memory, keep the fixed pair: Angarkha — traditional upper garment. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Odhani",
        "answer": "women's veil/covering",
        "tag": "ornament-dress",
        "explanation": "For exam memory, keep the fixed pair: Odhani — women's veil/covering. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Ghagra",
        "answer": "women's skirt",
        "tag": "ornament-dress",
        "explanation": "For exam memory, keep the fixed pair: Ghagra — women's skirt. This is useful for direct, match-the-following and incorrect-pair questions."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "culture-fairs-festivals-deities",
    "day": 6,
    "title": "Fairs, festivals, temples and folk deities",
    "bucket": "Rajasthan Art & Culture",
    "priority": "Very High",
    "why": "Rajasthan GK PYQs often ask fair-district-deity-month and folk deity-symbol pairs.",
    "concepts": [
      "Pushkar",
      "Beneshwar",
      "Ramdevra",
      "Gogamedi",
      "Kaila Devi",
      "Karni Mata",
      "Gangaur",
      "Teej",
      "Sheetla Ashtami",
      "Pabuji",
      "Tejaji",
      "Gogaji",
      "Ramdevji",
      "Devnarayanji"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan Art & Culture and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Rajasthan GK PYQs often ask fair-district-deity-month and folk deity-symbol pairs.\n\nYour coverage for this topic must include: Pushkar, Beneshwar, Ramdevra, Gogamedi, Kaila Devi, Karni Mata, Gangaur, Teej, Sheetla Ashtami, Pabuji, Tejaji, Gogaji, Ramdevji, Devnarayanji."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: Pushkar, Beneshwar, Ramdevra, Gogamedi, Kaila Devi, Karni Mata, Gangaur, Teej, Sheetla Ashtami, Pabuji, Tejaji, Gogaji, Ramdevji, Devnarayanji."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Pushkar fair: Ajmer; Kartik context.\n2. Beneshwar fair: Mahi-Som-Jakham confluence.\n3. Ramdevra fair: Baba Ramdevji.\n4. Gogamedi fair: Gogaji.\n5. Kaila Devi fair: Karauli region.\n6. Karni Mata: Deshnok, Bikaner.\n7. Gangaur: Gauri/Shiva-Parvati worship.\n8. Teej: monsoon/women's festival.\n9. Sheetla Ashtami: Sheetla Mata worship.\n10. Urs Ajmer: Khwaja Moinuddin Chishti.\n11. Pabuji: folk deity; Phad tradition.\n12. Tejaji: snakebite protector folk deity.\n13. Devnarayanji: Gurjar-linked folk deity.\n14. Mallinathji: Marwar folk deity/fair."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Pushkar fair",
            "Ajmer; Kartik context",
            "fair-deity"
          ],
          [
            "Beneshwar fair",
            "Mahi-Som-Jakham confluence",
            "fair-deity"
          ],
          [
            "Ramdevra fair",
            "Baba Ramdevji",
            "fair-deity"
          ],
          [
            "Gogamedi fair",
            "Gogaji",
            "fair-deity"
          ],
          [
            "Kaila Devi fair",
            "Karauli region",
            "fair-deity"
          ],
          [
            "Karni Mata",
            "Deshnok, Bikaner",
            "fair-deity"
          ],
          [
            "Gangaur",
            "Gauri/Shiva-Parvati worship",
            "fair-deity"
          ],
          [
            "Teej",
            "monsoon/women's festival",
            "fair-deity"
          ],
          [
            "Sheetla Ashtami",
            "Sheetla Mata worship",
            "fair-deity"
          ],
          [
            "Urs Ajmer",
            "Khwaja Moinuddin Chishti",
            "fair-deity"
          ],
          [
            "Pabuji",
            "folk deity; Phad tradition",
            "fair-deity"
          ],
          [
            "Tejaji",
            "snakebite protector folk deity",
            "fair-deity"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Pushkar fair",
        "answer": "Ajmer; Kartik context",
        "tag": "fair-deity",
        "explanation": "For exam memory, keep the fixed pair: Pushkar fair — Ajmer; Kartik context. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Beneshwar fair",
        "answer": "Mahi-Som-Jakham confluence",
        "tag": "fair-deity",
        "explanation": "For exam memory, keep the fixed pair: Beneshwar fair — Mahi-Som-Jakham confluence. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Ramdevra fair",
        "answer": "Baba Ramdevji",
        "tag": "fair-deity",
        "explanation": "For exam memory, keep the fixed pair: Ramdevra fair — Baba Ramdevji. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Gogamedi fair",
        "answer": "Gogaji",
        "tag": "fair-deity",
        "explanation": "For exam memory, keep the fixed pair: Gogamedi fair — Gogaji. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Kaila Devi fair",
        "answer": "Karauli region",
        "tag": "fair-deity",
        "explanation": "For exam memory, keep the fixed pair: Kaila Devi fair — Karauli region. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Karni Mata",
        "answer": "Deshnok, Bikaner",
        "tag": "fair-deity",
        "explanation": "For exam memory, keep the fixed pair: Karni Mata — Deshnok, Bikaner. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Gangaur",
        "answer": "Gauri/Shiva-Parvati worship",
        "tag": "fair-deity",
        "explanation": "For exam memory, keep the fixed pair: Gangaur — Gauri/Shiva-Parvati worship. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Teej",
        "answer": "monsoon/women's festival",
        "tag": "fair-deity",
        "explanation": "For exam memory, keep the fixed pair: Teej — monsoon/women's festival. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Sheetla Ashtami",
        "answer": "Sheetla Mata worship",
        "tag": "fair-deity",
        "explanation": "For exam memory, keep the fixed pair: Sheetla Ashtami — Sheetla Mata worship. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Urs Ajmer",
        "answer": "Khwaja Moinuddin Chishti",
        "tag": "fair-deity",
        "explanation": "For exam memory, keep the fixed pair: Urs Ajmer — Khwaja Moinuddin Chishti. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Pabuji",
        "answer": "folk deity; Phad tradition",
        "tag": "fair-deity",
        "explanation": "For exam memory, keep the fixed pair: Pabuji — folk deity; Phad tradition. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Tejaji",
        "answer": "snakebite protector folk deity",
        "tag": "fair-deity",
        "explanation": "For exam memory, keep the fixed pair: Tejaji — snakebite protector folk deity. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Devnarayanji",
        "answer": "Gurjar-linked folk deity",
        "tag": "fair-deity",
        "explanation": "For exam memory, keep the fixed pair: Devnarayanji — Gurjar-linked folk deity. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mallinathji",
        "answer": "Marwar folk deity/fair",
        "tag": "fair-deity",
        "explanation": "For exam memory, keep the fixed pair: Mallinathji — Marwar folk deity/fair. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Pushkar",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Pushkar is a core subtopic for Fairs, festivals, temples and folk deities. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Beneshwar",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Beneshwar is a core subtopic for Fairs, festivals, temples and folk deities. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Ramdevra",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Ramdevra is a core subtopic for Fairs, festivals, temples and folk deities. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Gogamedi",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Gogamedi is a core subtopic for Fairs, festivals, temples and folk deities. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Kaila Devi",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Kaila Devi is a core subtopic for Fairs, festivals, temples and folk deities. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Gogaji",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Gogaji is a core subtopic for Fairs, festivals, temples and folk deities. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Ramdevji",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Ramdevji is a core subtopic for Fairs, festivals, temples and folk deities. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "culture-institutions-museums",
    "day": 7,
    "title": "Cultural institutions, museums and academies",
    "bucket": "Rajasthan Art & Culture",
    "priority": "High",
    "why": "The papers ask institution-location-founder/function style questions, especially in match lists.",
    "concepts": [
      "Lok Kala Mandal",
      "Jawahar Kala Kendra",
      "Lalit Kala Akademi",
      "Sahitya Akademi",
      "Sangeet Natak Akademi",
      "Oriental Research Institute",
      "Albert Hall",
      "Ahar Museum",
      "Jantar Mantar"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan Art & Culture and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: The papers ask institution-location-founder/function style questions, especially in match lists.\n\nYour coverage for this topic must include: Lok Kala Mandal, Jawahar Kala Kendra, Lalit Kala Akademi, Sahitya Akademi, Sangeet Natak Akademi, Oriental Research Institute, Albert Hall, Ahar Museum, Jantar Mantar."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: Lok Kala Mandal, Jawahar Kala Kendra, Lalit Kala Akademi, Sahitya Akademi, Sangeet Natak Akademi, Oriental Research Institute, Albert Hall, Ahar Museum, Jantar Mantar."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Bharatiya Lok Kala Mandal: Udaipur; folk culture preservation.\n2. Jawahar Kala Kendra: Jaipur; art and culture centre.\n3. Rajasthan Lalit Kala Akademi: visual arts promotion.\n4. Rajasthan Sahitya Akademi: literary activities.\n5. Rajasthan Sangeet Natak Akademi: performing arts.\n6. Rajasthani Bhasha Sahitya Sanskriti Akademi: Bikaner; language/culture.\n7. Rajasthan Oriental Research Institute: Jodhpur; manuscripts/research.\n8. City Palace Museum: Udaipur/Jaipur palace heritage context.\n9. Albert Hall Museum: Jaipur.\n10. Ahar Museum: Udaipur archaeology.\n11. Hawa Mahal: Jaipur.\n12. Jantar Mantar Jaipur: Sawai Jai Singh II; astronomy."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Bharatiya Lok Kala Mandal",
            "Udaipur; folk culture preservation",
            "institution"
          ],
          [
            "Jawahar Kala Kendra",
            "Jaipur; art and culture centre",
            "institution"
          ],
          [
            "Rajasthan Lalit Kala Akademi",
            "visual arts promotion",
            "institution"
          ],
          [
            "Rajasthan Sahitya Akademi",
            "literary activities",
            "institution"
          ],
          [
            "Rajasthan Sangeet Natak Akademi",
            "performing arts",
            "institution"
          ],
          [
            "Rajasthani Bhasha Sahitya Sanskriti Akademi",
            "Bikaner; language/culture",
            "institution"
          ],
          [
            "Rajasthan Oriental Research Institute",
            "Jodhpur; manuscripts/research",
            "institution"
          ],
          [
            "City Palace Museum",
            "Udaipur/Jaipur palace heritage context",
            "institution"
          ],
          [
            "Albert Hall Museum",
            "Jaipur",
            "institution"
          ],
          [
            "Ahar Museum",
            "Udaipur archaeology",
            "institution"
          ],
          [
            "Hawa Mahal",
            "Jaipur",
            "institution"
          ],
          [
            "Jantar Mantar Jaipur",
            "Sawai Jai Singh II; astronomy",
            "institution"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Bharatiya Lok Kala Mandal",
        "answer": "Udaipur; folk culture preservation",
        "tag": "institution",
        "explanation": "For exam memory, keep the fixed pair: Bharatiya Lok Kala Mandal — Udaipur; folk culture preservation. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Jawahar Kala Kendra",
        "answer": "Jaipur; art and culture centre",
        "tag": "institution",
        "explanation": "For exam memory, keep the fixed pair: Jawahar Kala Kendra — Jaipur; art and culture centre. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rajasthan Lalit Kala Akademi",
        "answer": "visual arts promotion",
        "tag": "institution",
        "explanation": "For exam memory, keep the fixed pair: Rajasthan Lalit Kala Akademi — visual arts promotion. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rajasthan Sahitya Akademi",
        "answer": "literary activities",
        "tag": "institution",
        "explanation": "For exam memory, keep the fixed pair: Rajasthan Sahitya Akademi — literary activities. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rajasthan Sangeet Natak Akademi",
        "answer": "performing arts",
        "tag": "institution",
        "explanation": "For exam memory, keep the fixed pair: Rajasthan Sangeet Natak Akademi — performing arts. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rajasthani Bhasha Sahitya Sanskriti Akademi",
        "answer": "Bikaner; language/culture",
        "tag": "institution",
        "explanation": "For exam memory, keep the fixed pair: Rajasthani Bhasha Sahitya Sanskriti Akademi — Bikaner; language/culture. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rajasthan Oriental Research Institute",
        "answer": "Jodhpur; manuscripts/research",
        "tag": "institution",
        "explanation": "For exam memory, keep the fixed pair: Rajasthan Oriental Research Institute — Jodhpur; manuscripts/research. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "City Palace Museum",
        "answer": "Udaipur/Jaipur palace heritage context",
        "tag": "institution",
        "explanation": "For exam memory, keep the fixed pair: City Palace Museum — Udaipur/Jaipur palace heritage context. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Albert Hall Museum",
        "answer": "Jaipur",
        "tag": "institution",
        "explanation": "For exam memory, keep the fixed pair: Albert Hall Museum — Jaipur. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Ahar Museum",
        "answer": "Udaipur archaeology",
        "tag": "institution",
        "explanation": "For exam memory, keep the fixed pair: Ahar Museum — Udaipur archaeology. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Hawa Mahal",
        "answer": "Jaipur",
        "tag": "institution",
        "explanation": "For exam memory, keep the fixed pair: Hawa Mahal — Jaipur. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Jantar Mantar Jaipur",
        "answer": "Sawai Jai Singh II; astronomy",
        "tag": "institution",
        "explanation": "For exam memory, keep the fixed pair: Jantar Mantar Jaipur — Sawai Jai Singh II; astronomy. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Lok Kala Mandal",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Lok Kala Mandal is a core subtopic for Cultural institutions, museums and academies. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Lalit Kala Akademi",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Lalit Kala Akademi is a core subtopic for Cultural institutions, museums and academies. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Sahitya Akademi",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Sahitya Akademi is a core subtopic for Cultural institutions, museums and academies. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Sangeet Natak Akademi",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Sangeet Natak Akademi is a core subtopic for Cultural institutions, museums and academies. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Oriental Research Institute",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Oriental Research Institute is a core subtopic for Cultural institutions, museums and academies. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Albert Hall",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Albert Hall is a core subtopic for Cultural institutions, museums and academies. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Jantar Mantar",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Jantar Mantar is a core subtopic for Cultural institutions, museums and academies. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "history-archaeology",
    "day": 8,
    "title": "Ancient Rajasthan and archaeological sites",
    "bucket": "Rajasthan History",
    "priority": "Very High",
    "why": "PYQs directly ask site-district, site-culture and not-correct archaeological pair.",
    "concepts": [
      "Kalibanga",
      "Ahar",
      "Ganeshwar",
      "Bairath",
      "Gilund",
      "Balathal",
      "Bagor",
      "Tilwara",
      "Nagari",
      "Sunari",
      "Ojhiyana",
      "Jodhpura"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan History and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: PYQs directly ask site-district, site-culture and not-correct archaeological pair.\n\nYour coverage for this topic must include: Kalibanga, Ahar, Ganeshwar, Bairath, Gilund, Balathal, Bagor, Tilwara, Nagari, Sunari, Ojhiyana, Jodhpura."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: Kalibanga, Ahar, Ganeshwar, Bairath, Gilund, Balathal, Bagor, Tilwara, Nagari, Sunari, Ojhiyana, Jodhpura."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Kalibanga: Hanumangarh; Harappan; ploughed field.\n2. Ahar: Udaipur; Ahar-Banas Chalcolithic culture.\n3. Ganeshwar: Sikar/Neem ka Thana belt; copper culture.\n4. Bairath/Viratnagar: Jaipur; Matsya region; Ashokan/Buddhist remains.\n5. Gilund: Rajsamand; Ahar-Banas culture.\n6. Balathal: Udaipur region; Chalcolithic.\n7. Bagor: Bhilwara; Mesolithic.\n8. Tilwara: Barmer; ancient/early culture evidence.\n9. Nagari: Chittorgarh; ancient Madhyamika.\n10. Sunari: Jhunjhunu; archaeological site.\n11. Ojhiyana: Chittorgarh region.\n12. Jodhpura: Jaipur region."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Kalibanga",
            "Hanumangarh; Harappan; ploughed field",
            "site-district"
          ],
          [
            "Ahar",
            "Udaipur; Ahar-Banas Chalcolithic culture",
            "site-district"
          ],
          [
            "Ganeshwar",
            "Sikar/Neem ka Thana belt; copper culture",
            "site-district"
          ],
          [
            "Bairath/Viratnagar",
            "Jaipur; Matsya region; Ashokan/Buddhist remains",
            "site-district"
          ],
          [
            "Gilund",
            "Rajsamand; Ahar-Banas culture",
            "site-district"
          ],
          [
            "Balathal",
            "Udaipur region; Chalcolithic",
            "site-district"
          ],
          [
            "Bagor",
            "Bhilwara; Mesolithic",
            "site-district"
          ],
          [
            "Tilwara",
            "Barmer; ancient/early culture evidence",
            "site-district"
          ],
          [
            "Nagari",
            "Chittorgarh; ancient Madhyamika",
            "site-district"
          ],
          [
            "Sunari",
            "Jhunjhunu; archaeological site",
            "site-district"
          ],
          [
            "Ojhiyana",
            "Chittorgarh region",
            "site-district"
          ],
          [
            "Jodhpura",
            "Jaipur region",
            "site-district"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Kalibanga",
        "answer": "Hanumangarh; Harappan; ploughed field",
        "tag": "site-district",
        "explanation": "For exam memory, keep the fixed pair: Kalibanga — Hanumangarh; Harappan; ploughed field. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Ahar",
        "answer": "Udaipur; Ahar-Banas Chalcolithic culture",
        "tag": "site-district",
        "explanation": "For exam memory, keep the fixed pair: Ahar — Udaipur; Ahar-Banas Chalcolithic culture. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Ganeshwar",
        "answer": "Sikar/Neem ka Thana belt; copper culture",
        "tag": "site-district",
        "explanation": "For exam memory, keep the fixed pair: Ganeshwar — Sikar/Neem ka Thana belt; copper culture. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bairath/Viratnagar",
        "answer": "Jaipur; Matsya region; Ashokan/Buddhist remains",
        "tag": "site-district",
        "explanation": "For exam memory, keep the fixed pair: Bairath/Viratnagar — Jaipur; Matsya region; Ashokan/Buddhist remains. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Gilund",
        "answer": "Rajsamand; Ahar-Banas culture",
        "tag": "site-district",
        "explanation": "For exam memory, keep the fixed pair: Gilund — Rajsamand; Ahar-Banas culture. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Balathal",
        "answer": "Udaipur region; Chalcolithic",
        "tag": "site-district",
        "explanation": "For exam memory, keep the fixed pair: Balathal — Udaipur region; Chalcolithic. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bagor",
        "answer": "Bhilwara; Mesolithic",
        "tag": "site-district",
        "explanation": "For exam memory, keep the fixed pair: Bagor — Bhilwara; Mesolithic. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Tilwara",
        "answer": "Barmer; ancient/early culture evidence",
        "tag": "site-district",
        "explanation": "For exam memory, keep the fixed pair: Tilwara — Barmer; ancient/early culture evidence. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Nagari",
        "answer": "Chittorgarh; ancient Madhyamika",
        "tag": "site-district",
        "explanation": "For exam memory, keep the fixed pair: Nagari — Chittorgarh; ancient Madhyamika. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Sunari",
        "answer": "Jhunjhunu; archaeological site",
        "tag": "site-district",
        "explanation": "For exam memory, keep the fixed pair: Sunari — Jhunjhunu; archaeological site. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Ojhiyana",
        "answer": "Chittorgarh region",
        "tag": "site-district",
        "explanation": "For exam memory, keep the fixed pair: Ojhiyana — Chittorgarh region. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Jodhpura",
        "answer": "Jaipur region",
        "tag": "site-district",
        "explanation": "For exam memory, keep the fixed pair: Jodhpura — Jaipur region. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bairath",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Bairath is a core subtopic for Ancient Rajasthan and archaeological sites. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "history-dynasties-rulers",
    "day": 9,
    "title": "Rajput dynasties and major rulers",
    "bucket": "Rajasthan History",
    "priority": "Very High",
    "why": "Dynasty-ruler-capital-work questions are repeated in Rajasthan exams.",
    "concepts": [
      "Sisodia",
      "Rathore",
      "Chauhan",
      "Kachwaha",
      "Bhati",
      "Hada",
      "Bappa Rawal",
      "Rana Kumbha",
      "Rana Sanga",
      "Maharana Pratap",
      "Rao Jodha",
      "Sawai Jai Singh"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan History and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Dynasty-ruler-capital-work questions are repeated in Rajasthan exams.\n\nYour coverage for this topic must include: Sisodia, Rathore, Chauhan, Kachwaha, Bhati, Hada, Bappa Rawal, Rana Kumbha, Rana Sanga, Maharana Pratap, Rao Jodha, Sawai Jai Singh."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: Sisodia, Rathore, Chauhan, Kachwaha, Bhati, Hada, Bappa Rawal, Rana Kumbha, Rana Sanga, Maharana Pratap, Rao Jodha, Sawai Jai Singh."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Guhil/Sisodia: Mewar dynasty.\n2. Bappa Rawal: early Mewar ruler.\n3. Rana Kumbha: Kumbhalgarh, Vijay Stambh association.\n4. Rana Sanga: Battle of Khanwa.\n5. Maharana Pratap: Haldighati, Chavand.\n6. Amar Singh I: Mughal relation/treaty context.\n7. Rathore: Marwar dynasty.\n8. Rao Jodha: founder of Jodhpur.\n9. Rao Maldev: Marwar ruler; Giri Sumel context.\n10. Rao Chandrasen: Forgotten hero of Marwar.\n11. Durgadas Rathore: protected Ajit Singh.\n12. Kachwaha: Amber/Jaipur dynasty.\n13. Sawai Jai Singh II: Jaipur city, Jantar Mantar.\n14. Bhati: Jaisalmer.\n15. Hada: Bundi/Kota."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Guhil/Sisodia",
            "Mewar dynasty",
            "ruler-dynasty"
          ],
          [
            "Bappa Rawal",
            "early Mewar ruler",
            "ruler-dynasty"
          ],
          [
            "Rana Kumbha",
            "Kumbhalgarh, Vijay Stambh association",
            "ruler-dynasty"
          ],
          [
            "Rana Sanga",
            "Battle of Khanwa",
            "ruler-dynasty"
          ],
          [
            "Maharana Pratap",
            "Haldighati, Chavand",
            "ruler-dynasty"
          ],
          [
            "Amar Singh I",
            "Mughal relation/treaty context",
            "ruler-dynasty"
          ],
          [
            "Rathore",
            "Marwar dynasty",
            "ruler-dynasty"
          ],
          [
            "Rao Jodha",
            "founder of Jodhpur",
            "ruler-dynasty"
          ],
          [
            "Rao Maldev",
            "Marwar ruler; Giri Sumel context",
            "ruler-dynasty"
          ],
          [
            "Rao Chandrasen",
            "Forgotten hero of Marwar",
            "ruler-dynasty"
          ],
          [
            "Durgadas Rathore",
            "protected Ajit Singh",
            "ruler-dynasty"
          ],
          [
            "Kachwaha",
            "Amber/Jaipur dynasty",
            "ruler-dynasty"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Guhil/Sisodia",
        "answer": "Mewar dynasty",
        "tag": "ruler-dynasty",
        "explanation": "For exam memory, keep the fixed pair: Guhil/Sisodia — Mewar dynasty. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bappa Rawal",
        "answer": "early Mewar ruler",
        "tag": "ruler-dynasty",
        "explanation": "For exam memory, keep the fixed pair: Bappa Rawal — early Mewar ruler. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rana Kumbha",
        "answer": "Kumbhalgarh, Vijay Stambh association",
        "tag": "ruler-dynasty",
        "explanation": "For exam memory, keep the fixed pair: Rana Kumbha — Kumbhalgarh, Vijay Stambh association. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rana Sanga",
        "answer": "Battle of Khanwa",
        "tag": "ruler-dynasty",
        "explanation": "For exam memory, keep the fixed pair: Rana Sanga — Battle of Khanwa. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Maharana Pratap",
        "answer": "Haldighati, Chavand",
        "tag": "ruler-dynasty",
        "explanation": "For exam memory, keep the fixed pair: Maharana Pratap — Haldighati, Chavand. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Amar Singh I",
        "answer": "Mughal relation/treaty context",
        "tag": "ruler-dynasty",
        "explanation": "For exam memory, keep the fixed pair: Amar Singh I — Mughal relation/treaty context. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rathore",
        "answer": "Marwar dynasty",
        "tag": "ruler-dynasty",
        "explanation": "For exam memory, keep the fixed pair: Rathore — Marwar dynasty. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rao Jodha",
        "answer": "founder of Jodhpur",
        "tag": "ruler-dynasty",
        "explanation": "For exam memory, keep the fixed pair: Rao Jodha — founder of Jodhpur. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rao Maldev",
        "answer": "Marwar ruler; Giri Sumel context",
        "tag": "ruler-dynasty",
        "explanation": "For exam memory, keep the fixed pair: Rao Maldev — Marwar ruler; Giri Sumel context. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rao Chandrasen",
        "answer": "Forgotten hero of Marwar",
        "tag": "ruler-dynasty",
        "explanation": "For exam memory, keep the fixed pair: Rao Chandrasen — Forgotten hero of Marwar. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Durgadas Rathore",
        "answer": "protected Ajit Singh",
        "tag": "ruler-dynasty",
        "explanation": "For exam memory, keep the fixed pair: Durgadas Rathore — protected Ajit Singh. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Kachwaha",
        "answer": "Amber/Jaipur dynasty",
        "tag": "ruler-dynasty",
        "explanation": "For exam memory, keep the fixed pair: Kachwaha — Amber/Jaipur dynasty. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Sawai Jai Singh II",
        "answer": "Jaipur city, Jantar Mantar",
        "tag": "ruler-dynasty",
        "explanation": "For exam memory, keep the fixed pair: Sawai Jai Singh II — Jaipur city, Jantar Mantar. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bhati",
        "answer": "Jaisalmer",
        "tag": "ruler-dynasty",
        "explanation": "For exam memory, keep the fixed pair: Bhati — Jaisalmer. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Hada",
        "answer": "Bundi/Kota",
        "tag": "ruler-dynasty",
        "explanation": "For exam memory, keep the fixed pair: Hada — Bundi/Kota. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Sisodia",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Sisodia is a core subtopic for Rajput dynasties and major rulers. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Chauhan",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Chauhan is a core subtopic for Rajput dynasties and major rulers. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Sawai Jai Singh",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Sawai Jai Singh is a core subtopic for Rajput dynasties and major rulers. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "history-battles-chronology",
    "day": 10,
    "title": "Battles, chronology and war-result traps",
    "bucket": "Rajasthan History",
    "priority": "Very High",
    "why": "Chronology questions and battle-year-person questions appear frequently.",
    "concepts": [
      "Tarain",
      "Khanwa",
      "Haldighati",
      "Dewair",
      "Giri Sumel",
      "Chavand",
      "Rana Sanga",
      "Maharana Pratap",
      "Rao Maldev"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan History and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Chronology questions and battle-year-person questions appear frequently.\n\nYour coverage for this topic must include: Tarain, Khanwa, Haldighati, Dewair, Giri Sumel, Chavand, Rana Sanga, Maharana Pratap, Rao Maldev."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: Tarain, Khanwa, Haldighati, Dewair, Giri Sumel, Chavand, Rana Sanga, Maharana Pratap, Rao Maldev."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Second Battle of Tarain: 1192; Prithviraj Chauhan vs Muhammad Ghori.\n2. Battle of Khanwa: 1527; Babur vs Rana Sanga.\n3. Battle of Haldighati: 1576; Maharana Pratap vs Mughal forces led by Man Singh.\n4. Battle of Dewair: 1582; Maharana Pratap recovery phase.\n5. Giri Sumel/Sammel: 1544; Sher Shah Suri vs Rao Maldev forces.\n6. Chavand: Maharana Pratap's later capital.\n7. Chetak: Maharana Pratap's horse.\n8. Man Singh: Mughal commander at Haldighati.\n9. Rana Sanga: Khanwa hero.\n10. Rao Maldev: Giri Sumel context."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Second Battle of Tarain",
            "1192; Prithviraj Chauhan vs Muhammad Ghori",
            "battle"
          ],
          [
            "Battle of Khanwa",
            "1527; Babur vs Rana Sanga",
            "battle"
          ],
          [
            "Battle of Haldighati",
            "1576; Maharana Pratap vs Mughal forces led by Man Singh",
            "battle"
          ],
          [
            "Battle of Dewair",
            "1582; Maharana Pratap recovery phase",
            "battle"
          ],
          [
            "Giri Sumel/Sammel",
            "1544; Sher Shah Suri vs Rao Maldev forces",
            "battle"
          ],
          [
            "Chavand",
            "Maharana Pratap's later capital",
            "battle"
          ],
          [
            "Chetak",
            "Maharana Pratap's horse",
            "battle"
          ],
          [
            "Man Singh",
            "Mughal commander at Haldighati",
            "battle"
          ],
          [
            "Rana Sanga",
            "Khanwa hero",
            "battle"
          ],
          [
            "Rao Maldev",
            "Giri Sumel context",
            "battle"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Second Battle of Tarain",
        "answer": "1192; Prithviraj Chauhan vs Muhammad Ghori",
        "tag": "battle",
        "explanation": "For exam memory, keep the fixed pair: Second Battle of Tarain — 1192; Prithviraj Chauhan vs Muhammad Ghori. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Battle of Khanwa",
        "answer": "1527; Babur vs Rana Sanga",
        "tag": "battle",
        "explanation": "For exam memory, keep the fixed pair: Battle of Khanwa — 1527; Babur vs Rana Sanga. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Battle of Haldighati",
        "answer": "1576; Maharana Pratap vs Mughal forces led by Man Singh",
        "tag": "battle",
        "explanation": "For exam memory, keep the fixed pair: Battle of Haldighati — 1576; Maharana Pratap vs Mughal forces led by Man Singh. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Battle of Dewair",
        "answer": "1582; Maharana Pratap recovery phase",
        "tag": "battle",
        "explanation": "For exam memory, keep the fixed pair: Battle of Dewair — 1582; Maharana Pratap recovery phase. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Giri Sumel/Sammel",
        "answer": "1544; Sher Shah Suri vs Rao Maldev forces",
        "tag": "battle",
        "explanation": "For exam memory, keep the fixed pair: Giri Sumel/Sammel — 1544; Sher Shah Suri vs Rao Maldev forces. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Chavand",
        "answer": "Maharana Pratap's later capital",
        "tag": "battle",
        "explanation": "For exam memory, keep the fixed pair: Chavand — Maharana Pratap's later capital. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Chetak",
        "answer": "Maharana Pratap's horse",
        "tag": "battle",
        "explanation": "For exam memory, keep the fixed pair: Chetak — Maharana Pratap's horse. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Man Singh",
        "answer": "Mughal commander at Haldighati",
        "tag": "battle",
        "explanation": "For exam memory, keep the fixed pair: Man Singh — Mughal commander at Haldighati. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rana Sanga",
        "answer": "Khanwa hero",
        "tag": "battle",
        "explanation": "For exam memory, keep the fixed pair: Rana Sanga — Khanwa hero. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rao Maldev",
        "answer": "Giri Sumel context",
        "tag": "battle",
        "explanation": "For exam memory, keep the fixed pair: Rao Maldev — Giri Sumel context. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Tarain",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Tarain is a core subtopic for Battles, chronology and war-result traps. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Khanwa",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Khanwa is a core subtopic for Battles, chronology and war-result traps. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Haldighati",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Haldighati is a core subtopic for Battles, chronology and war-result traps. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Dewair",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Dewair is a core subtopic for Battles, chronology and war-result traps. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Giri Sumel",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Giri Sumel is a core subtopic for Battles, chronology and war-result traps. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Maharana Pratap",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Maharana Pratap is a core subtopic for Battles, chronology and war-result traps. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "history-movements-integration",
    "day": 11,
    "title": "Freedom movements, Praja Mandal and Rajasthan integration",
    "bucket": "Rajasthan History",
    "priority": "Very High",
    "why": "Movement-leader-district and integration-stage questions are high-probability.",
    "concepts": [
      "Bijolia",
      "Begun",
      "Praja Mandal",
      "Bhil movements",
      "Rajasthan Seva Sangh",
      "Matsya Union",
      "Greater Rajasthan",
      "Integration stages"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan History and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Movement-leader-district and integration-stage questions are high-probability.\n\nYour coverage for this topic must include: Bijolia, Begun, Praja Mandal, Bhil movements, Rajasthan Seva Sangh, Matsya Union, Greater Rajasthan, Integration stages."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: Bijolia, Begun, Praja Mandal, Bhil movements, Rajasthan Seva Sangh, Matsya Union, Greater Rajasthan, Integration stages."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Bijolia movement: peasant movement; Vijay Singh Pathik.\n2. Begun movement: peasant movement.\n3. Rajasthan Seva Sangh: political awakening/support to movements.\n4. Praja Mandal: responsible government movement in princely states.\n5. Bhil movement: tribal issues and awakening.\n6. Govind Guru: tribal/Bhagat movement memory.\n7. Matsya Union: stage of Rajasthan integration.\n8. Greater Rajasthan: integration stage.\n9. 1 November 1956: final major reorganisation context.\n10. Hiralal Shastri: first Chief Minister of Rajasthan.\n11. Mohanlal Sukhadia: long-serving CM memory.\n12. Sardar Patel/V.P. Menon: integration of princely states context."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Bijolia movement",
            "peasant movement; Vijay Singh Pathik",
            "movement"
          ],
          [
            "Begun movement",
            "peasant movement",
            "movement"
          ],
          [
            "Rajasthan Seva Sangh",
            "political awakening/support to movements",
            "movement"
          ],
          [
            "Praja Mandal",
            "responsible government movement in princely states",
            "movement"
          ],
          [
            "Bhil movement",
            "tribal issues and awakening",
            "movement"
          ],
          [
            "Govind Guru",
            "tribal/Bhagat movement memory",
            "movement"
          ],
          [
            "Matsya Union",
            "stage of Rajasthan integration",
            "movement"
          ],
          [
            "Greater Rajasthan",
            "integration stage",
            "movement"
          ],
          [
            "1 November 1956",
            "final major reorganisation context",
            "movement"
          ],
          [
            "Hiralal Shastri",
            "first Chief Minister of Rajasthan",
            "movement"
          ],
          [
            "Mohanlal Sukhadia",
            "long-serving CM memory",
            "movement"
          ],
          [
            "Sardar Patel/V.P. Menon",
            "integration of princely states context",
            "movement"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Bijolia movement",
        "answer": "peasant movement; Vijay Singh Pathik",
        "tag": "movement",
        "explanation": "For exam memory, keep the fixed pair: Bijolia movement — peasant movement; Vijay Singh Pathik. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Begun movement",
        "answer": "peasant movement",
        "tag": "movement",
        "explanation": "For exam memory, keep the fixed pair: Begun movement — peasant movement. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rajasthan Seva Sangh",
        "answer": "political awakening/support to movements",
        "tag": "movement",
        "explanation": "For exam memory, keep the fixed pair: Rajasthan Seva Sangh — political awakening/support to movements. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Praja Mandal",
        "answer": "responsible government movement in princely states",
        "tag": "movement",
        "explanation": "For exam memory, keep the fixed pair: Praja Mandal — responsible government movement in princely states. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bhil movement",
        "answer": "tribal issues and awakening",
        "tag": "movement",
        "explanation": "For exam memory, keep the fixed pair: Bhil movement — tribal issues and awakening. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Govind Guru",
        "answer": "tribal/Bhagat movement memory",
        "tag": "movement",
        "explanation": "For exam memory, keep the fixed pair: Govind Guru — tribal/Bhagat movement memory. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Matsya Union",
        "answer": "stage of Rajasthan integration",
        "tag": "movement",
        "explanation": "For exam memory, keep the fixed pair: Matsya Union — stage of Rajasthan integration. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Greater Rajasthan",
        "answer": "integration stage",
        "tag": "movement",
        "explanation": "For exam memory, keep the fixed pair: Greater Rajasthan — integration stage. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "1 November 1956",
        "answer": "final major reorganisation context",
        "tag": "movement",
        "explanation": "For exam memory, keep the fixed pair: 1 November 1956 — final major reorganisation context. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Hiralal Shastri",
        "answer": "first Chief Minister of Rajasthan",
        "tag": "movement",
        "explanation": "For exam memory, keep the fixed pair: Hiralal Shastri — first Chief Minister of Rajasthan. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mohanlal Sukhadia",
        "answer": "long-serving CM memory",
        "tag": "movement",
        "explanation": "For exam memory, keep the fixed pair: Mohanlal Sukhadia — long-serving CM memory. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Sardar Patel/V.P. Menon",
        "answer": "integration of princely states context",
        "tag": "movement",
        "explanation": "For exam memory, keep the fixed pair: Sardar Patel/V.P. Menon — integration of princely states context. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bijolia",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Bijolia is a core subtopic for Freedom movements, Praja Mandal and Rajasthan integration. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Begun",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Begun is a core subtopic for Freedom movements, Praja Mandal and Rajasthan integration. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Bhil movements",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Bhil movements is a core subtopic for Freedom movements, Praja Mandal and Rajasthan integration. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Integration stages",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Integration stages is a core subtopic for Freedom movements, Praja Mandal and Rajasthan integration. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "history-saints-literature-coins",
    "day": 12,
    "title": "Saints, sects, literature and coins",
    "bucket": "Rajasthan History",
    "priority": "High",
    "why": "Sects-founder and coin-state pairs are direct scoring but easy to mix.",
    "concepts": [
      "Bishnoi",
      "Dadu Panth",
      "Ram Snehi",
      "Jasnathi",
      "Nath",
      "Mira Bai",
      "Dingal",
      "Pingal",
      "coins",
      "book-author pairs"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan History and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Sects-founder and coin-state pairs are direct scoring but easy to mix.\n\nYour coverage for this topic must include: Bishnoi, Dadu Panth, Ram Snehi, Jasnathi, Nath, Mira Bai, Dingal, Pingal, coins, book-author pairs."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: Bishnoi, Dadu Panth, Ram Snehi, Jasnathi, Nath, Mira Bai, Dingal, Pingal, coins, book-author pairs."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Bishnoi sect: Guru Jambhoji.\n2. Dadu Panth: Dadu Dayal.\n3. Ram Snehi sect: Ram Charanji / Dariyavji branches.\n4. Jasnathi sect: Jasnathji.\n5. Nath tradition: yogi/saint tradition.\n6. Mira Bai: Krishna devotion.\n7. Dingal: heroic/martial Rajasthani literature.\n8. Pingal: literary/poetic tradition.\n9. Akhaishahi: princely currency matching.\n10. Jhadshahi: currency-state trap.\n11. Vijaishahi: currency-state trap.\n12. Gajshahi: currency-state trap.\n13. Kuvalayamala: early literary reference.\n14. Khyat: historical chronicle tradition."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Bishnoi sect",
            "Guru Jambhoji",
            "saint-literature"
          ],
          [
            "Dadu Panth",
            "Dadu Dayal",
            "saint-literature"
          ],
          [
            "Ram Snehi sect",
            "Ram Charanji / Dariyavji branches",
            "saint-literature"
          ],
          [
            "Jasnathi sect",
            "Jasnathji",
            "saint-literature"
          ],
          [
            "Nath tradition",
            "yogi/saint tradition",
            "saint-literature"
          ],
          [
            "Mira Bai",
            "Krishna devotion",
            "saint-literature"
          ],
          [
            "Dingal",
            "heroic/martial Rajasthani literature",
            "saint-literature"
          ],
          [
            "Pingal",
            "literary/poetic tradition",
            "saint-literature"
          ],
          [
            "Akhaishahi",
            "princely currency matching",
            "saint-literature"
          ],
          [
            "Jhadshahi",
            "currency-state trap",
            "saint-literature"
          ],
          [
            "Vijaishahi",
            "currency-state trap",
            "saint-literature"
          ],
          [
            "Gajshahi",
            "currency-state trap",
            "saint-literature"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Bishnoi sect",
        "answer": "Guru Jambhoji",
        "tag": "saint-literature",
        "explanation": "For exam memory, keep the fixed pair: Bishnoi sect — Guru Jambhoji. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Dadu Panth",
        "answer": "Dadu Dayal",
        "tag": "saint-literature",
        "explanation": "For exam memory, keep the fixed pair: Dadu Panth — Dadu Dayal. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Ram Snehi sect",
        "answer": "Ram Charanji / Dariyavji branches",
        "tag": "saint-literature",
        "explanation": "For exam memory, keep the fixed pair: Ram Snehi sect — Ram Charanji / Dariyavji branches. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Jasnathi sect",
        "answer": "Jasnathji",
        "tag": "saint-literature",
        "explanation": "For exam memory, keep the fixed pair: Jasnathi sect — Jasnathji. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Nath tradition",
        "answer": "yogi/saint tradition",
        "tag": "saint-literature",
        "explanation": "For exam memory, keep the fixed pair: Nath tradition — yogi/saint tradition. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mira Bai",
        "answer": "Krishna devotion",
        "tag": "saint-literature",
        "explanation": "For exam memory, keep the fixed pair: Mira Bai — Krishna devotion. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Dingal",
        "answer": "heroic/martial Rajasthani literature",
        "tag": "saint-literature",
        "explanation": "For exam memory, keep the fixed pair: Dingal — heroic/martial Rajasthani literature. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Pingal",
        "answer": "literary/poetic tradition",
        "tag": "saint-literature",
        "explanation": "For exam memory, keep the fixed pair: Pingal — literary/poetic tradition. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Akhaishahi",
        "answer": "princely currency matching",
        "tag": "saint-literature",
        "explanation": "For exam memory, keep the fixed pair: Akhaishahi — princely currency matching. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Jhadshahi",
        "answer": "currency-state trap",
        "tag": "saint-literature",
        "explanation": "For exam memory, keep the fixed pair: Jhadshahi — currency-state trap. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Vijaishahi",
        "answer": "currency-state trap",
        "tag": "saint-literature",
        "explanation": "For exam memory, keep the fixed pair: Vijaishahi — currency-state trap. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Gajshahi",
        "answer": "currency-state trap",
        "tag": "saint-literature",
        "explanation": "For exam memory, keep the fixed pair: Gajshahi — currency-state trap. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Kuvalayamala",
        "answer": "early literary reference",
        "tag": "saint-literature",
        "explanation": "For exam memory, keep the fixed pair: Kuvalayamala — early literary reference. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Khyat",
        "answer": "historical chronicle tradition",
        "tag": "saint-literature",
        "explanation": "For exam memory, keep the fixed pair: Khyat — historical chronicle tradition. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bishnoi",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Bishnoi is a core subtopic for Saints, sects, literature and coins. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Ram Snehi",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Ram Snehi is a core subtopic for Saints, sects, literature and coins. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Jasnathi",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Jasnathi is a core subtopic for Saints, sects, literature and coins. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Nath",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Nath is a core subtopic for Saints, sects, literature and coins. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "coins",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "coins is a core subtopic for Saints, sects, literature and coins. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "book-author pairs",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "book-author pairs is a core subtopic for Saints, sects, literature and coins. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "history-forts-temples",
    "day": 13,
    "title": "Forts, temples and monument-location memory",
    "bucket": "Rajasthan History",
    "priority": "High",
    "why": "Fort-location-builder questions appear as direct and incorrect-pair items.",
    "concepts": [
      "Chittorgarh",
      "Kumbhalgarh",
      "Mehrangarh",
      "Jaisalmer",
      "Ranthambore",
      "Gagron",
      "Taragarh",
      "Bala Quila",
      "Dilwara",
      "Eklingji",
      "Nathdwara"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan History and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Fort-location-builder questions appear as direct and incorrect-pair items.\n\nYour coverage for this topic must include: Chittorgarh, Kumbhalgarh, Mehrangarh, Jaisalmer, Ranthambore, Gagron, Taragarh, Bala Quila, Dilwara, Eklingji, Nathdwara."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: Chittorgarh, Kumbhalgarh, Mehrangarh, Jaisalmer, Ranthambore, Gagron, Taragarh, Bala Quila, Dilwara, Eklingji, Nathdwara."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Chittorgarh Fort: Mewar; Vijay Stambh/Kirti Stambh context.\n2. Kumbhalgarh Fort: Maharana Kumbha.\n3. Mehrangarh Fort: Jodhpur; Rao Jodha.\n4. Jaisalmer/Sonargarh: Bhati rulers; living fort.\n5. Ranthambore Fort: Sawai Madhopur.\n6. Gagron Fort: Jhalawar; water fort.\n7. Taragarh Ajmer: Ajmer fort.\n8. Bala Quila: Alwar.\n9. Dilwara temples: Mount Abu; Jain temples.\n10. Eklingji: Mewar deity tradition.\n11. Nathdwara: Shrinathji.\n12. Govind Devji: Jaipur."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Chittorgarh Fort",
            "Mewar; Vijay Stambh/Kirti Stambh context",
            "fort-temple"
          ],
          [
            "Kumbhalgarh Fort",
            "Maharana Kumbha",
            "fort-temple"
          ],
          [
            "Mehrangarh Fort",
            "Jodhpur; Rao Jodha",
            "fort-temple"
          ],
          [
            "Jaisalmer/Sonargarh",
            "Bhati rulers; living fort",
            "fort-temple"
          ],
          [
            "Ranthambore Fort",
            "Sawai Madhopur",
            "fort-temple"
          ],
          [
            "Gagron Fort",
            "Jhalawar; water fort",
            "fort-temple"
          ],
          [
            "Taragarh Ajmer",
            "Ajmer fort",
            "fort-temple"
          ],
          [
            "Bala Quila",
            "Alwar",
            "fort-temple"
          ],
          [
            "Dilwara temples",
            "Mount Abu; Jain temples",
            "fort-temple"
          ],
          [
            "Eklingji",
            "Mewar deity tradition",
            "fort-temple"
          ],
          [
            "Nathdwara",
            "Shrinathji",
            "fort-temple"
          ],
          [
            "Govind Devji",
            "Jaipur",
            "fort-temple"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Chittorgarh Fort",
        "answer": "Mewar; Vijay Stambh/Kirti Stambh context",
        "tag": "fort-temple",
        "explanation": "For exam memory, keep the fixed pair: Chittorgarh Fort — Mewar; Vijay Stambh/Kirti Stambh context. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Kumbhalgarh Fort",
        "answer": "Maharana Kumbha",
        "tag": "fort-temple",
        "explanation": "For exam memory, keep the fixed pair: Kumbhalgarh Fort — Maharana Kumbha. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mehrangarh Fort",
        "answer": "Jodhpur; Rao Jodha",
        "tag": "fort-temple",
        "explanation": "For exam memory, keep the fixed pair: Mehrangarh Fort — Jodhpur; Rao Jodha. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Jaisalmer/Sonargarh",
        "answer": "Bhati rulers; living fort",
        "tag": "fort-temple",
        "explanation": "For exam memory, keep the fixed pair: Jaisalmer/Sonargarh — Bhati rulers; living fort. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Ranthambore Fort",
        "answer": "Sawai Madhopur",
        "tag": "fort-temple",
        "explanation": "For exam memory, keep the fixed pair: Ranthambore Fort — Sawai Madhopur. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Gagron Fort",
        "answer": "Jhalawar; water fort",
        "tag": "fort-temple",
        "explanation": "For exam memory, keep the fixed pair: Gagron Fort — Jhalawar; water fort. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Taragarh Ajmer",
        "answer": "Ajmer fort",
        "tag": "fort-temple",
        "explanation": "For exam memory, keep the fixed pair: Taragarh Ajmer — Ajmer fort. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bala Quila",
        "answer": "Alwar",
        "tag": "fort-temple",
        "explanation": "For exam memory, keep the fixed pair: Bala Quila — Alwar. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Dilwara temples",
        "answer": "Mount Abu; Jain temples",
        "tag": "fort-temple",
        "explanation": "For exam memory, keep the fixed pair: Dilwara temples — Mount Abu; Jain temples. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Eklingji",
        "answer": "Mewar deity tradition",
        "tag": "fort-temple",
        "explanation": "For exam memory, keep the fixed pair: Eklingji — Mewar deity tradition. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Nathdwara",
        "answer": "Shrinathji",
        "tag": "fort-temple",
        "explanation": "For exam memory, keep the fixed pair: Nathdwara — Shrinathji. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Govind Devji",
        "answer": "Jaipur",
        "tag": "fort-temple",
        "explanation": "For exam memory, keep the fixed pair: Govind Devji — Jaipur. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Chittorgarh",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Chittorgarh is a core subtopic for Forts, temples and monument-location memory. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Kumbhalgarh",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Kumbhalgarh is a core subtopic for Forts, temples and monument-location memory. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Mehrangarh",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Mehrangarh is a core subtopic for Forts, temples and monument-location memory. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Jaisalmer",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Jaisalmer is a core subtopic for Forts, temples and monument-location memory. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Ranthambore",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Ranthambore is a core subtopic for Forts, temples and monument-location memory. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Gagron",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Gagron is a core subtopic for Forts, temples and monument-location memory. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Taragarh",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Taragarh is a core subtopic for Forts, temples and monument-location memory. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Dilwara",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Dilwara is a core subtopic for Forts, temples and monument-location memory. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "geography-location-physical",
    "day": 14,
    "title": "Location, boundaries and physical divisions",
    "bucket": "Rajasthan Geography",
    "priority": "Very High",
    "why": "Physical geography gives repeated map-style questions and foundation for rivers, soils and climate.",
    "concepts": [
      "latitude-longitude",
      "boundaries",
      "Pakistan border",
      "Thar desert",
      "Aravalli",
      "eastern plains",
      "south-eastern plateau",
      "extreme points"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan Geography and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Physical geography gives repeated map-style questions and foundation for rivers, soils and climate.\n\nYour coverage for this topic must include: latitude-longitude, boundaries, Pakistan border, Thar desert, Aravalli, eastern plains, south-eastern plateau, extreme points."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: latitude-longitude, boundaries, Pakistan border, Thar desert, Aravalli, eastern plains, south-eastern plateau, extreme points."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Largest state by area: Rajasthan.\n2. International border: Pakistan.\n3. Western desert: Thar region.\n4. Aravalli Range: old fold mountain range.\n5. Guru Shikhar: highest peak of Aravalli/Rajasthan.\n6. Eastern plains: Banas/Chambal plains context.\n7. South-eastern plateau: Hadoti/Malwa edge.\n8. Extreme west: Jaisalmer/Barmer belt.\n9. Tropic of Cancer: passes through southern Rajasthan.\n10. Neighbouring states: Punjab, Haryana, UP, MP, Gujarat."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Largest state by area",
            "Rajasthan",
            "location"
          ],
          [
            "International border",
            "Pakistan",
            "location"
          ],
          [
            "Western desert",
            "Thar region",
            "location"
          ],
          [
            "Aravalli Range",
            "old fold mountain range",
            "location"
          ],
          [
            "Guru Shikhar",
            "highest peak of Aravalli/Rajasthan",
            "location"
          ],
          [
            "Eastern plains",
            "Banas/Chambal plains context",
            "location"
          ],
          [
            "South-eastern plateau",
            "Hadoti/Malwa edge",
            "location"
          ],
          [
            "Extreme west",
            "Jaisalmer/Barmer belt",
            "location"
          ],
          [
            "Tropic of Cancer",
            "passes through southern Rajasthan",
            "location"
          ],
          [
            "Neighbouring states",
            "Punjab, Haryana, UP, MP, Gujarat",
            "location"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Largest state by area",
        "answer": "Rajasthan",
        "tag": "location",
        "explanation": "For exam memory, keep the fixed pair: Largest state by area — Rajasthan. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "International border",
        "answer": "Pakistan",
        "tag": "location",
        "explanation": "For exam memory, keep the fixed pair: International border — Pakistan. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Western desert",
        "answer": "Thar region",
        "tag": "location",
        "explanation": "For exam memory, keep the fixed pair: Western desert — Thar region. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Aravalli Range",
        "answer": "old fold mountain range",
        "tag": "location",
        "explanation": "For exam memory, keep the fixed pair: Aravalli Range — old fold mountain range. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Guru Shikhar",
        "answer": "highest peak of Aravalli/Rajasthan",
        "tag": "location",
        "explanation": "For exam memory, keep the fixed pair: Guru Shikhar — highest peak of Aravalli/Rajasthan. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Eastern plains",
        "answer": "Banas/Chambal plains context",
        "tag": "location",
        "explanation": "For exam memory, keep the fixed pair: Eastern plains — Banas/Chambal plains context. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "South-eastern plateau",
        "answer": "Hadoti/Malwa edge",
        "tag": "location",
        "explanation": "For exam memory, keep the fixed pair: South-eastern plateau — Hadoti/Malwa edge. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Extreme west",
        "answer": "Jaisalmer/Barmer belt",
        "tag": "location",
        "explanation": "For exam memory, keep the fixed pair: Extreme west — Jaisalmer/Barmer belt. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Tropic of Cancer",
        "answer": "passes through southern Rajasthan",
        "tag": "location",
        "explanation": "For exam memory, keep the fixed pair: Tropic of Cancer — passes through southern Rajasthan. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Neighbouring states",
        "answer": "Punjab, Haryana, UP, MP, Gujarat",
        "tag": "location",
        "explanation": "For exam memory, keep the fixed pair: Neighbouring states — Punjab, Haryana, UP, MP, Gujarat. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "latitude-longitude",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "latitude-longitude is a core subtopic for Location, boundaries and physical divisions. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "boundaries",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "boundaries is a core subtopic for Location, boundaries and physical divisions. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Pakistan border",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Pakistan border is a core subtopic for Location, boundaries and physical divisions. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Thar desert",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Thar desert is a core subtopic for Location, boundaries and physical divisions. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Aravalli",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Aravalli is a core subtopic for Location, boundaries and physical divisions. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "eastern plains",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "eastern plains is a core subtopic for Location, boundaries and physical divisions. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "south-eastern plateau",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "south-eastern plateau is a core subtopic for Location, boundaries and physical divisions. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "extreme points",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "extreme points is a core subtopic for Location, boundaries and physical divisions. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "geography-climate-soils",
    "day": 15,
    "title": "Climate regions, rainfall and soils",
    "bucket": "Rajasthan Geography",
    "priority": "Very High",
    "why": "Climate-region and soil-district/crop questions are common not-correct pairs.",
    "concepts": [
      "desert soil",
      "red-yellow soil",
      "black soil",
      "alluvial soil",
      "climate regions",
      "rainfall",
      "drought",
      "monsoon"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan Geography and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Climate-region and soil-district/crop questions are common not-correct pairs.\n\nYour coverage for this topic must include: desert soil, red-yellow soil, black soil, alluvial soil, climate regions, rainfall, drought, monsoon."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: desert soil, red-yellow soil, black soil, alluvial soil, climate regions, rainfall, drought, monsoon."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Desert soil: western Rajasthan.\n2. Red-yellow soil: southern/south-eastern Rajasthan.\n3. Black soil: Hadoti/south-east crop belt.\n4. Alluvial soil: eastern plains.\n5. Arid climate: western desert.\n6. Semi-arid climate: central belt.\n7. CAw climate: south/south-east humid tendency.\n8. DBw/DAw: desert/semi-dry climate classification memory.\n9. Highest rainfall tendency: south-east/southern districts.\n10. Drought-prone area: western Rajasthan."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Desert soil",
            "western Rajasthan",
            "soil-climate"
          ],
          [
            "Red-yellow soil",
            "southern/south-eastern Rajasthan",
            "soil-climate"
          ],
          [
            "Black soil",
            "Hadoti/south-east crop belt",
            "soil-climate"
          ],
          [
            "Alluvial soil",
            "eastern plains",
            "soil-climate"
          ],
          [
            "Arid climate",
            "western desert",
            "soil-climate"
          ],
          [
            "Semi-arid climate",
            "central belt",
            "soil-climate"
          ],
          [
            "CAw climate",
            "south/south-east humid tendency",
            "soil-climate"
          ],
          [
            "DBw/DAw",
            "desert/semi-dry climate classification memory",
            "soil-climate"
          ],
          [
            "Highest rainfall tendency",
            "south-east/southern districts",
            "soil-climate"
          ],
          [
            "Drought-prone area",
            "western Rajasthan",
            "soil-climate"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Desert soil",
        "answer": "western Rajasthan",
        "tag": "soil-climate",
        "explanation": "For exam memory, keep the fixed pair: Desert soil — western Rajasthan. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Red-yellow soil",
        "answer": "southern/south-eastern Rajasthan",
        "tag": "soil-climate",
        "explanation": "For exam memory, keep the fixed pair: Red-yellow soil — southern/south-eastern Rajasthan. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Black soil",
        "answer": "Hadoti/south-east crop belt",
        "tag": "soil-climate",
        "explanation": "For exam memory, keep the fixed pair: Black soil — Hadoti/south-east crop belt. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Alluvial soil",
        "answer": "eastern plains",
        "tag": "soil-climate",
        "explanation": "For exam memory, keep the fixed pair: Alluvial soil — eastern plains. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Arid climate",
        "answer": "western desert",
        "tag": "soil-climate",
        "explanation": "For exam memory, keep the fixed pair: Arid climate — western desert. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Semi-arid climate",
        "answer": "central belt",
        "tag": "soil-climate",
        "explanation": "For exam memory, keep the fixed pair: Semi-arid climate — central belt. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "CAw climate",
        "answer": "south/south-east humid tendency",
        "tag": "soil-climate",
        "explanation": "For exam memory, keep the fixed pair: CAw climate — south/south-east humid tendency. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "DBw/DAw",
        "answer": "desert/semi-dry climate classification memory",
        "tag": "soil-climate",
        "explanation": "For exam memory, keep the fixed pair: DBw/DAw — desert/semi-dry climate classification memory. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Highest rainfall tendency",
        "answer": "south-east/southern districts",
        "tag": "soil-climate",
        "explanation": "For exam memory, keep the fixed pair: Highest rainfall tendency — south-east/southern districts. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Drought-prone area",
        "answer": "western Rajasthan",
        "tag": "soil-climate",
        "explanation": "For exam memory, keep the fixed pair: Drought-prone area — western Rajasthan. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "desert soil",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "desert soil is a core subtopic for Climate regions, rainfall and soils. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "red-yellow soil",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "red-yellow soil is a core subtopic for Climate regions, rainfall and soils. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "black soil",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "black soil is a core subtopic for Climate regions, rainfall and soils. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "alluvial soil",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "alluvial soil is a core subtopic for Climate regions, rainfall and soils. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "climate regions",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "climate regions is a core subtopic for Climate regions, rainfall and soils. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "rainfall",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "rainfall is a core subtopic for Climate regions, rainfall and soils. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "drought",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "drought is a core subtopic for Climate regions, rainfall and soils. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "monsoon",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "monsoon is a core subtopic for Climate regions, rainfall and soils. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "geography-rivers-drainage",
    "day": 16,
    "title": "Rivers, drainage systems and tributaries",
    "bucket": "Rajasthan Geography",
    "priority": "Very High",
    "why": "River-origin-tributary-dam questions are standard in RSSB papers.",
    "concepts": [
      "Luni",
      "Chambal",
      "Banas",
      "Mahi",
      "Sabarmati",
      "Ghaggar",
      "Banganga",
      "Kali Sindh",
      "Parbati",
      "drainage systems"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan Geography and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: River-origin-tributary-dam questions are standard in RSSB papers.\n\nYour coverage for this topic must include: Luni, Chambal, Banas, Mahi, Sabarmati, Ghaggar, Banganga, Kali Sindh, Parbati, drainage systems."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: Luni, Chambal, Banas, Mahi, Sabarmati, Ghaggar, Banganga, Kali Sindh, Parbati, drainage systems."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Luni: inland/saline drainage; western Rajasthan.\n2. Chambal: Hadoti lifeline.\n3. Banas: major river of eastern Rajasthan.\n4. Mahi: southern Rajasthan; flows to Arabian Sea system.\n5. Sabarmati: origin in Aravalli area.\n6. Ghaggar: inland/seasonal northern drainage.\n7. Banganga: eastern Rajasthan river.\n8. Kali Sindh: Chambal tributary system.\n9. Parbati: Chambal tributary.\n10. Berach: Banas system memory."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Luni",
            "inland/saline drainage; western Rajasthan",
            "river"
          ],
          [
            "Chambal",
            "Hadoti lifeline",
            "river"
          ],
          [
            "Banas",
            "major river of eastern Rajasthan",
            "river"
          ],
          [
            "Mahi",
            "southern Rajasthan; flows to Arabian Sea system",
            "river"
          ],
          [
            "Sabarmati",
            "origin in Aravalli area",
            "river"
          ],
          [
            "Ghaggar",
            "inland/seasonal northern drainage",
            "river"
          ],
          [
            "Banganga",
            "eastern Rajasthan river",
            "river"
          ],
          [
            "Kali Sindh",
            "Chambal tributary system",
            "river"
          ],
          [
            "Parbati",
            "Chambal tributary",
            "river"
          ],
          [
            "Berach",
            "Banas system memory",
            "river"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Luni",
        "answer": "inland/saline drainage; western Rajasthan",
        "tag": "river",
        "explanation": "For exam memory, keep the fixed pair: Luni — inland/saline drainage; western Rajasthan. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Chambal",
        "answer": "Hadoti lifeline",
        "tag": "river",
        "explanation": "For exam memory, keep the fixed pair: Chambal — Hadoti lifeline. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Banas",
        "answer": "major river of eastern Rajasthan",
        "tag": "river",
        "explanation": "For exam memory, keep the fixed pair: Banas — major river of eastern Rajasthan. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mahi",
        "answer": "southern Rajasthan; flows to Arabian Sea system",
        "tag": "river",
        "explanation": "For exam memory, keep the fixed pair: Mahi — southern Rajasthan; flows to Arabian Sea system. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Sabarmati",
        "answer": "origin in Aravalli area",
        "tag": "river",
        "explanation": "For exam memory, keep the fixed pair: Sabarmati — origin in Aravalli area. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Ghaggar",
        "answer": "inland/seasonal northern drainage",
        "tag": "river",
        "explanation": "For exam memory, keep the fixed pair: Ghaggar — inland/seasonal northern drainage. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Banganga",
        "answer": "eastern Rajasthan river",
        "tag": "river",
        "explanation": "For exam memory, keep the fixed pair: Banganga — eastern Rajasthan river. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Kali Sindh",
        "answer": "Chambal tributary system",
        "tag": "river",
        "explanation": "For exam memory, keep the fixed pair: Kali Sindh — Chambal tributary system. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Parbati",
        "answer": "Chambal tributary",
        "tag": "river",
        "explanation": "For exam memory, keep the fixed pair: Parbati — Chambal tributary. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Berach",
        "answer": "Banas system memory",
        "tag": "river",
        "explanation": "For exam memory, keep the fixed pair: Berach — Banas system memory. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "drainage systems",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "drainage systems is a core subtopic for Rivers, drainage systems and tributaries. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "geography-lakes",
    "day": 17,
    "title": "Lakes of Rajasthan: type, district and traps",
    "bucket": "Rajasthan Geography",
    "priority": "Very High",
    "why": "Lake-district-type matching is a direct scoring area.",
    "concepts": [
      "Sambhar",
      "Pushkar",
      "Jaisamand",
      "Rajsamand",
      "Nakki",
      "Pachpadra",
      "Didwana",
      "Fateh Sagar",
      "Pichola",
      "Ana Sagar"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan Geography and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Lake-district-type matching is a direct scoring area.\n\nYour coverage for this topic must include: Sambhar, Pushkar, Jaisamand, Rajsamand, Nakki, Pachpadra, Didwana, Fateh Sagar, Pichola, Ana Sagar."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: Sambhar, Pushkar, Jaisamand, Rajsamand, Nakki, Pachpadra, Didwana, Fateh Sagar, Pichola, Ana Sagar."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Sambhar Lake: largest inland saltwater lake.\n2. Pushkar Lake: Ajmer; sacred lake.\n3. Jaisamand/Dhebar: large freshwater/artificial lake.\n4. Rajsamand Lake: Rajsamand district.\n5. Nakki Lake: Mount Abu/Sirohi.\n6. Pachpadra Lake: Barmer; saline.\n7. Didwana Lake: Nagaur; saline.\n8. Fateh Sagar: Udaipur.\n9. Pichola Lake: Udaipur.\n10. Ana Sagar: Ajmer."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Sambhar Lake",
            "largest inland saltwater lake",
            "lake"
          ],
          [
            "Pushkar Lake",
            "Ajmer; sacred lake",
            "lake"
          ],
          [
            "Jaisamand/Dhebar",
            "large freshwater/artificial lake",
            "lake"
          ],
          [
            "Rajsamand Lake",
            "Rajsamand district",
            "lake"
          ],
          [
            "Nakki Lake",
            "Mount Abu/Sirohi",
            "lake"
          ],
          [
            "Pachpadra Lake",
            "Barmer; saline",
            "lake"
          ],
          [
            "Didwana Lake",
            "Nagaur; saline",
            "lake"
          ],
          [
            "Fateh Sagar",
            "Udaipur",
            "lake"
          ],
          [
            "Pichola Lake",
            "Udaipur",
            "lake"
          ],
          [
            "Ana Sagar",
            "Ajmer",
            "lake"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Sambhar Lake",
        "answer": "largest inland saltwater lake",
        "tag": "lake",
        "explanation": "For exam memory, keep the fixed pair: Sambhar Lake — largest inland saltwater lake. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Pushkar Lake",
        "answer": "Ajmer; sacred lake",
        "tag": "lake",
        "explanation": "For exam memory, keep the fixed pair: Pushkar Lake — Ajmer; sacred lake. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Jaisamand/Dhebar",
        "answer": "large freshwater/artificial lake",
        "tag": "lake",
        "explanation": "For exam memory, keep the fixed pair: Jaisamand/Dhebar — large freshwater/artificial lake. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rajsamand Lake",
        "answer": "Rajsamand district",
        "tag": "lake",
        "explanation": "For exam memory, keep the fixed pair: Rajsamand Lake — Rajsamand district. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Nakki Lake",
        "answer": "Mount Abu/Sirohi",
        "tag": "lake",
        "explanation": "For exam memory, keep the fixed pair: Nakki Lake — Mount Abu/Sirohi. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Pachpadra Lake",
        "answer": "Barmer; saline",
        "tag": "lake",
        "explanation": "For exam memory, keep the fixed pair: Pachpadra Lake — Barmer; saline. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Didwana Lake",
        "answer": "Nagaur; saline",
        "tag": "lake",
        "explanation": "For exam memory, keep the fixed pair: Didwana Lake — Nagaur; saline. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Fateh Sagar",
        "answer": "Udaipur",
        "tag": "lake",
        "explanation": "For exam memory, keep the fixed pair: Fateh Sagar — Udaipur. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Pichola Lake",
        "answer": "Udaipur",
        "tag": "lake",
        "explanation": "For exam memory, keep the fixed pair: Pichola Lake — Udaipur. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Ana Sagar",
        "answer": "Ajmer",
        "tag": "lake",
        "explanation": "For exam memory, keep the fixed pair: Ana Sagar — Ajmer. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Sambhar",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Sambhar is a core subtopic for Lakes of Rajasthan: type, district and traps. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Pushkar",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Pushkar is a core subtopic for Lakes of Rajasthan: type, district and traps. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Jaisamand",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Jaisamand is a core subtopic for Lakes of Rajasthan: type, district and traps. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Rajsamand",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Rajsamand is a core subtopic for Lakes of Rajasthan: type, district and traps. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Nakki",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Nakki is a core subtopic for Lakes of Rajasthan: type, district and traps. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Pachpadra",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Pachpadra is a core subtopic for Lakes of Rajasthan: type, district and traps. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Didwana",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Didwana is a core subtopic for Lakes of Rajasthan: type, district and traps. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Pichola",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Pichola is a core subtopic for Lakes of Rajasthan: type, district and traps. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "geography-irrigation-dams",
    "day": 18,
    "title": "Irrigation projects, dams and canals",
    "bucket": "Rajasthan Geography",
    "priority": "High",
    "why": "Project-region-river questions repeat and can be solved through one table.",
    "concepts": [
      "Indira Gandhi Canal",
      "Bhakra",
      "Chambal project",
      "Mahi Bajaj Sagar",
      "Bisalpur",
      "Jawai",
      "Gandhi Sagar",
      "Kota Barrage"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan Geography and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Project-region-river questions repeat and can be solved through one table.\n\nYour coverage for this topic must include: Indira Gandhi Canal, Bhakra, Chambal project, Mahi Bajaj Sagar, Bisalpur, Jawai, Gandhi Sagar, Kota Barrage."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: Indira Gandhi Canal, Bhakra, Chambal project, Mahi Bajaj Sagar, Bisalpur, Jawai, Gandhi Sagar, Kota Barrage."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Indira Gandhi Canal: western Rajasthan irrigation.\n2. Bhakra project: Punjab-Haryana-Rajasthan link.\n3. Chambal project: Kota/Bundi irrigation and power.\n4. Mahi Bajaj Sagar: Banswara region.\n5. Bisalpur project: drinking water/irrigation; Tonk context.\n6. Jawai Dam: Pali region.\n7. Gandhi Sagar: Chambal project.\n8. Rana Pratap Sagar: Chambal project.\n9. Jawahar Sagar: Chambal project.\n10. Kota Barrage: Chambal project."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Indira Gandhi Canal",
            "western Rajasthan irrigation",
            "irrigation"
          ],
          [
            "Bhakra project",
            "Punjab-Haryana-Rajasthan link",
            "irrigation"
          ],
          [
            "Chambal project",
            "Kota/Bundi irrigation and power",
            "irrigation"
          ],
          [
            "Mahi Bajaj Sagar",
            "Banswara region",
            "irrigation"
          ],
          [
            "Bisalpur project",
            "drinking water/irrigation; Tonk context",
            "irrigation"
          ],
          [
            "Jawai Dam",
            "Pali region",
            "irrigation"
          ],
          [
            "Gandhi Sagar",
            "Chambal project",
            "irrigation"
          ],
          [
            "Rana Pratap Sagar",
            "Chambal project",
            "irrigation"
          ],
          [
            "Jawahar Sagar",
            "Chambal project",
            "irrigation"
          ],
          [
            "Kota Barrage",
            "Chambal project",
            "irrigation"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Indira Gandhi Canal",
        "answer": "western Rajasthan irrigation",
        "tag": "irrigation",
        "explanation": "For exam memory, keep the fixed pair: Indira Gandhi Canal — western Rajasthan irrigation. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bhakra project",
        "answer": "Punjab-Haryana-Rajasthan link",
        "tag": "irrigation",
        "explanation": "For exam memory, keep the fixed pair: Bhakra project — Punjab-Haryana-Rajasthan link. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Chambal project",
        "answer": "Kota/Bundi irrigation and power",
        "tag": "irrigation",
        "explanation": "For exam memory, keep the fixed pair: Chambal project — Kota/Bundi irrigation and power. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mahi Bajaj Sagar",
        "answer": "Banswara region",
        "tag": "irrigation",
        "explanation": "For exam memory, keep the fixed pair: Mahi Bajaj Sagar — Banswara region. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bisalpur project",
        "answer": "drinking water/irrigation; Tonk context",
        "tag": "irrigation",
        "explanation": "For exam memory, keep the fixed pair: Bisalpur project — drinking water/irrigation; Tonk context. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Jawai Dam",
        "answer": "Pali region",
        "tag": "irrigation",
        "explanation": "For exam memory, keep the fixed pair: Jawai Dam — Pali region. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Gandhi Sagar",
        "answer": "Chambal project",
        "tag": "irrigation",
        "explanation": "For exam memory, keep the fixed pair: Gandhi Sagar — Chambal project. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rana Pratap Sagar",
        "answer": "Chambal project",
        "tag": "irrigation",
        "explanation": "For exam memory, keep the fixed pair: Rana Pratap Sagar — Chambal project. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Jawahar Sagar",
        "answer": "Chambal project",
        "tag": "irrigation",
        "explanation": "For exam memory, keep the fixed pair: Jawahar Sagar — Chambal project. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Kota Barrage",
        "answer": "Chambal project",
        "tag": "irrigation",
        "explanation": "For exam memory, keep the fixed pair: Kota Barrage — Chambal project. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bhakra",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Bhakra is a core subtopic for Irrigation projects, dams and canals. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Bisalpur",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Bisalpur is a core subtopic for Irrigation projects, dams and canals. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Jawai",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Jawai is a core subtopic for Irrigation projects, dams and canals. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "geography-minerals-mines",
    "day": 19,
    "title": "Minerals, mines and industries",
    "bucket": "Rajasthan Geography",
    "priority": "Very High",
    "why": "Mine-mineral matching is one of the most repeated Rajasthan GK question types.",
    "concepts": [
      "Degana",
      "Jhamar Kotra",
      "Mando-ki-Pal",
      "Goth-Manglod",
      "Zawar",
      "Khetri",
      "Makrana",
      "cement",
      "salt",
      "marble"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan Geography and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Mine-mineral matching is one of the most repeated Rajasthan GK question types.\n\nYour coverage for this topic must include: Degana, Jhamar Kotra, Mando-ki-Pal, Goth-Manglod, Zawar, Khetri, Makrana, cement, salt, marble."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: Degana, Jhamar Kotra, Mando-ki-Pal, Goth-Manglod, Zawar, Khetri, Makrana, cement, salt, marble."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Degana: tungsten.\n2. Jhamar Kotra: rock phosphate.\n3. Mando-ki-Pal: fluorspar.\n4. Goth-Manglod: gypsum.\n5. Zawar: zinc-lead.\n6. Khetri: copper.\n7. Makrana: marble.\n8. Jaisalmer-Barmer: petroleum/lignite/energy belt.\n9. Bikaner-Nagaur: gypsum/lignite memory.\n10. Kota-Chittorgarh belt: cement/limestone memory."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Degana",
            "tungsten",
            "mine-mineral"
          ],
          [
            "Jhamar Kotra",
            "rock phosphate",
            "mine-mineral"
          ],
          [
            "Mando-ki-Pal",
            "fluorspar",
            "mine-mineral"
          ],
          [
            "Goth-Manglod",
            "gypsum",
            "mine-mineral"
          ],
          [
            "Zawar",
            "zinc-lead",
            "mine-mineral"
          ],
          [
            "Khetri",
            "copper",
            "mine-mineral"
          ],
          [
            "Makrana",
            "marble",
            "mine-mineral"
          ],
          [
            "Jaisalmer-Barmer",
            "petroleum/lignite/energy belt",
            "mine-mineral"
          ],
          [
            "Bikaner-Nagaur",
            "gypsum/lignite memory",
            "mine-mineral"
          ],
          [
            "Kota-Chittorgarh belt",
            "cement/limestone memory",
            "mine-mineral"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Degana",
        "answer": "tungsten",
        "tag": "mine-mineral",
        "explanation": "For exam memory, keep the fixed pair: Degana — tungsten. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Jhamar Kotra",
        "answer": "rock phosphate",
        "tag": "mine-mineral",
        "explanation": "For exam memory, keep the fixed pair: Jhamar Kotra — rock phosphate. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mando-ki-Pal",
        "answer": "fluorspar",
        "tag": "mine-mineral",
        "explanation": "For exam memory, keep the fixed pair: Mando-ki-Pal — fluorspar. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Goth-Manglod",
        "answer": "gypsum",
        "tag": "mine-mineral",
        "explanation": "For exam memory, keep the fixed pair: Goth-Manglod — gypsum. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Zawar",
        "answer": "zinc-lead",
        "tag": "mine-mineral",
        "explanation": "For exam memory, keep the fixed pair: Zawar — zinc-lead. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Khetri",
        "answer": "copper",
        "tag": "mine-mineral",
        "explanation": "For exam memory, keep the fixed pair: Khetri — copper. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Makrana",
        "answer": "marble",
        "tag": "mine-mineral",
        "explanation": "For exam memory, keep the fixed pair: Makrana — marble. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Jaisalmer-Barmer",
        "answer": "petroleum/lignite/energy belt",
        "tag": "mine-mineral",
        "explanation": "For exam memory, keep the fixed pair: Jaisalmer-Barmer — petroleum/lignite/energy belt. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bikaner-Nagaur",
        "answer": "gypsum/lignite memory",
        "tag": "mine-mineral",
        "explanation": "For exam memory, keep the fixed pair: Bikaner-Nagaur — gypsum/lignite memory. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Kota-Chittorgarh belt",
        "answer": "cement/limestone memory",
        "tag": "mine-mineral",
        "explanation": "For exam memory, keep the fixed pair: Kota-Chittorgarh belt — cement/limestone memory. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "cement",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "cement is a core subtopic for Minerals, mines and industries. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "salt",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "salt is a core subtopic for Minerals, mines and industries. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "marble",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "marble is a core subtopic for Minerals, mines and industries. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "geography-agriculture-livestock",
    "day": 20,
    "title": "Agriculture, livestock and rural economy",
    "bucket": "Rajasthan Geography",
    "priority": "High",
    "why": "Crop-region and livestock-scheme questions are expected from Rajasthan economy angle.",
    "concepts": [
      "bajra",
      "wheat",
      "mustard",
      "cotton",
      "maize",
      "gram",
      "cumin",
      "isabgol",
      "Suratgarh farm",
      "livestock"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan Geography and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Crop-region and livestock-scheme questions are expected from Rajasthan economy angle.\n\nYour coverage for this topic must include: bajra, wheat, mustard, cotton, maize, gram, cumin, isabgol, Suratgarh farm, livestock."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: bajra, wheat, mustard, cotton, maize, gram, cumin, isabgol, Suratgarh farm, livestock."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Bajra: western dry region crop.\n2. Wheat: irrigated/eastern-south-eastern regions.\n3. Mustard: important oilseed crop.\n4. Cotton: southern/eastern pockets.\n5. Maize: tribal/southern belt.\n6. Gram: rabi pulse.\n7. Cumin: western Rajasthan spice.\n8. Isabgol: arid/semi-arid crop.\n9. Suratgarh farm: mechanised/agriculture farm memory.\n10. Animal husbandry: camel, sheep, goat economy."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Bajra",
            "western dry region crop",
            "agriculture"
          ],
          [
            "Wheat",
            "irrigated/eastern-south-eastern regions",
            "agriculture"
          ],
          [
            "Mustard",
            "important oilseed crop",
            "agriculture"
          ],
          [
            "Cotton",
            "southern/eastern pockets",
            "agriculture"
          ],
          [
            "Maize",
            "tribal/southern belt",
            "agriculture"
          ],
          [
            "Gram",
            "rabi pulse",
            "agriculture"
          ],
          [
            "Cumin",
            "western Rajasthan spice",
            "agriculture"
          ],
          [
            "Isabgol",
            "arid/semi-arid crop",
            "agriculture"
          ],
          [
            "Suratgarh farm",
            "mechanised/agriculture farm memory",
            "agriculture"
          ],
          [
            "Animal husbandry",
            "camel, sheep, goat economy",
            "agriculture"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Bajra",
        "answer": "western dry region crop",
        "tag": "agriculture",
        "explanation": "For exam memory, keep the fixed pair: Bajra — western dry region crop. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Wheat",
        "answer": "irrigated/eastern-south-eastern regions",
        "tag": "agriculture",
        "explanation": "For exam memory, keep the fixed pair: Wheat — irrigated/eastern-south-eastern regions. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mustard",
        "answer": "important oilseed crop",
        "tag": "agriculture",
        "explanation": "For exam memory, keep the fixed pair: Mustard — important oilseed crop. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Cotton",
        "answer": "southern/eastern pockets",
        "tag": "agriculture",
        "explanation": "For exam memory, keep the fixed pair: Cotton — southern/eastern pockets. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Maize",
        "answer": "tribal/southern belt",
        "tag": "agriculture",
        "explanation": "For exam memory, keep the fixed pair: Maize — tribal/southern belt. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Gram",
        "answer": "rabi pulse",
        "tag": "agriculture",
        "explanation": "For exam memory, keep the fixed pair: Gram — rabi pulse. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Cumin",
        "answer": "western Rajasthan spice",
        "tag": "agriculture",
        "explanation": "For exam memory, keep the fixed pair: Cumin — western Rajasthan spice. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Isabgol",
        "answer": "arid/semi-arid crop",
        "tag": "agriculture",
        "explanation": "For exam memory, keep the fixed pair: Isabgol — arid/semi-arid crop. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Suratgarh farm",
        "answer": "mechanised/agriculture farm memory",
        "tag": "agriculture",
        "explanation": "For exam memory, keep the fixed pair: Suratgarh farm — mechanised/agriculture farm memory. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Animal husbandry",
        "answer": "camel, sheep, goat economy",
        "tag": "agriculture",
        "explanation": "For exam memory, keep the fixed pair: Animal husbandry — camel, sheep, goat economy. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "bajra",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "bajra is a core subtopic for Agriculture, livestock and rural economy. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "wheat",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "wheat is a core subtopic for Agriculture, livestock and rural economy. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "mustard",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "mustard is a core subtopic for Agriculture, livestock and rural economy. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "cotton",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "cotton is a core subtopic for Agriculture, livestock and rural economy. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "maize",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "maize is a core subtopic for Agriculture, livestock and rural economy. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "gram",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "gram is a core subtopic for Agriculture, livestock and rural economy. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "cumin",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "cumin is a core subtopic for Agriculture, livestock and rural economy. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "isabgol",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "isabgol is a core subtopic for Agriculture, livestock and rural economy. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "livestock",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "livestock is a core subtopic for Agriculture, livestock and rural economy. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "geography-wildlife",
    "day": 21,
    "title": "Wildlife, national parks and sanctuaries",
    "bucket": "Rajasthan Geography",
    "priority": "High",
    "why": "Park-district-species questions are direct and commonly repeated.",
    "concepts": [
      "Ranthambore",
      "Sariska",
      "Keoladeo",
      "Desert National Park",
      "Mukundra",
      "Kumbhalgarh",
      "Tal Chhapar",
      "Mount Abu"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan Geography and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Park-district-species questions are direct and commonly repeated.\n\nYour coverage for this topic must include: Ranthambore, Sariska, Keoladeo, Desert National Park, Mukundra, Kumbhalgarh, Tal Chhapar, Mount Abu."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: Ranthambore, Sariska, Keoladeo, Desert National Park, Mukundra, Kumbhalgarh, Tal Chhapar, Mount Abu."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Ranthambore: Sawai Madhopur; tiger reserve.\n2. Sariska: Alwar; tiger reserve.\n3. Keoladeo Ghana: Bharatpur; birds/wetland.\n4. Desert National Park: Jaisalmer-Barmer; Great Indian Bustard.\n5. Mukundra Hills: Kota-Jhalawar belt.\n6. Kumbhalgarh Sanctuary: Rajsamand/Udaipur/Pali belt.\n7. Tal Chhapar: Churu; blackbuck.\n8. Jaisamand Sanctuary: Udaipur.\n9. Mount Abu Sanctuary: Sirohi.\n10. National bird/animal context: exam uses conservation pairs."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Ranthambore",
            "Sawai Madhopur; tiger reserve",
            "wildlife"
          ],
          [
            "Sariska",
            "Alwar; tiger reserve",
            "wildlife"
          ],
          [
            "Keoladeo Ghana",
            "Bharatpur; birds/wetland",
            "wildlife"
          ],
          [
            "Desert National Park",
            "Jaisalmer-Barmer; Great Indian Bustard",
            "wildlife"
          ],
          [
            "Mukundra Hills",
            "Kota-Jhalawar belt",
            "wildlife"
          ],
          [
            "Kumbhalgarh Sanctuary",
            "Rajsamand/Udaipur/Pali belt",
            "wildlife"
          ],
          [
            "Tal Chhapar",
            "Churu; blackbuck",
            "wildlife"
          ],
          [
            "Jaisamand Sanctuary",
            "Udaipur",
            "wildlife"
          ],
          [
            "Mount Abu Sanctuary",
            "Sirohi",
            "wildlife"
          ],
          [
            "National bird/animal context",
            "exam uses conservation pairs",
            "wildlife"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Ranthambore",
        "answer": "Sawai Madhopur; tiger reserve",
        "tag": "wildlife",
        "explanation": "For exam memory, keep the fixed pair: Ranthambore — Sawai Madhopur; tiger reserve. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Sariska",
        "answer": "Alwar; tiger reserve",
        "tag": "wildlife",
        "explanation": "For exam memory, keep the fixed pair: Sariska — Alwar; tiger reserve. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Keoladeo Ghana",
        "answer": "Bharatpur; birds/wetland",
        "tag": "wildlife",
        "explanation": "For exam memory, keep the fixed pair: Keoladeo Ghana — Bharatpur; birds/wetland. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Desert National Park",
        "answer": "Jaisalmer-Barmer; Great Indian Bustard",
        "tag": "wildlife",
        "explanation": "For exam memory, keep the fixed pair: Desert National Park — Jaisalmer-Barmer; Great Indian Bustard. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mukundra Hills",
        "answer": "Kota-Jhalawar belt",
        "tag": "wildlife",
        "explanation": "For exam memory, keep the fixed pair: Mukundra Hills — Kota-Jhalawar belt. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Kumbhalgarh Sanctuary",
        "answer": "Rajsamand/Udaipur/Pali belt",
        "tag": "wildlife",
        "explanation": "For exam memory, keep the fixed pair: Kumbhalgarh Sanctuary — Rajsamand/Udaipur/Pali belt. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Tal Chhapar",
        "answer": "Churu; blackbuck",
        "tag": "wildlife",
        "explanation": "For exam memory, keep the fixed pair: Tal Chhapar — Churu; blackbuck. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Jaisamand Sanctuary",
        "answer": "Udaipur",
        "tag": "wildlife",
        "explanation": "For exam memory, keep the fixed pair: Jaisamand Sanctuary — Udaipur. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mount Abu Sanctuary",
        "answer": "Sirohi",
        "tag": "wildlife",
        "explanation": "For exam memory, keep the fixed pair: Mount Abu Sanctuary — Sirohi. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "National bird/animal context",
        "answer": "exam uses conservation pairs",
        "tag": "wildlife",
        "explanation": "For exam memory, keep the fixed pair: National bird/animal context — exam uses conservation pairs. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Keoladeo",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Keoladeo is a core subtopic for Wildlife, national parks and sanctuaries. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Mukundra",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Mukundra is a core subtopic for Wildlife, national parks and sanctuaries. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Kumbhalgarh",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Kumbhalgarh is a core subtopic for Wildlife, national parks and sanctuaries. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Mount Abu",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Mount Abu is a core subtopic for Wildlife, national parks and sanctuaries. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "geography-census-transport",
    "day": 22,
    "title": "Census, transport and map-based facts",
    "bucket": "Rajasthan Geography",
    "priority": "Medium-High",
    "why": "Census extremes and district matching questions appear in factual GK sections.",
    "concepts": [
      "literacy",
      "sex ratio",
      "child sex ratio",
      "density",
      "urbanisation",
      "transport",
      "railway",
      "airport",
      "highway"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan Geography and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Census extremes and district matching questions appear in factual GK sections.\n\nYour coverage for this topic must include: literacy, sex ratio, child sex ratio, density, urbanisation, transport, railway, airport, highway."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: literacy, sex ratio, child sex ratio, density, urbanisation, transport, railway, airport, highway."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Highest literacy-type questions: revise latest census table.\n2. Lowest literacy-type questions: revise district extremes.\n3. Sex ratio: district extreme question.\n4. Child sex ratio: 0-6 age group; PYQ style.\n5. Density: district comparison.\n6. Urbanisation: city/district data.\n7. Population growth: census trend.\n8. Road/highway: transport map fact.\n9. Railway zone: North Western Railway memory.\n10. Airport: Jaipur/Jodhpur/Udaipur/Kishangarh etc.."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Highest literacy-type questions",
            "revise latest census table",
            "census"
          ],
          [
            "Lowest literacy-type questions",
            "revise district extremes",
            "census"
          ],
          [
            "Sex ratio",
            "district extreme question",
            "census"
          ],
          [
            "Child sex ratio",
            "0-6 age group; PYQ style",
            "census"
          ],
          [
            "Density",
            "district comparison",
            "census"
          ],
          [
            "Urbanisation",
            "city/district data",
            "census"
          ],
          [
            "Population growth",
            "census trend",
            "census"
          ],
          [
            "Road/highway",
            "transport map fact",
            "census"
          ],
          [
            "Railway zone",
            "North Western Railway memory",
            "census"
          ],
          [
            "Airport",
            "Jaipur/Jodhpur/Udaipur/Kishangarh etc.",
            "census"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Highest literacy-type questions",
        "answer": "revise latest census table",
        "tag": "census",
        "explanation": "For exam memory, keep the fixed pair: Highest literacy-type questions — revise latest census table. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Lowest literacy-type questions",
        "answer": "revise district extremes",
        "tag": "census",
        "explanation": "For exam memory, keep the fixed pair: Lowest literacy-type questions — revise district extremes. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Sex ratio",
        "answer": "district extreme question",
        "tag": "census",
        "explanation": "For exam memory, keep the fixed pair: Sex ratio — district extreme question. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Child sex ratio",
        "answer": "0-6 age group; PYQ style",
        "tag": "census",
        "explanation": "For exam memory, keep the fixed pair: Child sex ratio — 0-6 age group; PYQ style. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Density",
        "answer": "district comparison",
        "tag": "census",
        "explanation": "For exam memory, keep the fixed pair: Density — district comparison. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Urbanisation",
        "answer": "city/district data",
        "tag": "census",
        "explanation": "For exam memory, keep the fixed pair: Urbanisation — city/district data. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Population growth",
        "answer": "census trend",
        "tag": "census",
        "explanation": "For exam memory, keep the fixed pair: Population growth — census trend. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Road/highway",
        "answer": "transport map fact",
        "tag": "census",
        "explanation": "For exam memory, keep the fixed pair: Road/highway — transport map fact. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Railway zone",
        "answer": "North Western Railway memory",
        "tag": "census",
        "explanation": "For exam memory, keep the fixed pair: Railway zone — North Western Railway memory. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Airport",
        "answer": "Jaipur/Jodhpur/Udaipur/Kishangarh etc.",
        "tag": "census",
        "explanation": "For exam memory, keep the fixed pair: Airport — Jaipur/Jodhpur/Udaipur/Kishangarh etc.. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "literacy",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "literacy is a core subtopic for Census, transport and map-based facts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "sex ratio",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "sex ratio is a core subtopic for Census, transport and map-based facts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "child sex ratio",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "child sex ratio is a core subtopic for Census, transport and map-based facts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "density",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "density is a core subtopic for Census, transport and map-based facts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "urbanisation",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "urbanisation is a core subtopic for Census, transport and map-based facts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "transport",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "transport is a core subtopic for Census, transport and map-based facts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "railway",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "railway is a core subtopic for Census, transport and map-based facts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "airport",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "airport is a core subtopic for Census, transport and map-based facts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "highway",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "highway is a core subtopic for Census, transport and map-based facts. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "current-rajasthan-gov-schemes",
    "day": 23,
    "title": "Rajasthan current affairs: government, budget and schemes",
    "bucket": "Rajasthan Current Affairs",
    "priority": "Very High",
    "why": "Recent Rajasthan appointments, budget and schemes can directly appear in Paper 1.",
    "concepts": [
      "CM",
      "Governor",
      "budget",
      "schemes",
      "livestock insurance",
      "iStart",
      "e-Mitra",
      "Jan Aadhaar",
      "Techno Hub",
      "Rajasthan economy"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Rajasthan Current Affairs and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Recent Rajasthan appointments, budget and schemes can directly appear in Paper 1.\n\nYour coverage for this topic must include: CM, Governor, budget, schemes, livestock insurance, iStart, e-Mitra, Jan Aadhaar, Techno Hub, Rajasthan economy."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: CM, Governor, budget, schemes, livestock insurance, iStart, e-Mitra, Jan Aadhaar, Techno Hub, Rajasthan economy."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Chief Minister of Rajasthan: Bhajan Lal Sharma.\n2. Governor of Rajasthan: Haribhau Kisanrao Bagade.\n3. Budget focus: Viksit Rajasthan @2047 style development vision.\n4. Mukhyamantri Mangla Pashu Bima Yojana: livestock insurance support.\n5. iStart Rajasthan: startup ecosystem.\n6. e-Mitra: citizen service delivery kiosk/portal.\n7. Raj Sampark: grievance/citizen service platform.\n8. Jan Aadhaar: state family/resident data platform.\n9. Rajasthan DigiFest: startup/digital ecosystem event.\n10. Techno Hub Jaipur: startup/incubation hub.\n\nCurrent affairs must be updated near the exam. Keep a monthly sheet: appointment, scheme, department, place, award, sport, institute, ranking, budget announcement."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Chief Minister of Rajasthan",
            "Bhajan Lal Sharma",
            "current-affairs"
          ],
          [
            "Governor of Rajasthan",
            "Haribhau Kisanrao Bagade",
            "current-affairs"
          ],
          [
            "Budget focus",
            "Viksit Rajasthan @2047 style development vision",
            "current-affairs"
          ],
          [
            "Mukhyamantri Mangla Pashu Bima Yojana",
            "livestock insurance support",
            "current-affairs"
          ],
          [
            "iStart Rajasthan",
            "startup ecosystem",
            "current-affairs"
          ],
          [
            "e-Mitra",
            "citizen service delivery kiosk/portal",
            "current-affairs"
          ],
          [
            "Raj Sampark",
            "grievance/citizen service platform",
            "current-affairs"
          ],
          [
            "Jan Aadhaar",
            "state family/resident data platform",
            "current-affairs"
          ],
          [
            "Rajasthan DigiFest",
            "startup/digital ecosystem event",
            "current-affairs"
          ],
          [
            "Techno Hub Jaipur",
            "startup/incubation hub",
            "current-affairs"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Chief Minister of Rajasthan",
        "answer": "Bhajan Lal Sharma",
        "tag": "current-affairs",
        "explanation": "For exam memory, keep the fixed pair: Chief Minister of Rajasthan — Bhajan Lal Sharma. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Governor of Rajasthan",
        "answer": "Haribhau Kisanrao Bagade",
        "tag": "current-affairs",
        "explanation": "For exam memory, keep the fixed pair: Governor of Rajasthan — Haribhau Kisanrao Bagade. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Budget focus",
        "answer": "Viksit Rajasthan @2047 style development vision",
        "tag": "current-affairs",
        "explanation": "For exam memory, keep the fixed pair: Budget focus — Viksit Rajasthan @2047 style development vision. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mukhyamantri Mangla Pashu Bima Yojana",
        "answer": "livestock insurance support",
        "tag": "current-affairs",
        "explanation": "For exam memory, keep the fixed pair: Mukhyamantri Mangla Pashu Bima Yojana — livestock insurance support. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "iStart Rajasthan",
        "answer": "startup ecosystem",
        "tag": "current-affairs",
        "explanation": "For exam memory, keep the fixed pair: iStart Rajasthan — startup ecosystem. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "e-Mitra",
        "answer": "citizen service delivery kiosk/portal",
        "tag": "current-affairs",
        "explanation": "For exam memory, keep the fixed pair: e-Mitra — citizen service delivery kiosk/portal. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Raj Sampark",
        "answer": "grievance/citizen service platform",
        "tag": "current-affairs",
        "explanation": "For exam memory, keep the fixed pair: Raj Sampark — grievance/citizen service platform. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Jan Aadhaar",
        "answer": "state family/resident data platform",
        "tag": "current-affairs",
        "explanation": "For exam memory, keep the fixed pair: Jan Aadhaar — state family/resident data platform. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rajasthan DigiFest",
        "answer": "startup/digital ecosystem event",
        "tag": "current-affairs",
        "explanation": "For exam memory, keep the fixed pair: Rajasthan DigiFest — startup/digital ecosystem event. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Techno Hub Jaipur",
        "answer": "startup/incubation hub",
        "tag": "current-affairs",
        "explanation": "For exam memory, keep the fixed pair: Techno Hub Jaipur — startup/incubation hub. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "CM",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "CM is a core subtopic for Rajasthan current affairs: government, budget and schemes. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Governor",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Governor is a core subtopic for Rajasthan current affairs: government, budget and schemes. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "budget",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "budget is a core subtopic for Rajasthan current affairs: government, budget and schemes. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "schemes",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "schemes is a core subtopic for Rajasthan current affairs: government, budget and schemes. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "livestock insurance",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "livestock insurance is a core subtopic for Rajasthan current affairs: government, budget and schemes. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "iStart",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "iStart is a core subtopic for Rajasthan current affairs: government, budget and schemes. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Techno Hub",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Techno Hub is a core subtopic for Rajasthan current affairs: government, budget and schemes. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Rajasthan economy",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Rajasthan economy is a core subtopic for Rajasthan current affairs: government, budget and schemes. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "current-digital-governance",
    "day": 24,
    "title": "Digital governance and government IT initiatives",
    "bucket": "Current IT and Governance",
    "priority": "High",
    "why": "Computer Instructor exam can connect current affairs with Digital India, e-governance and citizen platforms.",
    "concepts": [
      "Digital India",
      "DigiLocker",
      "UMANG",
      "Aadhaar",
      "UPI",
      "BharatNet",
      "CSC",
      "GeM",
      "eSign",
      "MyGov"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Current IT and Governance and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Computer Instructor exam can connect current affairs with Digital India, e-governance and citizen platforms.\n\nYour coverage for this topic must include: Digital India, DigiLocker, UMANG, Aadhaar, UPI, BharatNet, CSC, GeM, eSign, MyGov."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: Digital India, DigiLocker, UMANG, Aadhaar, UPI, BharatNet, CSC, GeM, eSign, MyGov."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Digital India: digital infrastructure, services on demand, digital empowerment.\n2. DigiLocker: digital document wallet.\n3. UMANG: single app for government services.\n4. Aadhaar: digital identity.\n5. UPI: real-time digital payment.\n6. BharatNet: broadband connectivity to villages.\n7. CSC: Common Service Centres.\n8. GeM: government e-marketplace.\n9. eSign: online electronic signature.\n10. MyGov: citizen engagement platform."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Digital India",
            "digital infrastructure, services on demand, digital empowerment",
            "e-governance"
          ],
          [
            "DigiLocker",
            "digital document wallet",
            "e-governance"
          ],
          [
            "UMANG",
            "single app for government services",
            "e-governance"
          ],
          [
            "Aadhaar",
            "digital identity",
            "e-governance"
          ],
          [
            "UPI",
            "real-time digital payment",
            "e-governance"
          ],
          [
            "BharatNet",
            "broadband connectivity to villages",
            "e-governance"
          ],
          [
            "CSC",
            "Common Service Centres",
            "e-governance"
          ],
          [
            "GeM",
            "government e-marketplace",
            "e-governance"
          ],
          [
            "eSign",
            "online electronic signature",
            "e-governance"
          ],
          [
            "MyGov",
            "citizen engagement platform",
            "e-governance"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Digital India",
        "answer": "digital infrastructure, services on demand, digital empowerment",
        "tag": "e-governance",
        "explanation": "For exam memory, keep the fixed pair: Digital India — digital infrastructure, services on demand, digital empowerment. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "DigiLocker",
        "answer": "digital document wallet",
        "tag": "e-governance",
        "explanation": "For exam memory, keep the fixed pair: DigiLocker — digital document wallet. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "UMANG",
        "answer": "single app for government services",
        "tag": "e-governance",
        "explanation": "For exam memory, keep the fixed pair: UMANG — single app for government services. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Aadhaar",
        "answer": "digital identity",
        "tag": "e-governance",
        "explanation": "For exam memory, keep the fixed pair: Aadhaar — digital identity. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "UPI",
        "answer": "real-time digital payment",
        "tag": "e-governance",
        "explanation": "For exam memory, keep the fixed pair: UPI — real-time digital payment. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "BharatNet",
        "answer": "broadband connectivity to villages",
        "tag": "e-governance",
        "explanation": "For exam memory, keep the fixed pair: BharatNet — broadband connectivity to villages. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "CSC",
        "answer": "Common Service Centres",
        "tag": "e-governance",
        "explanation": "For exam memory, keep the fixed pair: CSC — Common Service Centres. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "GeM",
        "answer": "government e-marketplace",
        "tag": "e-governance",
        "explanation": "For exam memory, keep the fixed pair: GeM — government e-marketplace. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "eSign",
        "answer": "online electronic signature",
        "tag": "e-governance",
        "explanation": "For exam memory, keep the fixed pair: eSign — online electronic signature. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "MyGov",
        "answer": "citizen engagement platform",
        "tag": "e-governance",
        "explanation": "For exam memory, keep the fixed pair: MyGov — citizen engagement platform. This is useful for direct, match-the-following and incorrect-pair questions."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "current-ai-cybersecurity",
    "day": 25,
    "title": "AI, cybersecurity and computer awareness for current trends",
    "bucket": "Current IT and Governance",
    "priority": "High",
    "why": "Recent IT/AI/cyber terms appear in computer-aware current affairs and Paper 2 overlap.",
    "concepts": [
      "AI",
      "ML",
      "Generative AI",
      "IndiaAI",
      "AIKosha",
      "phishing",
      "ransomware",
      "CERT-In",
      "firewall",
      "2FA",
      "deepfake"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Current IT and Governance and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Recent IT/AI/cyber terms appear in computer-aware current affairs and Paper 2 overlap.\n\nYour coverage for this topic must include: AI, ML, Generative AI, IndiaAI, AIKosha, phishing, ransomware, CERT-In, firewall, 2FA, deepfake."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: AI, ML, Generative AI, IndiaAI, AIKosha, phishing, ransomware, CERT-In, firewall, 2FA, deepfake."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. AI: machines performing tasks requiring intelligence.\n2. Machine Learning: systems learn patterns from data.\n3. Generative AI: creates text/images/code/audio.\n4. IndiaAI Mission: AI ecosystem and compute capacity.\n5. AIKosha: datasets/platform memory under IndiaAI ecosystem.\n6. Cybersecurity: protecting systems/data/networks.\n7. Phishing: fake message/site to steal information.\n8. Ransomware: malware encrypts data and demands ransom.\n9. CERT-In: Indian Computer Emergency Response Team.\n10. Firewall: filters network traffic.\n11. Two-factor authentication: password plus second factor.\n12. Deepfake: AI-generated fake media."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "AI",
            "machines performing tasks requiring intelligence",
            "tech-current"
          ],
          [
            "Machine Learning",
            "systems learn patterns from data",
            "tech-current"
          ],
          [
            "Generative AI",
            "creates text/images/code/audio",
            "tech-current"
          ],
          [
            "IndiaAI Mission",
            "AI ecosystem and compute capacity",
            "tech-current"
          ],
          [
            "AIKosha",
            "datasets/platform memory under IndiaAI ecosystem",
            "tech-current"
          ],
          [
            "Cybersecurity",
            "protecting systems/data/networks",
            "tech-current"
          ],
          [
            "Phishing",
            "fake message/site to steal information",
            "tech-current"
          ],
          [
            "Ransomware",
            "malware encrypts data and demands ransom",
            "tech-current"
          ],
          [
            "CERT-In",
            "Indian Computer Emergency Response Team",
            "tech-current"
          ],
          [
            "Firewall",
            "filters network traffic",
            "tech-current"
          ],
          [
            "Two-factor authentication",
            "password plus second factor",
            "tech-current"
          ],
          [
            "Deepfake",
            "AI-generated fake media",
            "tech-current"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "AI",
        "answer": "machines performing tasks requiring intelligence",
        "tag": "tech-current",
        "explanation": "For exam memory, keep the fixed pair: AI — machines performing tasks requiring intelligence. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Machine Learning",
        "answer": "systems learn patterns from data",
        "tag": "tech-current",
        "explanation": "For exam memory, keep the fixed pair: Machine Learning — systems learn patterns from data. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Generative AI",
        "answer": "creates text/images/code/audio",
        "tag": "tech-current",
        "explanation": "For exam memory, keep the fixed pair: Generative AI — creates text/images/code/audio. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "IndiaAI Mission",
        "answer": "AI ecosystem and compute capacity",
        "tag": "tech-current",
        "explanation": "For exam memory, keep the fixed pair: IndiaAI Mission — AI ecosystem and compute capacity. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "AIKosha",
        "answer": "datasets/platform memory under IndiaAI ecosystem",
        "tag": "tech-current",
        "explanation": "For exam memory, keep the fixed pair: AIKosha — datasets/platform memory under IndiaAI ecosystem. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Cybersecurity",
        "answer": "protecting systems/data/networks",
        "tag": "tech-current",
        "explanation": "For exam memory, keep the fixed pair: Cybersecurity — protecting systems/data/networks. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Phishing",
        "answer": "fake message/site to steal information",
        "tag": "tech-current",
        "explanation": "For exam memory, keep the fixed pair: Phishing — fake message/site to steal information. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Ransomware",
        "answer": "malware encrypts data and demands ransom",
        "tag": "tech-current",
        "explanation": "For exam memory, keep the fixed pair: Ransomware — malware encrypts data and demands ransom. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "CERT-In",
        "answer": "Indian Computer Emergency Response Team",
        "tag": "tech-current",
        "explanation": "For exam memory, keep the fixed pair: CERT-In — Indian Computer Emergency Response Team. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Firewall",
        "answer": "filters network traffic",
        "tag": "tech-current",
        "explanation": "For exam memory, keep the fixed pair: Firewall — filters network traffic. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Two-factor authentication",
        "answer": "password plus second factor",
        "tag": "tech-current",
        "explanation": "For exam memory, keep the fixed pair: Two-factor authentication — password plus second factor. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Deepfake",
        "answer": "AI-generated fake media",
        "tag": "tech-current",
        "explanation": "For exam memory, keep the fixed pair: Deepfake — AI-generated fake media. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "ML",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "ML is a core subtopic for AI, cybersecurity and computer awareness for current trends. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "IndiaAI",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "IndiaAI is a core subtopic for AI, cybersecurity and computer awareness for current trends. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "phishing",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "phishing is a core subtopic for AI, cybersecurity and computer awareness for current trends. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "ransomware",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "ransomware is a core subtopic for AI, cybersecurity and computer awareness for current trends. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "firewall",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "firewall is a core subtopic for AI, cybersecurity and computer awareness for current trends. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "2FA",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "2FA is a core subtopic for AI, cybersecurity and computer awareness for current trends. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "deepfake",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "deepfake is a core subtopic for AI, cybersecurity and computer awareness for current trends. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "science-human-body",
    "day": 26,
    "title": "Human body, hormones, blood and nervous system",
    "bucket": "General Science",
    "priority": "Medium-High",
    "why": "Science in Paper 1 is one-liner level but direct and scoring.",
    "concepts": [
      "hormones",
      "glands",
      "brain",
      "blood",
      "heart",
      "kidney",
      "respiration",
      "digestion",
      "nervous system"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to General Science and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Science in Paper 1 is one-liner level but direct and scoring.\n\nYour coverage for this topic must include: hormones, glands, brain, blood, heart, kidney, respiration, digestion, nervous system."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: hormones, glands, brain, blood, heart, kidney, respiration, digestion, nervous system."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Adrenaline: emergency hormone.\n2. Insulin: regulates blood sugar.\n3. Thyroxine: thyroid hormone; metabolism.\n4. Pituitary: master gland.\n5. Medulla oblongata: involuntary actions.\n6. Cerebrum: thinking/memory.\n7. Cerebellum: balance/coordination.\n8. Blood group O negative: universal donor memory.\n9. RBC: carries oxygen using haemoglobin.\n10. WBC: defence/immunity.\n11. Platelets: blood clotting.\n12. Nephron: functional unit of kidney."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Adrenaline",
            "emergency hormone",
            "biology"
          ],
          [
            "Insulin",
            "regulates blood sugar",
            "biology"
          ],
          [
            "Thyroxine",
            "thyroid hormone; metabolism",
            "biology"
          ],
          [
            "Pituitary",
            "master gland",
            "biology"
          ],
          [
            "Medulla oblongata",
            "involuntary actions",
            "biology"
          ],
          [
            "Cerebrum",
            "thinking/memory",
            "biology"
          ],
          [
            "Cerebellum",
            "balance/coordination",
            "biology"
          ],
          [
            "Blood group O negative",
            "universal donor memory",
            "biology"
          ],
          [
            "RBC",
            "carries oxygen using haemoglobin",
            "biology"
          ],
          [
            "WBC",
            "defence/immunity",
            "biology"
          ],
          [
            "Platelets",
            "blood clotting",
            "biology"
          ],
          [
            "Nephron",
            "functional unit of kidney",
            "biology"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Adrenaline",
        "answer": "emergency hormone",
        "tag": "biology",
        "explanation": "For exam memory, keep the fixed pair: Adrenaline — emergency hormone. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Insulin",
        "answer": "regulates blood sugar",
        "tag": "biology",
        "explanation": "For exam memory, keep the fixed pair: Insulin — regulates blood sugar. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Thyroxine",
        "answer": "thyroid hormone; metabolism",
        "tag": "biology",
        "explanation": "For exam memory, keep the fixed pair: Thyroxine — thyroid hormone; metabolism. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Pituitary",
        "answer": "master gland",
        "tag": "biology",
        "explanation": "For exam memory, keep the fixed pair: Pituitary — master gland. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Medulla oblongata",
        "answer": "involuntary actions",
        "tag": "biology",
        "explanation": "For exam memory, keep the fixed pair: Medulla oblongata — involuntary actions. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Cerebrum",
        "answer": "thinking/memory",
        "tag": "biology",
        "explanation": "For exam memory, keep the fixed pair: Cerebrum — thinking/memory. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Cerebellum",
        "answer": "balance/coordination",
        "tag": "biology",
        "explanation": "For exam memory, keep the fixed pair: Cerebellum — balance/coordination. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Blood group O negative",
        "answer": "universal donor memory",
        "tag": "biology",
        "explanation": "For exam memory, keep the fixed pair: Blood group O negative — universal donor memory. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "RBC",
        "answer": "carries oxygen using haemoglobin",
        "tag": "biology",
        "explanation": "For exam memory, keep the fixed pair: RBC — carries oxygen using haemoglobin. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "WBC",
        "answer": "defence/immunity",
        "tag": "biology",
        "explanation": "For exam memory, keep the fixed pair: WBC — defence/immunity. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Platelets",
        "answer": "blood clotting",
        "tag": "biology",
        "explanation": "For exam memory, keep the fixed pair: Platelets — blood clotting. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Nephron",
        "answer": "functional unit of kidney",
        "tag": "biology",
        "explanation": "For exam memory, keep the fixed pair: Nephron — functional unit of kidney. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "hormones",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "hormones is a core subtopic for Human body, hormones, blood and nervous system. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "glands",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "glands is a core subtopic for Human body, hormones, blood and nervous system. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "brain",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "brain is a core subtopic for Human body, hormones, blood and nervous system. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "blood",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "blood is a core subtopic for Human body, hormones, blood and nervous system. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "heart",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "heart is a core subtopic for Human body, hormones, blood and nervous system. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "kidney",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "kidney is a core subtopic for Human body, hormones, blood and nervous system. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "respiration",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "respiration is a core subtopic for Human body, hormones, blood and nervous system. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "digestion",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "digestion is a core subtopic for Human body, hormones, blood and nervous system. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "nervous system",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "nervous system is a core subtopic for Human body, hormones, blood and nervous system. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "science-diseases-vitamins",
    "day": 27,
    "title": "Diseases, vitamins, nutrition and enzymes",
    "bucket": "General Science",
    "priority": "High",
    "why": "PYQs ask disease-agent, vitamin-deficiency, enzyme-function and health programme matching.",
    "concepts": [
      "vitamins",
      "deficiency diseases",
      "pathogens",
      "enzymes",
      "nutrition",
      "vaccination",
      "communicable diseases"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to General Science and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: PYQs ask disease-agent, vitamin-deficiency, enzyme-function and health programme matching.\n\nYour coverage for this topic must include: vitamins, deficiency diseases, pathogens, enzymes, nutrition, vaccination, communicable diseases."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: vitamins, deficiency diseases, pathogens, enzymes, nutrition, vaccination, communicable diseases."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Vitamin A deficiency: night blindness.\n2. Vitamin B1 deficiency: beriberi.\n3. Vitamin C deficiency: scurvy.\n4. Vitamin D deficiency: rickets.\n5. Vitamin K: blood clotting.\n6. Iron deficiency: anaemia.\n7. Iodine deficiency: goitre.\n8. Kala-azar: Leishmania.\n9. Malaria: Plasmodium.\n10. Tuberculosis: bacteria; DOTS treatment.\n11. Dengue: virus; mosquito vector.\n12. Rabies: virus; dog bite context.\n13. Pancreatic lipase: fat digestion.\n14. Pepsin: protein digestion in stomach."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Vitamin A deficiency",
            "night blindness",
            "health"
          ],
          [
            "Vitamin B1 deficiency",
            "beriberi",
            "health"
          ],
          [
            "Vitamin C deficiency",
            "scurvy",
            "health"
          ],
          [
            "Vitamin D deficiency",
            "rickets",
            "health"
          ],
          [
            "Vitamin K",
            "blood clotting",
            "health"
          ],
          [
            "Iron deficiency",
            "anaemia",
            "health"
          ],
          [
            "Iodine deficiency",
            "goitre",
            "health"
          ],
          [
            "Kala-azar",
            "Leishmania",
            "health"
          ],
          [
            "Malaria",
            "Plasmodium",
            "health"
          ],
          [
            "Tuberculosis",
            "bacteria; DOTS treatment",
            "health"
          ],
          [
            "Dengue",
            "virus; mosquito vector",
            "health"
          ],
          [
            "Rabies",
            "virus; dog bite context",
            "health"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Vitamin A deficiency",
        "answer": "night blindness",
        "tag": "health",
        "explanation": "For exam memory, keep the fixed pair: Vitamin A deficiency — night blindness. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Vitamin B1 deficiency",
        "answer": "beriberi",
        "tag": "health",
        "explanation": "For exam memory, keep the fixed pair: Vitamin B1 deficiency — beriberi. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Vitamin C deficiency",
        "answer": "scurvy",
        "tag": "health",
        "explanation": "For exam memory, keep the fixed pair: Vitamin C deficiency — scurvy. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Vitamin D deficiency",
        "answer": "rickets",
        "tag": "health",
        "explanation": "For exam memory, keep the fixed pair: Vitamin D deficiency — rickets. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Vitamin K",
        "answer": "blood clotting",
        "tag": "health",
        "explanation": "For exam memory, keep the fixed pair: Vitamin K — blood clotting. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Iron deficiency",
        "answer": "anaemia",
        "tag": "health",
        "explanation": "For exam memory, keep the fixed pair: Iron deficiency — anaemia. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Iodine deficiency",
        "answer": "goitre",
        "tag": "health",
        "explanation": "For exam memory, keep the fixed pair: Iodine deficiency — goitre. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Kala-azar",
        "answer": "Leishmania",
        "tag": "health",
        "explanation": "For exam memory, keep the fixed pair: Kala-azar — Leishmania. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Malaria",
        "answer": "Plasmodium",
        "tag": "health",
        "explanation": "For exam memory, keep the fixed pair: Malaria — Plasmodium. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Tuberculosis",
        "answer": "bacteria; DOTS treatment",
        "tag": "health",
        "explanation": "For exam memory, keep the fixed pair: Tuberculosis — bacteria; DOTS treatment. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Dengue",
        "answer": "virus; mosquito vector",
        "tag": "health",
        "explanation": "For exam memory, keep the fixed pair: Dengue — virus; mosquito vector. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rabies",
        "answer": "virus; dog bite context",
        "tag": "health",
        "explanation": "For exam memory, keep the fixed pair: Rabies — virus; dog bite context. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Pancreatic lipase",
        "answer": "fat digestion",
        "tag": "health",
        "explanation": "For exam memory, keep the fixed pair: Pancreatic lipase — fat digestion. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Pepsin",
        "answer": "protein digestion in stomach",
        "tag": "health",
        "explanation": "For exam memory, keep the fixed pair: Pepsin — protein digestion in stomach. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "vitamins",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "vitamins is a core subtopic for Diseases, vitamins, nutrition and enzymes. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "deficiency diseases",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "deficiency diseases is a core subtopic for Diseases, vitamins, nutrition and enzymes. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "pathogens",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "pathogens is a core subtopic for Diseases, vitamins, nutrition and enzymes. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "enzymes",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "enzymes is a core subtopic for Diseases, vitamins, nutrition and enzymes. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "nutrition",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "nutrition is a core subtopic for Diseases, vitamins, nutrition and enzymes. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "vaccination",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "vaccination is a core subtopic for Diseases, vitamins, nutrition and enzymes. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "communicable diseases",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "communicable diseases is a core subtopic for Diseases, vitamins, nutrition and enzymes. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "science-physics",
    "day": 28,
    "title": "Physics one-liners: motion, light, sound, electricity and heat",
    "bucket": "General Science",
    "priority": "Medium-High",
    "why": "Physics questions are usually formula or concept definition, not deep derivation.",
    "concepts": [
      "motion",
      "force",
      "gravity",
      "light",
      "sound",
      "electricity",
      "magnetism",
      "heat",
      "units"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to General Science and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Physics questions are usually formula or concept definition, not deep derivation.\n\nYour coverage for this topic must include: motion, force, gravity, light, sound, electricity, magnetism, heat, units."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: motion, force, gravity, light, sound, electricity, magnetism, heat, units."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Speed of light: about 3 × 10^8 m/s.\n2. Escape velocity of Earth: about 11.2 km/s.\n3. SI unit of force: newton.\n4. SI unit of work: joule.\n5. SI unit of power: watt.\n6. Ohm's law: V = IR.\n7. Frequency unit: hertz.\n8. Sound cannot travel: through vacuum.\n9. Convex lens: converging lens.\n10. Concave mirror: converging mirror.\n11. Heat transfer by conduction: mainly solids.\n12. Fuse: safety device in circuit."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Speed of light",
            "about 3 × 10^8 m/s",
            "physics"
          ],
          [
            "Escape velocity of Earth",
            "about 11.2 km/s",
            "physics"
          ],
          [
            "SI unit of force",
            "newton",
            "physics"
          ],
          [
            "SI unit of work",
            "joule",
            "physics"
          ],
          [
            "SI unit of power",
            "watt",
            "physics"
          ],
          [
            "Ohm's law",
            "V = IR",
            "physics"
          ],
          [
            "Frequency unit",
            "hertz",
            "physics"
          ],
          [
            "Sound cannot travel",
            "through vacuum",
            "physics"
          ],
          [
            "Convex lens",
            "converging lens",
            "physics"
          ],
          [
            "Concave mirror",
            "converging mirror",
            "physics"
          ],
          [
            "Heat transfer by conduction",
            "mainly solids",
            "physics"
          ],
          [
            "Fuse",
            "safety device in circuit",
            "physics"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Speed of light",
        "answer": "about 3 × 10^8 m/s",
        "tag": "physics",
        "explanation": "For exam memory, keep the fixed pair: Speed of light — about 3 × 10^8 m/s. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Escape velocity of Earth",
        "answer": "about 11.2 km/s",
        "tag": "physics",
        "explanation": "For exam memory, keep the fixed pair: Escape velocity of Earth — about 11.2 km/s. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "SI unit of force",
        "answer": "newton",
        "tag": "physics",
        "explanation": "For exam memory, keep the fixed pair: SI unit of force — newton. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "SI unit of work",
        "answer": "joule",
        "tag": "physics",
        "explanation": "For exam memory, keep the fixed pair: SI unit of work — joule. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "SI unit of power",
        "answer": "watt",
        "tag": "physics",
        "explanation": "For exam memory, keep the fixed pair: SI unit of power — watt. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Ohm's law",
        "answer": "V = IR",
        "tag": "physics",
        "explanation": "For exam memory, keep the fixed pair: Ohm's law — V = IR. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Frequency unit",
        "answer": "hertz",
        "tag": "physics",
        "explanation": "For exam memory, keep the fixed pair: Frequency unit — hertz. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Sound cannot travel",
        "answer": "through vacuum",
        "tag": "physics",
        "explanation": "For exam memory, keep the fixed pair: Sound cannot travel — through vacuum. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Convex lens",
        "answer": "converging lens",
        "tag": "physics",
        "explanation": "For exam memory, keep the fixed pair: Convex lens — converging lens. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Concave mirror",
        "answer": "converging mirror",
        "tag": "physics",
        "explanation": "For exam memory, keep the fixed pair: Concave mirror — converging mirror. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Heat transfer by conduction",
        "answer": "mainly solids",
        "tag": "physics",
        "explanation": "For exam memory, keep the fixed pair: Heat transfer by conduction — mainly solids. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Fuse",
        "answer": "safety device in circuit",
        "tag": "physics",
        "explanation": "For exam memory, keep the fixed pair: Fuse — safety device in circuit. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "motion",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "motion is a core subtopic for Physics one-liners: motion, light, sound, electricity and heat. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "force",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "force is a core subtopic for Physics one-liners: motion, light, sound, electricity and heat. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "gravity",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "gravity is a core subtopic for Physics one-liners: motion, light, sound, electricity and heat. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "light",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "light is a core subtopic for Physics one-liners: motion, light, sound, electricity and heat. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "sound",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "sound is a core subtopic for Physics one-liners: motion, light, sound, electricity and heat. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "electricity",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "electricity is a core subtopic for Physics one-liners: motion, light, sound, electricity and heat. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "magnetism",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "magnetism is a core subtopic for Physics one-liners: motion, light, sound, electricity and heat. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "heat",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "heat is a core subtopic for Physics one-liners: motion, light, sound, electricity and heat. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "units",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "units is a core subtopic for Physics one-liners: motion, light, sound, electricity and heat. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "science-chemistry-environment",
    "day": 29,
    "title": "Chemistry, environment and everyday science",
    "bucket": "General Science",
    "priority": "Medium-High",
    "why": "Everyday chemistry and environment questions are factual and frequently repeated in general exams.",
    "concepts": [
      "acid-base",
      "salt",
      "pH",
      "metals",
      "alloys",
      "greenhouse effect",
      "ozone",
      "pollution",
      "biodiversity",
      "water hardness"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to General Science and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Everyday chemistry and environment questions are factual and frequently repeated in general exams.\n\nYour coverage for this topic must include: acid-base, salt, pH, metals, alloys, greenhouse effect, ozone, pollution, biodiversity, water hardness."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: acid-base, salt, pH, metals, alloys, greenhouse effect, ozone, pollution, biodiversity, water hardness."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Acid: turns blue litmus red.\n2. Base: turns red litmus blue.\n3. pH 7: neutral.\n4. Sodium chloride: common salt.\n5. Sodium bicarbonate: baking soda.\n6. Calcium oxide: quicklime.\n7. Calcium hydroxide: slaked lime.\n8. CO2: greenhouse gas.\n9. Ozone layer: absorbs UV radiation.\n10. Rusting: iron oxidation.\n11. Alloy: mixture of metals/metal plus other element.\n12. Hard water: contains Ca/Mg salts."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Acid",
            "turns blue litmus red",
            "chem-env"
          ],
          [
            "Base",
            "turns red litmus blue",
            "chem-env"
          ],
          [
            "pH 7",
            "neutral",
            "chem-env"
          ],
          [
            "Sodium chloride",
            "common salt",
            "chem-env"
          ],
          [
            "Sodium bicarbonate",
            "baking soda",
            "chem-env"
          ],
          [
            "Calcium oxide",
            "quicklime",
            "chem-env"
          ],
          [
            "Calcium hydroxide",
            "slaked lime",
            "chem-env"
          ],
          [
            "CO2",
            "greenhouse gas",
            "chem-env"
          ],
          [
            "Ozone layer",
            "absorbs UV radiation",
            "chem-env"
          ],
          [
            "Rusting",
            "iron oxidation",
            "chem-env"
          ],
          [
            "Alloy",
            "mixture of metals/metal plus other element",
            "chem-env"
          ],
          [
            "Hard water",
            "contains Ca/Mg salts",
            "chem-env"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Acid",
        "answer": "turns blue litmus red",
        "tag": "chem-env",
        "explanation": "For exam memory, keep the fixed pair: Acid — turns blue litmus red. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Base",
        "answer": "turns red litmus blue",
        "tag": "chem-env",
        "explanation": "For exam memory, keep the fixed pair: Base — turns red litmus blue. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "pH 7",
        "answer": "neutral",
        "tag": "chem-env",
        "explanation": "For exam memory, keep the fixed pair: pH 7 — neutral. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Sodium chloride",
        "answer": "common salt",
        "tag": "chem-env",
        "explanation": "For exam memory, keep the fixed pair: Sodium chloride — common salt. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Sodium bicarbonate",
        "answer": "baking soda",
        "tag": "chem-env",
        "explanation": "For exam memory, keep the fixed pair: Sodium bicarbonate — baking soda. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Calcium oxide",
        "answer": "quicklime",
        "tag": "chem-env",
        "explanation": "For exam memory, keep the fixed pair: Calcium oxide — quicklime. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Calcium hydroxide",
        "answer": "slaked lime",
        "tag": "chem-env",
        "explanation": "For exam memory, keep the fixed pair: Calcium hydroxide — slaked lime. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "CO2",
        "answer": "greenhouse gas",
        "tag": "chem-env",
        "explanation": "For exam memory, keep the fixed pair: CO2 — greenhouse gas. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Ozone layer",
        "answer": "absorbs UV radiation",
        "tag": "chem-env",
        "explanation": "For exam memory, keep the fixed pair: Ozone layer — absorbs UV radiation. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rusting",
        "answer": "iron oxidation",
        "tag": "chem-env",
        "explanation": "For exam memory, keep the fixed pair: Rusting — iron oxidation. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Alloy",
        "answer": "mixture of metals/metal plus other element",
        "tag": "chem-env",
        "explanation": "For exam memory, keep the fixed pair: Alloy — mixture of metals/metal plus other element. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Hard water",
        "answer": "contains Ca/Mg salts",
        "tag": "chem-env",
        "explanation": "For exam memory, keep the fixed pair: Hard water — contains Ca/Mg salts. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "acid-base",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "acid-base is a core subtopic for Chemistry, environment and everyday science. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "salt",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "salt is a core subtopic for Chemistry, environment and everyday science. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "pH",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "pH is a core subtopic for Chemistry, environment and everyday science. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "metals",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "metals is a core subtopic for Chemistry, environment and everyday science. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "alloys",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "alloys is a core subtopic for Chemistry, environment and everyday science. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "greenhouse effect",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "greenhouse effect is a core subtopic for Chemistry, environment and everyday science. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "ozone",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "ozone is a core subtopic for Chemistry, environment and everyday science. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "pollution",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "pollution is a core subtopic for Chemistry, environment and everyday science. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "biodiversity",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "biodiversity is a core subtopic for Chemistry, environment and everyday science. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "water hardness",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "water hardness is a core subtopic for Chemistry, environment and everyday science. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "science-environment-revision",
    "day": 30,
    "title": "Environment, ecology and climate concepts",
    "bucket": "General Science",
    "priority": "Medium",
    "why": "Environment links current affairs, science and Rajasthan geography.",
    "concepts": [
      "greenhouse effect",
      "global warming",
      "ozone",
      "pollution",
      "food chain",
      "renewable energy",
      "sustainability",
      "biodiversity"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to General Science and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Environment links current affairs, science and Rajasthan geography.\n\nYour coverage for this topic must include: greenhouse effect, global warming, ozone, pollution, food chain, renewable energy, sustainability, biodiversity."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: greenhouse effect, global warming, ozone, pollution, food chain, renewable energy, sustainability, biodiversity."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Greenhouse effect: warming due to greenhouse gases.\n2. Global warming: rise in average global temperature.\n3. Ozone depletion: CFC-related UV protection issue.\n4. Eutrophication: nutrient enrichment in water bodies.\n5. Biomagnification: increase of toxins in food chain.\n6. Biodiversity hotspot: high species richness and threat.\n7. Renewable energy: solar, wind, hydro biomass.\n8. Non-renewable energy: coal, petroleum, natural gas.\n9. Carbon footprint: emissions linked to activity.\n10. Sustainable development: development without harming future needs."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Greenhouse effect",
            "warming due to greenhouse gases",
            "environment"
          ],
          [
            "Global warming",
            "rise in average global temperature",
            "environment"
          ],
          [
            "Ozone depletion",
            "CFC-related UV protection issue",
            "environment"
          ],
          [
            "Eutrophication",
            "nutrient enrichment in water bodies",
            "environment"
          ],
          [
            "Biomagnification",
            "increase of toxins in food chain",
            "environment"
          ],
          [
            "Biodiversity hotspot",
            "high species richness and threat",
            "environment"
          ],
          [
            "Renewable energy",
            "solar, wind, hydro biomass",
            "environment"
          ],
          [
            "Non-renewable energy",
            "coal, petroleum, natural gas",
            "environment"
          ],
          [
            "Carbon footprint",
            "emissions linked to activity",
            "environment"
          ],
          [
            "Sustainable development",
            "development without harming future needs",
            "environment"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Greenhouse effect",
        "answer": "warming due to greenhouse gases",
        "tag": "environment",
        "explanation": "For exam memory, keep the fixed pair: Greenhouse effect — warming due to greenhouse gases. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Global warming",
        "answer": "rise in average global temperature",
        "tag": "environment",
        "explanation": "For exam memory, keep the fixed pair: Global warming — rise in average global temperature. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Ozone depletion",
        "answer": "CFC-related UV protection issue",
        "tag": "environment",
        "explanation": "For exam memory, keep the fixed pair: Ozone depletion — CFC-related UV protection issue. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Eutrophication",
        "answer": "nutrient enrichment in water bodies",
        "tag": "environment",
        "explanation": "For exam memory, keep the fixed pair: Eutrophication — nutrient enrichment in water bodies. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Biomagnification",
        "answer": "increase of toxins in food chain",
        "tag": "environment",
        "explanation": "For exam memory, keep the fixed pair: Biomagnification — increase of toxins in food chain. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Biodiversity hotspot",
        "answer": "high species richness and threat",
        "tag": "environment",
        "explanation": "For exam memory, keep the fixed pair: Biodiversity hotspot — high species richness and threat. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Renewable energy",
        "answer": "solar, wind, hydro biomass",
        "tag": "environment",
        "explanation": "For exam memory, keep the fixed pair: Renewable energy — solar, wind, hydro biomass. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Non-renewable energy",
        "answer": "coal, petroleum, natural gas",
        "tag": "environment",
        "explanation": "For exam memory, keep the fixed pair: Non-renewable energy — coal, petroleum, natural gas. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Carbon footprint",
        "answer": "emissions linked to activity",
        "tag": "environment",
        "explanation": "For exam memory, keep the fixed pair: Carbon footprint — emissions linked to activity. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Sustainable development",
        "answer": "development without harming future needs",
        "tag": "environment",
        "explanation": "For exam memory, keep the fixed pair: Sustainable development — development without harming future needs. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "greenhouse effect",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "greenhouse effect is a core subtopic for Environment, ecology and climate concepts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "global warming",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "global warming is a core subtopic for Environment, ecology and climate concepts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "ozone",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "ozone is a core subtopic for Environment, ecology and climate concepts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "pollution",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "pollution is a core subtopic for Environment, ecology and climate concepts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "food chain",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "food chain is a core subtopic for Environment, ecology and climate concepts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "renewable energy",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "renewable energy is a core subtopic for Environment, ecology and climate concepts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "sustainability",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "sustainability is a core subtopic for Environment, ecology and climate concepts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "biodiversity",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "biodiversity is a core subtopic for Environment, ecology and climate concepts. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "reasoning-series",
    "day": 31,
    "title": "Reasoning: series and pattern detection",
    "bucket": "Reasoning",
    "priority": "Very High",
    "why": "Series questions are fast marks after pattern practice.",
    "concepts": [
      "number series",
      "alphabet series",
      "alphanumeric",
      "wrong number",
      "missing term",
      "prime",
      "square",
      "cube",
      "alternate patterns"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Reasoning and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Series questions are fast marks after pattern practice.\n\nYour coverage for this topic must include: number series, alphabet series, alphanumeric, wrong number, missing term, prime, square, cube, alternate patterns."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: number series, alphabet series, alphanumeric, wrong number, missing term, prime, square, cube, alternate patterns."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Number series: look for +, -, ×, ÷, square, cube, prime patterns.\n2. Alphabet series: use positions A=1 to Z=26.\n3. Alphanumeric series: solve letters and numbers separately.\n4. Wrong number series: find one term breaking pattern.\n5. Missing term: test alternate series.\n6. Prime series: 2,3,5,7,11....\n7. Square series: 1,4,9,16....\n8. Cube series: 1,8,27,64....\n9. Mixed operation: ×2+1, ×3-1 patterns.\n10. Position reversal: A-Z opposite pairs."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Number series",
            "look for +, -, ×, ÷, square, cube, prime patterns",
            "series"
          ],
          [
            "Alphabet series",
            "use positions A=1 to Z=26",
            "series"
          ],
          [
            "Alphanumeric series",
            "solve letters and numbers separately",
            "series"
          ],
          [
            "Wrong number series",
            "find one term breaking pattern",
            "series"
          ],
          [
            "Missing term",
            "test alternate series",
            "series"
          ],
          [
            "Prime series",
            "2,3,5,7,11...",
            "series"
          ],
          [
            "Square series",
            "1,4,9,16...",
            "series"
          ],
          [
            "Cube series",
            "1,8,27,64...",
            "series"
          ],
          [
            "Mixed operation",
            "×2+1, ×3-1 patterns",
            "series"
          ],
          [
            "Position reversal",
            "A-Z opposite pairs",
            "series"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Number series",
        "answer": "look for +, -, ×, ÷, square, cube, prime patterns",
        "tag": "series",
        "explanation": "For exam memory, keep the fixed pair: Number series — look for +, -, ×, ÷, square, cube, prime patterns. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Alphabet series",
        "answer": "use positions A=1 to Z=26",
        "tag": "series",
        "explanation": "For exam memory, keep the fixed pair: Alphabet series — use positions A=1 to Z=26. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Alphanumeric series",
        "answer": "solve letters and numbers separately",
        "tag": "series",
        "explanation": "For exam memory, keep the fixed pair: Alphanumeric series — solve letters and numbers separately. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Wrong number series",
        "answer": "find one term breaking pattern",
        "tag": "series",
        "explanation": "For exam memory, keep the fixed pair: Wrong number series — find one term breaking pattern. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Missing term",
        "answer": "test alternate series",
        "tag": "series",
        "explanation": "For exam memory, keep the fixed pair: Missing term — test alternate series. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Prime series",
        "answer": "2,3,5,7,11...",
        "tag": "series",
        "explanation": "For exam memory, keep the fixed pair: Prime series — 2,3,5,7,11.... This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Square series",
        "answer": "1,4,9,16...",
        "tag": "series",
        "explanation": "For exam memory, keep the fixed pair: Square series — 1,4,9,16.... This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Cube series",
        "answer": "1,8,27,64...",
        "tag": "series",
        "explanation": "For exam memory, keep the fixed pair: Cube series — 1,8,27,64.... This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mixed operation",
        "answer": "×2+1, ×3-1 patterns",
        "tag": "series",
        "explanation": "For exam memory, keep the fixed pair: Mixed operation — ×2+1, ×3-1 patterns. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Position reversal",
        "answer": "A-Z opposite pairs",
        "tag": "series",
        "explanation": "For exam memory, keep the fixed pair: Position reversal — A-Z opposite pairs. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "number series",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "number series is a core subtopic for Reasoning: series and pattern detection. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "alphabet series",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "alphabet series is a core subtopic for Reasoning: series and pattern detection. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "alphanumeric",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "alphanumeric is a core subtopic for Reasoning: series and pattern detection. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "wrong number",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "wrong number is a core subtopic for Reasoning: series and pattern detection. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "missing term",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "missing term is a core subtopic for Reasoning: series and pattern detection. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "prime",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "prime is a core subtopic for Reasoning: series and pattern detection. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "square",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "square is a core subtopic for Reasoning: series and pattern detection. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "cube",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "cube is a core subtopic for Reasoning: series and pattern detection. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "alternate patterns",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "alternate patterns is a core subtopic for Reasoning: series and pattern detection. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "reasoning-coding-analogy",
    "day": 32,
    "title": "Coding-decoding, analogy and classification",
    "bucket": "Reasoning",
    "priority": "Very High",
    "why": "Coding and analogy appear in almost every reasoning set.",
    "concepts": [
      "letter coding",
      "number coding",
      "substitution",
      "symbol coding",
      "analogy",
      "classification",
      "opposite letters",
      "dictionary order"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Reasoning and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Coding and analogy appear in almost every reasoning set.\n\nYour coverage for this topic must include: letter coding, number coding, substitution, symbol coding, analogy, classification, opposite letters, dictionary order."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: letter coding, number coding, substitution, symbol coding, analogy, classification, opposite letters, dictionary order."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Forward coding: shift letters ahead.\n2. Backward coding: shift letters back.\n3. Opposite letters: A-Z, B-Y, C-X.\n4. Position coding: A=1, B=2....\n5. Substitution coding: word names are replaced.\n6. Symbol coding: operators replaced by symbols.\n7. Analogy: same relationship.\n8. Classification: odd one out.\n9. Dictionary order: alphabetical arrangement.\n10. Jumbled word: rearrange into meaningful word."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Forward coding",
            "shift letters ahead",
            "coding"
          ],
          [
            "Backward coding",
            "shift letters back",
            "coding"
          ],
          [
            "Opposite letters",
            "A-Z, B-Y, C-X",
            "coding"
          ],
          [
            "Position coding",
            "A=1, B=2...",
            "coding"
          ],
          [
            "Substitution coding",
            "word names are replaced",
            "coding"
          ],
          [
            "Symbol coding",
            "operators replaced by symbols",
            "coding"
          ],
          [
            "Analogy",
            "same relationship",
            "coding"
          ],
          [
            "Classification",
            "odd one out",
            "coding"
          ],
          [
            "Dictionary order",
            "alphabetical arrangement",
            "coding"
          ],
          [
            "Jumbled word",
            "rearrange into meaningful word",
            "coding"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Forward coding",
        "answer": "shift letters ahead",
        "tag": "coding",
        "explanation": "For exam memory, keep the fixed pair: Forward coding — shift letters ahead. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Backward coding",
        "answer": "shift letters back",
        "tag": "coding",
        "explanation": "For exam memory, keep the fixed pair: Backward coding — shift letters back. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Opposite letters",
        "answer": "A-Z, B-Y, C-X",
        "tag": "coding",
        "explanation": "For exam memory, keep the fixed pair: Opposite letters — A-Z, B-Y, C-X. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Position coding",
        "answer": "A=1, B=2...",
        "tag": "coding",
        "explanation": "For exam memory, keep the fixed pair: Position coding — A=1, B=2.... This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Substitution coding",
        "answer": "word names are replaced",
        "tag": "coding",
        "explanation": "For exam memory, keep the fixed pair: Substitution coding — word names are replaced. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Symbol coding",
        "answer": "operators replaced by symbols",
        "tag": "coding",
        "explanation": "For exam memory, keep the fixed pair: Symbol coding — operators replaced by symbols. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Analogy",
        "answer": "same relationship",
        "tag": "coding",
        "explanation": "For exam memory, keep the fixed pair: Analogy — same relationship. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Classification",
        "answer": "odd one out",
        "tag": "coding",
        "explanation": "For exam memory, keep the fixed pair: Classification — odd one out. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Dictionary order",
        "answer": "alphabetical arrangement",
        "tag": "coding",
        "explanation": "For exam memory, keep the fixed pair: Dictionary order — alphabetical arrangement. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Jumbled word",
        "answer": "rearrange into meaningful word",
        "tag": "coding",
        "explanation": "For exam memory, keep the fixed pair: Jumbled word — rearrange into meaningful word. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "letter coding",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "letter coding is a core subtopic for Coding-decoding, analogy and classification. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "number coding",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "number coding is a core subtopic for Coding-decoding, analogy and classification. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "substitution",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "substitution is a core subtopic for Coding-decoding, analogy and classification. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "symbol coding",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "symbol coding is a core subtopic for Coding-decoding, analogy and classification. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "analogy",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "analogy is a core subtopic for Coding-decoding, analogy and classification. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "classification",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "classification is a core subtopic for Coding-decoding, analogy and classification. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "opposite letters",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "opposite letters is a core subtopic for Coding-decoding, analogy and classification. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "dictionary order",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "dictionary order is a core subtopic for Coding-decoding, analogy and classification. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "reasoning-direction-relation-ranking",
    "day": 33,
    "title": "Direction, blood relation and ranking",
    "bucket": "Reasoning",
    "priority": "Very High",
    "why": "These are concept-simple but error-prone if solved mentally without diagram.",
    "concepts": [
      "direction",
      "distance",
      "shadow",
      "blood relation",
      "family tree",
      "ranking",
      "age order",
      "left-right position"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Reasoning and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: These are concept-simple but error-prone if solved mentally without diagram.\n\nYour coverage for this topic must include: direction, distance, shadow, blood relation, family tree, ranking, age order, left-right position."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: direction, distance, shadow, blood relation, family tree, ranking, age order, left-right position."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Direction diagram: draw N-E-S-W.\n2. Right turn from North: East.\n3. Left turn from North: West.\n4. Morning shadow: points west.\n5. Evening shadow: points east.\n6. Blood relation: make family tree.\n7. Only daughter of my mother: speaker herself.\n8. Ranking total: left + right - 1.\n9. Age ordering: use > and < chain.\n10. Distance displacement: use final coordinates."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Direction diagram",
            "draw N-E-S-W",
            "direction-relation"
          ],
          [
            "Right turn from North",
            "East",
            "direction-relation"
          ],
          [
            "Left turn from North",
            "West",
            "direction-relation"
          ],
          [
            "Morning shadow",
            "points west",
            "direction-relation"
          ],
          [
            "Evening shadow",
            "points east",
            "direction-relation"
          ],
          [
            "Blood relation",
            "make family tree",
            "direction-relation"
          ],
          [
            "Only daughter of my mother",
            "speaker herself",
            "direction-relation"
          ],
          [
            "Ranking total",
            "left + right - 1",
            "direction-relation"
          ],
          [
            "Age ordering",
            "use > and < chain",
            "direction-relation"
          ],
          [
            "Distance displacement",
            "use final coordinates",
            "direction-relation"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Direction diagram",
        "answer": "draw N-E-S-W",
        "tag": "direction-relation",
        "explanation": "For exam memory, keep the fixed pair: Direction diagram — draw N-E-S-W. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Right turn from North",
        "answer": "East",
        "tag": "direction-relation",
        "explanation": "For exam memory, keep the fixed pair: Right turn from North — East. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Left turn from North",
        "answer": "West",
        "tag": "direction-relation",
        "explanation": "For exam memory, keep the fixed pair: Left turn from North — West. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Morning shadow",
        "answer": "points west",
        "tag": "direction-relation",
        "explanation": "For exam memory, keep the fixed pair: Morning shadow — points west. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Evening shadow",
        "answer": "points east",
        "tag": "direction-relation",
        "explanation": "For exam memory, keep the fixed pair: Evening shadow — points east. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Blood relation",
        "answer": "make family tree",
        "tag": "direction-relation",
        "explanation": "For exam memory, keep the fixed pair: Blood relation — make family tree. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Only daughter of my mother",
        "answer": "speaker herself",
        "tag": "direction-relation",
        "explanation": "For exam memory, keep the fixed pair: Only daughter of my mother — speaker herself. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Ranking total",
        "answer": "left + right - 1",
        "tag": "direction-relation",
        "explanation": "For exam memory, keep the fixed pair: Ranking total — left + right - 1. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Age ordering",
        "answer": "use > and < chain",
        "tag": "direction-relation",
        "explanation": "For exam memory, keep the fixed pair: Age ordering — use > and < chain. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Distance displacement",
        "answer": "use final coordinates",
        "tag": "direction-relation",
        "explanation": "For exam memory, keep the fixed pair: Distance displacement — use final coordinates. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "direction",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "direction is a core subtopic for Direction, blood relation and ranking. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "distance",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "distance is a core subtopic for Direction, blood relation and ranking. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "shadow",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "shadow is a core subtopic for Direction, blood relation and ranking. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "blood relation",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "blood relation is a core subtopic for Direction, blood relation and ranking. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "family tree",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "family tree is a core subtopic for Direction, blood relation and ranking. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "ranking",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "ranking is a core subtopic for Direction, blood relation and ranking. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "age order",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "age order is a core subtopic for Direction, blood relation and ranking. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "left-right position",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "left-right position is a core subtopic for Direction, blood relation and ranking. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "reasoning-syllogism-venn-ds",
    "day": 34,
    "title": "Syllogism, Venn diagram and data sufficiency",
    "bucket": "Reasoning",
    "priority": "Very High",
    "why": "PYQs use all/some/no and statement sufficiency patterns.",
    "concepts": [
      "syllogism",
      "Venn",
      "all-some-no",
      "possibility",
      "data sufficiency",
      "statement conclusion",
      "set relation"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Reasoning and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: PYQs use all/some/no and statement sufficiency patterns.\n\nYour coverage for this topic must include: syllogism, Venn, all-some-no, possibility, data sufficiency, statement conclusion, set relation."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: syllogism, Venn, all-some-no, possibility, data sufficiency, statement conclusion, set relation."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. All A are B: A subset of B.\n2. Some A are B: partial overlap.\n3. No A is B: no overlap.\n4. Only conclusion follows: must be definitely true.\n5. Venn diagram: visual relation among sets.\n6. Possibility: not definite unless asked.\n7. Data sufficiency: check if statement alone enough.\n8. Statement I only: first statement sufficient.\n9. Statement II only: second statement sufficient.\n10. Both together: neither alone sufficient."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "All A are B",
            "A subset of B",
            "logic"
          ],
          [
            "Some A are B",
            "partial overlap",
            "logic"
          ],
          [
            "No A is B",
            "no overlap",
            "logic"
          ],
          [
            "Only conclusion follows",
            "must be definitely true",
            "logic"
          ],
          [
            "Venn diagram",
            "visual relation among sets",
            "logic"
          ],
          [
            "Possibility",
            "not definite unless asked",
            "logic"
          ],
          [
            "Data sufficiency",
            "check if statement alone enough",
            "logic"
          ],
          [
            "Statement I only",
            "first statement sufficient",
            "logic"
          ],
          [
            "Statement II only",
            "second statement sufficient",
            "logic"
          ],
          [
            "Both together",
            "neither alone sufficient",
            "logic"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "All A are B",
        "answer": "A subset of B",
        "tag": "logic",
        "explanation": "For exam memory, keep the fixed pair: All A are B — A subset of B. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Some A are B",
        "answer": "partial overlap",
        "tag": "logic",
        "explanation": "For exam memory, keep the fixed pair: Some A are B — partial overlap. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "No A is B",
        "answer": "no overlap",
        "tag": "logic",
        "explanation": "For exam memory, keep the fixed pair: No A is B — no overlap. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Only conclusion follows",
        "answer": "must be definitely true",
        "tag": "logic",
        "explanation": "For exam memory, keep the fixed pair: Only conclusion follows — must be definitely true. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Venn diagram",
        "answer": "visual relation among sets",
        "tag": "logic",
        "explanation": "For exam memory, keep the fixed pair: Venn diagram — visual relation among sets. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Possibility",
        "answer": "not definite unless asked",
        "tag": "logic",
        "explanation": "For exam memory, keep the fixed pair: Possibility — not definite unless asked. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Data sufficiency",
        "answer": "check if statement alone enough",
        "tag": "logic",
        "explanation": "For exam memory, keep the fixed pair: Data sufficiency — check if statement alone enough. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Statement I only",
        "answer": "first statement sufficient",
        "tag": "logic",
        "explanation": "For exam memory, keep the fixed pair: Statement I only — first statement sufficient. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Statement II only",
        "answer": "second statement sufficient",
        "tag": "logic",
        "explanation": "For exam memory, keep the fixed pair: Statement II only — second statement sufficient. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Both together",
        "answer": "neither alone sufficient",
        "tag": "logic",
        "explanation": "For exam memory, keep the fixed pair: Both together — neither alone sufficient. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "syllogism",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "syllogism is a core subtopic for Syllogism, Venn diagram and data sufficiency. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "Venn",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "Venn is a core subtopic for Syllogism, Venn diagram and data sufficiency. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "all-some-no",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "all-some-no is a core subtopic for Syllogism, Venn diagram and data sufficiency. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "possibility",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "possibility is a core subtopic for Syllogism, Venn diagram and data sufficiency. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "data sufficiency",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "data sufficiency is a core subtopic for Syllogism, Venn diagram and data sufficiency. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "statement conclusion",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "statement conclusion is a core subtopic for Syllogism, Venn diagram and data sufficiency. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "set relation",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "set relation is a core subtopic for Syllogism, Venn diagram and data sufficiency. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "reasoning-seating-decision",
    "day": 35,
    "title": "Seating, order and decision-making",
    "bucket": "Reasoning",
    "priority": "Medium-High",
    "why": "Decision and arrangement questions test careful reading, not memory.",
    "concepts": [
      "linear seating",
      "circular seating",
      "arrangement",
      "decision making",
      "course of action",
      "assumption",
      "conclusion"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Reasoning and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Decision and arrangement questions test careful reading, not memory.\n\nYour coverage for this topic must include: linear seating, circular seating, arrangement, decision making, course of action, assumption, conclusion."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: linear seating, circular seating, arrangement, decision making, course of action, assumption, conclusion."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Linear seating: left/right positions in a row.\n2. Circular seating: facing centre or outside matters.\n3. Arrangement puzzle: use fixed clues first.\n4. Decision making: choose ethical and practical option.\n5. Problem solving: follow conditions, not assumptions.\n6. Administrative judgement: public interest and rule-based action.\n7. Course of action: feasible and relevant action.\n8. Cause-effect: direct relation only.\n9. Assumption: unstated necessary belief.\n10. Conclusion: must follow from statements."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Linear seating",
            "left/right positions in a row",
            "decision"
          ],
          [
            "Circular seating",
            "facing centre or outside matters",
            "decision"
          ],
          [
            "Arrangement puzzle",
            "use fixed clues first",
            "decision"
          ],
          [
            "Decision making",
            "choose ethical and practical option",
            "decision"
          ],
          [
            "Problem solving",
            "follow conditions, not assumptions",
            "decision"
          ],
          [
            "Administrative judgement",
            "public interest and rule-based action",
            "decision"
          ],
          [
            "Course of action",
            "feasible and relevant action",
            "decision"
          ],
          [
            "Cause-effect",
            "direct relation only",
            "decision"
          ],
          [
            "Assumption",
            "unstated necessary belief",
            "decision"
          ],
          [
            "Conclusion",
            "must follow from statements",
            "decision"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Linear seating",
        "answer": "left/right positions in a row",
        "tag": "decision",
        "explanation": "For exam memory, keep the fixed pair: Linear seating — left/right positions in a row. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Circular seating",
        "answer": "facing centre or outside matters",
        "tag": "decision",
        "explanation": "For exam memory, keep the fixed pair: Circular seating — facing centre or outside matters. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Arrangement puzzle",
        "answer": "use fixed clues first",
        "tag": "decision",
        "explanation": "For exam memory, keep the fixed pair: Arrangement puzzle — use fixed clues first. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Decision making",
        "answer": "choose ethical and practical option",
        "tag": "decision",
        "explanation": "For exam memory, keep the fixed pair: Decision making — choose ethical and practical option. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Problem solving",
        "answer": "follow conditions, not assumptions",
        "tag": "decision",
        "explanation": "For exam memory, keep the fixed pair: Problem solving — follow conditions, not assumptions. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Administrative judgement",
        "answer": "public interest and rule-based action",
        "tag": "decision",
        "explanation": "For exam memory, keep the fixed pair: Administrative judgement — public interest and rule-based action. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Course of action",
        "answer": "feasible and relevant action",
        "tag": "decision",
        "explanation": "For exam memory, keep the fixed pair: Course of action — feasible and relevant action. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Cause-effect",
        "answer": "direct relation only",
        "tag": "decision",
        "explanation": "For exam memory, keep the fixed pair: Cause-effect — direct relation only. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Assumption",
        "answer": "unstated necessary belief",
        "tag": "decision",
        "explanation": "For exam memory, keep the fixed pair: Assumption — unstated necessary belief. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Conclusion",
        "answer": "must follow from statements",
        "tag": "decision",
        "explanation": "For exam memory, keep the fixed pair: Conclusion — must follow from statements. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "linear seating",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "linear seating is a core subtopic for Seating, order and decision-making. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "circular seating",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "circular seating is a core subtopic for Seating, order and decision-making. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "arrangement",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "arrangement is a core subtopic for Seating, order and decision-making. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "decision making",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "decision making is a core subtopic for Seating, order and decision-making. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "course of action",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "course of action is a core subtopic for Seating, order and decision-making. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "assumption",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "assumption is a core subtopic for Seating, order and decision-making. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "conclusion",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "conclusion is a core subtopic for Seating, order and decision-making. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "reasoning-clock-calendar",
    "day": 36,
    "title": "Clock and calendar",
    "bucket": "Reasoning",
    "priority": "Very High",
    "why": "Formula memory converts these into quick marks.",
    "concepts": [
      "clock angle",
      "straight hands",
      "coincide",
      "odd days",
      "leap year",
      "calendar",
      "mirror clock"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Reasoning and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Formula memory converts these into quick marks.\n\nYour coverage for this topic must include: clock angle, straight hands, coincide, odd days, leap year, calendar, mirror clock."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: clock angle, straight hands, coincide, odd days, leap year, calendar, mirror clock."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Clock angle formula: |30H - 5.5M|.\n2. Straight line in 24h: 44 times.\n3. Hands coincide in 12h: 11 times.\n4. Leap year: 366 days.\n5. Odd days: remainder days after full weeks.\n6. Century non-leap: 100 not divisible by 400.\n7. Calendar month code: practice repeated problems.\n8. 3:25 angle: 47.5 degrees.\n9. Monday count: use date position.\n10. Mirror clock: 11:60 - given time."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Clock angle formula",
            "|30H - 5.5M|",
            "clock-calendar"
          ],
          [
            "Straight line in 24h",
            "44 times",
            "clock-calendar"
          ],
          [
            "Hands coincide in 12h",
            "11 times",
            "clock-calendar"
          ],
          [
            "Leap year",
            "366 days",
            "clock-calendar"
          ],
          [
            "Odd days",
            "remainder days after full weeks",
            "clock-calendar"
          ],
          [
            "Century non-leap",
            "100 not divisible by 400",
            "clock-calendar"
          ],
          [
            "Calendar month code",
            "practice repeated problems",
            "clock-calendar"
          ],
          [
            "3:25 angle",
            "47.5 degrees",
            "clock-calendar"
          ],
          [
            "Monday count",
            "use date position",
            "clock-calendar"
          ],
          [
            "Mirror clock",
            "11:60 - given time",
            "clock-calendar"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Clock angle formula",
        "answer": "|30H - 5.5M|",
        "tag": "clock-calendar",
        "explanation": "For exam memory, keep the fixed pair: Clock angle formula — |30H - 5.5M|. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Straight line in 24h",
        "answer": "44 times",
        "tag": "clock-calendar",
        "explanation": "For exam memory, keep the fixed pair: Straight line in 24h — 44 times. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Hands coincide in 12h",
        "answer": "11 times",
        "tag": "clock-calendar",
        "explanation": "For exam memory, keep the fixed pair: Hands coincide in 12h — 11 times. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Leap year",
        "answer": "366 days",
        "tag": "clock-calendar",
        "explanation": "For exam memory, keep the fixed pair: Leap year — 366 days. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Odd days",
        "answer": "remainder days after full weeks",
        "tag": "clock-calendar",
        "explanation": "For exam memory, keep the fixed pair: Odd days — remainder days after full weeks. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Century non-leap",
        "answer": "100 not divisible by 400",
        "tag": "clock-calendar",
        "explanation": "For exam memory, keep the fixed pair: Century non-leap — 100 not divisible by 400. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Calendar month code",
        "answer": "practice repeated problems",
        "tag": "clock-calendar",
        "explanation": "For exam memory, keep the fixed pair: Calendar month code — practice repeated problems. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "3:25 angle",
        "answer": "47.5 degrees",
        "tag": "clock-calendar",
        "explanation": "For exam memory, keep the fixed pair: 3:25 angle — 47.5 degrees. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Monday count",
        "answer": "use date position",
        "tag": "clock-calendar",
        "explanation": "For exam memory, keep the fixed pair: Monday count — use date position. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mirror clock",
        "answer": "11:60 - given time",
        "tag": "clock-calendar",
        "explanation": "For exam memory, keep the fixed pair: Mirror clock — 11:60 - given time. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "clock angle",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "clock angle is a core subtopic for Clock and calendar. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "straight hands",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "straight hands is a core subtopic for Clock and calendar. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "coincide",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "coincide is a core subtopic for Clock and calendar. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "odd days",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "odd days is a core subtopic for Clock and calendar. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "leap year",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "leap year is a core subtopic for Clock and calendar. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "calendar",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "calendar is a core subtopic for Clock and calendar. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "mirror clock",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "mirror clock is a core subtopic for Clock and calendar. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "reasoning-nonverbal-cube-dice",
    "day": 37,
    "title": "Cube, dice, mirror image and figure counting",
    "bucket": "Reasoning",
    "priority": "High",
    "why": "Figure and cube questions appeared in uploaded 2022 papers; practise them visually.",
    "concepts": [
      "painted cube",
      "dice",
      "open cube",
      "mirror image",
      "water image",
      "triangle counting",
      "figure series",
      "odd figure"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Reasoning and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Figure and cube questions appeared in uploaded 2022 papers; practise them visually.\n\nYour coverage for this topic must include: painted cube, dice, open cube, mirror image, water image, triangle counting, figure series, odd figure."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: painted cube, dice, open cube, mirror image, water image, triangle counting, figure series, odd figure."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Painted cube one-face: 6(n-2)^2.\n2. Painted cube two-face: 12(n-2).\n3. Painted cube three-face: 8 corners.\n4. No face painted: (n-2)^3.\n5. Dice opposite face: never adjacent in same view.\n6. Open cube: fold mentally/opposite faces.\n7. Mirror image: left-right reversal.\n8. Water image: top-bottom reversal.\n9. Triangle counting: count small, medium, large systematically.\n10. Figure series: observe shape, rotation, fill, position."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Painted cube one-face",
            "6(n-2)^2",
            "nonverbal"
          ],
          [
            "Painted cube two-face",
            "12(n-2)",
            "nonverbal"
          ],
          [
            "Painted cube three-face",
            "8 corners",
            "nonverbal"
          ],
          [
            "No face painted",
            "(n-2)^3",
            "nonverbal"
          ],
          [
            "Dice opposite face",
            "never adjacent in same view",
            "nonverbal"
          ],
          [
            "Open cube",
            "fold mentally/opposite faces",
            "nonverbal"
          ],
          [
            "Mirror image",
            "left-right reversal",
            "nonverbal"
          ],
          [
            "Water image",
            "top-bottom reversal",
            "nonverbal"
          ],
          [
            "Triangle counting",
            "count small, medium, large systematically",
            "nonverbal"
          ],
          [
            "Figure series",
            "observe shape, rotation, fill, position",
            "nonverbal"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Painted cube one-face",
        "answer": "6(n-2)^2",
        "tag": "nonverbal",
        "explanation": "For exam memory, keep the fixed pair: Painted cube one-face — 6(n-2)^2. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Painted cube two-face",
        "answer": "12(n-2)",
        "tag": "nonverbal",
        "explanation": "For exam memory, keep the fixed pair: Painted cube two-face — 12(n-2). This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Painted cube three-face",
        "answer": "8 corners",
        "tag": "nonverbal",
        "explanation": "For exam memory, keep the fixed pair: Painted cube three-face — 8 corners. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "No face painted",
        "answer": "(n-2)^3",
        "tag": "nonverbal",
        "explanation": "For exam memory, keep the fixed pair: No face painted — (n-2)^3. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Dice opposite face",
        "answer": "never adjacent in same view",
        "tag": "nonverbal",
        "explanation": "For exam memory, keep the fixed pair: Dice opposite face — never adjacent in same view. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Open cube",
        "answer": "fold mentally/opposite faces",
        "tag": "nonverbal",
        "explanation": "For exam memory, keep the fixed pair: Open cube — fold mentally/opposite faces. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mirror image",
        "answer": "left-right reversal",
        "tag": "nonverbal",
        "explanation": "For exam memory, keep the fixed pair: Mirror image — left-right reversal. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Water image",
        "answer": "top-bottom reversal",
        "tag": "nonverbal",
        "explanation": "For exam memory, keep the fixed pair: Water image — top-bottom reversal. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Triangle counting",
        "answer": "count small, medium, large systematically",
        "tag": "nonverbal",
        "explanation": "For exam memory, keep the fixed pair: Triangle counting — count small, medium, large systematically. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Figure series",
        "answer": "observe shape, rotation, fill, position",
        "tag": "nonverbal",
        "explanation": "For exam memory, keep the fixed pair: Figure series — observe shape, rotation, fill, position. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "painted cube",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "painted cube is a core subtopic for Cube, dice, mirror image and figure counting. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "dice",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "dice is a core subtopic for Cube, dice, mirror image and figure counting. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "open cube",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "open cube is a core subtopic for Cube, dice, mirror image and figure counting. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "mirror image",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "mirror image is a core subtopic for Cube, dice, mirror image and figure counting. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "water image",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "water image is a core subtopic for Cube, dice, mirror image and figure counting. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "triangle counting",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "triangle counting is a core subtopic for Cube, dice, mirror image and figure counting. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "figure series",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "figure series is a core subtopic for Cube, dice, mirror image and figure counting. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "odd figure",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "odd figure is a core subtopic for Cube, dice, mirror image and figure counting. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "reasoning-mixed-advanced",
    "day": 38,
    "title": "Mixed reasoning practice and trap control",
    "bucket": "Reasoning",
    "priority": "High",
    "why": "Final reasoning accuracy comes from mixed practice and error analysis.",
    "concepts": [
      "set counting",
      "grid puzzle",
      "input-output",
      "symbol operations",
      "inequality",
      "coded relation",
      "elimination"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Reasoning and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Final reasoning accuracy comes from mixed practice and error analysis.\n\nYour coverage for this topic must include: set counting, grid puzzle, input-output, symbol operations, inequality, coded relation, elimination."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: set counting, grid puzzle, input-output, symbol operations, inequality, coded relation, elimination."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Venn counting: use overlap regions.\n2. Set total: A+B-both+neither.\n3. Class relation: subset/overlap/separate.\n4. Table puzzle: make grid.\n5. Input-output style: observe step changes.\n6. Mathematical operations: replace symbols carefully.\n7. Inequality: chain comparison.\n8. Coded relation: convert symbols into family links.\n9. Data table reasoning: read exact row/column.\n10. Elimination: remove impossible options first."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Venn counting",
            "use overlap regions",
            "mixed-reasoning"
          ],
          [
            "Set total",
            "A+B-both+neither",
            "mixed-reasoning"
          ],
          [
            "Class relation",
            "subset/overlap/separate",
            "mixed-reasoning"
          ],
          [
            "Table puzzle",
            "make grid",
            "mixed-reasoning"
          ],
          [
            "Input-output style",
            "observe step changes",
            "mixed-reasoning"
          ],
          [
            "Mathematical operations",
            "replace symbols carefully",
            "mixed-reasoning"
          ],
          [
            "Inequality",
            "chain comparison",
            "mixed-reasoning"
          ],
          [
            "Coded relation",
            "convert symbols into family links",
            "mixed-reasoning"
          ],
          [
            "Data table reasoning",
            "read exact row/column",
            "mixed-reasoning"
          ],
          [
            "Elimination",
            "remove impossible options first",
            "mixed-reasoning"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Venn counting",
        "answer": "use overlap regions",
        "tag": "mixed-reasoning",
        "explanation": "For exam memory, keep the fixed pair: Venn counting — use overlap regions. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Set total",
        "answer": "A+B-both+neither",
        "tag": "mixed-reasoning",
        "explanation": "For exam memory, keep the fixed pair: Set total — A+B-both+neither. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Class relation",
        "answer": "subset/overlap/separate",
        "tag": "mixed-reasoning",
        "explanation": "For exam memory, keep the fixed pair: Class relation — subset/overlap/separate. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Table puzzle",
        "answer": "make grid",
        "tag": "mixed-reasoning",
        "explanation": "For exam memory, keep the fixed pair: Table puzzle — make grid. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Input-output style",
        "answer": "observe step changes",
        "tag": "mixed-reasoning",
        "explanation": "For exam memory, keep the fixed pair: Input-output style — observe step changes. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mathematical operations",
        "answer": "replace symbols carefully",
        "tag": "mixed-reasoning",
        "explanation": "For exam memory, keep the fixed pair: Mathematical operations — replace symbols carefully. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Inequality",
        "answer": "chain comparison",
        "tag": "mixed-reasoning",
        "explanation": "For exam memory, keep the fixed pair: Inequality — chain comparison. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Coded relation",
        "answer": "convert symbols into family links",
        "tag": "mixed-reasoning",
        "explanation": "For exam memory, keep the fixed pair: Coded relation — convert symbols into family links. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Data table reasoning",
        "answer": "read exact row/column",
        "tag": "mixed-reasoning",
        "explanation": "For exam memory, keep the fixed pair: Data table reasoning — read exact row/column. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Elimination",
        "answer": "remove impossible options first",
        "tag": "mixed-reasoning",
        "explanation": "For exam memory, keep the fixed pair: Elimination — remove impossible options first. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "set counting",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "set counting is a core subtopic for Mixed reasoning practice and trap control. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "grid puzzle",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "grid puzzle is a core subtopic for Mixed reasoning practice and trap control. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "input-output",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "input-output is a core subtopic for Mixed reasoning practice and trap control. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "symbol operations",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "symbol operations is a core subtopic for Mixed reasoning practice and trap control. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "inequality",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "inequality is a core subtopic for Mixed reasoning practice and trap control. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "coded relation",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "coded relation is a core subtopic for Mixed reasoning practice and trap control. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "elimination",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "elimination is a core subtopic for Mixed reasoning practice and trap control. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "numeracy-number-system",
    "day": 39,
    "title": "Number system, divisibility and remainders",
    "bucket": "Basic Numeracy",
    "priority": "Very High",
    "why": "Number system is the base of LCM-HCF, simplification and DI calculations.",
    "concepts": [
      "integers",
      "rational numbers",
      "divisibility",
      "remainders",
      "prime",
      "composite",
      "factors",
      "multiples"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Basic Numeracy and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Number system is the base of LCM-HCF, simplification and DI calculations.\n\nYour coverage for this topic must include: integers, rational numbers, divisibility, remainders, prime, composite, factors, multiples."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: integers, rational numbers, divisibility, remainders, prime, composite, factors, multiples."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Divisibility by 2: last digit even.\n2. Divisibility by 3: sum of digits divisible by 3.\n3. Divisibility by 4: last two digits divisible by 4.\n4. Divisibility by 5: last digit 0 or 5.\n5. Divisibility by 8: last three digits divisible by 8.\n6. Divisibility by 9: sum of digits divisible by 9.\n7. Divisibility by 11: difference of alternate digit sums divisible by 11.\n8. Remainder: use modular pattern.\n9. Prime number: only two factors.\n10. Composite number: more than two factors."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Divisibility by 2",
            "last digit even",
            "number-system"
          ],
          [
            "Divisibility by 3",
            "sum of digits divisible by 3",
            "number-system"
          ],
          [
            "Divisibility by 4",
            "last two digits divisible by 4",
            "number-system"
          ],
          [
            "Divisibility by 5",
            "last digit 0 or 5",
            "number-system"
          ],
          [
            "Divisibility by 8",
            "last three digits divisible by 8",
            "number-system"
          ],
          [
            "Divisibility by 9",
            "sum of digits divisible by 9",
            "number-system"
          ],
          [
            "Divisibility by 11",
            "difference of alternate digit sums divisible by 11",
            "number-system"
          ],
          [
            "Remainder",
            "use modular pattern",
            "number-system"
          ],
          [
            "Prime number",
            "only two factors",
            "number-system"
          ],
          [
            "Composite number",
            "more than two factors",
            "number-system"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Divisibility by 2",
        "answer": "last digit even",
        "tag": "number-system",
        "explanation": "For exam memory, keep the fixed pair: Divisibility by 2 — last digit even. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Divisibility by 3",
        "answer": "sum of digits divisible by 3",
        "tag": "number-system",
        "explanation": "For exam memory, keep the fixed pair: Divisibility by 3 — sum of digits divisible by 3. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Divisibility by 4",
        "answer": "last two digits divisible by 4",
        "tag": "number-system",
        "explanation": "For exam memory, keep the fixed pair: Divisibility by 4 — last two digits divisible by 4. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Divisibility by 5",
        "answer": "last digit 0 or 5",
        "tag": "number-system",
        "explanation": "For exam memory, keep the fixed pair: Divisibility by 5 — last digit 0 or 5. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Divisibility by 8",
        "answer": "last three digits divisible by 8",
        "tag": "number-system",
        "explanation": "For exam memory, keep the fixed pair: Divisibility by 8 — last three digits divisible by 8. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Divisibility by 9",
        "answer": "sum of digits divisible by 9",
        "tag": "number-system",
        "explanation": "For exam memory, keep the fixed pair: Divisibility by 9 — sum of digits divisible by 9. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Divisibility by 11",
        "answer": "difference of alternate digit sums divisible by 11",
        "tag": "number-system",
        "explanation": "For exam memory, keep the fixed pair: Divisibility by 11 — difference of alternate digit sums divisible by 11. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Remainder",
        "answer": "use modular pattern",
        "tag": "number-system",
        "explanation": "For exam memory, keep the fixed pair: Remainder — use modular pattern. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Prime number",
        "answer": "only two factors",
        "tag": "number-system",
        "explanation": "For exam memory, keep the fixed pair: Prime number — only two factors. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Composite number",
        "answer": "more than two factors",
        "tag": "number-system",
        "explanation": "For exam memory, keep the fixed pair: Composite number — more than two factors. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "integers",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "integers is a core subtopic for Number system, divisibility and remainders. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "rational numbers",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "rational numbers is a core subtopic for Number system, divisibility and remainders. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "divisibility",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "divisibility is a core subtopic for Number system, divisibility and remainders. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "remainders",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "remainders is a core subtopic for Number system, divisibility and remainders. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "prime",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "prime is a core subtopic for Number system, divisibility and remainders. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "composite",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "composite is a core subtopic for Number system, divisibility and remainders. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "factors",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "factors is a core subtopic for Number system, divisibility and remainders. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "multiples",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "multiples is a core subtopic for Number system, divisibility and remainders. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "numeracy-lcm-hcf-simplification",
    "day": 40,
    "title": "LCM, HCF, simplification and surds",
    "bucket": "Basic Numeracy",
    "priority": "Very High",
    "why": "LCM-HCF and simplification appear directly and also inside DI.",
    "concepts": [
      "LCM",
      "HCF",
      "remainders",
      "surds",
      "BODMAS",
      "fractions",
      "comparison"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Basic Numeracy and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: LCM-HCF and simplification appear directly and also inside DI.\n\nYour coverage for this topic must include: LCM, HCF, remainders, surds, BODMAS, fractions, comparison."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: LCM, HCF, remainders, surds, BODMAS, fractions, comparison."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. LCM: least common multiple.\n2. HCF: highest common factor.\n3. LCM×HCF: product of two numbers.\n4. Common remainder question: number = LCM multiple + remainder.\n5. Largest number with remainder: take largest below limit.\n6. Smallest number divisible: LCM directly.\n7. Co-prime numbers: HCF = 1.\n8. Fraction comparison: use LCM/cross multiplication.\n9. Surd simplification: factor square terms.\n10. BODMAS: bracket-order-division-multiplication-addition-subtraction."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "LCM",
            "least common multiple",
            "lcm-hcf"
          ],
          [
            "HCF",
            "highest common factor",
            "lcm-hcf"
          ],
          [
            "LCM×HCF",
            "product of two numbers",
            "lcm-hcf"
          ],
          [
            "Common remainder question",
            "number = LCM multiple + remainder",
            "lcm-hcf"
          ],
          [
            "Largest number with remainder",
            "take largest below limit",
            "lcm-hcf"
          ],
          [
            "Smallest number divisible",
            "LCM directly",
            "lcm-hcf"
          ],
          [
            "Co-prime numbers",
            "HCF = 1",
            "lcm-hcf"
          ],
          [
            "Fraction comparison",
            "use LCM/cross multiplication",
            "lcm-hcf"
          ],
          [
            "Surd simplification",
            "factor square terms",
            "lcm-hcf"
          ],
          [
            "BODMAS",
            "bracket-order-division-multiplication-addition-subtraction",
            "lcm-hcf"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "LCM",
        "answer": "least common multiple",
        "tag": "lcm-hcf",
        "explanation": "For exam memory, keep the fixed pair: LCM — least common multiple. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "HCF",
        "answer": "highest common factor",
        "tag": "lcm-hcf",
        "explanation": "For exam memory, keep the fixed pair: HCF — highest common factor. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "LCM×HCF",
        "answer": "product of two numbers",
        "tag": "lcm-hcf",
        "explanation": "For exam memory, keep the fixed pair: LCM×HCF — product of two numbers. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Common remainder question",
        "answer": "number = LCM multiple + remainder",
        "tag": "lcm-hcf",
        "explanation": "For exam memory, keep the fixed pair: Common remainder question — number = LCM multiple + remainder. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Largest number with remainder",
        "answer": "take largest below limit",
        "tag": "lcm-hcf",
        "explanation": "For exam memory, keep the fixed pair: Largest number with remainder — take largest below limit. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Smallest number divisible",
        "answer": "LCM directly",
        "tag": "lcm-hcf",
        "explanation": "For exam memory, keep the fixed pair: Smallest number divisible — LCM directly. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Co-prime numbers",
        "answer": "HCF = 1",
        "tag": "lcm-hcf",
        "explanation": "For exam memory, keep the fixed pair: Co-prime numbers — HCF = 1. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Fraction comparison",
        "answer": "use LCM/cross multiplication",
        "tag": "lcm-hcf",
        "explanation": "For exam memory, keep the fixed pair: Fraction comparison — use LCM/cross multiplication. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Surd simplification",
        "answer": "factor square terms",
        "tag": "lcm-hcf",
        "explanation": "For exam memory, keep the fixed pair: Surd simplification — factor square terms. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "BODMAS",
        "answer": "bracket-order-division-multiplication-addition-subtraction",
        "tag": "lcm-hcf",
        "explanation": "For exam memory, keep the fixed pair: BODMAS — bracket-order-division-multiplication-addition-subtraction. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "remainders",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "remainders is a core subtopic for LCM, HCF, simplification and surds. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "surds",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "surds is a core subtopic for LCM, HCF, simplification and surds. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "fractions",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "fractions is a core subtopic for LCM, HCF, simplification and surds. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "comparison",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "comparison is a core subtopic for LCM, HCF, simplification and surds. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "numeracy-percentage",
    "day": 41,
    "title": "Percentage and successive change",
    "bucket": "Basic Numeracy",
    "priority": "Very High",
    "why": "Percentage is used in arithmetic, DI, score analysis and comparison questions.",
    "concepts": [
      "percentage",
      "increase",
      "decrease",
      "successive change",
      "percentage point",
      "base value",
      "fraction-percent"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Basic Numeracy and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Percentage is used in arithmetic, DI, score analysis and comparison questions.\n\nYour coverage for this topic must include: percentage, increase, decrease, successive change, percentage point, base value, fraction-percent."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: percentage, increase, decrease, successive change, percentage point, base value, fraction-percent."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Percentage: part/whole ×100.\n2. x% of y: xy/100.\n3. Successive change: a+b+ab/100.\n4. Increase by 20 then decrease by 20: 4% decrease.\n5. Percentage points: direct difference of percentages.\n6. Original value: new value/(1±r/100).\n7. Ratio to percent: fraction ×100.\n8. Percent to fraction: divide by 100.\n9. Exam trap: base value changes after first percent.\n10. Quick 12.5%: 1/8."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Percentage",
            "part/whole ×100",
            "percentage"
          ],
          [
            "x% of y",
            "xy/100",
            "percentage"
          ],
          [
            "Successive change",
            "a+b+ab/100",
            "percentage"
          ],
          [
            "Increase by 20 then decrease by 20",
            "4% decrease",
            "percentage"
          ],
          [
            "Percentage points",
            "direct difference of percentages",
            "percentage"
          ],
          [
            "Original value",
            "new value/(1±r/100)",
            "percentage"
          ],
          [
            "Ratio to percent",
            "fraction ×100",
            "percentage"
          ],
          [
            "Percent to fraction",
            "divide by 100",
            "percentage"
          ],
          [
            "Exam trap",
            "base value changes after first percent",
            "percentage"
          ],
          [
            "Quick 12.5%",
            "1/8",
            "percentage"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Percentage",
        "answer": "part/whole ×100",
        "tag": "percentage",
        "explanation": "For exam memory, keep the fixed pair: Percentage — part/whole ×100. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "x% of y",
        "answer": "xy/100",
        "tag": "percentage",
        "explanation": "For exam memory, keep the fixed pair: x% of y — xy/100. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Successive change",
        "answer": "a+b+ab/100",
        "tag": "percentage",
        "explanation": "For exam memory, keep the fixed pair: Successive change — a+b+ab/100. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Increase by 20 then decrease by 20",
        "answer": "4% decrease",
        "tag": "percentage",
        "explanation": "For exam memory, keep the fixed pair: Increase by 20 then decrease by 20 — 4% decrease. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Percentage points",
        "answer": "direct difference of percentages",
        "tag": "percentage",
        "explanation": "For exam memory, keep the fixed pair: Percentage points — direct difference of percentages. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Original value",
        "answer": "new value/(1±r/100)",
        "tag": "percentage",
        "explanation": "For exam memory, keep the fixed pair: Original value — new value/(1±r/100). This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Ratio to percent",
        "answer": "fraction ×100",
        "tag": "percentage",
        "explanation": "For exam memory, keep the fixed pair: Ratio to percent — fraction ×100. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Percent to fraction",
        "answer": "divide by 100",
        "tag": "percentage",
        "explanation": "For exam memory, keep the fixed pair: Percent to fraction — divide by 100. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Exam trap",
        "answer": "base value changes after first percent",
        "tag": "percentage",
        "explanation": "For exam memory, keep the fixed pair: Exam trap — base value changes after first percent. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Quick 12.5%",
        "answer": "1/8",
        "tag": "percentage",
        "explanation": "For exam memory, keep the fixed pair: Quick 12.5% — 1/8. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "percentage",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "percentage is a core subtopic for Percentage and successive change. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "increase",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "increase is a core subtopic for Percentage and successive change. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "decrease",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "decrease is a core subtopic for Percentage and successive change. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "successive change",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "successive change is a core subtopic for Percentage and successive change. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "percentage point",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "percentage point is a core subtopic for Percentage and successive change. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "base value",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "base value is a core subtopic for Percentage and successive change. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "fraction-percent",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "fraction-percent is a core subtopic for Percentage and successive change. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "numeracy-ratio-proportion",
    "day": 42,
    "title": "Ratio, proportion, partnership and mixture basics",
    "bucket": "Basic Numeracy",
    "priority": "High",
    "why": "Ratio questions are quick marks if total parts and base are clear.",
    "concepts": [
      "ratio",
      "proportion",
      "partnership",
      "mixture",
      "direct proportion",
      "inverse proportion",
      "total parts"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Basic Numeracy and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Ratio questions are quick marks if total parts and base are clear.\n\nYour coverage for this topic must include: ratio, proportion, partnership, mixture, direct proportion, inverse proportion, total parts."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: ratio, proportion, partnership, mixture, direct proportion, inverse proportion, total parts."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Ratio: comparison by division.\n2. Proportion: two ratios equal.\n3. Partnership: profit divided by investment×time.\n4. Mixture allegation: weighted average idea.\n5. Direct proportion: both increase together.\n6. Inverse proportion: one increases, other decreases.\n7. Total parts: sum of ratio parts.\n8. Larger number: larger ratio part × one part value.\n9. Equivalent ratio: multiply/divide both terms.\n10. Compound ratio: multiply corresponding terms."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Ratio",
            "comparison by division",
            "ratio"
          ],
          [
            "Proportion",
            "two ratios equal",
            "ratio"
          ],
          [
            "Partnership",
            "profit divided by investment×time",
            "ratio"
          ],
          [
            "Mixture allegation",
            "weighted average idea",
            "ratio"
          ],
          [
            "Direct proportion",
            "both increase together",
            "ratio"
          ],
          [
            "Inverse proportion",
            "one increases, other decreases",
            "ratio"
          ],
          [
            "Total parts",
            "sum of ratio parts",
            "ratio"
          ],
          [
            "Larger number",
            "larger ratio part × one part value",
            "ratio"
          ],
          [
            "Equivalent ratio",
            "multiply/divide both terms",
            "ratio"
          ],
          [
            "Compound ratio",
            "multiply corresponding terms",
            "ratio"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Ratio",
        "answer": "comparison by division",
        "tag": "ratio",
        "explanation": "For exam memory, keep the fixed pair: Ratio — comparison by division. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Proportion",
        "answer": "two ratios equal",
        "tag": "ratio",
        "explanation": "For exam memory, keep the fixed pair: Proportion — two ratios equal. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Partnership",
        "answer": "profit divided by investment×time",
        "tag": "ratio",
        "explanation": "For exam memory, keep the fixed pair: Partnership — profit divided by investment×time. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mixture allegation",
        "answer": "weighted average idea",
        "tag": "ratio",
        "explanation": "For exam memory, keep the fixed pair: Mixture allegation — weighted average idea. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Direct proportion",
        "answer": "both increase together",
        "tag": "ratio",
        "explanation": "For exam memory, keep the fixed pair: Direct proportion — both increase together. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Inverse proportion",
        "answer": "one increases, other decreases",
        "tag": "ratio",
        "explanation": "For exam memory, keep the fixed pair: Inverse proportion — one increases, other decreases. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Total parts",
        "answer": "sum of ratio parts",
        "tag": "ratio",
        "explanation": "For exam memory, keep the fixed pair: Total parts — sum of ratio parts. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Larger number",
        "answer": "larger ratio part × one part value",
        "tag": "ratio",
        "explanation": "For exam memory, keep the fixed pair: Larger number — larger ratio part × one part value. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Equivalent ratio",
        "answer": "multiply/divide both terms",
        "tag": "ratio",
        "explanation": "For exam memory, keep the fixed pair: Equivalent ratio — multiply/divide both terms. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Compound ratio",
        "answer": "multiply corresponding terms",
        "tag": "ratio",
        "explanation": "For exam memory, keep the fixed pair: Compound ratio — multiply corresponding terms. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "ratio",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "ratio is a core subtopic for Ratio, proportion, partnership and mixture basics. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "proportion",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "proportion is a core subtopic for Ratio, proportion, partnership and mixture basics. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "partnership",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "partnership is a core subtopic for Ratio, proportion, partnership and mixture basics. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "mixture",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "mixture is a core subtopic for Ratio, proportion, partnership and mixture basics. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "direct proportion",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "direct proportion is a core subtopic for Ratio, proportion, partnership and mixture basics. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "inverse proportion",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "inverse proportion is a core subtopic for Ratio, proportion, partnership and mixture basics. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "total parts",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "total parts is a core subtopic for Ratio, proportion, partnership and mixture basics. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "numeracy-average",
    "day": 43,
    "title": "Average and weighted average",
    "bucket": "Basic Numeracy",
    "priority": "Very High",
    "why": "Average questions are common in PYQs and DI tables.",
    "concepts": [
      "average",
      "combined average",
      "removed number",
      "added number",
      "weighted average",
      "median",
      "mode"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Basic Numeracy and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Average questions are common in PYQs and DI tables.\n\nYour coverage for this topic must include: average, combined average, removed number, added number, weighted average, median, mode."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: average, combined average, removed number, added number, weighted average, median, mode."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Average: total / number.\n2. Total: average × number.\n3. Combined average: use total values, not average of averages.\n4. Removed number: old total - new total.\n5. Added number: new total - old total.\n6. Weighted average: value×weight / total weight.\n7. Speed average equal distance: 2xy/(x+y).\n8. Group average: convert to total first.\n9. Median: middle value.\n10. Mode: most frequent value."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Average",
            "total / number",
            "average"
          ],
          [
            "Total",
            "average × number",
            "average"
          ],
          [
            "Combined average",
            "use total values, not average of averages",
            "average"
          ],
          [
            "Removed number",
            "old total - new total",
            "average"
          ],
          [
            "Added number",
            "new total - old total",
            "average"
          ],
          [
            "Weighted average",
            "value×weight / total weight",
            "average"
          ],
          [
            "Speed average equal distance",
            "2xy/(x+y)",
            "average"
          ],
          [
            "Group average",
            "convert to total first",
            "average"
          ],
          [
            "Median",
            "middle value",
            "average"
          ],
          [
            "Mode",
            "most frequent value",
            "average"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Average",
        "answer": "total / number",
        "tag": "average",
        "explanation": "For exam memory, keep the fixed pair: Average — total / number. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Total",
        "answer": "average × number",
        "tag": "average",
        "explanation": "For exam memory, keep the fixed pair: Total — average × number. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Combined average",
        "answer": "use total values, not average of averages",
        "tag": "average",
        "explanation": "For exam memory, keep the fixed pair: Combined average — use total values, not average of averages. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Removed number",
        "answer": "old total - new total",
        "tag": "average",
        "explanation": "For exam memory, keep the fixed pair: Removed number — old total - new total. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Added number",
        "answer": "new total - old total",
        "tag": "average",
        "explanation": "For exam memory, keep the fixed pair: Added number — new total - old total. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Weighted average",
        "answer": "value×weight / total weight",
        "tag": "average",
        "explanation": "For exam memory, keep the fixed pair: Weighted average — value×weight / total weight. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Speed average equal distance",
        "answer": "2xy/(x+y)",
        "tag": "average",
        "explanation": "For exam memory, keep the fixed pair: Speed average equal distance — 2xy/(x+y). This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Group average",
        "answer": "convert to total first",
        "tag": "average",
        "explanation": "For exam memory, keep the fixed pair: Group average — convert to total first. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Median",
        "answer": "middle value",
        "tag": "average",
        "explanation": "For exam memory, keep the fixed pair: Median — middle value. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mode",
        "answer": "most frequent value",
        "tag": "average",
        "explanation": "For exam memory, keep the fixed pair: Mode — most frequent value. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "average",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "average is a core subtopic for Average and weighted average. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "combined average",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "combined average is a core subtopic for Average and weighted average. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "removed number",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "removed number is a core subtopic for Average and weighted average. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "added number",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "added number is a core subtopic for Average and weighted average. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "weighted average",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "weighted average is a core subtopic for Average and weighted average. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "median",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "median is a core subtopic for Average and weighted average. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "mode",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "mode is a core subtopic for Average and weighted average. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "numeracy-profit-loss-discount",
    "day": 44,
    "title": "Profit, loss and discount",
    "bucket": "Basic Numeracy",
    "priority": "High",
    "why": "Profit-loss uses fixed formulas and appears in basic arithmetic sections.",
    "concepts": [
      "CP",
      "SP",
      "profit",
      "loss",
      "marked price",
      "discount",
      "successive discount"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Basic Numeracy and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Profit-loss uses fixed formulas and appears in basic arithmetic sections.\n\nYour coverage for this topic must include: CP, SP, profit, loss, marked price, discount, successive discount."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: CP, SP, profit, loss, marked price, discount, successive discount."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Cost price: buying price.\n2. Selling price: selling amount.\n3. Profit: SP - CP.\n4. Loss: CP - SP.\n5. Profit %: profit/CP ×100.\n6. Loss %: loss/CP ×100.\n7. Marked price: tag price.\n8. Discount: reduction on marked price.\n9. Successive discount: same as successive percentage.\n10. Dishonest trade: weight/price trap."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Cost price",
            "buying price",
            "profit-loss"
          ],
          [
            "Selling price",
            "selling amount",
            "profit-loss"
          ],
          [
            "Profit",
            "SP - CP",
            "profit-loss"
          ],
          [
            "Loss",
            "CP - SP",
            "profit-loss"
          ],
          [
            "Profit %",
            "profit/CP ×100",
            "profit-loss"
          ],
          [
            "Loss %",
            "loss/CP ×100",
            "profit-loss"
          ],
          [
            "Marked price",
            "tag price",
            "profit-loss"
          ],
          [
            "Discount",
            "reduction on marked price",
            "profit-loss"
          ],
          [
            "Successive discount",
            "same as successive percentage",
            "profit-loss"
          ],
          [
            "Dishonest trade",
            "weight/price trap",
            "profit-loss"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Cost price",
        "answer": "buying price",
        "tag": "profit-loss",
        "explanation": "For exam memory, keep the fixed pair: Cost price — buying price. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Selling price",
        "answer": "selling amount",
        "tag": "profit-loss",
        "explanation": "For exam memory, keep the fixed pair: Selling price — selling amount. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Profit",
        "answer": "SP - CP",
        "tag": "profit-loss",
        "explanation": "For exam memory, keep the fixed pair: Profit — SP - CP. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Loss",
        "answer": "CP - SP",
        "tag": "profit-loss",
        "explanation": "For exam memory, keep the fixed pair: Loss — CP - SP. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Profit %",
        "answer": "profit/CP ×100",
        "tag": "profit-loss",
        "explanation": "For exam memory, keep the fixed pair: Profit % — profit/CP ×100. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Loss %",
        "answer": "loss/CP ×100",
        "tag": "profit-loss",
        "explanation": "For exam memory, keep the fixed pair: Loss % — loss/CP ×100. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Marked price",
        "answer": "tag price",
        "tag": "profit-loss",
        "explanation": "For exam memory, keep the fixed pair: Marked price — tag price. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Discount",
        "answer": "reduction on marked price",
        "tag": "profit-loss",
        "explanation": "For exam memory, keep the fixed pair: Discount — reduction on marked price. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Successive discount",
        "answer": "same as successive percentage",
        "tag": "profit-loss",
        "explanation": "For exam memory, keep the fixed pair: Successive discount — same as successive percentage. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Dishonest trade",
        "answer": "weight/price trap",
        "tag": "profit-loss",
        "explanation": "For exam memory, keep the fixed pair: Dishonest trade — weight/price trap. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "CP",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "CP is a core subtopic for Profit, loss and discount. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "SP",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "SP is a core subtopic for Profit, loss and discount. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "profit",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "profit is a core subtopic for Profit, loss and discount. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "loss",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "loss is a core subtopic for Profit, loss and discount. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "marked price",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "marked price is a core subtopic for Profit, loss and discount. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "discount",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "discount is a core subtopic for Profit, loss and discount. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "successive discount",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "successive discount is a core subtopic for Profit, loss and discount. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "numeracy-interest",
    "day": 45,
    "title": "Simple interest and compound interest",
    "bucket": "Basic Numeracy",
    "priority": "High",
    "why": "Interest questions are formula-based and scoring after practice.",
    "concepts": [
      "SI",
      "CI",
      "principal",
      "rate",
      "time",
      "amount",
      "compounding"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Basic Numeracy and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Interest questions are formula-based and scoring after practice.\n\nYour coverage for this topic must include: SI, CI, principal, rate, time, amount, compounding."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: SI, CI, principal, rate, time, amount, compounding."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Simple interest: PRT/100.\n2. Amount in SI: P + SI.\n3. Compound amount: P(1+r/100)^n.\n4. CI: compound amount - principal.\n5. Annual compounding: apply rate once per year.\n6. Half-yearly compounding: rate half, time double.\n7. Difference CI-SI for 2 years: P(r/100)^2.\n8. Principal: amount divided by growth factor.\n9. Rate: use formula carefully.\n10. Time: years unless specified."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Simple interest",
            "PRT/100",
            "interest"
          ],
          [
            "Amount in SI",
            "P + SI",
            "interest"
          ],
          [
            "Compound amount",
            "P(1+r/100)^n",
            "interest"
          ],
          [
            "CI",
            "compound amount - principal",
            "interest"
          ],
          [
            "Annual compounding",
            "apply rate once per year",
            "interest"
          ],
          [
            "Half-yearly compounding",
            "rate half, time double",
            "interest"
          ],
          [
            "Difference CI-SI for 2 years",
            "P(r/100)^2",
            "interest"
          ],
          [
            "Principal",
            "amount divided by growth factor",
            "interest"
          ],
          [
            "Rate",
            "use formula carefully",
            "interest"
          ],
          [
            "Time",
            "years unless specified",
            "interest"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Simple interest",
        "answer": "PRT/100",
        "tag": "interest",
        "explanation": "For exam memory, keep the fixed pair: Simple interest — PRT/100. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Amount in SI",
        "answer": "P + SI",
        "tag": "interest",
        "explanation": "For exam memory, keep the fixed pair: Amount in SI — P + SI. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Compound amount",
        "answer": "P(1+r/100)^n",
        "tag": "interest",
        "explanation": "For exam memory, keep the fixed pair: Compound amount — P(1+r/100)^n. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "CI",
        "answer": "compound amount - principal",
        "tag": "interest",
        "explanation": "For exam memory, keep the fixed pair: CI — compound amount - principal. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Annual compounding",
        "answer": "apply rate once per year",
        "tag": "interest",
        "explanation": "For exam memory, keep the fixed pair: Annual compounding — apply rate once per year. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Half-yearly compounding",
        "answer": "rate half, time double",
        "tag": "interest",
        "explanation": "For exam memory, keep the fixed pair: Half-yearly compounding — rate half, time double. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Difference CI-SI for 2 years",
        "answer": "P(r/100)^2",
        "tag": "interest",
        "explanation": "For exam memory, keep the fixed pair: Difference CI-SI for 2 years — P(r/100)^2. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Principal",
        "answer": "amount divided by growth factor",
        "tag": "interest",
        "explanation": "For exam memory, keep the fixed pair: Principal — amount divided by growth factor. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rate",
        "answer": "use formula carefully",
        "tag": "interest",
        "explanation": "For exam memory, keep the fixed pair: Rate — use formula carefully. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Time",
        "answer": "years unless specified",
        "tag": "interest",
        "explanation": "For exam memory, keep the fixed pair: Time — years unless specified. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "SI",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "SI is a core subtopic for Simple interest and compound interest. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "principal",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "principal is a core subtopic for Simple interest and compound interest. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "rate",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "rate is a core subtopic for Simple interest and compound interest. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "time",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "time is a core subtopic for Simple interest and compound interest. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "amount",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "amount is a core subtopic for Simple interest and compound interest. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "compounding",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "compounding is a core subtopic for Simple interest and compound interest. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "numeracy-time-work",
    "day": 46,
    "title": "Time and work, pipes and efficiency",
    "bucket": "Basic Numeracy",
    "priority": "High",
    "why": "Work questions are fast if solved by unit-rate or LCM method.",
    "concepts": [
      "time and work",
      "efficiency",
      "combined work",
      "pipes",
      "wages",
      "unit rate"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Basic Numeracy and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Work questions are fast if solved by unit-rate or LCM method.\n\nYour coverage for this topic must include: time and work, efficiency, combined work, pipes, wages, unit rate."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: time and work, efficiency, combined work, pipes, wages, unit rate."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Work: men × days.\n2. Efficiency: work per day.\n3. Combined work: add rates.\n4. A alone: 1/A work per day.\n5. Pipe filling: positive work.\n6. Leak/emptying: negative work.\n7. Time and work LCM method: take total work as LCM of days.\n8. Wages: divide by work done.\n9. More workers: less time.\n10. Efficiency ratio: inverse of time ratio."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Work",
            "men × days",
            "work"
          ],
          [
            "Efficiency",
            "work per day",
            "work"
          ],
          [
            "Combined work",
            "add rates",
            "work"
          ],
          [
            "A alone",
            "1/A work per day",
            "work"
          ],
          [
            "Pipe filling",
            "positive work",
            "work"
          ],
          [
            "Leak/emptying",
            "negative work",
            "work"
          ],
          [
            "Time and work LCM method",
            "take total work as LCM of days",
            "work"
          ],
          [
            "Wages",
            "divide by work done",
            "work"
          ],
          [
            "More workers",
            "less time",
            "work"
          ],
          [
            "Efficiency ratio",
            "inverse of time ratio",
            "work"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Work",
        "answer": "men × days",
        "tag": "work",
        "explanation": "For exam memory, keep the fixed pair: Work — men × days. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Efficiency",
        "answer": "work per day",
        "tag": "work",
        "explanation": "For exam memory, keep the fixed pair: Efficiency — work per day. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Combined work",
        "answer": "add rates",
        "tag": "work",
        "explanation": "For exam memory, keep the fixed pair: Combined work — add rates. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "A alone",
        "answer": "1/A work per day",
        "tag": "work",
        "explanation": "For exam memory, keep the fixed pair: A alone — 1/A work per day. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Pipe filling",
        "answer": "positive work",
        "tag": "work",
        "explanation": "For exam memory, keep the fixed pair: Pipe filling — positive work. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Leak/emptying",
        "answer": "negative work",
        "tag": "work",
        "explanation": "For exam memory, keep the fixed pair: Leak/emptying — negative work. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Time and work LCM method",
        "answer": "take total work as LCM of days",
        "tag": "work",
        "explanation": "For exam memory, keep the fixed pair: Time and work LCM method — take total work as LCM of days. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Wages",
        "answer": "divide by work done",
        "tag": "work",
        "explanation": "For exam memory, keep the fixed pair: Wages — divide by work done. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "More workers",
        "answer": "less time",
        "tag": "work",
        "explanation": "For exam memory, keep the fixed pair: More workers — less time. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Efficiency ratio",
        "answer": "inverse of time ratio",
        "tag": "work",
        "explanation": "For exam memory, keep the fixed pair: Efficiency ratio — inverse of time ratio. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "time and work",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "time and work is a core subtopic for Time and work, pipes and efficiency. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "efficiency",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "efficiency is a core subtopic for Time and work, pipes and efficiency. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "combined work",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "combined work is a core subtopic for Time and work, pipes and efficiency. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "pipes",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "pipes is a core subtopic for Time and work, pipes and efficiency. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "wages",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "wages is a core subtopic for Time and work, pipes and efficiency. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "unit rate",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "unit rate is a core subtopic for Time and work, pipes and efficiency. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "numeracy-speed-distance",
    "day": 47,
    "title": "Time, speed, distance, trains and boats",
    "bucket": "Basic Numeracy",
    "priority": "Very High",
    "why": "Speed questions were visible in PYQ style and are common in class-X numeracy.",
    "concepts": [
      "speed",
      "distance",
      "time",
      "average speed",
      "relative speed",
      "train",
      "boat and stream",
      "unit conversion"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Basic Numeracy and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: Speed questions were visible in PYQ style and are common in class-X numeracy.\n\nYour coverage for this topic must include: speed, distance, time, average speed, relative speed, train, boat and stream, unit conversion."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: speed, distance, time, average speed, relative speed, train, boat and stream, unit conversion."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Speed: distance/time.\n2. Distance: speed×time.\n3. Time: distance/speed.\n4. km/h to m/s: multiply by 5/18.\n5. m/s to km/h: multiply by 18/5.\n6. Average speed equal distance: 2xy/(x+y).\n7. Relative speed same direction: difference.\n8. Relative speed opposite direction: sum.\n9. Train length problem: distance = train length + platform length.\n10. Boat stream downstream: u+v."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Speed",
            "distance/time",
            "speed"
          ],
          [
            "Distance",
            "speed×time",
            "speed"
          ],
          [
            "Time",
            "distance/speed",
            "speed"
          ],
          [
            "km/h to m/s",
            "multiply by 5/18",
            "speed"
          ],
          [
            "m/s to km/h",
            "multiply by 18/5",
            "speed"
          ],
          [
            "Average speed equal distance",
            "2xy/(x+y)",
            "speed"
          ],
          [
            "Relative speed same direction",
            "difference",
            "speed"
          ],
          [
            "Relative speed opposite direction",
            "sum",
            "speed"
          ],
          [
            "Train length problem",
            "distance = train length + platform length",
            "speed"
          ],
          [
            "Boat stream downstream",
            "u+v",
            "speed"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Speed",
        "answer": "distance/time",
        "tag": "speed",
        "explanation": "For exam memory, keep the fixed pair: Speed — distance/time. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Distance",
        "answer": "speed×time",
        "tag": "speed",
        "explanation": "For exam memory, keep the fixed pair: Distance — speed×time. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Time",
        "answer": "distance/speed",
        "tag": "speed",
        "explanation": "For exam memory, keep the fixed pair: Time — distance/speed. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "km/h to m/s",
        "answer": "multiply by 5/18",
        "tag": "speed",
        "explanation": "For exam memory, keep the fixed pair: km/h to m/s — multiply by 5/18. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "m/s to km/h",
        "answer": "multiply by 18/5",
        "tag": "speed",
        "explanation": "For exam memory, keep the fixed pair: m/s to km/h — multiply by 18/5. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Average speed equal distance",
        "answer": "2xy/(x+y)",
        "tag": "speed",
        "explanation": "For exam memory, keep the fixed pair: Average speed equal distance — 2xy/(x+y). This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Relative speed same direction",
        "answer": "difference",
        "tag": "speed",
        "explanation": "For exam memory, keep the fixed pair: Relative speed same direction — difference. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Relative speed opposite direction",
        "answer": "sum",
        "tag": "speed",
        "explanation": "For exam memory, keep the fixed pair: Relative speed opposite direction — sum. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Train length problem",
        "answer": "distance = train length + platform length",
        "tag": "speed",
        "explanation": "For exam memory, keep the fixed pair: Train length problem — distance = train length + platform length. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Boat stream downstream",
        "answer": "u+v",
        "tag": "speed",
        "explanation": "For exam memory, keep the fixed pair: Boat stream downstream — u+v. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "speed",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "speed is a core subtopic for Time, speed, distance, trains and boats. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "distance",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "distance is a core subtopic for Time, speed, distance, trains and boats. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "time",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "time is a core subtopic for Time, speed, distance, trains and boats. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "average speed",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "average speed is a core subtopic for Time, speed, distance, trains and boats. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "relative speed",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "relative speed is a core subtopic for Time, speed, distance, trains and boats. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "train",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "train is a core subtopic for Time, speed, distance, trains and boats. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "boat and stream",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "boat and stream is a core subtopic for Time, speed, distance, trains and boats. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "unit conversion",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "unit conversion is a core subtopic for Time, speed, distance, trains and boats. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "numeracy-algebra-mensuration",
    "day": 48,
    "title": "Age, algebra, quadratic and mensuration",
    "bucket": "Basic Numeracy",
    "priority": "Very High",
    "why": "These are standard class-X level questions mentioned in the syllabus.",
    "concepts": [
      "age",
      "linear equation",
      "quadratic",
      "equal roots",
      "square",
      "rectangle",
      "circle",
      "cube",
      "cuboid",
      "mensuration"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Basic Numeracy and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: These are standard class-X level questions mentioned in the syllabus.\n\nYour coverage for this topic must include: age, linear equation, quadratic, equal roots, square, rectangle, circle, cube, cuboid, mensuration."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: age, linear equation, quadratic, equal roots, square, rectangle, circle, cube, cuboid, mensuration."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Age equation: translate sentence into equation.\n2. Father-son problem: usually linear equation.\n3. Present age: variable x.\n4. After n years: x+n.\n5. Before n years: x-n.\n6. Quadratic equal roots: b² - 4ac = 0.\n7. Linear equation: ax+b=c.\n8. Mensuration square area: side².\n9. Rectangle area: length×breadth.\n10. Circle area: πr².\n11. Cube volume: side³.\n12. Cuboid volume: lbh."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Age equation",
            "translate sentence into equation",
            "algebra-mensuration"
          ],
          [
            "Father-son problem",
            "usually linear equation",
            "algebra-mensuration"
          ],
          [
            "Present age",
            "variable x",
            "algebra-mensuration"
          ],
          [
            "After n years",
            "x+n",
            "algebra-mensuration"
          ],
          [
            "Before n years",
            "x-n",
            "algebra-mensuration"
          ],
          [
            "Quadratic equal roots",
            "b² - 4ac = 0",
            "algebra-mensuration"
          ],
          [
            "Linear equation",
            "ax+b=c",
            "algebra-mensuration"
          ],
          [
            "Mensuration square area",
            "side²",
            "algebra-mensuration"
          ],
          [
            "Rectangle area",
            "length×breadth",
            "algebra-mensuration"
          ],
          [
            "Circle area",
            "πr²",
            "algebra-mensuration"
          ],
          [
            "Cube volume",
            "side³",
            "algebra-mensuration"
          ],
          [
            "Cuboid volume",
            "lbh",
            "algebra-mensuration"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Age equation",
        "answer": "translate sentence into equation",
        "tag": "algebra-mensuration",
        "explanation": "For exam memory, keep the fixed pair: Age equation — translate sentence into equation. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Father-son problem",
        "answer": "usually linear equation",
        "tag": "algebra-mensuration",
        "explanation": "For exam memory, keep the fixed pair: Father-son problem — usually linear equation. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Present age",
        "answer": "variable x",
        "tag": "algebra-mensuration",
        "explanation": "For exam memory, keep the fixed pair: Present age — variable x. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "After n years",
        "answer": "x+n",
        "tag": "algebra-mensuration",
        "explanation": "For exam memory, keep the fixed pair: After n years — x+n. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Before n years",
        "answer": "x-n",
        "tag": "algebra-mensuration",
        "explanation": "For exam memory, keep the fixed pair: Before n years — x-n. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Quadratic equal roots",
        "answer": "b² - 4ac = 0",
        "tag": "algebra-mensuration",
        "explanation": "For exam memory, keep the fixed pair: Quadratic equal roots — b² - 4ac = 0. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Linear equation",
        "answer": "ax+b=c",
        "tag": "algebra-mensuration",
        "explanation": "For exam memory, keep the fixed pair: Linear equation — ax+b=c. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Mensuration square area",
        "answer": "side²",
        "tag": "algebra-mensuration",
        "explanation": "For exam memory, keep the fixed pair: Mensuration square area — side². This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rectangle area",
        "answer": "length×breadth",
        "tag": "algebra-mensuration",
        "explanation": "For exam memory, keep the fixed pair: Rectangle area — length×breadth. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Circle area",
        "answer": "πr²",
        "tag": "algebra-mensuration",
        "explanation": "For exam memory, keep the fixed pair: Circle area — πr². This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Cube volume",
        "answer": "side³",
        "tag": "algebra-mensuration",
        "explanation": "For exam memory, keep the fixed pair: Cube volume — side³. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Cuboid volume",
        "answer": "lbh",
        "tag": "algebra-mensuration",
        "explanation": "For exam memory, keep the fixed pair: Cuboid volume — lbh. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "age",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "age is a core subtopic for Age, algebra, quadratic and mensuration. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "linear equation",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "linear equation is a core subtopic for Age, algebra, quadratic and mensuration. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "quadratic",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "quadratic is a core subtopic for Age, algebra, quadratic and mensuration. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "equal roots",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "equal roots is a core subtopic for Age, algebra, quadratic and mensuration. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "square",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "square is a core subtopic for Age, algebra, quadratic and mensuration. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "rectangle",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "rectangle is a core subtopic for Age, algebra, quadratic and mensuration. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "circle",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "circle is a core subtopic for Age, algebra, quadratic and mensuration. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "cube",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "cube is a core subtopic for Age, algebra, quadratic and mensuration. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "cuboid",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "cuboid is a core subtopic for Age, algebra, quadratic and mensuration. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "mensuration",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "mensuration is a core subtopic for Age, algebra, quadratic and mensuration. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "di-tables-charts",
    "day": 49,
    "title": "Data Interpretation: tables, bar, line and pie charts",
    "bucket": "Data Interpretation",
    "priority": "Very High",
    "why": "DI is class-X level but requires accuracy under time pressure.",
    "concepts": [
      "table",
      "bar chart",
      "line graph",
      "pie chart",
      "central angle",
      "percentage growth",
      "ratio",
      "average",
      "approximation"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Data Interpretation and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: DI is class-X level but requires accuracy under time pressure.\n\nYour coverage for this topic must include: table, bar chart, line graph, pie chart, central angle, percentage growth, ratio, average, approximation."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: table, bar chart, line graph, pie chart, central angle, percentage growth, ratio, average, approximation."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Table DI: total, average, difference, percentage.\n2. Bar graph: compare heights/values.\n3. Line graph: trend across time.\n4. Pie chart: percentage share and central angle.\n5. Central angle: percentage × 3.6.\n6. Ratio from data: simplify selected values.\n7. Percentage growth: change/original ×100.\n8. Data sufficiency DI: check if data enough.\n9. Approximation: round only when options allow.\n10. Unit check: lakhs/thousands/percent."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Table DI",
            "total, average, difference, percentage",
            "di"
          ],
          [
            "Bar graph",
            "compare heights/values",
            "di"
          ],
          [
            "Line graph",
            "trend across time",
            "di"
          ],
          [
            "Pie chart",
            "percentage share and central angle",
            "di"
          ],
          [
            "Central angle",
            "percentage × 3.6",
            "di"
          ],
          [
            "Ratio from data",
            "simplify selected values",
            "di"
          ],
          [
            "Percentage growth",
            "change/original ×100",
            "di"
          ],
          [
            "Data sufficiency DI",
            "check if data enough",
            "di"
          ],
          [
            "Approximation",
            "round only when options allow",
            "di"
          ],
          [
            "Unit check",
            "lakhs/thousands/percent",
            "di"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Table DI",
        "answer": "total, average, difference, percentage",
        "tag": "di",
        "explanation": "For exam memory, keep the fixed pair: Table DI — total, average, difference, percentage. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bar graph",
        "answer": "compare heights/values",
        "tag": "di",
        "explanation": "For exam memory, keep the fixed pair: Bar graph — compare heights/values. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Line graph",
        "answer": "trend across time",
        "tag": "di",
        "explanation": "For exam memory, keep the fixed pair: Line graph — trend across time. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Pie chart",
        "answer": "percentage share and central angle",
        "tag": "di",
        "explanation": "For exam memory, keep the fixed pair: Pie chart — percentage share and central angle. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Central angle",
        "answer": "percentage × 3.6",
        "tag": "di",
        "explanation": "For exam memory, keep the fixed pair: Central angle — percentage × 3.6. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Ratio from data",
        "answer": "simplify selected values",
        "tag": "di",
        "explanation": "For exam memory, keep the fixed pair: Ratio from data — simplify selected values. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Percentage growth",
        "answer": "change/original ×100",
        "tag": "di",
        "explanation": "For exam memory, keep the fixed pair: Percentage growth — change/original ×100. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Data sufficiency DI",
        "answer": "check if data enough",
        "tag": "di",
        "explanation": "For exam memory, keep the fixed pair: Data sufficiency DI — check if data enough. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Approximation",
        "answer": "round only when options allow",
        "tag": "di",
        "explanation": "For exam memory, keep the fixed pair: Approximation — round only when options allow. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Unit check",
        "answer": "lakhs/thousands/percent",
        "tag": "di",
        "explanation": "For exam memory, keep the fixed pair: Unit check — lakhs/thousands/percent. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "table",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "table is a core subtopic for Data Interpretation: tables, bar, line and pie charts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "bar chart",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "bar chart is a core subtopic for Data Interpretation: tables, bar, line and pie charts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "line graph",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "line graph is a core subtopic for Data Interpretation: tables, bar, line and pie charts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "pie chart",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "pie chart is a core subtopic for Data Interpretation: tables, bar, line and pie charts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "central angle",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "central angle is a core subtopic for Data Interpretation: tables, bar, line and pie charts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "percentage growth",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "percentage growth is a core subtopic for Data Interpretation: tables, bar, line and pie charts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "ratio",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "ratio is a core subtopic for Data Interpretation: tables, bar, line and pie charts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "average",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "average is a core subtopic for Data Interpretation: tables, bar, line and pie charts. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "approximation",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "approximation is a core subtopic for Data Interpretation: tables, bar, line and pie charts. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  },
  {
    "id": "final-paper1-master-revision",
    "day": 50,
    "title": "Final Paper 1 master revision and exam strategy",
    "bucket": "Paper 1 Strategy",
    "priority": "Very High",
    "why": "The last stage converts knowledge into score by controlling mistakes, time and negative marking.",
    "concepts": [
      "revision cycle",
      "negative marking",
      "wrong notebook",
      "bookmark",
      "mock strategy",
      "accuracy",
      "time management"
    ],
    "notes": [
      {
        "heading": "Exam map",
        "body": "This topic belongs to Paper 1 Strategy and should be studied exactly in the way RSSB-style papers ask it: direct fact, correct pair, incorrect pair, chronology, statement-code, or simple application. Do not read it like a story. First create a one-line memory table, then practise 100 MCQs from the same topic at night.\n\nPriority reason: The last stage converts knowledge into score by controlling mistakes, time and negative marking.\n\nYour coverage for this topic must include: revision cycle, negative marking, wrong notebook, bookmark, mock strategy, accuracy, time management."
      },
      {
        "heading": "Core theory from zero",
        "body": "Start from the basic meaning of the topic, then connect every term with its district, region, person, year, formula, process, or exam keyword. A rank-level preparation means you should be able to answer three versions of every fact: direct question, reverse question, and not-correct pair.\n\nFor example, if you learn a site or scheme, do not stop at the name. Learn: location, associated tag, why it is important, and the common trap. If you learn a formula, learn when it applies and when it does not. If you learn reasoning, write the solving steps, not only the answer.\n\nHigh-value concepts in this lesson: revision cycle, negative marking, wrong notebook, bookmark, mock strategy, accuracy, time management."
      },
      {
        "heading": "Must memorise bank",
        "body": "1. Final revision cycle: notes → MCQ → wrong questions → tables → mock.\n2. Negative marking rule: skip uncertain questions.\n3. First pass: attempt sure questions.\n4. Second pass: calculations and medium questions.\n5. Third pass: only high-confidence remaining.\n6. Wrong notebook: reason: concept/memory/calculation/time/guess.\n7. Bookmark: unknown but important concept.\n8. Daily target: 100 MCQs at night.\n9. Accuracy target: 80% topic-wise before mixed mock.\n10. Rank mindset: specific facts + repeated revision + error control."
      },
      {
        "heading": "How PYQ setters twist this topic",
        "body": "The same concept is usually twisted in five ways: (1) option pair is reversed, (2) a nearby district or similar ruler is used, (3) a true statement is mixed with one false statement, (4) chronology is tested instead of the event name, and (5) a simple formula is hidden inside a word problem. Whenever you revise, ask yourself: what wrong option would the examiner use? That habit saves marks in negative marking."
      },
      {
        "heading": "Rank-1 revision sheet",
        "body": "Morning reading: read the theory once and mark unknown facts. Office/lunch revision: revise only the table. Night practice: solve 100 topic MCQs in learning mode, bookmark every unknown question, and write a one-line mistake note. Next morning: revise only bookmarked and wrong questions.\n\nMinimum mastery target before moving on: 80% in topic-wise MCQ, zero confusion in top pairs, and ability to explain the topic in 5 minutes without opening notes."
      }
    ],
    "tables": [
      {
        "title": "High-probability memory table",
        "headers": [
          "Item",
          "Remember",
          "Exam use"
        ],
        "rows": [
          [
            "Final revision cycle",
            "notes → MCQ → wrong questions → tables → mock",
            "strategy"
          ],
          [
            "Negative marking rule",
            "skip uncertain questions",
            "strategy"
          ],
          [
            "First pass",
            "attempt sure questions",
            "strategy"
          ],
          [
            "Second pass",
            "calculations and medium questions",
            "strategy"
          ],
          [
            "Third pass",
            "only high-confidence remaining",
            "strategy"
          ],
          [
            "Wrong notebook",
            "reason: concept/memory/calculation/time/guess",
            "strategy"
          ],
          [
            "Bookmark",
            "unknown but important concept",
            "strategy"
          ],
          [
            "Daily target",
            "100 MCQs at night",
            "strategy"
          ],
          [
            "Accuracy target",
            "80% topic-wise before mixed mock",
            "strategy"
          ],
          [
            "Rank mindset",
            "specific facts + repeated revision + error control",
            "strategy"
          ]
        ]
      }
    ],
    "mistakes": [
      "Reading long theory without converting it into one-line exam pairs.",
      "Ignoring reverse questions and not-correct pair questions.",
      "Guessing between two similar options instead of using a fixed memory tag.",
      "Not revising the same topic next morning."
    ],
    "tips": [
      "Write every topic as a table: item, location/person/formula, trap.",
      "Practise the same topic the same night; do not wait for weekend.",
      "Use learning mode first, exam mode only after 70% accuracy.",
      "Do not attempt doubtful questions randomly because of 1/3 negative marking."
    ],
    "facts": [
      {
        "key": "Final revision cycle",
        "answer": "notes → MCQ → wrong questions → tables → mock",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: Final revision cycle — notes → MCQ → wrong questions → tables → mock. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Negative marking rule",
        "answer": "skip uncertain questions",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: Negative marking rule — skip uncertain questions. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "First pass",
        "answer": "attempt sure questions",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: First pass — attempt sure questions. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Second pass",
        "answer": "calculations and medium questions",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: Second pass — calculations and medium questions. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Third pass",
        "answer": "only high-confidence remaining",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: Third pass — only high-confidence remaining. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Wrong notebook",
        "answer": "reason: concept/memory/calculation/time/guess",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: Wrong notebook — reason: concept/memory/calculation/time/guess. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Bookmark",
        "answer": "unknown but important concept",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: Bookmark — unknown but important concept. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Daily target",
        "answer": "100 MCQs at night",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: Daily target — 100 MCQs at night. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Accuracy target",
        "answer": "80% topic-wise before mixed mock",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: Accuracy target — 80% topic-wise before mixed mock. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "Rank mindset",
        "answer": "specific facts + repeated revision + error control",
        "tag": "strategy",
        "explanation": "For exam memory, keep the fixed pair: Rank mindset — specific facts + repeated revision + error control. This is useful for direct, match-the-following and incorrect-pair questions."
      },
      {
        "key": "revision cycle",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "revision cycle is a core subtopic for Final Paper 1 master revision and exam strategy. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "negative marking",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "negative marking is a core subtopic for Final Paper 1 master revision and exam strategy. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "wrong notebook",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "wrong notebook is a core subtopic for Final Paper 1 master revision and exam strategy. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "bookmark",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "bookmark is a core subtopic for Final Paper 1 master revision and exam strategy. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "mock strategy",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "mock strategy is a core subtopic for Final Paper 1 master revision and exam strategy. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "accuracy",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "accuracy is a core subtopic for Final Paper 1 master revision and exam strategy. Prepare definition, one-line fact, and one PYQ-style example."
      },
      {
        "key": "time management",
        "answer": "core concept",
        "tag": "concept",
        "explanation": "time management is a core subtopic for Final Paper 1 master revision and exam strategy. Prepare definition, one-line fact, and one PYQ-style example."
      }
    ],
    "pyqPatterns": [
      "Direct one-line fact question.",
      "Incorrectly matched pair.",
      "Statement I/II/III with code.",
      "Match List-I and List-II.",
      "Application or small calculation based on a formula/table."
    ]
  }
];

const LETTERS = ["A", "B", "C", "D"] as const;
const genericDistractors = [
  "Jaipur", "Udaipur", "Bikaner", "Jodhpur", "Ajmer", "Bharatpur", "Kota", "Pratapgarh",
  "Harappan", "Chalcolithic", "Copper culture", "Mesolithic", "Mewar", "Marwar", "Hadoti", "Shekhawati",
  "Percentage", "Average", "LCM", "HCF", "Carbon dioxide", "Adrenaline", "Phishing", "DigiLocker",
  "Ranthambore", "Sambhar", "Khetri", "Kalibanga", "Digital India", "Firewall"
];

function uniqueOptions(correct: string, pool: string[]) {
  const clean = Array.from(new Set([correct, ...pool, ...genericDistractors].filter(Boolean).map(String))).filter((x) => x !== correct);
  const options = [correct, ...clean.slice(0, 3)];
  while (options.length < 4) options.push(`None of these ${options.length}`);
  return { A: options[0], B: options[1], C: options[2], D: options[3] };
}

function rotateAnswer(options: Record<string, string>, correct: string, seed: number) {
  const values = Object.values(options);
  const correctIndex = values.indexOf(correct);
  const target = seed % 4;
  if (correctIndex >= 0 && correctIndex !== target) {
    const temp = values[target];
    values[target] = correct;
    values[correctIndex] = temp;
  }
  const mapped = { A: values[0], B: values[1], C: values[2], D: values[3] };
  const answer = LETTERS[Object.values(mapped).indexOf(correct)] || "A";
  return { options: mapped, answer };
}

export function getLearningTopic(topicId?: string) {
  return paper1LearningTopics.find((topic) => topic.id === topicId) || paper1LearningTopics[0];
}

export function getTopicQuestionJson(topicId: string) {
  const topic = getLearningTopic(topicId);
  const facts = topic.facts.length ? topic.facts : topic.concepts.map((concept) => ({ key: concept, answer: topic.bucket, tag: "concept", explanation: topic.why }));
  const answerPool = Array.from(new Set(facts.map((fact) => fact.answer).concat(topic.concepts).concat(topic.facts.map((fact) => fact.key)).concat(genericDistractors)));
  const templates = [
    (f: LearningFact) => `In ${topic.title}, ${f.key} is most closely associated with which option?`,
    (f: LearningFact) => `For Basic Computer Instructor Paper 1, what should you remember about ${f.key}?`,
    (f: LearningFact) => `Which is the correct match for ${f.key}?`,
    (f: LearningFact) => `A PYQ-style question asks the key tag of ${f.key}. Choose the best answer.`,
    (f: LearningFact) => `Which answer correctly completes this pair: ${f.key} — ?`,
    (f: LearningFact) => `In a not-correct-pair question, the correct association of ${f.key} is:`,
    (f: LearningFact) => `What is the exam-use memory point for ${f.key}?`,
    (f: LearningFact) => `Choose the most accurate Paper 1 fact about ${f.key}.`
  ];
  const questions: LearningQuestion[] = [];
  const seen = new Set<string>();
  for (let i = 0; questions.length < 100 && i < 1000; i++) {
    const fact = facts[i % facts.length];
    const template = templates[i % templates.length];
    const qText = `${questions.length + 1}. ${template(fact)}`;
    if (seen.has(qText)) continue;
    seen.add(qText);
    const raw = uniqueOptions(fact.answer, answerPool.slice(i % Math.max(1, answerPool.length)).concat(answerPool));
    const rotated = rotateAnswer(raw, fact.answer, i + topic.day);
    questions.push({
      question: qText,
      options: rotated.options,
      answer: rotated.answer,
      explanation: fact.explanation || `The correct association is ${fact.key} — ${fact.answer}.`,
      subject: topic.bucket,
      chapter: topic.title,
      topic: fact.tag,
      difficulty: questions.length < 40 ? "easy" : questions.length < 80 ? "medium" : "hard",
      importance: "high",
      sourceHint: "Official Paper 1 syllabus + uploaded BCI 2022 PYQ trend + consolidated Rajasthan exam notes"
    });
  }
  return {
    exam_name: "Rajasthan Basic Computer Instructor",
    paper: "paper1",
    mode: "topic",
    title: `${topic.title} - 100 Topic Questions`,
    date: new Date().toISOString().slice(0, 10),
    durationMinutes: 120,
    totalQuestions: 100,
    totalMarks: 100,
    negativeMarking: "1/3",
    tags: ["paper1", "topic-wise", topic.id, topic.bucket],
    questions
  };
}
