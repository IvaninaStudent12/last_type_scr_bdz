import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import LoginForm from './components/LoginForm';
import ReservationForm from './components/ReservationForm';
import TrainSchedule from './components/TrainSchedule';
import Ticket from './components/Ticket';
import BackgroundImage from './components/BackgroundImage.tsx';
import Home from './components/Home';
import {NotFound} from "./components/NotFound.tsx";
import { UserProvider } from "./components/UserContext.tsx";


const App: React.FC = () => {
    return (
        <Router>
            <UserProvider>
                <BackgroundImage />
                <div className="App">
                    <NavBar />
                    <Routes>
                        <Route path="*" element={<Home />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/book-tickets" element={<ReservationForm />} />
                        <Route path="/train-schedule" element={<TrainSchedule />} />
                        <Route path="/ticket" element={<Ticket />} />
                        <Route path="/NotFound" element={<NotFound />} />
                    </Routes>
                </div>
            </UserProvider>
        </Router>
    );
};

export default App;
