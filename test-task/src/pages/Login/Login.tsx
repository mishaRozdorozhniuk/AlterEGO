import { useState } from 'react';
import {TextField, Button, Grid, Paper, Typography} from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import useStyles from "./loginStyles";
import {useDispatch} from "react-redux";
import {userIsAuth} from "../../redux/action";

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    const classes = useStyles();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (email === 'admin' && password === '12345') {
            dispatch(userIsAuth(isAuthenticated))
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/profile');
        } else {
            setError('Username or password entered incorrectly');
        }
    };

    return (
        <Paper elevation={3} className={classes.paper} >
            <Grid container direction="column" alignItems="center">
                <Typography variant="h5" component="h1">
                    Login
                </Typography>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <TextField
                        id="email"
                        label="Email"
                        type="text"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={classes.textField}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={classes.textField}
                    />
                    <span className={classes.loginErrorMessage}>{error}</span>
                    <Button type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submitButton}
                        >
                        Login
                    </Button>
                </form>
            </Grid>
        </Paper>
    );
}

export default Login