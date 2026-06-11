import { Schema, models, model, type InferSchemaType } from "mongoose";

const UserStatsSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true, index: true },
    totalTestsAttempted: { type: Number, default: 0 },
    totalQuestionsSolved: { type: Number, default: 0 },
    correct: { type: Number, default: 0 },
    wrong: { type: Number, default: 0 },
    accuracy: { type: Number, default: 0 },
    totalTimeSeconds: { type: Number, default: 0 },
    dailyStreak: { type: Number, default: 0 },
    bestStreak: { type: Number, default: 0 },
    lastStudyDate: { type: String },
    readinessScore: { type: Number, default: 0 },
    rankPrediction: { type: String, default: "Insufficient data" },
  },
  { timestamps: true }
);

export type UserStatsDoc = InferSchemaType<typeof UserStatsSchema>;
export const UserStatsModel = models.UserStats || model("UserStats", UserStatsSchema);
