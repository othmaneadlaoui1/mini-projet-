
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import style from './style.css';
import image from './iconbook.png';
import icone from './icone.png';
import Home from './home';
import Contact from './contact'
import './home.css'; 
import Emprunter from './emprunter';
import Ajouter from './ajouter';



export default function App() {
    const [bgColor, setBgColor] = useState('#282A35');

    const handleImageClick = () => {
        if (bgColor === '#282A35') {
            setBgColor('#FFFFFF');
        }
        else {
            setBgColor('#282A35')
        }
    }
    return (
        <div style={{ backgroundColor: bgColor, minHeight: '100vh', transition: 'background-color 0.3s' }}>
            <Router>
                <>
                    <nav>
                        <ul>
                            <li><img id="img" src={image} alt="Logo" /></li>
                            <li><Link to="/home">HOME</Link></li>
                            <li><Link to="/emprunter">EMPRUNTER</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                            <li>
                                <img onClick={handleImageClick} id="icon" src={icone} />
                            </li>
                            <li>
                                <div id="log">
                                    <button className="btn signup">Sign Up</button>
                                    <button className="btn login">Log in</button>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/emprunter" element={<Emprunter />} />
                        <Route path="/ajouter" element={<Ajouter/>} />
                        <Route path="/" element={''} />
                    </Routes>
                </>
            </Router>
        </div>
    );
}
