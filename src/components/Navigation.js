import React from 'react';
import { NavLink } from 'react-router-dom'; // Utiliser NavLink pour le lien actif
import 'bootstrap/dist/css/bootstrap.min.css';
import '../asset/styles/NavBar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-black">
            <div className="container">
                <NavLink className="navbar-brand text-white" to="/">John Doe</NavLink>
                <button className="navbar-toggler text-bg-ligh" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink exact className="nav-link text-white" activeClassName="active" to="/">
                                Acceuil
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" activeClassName="active" to="/Service">
                                Service
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" activeClassName="active" to="/Portfolio">
                                Portfolio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" activeClassName="active" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" activeClassName="active" to="/Mention">
                                Mention Légales
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;