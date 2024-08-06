import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    }
});

const companySchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    address:{
        type :addressSchema,
        required : true
    },
    email:{
        type: String,
        required : true
    },
    password : {
        type: String,
        required : true
    },
    users : [{
        type: mongoose.Schema.ObjectId,
        ref:"Users"
    }]
})


const Company = mongoose.model('Company', companySchema);

export default Company;