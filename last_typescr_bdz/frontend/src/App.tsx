import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/navbar';
import LoginForm from './components/LoginForm';
import ReservationForm from './components/ReservationForm';
import TrainSchedule from './components/TrainSchedule';
import Reservation from './components/Reservation.tsx';
import BackgroundImage from './components/BackgroundImage.tsx';
import UpdateInfo from './components/UpdateInfo';
import { NotFound } from "./components/NotFound.tsx";
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
                        <Route path="/reservation" element={<Reservation />} />
                        <Route path="/updateinfo" element={<UpdateInfo />} />
                        <Route path="/NotFound" element={<NotFound />} />
                    </Routes>
                </div>
            </UserProvider>
        </Router>
    );
};

export default App;
