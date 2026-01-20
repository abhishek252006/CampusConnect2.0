import React from 'react';
import { MessageSquare, Users } from 'lucide-react';

const Collaboration = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <MessageSquare size={60} color="#fbbf24" style={{ marginBottom: '20px' }} />
            <h1 style={{ color: '#0f2c4e' }}>Student Collaboration Hub</h1>
            <p style={{ color: '#64748b' }}>Connect with peers for projects and study groups.</p>

            <div style={{ marginTop: '40px', padding: '50px', border: '2px dashed #cbd5e1', borderRadius: '20px' }}>
                <h3>Community Forum Coming Soon</h3>
                <p>We are building a space for you to chat and share resources.</p>
            </div>
        </div>
    );
};

export default Collaboration;