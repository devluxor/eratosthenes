import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import erathosthes from './controllers/erathosthes'

const app = express();

app.use(cors());

app.use('/api/erathosthes', erathosthes)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.all('*', (req, res) => {
  res.send('Not found!!')
} )


export default app
