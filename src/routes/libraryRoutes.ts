import express from 'express';
import { createBook, getAllBooks, getBookById } from '../controller/libraryController';

const router = express.Router();


router.post('/book',createBook);
router.get('/book',getAllBooks);
router.get('/single-book',getBookById);


export default router;