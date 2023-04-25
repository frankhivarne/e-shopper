import React from "react";
import Layout from "../layout";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { Pagination } from "antd";
import useSWR from "swr";
import Hero from "../components/Hero";
import { Button } from "../reusables";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { AppRoutes } from "../utils/constants";
import { baseURL } from "../services/constants";

export default function Home() {
  const { data, isLoading, isError } = useFetchTopProducts();
  const {recommendedProducts} = useFetchRecommendedProducts()
  const [all, setAll] = React.useState(1);
  return (
    <Layout
      title="Home"
      content={
        <>
          <Container>
            {isError ||
              (isLoading && (
                <ProductContainer>
                  {Array.from({ length: 8 }, (index) => {
                    return <ProductCardSkeleton key={index} />;
                  })}
                </ProductContainer>
              ))}
            {data && (
              <>
                <Hero />
                <HeaderBar>
                  <h2>Top Products</h2>
                  <Link href={AppRoutes.products} legacyBehavior>
                    <span>
                      See More
                      <FaArrowRight />
                    </span>
                  </Link>
                </HeaderBar>
                <ProductContainer>
                  {data
                    ?.slice((all - 1) * 4, (all - 1) * 4 + 4)
                    .map((product, index) => {
                      return <ProductCard key={index} {...product} />;
                    })}
                </ProductContainer>
                <HeaderBar>
                  <h2>Recommended for you</h2>
                  <Link href={AppRoutes.productClothes} legacyBehavior>
                    <span>
                      See More
                      <FaArrowRight />
                    </span>
                  </Link>
                </HeaderBar>
                <ProductContainer>
                  {recommendedProducts
                    ?.slice((all - 1) * 4, (all - 1) * 4 + 4)
                    .map((product, index) => {
                      return <ProductCard key={index} {...product} />;
                    })}
                </ProductContainer>
              </>
            )}
          </Container>
        </>
      }
    />
  );
}

const useFetchTopProducts = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `${baseURL}/ecommerce/product/popular`,
    fetcher
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

const useFetchRecommendedProducts = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `${baseURL}/ecommerce/product/recommended`,
    fetcher
  );
  return {
    recommendedProducts: data,
  };
};

const Container = styled.div``;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 425px) {
    display: flex;
    gap: 1rem;
    overflow: auto;
  }
`;

const HeaderBar = styled.div`
  display: flex;
  margin: 1.5rem 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: 0.5px solid #000;
  border-top: 0.5px solid #000;

  span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 425px) {
    h2 {
      font-size: 1rem;
    }
  }
`;
