import {makeStyles, Theme, useTheme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        flexGrow: 1,
        textAlign: 'left'
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    languageSelect: {
        color: '#fff'
    }

}));

export default useStyles
