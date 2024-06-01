import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Train {
    trainNumber: string;
    departureDate: string;
    departureTime: string;
    arrivalTime: string;
    cost: number;
}

const TrainSchedule: React.FC = () => {
    const navigate = useNavigate();

    const trains: Train[] = [
        { trainNumber: '123', departureDate: '2024-06-05', departureTime: '08:00', arrivalTime: '12:00', cost: 35 },
        { trainNumber: '456', departureDate: '2024-06-05', departureTime: '14:00', arrivalTime: '18:00', cost: 35 },
    ];

    const handleBook = (trainNumber: string) => {
        sessionStorage.setItem('trainNumber', trainNumber);
        navigate('/ticket');
    };

    return (
        <div>
            <h2>Available Trains Schedule</h2>
            <table>
                <thead>
                <tr>
                    <th>Train №</th>
                    <th>Departure Date</th>
                    <th>Departure Time</th>
                    <th>Arrival Time</th>
                    <th>Cost</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {trains.map((train) => (
                    <tr key={train.trainNumber}>
                        <td>{train.trainNumber}</td>
                        <td>{train.departureDate}</td>
                        <td>{train.departureTime}</td>
                        <td>{train.arrivalTime}</td>
                        <td>{train.cost}</td>
                        <td>
                            <button onClick={() => handleBook(train.trainNumber)}>BOOK IT</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TrainSchedule;
