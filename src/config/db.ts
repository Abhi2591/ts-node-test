import mongoose from "mongoose";
import { MONGO_URI } from "../constant";

export const connectDB = async() : Promise<void> => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database connected successfully!");
    } catch (error) {
        console.log('Failed to connect Database');
        process.exit(1);
    }
};