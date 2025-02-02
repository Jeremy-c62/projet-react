import React from 'react';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';


=======
import { Container, Accordion } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import '../asset/styles/Mention.css';
>>>>>>> secondaire


function MentionsLegales() {
    return (
<<<<<<< HEAD
        <div className="container">
            <h1 className="text-center">Mentions légales</h1>
            <hr style={{ backgroundColor: 'blue', height: '8px', width: '100px', margin: ' auto' }} />
=======
        <div className="mentions-legales-page">
            <Container className="mt-5 mb-5">
                <h1 className="text-center mb-5">Mentions Légales</h1>

                {/* Accordéon des sections */}
                <Accordion defaultActiveKey="0">

                    {/* Section Editeur du site */}
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Éditeur du site</Accordion.Header>
                        <Accordion.Body>
                            <Container>
                                <Row>
                                    <Col md={6}>
                                        <address>
                                            Cochez Jérémy<br />
                                            123 Rue de la liberté<br />
                                            59300 Valenciennes, France<br />
                                            <a href="tel:+33606060606">06 06 06 06 06</a><br />
                                            <a href="mailto:contact@exemple.com">contact@exemple.com</a>
                                        </address>
                                    </Col>
                                </Row>
                            </Container>

                        </Accordion.Body>
                    </Accordion.Item>

                    {/* Section Hébergeur */}
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Hébergeur du site</Accordion.Header>
                        <Accordion.Body>
                            <p>Hebergeur a définir</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* Section Crédits */}
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Crédits</Accordion.Header>
                        <Accordion.Body>
                            <p>Ce site a été réalisé par Jérémy Cochez, étudiant au
                                <a href="https://www.centre-europeen-formation.fr" target="_blank" rel="noopener noreferrer">Centre Européen de Formation</a>.
                            </p>
                            <p>Les images utilisées sur ce site proviennent de sources libres de droits et on était obtenues sur le site
                                <a href="https://pixabay.com/fr/" target="_blank" rel="noopener noreferrer">Pixabay</a>.
                            </p>
                            <p>Les Favicon de ce site on était obtenues sur le site
                                <a href="https://www.flaticon.com/fr/" target="_blank" rel="noopener noreferrer">Favicon</a>.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </Container>
>>>>>>> secondaire
        </div>
    );
}

<<<<<<< HEAD
export default Mention;
=======
export default MentionsLegales;
>>>>>>> secondaire
