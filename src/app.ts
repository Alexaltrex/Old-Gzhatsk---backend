import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import {rootRouter} from "./routers/rootRouter";
import {errorHandler} from "./middlewares/errorHandler";

const app = express();
const PORT = process.env.PORT || 4447;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    credentials: true,
    origin:
        process.env.NODE_ENV === "production"
            ? ["https://alexaltrex.github.io", "https://next-js-swr-crud.vercel.app"]
            : ["http://localhost:3000", "http://localhost:3001"]
}));

app.use("/api", rootRouter);
app.use(errorHandler);

const start = async () => {
    try {
        app.listen(PORT as number, "localhost", () => console.log(`Server start on PORT = ${PORT}`));
        console.log(process.env.NODE_ENV);
    } catch (e) {
        console.error('Server error', e);
        process.exit(1);
    }
};
start();
