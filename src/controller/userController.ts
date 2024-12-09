import e, { Request, Response } from 'express';

const bunnyData = [
	{ id: 1, name: "Bunny Chaudhary" },
	{ id: 2, name: "Murkhandu Das" }
];

export const getUsers = async (req: Request, res: Response) => {
	try {
    	const allUsers = bunnyData;
    	res.status(200).send({ message: "All Users Fetched Successfully", data: allUsers });
	} catch (error) {
    	res.status(500).send({ message: "Internal Server Error" });
	}
}

export const createUsers = async (req: Request, res: Response) => {
	try {
    	const { name } = req.body;
    	const newUser = { id: bunnyData.length + 1, name };
    	bunnyData.push(newUser);
    	res.status(201).json({ message: "User Created Successfully", data: newUser });
	} catch (error) {
    	res.status(500).send({ message: "Internal Server Error" });
	}
}


let usersList : {
	name : string;
	age : number;
	password : string;
	mobile : number
}[] = [];

export const regUser = async (req: Request, res: Response) => {
	try{
		// console.log(req.body);

		let isUserExist : boolean = usersList.filter((e)=> e.mobile == req.body.mobile).length > 0;

		if(isUserExist){
			res.status(403).send({message : "Mobile no. already exist"});
		} else{
			usersList.push(req.body);
			res.status(201).send({message : "Account registered successfully!"});
		}	
	}catch(error){
		res.status(500).send({message: "Internal Server Error"});
	}
};





export const getSingleUser = (req : Request, res : Response) => {
	try {
		const {mobile, password} = req.body;
		if(mobile && password){
			let isUserExist = usersList.filter((e) => e.mobile == mobile);
			if(isUserExist.length){
				if(isUserExist[0].password == password){
					res.status(200).send({message : "User logged In Succesfully!", data : isUserExist[0]});
				}else{
					res.status(200).send({message : "Invalid Password"});
				}
			} else{
				res.status(403).send({message : "Invalid mobile number"});
			}
		} else{
			res.status(200).send({message : "Invalid mobile & password"});
		}
	} catch (error) {
		res.status(500).send({message : "Internal Server Error"});
	}
};




