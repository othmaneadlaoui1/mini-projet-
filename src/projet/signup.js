import React, { useState } from 'react';
import './signup.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Stocker l'informaiton de l'utilisateur dans localStorage
        localStorage.setItem('user', JSON.stringify({ name, email, password }));
        
        // Afficher une alerte de succès
        alert('Inscription réussie !');
        
        // Réinitialiser les champs du formulaire
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="container">
            <form className="ajouter" onSubmit={handleSubmit}>
                <h1>Inscription</h1>
                <input
                    type="text"
                    placeholder="Nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
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
                <button type="submit">S'inscrire</button>
                <p className="login-link">
                    Déjà un compte? <a href="/login">Connectez-vous ici</a>
                </p>
            </form>
        </div>
    );
};

export default Signup;