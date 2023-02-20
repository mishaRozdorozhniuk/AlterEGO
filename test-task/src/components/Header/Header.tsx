import React, {useState} from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Link, Toolbar } from '@material-ui/core';
import { Select, MenuItem } from '@material-ui/core';
import useStyles from './headerStyles';
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {userIsAuth} from "../../redux/action";

interface Option {
    value: string;
    label: string;
}

const options: Option[] = [
    { value: 'en', label: 'EN' },
    { value: 'ua', label: 'UA' },
];

const Header: React.FC = () => {
    const classes = useStyles();
    const location = useLocation();
    const { t, i18n } = useTranslation();
    const [value, setValue] = useState("EN");
    const dispatch = useDispatch()
    const isAuth = localStorage.getItem("isAuthenticated")

    const changeLanguageHandler = (e: any) => {
        setValue(e.target.value);
        const languageValue = e.target.value
        i18n.changeLanguage(languageValue);
    }

    const handleLogOut = () => {
        dispatch(userIsAuth(false))
        localStorage.removeItem("isAuthenticated")
    }

    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                <nav>
                    <Link
                        color="inherit"
                        variant="button"
                        component={RouterLink}
                        to="/"
                        underline={location.pathname === '/' ? 'always' : 'none'}
                        className={classes.link}>
                        {t('Home')}
                    </Link>
                    <Link
                        color="inherit"
                        variant="button"
                        component={RouterLink}
                        to="/news"
                        underline={location.pathname === '/news' ? 'always' : 'none'}
                        className={classes.link}>
                        {t('News')}
                    </Link>
                    <Link
                        color="inherit"
                        variant="button"
                        component={RouterLink}
                        to="/profile"
                        underline={location.pathname === '/profile' ? 'always' : 'none'}
                        className={classes.link}>
                        {t('Profile')}
                    </Link>
                    {!isAuth ?
                        <Link
                            color="inherit"
                            variant="button"
                            component={RouterLink}
                            to="/login"
                            underline={location.pathname === '/login' ? 'always' : 'none'}
                            className={classes.link}>
                            {t('Login')}
                        </Link>:
                        <Link
                            color="inherit"
                            variant="button"
                            onClick={handleLogOut}
                            component={RouterLink}
                            to="/"
                            className={classes.link}>
                            {t('Logout')}
                        </Link>
                    }

                        <Select
                            labelId="select-label"
                            value={value}
                            defaultValue={value}
                            onChange={changeLanguageHandler}
                            className={classes.languageSelect}>
                            <MenuItem disabled={true} value={value}>
                                Choose language
                            </MenuItem>
                            {options.map((option: any) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                </nav>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
