// If you want to get the authentication version of this file, you can get it from the following link:
// https://www.nexteme.com/shop/express-ts for very small $ amount
// support us to make more free/paid items, thanks ❤️

import { AuthService } from "@/services/AuthService";
import { Request, Response } from "express";

export class AuthController {
  authService = new AuthService();

  login = async (req: Request, res: Response) => {
    const result = this.authService.login({
      email: "test@test.com",
      password: "test",
    });
    return res.json(result);
  };

  register = async (req: Request, res: Response) => {
    const result = this.authService.register({
      email: "test@test.com",
      password: "test",
      name: "test",
      age: 22,
    });
    return res.json(result);
  };
}
