import React, { useEffect, useState } from 'react';
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
}

interface FetchData {
    data: Post[];
    setData: React.Dispatch<React.SetStateAction<Post[]>>;
    loading: boolean,
}

const useFetch = (URL: string, limit: number): FetchData => {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true)
        axios(URL + `?_limit=${limit}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [URL, limit]);

    return { data, setData, loading };
};

export default useFetch;
