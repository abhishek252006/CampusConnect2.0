import React, { useState } from 'react';
import { Monitor, Book, Video, Coffee, Clock, CheckCircle } from 'lucide-react';

const initialResources = [
    { id: 1, name: "Advanced Computing Lab", type: "Lab", capacity: 40, status: "Available", icon: <Monitor size={24} /> },
    { id: 2, name: "Central Library - Floor 2", type: "Study Space", capacity: 100, status: "Available", icon: <Book size={24} /> },
    { id: 3, name: "Main Seminar Hall", type: "Event Space", capacity: 200, status: "Booked", icon: <Video size={24} /> },
    { id: 4, name: "Digital Innovation Hub", type: "Lab", capacity: 25, status: "Available", icon: <Monitor size={24} /> },
    { id: 5, name: "Student Lounge", type: "Common Area", capacity: 50, status: "Available", icon: <Coffee size={24} /> },
];

const Resources = () => {
    const [resources, setResources] = useState(initialResources);

    const handleBook = (id) => {
        setResources(resources.map(res =>
            res.id === id ? { ...res, status: res.status === "Available" ? "Booked" : "Available" } : res
        ));
    };

    return (
        <div>
            <div style={{ marginBottom: '30px' }}>
                <h1 style={{ color: '#0f2c4e', marginBottom: '5px' }}>Campus Resources</h1>
                <p style={{ color: '#64748b' }}>Check availability and reserve campus facilities.</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '20px'
            }}>
                {resources.map((res) => (
                    <div key={res.id} style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        padding: '24px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <div style={{
                                padding: '12px',
                                backgroundColor: '#f1f5f9',
                                borderRadius: '10px',
                                color: '#0f2c4e'
                            }}>
                                {res.icon}
                            </div>
                            <span style={{
                                padding: '4px 12px',
                                borderRadius: '20px',
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                backgroundColor: res.status === "Available" ? '#dcfce7' : '#fee2e2',
                                color: res.status === "Available" ? '#166534' : '#991b1b',
                                height: 'fit-content'
                            }}>
                                {res.status}
                            </span>
                        </div>

                        <div>
                            <h3 style={{ color: '#0f2c4e', margin: '0 0 8px 0' }}>{res.name}</h3>
                            <div style={{ display: 'flex', gap: '15px', color: '#64748b', fontSize: '0.85rem', marginBottom: '20px' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <Clock size={14} /> 8 AM - 8 PM
                                </span>
                                <span>•</span>
                                <span>Cap: {res.capacity}</span>
                            </div>
                        </div>

                        <button
                            onClick={() => handleBook(res.id)}
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '8px',
                                border: 'none',
                                backgroundColor: res.status === "Available" ? '#0f2c4e' : '#f1f5f9',
                                color: res.status === "Available" ? 'white' : '#64748b',
                                fontWeight: 'bold',
                                cursor: res.status === "Available" ? 'pointer' : 'not-allowed',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                transition: 'all 0.2s'
                            }}
                            disabled={res.status === "Booked"}
                        >
                            {res.status === "Available" ? 'Book Now' : <><CheckCircle size={18} /> Reserved</>}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resources;