import mongoose from "mongoose";

const { Schema } = mongoose;
const photoSchema = Schema({
    album: {
        type: Schema.Types.ObjectId,
        ref: "album",
        require: true
    },
    caption: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
    created: {
        type: Date,
        require: true,
        default: Date.now()
    },
    largeSource: {
        type: String,
        require: true,
        unique: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: "Like"
    }],
    link: {
        type: String,
        require: true,
        unique: true
    },
    mediumSource: {
        type: String,
        require: true,
        unique: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    },
    smallSource: {
        type: String,
        require: true,
        unique: true
    },
    photoTags: [{
        type: Schema.Types.ObjectId,
        ref: "PhotoTag"
    }]

})

export default mongoose.model("Photo", photoSchema)