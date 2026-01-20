import React, { useState, useEffect } from 'react';
import { Users, BookOpen, Clock, CheckSquare, Send } from 'lucide-react';

const FacultyDashboard = () => {
    const [stats] = useState({
        totalStudents: 120,
        pendingAssignments: 4,
        attendanceRate: "92%"
    });

    const [classNotice, setClassNotice] = useState("");

    const handlePostUpdate = () => {
        // We can save this to a different key so it's "Departmental"
        localStorage.setItem('dept_update', classNotice);
        alert("Update sent to your students!");
        setClassNotice("");
    };

    return (
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ marginBottom: '30px' }}>
                <h1 style={{ color: '#0f2c4e', marginBottom: '5px' }}>Faculty Portal</h1>
                <p style={{ color: '#64748b' }}>Department of Computer Science & Engineering</p>
            </div>

            {/* Quick Stats Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ padding: '10px', backgroundColor: '#e0f2fe', borderRadius: '10px' }}><Users color="#0284c7" /></div>
                    <div><div style={{ fontSize: '0.85rem', color: '#64748b' }}>My Students</div><div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{stats.totalStudents}</div></div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ padding: '10px', backgroundColor: '#fef3c7', borderRadius: '10px' }}><CheckSquare color="#d97706" /></div>
                    <div><div style={{ fontSize: '0.85rem', color: '#64748b' }}>Grading Pending</div><div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{stats.pendingAssignments}</div></div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ padding: '10px', backgroundColor: '#dcfce7', borderRadius: '10px' }}><Clock color="#16a34a" /></div>
                    <div><div style={{ fontSize: '0.85rem', color: '#64748b' }}>Avg. Attendance</div><div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{stats.attendanceRate}</div></div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px' }}>
                {/* Post Class Update */}
                <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '18px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ marginBottom: '20px', color: '#0f2c4e', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Send size={20} color="#fbbf24" /> Post Class Announcement
                    </h3>
                    <textarea
                        value={classNotice}
                        onChange={(e) => setClassNotice(e.target.value)}
                        placeholder="E.g. Tomorrow's Lab is shifted to Room 402..."
                        style={{ width: '100%', height: '120px', padding: '15px', borderRadius: '12px', border: '1px solid #cbd5e1', outline: 'none', marginBottom: '15px', fontFamily: 'inherit' }}
                    />
                    <button
                        onClick={handlePostUpdate}
                        style={{ backgroundColor: '#0f2c4e', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
                    >
                        Share with Class
                    </button>
                </div>

                {/* Upcoming Lectures */}
                <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '18px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ marginBottom: '20px', color: '#0f2c4e' }}>Today's Schedule</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ padding: '10px', borderLeft: '4px solid #fbbf24', backgroundColor: '#fffbeb' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Data Structures</div>
                            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>10:30 AM - Room 102</div>
                        </div>
                        <div style={{ padding: '10px', borderLeft: '4px solid #0f2c4e', backgroundColor: '#f8fafc' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Operating Systems</div>
                            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>02:00 PM - Lab 01</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultyDashboard;