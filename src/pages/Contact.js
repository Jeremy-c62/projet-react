import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Header Component
function Header() {
    return (
        <header className="text-center mt-5">
            <h1>Contact</h1>
            <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
            <hr style={{ backgroundColor: 'blue', height: '2px', width: '100px', margin: '0 auto' }} />
        </header>
    );
}

// Contact Form Component
function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Action à réaliser lors de la soumission du formulaire (ex: envoi à une API)
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="p-3">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Votre nom</label>
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Votre adresse email</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Votre numéro de téléphone</label>
                <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="subject" className="form-label">Sujet</label>
                <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Votre message</label>
                <textarea className="form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
    );
}

// Contact Info and Google Maps Component
function ContactInfo() {
    return (
        <div className="p-3">
            <h3>Mes coordonnées</h3>
            <hr style={{ backgroundColor: 'blue', height: '2px', width: '100px', margin: '0 auto' }} />
            <address>
                <p><strong>John Doe</strong></p>
                <p> <a href="https://www.google.com/maps?q=123+rue+de+la+liberter+59300+Valenciennes,+France" target="_blank" rel="noopener noreferrer">123 rue de la Liberté<br />59300 Valenciennes, France</a></p>
                <p> <a href="tel:+33606060606">06 06 06 06 06</a></p>
                <p> <a href="mailto:Mon@gmail.com">Mon@gmail.com</a></p>
            </address>
            <iframe
                title="Google Map Valenciennes"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.9036004723693!2d3.5204683159630475!3d50.357033179460245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c29f4e7b39fc99%3A0x40af13e8160a5c0!2sValenciennes!5e0!3m2!1sfr!2sfr!4v1689359329342!5m2!1sfr!2sfr"
                width="100%"
                height="300"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
}

// Main Contact Page Component
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
                            <hr style={{ backgroundColor: 'blue', height: '2px', width: '100px', margin: '0 auto 20px auto' }} />
                            <ContactForm />
                        </div>
                    </div>
                </div>

                {/* Contact Info with Google Map */}
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