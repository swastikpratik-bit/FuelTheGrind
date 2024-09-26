"use server"

import Razorpay from "razorpay"
import Payments from "@/models/Payment"
import User from "@/models/User";
import { connetToDatabase } from "@/lib/utils";


interface INType{
    amount : Number;
    to_username : String ; 
    paymentform : String ;
}

export const initate = async (amount : any, to_username  :any, paymentform : any)  => {
    await connetToDatabase();

    var instance = new Razorpay({ key_id: process.env.KEY_ID!, key_secret: process.env.KEY_SECRET })
    instance.orders.create({
        amount: 50000,
        currency: "INR",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        }
    })

    let options  = {
        amount : Number.parseInt(amount), 
        currency : "INR", 
    }

    let x = await instance.orders.create(options)   ;

    await Payments.create({oid : x , amount : amount , to_username : to_username , name : paymentform.name , message : paymentform.message} )   ;

    return x; 


}
