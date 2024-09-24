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
    profilepic : {
        type : String, 
    },
    coverpic : {
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

export const User  =  mongoose.models?.User ||  mongoose.model("User" , UserSchema);


