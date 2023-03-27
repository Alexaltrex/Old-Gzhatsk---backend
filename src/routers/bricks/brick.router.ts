import express from 'express';
import {brickController} from "../../controllers/bricks/brick.controller";
export const brickRouter = express.Router();

//========== GET All MARKS =========
brickRouter.get('/', brickController.getBricks);
