import React, { Children } from 'react';
import Slider from 'react-slick';
import  PropTypes from 'prop-types';

const SimpleSlider = ({
    dots,
    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
    arrows,
    autoplay,
    autoplaySpeed,
    children,
    
}) => {

    const settings = {
        dots,
        infinite,
        speed: speed,
        slidesToShow,
        slidesToScroll,
        arrows,
        autoplay,
        autoplaySpeed
    };

    return (
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
};

SimpleSlider.defaultProps = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
};

SimpleSlider.propTypes = {
    dots: PropTypes.bool,
    infinite: PropTypes.bool,
    speed: PropTypes.number,
    slidesToShow: PropTypes.number,
    slidesToScroll: PropTypes.number,
    arrows: PropTypes.bool,
    autoplay: PropTypes.bool,
    autoplaySpeed: PropTypes.number,
};

export default SimpleSlider;