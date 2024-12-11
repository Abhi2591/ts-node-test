import { Schema } from "mongoose";

export const jobSchema: Schema = new Schema({
    jobTitle: {
        type: String,
        trim: true,
        required: true
    },
    jobDescription: {
        type: String,
        trim: true,
        required: true
    },
    educationLevel: {
        type: String,
        trim: true,
        required: true,
    },
    companyName: {
        type: String,
        trim: true,
        required: true
    },
    salary: {
        type: Number,
        required: true,
    },
    experienceRequired: {
        type: Number,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: false,
        default: false
    },
    userApplied: {
        type: Number,
        required: true,
    }
}, { timestamps: true });