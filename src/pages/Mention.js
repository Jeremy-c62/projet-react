import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import '../asset/styles/Mention.css';

function MentionsLegales() {
    return (
        <div className="mentions-legales-page">
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <Container className="mt-5 mb-5">
                <h1 className="text-center mb-5">Mentions Légales</h1>

                <div className="blue-separator"></div>

                {/* Accordéon des sections */}
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Éditeur du site</Accordion.Header>
                        <Accordion.Body>
                            <Container>
                                <Row>
                                    <Col md={6}>
                                        <address>
                                            John Doe<br />
                                            40 rue laure diebold<br />
                                            69009 Lyon, France<br />
                                            <a href="tel:+33606060606">06 06 06 06 06</a><br />
                                            <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                                        </address>
                                    </Col>
                                </Row>
                            </Container>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Hébergeur du site</Accordion.Header>
                        <Accordion.Body>
                            <h3>almaysdata </h3>
                            <p>91 Rue du faubourg saint-Honoré, 75008 Paris</p>
                            <a href="https://www.alwaysdata.com/fr/" target='_blank' rel="nofollow noopener noreferrer"> www.alwaysdata.com</a>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Crédits</Accordion.Header>
                        <Accordion.Body>
                            <p>Ce site a été réalisé par John Doe, étudiant au
                                <a href="https://www.centre-europeen-formation.fr" target="_blank" rel="nofollow noopener noreferrer">Centre Européen de Formation</a>.
                            </p>
                            <p>Les images utilisées sur ce site proviennent de sources libres de droits et on était obtenues sur le site
                                <a href="https://pixabay.com/fr/" target="_blank" rel="nofollow noopener noreferrer">Pixabay</a>.
                            </p>
                            <p>Les Favicon de ce site on était obtenues sur le site
                                <a href="https://www.flaticon.com/fr/" target="_blank" rel="nofollow noopener noreferrer">Favicon</a>.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </Container>
        </div>
    );
}

export default MentionsLegales;