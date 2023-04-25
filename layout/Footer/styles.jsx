import styled from "styled-components";

export default styled.div`
  padding: 20px 180px;
  background: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid #bdbdbd4a;

  @media screen and (max-width: 768px) {
    padding: 20px 24px;
  }

  .social_icons_wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;

    .icon {
      font-size: 1.5rem;
      cursor: pointer;

      @media screen and (max-width: 425px) {
        font-size: 1.2rem;
      }
    }
  }
`;
