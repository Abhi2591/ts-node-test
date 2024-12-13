import express, {Request, Response} from 'express';
import { Book } from '../models/libraryModel';


export const createBook = async (req : Request, res : Response)=> {
   try {
    const toSave = new Book({
        name : req.body.name,
        price : req.body.price,
        author : req.body.author,
        owner : req.body.owner
    });
    const saved = await toSave.save();
    if(saved){
        res.status(201).send({message : "Book created successfully!"});
    } else{
        res.status(400).send({message : "Failed to create a book"});
    }
   } catch (error) {
        console.log(error);
        res.status(500).send({message : "Internal server error"});
   }
};


export const getAllBooks = async (req : Request, res : Response)=> {
    try {
        const allBooks = await Book.find({});
        res.status(200).send({message : "All books fetched!!!", data : allBooks});
    } catch (error) {
        console.log(error);
        res.status(500).send({message : "Internal server error"});
    }
};