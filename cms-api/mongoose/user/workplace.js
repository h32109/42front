import mongoose from "mongoose";

const { Schema } = mongoose;
const workPlaceSchema = new Schema({
    companyName: {
        type: String,
        require: true,
    },
    description: String,
    endDate : Date,
    position: String,
    startDate: {
        type: Date,
        require: true,
    },
    workLocation: {
        type: Schema.Types.ObjectId,
        ref: "Location"
    }
})

export default mongoose.model("WorkPlace", workPlaceSchema)