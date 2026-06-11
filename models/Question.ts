import { Schema, models, model, type InferSchemaType } from "mongoose";

const QuestionSchema = new Schema(
  {
    testId: { type: Schema.Types.ObjectId, ref: "Test", required: true, index: true },
    order: { type: Number, required: true },
    question: { type: String, required: true, trim: true },
    questionHash: { type: String, required: true, index: true },
    optionHash: { type: String, required: true, index: true },
    options: {
      A: { type: String, required: true },
      B: { type: String, required: true },
      C: { type: String, required: true },
      D: { type: String, required: true },
    },
    answer: { type: String, enum: ["A", "B", "C", "D"], required: true },
    explanation: { type: String, required: true },
    subject: { type: String, required: true, index: true },
    chapter: { type: String, required: true, index: true },
    topic: { type: String, required: true, index: true },
    subtopic: { type: String, default: "", index: true },
    difficulty: { type: String, enum: ["easy", "medium", "hard"], required: true, index: true },
    importance: { type: String, enum: ["low", "medium", "high"], required: true, index: true },
    sourceHint: { type: String, default: "" },
  },
  { timestamps: true }
);

QuestionSchema.index({ testId: 1, order: 1 }, { unique: true });
QuestionSchema.index({ question: "text", subject: "text", chapter: "text", topic: "text" });

export type QuestionDoc = InferSchemaType<typeof QuestionSchema>;
export const QuestionModel = models.Question || model("Question", QuestionSchema);
