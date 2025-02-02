import React from 'react';
import '../src/style/Footer.css'; // Fichier CSS pour le footer

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-4 pb-4">
            <div className="container">
                <div className="row">
                    {/* Colonne adresse */}
                    <div className="col-md-4">
                        <h5>John Doe</h5>
                        <p>40 rue Lorem Ipsum, 60000 Ville</p>
                        <p>Email: johndoe@gmail.com</p>
                        <p>Téléphone: 123-456-7890</p>
                    </div>

                    {/* Liens utiles */}
                    <div className="col-md-4">
                        <h5>Liens utiles</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white">Accueil</a></li>
                            <li><a href="/services" className="text-white">Services</a></li>
                            <li><a href="/portfolio" className="text-white">Portfolio</a></li>
                            <li><a href="/contact" className="text-white">Contact</a></li>
                            <li><a href="/mentions-legales" className="text-white">Mentions légales</a></li>
                        </ul>
                    </div>

                    {/* Réalisations */}
                    <div className="col-md-4">
                        <h5>Mes dernières réalisations</h5>
                        <p>Création d'une API</p>
                        <p>Maquette d'un site web</p>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <p>&copy; 2025 John Doe. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;