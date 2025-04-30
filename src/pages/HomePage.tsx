import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="home-page">
      <h1>React Auth Example</h1>
      <p>This is a demo of authentication using React Context API.</p>
      
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
  );
};

export default HomePage; 