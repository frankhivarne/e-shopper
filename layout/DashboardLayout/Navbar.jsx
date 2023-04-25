/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaBell } from "react-icons/fa";
import styled from "styled-components";
import { Searchbar } from "../../reusables";

const Navbar = () => {
  const date = new Date().toLocaleDateString()
  return (
    <Container>
      <h2>Welcome Admin</h2>
      <Searchbar className="searchbar" />
      <div className="group">
        <NotificationIcon>
          <FaBell className="icon" />
        </NotificationIcon>
        <UserDetails>
          <img src="/assets/avatar.png" alt="Profile pics" />
          <h3>Admin</h3>
        </UserDetails>
      </div>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  left: 250px;
  height: 64px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #0000004a;
  z-index: 999;
  padding: 0 2rem;

  .group {
    display: flex;
    gap: 2rem;
  }

  @media screen and (max-width: 450px) {
    width: 100vw;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    left: 0;
    padding: 0 1rem;

    .searchbar {
      display: none;
    }
  }

  h2 {
    font-weight: 400;
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.005em;
    color: var(--primary-text-color);
  }
`;

const NotificationIcon = styled.div`
  padding: 0.5em;
  display: flex;
  aling-items: center;
  background: var(--primary-color);
  cursor: pointer;
  border-radius: 4px;

  .icon {
    font-size: 1.3em;
    color: var(--light-text-color);
  }
`;

const UserDetails = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 120%;
    color: var(--primary-text-color);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
