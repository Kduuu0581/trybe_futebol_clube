import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || '';

function generateToken(param: object) {
  const jwtConfig = jwt.sign(param, secret, { algorithm: 'HS256', expiresIn: '1d' });
  return jwtConfig;
}

function verifyToken(token: string) {
  const verify = jwt.verify(token, secret);
  return verify;
}

export { generateToken, verifyToken };
