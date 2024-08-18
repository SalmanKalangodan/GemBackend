import mongoose from "mongoose";



const item_scheema = new mongoose.Schema({
    pr_id : {
        type : String,
        required : true
    },
    type : {
        type : String,
        enum : ["goods", "services"],
        required : true
    },
    productname : {
        type : String,
        required: true
    },
    Manufacturer : {
        type :String,
        ref : ""
    },
    Brand :{
        type : String,
        required : true
    },
    Distributor : {
        type : String,
        required : true
    },
    Description  :{
        type : String
    },
    buying_pricce :{
        type : Number
    },
    selling_price :{
        type : Number
    },
    gst :{
        type : String,
        enum:["0%" , "5%" , "18%" , "28%", "28% + CESS"]
    },
    image : {
        type : String
    }

},{timestamps : true})

const Items = mongoose.model("Items" , item_scheema)

export default Items