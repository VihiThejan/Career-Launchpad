import { useAuthStore } from '@/store';

export const useAuth = () => {
  const { user, isAuthenticated, setAuth, clearAuth, updateUser } = useAuthStore();

  const login = (user: any, accessToken: string, refreshToken: string) => {
    setAuth(user, accessToken, refreshToken);
  };

  const logout = () => {
    clearAuth();
  };

  const update = (userData: any) => {
    updateUser(userData);
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
    updateUser: update,
  };
};
