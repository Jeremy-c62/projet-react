import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../asset/images/banner.jpg";
import "../asset/styles/Service.css";

const Services = () => {
    return (
        <>
            {/* Section avec l'image en arrière-plan */}
            <section
                className="services-banner"
                style={{
                    backgroundImage: `url(${backgroundImage})`, // Gérer le background-image avec JS
                }}
            >

            </section>
            {/* Centrer le contenu dans la bannière */}
            <div className="text-center">
                <h1>Mon offre de services</h1>
                <p>Voici les prestations sur lesquelles je peux intervenir</p>
            </div>
            <div className="blue-separator"></div>


            {/* Section avec les cartes de services */}
            <section className="services-section py-5">
                <div className="container">
                    <div className="row">
                        {/* UX Design */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="service-card text-center">
                                <i className="bi bi-pencil"></i>
                                <h3>UX Design</h3>
                                <p>
                                    L’UX Design consiste à concevoir des produits en plaçant
                                    l'utilisateur au centre pour une expérience fluide et agréable.
                                </p>
                            </div>
                        </div>

                        {/* Développement web */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="service-card text-center">
                                <i className="bi bi-code-slash"></i>
                                <h3>Développement web</h3>
                                <p>
                                    Créer des sites web en utilisant des langages comme HTML, CSS,
                                    JavaScript, et PHP.
                                </p>
                            </div>
                        </div>

                        {/* Référencement */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="service-card text-center">
                                <i className="bi bi-search"></i>
                                <h3>Référencement</h3>
                                <p>
                                    Le SEO permet d’optimiser un site pour améliorer son
                                    positionnement dans les moteurs de recherche.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;