import mongoose from "mongoose";
import { companySchema } from "../schemas/companySchema";
import { ICompany } from "../interfaces/companyInterface";

export const Company = mongoose.model<ICompany>('Company', companySchema);