import {Request, Response, Router} from "express";
import {authRouter} from "./auth.router";
import {locationRouter} from "./bricks/location.router";
import {markRouter} from "./bricks/mark.router";
import {brickRouter} from "./bricks/brick.router";
import {chronoRouter} from "./chrono.router";
import {bookRouter} from "./book.router";
import {cemeteryRouter} from "./cemetery.router";
import {mapRouter} from "./mapRouter";

export const rootRouter = Router();
rootRouter.get("/", (req: Request, res: Response) => {
    res.json("old gzhatsk api")
});
rootRouter.use('/auth', authRouter);
rootRouter.use('/bricks/location', locationRouter);
rootRouter.use('/bricks/mark', markRouter);
rootRouter.use('/bricks/brick', brickRouter);
rootRouter.use('/chrono', chronoRouter);
rootRouter.use('/book', bookRouter);
rootRouter.use('/cemetery', cemeteryRouter);
rootRouter.use('/map', mapRouter);
