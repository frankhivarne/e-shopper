import { Table } from "antd";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";
import DashboardLayout from "../../layout/DashboardLayout";
import { columns } from "../../reusables/table";
import { baseURL } from "../../services/constants";
import useSWR from "swr";

const Admin = () => {
  const { data, isLoading, isError } = useFetch();
  return (
    <DashboardLayout>
      <h1>Overview</h1>
      <CardContainer>
        <Card>
          <p>Total Products</p>
          <h1>{data?.length}</h1>
        </Card>
        <Card>
          <p>Total Users</p>
          <h1>0</h1>
        </Card>
        <Card>
          <p>Total Revenue</p>
          <h1>$0.00</h1>
        </Card>
        <Card>
          <p>Total Carts</p>
          <h1>0</h1>
        </Card>
      </CardContainer>
      <br />
      <TableWrapper>
        <div className="header">
          <h2>Products</h2>
          <Link href={"/admin/products"}>
            <span>
              See All Products <FaArrowRight />
            </span>
          </Link>
        </div>
        <Table
          columns={columns}
          dataSource={data?.slice(0, 5)}
          pagination={false}
          scroll={{ x: "max-content" }}
        />
      </TableWrapper>
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

export default Admin;

const CardContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  height: 200px;
  width: 100%;
  background: #000;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  gap: 1rem;
  flex-direction: column;
  color: #fff;

  p {
    font-size: 1.5rem;
    line-height: 100%;
  }

  h1 {
    font-size: 3.5rem;
    color: #fff;
  }

  @media screen and (max-width: 425px) {
    height: 100px;

    p {
      font-size: 1rem;
      line-height: 100%;
    }

    h1 {
      font-size: 2.5rem;
      color: #fff;
    }
  }
`;

const TableWrapper = styled.div`
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 1rem;
    cursor: pointer;
  }
`;
