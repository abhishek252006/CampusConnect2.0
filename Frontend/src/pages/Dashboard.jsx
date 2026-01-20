import React, { useState, useEffect } from 'react';
import { Megaphone, Briefcase, Bell, Calendar, GraduationCap } from 'lucide-react';

const Dashboard = () => {
    const [notice, setNotice] = useState("");
    const [placements, setPlacements] = useState([]);
    const [deptUpdate, setDeptUpdate] = useState("");

    // This runs every time the Dashboard opens
    useEffect(() => {
        // 1. Pull the Global Notice
        const savedNotice = localStorage.getItem('campus_notice');
        if (savedNotice) setNotice(savedNotice);

        // 2. Pull the Placement Records
        const savedPlacements = localStorage.getItem('all_placements');
        if (savedPlacements) {
            setPlacements(JSON.parse(savedPlacements));
        }
        const savedDeptUpdate = localStorage.getItem('dept_update');
        if (savedDeptUpdate) setDeptUpdate(savedDeptUpdate);

    }, []);

    return (
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ marginBottom: '30px' }}>
                <h1 style={{ color: '#0f2c4e', marginBottom: '5px' }}>Welcome back, Student!</h1>
                <p style={{ color: '#64748b' }}>Here is what's happening on campus today.</p>
            </div>

            {/* OPTION B: THE GLOBAL NOTICE BAR */}
            {notice && (
                <div style={{
                    backgroundColor: '#fbbf24',
                    padding: '18px 25px',
                    borderRadius: '15px',
                    marginBottom: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    boxShadow: '0 4px 15px rgba(251, 191, 36, 0.2)',
                    animation: 'slideDown 0.5s ease'
                }}>
                    <Megaphone size={24} color="#0f2c4e" />
                    <marquee style={{ fontWeight: '900', color: '#0f2c4e', fontSize: '1.1rem' }}>
                        {notice}
                    </marquee>
                </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>

                {deptUpdate && (
                    <div style={{ padding: '15px', backgroundColor: '#e0f2fe', borderRadius: '12px', marginBottom: '20px', border: '1px solid #bae6fd', color: '#0369a1' }}>
                        <strong>🎓 Faculty Update:</strong> {deptUpdate}
                    </div>
                )}
                {/* LEFT COLUMN: PLACEMENT FEED (Option A) */}
                <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '18px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ marginBottom: '20px', color: '#0f2c4e', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Briefcase color="#fbbf24" /> Latest Career Opportunities
                    </h3>

                    {placements.length > 0 ? (
                        <div style={{ display: 'grid', gap: '15px' }}>
                            {placements.map((job) => (
                                <div key={job.id} style={{
                                    padding: '20px',
                                    backgroundColor: '#f8fafc',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    border: '1px solid #f1f5f9'
                                }}>
                                    <div>
                                        <div style={{ fontWeight: '900', color: '#0f2c4e', fontSize: '1.1rem' }}>{job.company}</div>
                                        <div style={{ color: '#64748b', fontSize: '0.9rem' }}>{job.role}</div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ color: '#166534', fontWeight: '800' }}>{job.package}</div>
                                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Posted: {job.date}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
                            No active placement drives found.
                        </div>
                    )}
                </div>

                {/* RIGHT COLUMN: QUICK STATS */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ backgroundColor: '#0f2c4e', color: 'white', padding: '25px', borderRadius: '18px' }}>
                        <GraduationCap size={32} color="#fbbf24" style={{ marginBottom: '15px' }} />
                        <h4 style={{ margin: '0 0 5px 0' }}>Academic Status</h4>
                        <p style={{ opacity: 0.8, fontSize: '0.85rem' }}>Current Semester: 6th</p>
                        <div style={{ marginTop: '15px', fontSize: '1.5rem', fontWeight: 'bold' }}>8.4 CGPA</div>
                    </div>

                    <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '18px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ color: '#0f2c4e', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Bell size={18} /> Reminders
                        </h4>
                        <ul style={{ padding: 0, margin: 0, listStyle: 'none', fontSize: '0.9rem', color: '#64748b' }}>
                            <li style={{ marginBottom: '10px' }}>• Library book return due</li>
                            <li style={{ marginBottom: '10px' }}>• Fees payment window open</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;