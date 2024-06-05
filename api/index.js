import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
