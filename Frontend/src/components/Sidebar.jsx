import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    BookOpen,
    Layers,
    User,
    LogOut,
    ShieldCheck,
    Briefcase,
    Users,
    MessageSquare
} from 'lucide-react';

const Sidebar = ({ onLogout, userRole }) => {

    // Define navigation based on roles
    const menuItems = {
        student: [
            { path: '/', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
            { path: '/academics', name: 'Academics', icon: <BookOpen size={20} /> },
            { path: '/placement-prep', name: 'Placement Prep', icon: <Briefcase size={20} />, mvp: true },
            { path: '/collab', name: 'Collaboration', icon: <MessageSquare size={20} />, mvp: true },
            { path: '/resources', name: 'Resources', icon: <Layers size={20} /> },
            { path: '/profile', name: 'Profile', icon: <User size={20} /> },
        ],
        faculty: [
            { path: '/faculty-dashboard', name: 'Faculty Portal', icon: <LayoutDashboard size={20} /> },
            { path: '/my-students', name: 'My Students', icon: <Users size={20} /> },
            { path: '/profile', name: 'Profile', icon: <User size={20} /> },
        ],
        admin: [
            { path: '/admin', name: 'Control Center', icon: <ShieldCheck size={20} /> },
        ]
    };

    const currentMenu = menuItems[userRole] || [];

    return (
        <div style={{
            width: '260px',
            backgroundColor: '#0f2c4e', // Your Navy Blue
            color: 'white',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            display: 'flex',
            flexDirection: 'column',
            padding: '20px'
        }}>
            <div style={{ marginBottom: '40px', padding: '10px' }}>
                <h2 style={{ color: '#fbbf24', margin: 0 }}>Campus Connect</h2>
                <p style={{ fontSize: '0.75rem', opacity: 0.7 }}>{userRole?.toUpperCase()} PORTAL</p>
            </div>

            <nav style={{ flex: 1 }}>
                {currentMenu.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        style={({ isActive }) => ({
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px 15px',
                            color: isActive ? '#0f2c4e' : 'white',
                            backgroundColor: isActive ? '#fbbf24' : 'transparent',
                            textDecoration: 'none',
                            borderRadius: '10px',
                            marginBottom: '8px',
                            fontWeight: '700',
                            transition: 'all 0.2s ease',
                            position: 'relative'
                        })}
                    >
                        {item.icon}
                        {item.name}
                        {item.mvp && (
                            <span style={{
                                fontSize: '0.6rem',
                                backgroundColor: '#ef4444',
                                color: 'white',
                                padding: '2px 6px',
                                borderRadius: '10px',
                                marginLeft: 'auto',
                                fontWeight: '900'
                            }}>NEW</span>
                        )}
                    </NavLink>
                ))}
            </nav>

            <button
                onClick={onLogout}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 15px',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'white',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: '700',
                    marginTop: 'auto'
                }}
            >
                <LogOut size={20} /> Logout
            </button>
        </div>
    );
};

export default Sidebar;