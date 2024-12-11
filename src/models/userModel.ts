import mongoose from "mongoose";
import { userSchema } from "../schemas/userSchema";
import { IUser } from "../interfaces/userInterface";

export const User = mongoose.model<IUser>('User',userSchema);





// jobTitle : string, jobDescription : string, educationLevel : string, companyName : string, salary : Number, experienceRequired : Number, isActive : Boolean, userApplied : Number
 
///

