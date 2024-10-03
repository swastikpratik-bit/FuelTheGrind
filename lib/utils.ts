import { ClassValue, clsx } from "clsx";
import mongoose from "mongoose";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



export const connetToDatabase =  async() => {

  try {
    if(mongoose.connections && mongoose.connections[0].readyState)return;

    const {connection} = await mongoose.connect(
      process.env.MONGO_URI  as string , 
      {
        dbName: "fuelthegrind"  , 
      }
    )

    console.log(`Conneted to database : ${connection.host}`);
  } catch {
    throw new Error("Error while connecting database");
  }
};