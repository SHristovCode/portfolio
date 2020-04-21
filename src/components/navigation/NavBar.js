import React from 'react';
import Pdf from '../../../public/assets/SvilenHristovResume.pdf';
import { NavLink, Link } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {

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
                        <a href={Pdf}>CV</a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default NavBar;