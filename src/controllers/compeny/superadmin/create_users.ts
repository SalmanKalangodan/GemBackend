import {Request , Response} from 'express'
import Users from '../../../models/compeny/users/users_scheema'
import bcrypt, { hash } from 'bcrypt'
import Company from '../../../models/compeny/superadmin/compeny_scheema'


export const create_user  = async (req : Request , res : Response) : Promise<Response> =>{


    const {username , password , role} = req.body

    const email = req.email
    

    const user = await Users.findOne({username})

    const compeny = await Company.findOne({email})

    if(!compeny){
        return res.status(400).json({message :`compeny not found`})
    }
     
    if(user &&compeny.users.includes(user.id)){
        return res.status(400).json({message :`${username} alredy registerd`})
    }

    const hash = bcrypt.hashSync(password , 10)

    const new_users = new Users ({
        username,
        password: hash,
        role
    })

    await new_users.save()

    compeny.users.push(new_users.id)

    await compeny.save()

    return res.json({message : "user created"})
}