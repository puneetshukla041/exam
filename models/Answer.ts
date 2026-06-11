import { Schema, models, model, type InferSchemaType } from "mongoose";

const AnswerSchema = new Schema(
  {
    userId: { type: String, required: true, index: true },
    attemptId: { type: Schema.Types.ObjectId, ref: "Attempt", required: true, index: true },
    testId: { type: Schema.Types.ObjectId, ref: "Test", required: true, index: true },
    questionId: { type: Schema.Types.ObjectId, ref: "Question", required: true, index: true },
    questionOrder: { type: Number, required: true },
    selectedOption: { type: String, enum: ["A", "B", "C", "D"] },
    correctOption: { type: String, enum: ["A", "B", "C", "D"], required: true },
    isCorrect: { type: Boolean, default: false, index: true },
    isSkipped: { type: Boolean, default: false, index: true },
    isBookmarked: { type: Boolean, default: false, index: true },
    timeSpentSeconds: { type: Number, default: 0 },
    subject: { type: String, index: true },
    chapter: { type: String, index: true },
    topic: { type: String, index: true },
    subtopic: { type: String, index: true },
    difficulty: { type: String, enum: ["easy", "medium", "hard"], index: true },
  },
  { timestamps: true }
);

AnswerSchema.index({ userId: 1, attemptId: 1, questionId: 1 }, { unique: true });

export type AnswerDoc = InferSchemaType<typeof AnswerSchema>;
export const AnswerModel = models.Answer || model("Answer", AnswerSchema);
