import { AuthController } from "@/controllers/AuthController"
import express from "express"
const router = express.Router()

const authController = new AuthController()

router.post('/login', authController.login)
router.post('/register',  authController.register)

export default router