import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import freshFoodImage from "../asset/images/portfolio/fresh-food.jpg";
import restaurantAkiraImage from "../asset/images/portfolio/restaurant-japonais.jpg";
import espaceBienEtreImage from "../asset/images/portfolio/espace-bien-etre.jpg";
import seo from "../asset/images/portfolio/seo.jpg";
import creationApi from "../asset/images/portfolio/coder.jpg";
import Maquette from "../asset/images/portfolio/screens.jpg";

const Task = ({ imageSrc, title, description, link, tech }) => {
    return (
        <div className="card h-100 d-flex flex-column">
            <img src={imageSrc} className="card-img-top img-fluid" alt={title} />
            <div className="card-body d-flex flex-column text-center"> {/* Texte centré */}
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="mt-auto d-flex justify-content-center">
                    <a href={link} className="btn btn-primary w-100 text-center" style={{ maxWidth: "100px", marginLeft: "0px" }}>
                        Voir plus
                    </a>
                </div>
            </div>
            <div className="card-footer text-center">
                <p className="text-muted">{tech}</p>
            </div>
        </div >
    );
};

const Portfolio = () => {
    return (
        <div className="container my-5">
            {/* Grille des cartes */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {/* Première ligne des cartes */}
                <div className="col">
                    <Task
                        imageSrc={freshFoodImage}
                        title="Fresh Food"
                        description="Site de vente de produits frais en ligne"
                        link="#"
                        tech="Site réalisé avec PHP et MySQL"
                    />
                </div>
                <div className="col">
                    <Task
                        imageSrc={restaurantAkiraImage}
                        title="Restaurant Akira"
                        description="Site de vente de produits frais en ligne"
                        link="#"
                        tech="Site réalisé avec WordPress"
                    />
                </div>
                <div className="col">
                    <Task
                        imageSrc={espaceBienEtreImage}
                        title="Espace bien-être"
                        description="Site de vente de produits frais en ligne"
                        link="#"
                        tech="Site réalisé avec LARAVEL"
                    />
                </div>
            </div>

            {/* Deuxième ligne des cartes */}
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                <div className="col">
                    <Task
                        imageSrc={seo}
                        title="SEO"
                        description="Amélioration du Référencement d'un site e-commerce"
                        link="#"
                        tech="Utilisation des SEO"
                    />
                </div>
                <div className="col">
                    <Task
                        imageSrc={creationApi}
                        title="Création d'un API"
                        description="Création d'une API RESTFUL publique"
                        link="#"
                        tech="PHP-SYMFONY"
                    />
                </div>
                <div className="col">
                    <Task
                        imageSrc={Maquette}
                        title="Maquette d'un site web"
                        description="Création du prototype d'un site"
                        link="#"
                        tech="Site réalisé avec FIGMA"
                    />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;