// authContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import nookies from 'nookies';

export const AuthContext = createContext({
  isAuthenticated: false,
  login: (token: string) => { },
  logout: () => { }
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (token: string) => {
    nookies.set(undefined, 'authToken', token, { path: '/' });
    setIsAuthenticated(true);
  };

  const logout = () => {
    nookies.destroy(undefined, 'authToken');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
