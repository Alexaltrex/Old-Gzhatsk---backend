import {NextFunction, Request, Response} from "express";
import {chronoService} from "../services/chrono.service";
import {ChronoItemUpdateOnlyTextType} from "../interfaces/chrono.interfaces";

export const chronoController = {
    //============= GET ALL ===============//
    getAll: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const items = chronoService.getAll();
            res.json({
                status: 'ok',
                data: items,
                message: 'get all'
            });
        } catch (e) {
            next(e)
        }
    },

    //============= UPDATE ==============//
    update: async (req: Request<any, any, ChronoItemUpdateOnlyTextType> & {userId: string}, res: Response, next: NextFunction) => {
        try {
            const update = req.body;
            const chronoId = req.params.id;
            //@ts-ignore
            const file = req.file;

            const userId = req.userId;
            const chronoItemUpdated = await chronoService.update(chronoId, userId, update, file);

            res.json({
                status: 'ok',
                data: chronoItemUpdated,
                message: 'chrono item update'
            });
        } catch (e) {
            next(e)
        }
    },

    //============= ADD ==============//
    add: async (req: Request<any, any, ChronoItemUpdateOnlyTextType> & {userId: string, file: Express.Multer.File}, res: Response, next: NextFunction) => {
        try {
            const update = req.body;
            const file = req.file;
            const userId = req.userId;

            const chronoItemUpdated = await chronoService.add(userId, update, file);

            res.json({
                status: 'ok',
                data: chronoItemUpdated,
                message: 'chrono item added'
            });
        } catch (e) {
            next(e)
        }
    },

    //============= DELETE ==============//
    delete: (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            chronoService.delete(id);

            res.json({
                status: 'ok',
                data: null,
                message: 'chrono item delete'
            });
        } catch (e) {
            next(e)
        }
    }

}
