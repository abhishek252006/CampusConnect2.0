import React, { useState, useEffect } from 'react';
import { UserPlus, Briefcase, Users, TrendingUp, PlusCircle, Megaphone, Trash2 } from 'lucide-react';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('students');

    // --- SHARED DATA LOGIC ---
    const [notice, setNotice] = useState(localStorage.getItem('campus_notice') || "");
    const [placements, setPlacements] = useState(() => {
        const saved = localStorage.getItem('all_placements');
        return saved ? JSON.parse(saved) : [
            { id: 1, company: "Google", package: "45 LPA", role: "Software Engineer", date: "2024-01-15" }
        ];
    });

    const [formData, setFormData] = useState({ company: '', package: '', role: '' });

    // Save Notice Board
    const handleSaveNotice = () => {
        localStorage.setItem('campus_notice', notice);
        alert("Global Notice Updated!");
    };

    // NEW: Clear Notice Board
    const handleClearNotice = () => {
        setNotice("");
        localStorage.removeItem('campus_notice');
        alert("Notice Board Cleared!");
    };

    // Publish New Placement
    const handleAddPlacement = (e) => {
        e.preventDefault();
        const newEntry = {
            id: Date.now(),
            ...formData,
            date: new Date().toISOString().split('T')[0]
        };
        const updatedList = [newEntry, ...placements];
        setPlacements(updatedList);
        localStorage.setItem('all_placements', JSON.stringify(updatedList));
        setFormData({ company: '', package: '', role: '' });
        alert("Job posted to Student Dashboard!");
    };

    // NEW: Delete a specific placement
    const handleDeletePlacement = (id) => {
        const updatedList = placements.filter(p => p.id !== id);
        setPlacements(updatedList);
        localStorage.setItem('all_placements', JSON.stringify(updatedList));
    };

    return (
        <div>
            <div style={{ marginBottom: '30px' }}>
                <h1 style={{ color: '#0f2c4e', marginBottom: '5px' }}>University Control Center</h1>
                <p style={{ color: '#64748b' }}>Manage campus data, faculty, and placement records.</p>
            </div>

            {/* NOTICE BOARD WITH UPDATE AND CLEAR BUTTONS */}
            <div style={{
                backgroundColor: '#fbbf24', padding: '15px', borderRadius: '12px',
                marginBottom: '25px', display: 'flex', gap: '15px', alignItems: 'center'
            }}>
                <Megaphone size={24} color="#0f2c4e" />
                <input
                    type="text"
                    placeholder="Post a global announcement for students..."
                    value={notice}
                    onChange={(e) => setNotice(e.target.value)}
                    style={{ flex: 1, padding: '12px', borderRadius: '8px', border: 'none', fontWeight: 'bold' }}
                />
                <button
                    onClick={handleSaveNotice}
                    style={{ backgroundColor: '#0f2c4e', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
                >
                    Update
                </button>
                <button
                    onClick={handleClearNotice}
                    style={{ backgroundColor: '#dc2626', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
                >
                    Clear
                </button>
            </div>

            {/* Admin Tabs */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', borderBottom: '1px solid #e2e8f0' }}>
                {['students', 'faculty', 'placements'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            padding: '10px 20px',
                            border: 'none',
                            background: 'none',
                            cursor: 'pointer',
                            color: activeTab === tab ? '#0f2c4e' : '#64748b',
                            borderBottom: activeTab === tab ? '3px solid #fbbf24' : '3px solid transparent',
                            fontWeight: 'bold',
                            textTransform: 'capitalize'
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div style={{ minHeight: '400px' }}>
                {activeTab === 'students' && (
                    <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <h3>Student Directory</h3>
                            <button style={{ backgroundColor: '#0f2c4e', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <UserPlus size={18} /> Add New Student
                            </button>
                        </div>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ textAlign: 'left', borderBottom: '2px solid #f1f5f9', color: '#64748b' }}>
                                    <th style={{ padding: '12px' }}>Name</th>
                                    <th>ID</th>
                                    <th>Course</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '12px' }}>Bhupendra Chouhan</td>
                                    <td>2024CS01</td>
                                    <td>B.Tech CS</td>
                                    <td><span style={{ color: '#166534', backgroundColor: '#dcfce7', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>Active</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'placements' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '25px' }}>
                        {/* FORM TO ADD NEW RECORD */}
                        <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', height: 'fit-content' }}>
                            <h4 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <PlusCircle size={20} color="#fbbf24" /> New Drive
                            </h4>
                            <form onSubmit={handleAddPlacement}>
                                <input
                                    placeholder="Company" required
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                                />
                                <input
                                    placeholder="Package (e.g. 12 LPA)" required
                                    value={formData.package}
                                    onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                                    style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                                />
                                <input
                                    placeholder="Role" required
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                                />
                                <button type="submit" style={{ width: '100%', backgroundColor: '#0f2c4e', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                                    Publish to Dashboard
                                </button>
                            </form>
                        </div>

                        {/* LIST OF PLACEMENTS WITH DELETE BUTTONS */}
                        <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ marginBottom: '20px' }}>Live Placement Feed</h3>
                            {placements.map(p => (
                                <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', borderBottom: '1px solid #f1f5f9' }}>
                                    <div>
                                        <div style={{ fontWeight: 'bold', color: '#0f2c4e' }}>{p.company}</div>
                                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{p.role} • {p.date}</div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <div style={{ fontWeight: 'bold', color: '#166534' }}>{p.package}</div>
                                        <button
                                            onClick={() => handleDeletePlacement(p.id)}
                                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#dc2626', display: 'flex', alignItems: 'center' }}
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'faculty' && (
                    <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <h3>Faculty Directory</h3>
                            <button style={{ backgroundColor: '#0f2c4e', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer' }}>
                                + Add Faculty Member
                            </button>
                        </div>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ textAlign: 'left', borderBottom: '2px solid #f1f5f9', color: '#64748b' }}>
                                    <th style={{ padding: '12px' }}>Name</th>
                                    <th>Department</th>
                                    <th>Designation</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '12px' }}>Dr. Arpit Jain</td>
                                    <td>Computer Science</td>
                                    <td>HOD</td>
                                    <td><span style={{ color: '#166534', backgroundColor: '#dcfce7', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>On Duty</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;