import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QUERY_KEY, baseURL } from "../services/constants";

const useGetTopProductsQuery = () => {
  return useQuery(
    [QUERY_KEY.TOP_PRODUCTS],
    async () => {
      const response = await axios.get(`${baseURL}/ecommerce/product/popular`);
      return response.data.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

const useUploadProductImage = () => {
  const mutation = useMutation((requestData) =>
    axios.post(`${baseURL}/ecommerce/product/upload-image`, requestData)
  );

  return mutation;
};

const useCreateProduct = () => {
  const mutation = useMutation((requestData) =>
    axios.post(`${baseURL}/ecommerce/product/single`, requestData)
  );

  return mutation;
};

export { useGetTopProductsQuery, useUploadProductImage, useCreateProduct };
