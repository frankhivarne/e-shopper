/* eslint-disable react/prop-types */
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { adminSelector } from "../../redux/reducers/admin";
import { useSelector } from "react-redux";
import Content from "./Content";
import Sidebar from "./Sidebar";

const DashboardLayout = (props) => {
  const router = useRouter();
  const { isAuthenticated } = useSelector(adminSelector);
  const { children } = props;

  if (!isAuthenticated) router.push("/admin/login");
  return (
    isAuthenticated && (
      <Container>
        <Sidebar />
        <Content>{children}</Content>
      </Container>
    )
  );
};

export default DashboardLayout;

const Container = styled.div``;
