import {Request , Response} from 'express'


export const create_bills = async ( req : Request , res : Response): Promise<Response> =>{
    const {billNumber , billDate, customerName , address , items , gst , totalBillAmount , payment , description , customerBalance} = req.body
    
    return res
}

export const get_bills = async (req : Request , res : Response) : Promise<Response> =>{
    return res
}

export const update_bills = async (req : Request , res : Response) : Promise<Response>=>{
    return res
}

export const delete_bills = async (req : Request , res : Response) : Promise <Response>=>{
    return res
}

export const generate_bill_no = async (req : Request , res : Response) :Promise<Response>=>{
    return res
}