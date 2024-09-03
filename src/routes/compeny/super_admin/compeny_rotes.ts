import express, {Router} from 'express' 
import { compony_register } from '../../../controllers/compeny/superadmin/compeny'
import { login_compeny } from "../../../controllers/compeny/superadmin/compeny_login"
import { trycatch } from '../../../utils/try_catch/try_catch_handler'
import { create_user } from '../../../controllers/compeny/superadmin/create_users'
import { auth } from '../../../middlewares/auth/token'
import { create_items, create_pr_id, get_items } from '../../../controllers/compeny/superadmin/items'
import { create_bills, delete_bills, generate_bill_no, get_bills, update_bills } from '../../../controllers/compeny/superadmin/bills'

const router: Router = express.Router()


router.post('/registers',trycatch(compony_register))
router.post('/logins',trycatch(login_compeny))
router.post('/create/users',auth,trycatch(create_user))
// items route
router.get('/create/prid',trycatch(create_pr_id))
router.post("/create/items",trycatch(create_items))
router.get('/getitems',trycatch(get_items))
// bills route
router.post('/create/bills',trycatch(create_bills))
router.get('/get/bills',trycatch(get_bills))
router.patch('/update/bills',trycatch(update_bills))
router.delete('/delete/bills',trycatch(delete_bills))
router.get('/bills/numbers',trycatch(generate_bill_no))
export default router

