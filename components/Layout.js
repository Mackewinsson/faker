import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Footer from "./Footer";
import Nav from "./Nav";

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <BodyWrapper>
      <Nav />
      <Container className="d-flex flex-fill h-100 align-items-center justify-content-center">
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
      <Footer />
    </BodyWrapper>
  );
};

export default Layout;
