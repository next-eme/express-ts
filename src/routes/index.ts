import { Express } from 'express'
import serialRoutes from './serial.routes'

export default function setupRoutes(app: Express) {
    app.use('/serial', serialRoutes)

}