import { Table } from "antd";
import Link from "next/link";
import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import DashboardLayout from "../../layout/DashboardLayout";
import { useSelector } from "react-redux";
import { adminSelector } from "../../redux/reducers/admin";
import { useRouter } from "next/router";

const Users = () => {
  const { isAuthenticated } = useSelector(adminSelector);
  const Navigate = useRouter();
  if (!isAuthenticated) {
    Navigate.push("/login");
  }
  return (
    <DashboardLayout>
      <h1>Users</h1>
      <br />
      <Table columns={columns} scroll={{ x: "max-content" }} />
    </DashboardLayout>
  );
};

export default Users;

export const columns = [
  {
    title: "S/N",
    hidden: true,
    width: 70,
    render: (text, record, index) => index + 1,
  },
  {
    title: "Name",
    dataIndex: "username",
    key: "username",
    width: 300,
    render: (text, record) => (
      <p>
        <b>{text.substring(0, 20)}</b>
      </p>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (text) => <p>{text.name}</p>,
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    width: 300,
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (text) => <b>${text && text.toLocaleString()}</b>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "View",
    render: (_) => (
      <Link href={`/admin`}>
        <FaEllipsisH style={{ cursor: "pointer" }} />
      </Link>
    ),
  },
];
