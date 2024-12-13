import mongoose from "mongoose";
import { jobSchema } from "../schemas/jobSchema";
import { IJob } from "../interfaces/jobInterface";

export const Job = mongoose.model<IJob>('Job',jobSchema);