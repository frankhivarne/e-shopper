/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Container from "./CartList.styles";
import { handleRemoveFromCart } from "../../redux/reducers/cart";

const CartList = (props) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <div className="web">
        <div className="title">{props?.title?.substring(0, 22)}</div>
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
