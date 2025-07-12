import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = [
        { name: "Beranda", path: "/" },
        { name: "Tentang Kami", path: "/about" },
        { name: "Layanan Kami", path: "/services" },
        { name: "Ulasan", path: "/testimonials" },
        { name: "Galeri", path: "/gallery" },
        { name: "Kontak", path: "/contact" },
    ];

    return (
        <navbar>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">FreshClean Laundry</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {navLinks.map(link => (
                                <li className="nav-item" key={link.name}>
                                    <NavLink to={link.path} className="nav-link">
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </navbar>
    );
};

export default Navbar;