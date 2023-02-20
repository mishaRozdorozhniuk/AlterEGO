import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        overflow: 'hidden'
    },
    text: {
        textAlign: 'center',
        maxWidth: 500,
        margin: theme.spacing(2),
    },
}));

export default useStyles