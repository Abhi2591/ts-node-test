import express from 'express';
import {regUser, getSingleUser, getAllUsers, loginUser } from '../controller/userController';

const router = express.Router();

// router.get('/allUsers', getUsers);
// router.post('/', createUsers);


router.post('/user', regUser);
// router.post('/login', getSingleUser);
router.get('/user',getAllUsers);
router.post('/login',loginUser);

export default router;
