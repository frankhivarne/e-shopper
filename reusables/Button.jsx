import React from "react";
import styled, { css } from "styled-components";
import { Spin } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";

const Button = ({
  text,
  icon,
  loading,
  onClick,
  full,
  primary,
  secondary,
  info,
  outline,
  light,
  tertiary,
  tertiaryLight,
  dark,
  loadingColor,
  type = "submit",
  disabled = false,
}) => {
  const antIcon = (
    <Loading3QuartersOutlined
      style={{ fontSize: 24, color: loadingColor ? "#6149cd" : "#fff" }}
      spin
    />
  );
  return (
    <Container
      type={type ? type : ""}
      full={full ? full : undefined}
      primary={primary}
      info={info ? info : undefined}
      secondary={secondary ? secondary : undefined}
      outline={outline ? outline : undefined}
      light={light ? light : undefined}
      tertiary={tertiary ? tertiary : undefined}
      tertiaryLight={tertiaryLight ? tertiaryLight : undefined}
      dark={dark ? dark : undefined}
      onClick={onClick}
      disabled={disabled ? disabled : loading ? true : false}
    >
      {loading ? (
        <Spin indicator={antIcon} />
      ) : text.length > 25 ? (
        `${text?.substring(0, 25)}...`
      ) : (
        text
      )}
      {icon && icon}
    </Container>
  );
};

export default Button;

const Container = styled.button`
  width: ${({ full }) => (full ? "100%" : "200px")};
  height: ${({ full }) => (full ? "2.8rem" : "2.2rem")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: #fff;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.05em;
  cursor: pointer;

  ${(props) => css`
    ${props.primary &&
    css`
      background: linear-gradient(
        90deg,
        #000000 0%,
        #000009 47%,
        #0000009a 100%
      );
      box-shadow: 3.994px 22.651px 57px rgba(97, 73, 205, 0.259);
    `}
    ${props.light &&
    css`
      background: #fff;
      color: #6149cd;
      padding: 0.5rem 1rem !important;
      border-radius: 25px;
      height: 2.5rem !important;
    `}
    ${props.secondary &&
    css`
      background: #f2f0fe;
      color: #6149cd;
      padding: 0.5rem 1rem !important;
      border-radius: 6px;
      height: 2.5rem !important;
    `}
    ${props.tertiary &&
    css`
      background: #6149cd;
      color: #fff;
      padding: 0.5rem 1rem !important;
      border-radius: 6px;
      height: 2.5rem !important;
    `}
    ${props.info &&
    css`
      background: #455afe;
      color: #ffffff;
    `}
    ${props.dark &&
    css`
      background: #939393;
      color: #ffffff;
    `}
    ${props.outline &&
    css`
      border: 1px solid #455afe !important;
      background: transparent;
      color: #455afe;
    `}
    ${props.tertiaryLight &&
    css`
      border: 1px solid #f4f4f4 !important;
      background: #fff;
      color: #6149cd;
    `}
  `}

  :focus {
    outline: none;
  }
  :hover {
    opacity: 0.8;
  }
`;
