import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../../assests/slide1.jpg';
import slide2 from '../../../assests/slide2.jpg';
import slide3 from '../../../assests/slide3.jpg';
import './Slider.scss';


class Slider extends Component {
    render() {
        return (
            <Carousel className='slider-carousel'>
                <div>
                    <img src={slide1} />
                </div>
                <div>
                    <img src={slide2} />
                </div>
                <div>
                    <img src={slide3} />
                </div>
            </Carousel>
        );
    }
}

export default Slider;