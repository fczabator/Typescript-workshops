import { useState } from 'react';
 
interface UsePostArguments {
  url: string;
  options?: RequestInit;
}

interface UsePostReturnValue<T> {
  data: T | null;
  isLoading: boolean;
  makePost: (body?: object) => void;
}

export const usePost = <T>({url, options}: UsePostArguments): UsePostReturnValue<T> => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  async function makePost(body?: object) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...options,
      body: JSON.stringify(body),
    });
    const responseJSON = await response.json();
    setData(responseJSON);
    setLoading(false);
  }

  return {data, isLoading, makePost};
  
}