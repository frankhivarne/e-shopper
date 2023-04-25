import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import styled from "styled-components";

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

const Container = styled.div`
  width: 100%;
  padding: 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  .icon {
    color: #f6a20a;
    font-size: 5rem;
  }

  p {
    color: #000;
    text-align: center;
  }

  .btn {
    padding: 0.25rem 4rem;
    background: #f6a20a;
    color: #fff;
    border: 0;
    border-radius: 5px;
    cursor: pointer;

    :hover {
      color: #fff;
      opacity: 0.8;
    }
  }
`;
