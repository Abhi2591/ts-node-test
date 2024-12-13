import {Schema} from "mongoose";

export const bookSchema : Schema = new Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    price : {
        type : Number,
        required : true,
    },
    author : {
        type : String,
        required : true,
        trim : true
    },
    owner : {
        type : String,
        required : true,
        trim : true
    }
},{timestamps: true});


