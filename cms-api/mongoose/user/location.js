import mongoose from "mongoose";


const { Schema } = mongoose;
const locationSchema = new Schema({
    city: String,
    country: {
        type: String,
        require: true
    },
    state: String,
    street: String,
    zipCode: String

})

export default mongoose.model("Location", locationSchema)