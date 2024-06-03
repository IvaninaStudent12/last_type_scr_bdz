import React from 'react';

interface Train {
    trainNumber: string;
    departureDate: string;
    departureTime: string;
    arrivalTime: string;
    cost: number;
}

interface AvailableTrainsProps {
    trains: Train[];
    onBook: (trainNumber: string) => void;
}

const AvailableTrains: React.FC<AvailableTrainsProps> = ({ trains, onBook }) => {
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
                            <button onClick={() => onBook(train.trainNumber)}>BOOK IT</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AvailableTrains;
