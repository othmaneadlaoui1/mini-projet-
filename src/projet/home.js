import React from 'react';
import './home.css'; 

export default function Welcome() {
    return (
        <div className="welcome-container">
            <div className="welcome-box">
                <h1 className="welcome-message">Bienvenue dans votre bibliothèque !</h1>
            </div>
        </div>
    );
}