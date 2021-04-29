import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from "@emotion/styled";
import Introfacebook from "../components/LoginContainer/IntroFacebook";
import Signin from "../components/LoginContainer/Signin";


export const LoginLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  // background-color: #f0f2f5;
  padding-top: 15%;
`;

const Login = () => {
  return (
    <LoginLayout>
      <div style={{ display: "flex", marginLeft: "auto", marginRight: "auto" }}>
        <Introfacebook />
        <Signin />
      </div>
    </LoginLayout>
  );
};

export default Login;
