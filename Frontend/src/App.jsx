import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

// Import Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';

// Import Pages
import Dashboard from './pages/Dashboard';
import Academics from './pages/Academics';
import Resources from './pages/Resources';
import PlacementPrep from './pages/PlacementPrep';
import Collaboration from './pages/Collaboration';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import FacultyDashboard from './pages/FacultyDashboard';

// Created a wrapper component to access useNavigate safely inside Router
const AppContent = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleLogin = (role) => {
    const userData = { role: role };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);

    // Redirect based on role
    if (role === 'admin') navigate('/admin');
    else if (role === 'faculty') navigate('/faculty-dashboard');
    else navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  const isLoggedIn = !!user;

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {isLoggedIn && <Sidebar onLogout={handleLogout} userRole={user?.role} />}

      <main style={{
        flex: 1,
        marginLeft: isLoggedIn ? '260px' : '0',
        backgroundColor: '#f8fafc'
      }}>
        {isLoggedIn && <Header />}

        <div style={{ padding: isLoggedIn ? '30px' : '0' }}>
          <Routes>
            {/* 1. Login - Passing handleLogin correctly */}
            <Route path="/login" element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} />

            {/* 2. Logic: Home redirection based on role */}
            <Route path="/" element={
              isLoggedIn ? (
                user?.role === 'admin' ? <Navigate to="/admin" /> :
                  user?.role === 'faculty' ? <Navigate to="/faculty-dashboard" /> :
                    <Dashboard />
              ) : <Navigate to="/login" />
            } />

            {/* 3. Admin Route */}
            <Route path="/admin" element={isLoggedIn && user?.role === 'admin' ? <Admin /> : <Navigate to="/" />} />

            {/* 4. Faculty Route */}
            <Route path="/faculty-dashboard" element={isLoggedIn && user?.role === 'faculty' ? <FacultyDashboard /> : <Navigate to="/" />} />

            {/* 5. Student Pages */}
            <Route path="/academics" element={isLoggedIn && user?.role === 'student' ? <Academics /> : <Navigate to="/" />} />
            <Route path="/resources" element={isLoggedIn && user?.role === 'student' ? <Resources /> : <Navigate to="/" />} />
            <Route path="/profile" element={isLoggedIn && user?.role === 'student' ? <Profile user={user} /> : <Navigate to="/" />} />

            <Route path="/placement-prep" element={isLoggedIn && user?.role === 'student' ? <PlacementPrep /> : <Navigate to="/" />} />
            <Route path="/collab" element={isLoggedIn && user?.role === 'student' ? <Collaboration /> : <Navigate to="/" />} />

            {/* 6. Catch-all */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

// Main App component wraps everything in Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;