import { Request, Response, NextFunction } from 'express';

const validateUserLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const regex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (!regex.test(email) || password.length < 6) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
};

export default validateUserLogin;
