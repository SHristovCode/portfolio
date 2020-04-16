import React from 'react';
import { SimpleSlider } from '../../components';
import { Icon } from '../common';
import './SliderTextImgSection.scss';

const ImageText = ({ image, headline, text }) => {
    return (
        <div className="image-container">
            <Icon name={image} />
            <div className="text-container">
                <h3>{headline}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
};

const SliderTextImgSection = () => {
    return (
        <section className="section">
            <h2>Why you need to choose me</h2>
            <div className="slider">
                <SimpleSlider>
                    <ImageText
                        image="ImageKeyboard"
                        headline="I never stop learning"
                        text="I always improve myself, because I enjoy this job and I want to achive a lot with it. I never stop to be in touch with the news."
                    />
                    <ImageText
                        image="Desk"
                        headline="I'm looking for challenges"
                        text="I'm looking for challenges that will improve my skills and will make me better developer. I always try to put myself in hard situation just to find the correct answer."
                    />
                    <ImageText
                        image="DeskSecond"
                        headline="I want to achieve as much as it possible"
                        text="I'm motivated person which want to become expert in front end development. This is my main target which I won't stop following."
                    />
                </SimpleSlider>
            </div>
        </section>
    );
};

export default SliderTextImgSection;