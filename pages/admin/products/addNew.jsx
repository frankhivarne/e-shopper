/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styled from "styled-components";
import DashboardLayout from "../../../layout/DashboardLayout";
import { Button, InputField, SelectField, TextArea } from "../../../reusables";
import {
  useCreateProduct,
  useUploadProductImage,
} from "../../../hooks/products";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { adminSelector } from "../../../redux/reducers/admin";
import { useRouter } from "next/router";

const AddNewProduct = () => {
  const [body, setBody] = useState({
    image: "",
    title: "",
    description: "",
    price: "",
    category: "",
    quantity: "",
  });
  const [submitted, setSubmmited] = useState(false);
  const [imageData, setImageData] = useState({ image: "", blobUrl: "" });
  const { blobUrl, path } = imageData;
  const { image, title, description, price, category, quantity } = body;

  const { mutate, isSuccess, isError, isLoading, data } =
    useUploadProductImage();
  const {
    mutate: createProduct,
    isLoading: createProductLoading,
    isSuccess: createProductSuccess,
    isError: createProductError,
  } = useCreateProduct();

  const handleUploadImage = (e) => {
    e.preventDefault();
    if (path) {
      const formData = new FormData();
      formData.append("image", path);
      mutate(formData);
    }
  };

  if (isSuccess && image === "") {
    setBody({ ...body, image: data.data });
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setBody({ ...body, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmmited(true);
    if (title && description && price && image && quantity && category) {
      createProduct(body);
    }
  };

  const delay = async () => {
    await new Promise((res) => setTimeout(res, 5000));
  };

  if (createProductSuccess) {
    toast.success(<span>Product has been succesfully created!</span>, {
      toastId: "create-product",
    });
    delay();
    window.location.reload();
  }
  const { isAuthenticated } = useSelector(adminSelector);
  const Navigate = useRouter();
  if (!isAuthenticated) {
    Navigate.push("/login");
  }
  return (
    <DashboardLayout>
      <h1>Add New Products</h1> <br />
      <p>
        Complete the fields below to create a new product. <br />
        <span style={{ color: "red" }}>
          uploading the product image first. Ensure the image is in PNG/JPG/JPEG
          format Start by
        </span>
      </p>
      <Form onSubmit={handleSubmit}>
        <div className="input_group">
          <label htmlFor="">
            Product Image<span className="astericks">*</span>
          </label>
          {blobUrl && (
            <img
              style={{ width: "200px", height: "100px", margin: "1rem 0" }}
              src={blobUrl}
              alt=""
            />
          )}
          {!image && (
            <>
              <InputField
                onTextChange={(e) =>
                  setImageData({
                    ...imageData,
                    path: e.target.files[0],
                    blobUrl: URL.createObjectURL(e.target.files[0]),
                  })
                }
                inputType="file"
                full
                accept="image/*"
              />
              <Button
                onClick={handleUploadImage}
                loading={isLoading}
                disabled={!path}
                text="Upload Image"
                primary
                type="button"
              />
            </>
          )}
        </div>
        {isSuccess && (
          <p style={{ color: "green" }}>
            Image Uploaded! Proceed to filling the remaining Product imformation
          </p>
        )}
        {isError && <p className="error-msg">Something went wrong</p>}
        <br />
        <hr />
        <br />
        <div className="flex_group">
          <div className="input_group">
            <label htmlFor="">
              Name<span className="astericks">*</span>
            </label>
            <InputField
              fieldname="title"
              onTextChange={handleChange}
              value={title}
              full
              placeholder="Name e.g. Nike Airforce 1 Sneakers"
            />
            {submitted && !title && <p className="error-msg">Required</p>}
          </div>
          <div className="input_group">
            <label htmlFor="">
              Category<span className="astericks">*</span>
            </label>
            <SelectField
              full
              placeholder="[-Select Category-]"
              onValueChange={(e) => {
                setBody({ ...body, category: e.target.value });
              }}
              data={[
                { value: "Shoe", label: "Shoes" },
                { value: "Cloth", label: "Clothes" },
                { value: "Electronics", label: "Electronics" },
                { value: "Furniture", label: "Furniture" },
                { value: "Others", label: "Others" },
              ]}
            />
            {submitted && !category && <p className="error-msg">Required</p>}
          </div>
        </div>
        <div className="flex_group">
          <div className="input_group">
            <label htmlFor="">
              Price($)<span className="astericks">*</span>
            </label>
            <InputField
              fieldname="price"
              onTextChange={handleChange}
              value={price}
              inputType="number"
              full
              placeholder="Product Price e.g. 500"
            />
            {submitted && !price && <p className="error-msg">Required</p>}
          </div>
          <div className="input_group">
            <label htmlFor="">
              Quantity<span className="astericks">*</span>
            </label>
            <InputField
              fieldname="quantity"
              onTextChange={handleChange}
              value={quantity}
              inputType="number"
              full
              placeholder="Quantity In Stock e.g. 100"
            />
            {submitted && !quantity && <p className="error-msg">Required</p>}
          </div>
        </div>
        <div className="input_group">
          <label htmlFor="">
            Description<span className="astericks">*</span>
          </label>
          <TextArea
            fieldname="description"
            onTextChange={handleChange}
            value={description}
            full
            placeholder="Product Description"
          />
          {submitted && !description && <p className="error-msg">Required</p>}
        </div>
        <br />
        {createProductError && (
          <p className="error-msg">Something went wrong </p>
        )}
        {!createProductSuccess && (
          <Button
            loading={createProductLoading}
            disabled={!image}
            text="Create Product"
            full
            primary
          />
        )}
      </Form>
    </DashboardLayout>
  );
};

export default AddNewProduct;

const Form = styled.form`
  margin: 2rem 0;
  width: 50%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  .flex_group {
    width: 100%;
    display: flex;
    gap: 1rem;

    @media screen and (max-width: 425px) {
      flex-direction: column;
      gap: 0;
    }
  }

  .input_group {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 1rem;
  }

  label {
    font-size: 1rem;
    font-weight: 500;
  }

  .astericks {
    color: red;
  }
`;
