import React, { useEffect, useState } from 'react';
import "./Ticket.css";
import dayjs from "dayjs";

interface Reservation{
    id_reservations: number,
    name: string,
    phone: string,
    train_from: string,
    train_to: string,
    travel_class: string,
    adults: number,
    train_num: string,
    departure_date: Date,
    departure_time: string,
    arrival_time: string
}

const Reservation: React.FC = () => {
    const [reservation, setReservation] = useState<Reservation[]>([]);

    useEffect(() => {
        const getReservation = async () => {
            const response = await fetch("http://localhost:3004/api/reservations");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: Reservation[] = await response.json();
            console.log(data);
            setReservation(data);
        };

        getReservation()
            .catch(error => {
                console.error("Failed to fetch Reservation:", error);
            });
    }, []);

    const formatDate = (date: Date) => {
        return dayjs(date).format('DD.MM.YYYY')
    };

    /*Това не Работи - да се оправи от къде да се взимат нещата*)/
     */
    // const Ticket: React.FC = () => {
// //     const name = sessionStorage.getItem('username');
// //     const phone = sessionStorage.getItem('phone');
// //     const train_from = 'Varna';
// //     const train_to = sessionStorage.getItem('to') || 'Unknown';
// //     const train_num = sessionStorage.getItem('trainNumber');
// //     const travel_class = sessionStorage.getItem('travelClass');
// //     const adults = sessionStorage.getItem('adults');
// //     const departure_date = sessionStorage.getItem('departureDate');
// //     const departure_time = '08:00';
// //     const arrival_time = '12:00';

    return (
        <div>
            <h2>Booked Ticket</h2>
            <h3>Ticket's info</h3>
            <table>
                <thead>
                <tr>
                    <th>Name:</th>
                    <th>Phone:</th>
                    <th>From:</th>
                    <th>To:</th>
                    <th>Train №:</th>
                    <th>Travel Class:</th>
                    <th>Adults:</th>
                    <th>Departure Date:</th>
                    <th>Departure Time:</th>
                    <th>Arrival Time:</th>
                </tr>
                </thead>
                <tbody>
                {reservation.map((reservation) => (
                    <tr key={reservation.id_reservations}>
                        <td>{reservation.name}</td>
                        <td>{reservation.phone}</td>
                        <td>{reservation.train_from}</td>
                        <td>{reservation.train_to}</td>
                        <td>{reservation.train_num}</td>
                        <td>{reservation.travel_class}</td>
                        <td>{reservation.adults}</td>
                        <td>{formatDate(reservation.departure_date)}</td>
                        <td>{reservation.departure_time}</td>
                        <td>{reservation.arrival_time}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Reservation;

/*В коментар оставям стария код*/
/* import React from 'react';

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
        <div>
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

export default Ticket;*/