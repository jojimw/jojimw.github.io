import React from 'react';
import './navbar.scss';

import Link from 'gatsby-link';

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link to="/" className="logo">
                    <h1>A.</h1>
                </Link>
                <ul className="menu">
                    <li className="menu__list">
                        <Link to="/work/" className="menu__list__link">Works</Link>
                    </li>
                    <li className="menu__list">
                        <Link to="/gallery/" className="menu__list__link">Gallery</Link>
                    </li>
                    <li className="menu__list">
                        <Link to="/contact/" className="menu__list__link">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
