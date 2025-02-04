import React, { useState, useEffect } from 'react';
import '../asset/styles/GithubInfo.css'; // Importation du fichier CSS

function GithubInfo() {
    const [githubData, setGithubData] = useState(null); // État pour stocker les données GitHub
    const [isLoading, setIsLoading] = useState(false); // État pour gérer le chargement
    const [error, setError] = useState(null); // État pour gérer les erreurs

    // Utilisation du hook useEffect pour appeler l'API
    useEffect(() => {
        setIsLoading(true);
        fetch('https://api.github.com/users/github-john-doe')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                return response.json();
            })
            .then(data => {
                setGithubData(data); // Stocker les données dans l'état
                setIsLoading(false); // Arrêter le chargement
            })
            .catch(err => {
                setError(err.message); // Gérer les erreurs
                setIsLoading(false);
            });
    }, []); // Le tableau vide signifie que l'effet se déclenche uniquement au montage du composant

    return (
        <div className="github-container">
            {/* Titre en haut à gauche */}
            <h4 className="github-title">Mon profil GitHub</h4>

            {/* Gérer l'état de chargement, l'erreur et afficher les données */}
            {isLoading ? (
                <p>Chargement des informations...</p>
            ) : error ? (
                <p>Erreur : {error}</p>
            ) : githubData ? (
                <div className="github-profile">
                    {/* Avatar sur la gauche */}
                    <img
                        src={githubData.avatar_url}
                        alt="Avatar"
                        className="github-avatar"
                    />

                    {/* Le reste des informations à droite */}
                    <div className="github-info">
                        {/* Lien vers le profil */}
                        <p>
                            <a
                                href={githubData.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-link"
                            >
                                John Doe
                            </a>
                        </p>

                        {/* Bio */}
                        <p>{githubData.bio || 'Pas de bio disponible'}</p>

                        {/* Nombre de repositories */}
                        <p>Public Repositories: {githubData.public_repos}</p>

                        {/* Nombre de followers */}
                        <p>Followers: {githubData.followers}</p>

                        {/* Nombre de following */}
                        <p>Following: {githubData.following}</p>
                    </div>
                </div>
            ) : (
                <p>Aucune donnée disponible</p>
            )}
        </div>
    );
}

export default GithubInfo;