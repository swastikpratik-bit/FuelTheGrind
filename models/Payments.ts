import mongoose, { model, Schema } from "mongoose";


const PaymentSchema = new Schema({
    name : {
        type : String , 
        rquired : true ,
    },
    oid : {
        type: String , 
        required : true ,
    }, 
    message : {
        type : String ,
    },
    amount: {
        type : Number , 
        required : true,
    }, 
    done : {
        type : Boolean, 
        default : false,
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

export default mongoose.models?.Payment ||  model("User" , PaymentSchema);



