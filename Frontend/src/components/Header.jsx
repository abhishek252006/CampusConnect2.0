import React from 'react';
import { Search, Bell, UserCircle } from 'lucide-react';

const Header = () => {
    return (
        <header style={{
            height: '70px',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 30px',
            borderBottom: '1px solid #e2e8f0',
            position: 'sticky',
            top: 0,
            zIndex: 50
        }}>
            {/* Search Bar */}
            <div style={{ position: 'relative', width: '400px' }}>
                <Search style={{ position: 'absolute', left: '12px', top: '10px', color: '#94a3b8' }} size={20} />
                <input
                    type="text"
                    placeholder="Search for faculty, labs, or resources..."
                    style={{
                        width: '100%',
                        padding: '10px 15px 10px 45px',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        backgroundColor: '#f8fafc',
                        outline: 'none'
                    }}
                />
            </div>

            {/* Profile & Notifications */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ position: 'relative', cursor: 'pointer' }}>
                    <Bell size={24} color="#64748b" />
                    <span style={{
                        position: 'absolute',
                        top: '-2px',
                        right: '-2px',
                        backgroundColor: '#ef4444',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        border: '2px solid white'
                    }}></span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                    <div style={{ textAlign: 'right' }}>
                        <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 'bold', color: '#0f2c4e' }}>Bhupendra Chouhan</p>
                        <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b' }}>Student ID: 2024CS01</p>
                    </div>
                    <UserCircle size={35} color="#0f2c4e" />
                </div>
            </div>
        </header>
    );
};

export default Header;