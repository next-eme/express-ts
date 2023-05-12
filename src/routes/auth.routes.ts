import { Request, Response } from "express"

const express = require('express')
const router = express.Router()

router.post('/login', (req: Request, res: Response) => {
    res.send('Login...')
})

router.post('/register', (req: Request, res: Response) => {
    res.send('Creating Account..')
})

export default router