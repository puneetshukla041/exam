export type PaperType = "paper1" | "paper2";
export type TestMode = "daily" | "mock" | "topic" | "weak" | "random";
export type Difficulty = "easy" | "medium" | "hard";
export type Importance = "low" | "medium" | "high";
export type OptionKey = "A" | "B" | "C" | "D";
export type AttemptStatus = "in-progress" | "submitted";

export interface QuestionInput {
  question: string;
  options: Record<OptionKey, string>;
  answer: OptionKey;
  explanation: string;
  subject: string;
  chapter: string;
  topic: string;
  subtopic?: string;
  difficulty: Difficulty;
  importance: Importance;
  sourceHint?: string;
}

export interface TestUploadInput {
  title: string;
  examName?: string;
  paperName?: string;
  description?: string;
  paper: PaperType;
  date?: string;
  durationMinutes?: number;
  mode?: TestMode;
  category?: string;
  subject?: string;
  totalMarks?: number;
  negativeMarking?: string;
  tags?: string[];
  questions: QuestionInput[];
}

export interface QuestionView extends QuestionInput {
  _id: string;
  testId: string;
  questionHash: string;
  optionHash: string;
  order: number;
}

export interface AnswerState {
  questionId: string;
  selectedOption?: OptionKey;
  correctOption: OptionKey;
  isCorrect?: boolean;
  isSkipped?: boolean;
  isBookmarked?: boolean;
  timeSpentSeconds: number;
}
