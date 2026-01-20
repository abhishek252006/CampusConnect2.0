import React, { useState } from 'react';
import { User, Mail, GraduationCap, Filter } from 'lucide-react';

const facultyData = [
    { id: 1, name: "Dr. Aruna Pathak", dept: "Computer Science", role: "HOD", email: "aruna.p@campus.edu", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aruna" },
    { id: 2, name: "Prof. Rajesh Kumar", dept: "Computer Science", role: "Asst. Professor", email: "rajesh.k@campus.edu", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh" },
    { id: 3, name: "Dr. S. K. Sharma", dept: "Electronics", role: "Professor", email: "sk.sharma@campus.edu", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sharma" },
    { id: 4, name: "Ms. Priya Singh", dept: "Electronics", role: "Lecturer", email: "priya.s@campus.edu", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" },
];

const Academics = () => {
    const [filter, setFilter] = useState('All');

    const filteredFaculty = filter === 'All'
        ? facultyData
        : facultyData.filter(f => f.dept === filter);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <div>
                    <h1 style={{ color: '#0f2c4e', marginBottom: '5px' }}>Academics</h1>
                    <p style={{ color: '#64748b' }}>Manage departments and view faculty profiles.</p>
                </div>

                {/* Filter Buttons */}
                <div style={{ display: 'flex', gap: '10px', backgroundColor: '#e2e8f0', padding: '5px', borderRadius: '8px' }}>
                    {['All', 'Computer Science', 'Electronics'].map((dept) => (
                        <button
                            key={dept}
                            onClick={() => setFilter(dept)}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '6px',
                                border: 'none',
                                cursor: 'pointer',
                                backgroundColor: filter === dept ? 'white' : 'transparent',
                                color: filter === dept ? '#0f2c4e' : '#64748b',
                                fontWeight: filter === dept ? 'bold' : 'normal',
                                boxShadow: filter === dept ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
                                transition: 'all 0.3s'
                            }}
                        >
                            {dept}
                        </button>
                    ))}
                </div>
            </div>

            {/* Faculty Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '25px'
            }}>
                {filteredFaculty.map((faculty) => (
                    <div key={faculty.id} style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        padding: '20px',
                        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                        border: '1px solid #e2e8f0',
                        textAlign: 'center'
                    }}>
                        <img
                            src={faculty.image}
                            alt={faculty.name}
                            style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '15px', backgroundColor: '#f1f5f9' }}
                        />
                        <h3 style={{ color: '#0f2c4e', margin: '0 0 5px 0' }}>{faculty.name}</h3>
                        <p style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: '0.85rem', margin: '0 0 15px 0' }}>{faculty.role}</p>

                        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '15px', marginTop: '15px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b', fontSize: '0.9rem', marginBottom: '8px' }}>
                                <GraduationCap size={18} /> <span>{faculty.dept}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b', fontSize: '0.9rem' }}>
                                <Mail size={18} /> <span>{faculty.email}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Academics;