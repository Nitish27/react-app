import LoginForm from '../components/LoginForm';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const { isAuthenticated } = useAuth();

  // Redirect to profile if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
        <p className="text-gray-300">Please login to continue</p>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage; 