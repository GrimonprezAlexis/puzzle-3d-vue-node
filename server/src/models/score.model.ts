import mongoose, { Schema, Document } from "mongoose";

// Define the interface for the Score document
export interface IScore extends Document {
  name: string;
  points: number;
}

// Define the Score schema
const ScoreSchema: Schema = new Schema({
  name: { type: String, required: true },
  points: { type: Number, required: true },
});

// Create and export the Score model
export default mongoose.model<IScore>("Score", ScoreSchema);
