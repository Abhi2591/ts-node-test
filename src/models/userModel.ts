import mongoose from "mongoose";
import { userSchema } from "../schemas/userSchema";

export const User = mongoose.model('User',userSchema);





// jobTitle : string, jobDescription : string, educationLevel : string, companyName : string, salary : Number, experienceRequired : Number, isActive : Boolean, userApplied : Number
 
///

