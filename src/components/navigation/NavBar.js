import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import './NavBar.scss';

const NavBar = ({ props }) => {

    console.log(111111, props)

    return (
        <div className="nav">
            <div className="navigation-items">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <a href="http://cv.svilen-portfolio.waboratory.com/">CV</a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default NavBar;