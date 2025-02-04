import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../asset/styles/Contact.css';

function Header() {
    return (
        <header className="text-center mt-5">
            <h1>Contact</h1>
            <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
            <div className="blue-separator"></div>
        </header>
    );
}

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState(''); // Pour les messages de succès ou d'erreur

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation de base pour vérifier que tous les champs sont remplis
        if (formData.name && formData.email && formData.phone && formData.subject && formData.message) {
            console.log(formData);
            setFormStatus('Message envoyé avec succès !');
        } else {
            setFormStatus('Veuillez remplir tous les champs obligatoires.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-3">
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Votre nom"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type="email"
                    placeholder="Votre adresse email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type="tel"
                    placeholder="Votre numéro de téléphone"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Sujet"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    placeholder="Votre message"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Envoyer</button>

            {/* Message de retour */}
            {formStatus && <p className="mt-3">{formStatus}</p>}
        </form>
    );
}

// Google Maps Component
function ContactInfo() {
    return (
        <div className="contact-info p-3">
            <h3>Mes coordonnées</h3>
            <div className="blue-separator"></div>
            <address>
                <p>John Doe</p>
                <p>
                    <a href="https://maps.app.goo.gl/3BTiyqXBkrftYf9S8" target="_blank" rel="nofollow noopener noreferrer">
                        40 rue Laure Diebold<br />69006 Lyon, France
                    </a>
                </p>
                <p><a href="tel:+33606060606">06 06 06 06 06</a></p>
                <p><a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
            </address>

            <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=48.856614,2.3522219&z=15&output=embed"
                width="100%"
                height="330"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
}

// Page Component
function ContactPage() {
    return (
        <div className="container">
            <Header />
            <div className="row mt-5">
                {/* Contact Form */}
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3>Formulaire de contact</h3>
                            <div className="blue-separator"></div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
                {/* Contact Information */}
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;