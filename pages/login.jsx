import { Checkbox } from "antd";
import Link from "next/link";
import Layout from "../layout";
import { Button, InputField } from "../reusables";
import styled from "styled-components";
import { AppRoutes } from "../utils/constants";

export default function Login() {
  return (
    <Layout
      title="Login"
      content={
        <Container>
          <h1>Login</h1>
          <form>
            <div className="group">
              <p>
                Email <span>*</span>
              </p>
              <InputField full placeholder="Your Email" />
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
              <Checkbox>Remeber Me</Checkbox>
              <Link href={AppRoutes.forgotPassword}>Forgot Password?</Link>
            </div>
            <div className="flex">
              <div>
                Don&apos;t have an account?{" "}
                <span>
                  <Link href={AppRoutes.register}>Click here to Register</Link>
                </span>
              </div>
            </div>
            <Button full primary text="Login" />
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
      justify-content: space-between;

      div {
        font-style: italic;
      }
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
