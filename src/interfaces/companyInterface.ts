import { Document } from "mongoose";

export interface ICompany extends Document{
    companyLegalName : string;
    companyShortName : string;
    logoCompany : string;
    companyMembers : number;
    mobile : number;
    email : string;
    companyCity : string;
    companyState : string;
    companyCountry : string;
    lat : number;
    lng : number;
    formattedAddress : string;
    isReported : boolean;
    isVerified : boolean;
    isActive : boolean;
};