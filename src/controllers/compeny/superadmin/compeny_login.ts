import {Request , Response} from 'express'
import Users from '../../../models/compeny/users/users_scheema'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const login_compeny = async(req : Request , res : Response ) :Promise<Response> =>{

    const {email , password } = req.body

    console.log(email , password);
    
    const admin  = await Users.findOne({username :email})

    if(!admin){
        return res.status(400).json({message : "compeny not found"})
    }


    const compare = bcrypt.compareSync(password,admin.password)

    if(!compare){
        return res.status(400).json({message : "password is wrong"})
    }

    const token = jwt.sign({id : admin._id , email : admin.username} , process.env.Accesstoken_secret,{expiresIn : "30d"})


    return res.status(200).json({token , message : "login successfuly"})
}
