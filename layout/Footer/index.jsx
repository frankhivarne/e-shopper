import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "./styles";

const Footer = () => {
  return (
    <Container>
      <div className="social_icons_wrapper">
        <FaFacebook className="icon" />
        <FaTwitter className="icon" />
        <FaInstagram className="icon" />
        <FaLinkedin className="icon" />
      </div>
      SHOPPER © 2023 All Rights Reserved.
    </Container>
  );
};

export default Footer;
