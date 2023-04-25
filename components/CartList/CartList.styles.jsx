import styled from "styled-components";

export default styled.div`
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
