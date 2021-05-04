import React from 'react';
//스타일을 어떻게 파일구조를 짜는게 좋을까..
const Signup = ({ id }) => {
  return <div>Login {id}</div>;
};


Signup.getInitialProps = async context => {
  return { tag: context.query.tag };
};