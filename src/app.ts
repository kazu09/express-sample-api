import express from 'express'
import morgan from 'morgan'
import { errorHandler } from './errorHandler'
import { startServer } from './startServer';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan('dev'));

app.get('/api/get-data', async (req, res) => {
  console.info("GET /api/get-data")
  res.json({
    id: '110112',
    message: 'Hello Express!!'
  })
})

app.get('/api/error',async (req,res) => {
  throw new Error('Error endpoint')
})

app.use(errorHandler);

startServer(app, PORT).catch(err => console.error("Failed to start server:", err));




