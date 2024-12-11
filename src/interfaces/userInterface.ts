import { Document } from "mongoose";

export interface IUser extends Document{
    name : string;
    email : string;
    mobile : number;
    password : string;
    age : number;
    fullAddress : string;
    isActive : boolean;
    // isActive : boolean | string | number;
    // isActive :  any;
};




// HOMEWORK :

// companySchema 
// 1. companyLegalName : string,
// 2. companyShortName : string,
// 3. logoCompany : string, not mandatory,
// 4. comapnyMemebers : number, not mandatory,
// 5. copmpanyState : string, NM,
// 6. companyCity / companyCountry ---> string, NM
// 7. lat / lng : number , NM
// 8. formattedAddress : string, NM
// 9. mobile : number,
// 10. email : string
// 11. isReported : boolean, NM
// 12. isActive : boolean, NM
// 13. isVerified : boolean, NM


// Required ----> MODEL, SCHEMA, INTERFACE