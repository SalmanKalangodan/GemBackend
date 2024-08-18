import {Request , Response} from "express"
import Items from "../../../models/compeny/superadmin/item_scheema"



export const create_pr_id = async (req : Request , res : Response) : Promise<Response> =>{
    // find total items data base
    const count = await Items.find({}).countDocuments()

    return res.status(200).json({pr_id : count+1})
}


export const create_items = async (req : Request  , res : Response) : Promise <Response> =>{

    const {id , name , companyName ,distributor ,Brand, buyPrice , sellPrice , gstPercentage , type} = req.body

    const item = await Items.findOne({productname : name , Manufacturer : companyName})

    if(item){
        return res.status(400).json({message : "item already add"})
    }

    let npid = id

    const pr_id  = await Items.findOne({pr_id : id})
    
    if(pr_id) {
        npid = await Items.find({}).countDocuments()
    }

    const nitems = new Items({
       pr_id : npid,
       productname : name,
       Manufacturer : companyName,
       Distributor : distributor,
       buying_pricce : buyPrice,
       selling_price : sellPrice,
       gst : gstPercentage,
       type ,
       Brand
    })

     await nitems.save()

    return res.status(201).json({message : "item created successfuly"})
}


export const get_items = async (req : Request , res : Response) : Promise <Response>=>{

    const items = await Items.find({})

    return res.status(200).json(items)
}