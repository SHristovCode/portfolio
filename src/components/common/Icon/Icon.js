import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faLinkedin,
    faViber,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


import './Icon.scss';

import ImageKeyboard from '../../../../public/assets/images/keyboard.jpg';
import Desk from '../../../../public/assets/images/desk.jpg';
import DeskSecond from '../../../../public/assets/images/desk2.jpg';

const AvailableIcons = {
    ImageKeyboard,
    Desk,
    DeskSecond,
    faFacebook,
    faViber,
    faLinkedin,
    faGithub,
    faEnvelope
};


const Icon = ({ name, className, ...props }) => {
    const prefix = 'fa';
    if (name.substring(0, 2) === prefix) {
        return <FontAwesomeIcon icon={AvailableIcons[name]} className={className && `icon ${className}`} {...props} />
    };

    return <img src={AvailableIcons[name]} className={className && `icon ${className}`} {...props} />
};

export default Icon;