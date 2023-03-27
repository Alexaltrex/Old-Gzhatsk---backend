import {Router} from "express";
import {mapController} from "../controllers/map.controller";

export const mapRouter = Router();

mapRouter.get('/', mapController.getAll);
mapRouter.get('/:id', mapController.getById);
