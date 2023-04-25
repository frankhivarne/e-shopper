/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { handleRemoveFromCart } from "../redux/reducers/cart";

const CartList = (props) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <div className="web">
        <Link href={`/products/${props.id}`} className="title">
          {props?.title?.substring(0, 22)}
        </Link>
        <img src={props?.image} alt="Product" />
        <div className="amount">${props?.price?.toLocaleString()}</div>
        <div className="title">{props?.quantity}</div>
        <div className="subtotal">${props?.subTotal?.toLocaleString()}</div>
        <FaTimesCircle
          className="close-btn"
          onClick={() => dispatch(handleRemoveFromCart(props?.id))}
        />
      </div>
      <div className="mobile">
        <img src={props?.image} alt="Product" />
        <div className="details">
          <div className="title">
            <b>{props?.title?.substring(0, 22)}</b>
          </div>
          <div className="flex">
            <div className="qty">
              Price:{" "}
              <b>
                ${props?.price} x {props?.quantity}
              </b>
            </div>
            <div className="amount">
              Subtotal: <b>${props?.subTotal?.toLocaleString()}</b>
            </div>
          </div>
        </div>
        <FaTimesCircle
          className="close-btn btn"
          onClick={() => dispatch(handleRemoveFromCart(props?.id))}
        />
      </div>
    </Container>
  );
};

export default CartList;

const Container = styled.div`
  font-weight: 300;
  font-size: 1.1rem;
  border-left: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;

  @media screen and (max-width: 425px) {
    font-size: 1rem;
  }

  .mobile {
    position: relative;
    padding: 0.5rem;
    @media screen and (min-width: 426px) {
      display: none;
    }
    display: flex;
    gap: 1rem;

    img {
      width: 80px;
      height: 40px;
      object-fit: fill;
    }

    .qty,
    .amount {
      font-size: 0.7em;
    }

    .btn {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }

  .web {
    padding: 0.5rem 1rem;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr 0.5fr;
    align-items: center;

    @media screen and (max-width: 425px) {
      display: none;
    }
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  .close-btn {
    font-size: 1.1rem;
    cursor: pointer;

    :hover {
      color: red;
      opacity: 0.8;
    }
  }
`;
