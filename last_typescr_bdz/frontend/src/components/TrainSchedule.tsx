import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./TrainSchedule.css";
import dayjs from "dayjs";

/*НАПРАВЕНА ВРЪЗКА ОТ BACKEND КЪМ FRONTEND - от МАРИЯ*/
/*ДА НЕ СЕ ПРОМЕНЯ НИЩО ПО ТОЗИ ФАЙЛ - оставила съм в коментар стария код ако нещо ви трябва*/

interface TrainSchedule {
    id_train_schedule: string,
    schedule_train_num: string,
    schedule_departure_date: Date,
    schedule_departure_time: string,
    schedule_arrival_time: string,
    cost: number,
}

const TrainSchedule: React.FC = () => {
    const navigate = useNavigate();
    const [trainSchedule, setTrainSchedule] = useState<TrainSchedule[]>([]);
    const [error] = useState<string | null>(null);

    useEffect(() => {
        const getTrainSchedule = async () => {
            const response = await fetch("http://localhost:3004/api/train_schedule");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: TrainSchedule[] = await response.json();
            console.log(data);
            setTrainSchedule(data);
        };

        getTrainSchedule()
            .catch(error => {
                console.error("Failed to fetch train schedule:", error);
            });
    }, []);



    const formatDate = (date: Date) => {
        return dayjs(date).format('DD.MM.YYYY')
    };

    const handleBook = (schedule_train_num: string) => {
        sessionStorage.setItem('schedule_train_num', schedule_train_num);
        navigate('/ticket');
    };

    return (
        <div className="frame">
            <h2>Available Trains Schedule</h2>
            {error && <p className="error-message">{error}</p>}
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
                {trainSchedule.map((trainSchedule) => (
                    <tr key={trainSchedule.id_train_schedule}>
                        <td>{trainSchedule.schedule_train_num}</td>
                        <td>{formatDate(trainSchedule.schedule_departure_date)}</td>
                        <td>{trainSchedule.schedule_departure_time}</td>
                        <td>{trainSchedule.schedule_arrival_time}</td>
                        <td>{trainSchedule.cost}</td>
                        <td>
                            <button onClick={() => handleBook(trainSchedule.schedule_train_num)}>BOOK IT</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TrainSchedule;


/*import React from 'react';
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

export default TrainSchedule;*/