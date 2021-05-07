import mongoose from "mongoose";
import {Gender, LookingFor, RelationshipStatus} from "../../public/mongoose/enum/profile"

const { Schema } = mongoose;
const profileSchema = new Schema({
    aboutMe: String,
    activities: [{
        type: Schema.Types.ObjectId,
        ref: "Activity",
    }],
    affiliations: [{
        type: Schema.Types.ObjectId,
        ref: "Affilation"
    }],
    affiliationCount: {
        type: Number,
        require: true,
        default: 0
    },
    birthday: {
        type: Date,
        require: true,
    },
    currentStatus: {
        type: Schema.Types.ObjectId,
        ref: "UserStatus"
    },
    currentLocation: {
        type: Schema.Types.ObjectId,
        ref: "Location"
    },
    favoriteBooks: [String],
    favoriteMovies: [String],
    favoriteMusic: [String],
    favoriteQuotes: [String],
    favoriteTVShows: [String],
    firstName: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        enum: Gender,
        require: true,
    },
    hometownLocation: {
      type: Schema.Types.ObjectId,
      ref: "Location"
    },
    lastName: {
        type: String,
        require: true,
    },
    interests: [String],
    isApplicationUser: {
        type: Boolean,
        require: true,
        default: false
    },
    lookingFor: {
        type: String,
        enum: LookingFor
    },
    notesCount: {
        type: Number,
        require: true,
        default: 0
    },
    pictureBigURL: {
        type: String,
        // default: default-img-url, require: true
    },
    pictureSmallURL: {
        type: String,
        // default: default-img-url, require: true
    },
    pictureURL: {
        type: String,
        // default: default-img-url, require: true
    },
    politicalViews: [{
        type: String,
    }],
    religion: {
        type: String,
    },
    relationshipStatue: {
        type: String,
        enum: RelationshipStatus
    },
    schools: [{
        type: Schema.Types.ObjectId,
        ref: "School",
    }],
    schoolCount: {
        type: Number,
        require: true,
        default: 0
    },
    significantOtherId: {
        type: Schema.Types.ObjectId,
    },
    updateTime: {
        type: Date,
        require: true,
        default: Date.now()
    },
    wallCount: {
        type: Number,
        require: true,
        default: 0,
    },
    // webAddFriendLink: {
    //     type: String,
    //     require: true,
    //     unique: true,
    //     // default: some-link
    // },
    // webNotesByUserLink: {
    //     type: String,
    //     require: true,
    //     unique: true,
    //     // default: some-link
    // },
    // webPicturesByUserLink: {
    //     type: String,
    //     require: true,
    //     unique: true,
    //     // default: some-link
    // },
    // webPicturesOfUserLink: {
    //     type: String,
    //     require: true,
    //     unique: true,
    //     // default: some-link
    // },
    // webPokeLink: {
    //     type: String,
    //     require: true,
    //     unique: true,
    //     // default: some-link
    // },
    // webPostOnUserWallLink: {
    //     type: String,
    //     require: true,
    //     unique: true,
    //     // default: some-link
    // },
    // webProfileLink: {
    //     type: String,
    //     require: true,
    //     unique: true,
    //     // default: some-link
    // },
    // webSendMessageLink: {
    //     type: String,
    //     require: true,
    //     unique: true,
    //     // default: some-link
    // },
    workplaces: [{
        type: Schema.Types.ObjectId,
        ref: "WorkPlace",
    }],
    workPlaceCount: {
        type: Number,
        require: true,
        default: 0
    }

})

export default mongoose.model("Profile", profileSchema)