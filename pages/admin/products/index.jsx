import { Table } from "antd";
import React from "react";
import { products } from "../../../reusables/products";
import { columns } from "../../../reusables/table";
import DashboardLayout from "../../../layout/DashboardLayout";
import styled from "styled-components";
import { Button } from "../../../reusables";
import Link from "next/link";
import useSWR from "swr";
import { baseURL } from "../../../services/constants";
import { useSelector } from "react-redux";
import { adminSelector } from "../../../redux/reducers/admin";
import { useRouter } from "next/router";

const Products = () => {
  const { data, isLoading, isError } = useFetch();
  const { isAuthenticated } = useSelector(adminSelector);
  const Navigate = useRouter();
  if (!isAuthenticated) {
    Navigate.push("/login");
  }
  return (
    <DashboardLayout>
      <HeaderWrapper>
        <h1>Products</h1>
        <Link href={"/admin/products/addNew"}>
          <Button primary text="Add New Products" />
        </Link>
      </HeaderWrapper>
      <br />
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: "max-content" }}
      />
    </DashboardLayout>
  );
};

const useFetch = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `${baseURL}/ecommerce/product/all-products`,
    fetcher
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default Products;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 1rem;
    cursor: pointer;
  }
`;
