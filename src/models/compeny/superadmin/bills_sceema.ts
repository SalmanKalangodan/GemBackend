import mongoose from "mongoose";


const billScheema = new mongoose.Schema({
    customerName : {
        type : mongoose.Schema.ObjectId,
        ref : "Cunstemrs"
    },
    billDate : {
        type : Date,
        required: true
    },
    billNumber:{
        type: Number,
        required : true
    },
    
})