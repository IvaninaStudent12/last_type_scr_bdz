import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./TrainSchedule.css";
// import dayjs from "dayjs";

interface TrainSchedule {
    id_train_schedule: string;
    schedule_train_num: string;
   /* schedule_departure_date: Date; */
    schedule_departure_time: string;
    schedule_arrival_time: string;
    cost: number;
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

    // const formatDate = (date: Date) => {
    //     return dayjs(date).format('DD.MM.YYYY');
    // };

    const handleBook = (train: TrainSchedule) => {
        sessionStorage.setItem('schedule_train_num', train.schedule_train_num);
        sessionStorage.setItem('departure_time', train.schedule_departure_time);
        sessionStorage.setItem('arrival_time', train.schedule_arrival_time);
        sessionStorage.setItem('cost', train.cost.toString());
        navigate('/reservation');
    };

    return (
        <div className="schedule-frame">
            <h2>Available Trains Schedule</h2>
            {error && <p className="error-message">{error}</p>}
            <table>
                <thead>
                <tr>
                    <th>Train №</th>
                    {/*<th>Departure Date</th> */}
                    <th>Departure Time</th>
                    <th>Arrival Time</th>
                    <th>Cost</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {trainSchedule.map((train) => (
                    <tr key={train.id_train_schedule}>
                        <td>{train.schedule_train_num}</td>
                        {/*<td>{formatDate(train.schedule_departure_date)}</td>*/}
                        <td>{train.schedule_departure_time}</td>
                        <td>{train.schedule_arrival_time}</td>
                        <td>{train.cost}</td>
                        <td>
                            <button onClick={() => handleBook(train)}>BOOK IT</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TrainSchedule;