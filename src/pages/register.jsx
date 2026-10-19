import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    if (!username.trim() || !email.trim() || !password.trim()) {
      setMessage('Please fill in all fields.');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const emailExists = existingUsers.some((user) => user.email === email.trim().toLowerCase());

    if (emailExists) {
      setMessage('This email is already registered.');
      return;
    }

    const newUser = {
      username: username.trim(),
      email: email.trim().toLowerCase(),
      password,
    };

    existingUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
    setMessage('Registration successful! Redirecting to login...');

    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <div className="auth-card">
      <h2>Create an account</h2>

      <form onSubmit={handleRegister} className="auth-form">
        <div className="field-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>

        <div className="field-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        <div className="field-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="primary-button">Register</button>
      </form>

      {message && <p className="status-message">{message}</p>}

      <p className="auth-switch">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
