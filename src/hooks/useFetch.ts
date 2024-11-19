import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [res, setRes] = useState<AxiosResponse<T>>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();
  const [fetchCounter, setRefetchCounter] = useState(0);

  const refetch = () => setRefetchCounter((prev) => prev + 1);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    axios
      .get(url, { signal })
      .then((res: AxiosResponse<T>) => {
        setRes(res);
        setIsLoading(false);
      })
      .catch((err: AxiosError) => {
        if (axios.isAxiosError(error)) return;
        setError(err);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [fetchCounter, url]);

  return { res, isLoading, error, refetch };
};
