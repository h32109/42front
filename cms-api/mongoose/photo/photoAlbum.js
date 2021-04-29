import mongoose from "mongoose";

const { Schema } = mongoose;
const photoAlbumSchema = Schema({
    coverPhoto: {
        type: Schema.Types.ObjectId,
        ref: "Photo",
        require: true
    },
    created: {
        type: Date,
        require: true,
        default: Date.now()
    },
    description: String,
    modified: {
        type: Date,
        require: true,
        default: Date.now()
    },
    name: {
        type: String,
        require: true
    },
    size: {
        type: Number,
        require: true,
        default: 1
    }
})

export default mongoose.model("PhotoAlbum", photoAlbumSchema)