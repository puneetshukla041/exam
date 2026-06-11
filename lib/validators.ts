import { z } from "zod";

export const optionKeySchema = z.enum(["A", "B", "C", "D"]);
export const paperSchema = z.enum(["paper1", "paper2"]);
export const modeSchema = z.enum(["daily", "mock", "topic", "weak", "random"]);
export const difficultySchema = z.enum(["easy", "medium", "hard"]);
export const importanceSchema = z.enum(["low", "medium", "high"]);

export const questionInputSchema = z.object({
  question: z.string().min(4, "Question is too short"),
  options: z.object({
    A: z.string().min(1, "Option A is required"),
    B: z.string().min(1, "Option B is required"),
    C: z.string().min(1, "Option C is required"),
    D: z.string().min(1, "Option D is required"),
  }),
  answer: optionKeySchema,
  explanation: z.string().min(1, "Explanation is required"),
  subject: z.string().min(1, "Subject is required"),
  chapter: z.string().min(1, "Chapter is required"),
  topic: z.string().min(1, "Topic is required"),
  subtopic: z.string().optional().default(""),
  difficulty: difficultySchema,
  importance: importanceSchema,
  sourceHint: z.string().optional().default(""),
});

export const uploadTestSchema = z.object({
  title: z.string().min(3, "Title is required"),
  examName: z.string().optional().default("Rajasthan Computer Instructor"),
  paperName: z.string().optional().default(""),
  description: z.string().optional().default(""),
  paper: paperSchema,
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD").optional(),
  durationMinutes: z.number().min(5).max(300).optional().default(120),
  mode: modeSchema.optional().default("daily"),
  category: z.string().optional().default(""),
  subject: z.string().optional().default(""),
  totalMarks: z.number().min(1).max(1000).optional().default(100),
  negativeMarking: z.string().optional().default("1/3"),
  tags: z.array(z.string()).optional().default([]),
  questions: z.array(questionInputSchema).min(1, "At least one question is required").max(1000, "Maximum 1000 questions allowed in one JSON paste"),
});

export const updateTestSchema = z.object({
  title: z.string().min(3).optional(),
  examName: z.string().optional(),
  paperName: z.string().optional(),
  description: z.string().optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  durationMinutes: z.number().min(5).max(300).optional(),
  category: z.string().optional(),
  subject: z.string().optional(),
  totalMarks: z.number().min(1).max(1000).optional(),
  negativeMarking: z.string().optional(),
  tags: z.array(z.string()).optional(),
  isPublished: z.boolean().optional(),
});

export const startAttemptSchema = z.object({
  testId: z.string().min(1),
  mode: modeSchema.optional().default("daily"),
});

export const answerSchema = z.object({
  questionId: z.string().min(1),
  selectedOption: optionKeySchema.optional(),
  isSkipped: z.boolean().optional().default(false),
  isBookmarked: z.boolean().optional(),
  timeSpentSeconds: z.number().min(0).max(3600).optional().default(0),
});

export const practiceBuildSchema = z.object({
  mode: z.enum(["topic", "weak", "random"]),
  paper: paperSchema.optional(),
  subject: z.string().optional(),
  topic: z.string().optional(),
  difficulty: difficultySchema.optional(),
  limit: z.number().min(5).max(100).default(25),
});
