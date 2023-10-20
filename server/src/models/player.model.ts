import mongoose, { Schema, Document } from "mongoose";

export interface IPlayer extends Document {
  name: string;
  email: string;
  // Ajoutez d'autres champs selon vos besoins
}

const PlayerSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Ajoutez d'autres champs selon vos besoins
});

export default mongoose.model<IPlayer>("Player", PlayerSchema);
