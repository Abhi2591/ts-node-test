import {Schema} from "mongoose";

// mongoose.Schema


export const userSchema : Schema = new Schema({
    name : {
        type : String,
        trim : true,
        required : true
    },
    email : {
        type : String,
        trim : true,
        required : true,
        unique : true 
    },
    mobile : {
        type : Number,
        required : true, 
        unique : true,
    },
    gender : {
        type : String,
        required : true,
        enum : [ "Male", "Female", "Transgender" ]
    },
    password : {
        type : String,
        required : true,
        trim : true
    },
    age : {
        type : Number,
        required : true
    },
    role : {
        type : String,
        enum : [ "User", "Super Admin", "Admin" ]
    },
    fullAddress : {
        type : String,
        required : false,
    },
    isActive : {
        type : Boolean,
        required : false,
        default : false
    }
}, {timestamps : true}); 






// HOME WORK :

// Create a new Project :
// 1. Create User Schema --- > (firstName, lastName, userName, age, mobile, email, password, fullAddress, isAccountActive, gender[enum], role[enum] ---> ['User', 'Teacher', 'Admin'],); 
// 2. API LIST : (CREATE(REG), GETALLUSERS, GETSINGLEUSERBYID, LOGIN,);
// WITH MODEL, INTERFACE, SCHEMA, CONTROLLER, SERVER.TS, DBs, BCRYPT.JS, JWT, etc.