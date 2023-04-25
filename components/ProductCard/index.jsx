/* eslint-disable @next/next/no-img-element */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import { useRouter } from "next/router";

const ProductCard = (props) => {
  const router = useRouter();
  const handleClick = (e, id) => {
    e.preventDefault();
    router.push(`/products/${id}`);
  };
  return (
    <Container onClick={(e) => handleClick(e, props?.id)} key={props?.id}>
      <ImageLoader
        // src={`https://picsum.photos/640/480?random=${props?.id}`}
        src={props?.image}
        alt=""
        effect="blur"
        placeholderSrc={"/assets/imagePlaceholder.png"}
      />
      <h3>{props?.title}</h3>
      {/* <h3>${props?.price?.toLocaleString()}</h3> */}
    </Container>
  );
};

export default ProductCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  width: 300px !important;
  background: red;

  h3 {
    text-align: center;
    font-weight: 200;
    font-size: 1.2rem;
    text-transform: uppercase;

    @media screen and (max-width: 968px) {
      font-size: 1.1rem;
    }
  }

  :hover {
    opacity: 0.8;
  }
`;

const ImageLoader = styled(LazyLoadImage)`
  width: 100% !important;
  height: 300px !important;
  object-fit: fill !important;
  transition: all 0.3s ease-in-out;
`;
