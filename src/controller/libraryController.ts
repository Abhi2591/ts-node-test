import express, { Request, Response } from 'express';
import { Book } from '../models/libraryModel';
import mongoose from 'mongoose';


export const createBook = async (req: Request, res: Response) => {
    try {
        const toSave = new Book({
            name: req.body.name,
            price: req.body.price,
            author: req.body.author,
            owner: req.body.owner
        });
        const saved = await toSave.save();
        if (saved) {
            res.status(201).send({ message: "Book created successfully!" });
        } else {
            res.status(400).send({ message: "Failed to create a book" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error" });
    }
};


export const getAllBooks = async (req: Request, res: Response) => {
    try {
        const allBooks = await Book.find({});
        res.status(200).send({ message: "All books fetched!!!", data: allBooks });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error" });
    }
};


// Get Single Book :
export const getBookById = async (req: Request, res: Response) => {
    try {
        console.log(req.body);

        // const book = await Book.find({_id : req.body.id});
        const isValid = mongoose.Types.ObjectId.isValid(req.body.id);
        if (isValid) {
            const bookData = await Book.findOne({ _id: req.body.id });
            if (bookData) {
                res.status(200).send({ message: "Book fetched succesfully", data: bookData });
            } else {
                res.status(400).send({ message: "Book data not found" });
            }
        } else {
            res.status(400).send({ message: "Invalid Id provided" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error!" });
    }

};