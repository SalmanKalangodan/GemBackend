import Company from "../../models/compeny/compeny_scheema";
import {Request , Response} from "express"
import bcrypt from 'bcrypt'


export const compony_register = async(req:Request , res : Response):Promise<Response>=>{

try {
    const {name , password , email , address } = req.body
    
    const company = await Company.findOne({email})

    if(company){
      return res.status(400).json({message : "this email alredy registerd please login"})
    }

    const npassword =  bcrypt.hashSync(password,10)
    const ncompeny = new Company({
        name,
        password : npassword,
        email,
        address
    })

    await ncompeny.save()
    return res.status(201).json({message : "register successfuly" , ncompeny})
} catch (error) {
    console.log(error);
    
}
    
} 