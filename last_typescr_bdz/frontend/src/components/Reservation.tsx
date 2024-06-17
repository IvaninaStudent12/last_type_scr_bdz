import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Reservation.css";
import dayjs from "dayjs";

interface Reservation {
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

interface UserData {
    username: string | null,
    phone: string | null,
    to: string | null,
    schedule_train_num: string | null,
    travelClass: string | null,
    adults: string | null,
    children: string | null,
    departureDate: string | null,
    departure_time: string | null,
    arrival_time: string | null,
    cost: string | null
}

const Reservation: React.FC = () => {
    const navigate = useNavigate();
    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [userData, setUserData] = useState<UserData>({
        username: sessionStorage.getItem('username'),
        phone: sessionStorage.getItem('phone'),
        to: sessionStorage.getItem('to'),
        schedule_train_num: sessionStorage.getItem('schedule_train_num'),
        travelClass: sessionStorage.getItem('travelClass'),
        adults: sessionStorage.getItem('adults'),
        children: sessionStorage.getItem('children'),
        departureDate: sessionStorage.getItem('departureDate'),
        departure_time: sessionStorage.getItem('departure_time'),
        arrival_time: sessionStorage.getItem('arrival_time'),
        cost: sessionStorage.getItem('cost')
    });

    useEffect(() => {
        const getReservation = async () => {
            try {
                const response = await fetch("http://localhost:3004/api/reservations");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: Reservation[] = await response.json();
                setReservations(data);
            } catch (error) {
                console.error("Failed to fetch Reservation:", error);
            }
        };

        getReservation()
            .catch(error => {
                console.error("Failed to fetch Reservation:", error);
            });


        if (!userData.username) {
            setUserData({
                username: sessionStorage.getItem('username'),
                phone: sessionStorage.getItem('phone'),
                to: sessionStorage.getItem('to'),
                schedule_train_num: sessionStorage.getItem('schedule_train_num'),
                travelClass: sessionStorage.getItem('travelClass'),
                adults: sessionStorage.getItem('adults'),
                children: sessionStorage.getItem('children'),
                departureDate: sessionStorage.getItem('departureDate'),
                departure_time: sessionStorage.getItem('departure_time'),
                arrival_time: sessionStorage.getItem('arrival_time'),
                cost: sessionStorage.getItem('cost')
            });
        }
    }, [userData.username]);

    const formatDate = (date: Date | string | null) => {
        return dayjs(date).format('DD.MM.YYYY')

    };

    return (
        <div className="reservation-container">
            <h2>Booked Ticket</h2>
            <h3>Ticket's Info</h3>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Train №</th>
                    <th>Travel Class</th>
                    <th>Adults</th>
                    <th>Children</th>
                    <th>Departure Date</th>
                    <th>Departure Time</th>
                    <th>Arrival Time</th>
                    <th>Cost</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{userData.username}</td>
                    <td>{userData.phone}</td>
                    <td>Varna</td>
                    <td>{userData.to}</td>
                    <td>{userData.schedule_train_num}</td>
                    <td>{userData.travelClass}</td>
                    <td>{userData.adults}</td>
                    <td>{userData.children}</td>
                    <td>{formatDate(userData.departureDate)}</td>
                    <td>{userData.departure_time}</td>
                    <td>{userData.arrival_time}</td>
                    <td>{userData.cost}</td>
                </tr>
                {reservations.map((reservation) => (
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
            <div className="buttons-container">
                <button onClick={() => navigate('/train-schedule')}>Go Back</button>
                <button onClick={() => navigate('/updateinfo')}>Edit Personal Info</button>
            </div>
        </div>
    );
};

export default Reservation;