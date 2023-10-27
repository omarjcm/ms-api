import { Router } from 'express'
import * as authCtrl from '../controllers/auth.controller'
const router = Router()

router.post('/signin', authCtrl.sign_in)

export default router
