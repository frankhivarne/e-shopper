import React from "react";
import useSWR from "swr";

export const useFetch = (route) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `https://api.escuelajs.co/api/v1/${route}`,
    fetcher
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
