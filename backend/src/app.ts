import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import recipeRoutes from './routes/recipes';

const allowedOrigin = process.env.CLIENT_URL;

const app = express();

app.use(
  cors({
    origin: allowedOrigin,
  }),
);

app.use(express.json());
app.use('/api/recipes', recipeRoutes);

export default app;
