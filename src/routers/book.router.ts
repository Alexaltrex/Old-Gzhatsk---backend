import {Router} from "express";
import {bookController} from "../controllers/book.controller";

export const bookRouter = Router();
bookRouter.get('/', bookController.getAll);
