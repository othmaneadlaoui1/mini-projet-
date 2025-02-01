
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import  './style.css';
import image from './iconbook.png';
import icone from './icone.png';
import Home from './home';
import Contact from './contact'
import './home.css'; 
import Emprunter from './emprunter';
import Ajouter from './ajouter';
import Login from './login';
import Signup from './signup';
import SearchResults from './SearchResults';



export default function App() {
    const [bgColor, setBgColor] = useState('gray');

    const handleImageClick = () => {
        if (bgColor === 'gray') {
            setBgColor('#FFFFFF');
        }
        else {
            setBgColor('gray')
        }
    }
    return (
        <div style={{ backgroundColor: bgColor, minHeight: '100vh', transition: 'background-color 0.3s' }}>
            <Router>
                <>
                    <nav >
                        <ul>
                            <li><img id="img" src={image} alt="Logo" /></li>
                            <li><Link to="/home">HOME</Link></li>
                            <li><Link to="/emprunter">EMPRUNTER</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                            <li>
                                <img onClick={handleImageClick} id="icon" src={icone}  alt="Logo" />
                            </li>
                            <li>
                                <div id="log">
                                  
                                    <button className="btn login"><Link  to="/login">Log in</Link></button>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/emprunter" element={<Emprunter />} />
                        <Route path="/ajouter" element={<Ajouter/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/signup" element={<Signup/>} />
                        <Route path="/search" element={<SearchResults />} />
                        
                    </Routes>
                </>
            </Router>
        </div>
    );
}
