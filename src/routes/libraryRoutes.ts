import express from 'express';
import { createBook, getAllBooks } from '../controller/libraryController';

const router = express.Router();


router.post('/book',createBook);
router.get('/book',getAllBooks);


export default router;