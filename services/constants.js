import { QueryClient } from "@tanstack/react-query";

export const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BASEURL_DEV
    : process.env.NEXT_PUBLIC_BASEURL_PROD;

export const QUERY_KEY = {
  TOP_PRODUCTS: "TOP_PRODUCTS",
  RECOMMENDED_PRODUCTS: "RECOMMENDED_PRODUCTS",
  PRODUCT: "PRODUCT",
  PRODUCTS: "PRODUCTS",
};

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity, // to avoid memory leak on server
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });
