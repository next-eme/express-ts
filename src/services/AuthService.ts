// If you want to get the authentication version of this file, you can get it from the following link:
// https://www.nexteme.com/shop/express-ts for very small $ amount
// support us to make more free/paid items, thanks ❤️

type LoginParams = {
  email: string;
  password: string;
};

type RegisterParams = LoginParams & {
  name: string;
  age?: number;
};

export class AuthService {
  login({ email, password }: LoginParams) {
    // do some logic...
    return { email, password, token: "123" };
  }
  register(data: RegisterParams) {
    // do some logic...
    return { ...data, token: "123" };
  }
}
