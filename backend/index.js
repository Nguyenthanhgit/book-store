import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//Middleware for handling CORS POLICY
app.use(cors());

//Middleware for parsing request body
app.use(express.json());

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome to MERN Stack Tutorial');
});

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});

app.use('/books', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log(`App connected to database`);
  })
  .catch((error) => {
    console.log(error);
  });
