import React from 'react';
import SignupContainer from "../components/SignupContainer";
//스타일을 어떻게 파일구조를 짜는게 좋을까..
const Signup = ({ id }) => {
  return <SignupContainer>Login {id}</SignupContainer>;
};

Signup.getInitialProps = async context => {
  return { tag: context.query.tag };
};

export default Signup;