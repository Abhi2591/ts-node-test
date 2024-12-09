import express from 'express';
import { getUsers, createUsers, regUser, getSingleUser } from '../controller/userController';

const router = express.Router();

router.get('/allUsers', getUsers);
router.post('/', createUsers);


router.post('/user', regUser);
router.post('/login', getSingleUser);

export default router;
