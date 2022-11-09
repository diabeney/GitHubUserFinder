import React, { useEffect, useState } from 'react';

function useFetch(url) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return;
        const check = localStorage.getItem(url);
        if (check) setData(JSON.parse(check));
        else {
            setLoading(true)
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setData(data);
                    data.message || localStorage.setItem(url, JSON.stringify(data))
                    setLoading(false)
                })
                .catch(err => {
                    setError(true);
                    console.log(err)
                })
            
        }
    }, [url]);

    
    return (
        [data,loading,error]
    )
}

export default useFetch