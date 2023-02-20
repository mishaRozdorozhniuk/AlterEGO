import React from 'react';
import useStyles from "./homeStyles"
import Typography from '@material-ui/core/Typography';

const Home = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography variant="h1" component="h1" className={classes.text}>
                Home Page
            </Typography>
        </div>
    );
};

export default Home;