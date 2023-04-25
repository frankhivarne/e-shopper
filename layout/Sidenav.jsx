import React from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import { AppRoutes } from "../utils/constants";
import { useSelector } from "react-redux";
import { cartSelector } from "../redux/reducers/cart";

const Sidebar = ({ showSidebar, handleSidebarClose }) => {
  const [show, setShow] = React.useState(false);
  const { yourCart } = useSelector(cartSelector);
  return (
    <Container showSidebar={showSidebar}>
      <div className="nav_wrapper">
        <CancelButton onClick={handleSidebarClose} />
        <NavItem onClick={handleSidebarClose} href={AppRoutes.home}>
          Home
        </NavItem>
        <NavItem onClick={handleSidebarClose} href={AppRoutes.about}>
          About
        </NavItem>
        <div className="dropdown_nav">
          Shop
          {show ? (
            <FaChevronUp onClick={() => setShow(!show)} />
          ) : (
            <FaChevronDown onClick={() => setShow(!show)} />
          )}
        </div>
        {show && (
          <>
            {[
              { text: "All Products", link: AppRoutes.products },
              { text: "Clothes", link: AppRoutes.productClothes },
              { text: "Electronics", link: AppRoutes.productElectronics },
              { text: "Furniture", link: AppRoutes.productFurniture },
              { text: "Shoes", link: AppRoutes.productShoes },
              { text: "Others", link: AppRoutes.productOthers },
            ].map((nav, index) => {
              return (
                <NavItem
                  key={index}
                  onClick={handleSidebarClose}
                  href={nav?.link}
                >
                  &nbsp;&nbsp;&nbsp;{nav?.text}
                </NavItem>
              );
            })}
          </>
        )}
        <NavItem onClick={handleSidebarClose} href={AppRoutes.account}>
          My Account
        </NavItem>
        <NavItem onClick={handleSidebarClose} href={AppRoutes.checkout}>
          Checkout
        </NavItem>
        <div className="cart_group">
          <NavItem onClick={handleSidebarClose} href={AppRoutes.cart}>
            Cart
          </NavItem>
          {yourCart?.length > 0 && (
            <div className="indicator">{yourCart?.length}</div>
          )}
        </div>
        <NavItem onClick={handleSidebarClose} href={AppRoutes.blog}>
          Blog
        </NavItem>
        <NavItem onClick={handleSidebarClose} href={AppRoutes.contact}>
          Contact
        </NavItem>
      </div>
      <div className="overlay" onClick={handleSidebarClose} />
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh !important;
  width: 100%;
  background: transparent;
  display: flex;
  z-index: 100;

  .nav_wrapper {
    position: absolute;
    right: 0;
    top: 0;
    background: #262525;
    display: flex;
    width: 250px;
    flex-direction: column;
    row-gap: 1.3rem;
    padding: 5rem 2rem 0;
    height: 100vh;
  }

  .dropdown_nav {
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 16px;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 2rem;

    :hover {
      color: #0ae73f;
    }
  }

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: calc(100vw - 250px);
    background: linear-gradient(
      99.11deg,
      rgba(49, 66, 79, 0.71) 0.83%,
      rgba(10, 11, 12, 0.64) 100%
    );
  }

  @media screen and (min-width: 769px) {
    display: ${({ showSidebar }) => (showSidebar ? "flex" : "none")};
  }
`;

const NavItem = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 16px;
  color: #ffffff;

  :hover {
    color: #0ae73f;
  }
`;

const CancelButton = styled(FaTimes)`
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  color: #fff;

  :hover {
    transform: scale(1.1);
  }
`;
