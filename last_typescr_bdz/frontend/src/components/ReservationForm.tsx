import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './ReservationForm.css';


const ReservationForm: React.FC = () => {
    const [to, setTo] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [travelClass, setTravelClass] = useState('First');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sessionStorage.setItem('to', to);
        sessionStorage.setItem('departureDate', departureDate);
        sessionStorage.setItem('travelClass', travelClass);
        sessionStorage.setItem('adults', adults.toString());
        sessionStorage.setItem('children', children.toString());
        navigate('/train-schedule');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Book Your Train Tickets Now</h2>
                <div className="form-row">
                    <label>From:</label>
                    <input type="text" value="Varna" readOnly />
                </div>
                <div className="form-row">
                    <label>To:</label>
                    <select value={to} onChange={(e) => setTo(e.target.value)} required>
                        <option value="">Select Destination</option>
                        <option value="Sofia">Sofia</option>
                        <option value="Gorna Orqhovitsa">Gorna Orqhovitsa</option>
                    </select>
                </div>
                <div className="form-row">
                    <label>Departure Date:</label>
                    <input
                        type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-row">
                    <label>Travel Class:</label>
                    <select value={travelClass} onChange={(e) => setTravelClass(e.target.value)}>
                        <option value="First">First</option>
                        <option value="Second">Second</option>
                    </select>
                </div>
                <div className="form-row">
                    <label>Adults:</label>
                    <input
                        type="number"
                        value={adults}
                        onChange={(e) => setAdults(Number(e.target.value))}
                        min="1"
                        required
                    />
                </div>
                <div className="form-row">
                    <label>Children (0-17):</label>
                    <input
                        type="number"
                        value={children}
                        onChange={(e) => setChildren(Number(e.target.value))}
                        min="0"
                        max="17"
                    />
                </div>
                <button type="submit">Търсене</button>
            </form>
        </div>
    );
};

export default ReservationForm;



/*
const ReservationForm: React.FC = () => {
    const [to, setTo] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [travelClass, setTravelClass] = useState('First');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/train-schedule');
    };

    return (
        <div className="loginForm">
         <form onSubmit={handleSubmit}>
            <fieldset>
                <h2>Book Your Train Tickets Now</h2>
                <div className="form-row">
                    <label>From:</label>
                    <input type="text" value="Varna" readOnly />
                </div>
                <div className="form-row">
                    <label>To:</label>
                    <select value={to} onChange={(e) => setTo(e.target.value)} required>
                        <option value="">Select Destination</option>
                        <option value="Sofia">Sofia</option>
                        <option value="Gorna Orqhovitsa">Gorna Orqhovitsa</option>
                    </select>
                </div>
                <div className="form-row">
                    <label>Departure Date:</label>
                    <input
                        type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-row">
                    <label>Travel Class:</label>
                    <select value={travelClass} onChange={(e) => setTravelClass(e.target.value)}>
                        <option value="First">First</option>
                        <option value="Second">Second</option>
                    </select>
                </div>
                <div className="form-row">
                    <label>Adults:</label>
                    <input
                        type="number"
                        value={adults}
                        onChange={(e) => setAdults(Number(e.target.value))}
                        min="1"
                        required
                    />
                </div>
                <div className="form-row">
                    <label>Children (0-17):</label>
                    <input
                        type="number"
                        value={children}
                        onChange={(e) => setChildren(Number(e.target.value))}
                        min="0"
                        max="17"
                    />
                </div>
                <button type="submit">Търсене</button>
            </fieldset>
        </form>
        </div>
    );
};

export default ReservationForm;*/
