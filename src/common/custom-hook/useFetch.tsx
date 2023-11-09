'use client';

import { useEffect, useState } from 'react';

type TUseFetchProps = {
    url: string;
    dependencies?: any[];
    payload?:any;
};

function useFetch<T>({ url, dependencies = [], payload }: TUseFetchProps) {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<T | null>(null);


    useEffect(() => {
        const getPrediction = async () => {
            try {
                setLoading(true);
                const res = await fetch(url, {body: payload});
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getPrediction();
    }, dependencies);

    return {
        loading,
        data,
    };
}

export default useFetch;
