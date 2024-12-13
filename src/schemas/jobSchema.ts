import { Schema } from "mongoose";

export const jobSchema : Schema = new Schema({
    jobTitle : {
        type : String,
        trim : true,
        required : true
    },
    jobDescription : {
        type : String,
        trim : true,
        required : true
    },
    educationLevel : {
        type : String,
        trim : true,
        required : true,
    },
    companyName : {
        type : String,
        trim : true,
        required : true
    },
    salary : {
        type : Number,
        required : true,
        default : 0
    },
    experienceRequired : {
        type :Number,
        required : true,
        default : 1
    },
    isActive : {
        type : Boolean,
        required : false,
        default : false
    },
    userApplied : {
        type : Number,
        required : true,
        default : 0
    }
}, {timestamps : true});