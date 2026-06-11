import { Schema, models, model, type InferSchemaType } from "mongoose";

const AnalyticsSchema = new Schema(
  {
    userId: { type: String, required: true, index: true },
    scope: { type: String, enum: ["overall", "paper", "topic", "difficulty", "daily", "weekly", "monthly"], required: true, index: true },
    key: { type: String, required: true, index: true },
    paper: { type: String, enum: ["paper1", "paper2"] },
    subject: { type: String },
    chapter: { type: String },
    topic: { type: String },
    difficulty: { type: String, enum: ["easy", "medium", "hard"] },
    attempted: { type: Number, default: 0 },
    correct: { type: Number, default: 0 },
    wrong: { type: Number, default: 0 },
    skipped: { type: Number, default: 0 },
    bookmarked: { type: Number, default: 0 },
    accuracy: { type: Number, default: 0 },
    mastery: { type: Number, default: 0 },
    totalTimeSeconds: { type: Number, default: 0 },
    averageTimeSeconds: { type: Number, default: 0 },
  },
  { timestamps: true }
);

AnalyticsSchema.index({ userId: 1, scope: 1, key: 1 }, { unique: true });

export type AnalyticsDoc = InferSchemaType<typeof AnalyticsSchema>;
export const AnalyticsModel = models.Analytics || model("Analytics", AnalyticsSchema);
