import mongoose from "mongoose";

const { Schema } = mongoose;
const userStatusSchema = new Schema({
    state: {
        type: Boolean,
        require: true,
        default: false
    },
    updateTime: {
        type: Date,
        require: true,
        default: Date.now()
    }
})

export default mongoose.model("UserStatus", userStatusSchema)