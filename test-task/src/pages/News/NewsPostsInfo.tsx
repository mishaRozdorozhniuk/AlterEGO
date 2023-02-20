import {
    TableBody,
    TableCell,
    TableRow,
    Button
} from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import { CircularProgress } from '@material-ui/core';
import useStyles from "./newsStyles";

interface Post {
    id: number;
    title: string;
    body: string;
}

const NewsPostsInfo = ({setData, data, loading}: any) => {
    const classes = useStyles();

    const handleDeletePost = (id: number) => {
        return setData(data.filter((post: Post) => post.id !== id))
    }

    return (
        <TableBody>
            {loading ? <CircularProgress /> : data.map((post: Post) => (
                <TableRow key={post.id}>
                    <TableCell>{post.id}</TableCell>
                    <TableCell className={classes.tableInfo}>{post.title}</TableCell>
                    <TableCell className={classes.tableInfo}>
                        {post.body}
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => handleDeletePost(post.id)}
                            startIcon={<DeleteIcon />}
                            className={classes.button}>
                            Delete
                        </Button>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

export default NewsPostsInfo;