// components/Header.js
import React from 'react';
import headerImage from '../Images/To_Do_List.png';
import '../Styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-container">
            <div className="top-nav"> {/* Змінено div на top-nav */}
                <Link to="/" className="nav-link">Головна</Link>
                <Link to="/about" className="nav-link">Вхідні</Link>
                <Link to="/about" className="nav-link">Додати завдання</Link>
                <Link to="/about" className="nav-link">Фільтри та мітки</Link>
                {/* Add more links as needed */}
            </div>
            <img src={headerImage} alt="Header Background" className="header-image" />
            <div className="header-content">
                <h1>To-Do List</h1>
                <p>Ваш надійний список справ</p>
            </div>
        </div>
    );
};

export default Header;