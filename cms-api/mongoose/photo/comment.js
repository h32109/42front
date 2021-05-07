import mongoose from "mongoose";

const { Schema } = mongoose;
const commentSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "Profile",
        require: true
    },
    comment: {
        type: String,
        require: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: "Like"
    }]
})

export default mongoose.model("Comment", commentSchema)