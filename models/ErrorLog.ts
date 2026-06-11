import { Schema, models, model, type InferSchemaType } from "mongoose";

const ErrorLogSchema = new Schema(
  {
    where: { type: String, required: true, index: true },
    message: { type: String, required: true },
    stack: { type: String },
    metadata: { type: Schema.Types.Mixed },
  },
  { timestamps: true }
);

export type ErrorLogDoc = InferSchemaType<typeof ErrorLogSchema>;
export const ErrorLogModel = models.ErrorLog || model("ErrorLog", ErrorLogSchema);
