import express, {Router} from 'express' 
import { compony_register } from '../../../controllers/compeny/superadmin/compeny'
import { login_compeny } from "../../../controllers/compeny/superadmin/compeny_login"
import { trycatch } from '../../../utils/try_catch/try_catch_handler'
import { create_user } from '../../../controllers/compeny/superadmin/create_users'
import { auth } from '../../../middlewares/auth/token'

const router: Router = express.Router()


router.post('/registers',trycatch(compony_register))
router.post('/logins',trycatch(login_compeny))
router.post('/create/users',auth,trycatch(create_user))


export default router

