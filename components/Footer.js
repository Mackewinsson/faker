import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  background-color: #343a40 !important;
  border-top: 1px solid black;
  padding-top: 20px;
  color: white;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Permiso Faker 😈</p>{" "}
    </StyledFooter>
  );
};

export default Footer;
