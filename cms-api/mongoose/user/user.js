import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema({
    identifier: {
        type: String,
        unique: true,
        require: true,
        index: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    },
    certificationNumber: String,
    isVerified: {
        type: Boolean,
        require: true,
        default: false
    },
    isEmail: {
        type: Boolean,
        require: true
    }
})

export default mongoose.model("User", userSchema)