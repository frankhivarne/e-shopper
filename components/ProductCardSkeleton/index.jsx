import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const ProductCardSkeleton = () => {
  return (
    <Container>
      <Skeleton width={"100%"} height={300} />
      <Skeleton width={"100%"} height={20} />
      <Skeleton width={"100%"} height={20} />
    </Container>
  );
};

export default ProductCardSkeleton;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
