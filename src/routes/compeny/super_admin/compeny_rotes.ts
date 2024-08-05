import express, {Router} from 'express' 
import { compony_register } from '../../../controllers/compeny/superadmin/compeny'
import { login_compeny } from "../../../controllers/compeny/superadmin/compeny_login"
import { trycatch } from '../../../utils/try_catch/try_catch_handler'

const router: Router = express.Router()


router.post('/registers',trycatch(compony_register))
router.post('/logins',trycatch(login_compeny))


export default router

