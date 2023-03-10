import { useEffect, useState } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [Pending, setPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {

        fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data, try again");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setPending(false);
          setError(null)
        })
        .catch((err) => {
          setPending(false);
          setError(err.message);
        });
        
    }, [url]);
    return { data, Pending, error}

  }