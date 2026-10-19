import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <nav className="topbar">
          <Link to="/" className="brand-link">MyApp</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
