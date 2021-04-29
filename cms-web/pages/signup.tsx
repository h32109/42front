import React from "react";
import SignupContainer from "../components/SignupContainer";

const Signup = ({ id }) => {
  return <SignupContainer>Login {id}</SignupContainer>;
};

Signup.getInitialProps = async context => {
  return { tag: context.query.tag };
};

export default Signup;
