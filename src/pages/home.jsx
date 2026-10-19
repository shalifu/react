import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const username = localStorage.getItem('username') || 'User';

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    navigate('/login', { replace: true });
  };

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="welcome-card">
      <p className="eyebrow">Dashboard</p>
      <h1>Welcome, {username}!</h1>
      <p className="welcome-copy">You have successfully logged in.</p>
      <button type="button" className="secondary-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Home;

