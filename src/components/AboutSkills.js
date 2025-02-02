import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import '../src/style/AboutSkill.css'; // Ajouter un fichier CSS pour cette section

const AboutSkills = () => {
    return (
        <div className="container about-skills-section py-5">
            <div className="row">
                {/* Colonne A propos */}
                <div className="col-md-6">
                    <h3>A propos</h3>
                    <img src="/images/profile.jpg" alt="John Doe" className="img-fluid mb-3" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempora.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempora.</p>
                </div>

                {/* Colonne Compétences */}
                <div className="col-md-6">
                    <h3>Mes compétences</h3>
                    <div>
                        <p>HTML5 90%</p>
                        <ProgressBar now={90} />
                        <p>CSS3 80%</p>
                        <ProgressBar now={80} />
                        <p>JavaScript 70%</p>
                        <ProgressBar now={70} />
                        <p>PHP 60%</p>
                        <ProgressBar now={60} />
                        <p>React 50%</p>
                        <ProgressBar now={50} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSkills;