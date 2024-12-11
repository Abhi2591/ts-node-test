import mongoose from "mongoose";
import { jobSchema } from "../schemas/jobSchema";

export const Job = mongoose.model('Job',jobSchema);