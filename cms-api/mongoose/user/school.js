import mongoose from "mongoose"

const { Schema } = mongoose;
const schoolSchema = new Schema({
    concentrations: Number,
    name: {
        type: String,
        require: true
    },
    graduationYear: Number
})

export default mongoose.model("School", schoolSchema)