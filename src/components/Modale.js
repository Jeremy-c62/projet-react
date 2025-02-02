import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Importation des composants Bootstrap
import { FaGithub } from 'react-icons/fa'; // Importation de l'icône Github

function ModaleComponent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* Bouton pour ouvrir la modale */}
            <Button variant="danger" onClick={handleShow} style={{ marginTop: '20px' }}>
                En savoir plus
            </Button>

            {/* Modale fusionnée */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Mon profil GitHub</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    {/* Section À propos de moi */}
                    <h4>Jérémy Cochez</h4>
                    <p>Je suis développeur web full stack, passionné par la technologie et l'innovation.</p>

                    {/* Section Profil GitHub */}
                    <hr />
                    <img
                        src="chemin_vers_ton_image_avatar" // Remplace par le bon chemin vers ton avatar
                        alt="Jérémy Cochez Avatar"
                        className="img-fluid rounded-circle mb-3"
                        style={{ width: '150px' }}
                    />
                    <ul className="list-unstyled">
                        <li>
                            <FaGithub /> Repositories : 1
                        </li>
                        <li>Followers : 16</li>
                        <li>Following : 0</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModaleComponent;