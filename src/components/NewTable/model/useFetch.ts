import { useEffect, useState } from "react";

export type FetchStatus<T> = {
  loading: boolean;
  error: unknown | null;
  data: T | null;
}

// TBH just use ReactQuery LMAO xD
export const useFetch = <T>(url: string): FetchStatus<T> => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T|null>(null);

  useEffect(() => {
      const abortController = new AbortController();
      const signal = abortController.signal;
      
      fetch(url)
        .then(res => res.json())
        .then(json => !signal.aborted && setData(json))
        .catch(err => !signal.aborted && setError(err))
        .finally(() => !signal.aborted && setLoading(false));

      return () => { abortController.abort(); };
  }, [url]);

  return { loading, error, data };
};
