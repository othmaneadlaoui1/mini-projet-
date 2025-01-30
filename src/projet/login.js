import React, { useState } from 'react';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Récupérer les informations de l'utilisateur depuis localStorage
        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.email === email && user.password === password) {
            setMessage(`Bonjour, ${user.name}!`);
            alert(`Connexion succsfly Bonjour, ${user.name}`);
        } else {
            setMessage('Email ou mot de passe incorrect.');
        }
    };

    return (
        <div className="container">
            <form className="ajouter" onSubmit={handleSubmit}>
                <h1>Connexion</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Se connecter</button>
                {message && <p>{message}</p>}
                <p className="signup-link">
                    Pas encore de compte? <a href="/signup">Inscrivez-vous ici</a>
                </p>
            </form>
        </div>
    );
};

export default Login;