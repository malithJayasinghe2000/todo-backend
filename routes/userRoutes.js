import express from 'express';
import userAuth from '../middleware/userAuth.js';
import { getUserData, updateUserData } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/data', userAuth, getUserData);
userRouter.put('/update', userAuth, updateUserData);

export default userRouter;