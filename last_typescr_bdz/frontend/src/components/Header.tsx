import React from 'react';
import './navbar.css';  // Добавяме CSS за навигационната лента

interface HeaderProps {
    user: string | null;
    setView: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ user, setView }) => {
    return (
        <header>
            <div className="logo">БДЖ</div>
            <nav>
                <ul>
                    {user ? (
                        <>
                            <li>Welcome, {user}</li>
                            <li><a href="#" onClick={() => setView('schedule')}>Trains Schedule</a></li>
                        </>
                    ) : (
                        <li><a href="#" onClick={() => setView('login')}>Login</a></li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
