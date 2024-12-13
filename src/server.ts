import express, { Request, Response } from 'express';
import userRoutes from './routes/userRoutes';
import { connectDB } from './config/db';
import libraryRoutes from './routes/libraryRoutes';

const app = express();

//Middleware to parse JSON requests
app.use(express.json());

//Use the user routes
app.use('/api/users', userRoutes);
app.use('/api/library',libraryRoutes);

//Demo Route
app.get('/', (req: Request, res: Response) => {
	res.status(200).send({ message: 'Hi, I am Bunny Murkhandi' })
});

connectDB();


//Start Server
const port: number | string = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server is Running on Port : ${port}`);
});
