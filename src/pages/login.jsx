import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setMessage('Please enter your email and password.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const foundUser = users.find(
      (user) => user.email === email.trim().toLowerCase() && user.password === password
    );

    if (!foundUser) {
      setMessage('Invalid email or password.');
      return;
    }

    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', foundUser.username);
    setMessage(`Welcome back, ${foundUser.username}!`);

    setTimeout(() => {
      navigate('/');
    }, 400);
  };

  return (
    <div className="auth-card">
      <h2>Login</h2>

      <form onSubmit={handleLogin} className="auth-form">
        <div className="field-group">
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="field-group">
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>

        <button type="submit" className="primary-button">Login</button>
      </form>

      {message && <p role="alert" className="status-message">{message}</p>}

      <p className="auth-switch">
        Don&apos;t have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
