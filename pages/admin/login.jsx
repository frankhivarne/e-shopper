import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  adminSelector,
  loginError,
  loginLoading,
  loginSuccess,
} from "../../redux/reducers/admin";
import { InputField, Button } from "../../reusables";
import { isEmail } from "../../services/validators";

const Login = () => {
  const userId = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  const pass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, isAuthenticating, authenticationError } =
    useSelector(adminSelector);

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const { email, password } = user;
  const isValidLogin = isEmail(email) && email === userId && password === pass;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    dispatch(loginLoading());
    await new Promise((res) => setTimeout(res, 3000));
    if (isValidLogin) {
      dispatch(loginSuccess());
    }
    if (!isValidLogin) {
      dispatch(loginError());
    }
  };

  if (isAuthenticated) router.push("/admin");
  return (
    !isAuthenticated && (
      <Container>
        <Form onSubmit={handleSubmit}>
          <h1>Admin Login</h1>
          <p>Using your email address</p>
          <br />
          <div className="input__group">
            <p>Your email</p>
            <InputField
              full
              placeholder="johndoe@gmail.com"
              fieldname="email"
              value={email}
              onTextChange={handleChange}
            />
            {submitted && !email && (
              <p className="error-msg">Email is required</p>
            )}
            {submitted && email && !isEmail(email) && (
              <p className="error-msg">Invalid Email</p>
            )}
          </div>
          <div className="input__group">
            <p>Password</p>
            <InputField
              full
              inputType="password"
              placeholder="*********"
              fieldname="password"
              value={password}
              onTextChange={handleChange}
            />
            {submitted && !password && (
              <p className="error-msg">Password is required</p>
            )}
          </div>
          <div className="validation-error">
            {authenticationError && (
              <p
                style={{ fontSize: "0.8rem", margin: 0, padding: 0 }}
                className="error-msg"
              >
                {authenticationError}
              </p>
            )}
          </div>
          <br />
          <Button loading={isAuthenticating} primary text="Sign In" full />
        </Form>
      </Container>
    )
  );
};

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form`
  border: 1px solid #0000004a;
  padding: 2rem;
  border-radius: 10px;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    width: 40%;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
  }

  @media screen and (max-width: 425px) {
    width: 90%;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;
