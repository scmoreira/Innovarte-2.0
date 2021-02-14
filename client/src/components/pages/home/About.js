import React from 'react';

import { Container } from '@material-ui/core';
import useStyles from './sections.styles';

const About = () => {
    
    const classes = useStyles();

    return (
        <Container id='about' className={classes.root}>
            <section className={classes.aboutSection}>
                <h1>For buyers, by artists</h1>
                <article>
                    <p>This website is a space where artists not yet recognised can sell
                        their work to those people who are looking for beauty and decide
                        to support them.</p>
                    <p>The idea was born because of <span>my mother</span> . A wonderful, 
                        multifaceted and creative artist, who did not have the opportunity
                        to make a living from her talent. By the way, my web logo is one of
                        her paintings!</p> 
                    <p>Even before I started my journey at Ironhack, I knew that my first 
                        individual project would be to create this website in her honour.</p>
                </article>
            </section>
        </Container>
    );
}

export default About;
