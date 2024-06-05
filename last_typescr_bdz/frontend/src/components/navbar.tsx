import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/train_transp_logo.png';

const NavBar: React.FC = () => {
    const username = sessionStorage.getItem('username');

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to = "/Home" className="navbarlinks">
                <img src={logo} alt="Train Logo" />
                <span className="title">БДЖ</span>
                </Link>
            </div>
            <div className="login">
                {username ? (
                    <>
                        <span>Welcome, {username}</span>
                        <Link to="/my-tickets">My Tickets</Link>
                    </>
                ) : (
                    <Link to="/login" className="login-link">Login</Link>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
