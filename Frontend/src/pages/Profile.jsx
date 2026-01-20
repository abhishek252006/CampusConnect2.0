import React from 'react';
import { User, Mail, Phone, MapPin, Award, Edit } from 'lucide-react';

const Profile = () => {
    const student = {
        name: "Bhupendra Chouhan",
        id: "2024CS01",
        email: "bhupendra@campus.edu",
        phone: "+91 98765 43210",
        address: "Indore, Madhya Pradesh",
        course: "B.Tech in Computer Science",
        semester: "4th Semester",
        achievements: ["Dean's List 2024", "Hackathon Winner", "IEEE Member"]
    };

    return (
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Header Profile Section */}
            <div style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '40px',
                textAlign: 'center',
                border: '1px solid #e2e8f0',
                marginBottom: '30px',
                position: 'relative'
            }}>
                <button style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}>
                    <Edit size={20} />
                </button>

                <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bhupendra"
                    alt="Profile"
                    style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#f1f5f9', marginBottom: '15px' }}
                />
                <h2 style={{ color: '#0f2c4e', margin: '0' }}>{student.name}</h2>
                <p style={{ color: '#fbbf24', fontWeight: 'bold', margin: '5px 0' }}>{student.course}</p>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Student ID: {student.id}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                {/* Contact Information */}
                <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ marginTop: 0, color: '#0f2c4e', marginBottom: '20px' }}>Contact Details</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#334155' }}>
                            <Mail size={18} color="#64748b" /> {student.email}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#334155' }}>
                            <Phone size={18} color="#64748b" /> {student.phone}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#334155' }}>
                            <MapPin size={18} color="#64748b" /> {student.address}
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ marginTop: 0, color: '#0f2c4e', marginBottom: '20px' }}>Achievements</h3>
                    {student.achievements.map((award, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            backgroundColor: '#f8fafc',
                            padding: '10px',
                            borderRadius: '8px',
                            marginBottom: '10px',
                            color: '#0f2c4e',
                            fontSize: '0.9rem'
                        }}>
                            <Award size={18} color="#fbbf24" /> {award}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;