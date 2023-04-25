/* eslint-disable @next/next/no-img-element */
import { Space } from "antd";
import Link from "next/link";
import { FaEllipsisH } from "react-icons/fa";

export const columns = [
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
    title: "View",
    render: (_, record) => (
      <Link href={`/admin/products/${record.id}`}>
        <FaEllipsisH
          style={{ cursor: "pointer" }}
          onClick={() => sessionStorage.setItem("productId", record?.id)}
        />
      </Link>
    ),
  },
];
