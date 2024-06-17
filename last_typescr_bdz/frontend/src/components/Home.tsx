import React from 'react';
import './LoginForm.css'

export const Home: React.FC = () => {
    return (
        <div className="loginForm">
            <h3>Здравейте, това е уеб страница за запазване на билети за влак!</h3>
            <h3>Всеки от нас имаше равно разпределени задачи като:</h3>
            <h3>Frontend: Иванина и Максим</h3>
            <h3>Backend: Мария</h3>
            <h3>БД: Мария</h3>
            <h3>UI/UX: Иванина</h3>
            <h3>GitHub: Максим</h3>
        </div>
    );
}

export default Home;