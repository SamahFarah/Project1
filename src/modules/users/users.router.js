import { Router } from "express";
import * as usersController from './users.controller.js';

const router=Router();
router.get('/',usersController.getAll) 
router.get('/:id',usersController.getUser) 
router.put('/:id',usersController.updatUser);
router.delete('/:id',usersController.deleteUser);


export default router;