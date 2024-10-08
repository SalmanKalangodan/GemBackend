import Company from "../../../models/compeny/superadmin/compeny_scheema";
import {Request , Response} from "express"
import bcrypt from 'bcrypt'
import Users from "../../../models/compeny/users/users_scheema";


export const compony_register = async(req:Request , res : Response):Promise<Response>=>{


    const {name , password , email  } = req.body
    
    const company = await Company.findOne({email})

    if(company){
      return res.status(400).json({message : "this email alredy registerd please login"})
    }

    const npassword =  bcrypt.hashSync(password,10)
    const ncompeny = new Company({
        name,
        password : npassword,
        email,
    })

    const new_user = new Users({
        username : email,
        password : npassword,
        role : "superadmin"
    })

    await new_user.save()

    ncompeny.users.push(new_user.id)

    await ncompeny.save()

    return res.status(201).json({message : "register successfuly" , ncompeny})
    
} 