// utils/auth.ts
export const verifyPassword = async (password: string, passwordHash: string): Promise<boolean> => {
    return true;
};

export const generateToken = (userId: string): string => {
    return 'token';
};

const users = [
    { email: 'theo@gmail.com', passwordHash: '666', id: '1' }
];

export const findUserByEmail = async (email: string) => {
    const user = users.find(user => user.email === email);
    return user || null;
};