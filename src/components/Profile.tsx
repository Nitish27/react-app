import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout, isAuthenticated } = useAuth();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="profile">
      <h2>Profile</h2>
      <div className="profile-info">
        <p><strong>ID:</strong> {user?.id}</p>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>
      <button onClick={logout} className="logout-button">Logout</button>
    </div>
  );
};

export default Profile; 