import styled from "styled-components";

export default styled.div`
  height: max-content;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 2.5fr;
  }

  @media screen and (max-width: 425px) {
    gap: 0rem;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const ImageHero = styled.div`
  width: 100%;
  height: 100%;
  min-height: 200px;
  cursor: pointer;
  background: url("/assets/main_hero.jpeg") no-repeat;
  background-size: 100% 100%;
  background-position: center;
  border-radius: 10px;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 425px) {
    border-radius: 0;
  }
`;

export const CategoriesWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #0000004a;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  span {
    width: 200px;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media screen and (max-width: 425px) {
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 425px) {
    display: flex;
    width: auto;
    flex-direction: row;
    overflow: auto;
    gap: 2rem;
    padding: 0.5rem 1rem;
  }
`;
