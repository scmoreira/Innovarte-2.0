import React from 'react';
import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';
import Image from '../../shared/images/background.jpg';

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
        description: 'Upcoming',
        bgImg: Image,
        alt: 'Second slide',
        button: 'Make your offer!',
        to: '/auction'
    }
];

const Hero = () => {
    return (
        <Carousel fade='true'>
            { items.map(item => {
                return (
                    <Carousel.Item interval={5000} key={item.id}>
                        <img
                            className='d-block w-100'
                            src={item.bgImg}
                            alt={item.alt}
                        />
                        <Carousel.Caption className='text-dark'>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            {item.button && <Link to={item.to}>{item.button}</Link>}
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
}

export default Hero;