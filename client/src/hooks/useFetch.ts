import {useState, useEffect} from 'react';

interface UseFetchArguments {
  url: string;
  options?: RequestInit;
  body?: Blob;
}

interface UseFetchReturnValue<T> {
  data: T | null;
  isLoading: boolean;
}

export function useFetch<T>({url, options, body}: UseFetchArguments): UseFetchReturnValue<T> {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  async function fetchUrl() {
    const response = await fetch(url, {...options, body});
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();    
  }, [])

  return {data, isLoading};
}
