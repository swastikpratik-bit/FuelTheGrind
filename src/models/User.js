import mongoose, { model, Schema } from "mongoose";


const UserSchema = new Schema({
    email : {
        type : String, 
        required : true 
    }, 
    name : {
        type : String, 
    },
    username : {
        type : String, 
        required : true 
    },
    profilePicture : {
        type : String, 
    },
    coverImage : {
        type : String, 
    },
    razorpayId : {
        type : String, 
    },
    razorpaySecret : {
        type : String, 
    },
    createdAt: {
        type : Date, 
        default : Date.now,
    },
    updatedAt: {
        type : Date, 
        default : Date.now,
    }
});

export default mongoose.models.User ||  mongoose.model("User",UserSchema);


