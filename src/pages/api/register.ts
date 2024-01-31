// pages/api/register.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/mongodb';
import User from '../../models/User';

type Data = {
  success: boolean;
  user?: any;  // Замените 'any' на конкретный тип, соответствующий вашей модели пользователя
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const user = await User.create(req.body);
      res.status(201).json({ success: true, user });
    } catch (error) {
      console.log(error); // Добавлено для отладки
      if (error instanceof Error) {
        console.error('Ошибка при создании пользователя:', error.message);
        res.status(500).json({ success: false, error: error.message });
      } else {
        console.error('Неизвестная ошибка');
        res.status(500).json({ success: false, error: 'An unknown error occurred' });
      }
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
