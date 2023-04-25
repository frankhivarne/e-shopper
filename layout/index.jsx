import React from "react";
import Head from "./Head";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
import Sidenav from "./Sidenav";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { sidebarSelector, toggleSidebar } from "../redux/reducers/sidebar";
// import Banner from "../components/Banner";

const Layout = (props) => {
  const dispatch = useDispatch();
  const { sidebarActive } = useSelector(sidebarSelector);
  return (
    <Container>
      <Head />
      {sidebarActive && (
        <Sidenav
          showSidebar={sidebarActive}
          handleSidebarClose={() => dispatch(toggleSidebar())}
        />
      )}
      {/* <Banner /> */}
      <Navbar toggleSideBar={() => dispatch(toggleSidebar())} />
      <Content content={props.content} />
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  position: relative;
  width: 100%;
`;
