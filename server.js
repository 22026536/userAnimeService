import cookieParser from 'cookie-parser';
import cors from "cors";
import dotenv from 'dotenv';
import express, { json } from 'express';
import mongoose from 'mongoose';
import routerUserAnime from './src/routes/userAnimeRouter.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const app = express();


function corMw(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // Cho phép tất cả các nguồn
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true'); // Cho phép gửi cookie
  if (req.method === 'OPTIONS') {
      return res.sendStatus(200); // Xử lý nhanh cho preflight request
  }
  next();
}
app.use(corMw);
app.use(cors())

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
