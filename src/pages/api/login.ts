import { NextApiRequest, NextApiResponse } from 'next';
import nookies from 'nookies';
import { verifyPassword, generateToken, findUserByEmail} from '@/utils/auth';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    if (!user) {
      res.status(401).json({ message: 'Пользователь не найден' });
      return;
    }

    const isValid = await verifyPassword(password, user.passwordHash);
    if (!isValid) {
      res.status(401).json({ message: 'Неверный пароль' });
      return;
    }

    const token = generateToken(user.id);

    nookies.set({ res }, 'authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      path: '/',
      maxAge: 30 * 24 * 60 * 60,
    });

    res.status(200).json({ message: 'Успешный вход в систему' });
  } else {
    // Обрабатываем не-POST запросы
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Метод ${req.method} не разрешен` });
  }
};
