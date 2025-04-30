import { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the auth context value
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

// Define user type
interface User {
  id: string;
  email: string;
  name: string;
}

// Create the context with an initial undefined value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  // Check if user is authenticated
  const isAuthenticated = !!user;

  // Mock login function - in a real app, this would call an API
  const login = async (email: string, password: string) => {
    // Simulate API call with credentials
    console.log(`Attempting login with email: ${email} and password: ${password}`);
    
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        // Mock successful login
        const mockUser: User = {
          id: '1',
          email,
          name: 'Test User',
        };
        setUser(mockUser);
        // Store auth token in localStorage
        localStorage.setItem('auth_token', 'mock_token');
        resolve();
      }, 1000);
    });
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_token');
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 