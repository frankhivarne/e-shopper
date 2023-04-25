/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Index = (props) => {
  return (
    <Container>
      <Navbar />
      <div className="content_container">{props.children}</div>
    </Container>
  );
};

export default Index;

const Container = styled.div`
  .content_container {
    margin-top: 2.5em;
    padding: 0 1.5rem;
  }

  position: relative;
  left: 250px;
  width: calc(100% - 250px);
  height: -webkit-calc(100%);
  height: -moz-calc(100%);
  min-height: calc(100vh);
  border-left: 3px solid #fbf9fe;

  @media screen and (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;
