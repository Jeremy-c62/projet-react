import React from 'react';
import '../asset/styles/Acceuil.css'; // Import du fichier CSS
import BackgroundImage from '../asset/images/hero-bg.jpg'; // Import direct de l'image
import Image from "../asset/images/john-doe-about.jpg";

function HomePage() {
    return (
        <div>
            {/* Section Hero */}
            <section className="hero-section" style={{ backgroundImage: `url(${BackgroundImage})` }}>
                <h1 className="hero-title">Bonjour, je suis Jérémy Cochez</h1>
                <h2 className="hero-subtitle">Développeur web full stack</h2>
                <button className="hero-button">En savoir plus</button>
            </section>

            {/* Section A propos et compétences */}
            <section className="about-section">
                <div className="about-container">
                    {/* A propos */}
                    <div className="about-content">
                        <h3>A propos</h3>
                        <img src={Image} alt="Un Homme brun concentré" className="about-image" />
                        <p>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <p>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <p>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>

                    {/* Compétences */}
                    <div className="skills-content">
                        <h3>Mes compétences</h3>

                        <div className="progress-wrapper mb-6">
                            <p className='Competence'>HTML5 90%</p>
                            <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }}>
                                    90%
                                </div>
                            </div>
                        </div>

                        <div className="progress-wrapper mb-6">
                            <p className='Competence'>CSS3 80%</p>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '80%' }}>
                                    80%
                                </div>
                            </div>
                        </div>

                        <div className="progress-wrapper mb-6">
                            <p className='Competence'>JAVASCRIPT 70%</p>
                            <div className="progress">
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }}>
                                    70%
                                </div>
                            </div>
                        </div>

                        <div className="progress-wrapper mb-6">
                            <p className='Competence'>PHP 60%</p>
                            <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '60%' }}>
                                    60%
                                </div>
                            </div>
                        </div>

                        <div className="progress-wrapper mb-6">
                            <p className='Competence'>REACT 50%</p>
                            <div className="progress">
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }}>
                                    50%
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;