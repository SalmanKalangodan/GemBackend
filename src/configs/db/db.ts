import mongoose from "mongoose";

export const mongodb = ()=>{
 const db_uri = process.env.DB
    mongoose.connect(db_uri)
    .then(()=>console.log("db connected"))
    .catch((err)=>console.log(err))
}