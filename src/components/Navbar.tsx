import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-sky-400 px-6 py-4 flex justify-between items-center">
      <div className="font-bold text-xl text-white">
        <Link to="/" className="font-urbanist">
          <svg class="inline h-8 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
						<rect fill="#ffffff" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)"></rect>
						<path class="plane-take-off" d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "></path>
					</svg>
          <span>Logo</span>
        </Link>
      </div>
      
      <div className="flex gap-4">
        <Link to="/" className="text-white px-3 py-2 rounded transition-colors">Home</Link>
        
        {isAuthenticated ? (
          <>
            <Link to="/profile" className="text-white px-3 py-2 rounded transition-colors">Profile</Link>
            <button onClick={logout} className="text-white px-3 py-2 rounded transition-colors">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="text-white px-3 py-2 rounded transition-colors">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 