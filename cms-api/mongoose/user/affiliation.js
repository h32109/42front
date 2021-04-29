import mongoose from "mongoose";
import {AffiliationType} from "../../public/mongoose/enum/affiliation";

const { Schema } = mongoose;
const affiliationSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    type: {
        type: String,
        enum: AffiliationType,
        request: true
    }
})

export default mongoose.model("Affiliation", affiliationSchema)