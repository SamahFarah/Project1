import { Router } from "express";
import * as productsController from './products.controller.js';

const router=Router();
router.get('/',productsController.getAll) 
router.get('/:id',productsController.getProduct) 
router.post('/',productsController.AddProduct);
router.put('/:id',productsController.updatProduct);
router.delete('/:id',productsController.deleteProduct);


export default router;