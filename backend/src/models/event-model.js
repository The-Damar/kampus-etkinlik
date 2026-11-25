import mongoose from "mongoose";
import { formatDate, parseDate } from "../utils/date.js";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      trim: true,
      enum: ["Konferans", "Atölye", "Söyleşi", "Yarışma", "Seminer", "Kulüp"],
    },
    date: {
      type: Date,
      required: true,
      set: parseDate,
      get: formatDate,
    },
    time: { type: String, trim: true },
    location: { type: String, trim: true },
    capacity: { type: Number, min: 1 },
    description: { type: String, trim: true },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    id: false,
  }
);

export const Event = mongoose.model("Event", eventSchema);