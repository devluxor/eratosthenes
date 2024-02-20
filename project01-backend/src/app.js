import 'dotenv/config';
import express from 'express';
import cors from 'cors'
import router from './controllers/router'
import { unknownEndpoint } from './utils/middleware'

const app = express();
app.use(cors())

app.use('/api/eratosthenes', router)

app.use('*', unknownEndpoint)

export default app
