import mongoose from "mongoose";

const { Schema } = mongoose;
const freindSchema = new Schema({
  score: {
    type: Number,
    require: true,
    default: 50,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
    required: true,
  }
});

export default mongoose.model("Freind", freindSchema);