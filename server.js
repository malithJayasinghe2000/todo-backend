import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import taskRouter from './routes/taskRoutes.js';

const app = express();
const port = process.env.PORT || 8001;
connectDB();

const allowedOrigins = ['http://13.60.34.253:3000'];

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}));

///API endpoints
app.get('/', (req, res) => {
    res.send('Hello World!');
    });
app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);
app.use('/api/task',taskRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


