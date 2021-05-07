import mongoose from "mongoose";

const { Schema } = mongoose;
const photoTagSchema = new Schema({
    position: {
        type: String,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
})

export default mongoose.model("PhotoTag", photoTagSchema)