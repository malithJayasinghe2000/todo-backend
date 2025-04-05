import express from 'express';
import { changePassword, isAuthenticated, login, logout, register, resetPassword, sendResetOtp } from '../controllers/authController.js';
import userAuth from '../middleware/userAuth.js';

const authRouter = express.Router();

authRouter.post('/register',register)
authRouter.post('/login',login)
authRouter.post('/logout',logout)
authRouter.get('/is-auth',userAuth,isAuthenticated)
authRouter.post('/send-reset-otp',sendResetOtp)
authRouter.post('/reset-password',resetPassword)
authRouter.post('/change-password',userAuth,changePassword)

export default authRouter;