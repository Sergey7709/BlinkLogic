import { ReactNode } from 'react';

export type PropsChildren = { children: ReactNode };

export type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (token: boolean) => void;
};
