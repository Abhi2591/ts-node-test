import { Document } from "mongoose";

export interface IJob extends Document{
    jobTitle : string;
    jobDescription : string;
    educationalLevel : string;
    companyName : string;
    salary : number;
    experienceRequired : number;
    isActive : false;
    userApplied : number;
};