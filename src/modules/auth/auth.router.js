import { Router } from "express";
import * as authController from './auth.controller.js';

const router=Router();
router.post('/register',authController.Register) 

router.post('/login',authController.Login)


export default router;