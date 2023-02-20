import React from 'react';
import useStyles from './profileStyles';
import AvatarPhoto from '../../images/avatar.png'
import { Avatar, Box, Button, Container, Typography } from '@material-ui/core';

const Profile = () => {
    const classes = useStyles();

    return (
        <section className={classes.profile}>
            <Container maxWidth="sm" className={classes.container}>
                <Avatar
                    alt="Your Name"
                    src={AvatarPhoto}
                    className={classes.avatar}
                />
                <Typography variant="h4" component="h1" className={classes.name}>
                    Mykhailo Rozdorozhniuk
                </Typography>
                <Typography variant="body1" className={classes.description}>
                    I'm a Front-end developer who loves building web applications.
                </Typography>
                <Box display="flex" justifyContent="center">
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        href="https://example.com"
                    >
                        Visit my website
                    </Button>
                </Box>
            </Container>
        </section>
    );
};

export default Profile;