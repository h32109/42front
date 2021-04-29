import mongoose from "mongoose";

const { Schema } = mongoose;
const likeSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "Profile",
        require: true
    }
})

export default mongoose.model("Like", likeSchema)