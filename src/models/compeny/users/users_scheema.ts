import mongoose from "mongoose";


const userscheema = new mongoose.Schema({
     username:{
        type : String,
        required : true
     },
     password : {
        type : String,
        required:true
     },
     role :{
        type:String,
        enum:["admin" , "superadmin" , "bill"],
        default : 'admin'
     }
})

const Users = mongoose.model("Users" , userscheema)
export default Users