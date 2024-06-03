import React from 'react';

interface Ticket {
    name: string;
    phone: string;
    from: string;
    to: string;
    trainNumber: string;
    travelClass: string;
    adults: number;
    departureDate: string;
    departureTime: string;
    arrivalTime: string;
}

interface BookedTicketProps {
    ticket: Ticket;
}

const BookedTicket: React.FC<BookedTicketProps> = ({ ticket }) => {
    return (
        <div>
            <h2>Booked Ticket</h2>
            <h3>Ticket's info</h3>
            <table>
                <tbody>
                <tr>
                    <td>Name:</td>
                    <td>{ticket.name}</td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>{ticket.phone}</td>
                </tr>
                <tr>
                    <td>From:</td>
                    <td>{ticket.from}</td>
                </tr>
                <tr>
                    <td>To:</td>
                    <td>{ticket.to}</td>
                </tr>
                <tr>
                    <td>Train №:</td>
                    <td>{ticket.trainNumber}</td>
                </tr>
                <tr>
                    <td>Travel Class:</td>
                    <td>{ticket.travelClass}</td>
                </tr>
                <tr>
                    <td>Adults:</td>
                    <td>{ticket.adults}</td>
                </tr>
                <tr>
                    <td>Departure Date:</td>
                    <td>{ticket.departureDate}</td>
                </tr>
                <tr>
                    <td>Departure Time:</td>
                    <td>{ticket.departureTime}</td>
                </tr>
                <tr>
                    <td>Arrival Time:</td>
                    <td>{ticket.arrivalTime}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BookedTicket;
