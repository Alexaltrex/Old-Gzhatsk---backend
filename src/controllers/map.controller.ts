import {NextFunction, Request, Response} from "express";
import {mapService} from "../services/map.service";

export const mapController = {
    //============= GET ALL ===============//
    getAll: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const items = mapService.getAll();
            res.json({
                status: 'ok',
                data: items,
                message: ''
            });
        } catch (e) {
            next(e)
        }
    },
    //=========== GET BY ID ============
    getById: async (req: Request<{id: string}, any, any>, res: Response, next: NextFunction) => {
        try {
            const {id} = req.params;
            const item = mapService.getById(id)
            res.json({
                status: 'ok',
                data: item,
                message: 'get all'
            });
        } catch (e) {
            next(e)
        }
    }
}
