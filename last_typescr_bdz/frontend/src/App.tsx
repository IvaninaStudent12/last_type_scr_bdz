import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import LoginForm from './components/LoginForm';
import ReservationForm from './components/ReservationForm';
import TrainSchedule from './components/TrainSchedule';
import Ticket from './components/Ticket';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/book-tickets" element={<ReservationForm />} />
                    <Route path="/train-schedule" element={<TrainSchedule />} />
                    <Route path="/ticket" element={<Ticket />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
