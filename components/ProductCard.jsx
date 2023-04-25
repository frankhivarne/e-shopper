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
        src={props?.image}
        alt={props?.title}
        effect="blur"
        placeholderSrc={"/assets/imagePlaceholder.png"}
      />
      <h3>{props?.title}</h3>
      <h3 className="bold">$ {props?.price?.toLocaleString()}.00</h3>
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

  h3 {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 100%;
    text-transform: capitalize;

    @media screen and (max-width: 968px) {
      font-size: 1rem;
    }
  }

  .bold {
    font-weight: 500;
  }

  :hover {
    opacity: 0.8;
  }
`;

const ImageLoader = styled(LazyLoadImage)`
  width: 100%;
  height: 300px;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 425px) {
    height: 200px;
    min-width: 300px;
  }
`;
