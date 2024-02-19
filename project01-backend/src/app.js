import 'dotenv/config';
import express from 'express';
import cors from 'cors'
import eratosthenes from './controllers/router'

const app = express();
app.use(cors())
app.use('/api/eratosthenes', eratosthenes)

app.get('/', (req, res) => {
  res.send('Please, use the endpoint /api/eratosthenes/:n to get the median of the primes <= n');
});

app.all('*', (req, res) => {
  res.status(404).send('Resource Not Found!!')
} )

export default app
