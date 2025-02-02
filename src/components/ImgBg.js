import React from 'react';
import { Button } from 'react-bootstrap';
import '../src/style/ImgBg.css'; // Ajouter un fichier CSS pour styliser cette section

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="overlay"></div>
            <div className="text-content">
                <h1>Bonjour, je suis John Doe</h1>
                <h3>Développeur web full-stack</h3>
                <Button variant="danger" className="mt-4">En savoir plus</Button>
            </div>
        </div>
    );
};

export default HeroSection;