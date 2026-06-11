import { Schema, models, model, type InferSchemaType } from "mongoose";

const CoverageSchema = new Schema(
  {
    subject: { type: String, required: true, index: true },
    chapter: { type: String, required: true },
    topic: { type: String, required: true, index: true },
    count: { type: Number, default: 0 },
  },
  { _id: false }
);

const TestSchema = new Schema(
  {
    title: { type: String, required: true, trim: true, index: true },
    examName: { type: String, default: "Rajasthan Computer Instructor", index: true },
    paperName: { type: String, default: "", index: true },
    description: { type: String, default: "" },
    paper: { type: String, enum: ["paper1", "paper2"], required: true, index: true },
    mode: { type: String, enum: ["daily", "mock", "topic", "weak", "random"], default: "daily", index: true },
    category: { type: String, default: "", index: true },
    subject: { type: String, default: "", index: true },
    date: { type: String, index: true },
    dayKey: { type: String, index: true },
    dayNumber: { type: Number, index: true },
    durationMinutes: { type: Number, default: 120 },
    totalMarks: { type: Number, default: 100 },
    negativeMarking: { type: String, default: "1/3" },
    questionCount: { type: Number, default: 0, index: true },
    fingerprint: { type: String, required: true, unique: true, index: true },
    tags: [{ type: String, index: true }],
    topicCoverage: [CoverageSchema],
    difficultyCoverage: {
      easy: { type: Number, default: 0 },
      medium: { type: Number, default: 0 },
      hard: { type: Number, default: 0 },
    },
    isPublished: { type: Boolean, default: true, index: true },
    createdBy: { type: String, default: "default-user", index: true },
  },
  { timestamps: true }
);

TestSchema.index({ title: "text", description: "text", tags: "text", subject: "text", category: "text" });
TestSchema.index({ paper: 1, mode: 1, date: -1 });
TestSchema.index({ subject: 1, date: -1 });

export type TestDoc = InferSchemaType<typeof TestSchema>;
export const TestModel = models.Test || model("Test", TestSchema);
