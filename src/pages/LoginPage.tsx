import LoginForm from '../components/LoginForm';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const { isAuthenticated } = useAuth();

  // Redirect to profile if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-4">
      <div className="w-full max-w-md text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
        <p>Please login to continue</p>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage; 