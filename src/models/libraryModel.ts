import mongoose from "mongoose";
import { bookSchema } from "../schemas/librarySchema";
import { IBook } from "../interfaces/libraryInterface";

export const Book = mongoose.model<IBook>('Book',bookSchema);