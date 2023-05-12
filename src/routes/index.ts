import { Express } from 'express'
import AuthRoutes from './auth.routes'

export default function setupRoutes(app: Express) {
    app.use('/auth', AuthRoutes)
}