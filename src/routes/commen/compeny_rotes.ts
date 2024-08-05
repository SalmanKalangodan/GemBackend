import express, {Router} from 'express' 
import { compony_register } from '../../controllers/commen/compeny'


const router: Router = express.Router()


router.post('/registers',compony_register)


export default router

