import {NextFunction, Request, Response} from "express";
import {cemeteryService} from "../services/cemeteriey.service";

export const cemeteryController = {
    getAll: (req: Request, res: Response, next: NextFunction) => {
        try {
            const cemeteries = cemeteryService.getAll();
            res.json(cemeteries);
        } catch (e) {
            next(e)
        }
    },

    getById: (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const cemetery = cemeteryService.getById(id);
            res.json(cemetery);
        } catch (e) {
            next(e)
        }
    }
}
