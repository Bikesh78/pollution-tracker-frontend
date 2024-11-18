import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [res, setRes] = useState<AxiosResponse<T>>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    axios
      .get(url, { signal })
      .then((res: AxiosResponse<T>) => setRes(res))
      .catch((err: AxiosError) => setError(err))
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, []);

  return { res, isLoading, error };
};
