import React from 'react';
import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';
import Image from '../../shared/images/background.jpg';

import './Hero.styles.css';

const items = [
    {
        id: 1,
        title: 'Innovarte',
        description: 'The place of the Art',
        bgImg: Image,
        alt: 'First slide'
    },
    {
        id: 2,
        title: 'Auction of selected artworks',
        bgImg: Image,
        alt: 'Second slide',
        button: 'Make your offer!',
        to: '/auction'
    }
];

const Hero = () => {
    return (
        <div className='carousel'>
            <Carousel fade={true}>
            { items.map(item => {
                return (
                    <Carousel.Item interval={7000} key={item.id}>
                        <img
                            className='carousel-img'
                            src={item.bgImg}
                            alt={item.alt}
                        />
                        <Carousel.Caption className='text-dark'>
                            <h1>{item.title}</h1>
                            {item.description && <p>{item.description}</p>}
                            {item.button && <p><Link to={item.to}>{item.button}</Link></p>}
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })}
        </Carousel>
        </div>
    );
}

export default Hero;