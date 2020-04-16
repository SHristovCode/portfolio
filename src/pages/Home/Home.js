import React from 'react';
import { SliderTextImgSection, Skills } from '../../components';

import './Home.scss';

const skills = [
    'JavaScript',
    'ReactJS',
    'React Native',
    'Redux',
    'graphQL',
    'HTML',
    'SCSS',
    'CSS',
    'Webpack',
    'NPM',
    'Yarn',
    'Git'
];

const Home = () => {
    return (
        <div className="home-container">
            <div className="intro">
                <h2>Hello!</h2>
                <p>
                    I'm Svilen Hristov and I have 2 years of experience as a web developer. I specialise in front end using React as JavaScript library. 
                </p>
            </div>
            <div className="paralax-container">
                <h2>Experience</h2>
                <p>In my last 2 years, I was working with React and React Native. My role was Junior front end developer. I had the chance to work on two bank mobile applications which they give me experience with React Native. I had to talk with clients, to estimate my tasks and to take decisions for the libraries that I'm using. Most of all I was working on responsive websites and that gave me the ability to make a reusable components and to make my styles responsive.</p>
            </div>
            <Skills skills={skills} />
            <SliderTextImgSection />
        </div>
    );
}

export default Home;