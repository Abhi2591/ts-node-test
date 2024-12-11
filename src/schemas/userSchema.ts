import {Schema} from "mongoose";

// mongoose.Schema


export const userSchema : Schema = new Schema({
    name : {
        type : String,
        trim : true,
        required : true
    },
    email : {
        type : String,
        trim : true,
        required : true,
        unique : true 
    },
    mobile : {
        type : Number,
        required : true, 
        unique : true,
    },
    password : {
        type : String,
        required : true,
        trim : true
    },
    age : {
        type : Number,
        required : true
    },
    fullAddress : {
        type : String,
        required : false,
    },
    isActive : {
        type : Boolean,
        required : false,
        default : false
    }
}, {timestamps : true}); 

