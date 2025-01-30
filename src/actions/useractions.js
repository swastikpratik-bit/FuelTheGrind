"use server"

import {connetToDatabase } from "@/lib/utils";
import Payments from "@/models/Payments";
import User from "@/models/User";
import Razorpay from "razorpay";


export const initiate = async (amount , to_username , paymentform )  => {

    
    await connetToDatabase();
    
    let user = await User.findOne({username : to_username});

    const ID = user.razorpayId;
    const SECRET = user.razorpaySecret;

    var instance = new Razorpay({ key_id: ID, key_secret: SECRET })

    let options  = {
        amount : Number.parseInt(amount), 
        currency : "INR", 
    }
    
    let x = await instance.orders.create(options)   ;

    
    await Payments.create({oid : x.id , amount : amount/100 , to_user : to_username , name : paymentform.name , message : paymentform.message} );

    return x; 
}


export const fetchuser = async (username) => {
    await connetToDatabase()
    let u = await User.findOne({ username: username })
    let user = u.toObject({ flattenObjectIds: true })
    return user
}

export const fetchpayments = async (username) => {
    await connetToDatabase()
 
    let p = await Payments.find({ to_user: username, done: true })
    .sort({ amount: -1 })
    .lean(); // Converts documents to plain objects
  return p; // `p` is now an array of plain objects
  
}

export const updateProfile = async (data, oldusername) => {

    await connetToDatabase()
    let ndata = Object.fromEntries(data)

    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists" }
        }   
        await User.updateOne({email: ndata.email}, ndata)
        await Payments.updateMany({to_user: oldusername}, {to_user: ndata.username})
        
    }
    else{
        await User.updateOne({email: ndata.email}, ndata)
    }
}

