import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="px-6 py-4 flex justify-between items-center">
      <div className="font-bold text-xl">
        <Link to="/" className="font-urbanist">Logo</Link>
      </div>
      
      <div className="flex gap-4">
        <Link to="/" className="hover:bg-sky-400 hover:text-white px-3 py-2 rounded transition-colors">Home</Link>
        
        {isAuthenticated ? (
          <>
            <Link to="/profile" className="hover:bg-sky-400 hover:text-white px-3 py-2 rounded transition-colors">Profile</Link>
            <button onClick={logout} className="hover:bg-sky-400 hover:text-white px-3 py-2 rounded transition-colors">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="hover:bg-sky-400 hover:text-white px-3 py-2 rounded transition-colors">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 