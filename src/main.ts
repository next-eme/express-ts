import express, { Express } from 'express';
import setupRoutes from '@/routes/index';
import dotenv from 'dotenv';
import Logs from './util/logs';
dotenv.config();

const app: Express = express()
const PORT = process.env.PORT || 3000

setupRoutes(app)

app.listen(PORT, () => {
    new Logs("server").print(`running at http://localhost:${PORT}`)
})