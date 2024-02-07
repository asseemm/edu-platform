import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';

export function verifyToken(token: string): boolean {
  try {
    jwt.verify(token, SECRET_KEY);
    return true; 
  } catch (error) {
    console.error(error);
    return false; 
  }
}
