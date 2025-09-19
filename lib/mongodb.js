import mongoose, { mongo } from "mongoose";

const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
    throw new Error("add your mongo uri to .env")
}

let isConnected = null; //track connection
export const connectDB = async () => {
    if (isConnected) {
        return
    }

    try {
        const db = await mongoose.connect(MONGO_URI, {
            dbName: "maxnetDB"
        })
        isConnected = db.connections[0].readyState
        console.log("MONGO DB CONNECTED");
    } catch (error) {
        console.error("mongo error", error);

    }
}