import cookieParser from 'cookie-parser';
import cors from "cors";
import dotenv from 'dotenv';
import express, { json } from 'express';
import mongoose from 'mongoose';
import routerUserAnime from './src/routes/userAnimeRouter.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const app = express();


app.use(cors({
  origin: 'https://animetangobackend.onrender.com', // Chỉ định frontend được phép
  methods: ['GET', 'POST'], // Cho phép các phương thức GET và POST
}));

app.use(express.urlencoded({ extended: true }));
app.use(json());
app.set('trust proxy', 1);
app.use(cookieParser());
app.use('/useranime', routerUserAnime);

// Kết nối MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Tăng thời gian chờ lên 30 giây
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

const PORT = 3002;
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
