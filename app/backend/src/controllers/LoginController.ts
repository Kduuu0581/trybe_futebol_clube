import { Request, Response } from 'express';
import { generateToken } from '../utils/jwtFunctions';
import LoginService from '../services/LoginService';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await LoginService.loginUser(email, password);
  if (!user) {
    return res.status(400).send({ message: 'All fields must be filled' });
  }
  if (user) {
    const token = generateToken(user);
    return res.status(200).json({ token });
  }
};

export default { login };
