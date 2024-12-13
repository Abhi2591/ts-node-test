import e, { Request, Response } from 'express';
import { User } from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_PRIVATE_KEY } from '../constant';

// const bunnyData = [
// 	{ id: 1, name: "Bunny Chaudhary" },
// 	{ id: 2, name: "Murkhandu Das" }
// ];

// export const getUsers = async (req: Request, res: Response) => {
// 	try {
//     	const allUsers = bunnyData;
//     	res.status(200).send({ message: "All Users Fetched Successfully", data: allUsers });
// 	} catch (error) {
//     	res.status(500).send({ message: "Internal Server Error" });
// 	}
// }

// export const createUsers = async (req: Request, res: Response) => {
// 	try {
//     	const { name } = req.body;
//     	const newUser = { id: bunnyData.length + 1, name };
//     	bunnyData.push(newUser);
//     	res.status(201).json({ message: "User Created Successfully", data: newUser });
// 	} catch (error) {
//     	res.status(500).send({ message: "Internal Server Error" });
// 	}
// }


let usersList: {
	name: string;
	age: number;
	password: string;
	mobile: number
}[] = [];

export const regUser = async (req: Request, res: Response) => {
	try {
		console.log(req.body);

		// let isUserExist : boolean = usersList.filter((e)=> e.mobile == req.body.mobile).length > 0;

		const hashedPassowrd = await bcrypt.hash(req.body.password, 12);

		const toSave = new User({
			name: req.body.name,
			email: req.body.email,
			mobile: req.body.mobile,
			password: hashedPassowrd,
			age: req.body.age,
			fullAddress: req.body.fullAddress,
			isActive: true
		});

		const saved = await toSave.save();
		if (saved) {
			res.status(201).send({ message: "User registered successfully!" });
		} else {
			// usersList.push(req.body);
			res.status(403).send({ message: "Failed to create user" });

		}
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
};


// Get All Users :
export const getAllUsers = async (req: Request, res: Response) => {
	try {
		const allUsers = await User.find({});
		res.status(200).send({ message: "All Users data fetched successfully!", data: { "count": allUsers.length, "data": allUsers } });
	} catch (error) {
		res.status(500).send({ message: "Interna server error" });
	}
};


export const getSingleUser = (req: Request, res: Response) => {
	try {
		const { mobile, password } = req.body;
		if (mobile && password) {
			let isUserExist = usersList.filter((e) => e.mobile == mobile);
			if (isUserExist.length) {
				if (isUserExist[0].password == password) {
					res.status(200).send({ message: "User logged In Succesfully!", data: isUserExist[0] });
				} else {
					res.status(200).send({ message: "Invalid Password" });
				}
			} else {
				res.status(403).send({ message: "Invalid mobile number" });
			}
		} else {
			res.status(200).send({ message: "Invalid mobile & password" });
		}
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
};



// Login User ;
export const loginUser = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;
		if (email && password) {
			const isUserExist = await User.findOne({ email: email });
			if (isUserExist) {
				const isValid = await bcrypt.compare(password, isUserExist.password);
				if (isValid) {
					const token = await jwt.sign({ _id: isUserExist._id, name: isUserExist.name }, JWT_PRIVATE_KEY);
					res.status(200).send({ message: "User login successfully!", token: token });
				} else {
					res.status(400).send({ message: "Invalid password" });
				}

			} else {
				res.status(400).send({ message: "Invalid email or password" });
			}
		} else {
			res.send(400).send({ message: "Invalid credentials" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: " Internal server error" });
	}
};


