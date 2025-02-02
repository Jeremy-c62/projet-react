import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bannerImage from "../asset/images/banner.jpg";
import freshFoodImage from "../asset/images/portfolio/fresh-food.jpg";
import restaurantAkiraImage from "../asset/images/portfolio/restaurant-japonais.jpg";
import espaceBienEtreImage from "../asset/images/portfolio/espace-bien-etre.jpg";
import seo from "../asset/images/portfolio/seo.jpg";
import creationApi from "../asset/images/portfolio/coder.jpg";
import Maquette from "../asset/images/portfolio/screens.jpg";
import "../asset/styles/Portfolio.css"; // Vos styles séparés

const Portfolio = () => {
    return (
        <>
            {/* Section bannière */}
            <section
                className="portfolio-banner"
                style={{
                    backgroundImage: `url(${bannerImage})`, // Image bannière
                }}
            >
            </section>
            <div className="text-center">
                <h1>Portfolio</h1>
                <p>Voici quelques-unes de mes réalisations</p>
            </div>

            {/* Section des cartes du portfolio */}
            <section className="portfolio-section py-5">
                <div className="container">
                    <div className="row">
                        {/* Carte Fresh Food */}
                        <div id="fresh-food" className="col-lg-4 col-md-6 mb-4">
                            <div className="portfolio-card text-center p-4 border rounded bg-light">
                                <img
                                    src={freshFoodImage}
                                    alt="Fresh Food"
                                    className="img-fluid mb-3"
                                />
                                <h3>Fresh Food</h3>
                                <p>Site de vente de produits frais en ligne</p>
                                <a href="#" className="btn btn-primary mb-2">Voir le site</a>
                                <p className="text-muted">Site réalisé avec PHP et MySQL</p>
                            </div>
                        </div>

                        {/* Carte Restaurant Akira */}
                        <div id="restaurant-akira" className="col-lg-4 col-md-6 mb-4">
                            <div className="portfolio-card text-center p-4 border rounded bg-light">
                                <img
                                    src={restaurantAkiraImage}
                                    alt="Restaurant Akira"
                                    className="img-fluid mb-3"
                                />
                                <h3>Restaurant Akira</h3>
                                <p>Site de vente de produits frais en ligne</p>
                                <a href="#" className="btn btn-primary mb-2">Voir le site</a>
                                <p className="text-muted">Site réalisé avec WordPress</p>
                            </div>
                        </div>

                        {/* Carte Espace bien-être */}
                        <div id="espace-bien-etre" className="col-lg-4 col-md-6 mb-4">
                            <div className="portfolio-card text-center p-4 border rounded bg-light">
                                <img
                                    src={espaceBienEtreImage}
                                    alt="Espace bien-être"
                                    className="img-fluid mb-3"
                                />
                                <h3>Espace bien-être</h3>
                                <p>Site de vente de produits frais en ligne</p>
                                <a href="#" className="btn btn-primary mb-2">Voir le site</a>
                                <p className="text-muted">Site réalisé avec LARAVEL</p>
                            </div>
                        </div>

                        {/* Carte SEO */}
                        <div id="seo" className="col-lg-4 col-md-6 mb-4">
                            <div className="portfolio-card text-center p-4 border rounded bg-light">
                                <img
                                    src={seo}
                                    alt="SEO"
                                    className="img-fluid mb-3"
                                />
                                <h3>SEO</h3>
                                <p>Amélioration du Référencement d'un site e-commerce</p>
                                <a href="#" className="btn btn-primary mb-2">Voir le site</a>
                                <p className="text-muted">Utilisation des SEO</p>
                            </div>
                        </div>

                        {/* Carte Création d'API */}
                        <div id="creation-api" className="col-lg-4 col-md-6 mb-4">
                            <div className="portfolio-card text-center p-4 border rounded bg-light">
                                <img
                                    src={creationApi}
                                    alt="Création API"
                                    className="img-fluid mb-3"
                                />
                                <h3>Création d'un API</h3>
                                <p>Création d'une API RESTFUL publique</p>
                                <a href="#" className="btn btn-primary mb-2">Voir le site</a>
                                <p className="text-muted">PHP-SYMFONY</p>
                            </div>
                        </div>

                        {/* Carte Maquette */}
                        <div id="maquette-site-web" className="col-lg-4 col-md-6 mb-4">
                            <div className="portfolio-card text-center p-4 border rounded bg-light">
                                <img
                                    src={Maquette}
                                    alt="Maquette"
                                    className="img-fluid mb-3"
                                />
                                <h3>Maquette d'un site web</h3>
                                <p>Création du prototype d'un site</p>
                                <a href="#" className="btn btn-primary mb-2">Voir le site</a>
                                <p className="text-muted">Site réalisé avec FIGMA</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;