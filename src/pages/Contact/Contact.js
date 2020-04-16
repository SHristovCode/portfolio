import React from 'react';
import { Icon } from '../../components/common';

import './Contact.scss';

const Contact = () => {
    return (
        <div className="contact-container">
            <ul>
                <li>
                    <Icon name="faEnvelope" color="#6f6f6f" />
                    <a href="mailto:svilenhgo@gmail.com">svilenhgo@gmail.com</a>
                </li>
                <li>
                    <Icon name="faViber" color="#800080" />
                    <span>+3590898700933</span>
                </li>
                <li>
                    <Icon name="faLinkedin" color="#4682B4" />
                    <a href="https://www.linkedin.com/in/svilen-hristov-52838715a/">Linkedin</a>
                </li>
                <li>
                    <Icon name="faGithub" color="#6f6f6f"/>
                    <a href="https://github.com/SHristovCode">Github</a>
                </li>
                <li>
                    <Icon name="faFacebook" color="#111E6C"/>
                    <a href="https://www.facebook.com/svilen.hristov.5473/">Facebook</a>
                </li>
            </ul>
        </div>
    );
}

export default Contact;