import React from 'react';
import './Ticket.css';

const Ticket: React.FC = () => {
    const name = sessionStorage.getItem('username');
    const phone = sessionStorage.getItem('phone');
    const from = 'Varna';
    const to = sessionStorage.getItem('to') || 'Unknown';
    const trainNumber = sessionStorage.getItem('trainNumber');
    const travelClass = sessionStorage.getItem('travelClass');
    const adults = sessionStorage.getItem('adults');
    const departureDate = sessionStorage.getItem('departureDate');
    const departureTime = '08:00';
    const arrivalTime = '12:00';

    return (
        <div className="frame">
            <h2>Booked Ticket</h2>
            <h3>Ticket's info</h3>
            <table>
                <tbody>
                <tr>
                    <td>Name:</td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>{phone}</td>
                </tr>
                <tr>
                    <td>From:</td>
                    <td>{from}</td>
                </tr>
                <tr>
                    <td>To:</td>
                    <td>{to}</td>
                </tr>
                <tr>
                    <td>Train №:</td>
                    <td>{trainNumber}</td>
                </tr>
                <tr>
                    <td>Travel Class:</td>
                    <td>{travelClass}</td>
                </tr>
                <tr>
                    <td>Adults:</td>
                    <td>{adults}</td>
                </tr>
                <tr>
                    <td>Departure Date:</td>
                    <td>{departureDate}</td>
                </tr>
                <tr>
                    <td>Departure Time:</td>
                    <td>{departureTime}</td>
                </tr>
                <tr>
                    <td>Arrival Time:</td>
                    <td>{arrivalTime}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Ticket;
