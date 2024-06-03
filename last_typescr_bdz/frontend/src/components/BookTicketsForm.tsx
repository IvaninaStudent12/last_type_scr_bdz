import React, { useState } from 'react';

interface BookTicketsFormProps {
    onSearch: (from: string, to: string, departureDate: string, travelClass: string, adults: number, children: number) => void;
}

const BookTicketsForm: React.FC<BookTicketsFormProps> = ({ onSearch }) => {
    const [from] = useState('Varna');
    const [to, setTo] = useState('Sofia');
    const [departureDate, setDepartureDate] = useState('');
    const [travelClass, setTravelClass] = useState('First');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(from, to, departureDate, travelClass, adults, children);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Book Your Train Tickets Now</h2>
            <div>
                <label>From:</label>
                <input type="text" value={from} readOnly />
            </div>
            <div>
                <label>To:</label>
                <select value={to} onChange={(e) => setTo(e.target.value)}>
                    <option value="Sofia">Sofia</option>
                    <option value="Gorna Orqhovitsa">Gorna Orqhovitsa</option>
                </select>
            </div>
            <div>
                <label>Departure Date:</label>
                <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Travel Class:</label>
                <select value={travelClass} onChange={(e) => setTravelClass(e.target.value)}>
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                </select>
            </div>
            <div>
                <label>Adults:</label>
                <input
                    type="number"
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    min="1"
                    required
                />
            </div>
            <div>
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
    );
};

export default BookTicketsForm;
