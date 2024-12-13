import { Schema } from "mongoose";

export const companySchema : Schema = new Schema({
    companyLegalName : {
        type : String,
        required : true,
        trim : true
    },
    companyShortName : {
        type : String,
        trim : true,
        required : true
    },
    logoCompany : {
        type : String,
        required : false,
        default : ''
    },
    companyMembers : {
        type : Number,
        required : false,
        default : 0
    },
    mobile : {
        type : Number,
        required : true,
    },
    email : {
        type : String,
        required : true,
        trim : true
    },
    companyCity : {
        type : String,
        required : false,
        default : ''
    },
    companyState : {
        type : String,
        required : false,
        default : ''
    },
    companyCountry : {
        type : String,
        required : false,
        default : ''
    },
    lat : {
        type : Number,
        required : false,
        default : 0.0
    },
    lng : {
        type : Number,
        required : false,
        default : 0.0
    },
    formattedAddress : {
        type : String,
        required : false,
        default : ''
    },
    isReported : {
        type : Boolean,
        required : false,
        default : false
    },
    isVerified : {
        type : Number,
        required : false,
        default : false
    },
    isActive : {
        type : Boolean,
        required : false,
        default : false
    }
},{timestamps: true});