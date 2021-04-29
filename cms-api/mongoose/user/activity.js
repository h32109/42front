import mongoose from "mongoose";

const { Schema } = mongoose;
const activitySchema = new Schema({
    date: {
        type: Date,
        require: true,
    },
    activity_id: {
        type: Schema.Types.ObjectId,
        require: true,
        unique: true
    },
    activity: {
        type: String,
        require: true,
    }
})

export default mongoose.model("Activity", activitySchema)