import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import pour les liens de navigation
import { HashLink } from 'react-router-hash-link'; // Import HashLink pour les ancres sur d'autres pages
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
                        <p className="phoneNumber">Téléphone :<a href="tel:0606060606">06 06 06 06 06</a></p>
                        <p>Email : <a href="mailto:contact@monprojet.com" className="text-white">Mon@adressemail.com</a></p>

                        {/* Liens vers les réseaux sociaux */}
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
                                <Link className="text-white" to="/">Accueil</Link>
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
                                <HashLink smooth className="text-white" to="/Portfolio#fresh-food">
                                    Fresh Food
                                </HashLink>
                            </li>
                            <li>
                                <HashLink smooth className="text-white" to="/Portfolio#restaurant-akira">
                                    Restaurant Akira
                                </HashLink>
                            </li>
                            <li>
                                <HashLink smooth className="text-white" to="/Portfolio#espace-bien-etre">
                                    Espace bien-être
                                </HashLink>
                            </li>
                            <li>
                                <HashLink smooth className="text-white" to="/Portfolio#seo">
                                    SEO
                                </HashLink>
                            </li>
                            <li>
                                <HashLink smooth className="text-white" to="/Portfolio#creation-api">
                                    Création d'API
                                </HashLink>
                            </li>
                            <li>
                                <HashLink smooth className="text-white" to="/Portfolio#maquette-site-web">
                                    Maquette d'un site web
                                </HashLink>
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