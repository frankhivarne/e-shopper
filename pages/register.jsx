import { Checkbox } from "antd";
import Link from "next/link";
import Layout from "../layout";
import { Button, InputField } from "../reusables";
import styled from "styled-components";
import { AppRoutes } from "../utils/constants";

export default function Register() {
  return (
    <Layout
      title="Register"
      content={
        <Container>
          <div>
          <h1>Register</h1>
          <p>Complete this form to create your account</p>
          </div>
          <form>
            <div className="group">
              <p>
                Name <span>*</span>
              </p>
              <InputField inputType="text" full placeholder="Your Name" />
            </div>
            <div className="group">
              <p>
                Email <span>*</span>
              </p>
              <InputField inputType="email" full placeholder="Your Email" />
            </div>
            <div className="group">
              <p>
                Password <span>*</span>
              </p>
              <InputField
                full
                inputType="password"
                placeholder="Your Password"
              />
            </div>
            <div className="flex">
              Already have an account?{" "}
              <Link href={AppRoutes.login}>Click here to Login</Link>
            </div>
            <Button full primary text="Register" />
          </form>
        </Container>
      }
    />
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  form {
    padding: 2rem 1.5rem;
    border-radius: 5px;
    border: 1px solid #bdbdbd;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 60%;

    @media screen and (max-width: 425px) {
      width: 100%;
    }

    .flex {
      display: flex;
      gap: 0.2rem;
      font-style: italic;
    }

    p {
      margin: 0;
      paddding: 0;
      font-size: 1.2rem;

      span {
        color: red;
      }
    }
  }
`;
