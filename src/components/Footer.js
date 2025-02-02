import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import pour les liens de navigation
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import des icônes pour les réseaux sociaux
import '../asset/styles/Contact.css';

function Footer() {
    return (
        <footer className="bg-black text-white text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    {/* Section adresse */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Adresse</h5>
                        <address>
                            <p>123 Rue de l'Innovation,</p>
                            <p>62000 Pas-de-calais,</p>
                            <p>France</p>
                        </address>
                        <p>Téléphone :<a href="tel:0606060606">06 06 06 06 06</a></p> {/* retire le lien souligner */}
                        <p>Email : <a href="mailto:contact@monprojet.com" className="text-white">Mon@adressemail.com</a></p>

                        {/* Liens vers les réseaux sociaux, je ne possaide que git hub pas de compte sur les autre reseaux*/}
                        <div className="social-links">
                            <a href="https://github.com/Jeremy-c62" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                                <FaGithub size={30} />
                            </a>
                            <a href="https://www.linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                                <FaLinkedin size={30} />
                            </a>
                            <a href="https://twitter.com/votreprofil" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                                <FaTwitter size={30} />
                            </a>
                        </div>
                    </div>

                    {/* Section menu de navigation */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Menu</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link className="text-white" to="/">Acceuil</Link>
                            </li>
                            <li>
                                <Link className="text-white" to="/Service">Service</Link>
                            </li>
                            <li>
                                <Link className="text-white" to="/Portfolio">Portfolio</Link>
                            </li>
                            <li>
                                <Link className="text-white" to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link className="text-white" to="/Mention">Mention Légales</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Section portfolio */}
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Portfolio</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-white">Projet 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Projet 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Projet 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Projet 4</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Projet 5</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Projet 6</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2025 MonProjet - Tous droits réservés
            </div>
        </footer>
    );
}

export default Footer;