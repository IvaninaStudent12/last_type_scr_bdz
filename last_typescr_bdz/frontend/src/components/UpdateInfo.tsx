import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UpdateInfo.css';
import { useUser } from './UserContext';

const UpdateInfo: React.FC = () => {
    const { setUsername, setPhone, setEmail } = useUser();
    const [username, setUsernameState] = useState<string | null>(sessionStorage.getItem('username') || '');
    const [email, setEmailState] = useState<string | null>(sessionStorage.getItem('email') || '');
    const [phone, setPhoneState] = useState<string | null>(sessionStorage.getItem('phone') || '');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setUsername(username);
        setPhone(phone);
        setEmail(email);
        sessionStorage.setItem('username', username || '');
        sessionStorage.setItem('email', email || '');
        sessionStorage.setItem('phone', phone || '');
        navigate('/reservation');
    };

    return (
        <div className="personalInfo-form">
            <h2>Edit Personal Information</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username || ''}
                        onChange={(e) => setUsernameState(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email || ''}
                        onChange={(e) => setEmailState(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Phone</label>
                    <input
                        type="tel"
                        value={phone || ''}
                        onChange={(e) => setPhoneState(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Save</button>
                <button onClick={() => navigate('/train-schedule')}>Train Schedule</button>
            </form>
        </div>
    );
};

export default UpdateInfo;