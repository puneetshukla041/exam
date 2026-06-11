import { Schema, models, model, type InferSchemaType } from "mongoose";

const UsedQuestionSchema = new Schema(
  {
    questionHash: { type: String, required: true, unique: true, index: true },
    optionHash: { type: String, required: true, index: true },
    question: { type: String, required: true },
    testId: { type: Schema.Types.ObjectId, ref: "Test" },
    paper: { type: String, enum: ["paper1", "paper2"], index: true },
    topic: { type: String, index: true },
  },
  { timestamps: true }
);

export type UsedQuestionDoc = InferSchemaType<typeof UsedQuestionSchema>;
export const UsedQuestionModel = models.UsedQuestion || model("UsedQuestion", UsedQuestionSchema);
