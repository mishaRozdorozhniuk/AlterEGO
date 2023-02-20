import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    profile: {
        marginTop: '100px',
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(4),
        display: 'grid !important',
        placeContent: 'center'
    },
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    name: {
        marginTop: theme.spacing(2),
        fontWeight: 500,
    },
    description: {
        marginTop: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2)
    }
}));

export default useStyles;