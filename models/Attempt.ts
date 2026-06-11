import { Schema, models, model, type InferSchemaType } from "mongoose";

const AttemptSchema = new Schema(
  {
    userId: { type: String, required: true, index: true },
    testId: { type: Schema.Types.ObjectId, ref: "Test", required: true, index: true },
    testTitle: { type: String, default: "" },
    paper: { type: String, enum: ["paper1", "paper2"], required: true, index: true },
    mode: { type: String, enum: ["daily", "mock", "topic", "weak", "random"], default: "daily", index: true },
    status: { type: String, enum: ["in-progress", "submitted"], default: "in-progress", index: true },
    startedAt: { type: Date, default: Date.now, index: true },
    submittedAt: { type: Date },
    lastActivityAt: { type: Date, default: Date.now },
    durationMinutes: { type: Number, default: 120 },
    elapsedSeconds: { type: Number, default: 0 },
    totalQuestions: { type: Number, default: 0 },
    attempted: { type: Number, default: 0 },
    skipped: { type: Number, default: 0 },
    bookmarked: { type: Number, default: 0 },
    correct: { type: Number, default: 0 },
    wrong: { type: Number, default: 0 },
    accuracy: { type: Number, default: 0 },
    score: { type: Number, default: 0 },
    readinessImpact: { type: Number, default: 0 },
  },
  { timestamps: true }
);

AttemptSchema.index({ userId: 1, testId: 1, status: 1 });

export type AttemptDoc = InferSchemaType<typeof AttemptSchema>;
export const AttemptModel = models.Attempt || model("Attempt", AttemptSchema);
