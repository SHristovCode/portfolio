import React from 'react';
import PropType from 'prop-types';

import './Skills.scss';

const Skills = ({ skills }) => {
    return (
        <div className="skills">
            <h2>Skills</h2>
            <div className="skills-content">
                {skills.map(skill => (
                    <span className="skill" key={skill}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

Skills.defaultProps = {
    skills: [],
}

Skills.propTypes = {
    skills: PropType.array.isRequired,
}

export default Skills;