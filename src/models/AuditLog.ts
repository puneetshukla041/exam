import { Schema, models, model, type InferSchemaType } from "mongoose";

const AuditLogSchema = new Schema(
  {
    userId: { type: String, default: "default-user", index: true },
    action: { type: String, required: true, index: true },
    entity: { type: String, required: true, index: true },
    entityId: { type: String, default: "" },
    details: { type: Schema.Types.Mixed },
    ip: { type: String, default: "" },
  },
  { timestamps: true }
);

export type AuditLogDoc = InferSchemaType<typeof AuditLogSchema>;
export const AuditLogModel = models.AuditLog || model("AuditLog", AuditLogSchema);
