import {Router} from "express";
import {cemeteryController} from "../controllers/cemetery.controller";

export const cemeteryRouter = Router();
cemeteryRouter.get('/', cemeteryController.getAll);
cemeteryRouter.get('/:id', cemeteryController.getById);
