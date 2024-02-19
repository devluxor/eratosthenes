import 'dotenv/config';
import express from 'express';

import eratosthenes from './controllers/eratosthenes'

const app = express();

app.use('/api/eratosthenes', eratosthenes)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.all('*', (req, res) => {
  res.send('Not found!!')
} )


export default app
