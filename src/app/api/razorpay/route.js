import { connetToDatabase } from "@/lib/utils";
import Payments from "@/models/Payments";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";

export const POST = async (req) => {
    await connetToDatabase()

    let body = await req.formData()
    body = Object.fromEntries(body)
    console.log(body)

    let curPayment = await Payments.findOne({oid: body.razorpay_order_id})

    if(!curPayment){
        return NextResponse.json({success: false, message:"Order Id Not Found"})
    }

    let user = await User.findOne({username: curPayment.to_user})
    const secret = user.razorpaySecret

  
    let check = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id}, body.razorpay_signature, secret)

    if(check){
        const updatedPayment = await Payments.findOneAndUpdate({oid: body.razorpay_order_id}, {done: "true"}, {new: true})
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`)  
    }
    else{
        return NextResponse.json({success: false, message:"Payment Verification Failed"})
    }

}