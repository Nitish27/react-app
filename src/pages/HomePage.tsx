import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="home-page p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-4">React Auth Example</h1>
          <p className="mb-4">This is a demo of authentication using React Context API.</p>
          
          <div className="auth-status">
            {isAuthenticated ? (
              <div>
                <p>Welcome, {user?.name}!</p>
                <Link to="/profile">View Profile</Link>
              </div>
            ) : (
              <div>
                <p>You are not logged in.</p>
                <Link to="/login">Login</Link>
              </div>
            )}
          </div>
        </div>
        <div>
          <img
            src="/images/hero.png"
            alt="Placeholder"
            className="ml-4 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage; 