import React, { useState, useEffect } from 'react';
import { GraduationCap, Lock, Shield } from 'lucide-react';

const Login = ({ onLogin }) => {
    const [role, setRole] = useState('faculty');

    // This forces the background color on the entire browser window
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).backgroundColor;
        document.documentElement.style.backgroundColor = '#1a2e4c';
        document.body.style.backgroundColor = '#1a2e4c';

        return () => {
            document.documentElement.style.backgroundColor = originalStyle;
            document.body.style.backgroundColor = originalStyle;
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(role);
    };

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1a2e4c',
            backgroundImage: 'radial-gradient(circle at center, #243b55 0%, #1a2e4c 100%)',
            position: 'fixed',
            top: 0,
            left: 0,
            fontFamily: 'sans-serif'
        }}>
            {/* Decorative Crest (Background) */}
            <div style={{
                position: 'absolute',
                opacity: 0.03,
                transform: 'scale(1.5)',
                pointerEvents: 'none'
            }}>
                <Shield size={600} color="white" />
            </div>

            <div style={{
                backgroundColor: 'white',
                padding: '50px 40px',
                borderRadius: '24px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                width: '100%',
                maxWidth: '440px',
                textAlign: 'center',
                position: 'relative',
                zIndex: 10
            }}>
                <h1 style={{ color: '#1a2e4c', fontSize: '2.2rem', fontWeight: '900', margin: '0 0 5px 0' }}>Campus Connect</h1>
                <p style={{ color: '#64748b', marginBottom: '35px', fontWeight: '600', fontSize: '0.9rem' }}>University Management System</p>

                {/* Role Selection */}
                <div style={{
                    display: 'flex', border: '2px solid #fbbf24', borderRadius: '15px',
                    padding: '3px', marginBottom: '30px'
                }}>
                    {['student', 'faculty', 'admin'].map((r) => (
                        <button
                            key={r}
                            type="button"
                            onClick={() => setRole(r)}
                            style={{
                                flex: 1, padding: '12px 0', border: 'none', borderRadius: '12px',
                                cursor: 'pointer', fontWeight: '900', textTransform: 'uppercase',
                                fontSize: '0.8rem', transition: 'all 0.2s ease',
                                backgroundColor: role === r ? '#fbbf24' : 'transparent',
                                color: role === r ? '#1a2e4c' : '#94a3b8'
                            }}
                        >
                            {r}
                        </button>
                    ))}
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ textAlign: 'left', marginBottom: '20px' }}>
                        <label style={{ color: '#1a2e4c', fontWeight: '900', fontSize: '0.8rem', display: 'block', marginBottom: '8px' }}>USER ID</label>
                        <div style={{ position: 'relative' }}>
                            <input type="text" placeholder="Enter your ID" required
                                style={{ width: '100%', padding: '14px 45px 14px 14px', borderRadius: '12px', border: '2px solid #fbbf24', outline: 'none', fontSize: '1rem', boxSizing: 'border-box' }}
                            />
                            <GraduationCap size={20} style={{ position: 'absolute', right: '15px', top: '15px', color: '#1a2e4c' }} />
                        </div>
                    </div>

                    <div style={{ textAlign: 'left', marginBottom: '25px' }}>
                        <label style={{ color: '#1a2e4c', fontWeight: '900', fontSize: '0.8rem', display: 'block', marginBottom: '8px' }}>PASSWORD</label>
                        <div style={{ position: 'relative' }}>
                            <input type="password" placeholder="••••••••" required
                                style={{ width: '100%', padding: '14px 45px 14px 14px', borderRadius: '12px', border: '2px solid #fbbf24', outline: 'none', fontSize: '1rem', boxSizing: 'border-box' }}
                            />
                            <Lock size={20} style={{ position: 'absolute', right: '15px', top: '15px', color: '#1a2e4c' }} />
                        </div>
                    </div>

                    {/* Links and Hidden Logo */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '30px' }}>
                        <div style={{ textAlign: 'left' }}>
                            <a href="#" style={{ display: 'block', color: '#1a2e4c', textDecoration: 'none', fontSize: '0.8rem', fontWeight: '700', marginBottom: '4px' }}>Forgot User ID?</a>
                            <a href="#" style={{ display: 'block', color: '#1a2e4c', textDecoration: 'none', fontSize: '0.8rem', fontWeight: '700' }}>Forgot Password?</a>
                        </div>
                        <Shield size={35} color="#1a2e4c" strokeWidth={2.5} />
                    </div>

                    {/* Added a Visible Login Button */}
                    <button type="submit" style={{
                        width: '100%', padding: '16px', backgroundColor: '#fbbf24', color: '#1a2e4c',
                        border: 'none', borderRadius: '12px', fontWeight: '900', fontSize: '1.1rem',
                        cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px',
                        boxShadow: '0 4px 15px rgba(251, 191, 36, 0.4)'
                    }}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;