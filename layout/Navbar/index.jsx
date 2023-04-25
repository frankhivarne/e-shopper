/* eslint-disable @next/next/no-img-element */
// import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
// import Image from "next/image";
// import Link from "next/link";
import React from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/reducers/cart";
import { Searchbar } from "../../reusables";
import { AppRoutes } from "../../utils/constants";
import Container, { NavLink } from "./styles";

const Navbar = ({ toggleSideBar }) => {
  const shopMenu = (
    <Menu
      items={[
        {
          key: "1",
          label: <NavLink href={AppRoutes.products}>All Products</NavLink>,
        },
        {
          key: "5",
          label: <NavLink href={AppRoutes.productShoes}>Shoes</NavLink>,
        },
        {
          key: "3",
          label: (
            <NavLink href={AppRoutes.productElectronics}>Electronics</NavLink>
          ),
        },
        {
          key: "4",
          label: <NavLink href={AppRoutes.productFurniture}>Furniture</NavLink>,
        },
        {
          key: "2",
          label: <NavLink href={AppRoutes.productClothes}>Clothes</NavLink>,
        },
        {
          key: "6",
          label: <NavLink href={AppRoutes.productOthers}>Others</NavLink>,
        },
      ]}
    />
  );
  const accountMenu = (
    <Menu
      items={[
        {
          key: "1",
          label: <NavLink href={AppRoutes.cart}>Cart</NavLink>,
        },
        {
          key: "2",
          label: <NavLink href={AppRoutes.checkout}>Checkout</NavLink>,
        },
        {
          key: "3",
          label: <NavLink href={AppRoutes.account}>My Account</NavLink>,
        },
      ]}
    />
  );
  const { yourCart } = useSelector(cartSelector);
  return (
    <>
      <Container>
        <NavLink href={AppRoutes.home}>
          <img src="/logo.png" alt="logo" />
        </NavLink>
        <div className="nav_menu">
          <NavLink href={AppRoutes.home}>Home</NavLink>
          {/* <NavLink href={AppRoutes.about}>About</NavLink> */}
          <Dropdown overlay={shopMenu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Categories <FaChevronDown />
              </Space>
            </a>
          </Dropdown>
          <Dropdown overlay={accountMenu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                My Account <FaChevronDown />
              </Space>
            </a>
          </Dropdown>
          <div className="cart_group">
            <NavLink href={AppRoutes.cart}>Cart 🛒</NavLink>
            {yourCart?.length > 0 && (
              <div className="indicator">{yourCart?.length}</div>
            )}
          </div>
          {/* <NavLink href={AppRoutes.blog}>Blog</NavLink>
          <NavLink href={AppRoutes.contact}>Contact</NavLink> */}
        </div>
        <Searchbar className="searchbar" />
        <FaBars className="hamburger" onClick={toggleSideBar} />
      </Container>
    </>
  );
};

export default Navbar;
