import { Document } from "mongoose";

export interface IBook extends Document{
    name : string;
    price : number;
    author : string;
    owner : string;
}