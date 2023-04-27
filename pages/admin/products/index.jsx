/* eslint-disable @next/next/no-img-element */
import { Space, Table } from "antd";
import React from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import styled from "styled-components";
import { Button } from "../../../reusables";
import Link from "next/link";
import useSWR from "swr";
import { baseURL } from "../../../services/constants";
import { useSelector } from "react-redux";
import { adminSelector } from "../../../redux/reducers/admin";
import { useRouter } from "next/router";
import { useDeleteProductQuery } from "../../../hooks/products";

const Products = () => {
  const { data, isLoading, isError } = useFetch();
  const {
    mutate,
    isLoading: isDeleteLoading,
    isSuccess: isDeleteSuccess,
  } = useDeleteProductQuery();

  const { isAuthenticated } = useSelector(adminSelector);
  const Navigate = useRouter();
  if (!isAuthenticated) {
    Navigate.push("/login");
  }

  if (isDeleteSuccess) {
    window.location.reload();
  }

  const columns = [
    {
      title: "S/N",
      hidden: true,
      width: 70,
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      width: 300,
      render: (text, record) => (
        <Space>
          <img
            src={record.image}
            alt={text}
            style={{ width: "60px", height: "35px" }}
          />
          <b>{text.substring(0, 20)}</b>
        </Space>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: 100,
      render: (text) => <Space>{text}</Space>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 300,
      render: (text) => <Space>{text.substring(0, 60) + "..."}</Space>,
    },
    {
      title: "Product Id",
      dataIndex: "id",
      key: "id",
      render: (text) => <p>Sp_{text}</p>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => <b>${text && text.toLocaleString()}</b>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text) => <Space>{text}</Space>,
    },
    {
      title: "Actions",
      render: (_, record) => (
        <Space>
          <Link href={`/admin/products/${record.id}`}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => sessionStorage.setItem("productId", record?.id)}
            >
              View
            </div>
          </Link>
          <div
            onClick={() => mutate(record.id)}
            style={{ color: "red", cursor: "pointer" }}
          >
            {isDeleteLoading ? "Deleting..." : "Delete"}
          </div>
        </Space>
      ),
    },
  ];
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
