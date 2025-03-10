import React from 'react';
import './contact.css';

export default function Contact() {
    return (
        <div className="container">
            <div className="info">
                <h1> Othmane Adlaoui</h1>
                <hr />
                <p>Email : <a href="mailto:othmaneadlaoui@gmail.com">othmaneadlaoui1212@gmail.com</a></p>
                <p>Num : 0644291173</p>
                <p>Adresse : Souk Sebt oulad nemma</p>
            </div>
            <div className="info">
                <h1> Hamza Tijani</h1>
                <hr />
                <p>Email : <a href="mailto:hamzatijani@gmail.com">hamzatijani@gmail.com</a></p>
                <p>Num : 0614929734</p>
                <p>Adresse : Souk Sebt</p>
            </div>
        </div>
    );
}