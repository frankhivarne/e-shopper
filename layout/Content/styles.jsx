import styled from "styled-components";

export default styled.div`
  padding: 20px 180px 100px;
  margin-top: 80px;
  position: relative;
  background: transparent;
  width: 100%;
  min-height: calc(100vh - 80px);


  @media screen and (max-width:1200px){
    padding: 20px 24px 100px;
  }

  @media screen and (max-width: 425px) {
    margin-top: 100px;
  }
`;
