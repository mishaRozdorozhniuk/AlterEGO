import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    profile: {
        marginTop: '100px',
    },
    table: {
        minWidth: 650,
    },
    button: {
        margin: theme.spacing(1),
        display: 'flex !important',
        marginLeft: 'auto !important',
    },
    tableInfo: {
        fontSize: '16px',
        marginRight: '30px'
    },
    fetchMore: {
        display: 'flex !important',
        margin: '50px auto 50px auto !important',
        backgroundColor: '#3f51b5'
    }
}));

export default useStyles;