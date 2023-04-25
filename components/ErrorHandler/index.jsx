import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import Container from "./ErrorHandler.styles";

const ErrorHandler = (props) => {
  return (
    <Container>
      <FaExclamationTriangle className="icon" />
      <div>
        <h2>Something went wrong</h2>
      </div>
      {/* <p>{props?.error?.message}</p> */}
      <br />
      <div
        onClick={() => {
          window.location.reload();
        }}
        className="btn"
      >
        Reset
      </div>
    </Container>
  );
};

export default ErrorHandler;
