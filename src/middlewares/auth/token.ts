import jwt from 'jsonwebtoken'
import {Request , Response , NextFunction} from 'express'





interface JwtPayload {
    email: string;
    id: string;
  }

export const auth = async (req :Request , res : Response ,next: NextFunction)=>{

    const token  = req.headers.authorization;

    if(!token){
        return res.status(400).json({message : "Access token required"})
    }

    const decoded = jwt.verify(
        token,
        process.env.Accesstoken_secret as string
      ) as JwtPayload;
  
      req.id = decoded.id

      next()
}