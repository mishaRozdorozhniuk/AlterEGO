import React, {useEffect, useState} from 'react';
import useStyles from './newsStyles';
import useFetch from "../../hooks/useFetch";
import {
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Button
} from '@material-ui/core';
import { PostAdd as PostAddIcon } from '@material-ui/icons';
import NewsPostsInfo from "./NewsPostsInfo";

const News = () => {
    const classes = useStyles();
    const [limit, setLimit] = useState(10);
    const {data, setData, loading} = useFetch('https://jsonplaceholder.typicode.com/posts/', limit)

    const handleFetchMorePosts = () => {
        setLimit(limit + 10);
    };


    return (
        <section className={classes.profile}>
            <div>
                <Typography variant="h4" component="h1" gutterBottom>
                    <PostAddIcon /> Posts
                </Typography>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="Posts table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Body</TableCell>
                            </TableRow>
                        </TableHead>
                        <NewsPostsInfo
                            setData={setData}
                            data={data}
                            classes={classes}
                            loading={loading}/>
                    </Table>
                </TableContainer>
                <Button variant="contained"
                        color="secondary"
                        className={classes.fetchMore}
                        onClick={handleFetchMorePosts}>
                    Fetch more
                </Button>
            </div>
        </section>
    );
};

export default News;