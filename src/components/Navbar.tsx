import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-blue-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="font-bold text-xl">
        <Link to="/" className="text-white">React Auth Demo</Link>
      </div>
      
      <div className="flex gap-4">
        <Link to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded transition-colors">Home</Link>
        
        {isAuthenticated ? (
          <>
            <Link to="/profile" className="text-white hover:bg-blue-700 px-3 py-2 rounded transition-colors">Profile</Link>
            <button onClick={logout} className="text-white hover:bg-blue-700 px-3 py-2 rounded transition-colors">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="text-white hover:bg-blue-700 px-3 py-2 rounded transition-colors">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 