import React, { useState, useEffect } from 'react';
import { Briefcase, Target, FileText } from 'lucide-react';

const PlacementPrep = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const savedJobs = JSON.parse(localStorage.getItem('all_placements') || '[]');
        setJobs(savedJobs);
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ color: '#0f2c4e' }}>Placement Preparation</h1>
            <p style={{ color: '#64748b' }}>Master your interviews and track active drives.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
                {/* Active Jobs Feed */}
                <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0f2c4e' }}>
                        <Target color="#fbbf24" /> Active Job Openings
                    </h3>
                    <div style={{ marginTop: '20px' }}>
                        {jobs.map(job => (
                            <div key={job.id} style={{ padding: '15px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>{job.company}</div>
                                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{job.role}</div>
                                </div>
                                <div style={{ color: '#166534', fontWeight: 'bold' }}>{job.package}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Study Material Placeholder */}
                <div style={{ backgroundColor: '#0f2c4e', color: 'white', padding: '25px', borderRadius: '15px' }}>
                    <h3><FileText color="#fbbf24" /> Prep Resources</h3>
                    <ul style={{ marginTop: '20px', listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '15px' }}>📚 Data Structures Handbook</li>
                        <li style={{ marginBottom: '15px' }}>💻 SQL Mock Test</li>
                        <li style={{ marginBottom: '15px' }}>🤝 HR Interview Tips</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PlacementPrep;