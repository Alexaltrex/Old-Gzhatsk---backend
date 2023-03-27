import express from 'express';
import {verificationRegister} from "../middlewares/verificationRegister";
import {authController} from "../controllers/auth.controller";
import {upload} from "../multer/multer";
import {accessTokenHandler} from "../middlewares/accessTokenHandler";

export const authRouter = express.Router();
authRouter.post('/register', [ verificationRegister ], authController.register);
authRouter.post('/login', authController.login);
authRouter.get('/activate/:link', authController.activate);
authRouter.get('/refresh', authController.refresh); // запрос нового access token
authRouter.get('/logout', [ accessTokenHandler ], authController.logout);

authRouter.get('/users', authController.getUsers); // test
authRouter.post('/password', [accessTokenHandler], authController.changePassword);
authRouter.get('/info', [accessTokenHandler], authController.getUserInfo);
authRouter.put('/nickname', [accessTokenHandler], authController.changeNickname);
authRouter.put('/avatar', [accessTokenHandler], upload.single('file'), authController.changeAvatar);
