require('dotenv').config();
import express from 'express'
import morgan from 'morgan'
import { errorHandler } from './errorHandler'
import { startServer } from './startServer';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.use('/api', userRoutes);

app.use(errorHandler);

startServer(app, PORT).catch(err => console.error("Failed to start server:", err));

