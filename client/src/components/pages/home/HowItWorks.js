import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Card, CardActionArea, CardContent, Typography, Grid } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import useStyles from './sections.styles';

const HowItWorks = () => {

    const classes = useStyles();

    return (
        <Container id='howItWorks' className={`${classes.root} ${classes.last}`}>
            <section className={classes.howItWorksSection}>
                <h1>How it works</h1>
                <Grid item xs={12}>
                    <Grid container justify='center' spacing={2}>
                        <Grid item>
                            <Card>
                                <CardActionArea>
                                    <Link to='/signup'>
                                        <CardContent>
                                            <AccountCircleOutlinedIcon /> 
                                            <Typography gutterBottom variant='h5' component='h3'>
                                                Create your account
                                            </Typography>
                                            <Typography variant='body2' component='p'>
                                                Fill in the form with your username, email and password.
                                            </Typography>
                                        </CardContent>
                                    </Link>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card>
                                <CardActionArea>
                                    <Link to='/artworks'>
                                        <CardContent>
                                            <FavoriteBorderOutlinedIcon />
                                            <Typography gutterBottom variant='h5' component='h3'>
                                                Choose your artwork
                                            </Typography>
                                            <Typography variant='body2' component='p'>
                                                Select your favorite piece, click on it to see more details, and add it to your cart.
                                            </Typography>
                                        </CardContent>
                                    </Link>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card>
                                <CardActionArea>
                                    <Link to='/cart'>
                                        <CardContent>
                                            <ShoppingCartOutlinedIcon />
                                            <Typography gutterBottom variant='h5' component='h3'>
                                                Make it yours!
                                            </Typography>
                                            <Typography variant='body2' component='p'>
                                                Confirm your payment. The artist will deliver the piece directly to you.<br/> Enjoy it!
                                            </Typography>
                                        </CardContent>
                                    </Link>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        </Container>
    );
}

export default HowItWorks;
